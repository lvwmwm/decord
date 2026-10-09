// Module ID: 11157
// Function ID: 11158
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4911, 4908]

// Module 11157 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef4908 from "module_4908" /* 4908 */;
import MemoryRouter2 from "MemoryRouter" /* 4911 */;
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
let obj = { initialEntries: _modDef4908.array, initialIndex: _modDef4908.number, getUserConfirmation: _modDef4908.func, keyLength: _modDef4908.number, children: _modDef4908.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
