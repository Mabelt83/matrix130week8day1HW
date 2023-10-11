//QUESTION #1
// Create a type to represent the following instances of `CTStudent` 
//Also declare three 3 students below as type `CTStudent` and set their values  */

type Student={
    id:string,
    name:string
    age:number,
    isTired:boolean,
    projectsCompleted:string[]
    pet?:string
} 

let student1:Student = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}
console.log(student1)



let student2:Student= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}
console.log(student2)




let student3:Student = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 

console.log(student3)






// Question #2

// Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  
//If their is a Fruit print the color of the fruit, otherwise print
// `You ate my fruit already` be sure to annoate the return type of the function  */

type Fruit={
  color:string,
  shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit|null=null

function printFruit(fruit:Fruit|null):void{
    if(fruit){
        console.log(fruit.color)
    }else{
        console.log(`You ate my fruit already`)
    }

}
 console.log(apple.color)




// Question #3

// Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type */
type Book={
  isbn:string,
  title:string,
  author:string
}

type DigitalBook={
  fileType:string,
}

type Ebook = Book | DigitalBook
const BookReader :Ebook={
    isbn:'BookId',
    title:'The Housemaid',
    author:'Freida McFadden',
    fileType:'Thriller/Suspense'
}
console.log(BookReader)

// Question #4

// Create a Type to represecnt a `ShopItem` that will fit the following rules. You may need to create additional structures

// - All ShopItems have an numeric id that can not be edited 
// - All ShopItems have a price
// - All ShopItems have a description
// - Some ShopItems have a color
// - All ShopItems have a Category represented with an enum 
//     - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
// - All ShopItems have a list of keywords used to help search for the ShopItem 
//     - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

// After Creating the `ShopItem` type create 3 items using this type */

type ShopItem={
    readonly id:number,
    price : number,
    description : string,
    color : string
    categories: Categories,
    keywords : string [],
}   
 
 
    enum Categories{
    Shirts ='shirts',
    Shoes = 'shoes',
    Pants = 'pants',
    Hats = 'Hats',
    Dresses = 'dresses',
}

const shirtsItem: ShopItem = {
    id: 1-666,
    price: 35.00,
    description: 'Metallica T-shirt with incredible "The Four Horsemen" inspired illustration by John Baizley',
    color : 'Black / Red',
    categories : Categories.Shirts,
    keywords: ['Rock band', 'Metallica', 'trending'],
}

const shoesItem: ShopItem = {
    id: 2-222,
    price: 60.00,
    description: 'VANS - Classic Slip-On Checkerboard Shoe',
    color : 'Checkered Black and White',
    categories : Categories.Shoes,
    keywords: ['shoes', 'slip-on', 'stylish'],
    
}

const pantsItem: ShopItem = {
    id: 3-333,
    price: 260.00,
    description : 'The Kangaroo, a JNCO JEANS Collector classic',
    color : 'Denim',
    categories : Categories.Pants,
    keywords: ['jeans', 'deep pockets', 'limited edition'], 
}


const hatsItem: ShopItem = {
    id: 4-444,
    price: 36.00,
    description : 'Lord Nermal 6 Panel Pocket Hat',
    color : 'Black',
    categories : Categories.Hats,
    keywords: ['cap', 'adjustable', 'embroidered patch'], 
}

const dressesItem: ShopItem = {
    id: 5-444,
    price: 25.99,
    description : 'Waist Versatile Flare Skater Dress',
    color : 'Black',
    categories : Categories.Dresses,
    keywords: ['Short', 'shoulder straps', 'classy'], 
}