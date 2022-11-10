interface IMountain { 
    Name:string, 
    Height:number
 } 

 var Kilimanjaro:IMountain = { 
    Name:"Kilimanjaro",
    Height:19341
 } 

 var Everest:IMountain = { 
    Name:"Everest",
    Height:29029
 }  
 
 var Denali:IMountain = { 
    Name:"Denali",
    Height:20310
} 


 var mountains:IMountain[];
 mountains = [Kilimanjaro,Everest,Denali];

function findNameOfTallestMountain(mount:IMountain[]) :string{
    var tallestmountain = mount.find(x => x.Height === Math.max(x.Height)) || mount[0]
    console.log(tallestmountain);
    return tallestmountain.Name;
}

const products : Product[] = [{name: "computer", price:3200.00},
{name:"toast", price: 2.00},
{name:"keyboard", price: 69.00},
{name:"mouse", price: 45.00},
{name:"headset", price: 50.25},
{name:"microphone", price: 52.50}      
];


    function calcAverageProductPrice(currentProducts:Product[]):number{
        let total : number = 0;
        for(let i = 0; i < currentProducts.length; i++){
            total += currentProducts[i].price;
        }
        let avg : number = total/currentProducts.length;
        return avg;
    }
    let avg : number = calcAverageProductPrice(products);
    console.log(avg);
    
    interface InventoryItem {
        product: Product;
        quantity: number;
    }
    
    const inventory : InventoryItem[] = [
        {product:products[0], quantity: 10},
        {product:products[1], quantity: 4},
        {product:products[2], quantity: 20},
       
    ]
    

    function calcInventoryValue(set:InventoryItem[]):number{
        let totalValue : number = 0;
        for(let i = 0; i < set.length; i++){
            totalValue += set[i].product.price * set[i].quantity;
        }
        return totalValue;
    }
    let totVal : number = calcInventoryValue(inventory);
    console.log(totVal);



