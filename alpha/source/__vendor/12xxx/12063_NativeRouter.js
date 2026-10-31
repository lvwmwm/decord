// Module ID: 12063
// Function ID: 12064
// Name: NativeRouter
// Dependencies: [19, 17, 21, 5056, 5053]

// Module 12063 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef5053 from "module_5053" /* 5053 */;
import MemoryRouter2 from "MemoryRouter" /* 5056 */;
import react from "react" /* 19 */;

class NativeRouter {
  constructor(arg0) {
    const MemoryRouter = MemoryRouter2.MemoryRouter;
    const merged = Object.assign(arg0);
    return <MemoryRouter />;
  }
}
const Alert = react_native.Alert;
const jsx = Fragment.jsx;
NativeRouter.defaultProps = {
  getUserConfirmation(arg0, arg1) {
    let closure_0 = arg1;
    const items = [, ];
    const obj = {
      text: "Cancel",
      onPress() {
        return closure_0(false);
      }
    };
    items[0] = obj;
    items[1] = {
      text: "OK",
      onPress() {
        return closure_0(true);
      }
    };
    Alert.alert("Confirm", arg0, items);
  }
};
let obj = { initialEntries: _modDef5053.array, initialIndex: _modDef5053.number, getUserConfirmation: _modDef5053.func, keyLength: _modDef5053.number, children: _modDef5053.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
