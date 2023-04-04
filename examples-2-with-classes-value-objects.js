/* Examples of Value objects as defined in DDD, using classes */

class Vector2d {
    x; y;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    getX(){ return this.x; }
    getY(){ return this.y; }

    mul(s) { 
        return new Vector2d(this.x * s, this.y * s); 
    }
}

class Point2d {
    x; y;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    getX(){ return this.x; }
    getY(){ return this.y; }

    add(v) { 
        return new Point2d(this.x + v.getX(), this.y + v.getY());
    }
}

let p1 = new Point2d(0,0);

let p2 = p1.add(new Vector2d(1,2));

console.log(p1);
console.log(p2);


