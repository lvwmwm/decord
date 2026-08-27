// Module ID: 777
// Function ID: 778
// Name: stackDelete
// Dependencies: []

// Module 777 (stackDelete)

export default function stackDelete(arg0) {
  const __data__ = this.__data__;
  this.size = __data__.size;
  return __data__.delete(arg0);
};
