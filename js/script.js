class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

    hunt() {
        this.food += 2;
    }

    eat() {
        if(this.food > 0) {
            this.food--;
        } else {
            this.isHealthy = false;
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = []
    }

    getAvailableSeatCount() {
        
        let seats = this.capacity - this.passengers.length;

        return seats;
    }

    join(name) {
        if(this.getAvailableSeatCount() > 0){
            this.passengers.push(name);
        }  
    }

    shouldQuarantine() {
        
        for(let i = 0; i < this.passengers.length; i++) {
            
            if(this.passengers[i].isHealthy === false) {
                return true;
            }
        }
        return false
    }

    totalFood() {

        let total = 0;

        for(let i = 0; i < this.passengers.length; i++) {
            total = total + this.passengers[i].food;
        }

        return  total;
    }
}