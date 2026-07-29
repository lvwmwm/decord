// Module ID: 737
// Function ID: 738
// Name: getNative
// Dependencies: [738, 739]

// Module 737 (getNative)

export default function getNative(arg0, arg1) {
  const tmp = require(738) /* getValue */(arg0, arg1);
  let tmp2;
  if (require(739) /* baseIsNative */(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};
