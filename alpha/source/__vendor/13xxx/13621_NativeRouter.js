// Module ID: 13621
// Function ID: 13622
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4838, 4835]

// Module 13621 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef4835 from "module_4835" /* 4835 */;
import MemoryRouter2 from "MemoryRouter" /* 4838 */;
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
let obj = { initialEntries: _modDef4835.array, initialIndex: _modDef4835.number, getUserConfirmation: _modDef4835.func, keyLength: _modDef4835.number, children: _modDef4835.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
