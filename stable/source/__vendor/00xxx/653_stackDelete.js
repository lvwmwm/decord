// Module ID: 653
// Function ID: 654
// Name: stackDelete
// Dependencies: []

// Module 653 (stackDelete)

export default function stackDelete(arg0) {
  const __data__ = this.__data__;
  this.size = __data__.size;
  return __data__.delete(arg0);
};
