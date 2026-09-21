// Module ID: 722
// Function ID: 723
// Name: _toArray
// Dependencies: [33, 723, 35, 37]

// Module 722 (_toArray)
import _arrayWithHoles from "_arrayWithHoles" /* 33 */;
import _unsupportedIterableToArray from "_unsupportedIterableToArray" /* 35 */;
import _nonIterableRest from "_nonIterableRest" /* 37 */;
import _iterableToArray from "_iterableToArray" /* 723 */;


export default function _toArray(current) {
  return _arrayWithHoles(current) || _iterableToArray(current) || _unsupportedIterableToArray(current) || _nonIterableRest();
};
