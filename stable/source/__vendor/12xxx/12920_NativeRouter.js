// Module ID: 12920
// Function ID: 12921
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4469, 4466]

// Module 12920 (NativeRouter)
import _modDef4466 from "module_4466" /* 4466 */;
import _mod4469 from "module_4469" /* 4469 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4466.array, initialIndex: _modDef4466.number, getUserConfirmation: _modDef4466.func, keyLength: _modDef4466.number, children: _modDef4466.node };

export default NativeRouter;
