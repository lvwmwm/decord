// Module ID: 11737
// Function ID: 11738
// Name: NativeRouter
// Dependencies: [19, 17, 21, 5013, 5010]

// Module 11737 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef5010 from "module_5010" /* 5010 */;
import MemoryRouter2 from "MemoryRouter" /* 5013 */;
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
let obj = { initialEntries: _modDef5010.array, initialIndex: _modDef5010.number, getUserConfirmation: _modDef5010.func, keyLength: _modDef5010.number, children: _modDef5010.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
