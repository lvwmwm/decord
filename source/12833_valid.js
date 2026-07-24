// Module ID: 12833
// Function ID: 99829
// Name: valid
// Dependencies: [12826]

// Module 12833 (valid)

export default function valid(arg0, arg1) {
  const tmp = require(12826) /* parse */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
