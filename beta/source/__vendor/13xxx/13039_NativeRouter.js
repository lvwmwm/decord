// Module ID: 13039
// Function ID: 13040
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4591, 4588]

// Module 13039 (NativeRouter)
import _modDef4588 from "module_4588" /* 4588 */;
import _mod4591 from "module_4591" /* 4591 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4588.array, initialIndex: _modDef4588.number, getUserConfirmation: _modDef4588.func, keyLength: _modDef4588.number, children: _modDef4588.node };

export default NativeRouter;
