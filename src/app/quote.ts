export class Quote {
    public showDetails:boolean;
    constructor(public id:number,public title:string,public name:string,public author:string,public submittor:string,public date:Date,
        public up:number,public down:number ){
        this.showDetails=false;
    }
}
