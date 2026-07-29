// Module ID: 735
// Function ID: 736
// Name: hashClear
// Dependencies: [736]

// Module 735 (hashClear)

export default function hashClear() {
  let obj = {};
  if (require(736) /* getNative */) {
    obj = require(736) /* getNative */(null);
  } else {
    obj = {};
  }
  obj.__data__ = obj;
  obj.size = 0;
};
