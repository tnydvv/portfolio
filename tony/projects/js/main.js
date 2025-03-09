// an array of objects
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// an array of integers
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//! for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//! forEach()
companies.forEach((company) => {
  console.log(company);
});

//! filter()
// using a for loop
let canVote = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    canVote.push(ages[i]);
  }
}
console.log(canVote);

// using a filter
const canVotte = ages.filter((age) => {
  if (age >= 18) {
    return true;
  }
});
console.log(canVotte);

// filter retail companies
const retailCompanies = companies.filter(
  (company) => company.category == "Retail"
);
console.log(retailCompanies);

// get 80s companies
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 1990
);
console.log(eightiesCompanies);

// get companies that lasted 10 years or more
const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(lastedTenYears);

//! map()
// create an array of company names only
const companyNames = companies.map((company) => {
  return company.name;
});
console.log(companyNames);

const testMap = companies.map((company) => {
  return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap);

let currentYear = new Date().getFullYear();
const birthYears = ages.map((age) => {
  return currentYear - age;
});
console.log(birthYears);

//! sort()
// Sorted companies
const sortedCompanies = companies.sort((c1, c2) =>
  c1.start < c2.start ? 1 : -1
);
console.log(sortedCompanies);

// Sorted ages
const sortedAges = ages.sort((a1, a2) => a2 - a1);
console.log(sortedAges);

//! reduce()
// Total Ages
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// Total years for all companies
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);

//! combining all array funcitons
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a1, a2) => a1 - a2)
  .reduce((a1, a2) => a1 + a2, 0);
console.log(combined);

// Companies HOMEWORK
// 1. Get all 'Auto' Companies.
const autoCompanies = companies.filter((company) => company.category == "Auto");
console.log(autoCompanies);
// 2. Get companies that ended in or after the year 2000.
const endedAfter2000 = companies.filter((company) => company.end >= 2000);
console.log(endedAfter2000);
// Ages
// 1. Use map to get the square root of each age. Hint: Math.sqrt() function
const sqrtAges = ages.map(age => Math.sqrt(age))
console.log(sqrtAges);
