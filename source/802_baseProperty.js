// Module ID: 802
// Function ID: 803
// Name: baseProperty
// Dependencies: []

// Module 802 (baseProperty)

export default function baseProperty(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    let tmp;
    if (null != arg0) {
      tmp = arg0[closure_0];
    }
    return tmp;
  };
};
