//An algorithm which finds out that , if all key-value pairs in "source" object is 
//contained in any object in "collection" array.. If so , that particular object in collection array is 
//pushed into "arr" array and returned in function "whatIsInAName"..

function whatIsInAName(collection, source) {
    let arr = [];
    let sourceFoundFlag = []  //if each element in source is found in collection , "true" boolean is pushed
  
    console.log(source[Object.keys(source)[0]])
    f1: for (let i = 0; i < collection.length; i++) {  //for each object in collection array..
      f2: for (let j = 0; j < Object.keys(source).length; j++) {  //for each key-value pairs in "source"..
        f3: for (let k = 0; k < Object.keys(collection[i]).length; k++) { // for each key-value pairs in each obj in "collection"
              if(collection[i][Object.keys(collection[i])[k]] === source[Object.keys(source)[j]] && Object.keys(collection[i])[k] === Object.keys(source)[j]) {
                sourceFoundFlag.splice(j, 1, true)
                continue f2;  //if found , start from next element in "source",
              }
            }
            sourceFoundFlag.splice(j, 1, false)  
          }  
      if(sourceFoundFlag.every(el => el === true) && sourceFoundFlag.length === Object.keys(source).length) {
        arr.push(collection[i]); //if every element is true , then push that object
        sourceFoundFlag = []  //reset the flag array
      } 
    }  
    return arr;
  }
  
  
  //Tests!..
  console.table(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
  console.table(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
  console.table(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
  console.table(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))
  console.table(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }))
  console.table(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}))
  