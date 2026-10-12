// Module ID: 11198
// Function ID: 11199
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4950, 4947]

// Module 11198 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef4947 from "module_4947" /* 4947 */;
import MemoryRouter2 from "MemoryRouter" /* 4950 */;
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
let obj = { initialEntries: _modDef4947.array, initialIndex: _modDef4947.number, getUserConfirmation: _modDef4947.func, keyLength: _modDef4947.number, children: _modDef4947.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
