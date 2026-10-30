// Module ID: 16118
// Function ID: 16119
// Dependencies: [16086, 16087, 16119]

// Module 16118
import _mod16087 from "module_16087" /* 16087 */;
import _mod16119 from "module_16119" /* 16119 */;
import getOwnPropertyDescriptor from "module_16086" /* 16086 */;

const f67238 = () => {
  const obj = {
    get() {
      return 7;
    }
  };
  return 7 !== Object.defineProperty(_mod16119("div"), "a", obj).a;
};
!getOwnPropertyDescriptor && !_mod16087(f67238);

export default !getOwnPropertyDescriptor && !_mod16087(f67238);
