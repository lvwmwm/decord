// Module ID: 12504
// Function ID: 12505
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4696, 4693]

// Module 12504 (NativeRouter)
import _modDef4693 from "module_4693" /* 4693 */;
import _mod4696 from "module_4696" /* 4696 */;
import noop from "module_19" /* 19 */;

require = fn;
class NativeRouter {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    return jsx(closure_0(closure_1[3]).MemoryRouter, obj);
  }
}
const Alert = fn(17).Alert;
const jsx = fn(21).jsx;
NativeRouter.defaultProps = {
  getUserConfirmation(arg0, arg1) {
    closure_0 = arg1;
    const items = [
      {
        text: "Cancel",
        onPress() {
          return closure_0(false);
        }
      },
      {
        text: "OK",
        onPress() {
          return closure_0(true);
        }
      }
    ];
    Alert.alert("Confirm", arg0, items);
  }
};
NativeRouter.propTypes = { initialEntries: _modDef4693.array, initialIndex: _modDef4693.number, getUserConfirmation: _modDef4693.func, keyLength: _modDef4693.number, children: _modDef4693.node };

export default NativeRouter;
