// Module ID: 12025
// Function ID: 12026
// Name: NativeRouter
// Dependencies: [19, 17, 21, 5051, 5048]

// Module 12025 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef5048 from "module_5048" /* 5048 */;
import MemoryRouter2 from "MemoryRouter" /* 5051 */;
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
let obj = { initialEntries: _modDef5048.array, initialIndex: _modDef5048.number, getUserConfirmation: _modDef5048.func, keyLength: _modDef5048.number, children: _modDef5048.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
