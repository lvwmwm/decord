// Module ID: 12358
// Function ID: 12359
// Name: flatten
// Dependencies: []

// Module 12358 (flatten)
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
                  arr = arr.push(arr);
                }
              });
            } else {
              arr = arr.push(arr);
            }
          });
        } else {
          arr = arr.push(arr);
        }
      });
    } else {
      arr = arr.push(arr);
    }
  });
  return items;
};
