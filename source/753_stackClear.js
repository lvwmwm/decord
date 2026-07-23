// Module ID: 753
// Function ID: 8806
// Name: stackClear
// Dependencies: [725]

// Module 753 (stackClear)

export default function stackClear() {
  let tmp = require(725) /* ListCache */;
  tmp = new tmp();
  this.__data__ = tmp;
  this.size = 0;
};
