// Module ID: 722
// Function ID: 8750
// Name: hashHas
// Dependencies: [713]

// Module 722 (hashHas)

export default function hashHas(arg0) {
  const __data__ = this.__data__;
  if (require(713) /* getNative */) {
    let callResult = undefined !== __data__[arg0];
  } else {
    callResult = hasOwnProperty.call(__data__, arg0);
  }
  return callResult;
};
