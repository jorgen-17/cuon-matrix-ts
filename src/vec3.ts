// adapted to typescript from https://github.com/yukoba/WebGLBook/blob/master/lib/cuon-matrix.js

export class Vec3
{
    public elements: Float32Array;

    constructor(x: number = 0, y: number = 0, z: number = 0)
    {
        this.elements = new Float32Array(3);

        this.elements[0] = x;
        this.elements[1] = y;
        this.elements[2] = z;
    }

    public static normalize(v: Vec3)
    {
        const length = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
        if (length === 0) return new Vec3(0, 0, 0);
        return new Vec3(v.x / length, v.y / length, v.z / length);
    }

    public static add(v1: Vec3, v2: Vec3)
    {
        return new Vec3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }

    public static sub(v1: Vec3, v2: Vec3)
    {
        return new Vec3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }

    public static cross(v1: Vec3, v2: Vec3)
    {
        return new Vec3(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
    }

    public static dot(v1: Vec3, v2: Vec3) : number
    {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }

    public static scale(v: Vec3, scalar: number)
    {
        return new Vec3(v.x * scalar, v.y * scalar, v.z * scalar);
    }

    public static negate(v: Vec3)
    {
        return new Vec3(-v.x, -v.y, -v.z);
    }

    public static rotate(vector: Vec3, axis: Vec3, angle: number) : Vec3
    {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        // Ensure axis is normalized
        const normalizedAxis = this.normalize(axis);

        // Calculate cross product and dot product
        const crossProduct = Vec3.cross(normalizedAxis, vector);
        const dotProduct = vector.dot(normalizedAxis);

        // Apply Rodrigues' formula: v*cos(θ) + (k×v)*sin(θ) + k*(k·v)*(1-cos(θ))
        return new Vec3(
            vector.x * cos + crossProduct.x * sin + normalizedAxis.x * dotProduct * (1 - cos),
            vector.y * cos + crossProduct.y * sin + normalizedAxis.y * dotProduct * (1 - cos),
            vector.z * cos + crossProduct.z * sin + normalizedAxis.z * dotProduct * (1 - cos)
        );
    }

    public normalize()
    {
        let v = this.elements;
        let c = v[0], d = v[1], e = v[2], g = Math.sqrt(c * c + d * d + e * e);
        if (g)
        {
            if (g === 1)
            {
                return this;
            }
        } else
        {
            v[0] = 0; v[1] = 0; v[2] = 0;
            return this;
        }
        g = 1 / g;
        v[0] = c * g; v[1] = d * g; v[2] = e * g;
        return this;
    }

    public add(other: Vec3)
    {
        this.x += other.x;
        this.y += other.y;
        this.z += other.z;

        return this;
    }

    public sub(other: Vec3)
    {
        this.x -= other.x;
        this.y -= other.y;
        this.z -= other.z;

        return this;
    }
    
    public cross(other: Vec3)
    {
        return new Vec3(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x);
    }

    public scale(scalar: number)
    {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;

        return this;
    }

    public dot(other: Vec3) : number
    {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    // calculate the angle between two vectors in radians
    public angle(other: Vec3) : number
    {
        let result = 0;

        const cross = Vec3.cross(this, other);
        const len = Math.sqrt(cross.x*cross.x + cross.y*cross.y + cross.z*cross.z);
        const dot = this.dot(other);
        result = Math.atan2(len, dot);

        return result;
    }

    public negate() : Vec3
    {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;

        return this;
    }

    // Method to rotate a vector around an arbitrary axis
    // returns a vector that is the result of the rotation
    // Using Euler-Rodrigues Formula
    // Ref.: https://en.wikipedia.org/w/index.php?title=Euler%E2%80%93Rodrigues_formula
    // copied from https://github.com/raysan5/raylib/blob/master/src/raymath.h#L886
    public rotate(axis: Vec3, angle: number) : Vec3
    {
        const result = new Vec3(this.x, this.y, this.z);

        axis = Vec3.normalize(axis);

        angle /= 2.0;
        let a = Math.sin(angle);
        const b = axis.x*a;
        const c = axis.y*a;
        const d = axis.z*a;
        a = Math.cos(angle);
        const w = new Vec3(b, c, d);

        // Vector3CrossProduct(w, v)
        const wv = Vec3.cross(w, this);

        // Vector3CrossProduct(w, wv)
        const wwv = Vec3.cross(w, wv);

        // Vector3Scale(wv, 2*a)
        a *= 2;
        wv.x *= a;
        wv.y *= a;
        wv.z *= a;

        // Vector3Scale(wwv, 2)
        wwv.x *= 2;
        wwv.y *= 2;
        wwv.z *= 2;

        result.x += wv.x;
        result.y += wv.y;
        result.z += wv.z;

        result.x += wwv.x;
        result.y += wwv.y;
        result.z += wwv.z;

        return result;
    }

    public get x(): number
    {
        return this.elements[0];
    }

    public set x(value: number)
    {
        this.elements[0] = value;
    }

    public get y(): number
    {
        return this.elements[1];
    }

    public set y(value: number)
    {
        this.elements[1] = value;
    }

    public get z(): number
    {
        return this.elements[2];
    }

    public set z(value: number)
    {
        this.elements[2] = value;
    }
}