// Module ID: 754
// Function ID: 8809
// Name: stackDelete
// Dependencies: []

// Module 754 (stackDelete)

export default function stackDelete(arg0) {
  const __data__ = this.__data__;
  this.size = __data__.size;
  return __data__.delete(arg0);
};
