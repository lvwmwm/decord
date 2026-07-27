// Module ID: 12845
// Function ID: 99961
// Name: valid
// Dependencies: [12838]

// Module 12845 (valid)

export default function valid(arg0, arg1) {
  const tmp = require(12838) /* parse */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
