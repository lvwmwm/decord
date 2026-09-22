// Module ID: 4955
// Function ID: 4956
// Name: shimArrayPrototypeMap
// Dependencies: [4890, 4909]

// Module 4955 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4890 */;
import defineProperty from "defineProperty" /* 4909 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  defineProperty(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};
