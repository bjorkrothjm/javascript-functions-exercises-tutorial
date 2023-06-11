var names = ['John', 'Kenny', 'Tom', "Bob", 'Dilan'];

function sortNames(arr){
    return arr.sort()
}
console.log(sortNames(names));

// Would have been an easier solution: 
//console.log(names.sort())

const companies = [
	{name: "Comp1", category: "Finance", start: 1981},
	{name: "Comp2", category: "Tech", start: 1999},
	{name: "Comp3", category: "Tech", start: 2000}
];

const sortedCompanies = companies.sort(function(c1, c2){
    // descending order (high to low)
    if (c1.start < c2.start) {
        return 1;
    }else{
        return -1;
    }
});
console.log(sortedCompanies)


const sortedCompanies2 = companies.sort((c1, c2) => (c1.start < c2.start ? 1: -1));  
console.log(sortedCompanies2)

const sortedCompanies3 = companies.sort((c1, c2) => (c2.start -  c1.start));  
console.log(sortedCompanies3)


const sortedCompanies4 = companies.sort(function(b1, b2){
    return b1.start - b2.start 
})
console.log(sortedCompanies4)



const sortedCompanies5 = companies.sort( (b1, b2) => b2.start - b1.start )
console.log(sortedCompanies5)