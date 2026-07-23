// Module ID: 830
// Function ID: 9260
// Name: _toArray
// Dependencies: [58, 67, 60, 62]

// Module 830 (_toArray)

export default function _toArray(arg0) {
  let tmp = require(58) /* _arrayWithHoles */(arg0);
  if (!tmp) {
    tmp = require(67) /* _iterableToArray */(arg0);
  }
  if (!tmp) {
    tmp = require(60) /* _unsupportedIterableToArray */(arg0);
  }
  if (!tmp) {
    tmp = require(62) /* _nonIterableRest */();
  }
  return tmp;
};
