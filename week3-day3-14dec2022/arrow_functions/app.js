
class Person{

    constructor(msg){
        this.msg = msg;
    }

    // funct1(arr){
    //     return arr.filter(function(ele){
    //         return ele===this.msg;
    //     });
    // }

    funct2 = (arr)=>{
        return arr.filter(ele => ele === this.msg);
    }
}


let p = new Person("manvi");
// console.log(p.funct1(["manvi", "bansal"]));
// console.log(p.funct2(["manvi", "bansal"]));


let f3 = (a=10, b=20, c)=>{
    console.log(a, b, c);
}

f3(100);