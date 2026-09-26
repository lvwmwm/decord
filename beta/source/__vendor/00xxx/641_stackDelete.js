// Module ID: 641
// Function ID: 642
// Name: stackDelete
// Dependencies: []

// Module 641 (stackDelete)

export default function stackDelete(arg0) {
  const __data__ = this.__data__;
  this.size = __data__.size;
  return __data__.delete(arg0);
};
