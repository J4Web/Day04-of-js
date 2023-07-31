const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1942 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  " Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
];


//filter the list of inventors for those who were born in the 1500s


const filteredData=inventors.filter(item=> (item.year>=1500 && item.year<1600));

console.table(filteredData);



//get full name using map

const getFullNames=inventors.map(item=> `${item.first} ${item.last}`)

console.table(getFullNames);



//sort the inventors on their birthdays
//based on 1 and -1 they sort
const getsortedBirthdays=inventors.sort((a,b)=> a.year>b.year ? 1: -1)
console.log("sorted 1 \n", getsortedBirthdays);

//use sort to sort inventors by years lived


const getSortedData=inventors.sort((a,b)=> a.passed-a.year > b.passed-b.year ? 1 : -1);
console.log(getSortedData);


//how many years did all the inv lived ?


const getSum=inventors.reduce((tots,inv)=>{
    return tots+(inv.passed-inv.year);
},0)

console.error("getSum ",getSum);


//create a list of boulevards in paris that contain 'de' anywhere in the name 
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const getAllLinks= document.querySelector('.mw-category');

// const links= document.querySelector('.mw-category');

// const namesLinks=links.querySelectorAll('a');

// const getAllName=Array.from(namesLinks);

// const n=getAllName.map(item=> item.textContent).filter(item=> item.includes('de'));



//sort the people alphabetically by last name

const sortedPpl=people.sort((a,b)=>{
    const firstPerson=a.split(', ');
    const secondPerson=b.split(', ');
    const [aLast,aFirst]=firstPerson;
    const [bSecond,bFirst]=secondPerson;
    return aFirst>bFirst? 1: -1;
})

console.table(sortedPpl);



//Reduce Exercise

//sum up he instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];


// we wanna map it to freq basically

//see whats the differnc

const transportation=data.reduce((total,item)=>{
    if(!total[item]){
        total[item]=0;
    }
    total[item]++;
    return total;
},{})

console.log(transportation);