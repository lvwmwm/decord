// Module ID: 13075
// Function ID: 13076
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4623, 4620]

// Module 13075 (NativeRouter)
import _modDef4620 from "module_4620" /* 4620 */;
import _mod4623 from "module_4623" /* 4623 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4620.array, initialIndex: _modDef4620.number, getUserConfirmation: _modDef4620.func, keyLength: _modDef4620.number, children: _modDef4620.node };

export default NativeRouter;
