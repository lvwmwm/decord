// Module ID: 11492
// Function ID: 11493
// Name: NativeRouter
// Dependencies: [19, 17, 21, 5006, 5003]

// Module 11492 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef5003 from "module_5003" /* 5003 */;
import MemoryRouter2 from "MemoryRouter" /* 5006 */;
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
    function onPress() {
      return closure_0(false);
    }
    let closure_0 = arg1;
    const items = [
      { text: "Cancel", onPress },
      {
        text: "OK",
        onPress() {
          return closure_0(true);
        }
      }
    ];
    const obj = { text: "Cancel", onPress };
    Alert.alert("Confirm", arg0, items);
  }
};
let obj = { initialEntries: _modDef5003.array, initialIndex: _modDef5003.number, getUserConfirmation: _modDef5003.func, keyLength: _modDef5003.number, children: _modDef5003.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
