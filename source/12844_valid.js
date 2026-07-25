// Module ID: 12844
// Function ID: 99956
// Name: valid
// Dependencies: [12837]

// Module 12844 (valid)

export default function valid(arg0, arg1) {
  const tmp = require(12837) /* parse */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
