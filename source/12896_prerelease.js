// Module ID: 12896
// Function ID: 100148
// Name: prerelease
// Dependencies: [12882]

// Module 12896 (prerelease)

export default function prerelease(arg0, arg1) {
  const tmp = require(12882) /* parse */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
