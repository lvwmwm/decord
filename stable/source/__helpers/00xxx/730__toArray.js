// Module ID: 730
// Function ID: 731
// Name: _toArray
// Dependencies: [33, 731, 35, 37]

// Module 730 (_toArray)
import _arrayWithHoles from "_arrayWithHoles" /* 33 */;
import _unsupportedIterableToArray from "_unsupportedIterableToArray" /* 35 */;
import _nonIterableRest from "_nonIterableRest" /* 37 */;
import _iterableToArray from "_iterableToArray" /* 731 */;


export default function _toArray(alerts) {
  const tmp3 = _arrayWithHoles(alerts) || _iterableToArray(alerts) || _unsupportedIterableToArray(alerts) || _nonIterableRest();
  return tmp3;
};
