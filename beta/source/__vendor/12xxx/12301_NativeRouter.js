// Module ID: 12301
// Function ID: 12302
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4668, 4665]

// Module 12301 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef4665 from "module_4665" /* 4665 */;
import MemoryRouter2 from "MemoryRouter" /* 4668 */;
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
let obj = { initialEntries: _modDef4665.array, initialIndex: _modDef4665.number, getUserConfirmation: _modDef4665.func, keyLength: _modDef4665.number, children: _modDef4665.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
