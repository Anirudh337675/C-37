class Contestant{
    constructor(){

        this.index=null;
        this.distance=0;
        this.name=null;
    }
    
    getCount()
    {
       var contestantCountRef=database.ref("contestantCount")
       contestantCountRef.on("value",function(data){
           contestantCount=data.val();
       })
    }
    updateCount(Count){
        database.ref("/").update({
            contestantCount:Count
        })
    }

    update(){
        var playerIndex="contestants/contestant"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
            
        })
    }
    static getplayerinfo()
    {
       var playerInfo=database.ref("contestants")
       playerInfo.on("value",(data)=>{
           Allcontestants=data.val()
       })
    }
}