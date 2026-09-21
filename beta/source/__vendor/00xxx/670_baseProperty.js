// Module ID: 670
// Function ID: 671
// Name: baseProperty
// Dependencies: []

// Module 670 (baseProperty)

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
