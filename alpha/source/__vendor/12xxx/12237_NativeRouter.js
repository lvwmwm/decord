// Module ID: 12237
// Function ID: 12238
// Name: NativeRouter
// Dependencies: [19, 17, 21, 5184, 5181]

// Module 12237 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef5181 from "module_5181" /* 5181 */;
import MemoryRouter2 from "MemoryRouter" /* 5184 */;
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
let obj = { initialEntries: _modDef5181.array, initialIndex: _modDef5181.number, getUserConfirmation: _modDef5181.func, keyLength: _modDef5181.number, children: _modDef5181.node };
NativeRouter.propTypes = obj;

export default NativeRouter;
