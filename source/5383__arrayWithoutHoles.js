// Module ID: 5383
// Function ID: 46131
// Name: _arrayWithoutHoles
// Dependencies: [5363]

// Module 5383 (_arrayWithoutHoles)

export default function _arrayWithoutHoles(arg0) {
  if (Array.isArray(arg0)) {
    return require(5363) /* _arrayLikeToArray */(arg0);
  }
};
