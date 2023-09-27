class UberPriceCalculator{
    // def _init_(self, base_fare, cost_per_km, cost_per_minute):
    constructor(base_fare, cost_per_km, cost_per_minute) {
        this.base_fare = base_fare
        this.cost_per_km = cost_per_km
        this.cost_per_minute = cost_per_minute
    }
       

    calculate_price(distance_km, time_minutes){
        let price;
        price = base_fare + (cost_per_km * distance_km) + (cost_per_minute * time_minutes)
        return price
    }
       
}

base_fare = 20
cost_per_km = 10
cost_per_minute = 2

calculator = new UberPriceCalculator(base_fare, cost_per_km,cost_per_minute)
distance_km = 10
time_minutes = 20
total_price = calculator.calculate_price(distance_km, time_minutes)
console.log("The total price for the ride is"+total_price)

