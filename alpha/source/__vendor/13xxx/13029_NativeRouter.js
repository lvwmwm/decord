// Module ID: 13029
// Function ID: 13030
// Name: NativeRouter
// Dependencies: [19, 17, 21, 5297, 5294]

// Module 13029 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef5294 from "module_5294" /* 5294 */;
import MemoryRouter2 from "MemoryRouter" /* 5297 */;
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
let obj = { initialEntries: _modDef5294.array, initialIndex: _modDef5294.number, getUserConfirmation: _modDef5294.func, keyLength: _modDef5294.number, children: _modDef5294.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
