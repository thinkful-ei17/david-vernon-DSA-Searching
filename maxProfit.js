/*
If you had to BUY shares in the company on one day,
 and SELL the shares on [one of the following days],
 write an algorithm to work out what the...
 maximum profit you could make would be!

[200, 97, 121, 123, 98, 97, 105]

> findMax + findMin [1]
> go to minDay; check all days after that minimum [2]
----- Day[i] - minDayPrice = soldPrice
.
-----------------
maxProfit =
B : buying
S : sold
2: i didnt do anything
1st day   2nd day   3rd day  4th day
B: 128  -> S: 97
2: [  ] -> 0: 97 ->  1: 121
        -> 2: [ ]- > 0: 121
                  -> 2: [  ]

     START
     1: first iteration: n amount of paths
     2:
     vvv
*/

const arr = [200, 97, 121, 123, 98, 97, 105];

let maxProfit = 0;
for (index in arr) {
  console.log(arr[index]);
  for(let i = index; i < arr.length - 1 ;i++) {
    let temp = arr[i] - arr[index];

    if (temp > maxProfit) {
      maxProfit = temp;
    }

    console.log('nested for loop', arr[i]);
  }
}

console.log('MAXPROFIT', maxProfit);
