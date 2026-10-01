// Module ID: 12515
// Function ID: 12516
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4695, 4692]

// Module 12515 (NativeRouter)
import _modDef4692 from "module_4692" /* 4692 */;
import _mod4695 from "module_4695" /* 4695 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4692.array, initialIndex: _modDef4692.number, getUserConfirmation: _modDef4692.func, keyLength: _modDef4692.number, children: _modDef4692.node };

export default NativeRouter;
