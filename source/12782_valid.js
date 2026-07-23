// Module ID: 12782
// Function ID: 99508
// Name: valid
// Dependencies: [12775]

// Module 12782 (valid)

export default function valid(arg0, arg1) {
  const tmp = require(12775) /* parse */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
