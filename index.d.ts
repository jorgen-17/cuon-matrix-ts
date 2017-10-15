declare module 'vec3' {
	export class Vec3 {
	    elements: Float32Array;
	    constructor(x?: number, y?: number, z?: number);
	    normalize(): this;
	    add(other: Vec3): this;
	    x: number;
	    y: number;
	    z: number;
	}

}
declare module 'vec4' {
	export class Vec4 {
	    elements: Float32Array;
	    constructor(x?: number, y?: number, z?: number, w?: number);
	    x: number;
	    y: number;
	    z: number;
	    w: number;
	}

}
declare module 'mat4' {
	import { Vec3 } from 'vec3';
	import { Vec4 } from 'vec4';
	export class Mat4 {
	    elements: Float32Array;
	    constructor(source?: Mat4 | null);
	    setIdentity(): this;
	    set(src: any): this | undefined;
	    multiply(other: any): this;
	    multiplyVector3(pos: any): Vec3;
	    multiplyVector4(pos: any): Vec4;
	    transpose(): this;
	    setInverseOf(other: any): this;
	    invert(): this;
	    setOrtho(left: any, right: any, bottom: any, top: any, near: any, far: any): this;
	    ortho(left: any, right: any, bottom: any, top: any, near: any, far: any): this;
	    setFrustum(left: any, right: any, bottom: any, top: any, near: any, far: any): this;
	    frustum(left: any, right: any, bottom: any, top: any, near: any, far: any): this;
	    setPerspective(fovy: any, aspect: any, near: any, far: any): this;
	    perspective(fovy: any, aspect: any, near: any, far: any): this;
	    setScale(x: any, y: any, z: any): this;
	    scale(x: any, y: any, z: any): this;
	    setTranslate(x: any, y: any, z: any): this;
	    translate(x: any, y: any, z: any): this;
	    setRotate(angle: any, x: any, y: any, z: any): this;
	    rotate(angle: any, x: any, y: any, z: any): this;
	    setLookAt(eyeX: any, eyeY: any, eyeZ: any, centerX: any, centerY: any, centerZ: any, upX: any, upY: any, upZ: any): this;
	    lookAt(eyeX: any, eyeY: any, eyeZ: any, centerX: any, centerY: any, centerZ: any, upX: any, upY: any, upZ: any): this;
	    dropShadow(plane: any, light: any): this;
	    dropShadowDirectionally(normX: any, normY: any, normZ: any, planeX: any, planeY: any, planeZ: any, lightX: any, lightY: any, lightZ: any): this;
	    private concat(other);
	}

}
declare module 'vec2' {
	export class Vec2 {
	    elements: Float32Array;
	    constructor(x?: number, y?: number);
	    add(other: Vec2): this;
	    x: number;
	    y: number;
	}

}
declare module 'cuon-matrix-ts' {
	import { Mat4 } from 'mat4';
	import { Vec4 } from 'vec4';
	import { Vec3 } from 'vec3';
	import { Vec2 } from 'vec2';
	export { Mat4, Vec4, Vec3, Vec2 };

}
