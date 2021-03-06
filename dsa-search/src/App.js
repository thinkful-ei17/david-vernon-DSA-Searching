import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    };
  }

  linearSearch(array, value) {
    for(let i=0; i<array.length; i++) {
      if(array[i] === value) {
        console.log(`Found ${value} in ${i+1} searches`);
        return;
      }
    }
    console.log(`After ${array.length} searches, ${value} is not in this dataset`);
    return;
  }

  binarySearch(array, value) {
    const sortedArr = array.sort((a, b) => a-b);
    let counter = 1;
    let start = 0;
    let end = sortedArr.length -1;
    let mid = Math.floor((start + end) / 2);
    while(start !== end) {
      if(sortedArr[mid] === value) {
        console.log(`Found ${value} in ${counter} searches`);
        return;
      }
      if(sortedArr[mid] > value) {
        console.log('mid > value', sortedArr[mid]);
        end = mid - 1;
        counter++;
      }
      if(sortedArr[mid] < value) {
        console.log('mid < value', sortedArr[mid]);
        start = mid + 1;
        counter++;
      }
      mid = Math.floor((start + end) / 2);
    }
    console.log(`After ${counter} searches, ${value} is not in this dataset`);
    return;
  }
 
  render() {
    return (
      <div className="App">
        <input ref={input => this.textInput = input} type='text' name='search-input'/>
        <button id='linear-button' onClick={()=> this.linearSearch(this.state.data, parseInt(this.textInput.value, 10))}>Linear</button>
        <button id='binary-button' onClick={()=> this.binarySearch(this.state.data, parseInt(this.textInput.value, 10))}>Binary</button>
      </div>
    );
  }
}

export default App;
