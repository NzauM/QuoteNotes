export class Quote {
    public showDetails:boolean;
    constructor(public id:number,public name:string,public author:string,public submittor:string,public date:Date){
        this.showDetails=false;
    }
}
