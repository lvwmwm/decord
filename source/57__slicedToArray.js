// Module ID: 57
// Function ID: 1401
// Name: _slicedToArray
// Dependencies: [58, 59, 60, 62]

// Module 57 (_slicedToArray)

export default function _slicedToArray(arg0, arg1) {
  let tmp = require(58) /* _arrayWithHoles */(arg0);
  if (!tmp) {
    tmp = require(59) /* _iterableToArrayLimit */(arg0, arg1);
  }
  if (!tmp) {
    tmp = require(60) /* _unsupportedIterableToArray */(arg0, arg1);
  }
  if (!tmp) {
    tmp = require(62) /* _nonIterableRest */();
  }
  return tmp;
};
