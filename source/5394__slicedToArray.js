// Module ID: 5394
// Function ID: 46135
// Name: _slicedToArray
// Dependencies: [5395, 5396, 5397, 5399]

// Module 5394 (_slicedToArray)

export default function _slicedToArray(arg0, arg1) {
  let tmp = require(5395) /* _arrayWithHoles */(arg0);
  if (!tmp) {
    tmp = require(5396) /* _iterableToArrayLimit */(arg0, arg1);
  }
  if (!tmp) {
    tmp = require(5397) /* _unsupportedIterableToArray */(arg0, arg1);
  }
  if (!tmp) {
    tmp = require(5399) /* _nonIterableRest */();
  }
  return tmp;
};
