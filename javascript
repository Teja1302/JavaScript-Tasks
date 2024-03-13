let products=[
 {name :"milk", price:30, quantity:2},//60
 {name :"curd", price:20, quantity:2},//40
 {name :"ghee", price:40, quantity:1} //40
 ];

function TotalRevenueofProduct(products) {

    let totalRevenue = 0;

        for (i=0; i<products.length;){
            totalRevenue += products[i].price * products [i].quantity;
            i++;
            
        }

return totalRevenue;
}

let totalRevenue = TotalRevenueofProduct(products);

console.log("The total revenue is "+ totalRevenue);
