// Module ID: 7847
// Function ID: 7848
// Name: flatten
// Dependencies: []

// Module 7847 (flatten)
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
