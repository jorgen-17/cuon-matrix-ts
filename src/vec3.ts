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
        if (length === 0) return new Vec3(0, 1, 0); // fallback to world up
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

    public static scale(v: Vec3, scalar: number)
    {
        return new Vec3(v.x * scalar, v.y * scalar, v.z * scalar);
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
        const x = this.x;
        const y = this.y;
        const z = this.z;

        this.x = y * other.z - z * other.y;
        this.y = z * other.x - x * other.z;
        this.z = x * other.y - y * other.x;

        return this;
    }

    public scale(scalar: number)
    {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;

        return this;
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