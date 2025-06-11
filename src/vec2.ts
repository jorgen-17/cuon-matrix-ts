export class Vec2
{
    public elements: Float32Array;

    constructor(x: number = 0, y: number = 0)
    {
        this.elements = new Float32Array(2);

        this.elements[0] = x;
        this.elements[1] = y;
    }

    public static add(v1: Vec2, v2: Vec2)
    {
        return new Vec2(v1.x + v2.x, v1.y + v2.y);
    }

    public static sub(v1: Vec2, v2: Vec2)
    {
        return new Vec2(v1.x - v2.x, v1.y - v2.y);
    }

    public static scale(v: Vec2, scalar: number)
    {
        return new Vec2(v.x * scalar, v.y * scalar);
    }

    public static negate(v: Vec2)
    {
        return new Vec2(-v.x, -v.y);
    }

    public static cross(v1: Vec2, v2: Vec2)
    {
        return v1.x * v2.y - v1.y * v2.x;
    }

    public static dot(v1: Vec2, v2: Vec2)
    {
        return v1.x * v2.x + v1.y * v2.y;
    }

    // had to use getLength because static length is built-in. 
    public static getLength(v: Vec2)
    {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }

    public static normalize(v: Vec2)
    {
        const length = Vec2.getLength(v);
        return new Vec2(v.x / length, v.y / length);
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

    public add(other: Vec2)
    {
        this.x += other.x;
        this.y += other.y;

        return this;
    }

    public sub(other: Vec2)
    {
        this.x -= other.x;
        this.y -= other.y;

        return this;
    }

    public scale(scalar: number)
    {
        this.x *= scalar;
        this.y *= scalar;

        return this;
    }
   
    public negate()
    {
        this.x = -this.x;
        this.y = -this.y;

        return this;
    }

    public cross(other: Vec2)
    {
        return this.x * other.y - this.y * other.x;
    }

    public dot(other: Vec2)
    {
        return this.x * other.x + this.y * other.y;
    }

    public length()
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public normalize()
    {
        const length = this.length();
        this.x /= length;
        this.y /= length;

        return this;
    }
}