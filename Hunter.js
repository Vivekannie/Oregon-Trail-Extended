class Hunter extends Traveler {
    constructor (name){
        super(name)
        this.food = 2
        
        
    }

  hunt() {
      this.food = this.food + 5
      return this.food

 }
  eat() {
     if (this.food < 2) {
        this.food = 0
        this.isHealthy = false
         
     }
    
      else {
       return this.food = this.food-2
          
      }
     
 }
   giveFood(traveler, numOfFoodUnits) {
     if(this.food > numOfFoodUnits ) {
        this.food -= numOfFoodUnits
        traveler.food += numOfFoodUnits
    } else {
        return giveFood
    }
}
}