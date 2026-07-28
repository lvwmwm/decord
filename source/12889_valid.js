// Module ID: 12889
// Function ID: 100134
// Name: valid
// Dependencies: [12882]

// Module 12889 (valid)

export default function valid(arg0, arg1) {
  const tmp = require(12882) /* parse */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
