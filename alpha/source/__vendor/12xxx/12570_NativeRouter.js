// Module ID: 12570
// Function ID: 12571
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4716, 4713]

// Module 12570 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef4713 from "module_4713" /* 4713 */;
import MemoryRouter2 from "MemoryRouter" /* 4716 */;
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
let obj = { initialEntries: _modDef4713.array, initialIndex: _modDef4713.number, getUserConfirmation: _modDef4713.func, keyLength: _modDef4713.number, children: _modDef4713.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
