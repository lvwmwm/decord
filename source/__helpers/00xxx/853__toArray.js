// Module ID: 853
// Function ID: 854
// Name: _toArray
// Dependencies: [33, 854, 35, 37]

// Module 853 (_toArray)
import _arrayWithHoles from "_arrayWithHoles" /* 33 */;
import _unsupportedIterableToArray from "_unsupportedIterableToArray" /* 35 */;
import _nonIterableRest from "_nonIterableRest" /* 37 */;
import _iterableToArray from "_iterableToArray" /* 854 */;


export default function _toArray(arg0) {
  return _arrayWithHoles(arg0) || _iterableToArray(arg0) || _unsupportedIterableToArray(arg0) || _nonIterableRest();
};
