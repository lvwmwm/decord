// Module ID: 12261
// Function ID: 12262
// Name: NativeRouter
// Dependencies: [19, 17, 21, 5183, 5180]

// Module 12261 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef5180 from "module_5180" /* 5180 */;
import MemoryRouter2 from "MemoryRouter" /* 5183 */;
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
let obj = { initialEntries: _modDef5180.array, initialIndex: _modDef5180.number, getUserConfirmation: _modDef5180.func, keyLength: _modDef5180.number, children: _modDef5180.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
