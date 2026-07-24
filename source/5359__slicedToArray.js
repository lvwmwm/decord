// Module ID: 5359
// Function ID: 46002
// Name: _slicedToArray
// Dependencies: [5360, 5361, 5362, 5364]

// Module 5359 (_slicedToArray)

export default function _slicedToArray(arg0, arg1) {
  let tmp = require(5360) /* _arrayWithHoles */(arg0);
  if (!tmp) {
    tmp = require(5361) /* _iterableToArrayLimit */(arg0, arg1);
  }
  if (!tmp) {
    tmp = require(5362) /* _unsupportedIterableToArray */(arg0, arg1);
  }
  if (!tmp) {
    tmp = require(5364) /* _nonIterableRest */();
  }
  return tmp;
};
