class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
    
    }
     getAvailableSeatCount() {
        let seatcount = this.capacity - this.passengers.length
        return seatcount
    }
     
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            return this.passengers.push(traveler)
           
        }
    }
    
     shouldQuarantine() {
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy = false) {
                return true
            }
        }
          return false
    }
    
     totalFood() {
        let totalfood = 0
        for (let x = 0; x < this.passengers.length; x++) {
            console.log(this.passengers[x].getfood())
            totalfood = totalfood + this.passengers[x].getfood()
        }
        return totalfood
    }
}
