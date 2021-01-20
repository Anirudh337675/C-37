class Question
{
    constructor(){

        this.question=createInput("Name")  
        this.input1=createInput("Name")  

       
        this.option1=createElement("h3")
        this.option2=createElement("h3")
    }
    hide(){
        this.input1.hide();
       
        
    }
    display(){
        
        var title=createElement("h2")
        title.html("MY QUIZ")
        title.position(350,10)
       
        this.question.html("QUESTION: What starts and ends with the letter 'E' , but has only one letter?")
        this.question.position(150,80)

        this.option1.html("1:Everyone")
        this.option1.position(150,100)

        this.option2.html("1:Envelope")
        this.option2.position(150,120)
        
      this.input1.position(150,230)
       
    }
}