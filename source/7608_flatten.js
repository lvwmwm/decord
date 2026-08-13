// Module ID: 7608
// Function ID: 7609
// Name: flatten
// Dependencies: []

// Module 7608 (flatten)
arg5.flatten = function flatten(arr) {
  const items = [];
  const item = arr.forEach((arr) => {
    if (Array.isArray(arr)) {
      let item = arr.forEach((arr) => {
        if (Array.isArray(arr)) {
          let item = arr.forEach((arr) => {
            if (Array.isArray(arr)) {
              let item = arr.forEach((arr) => {
                if (Array.isArray(arr)) {
                  let item = arr.forEach(() => { ... });
                } else {
                  closure_0.push(arr);
                }
              });
            } else {
              closure_0.push(arr);
            }
          });
        } else {
          closure_0.push(arr);
        }
      });
    } else {
      closure_0.push(arr);
    }
  });
  return items;
};
