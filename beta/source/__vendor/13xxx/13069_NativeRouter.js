// Module ID: 13069
// Function ID: 13070
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4620, 4617]

// Module 13069 (NativeRouter)
import _modDef4617 from "module_4617" /* 4617 */;
import _mod4620 from "module_4620" /* 4620 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4617.array, initialIndex: _modDef4617.number, getUserConfirmation: _modDef4617.func, keyLength: _modDef4617.number, children: _modDef4617.node };

export default NativeRouter;
