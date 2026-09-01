// Module ID: 12444
// Function ID: 12445
// Name: flatten
// Dependencies: []

// Module 12444 (flatten)
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
