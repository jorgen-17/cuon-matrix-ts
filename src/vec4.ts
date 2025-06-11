// adapted to typescript from https://github.com/yukoba/WebGLBook/blob/master/lib/cuon-matrix.js

export class Vec4
{
    public elements: Float32Array;

    constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 1)
    {
        this.elements = new Float32Array(4);

        this.elements[0] = x;
        this.elements[1] = y;
        this.elements[2] = z;
        this.elements[3] = w;
    }

    public static add(v1: Vec4, v2: Vec4)
    {
        return new Vec4(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z, v1.w + v2.w);
    }

    public static sub(v1: Vec4, v2: Vec4)
    {
        return new Vec4(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z, v1.w - v2.w);
    }

    public static scale(v: Vec4, scalar: number)
    {
        return new Vec4(v.x * scalar, v.y * scalar, v.z * scalar, v.w * scalar);
    }

    public static negate(v: Vec4)
    {
        return new Vec4(-v.x, -v.y, -v.z, -v.w);
    }

    public static dot(v1: Vec4, v2: Vec4)
    {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z + v1.w * v2.w;
    }

    public static getLength(v: Vec4)
    {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z + v.w * v.w);
    }

    public static normalize(v: Vec4)
    {
        const length = Vec4.getLength(v);
        return new Vec4(v.x / length, v.y / length, v.z / length, v.w / length);
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

    public get w(): number
    {
        return this.elements[3];
    }

    public set w(value: number)
    {
        this.elements[3] = value;
    }

    public add(other: Vec4)
    {
        this.x += other.x;
        this.y += other.y;
        this.z += other.z;
        this.w += other.w;

        return this;
    }

    public sub(other: Vec4)
    {
        this.x -= other.x;
        this.y -= other.y;
        this.z -= other.z;
        this.w -= other.w;

        return this;
    }

    public scale(scalar: number)
    {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        this.w *= scalar;

        return this;
    }

    public negate()
    {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        this.w = -this.w;

        return this;
    }

    public dot(other: Vec4)
    {
        return this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w;
    }

    public length()
    {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    public normalize()
    {
        const length = this.length();
        this.x /= length;
        this.y /= length;
        this.z /= length;
        this.w /= length;

        return this;
    }
}