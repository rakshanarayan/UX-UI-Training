var days = [
    'Monday',
    'Tuesday',
    'Wednesday'
];

console.log( days );
console.log( days[2] ); // 0 - Monday, 1 - Tuesday, 2 - Wednesday
console.log( days[3] ); // undefined

days[1] = 'Mangalvaar'; // change any item in the array by position
console.log( days );

days[3] = 'Thursday'; // add a new item
console.log( days );

days[6] = 'Sunday'; // we can skip items - items in between will be blank
console.log( days );

days[0] = undefined;
console.log( days );

console.clear();

console.log( days.length ); // number of items in the array (including empty items in between)

days.length = 3; // making the array shorter
console.log( days );