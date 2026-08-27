// Module ID: 12239
// Function ID: 12240
// Name: NativeRouter
// Dependencies: [19, 17, 21, 4278, 4275]

// Module 12239 (NativeRouter)
import noopDefault from "noop" /* 19 */;
import emptyFunctionDefault from "emptyFunction" /* 4275 */;
import _extends from "_extends" /* 4278 */;
import { Alert } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
class NativeRouter {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    return jsx(require("_extends").MemoryRouter, obj);
  }
}
noopDefault;
NativeRouter.defaultProps = {
  getUserConfirmation(arg0, arg1) {
    closure_0 = arg1;
    const items = [
      {
        text: "Cancel",
        onPress() {
          return callback(false);
        }
      },
      {
        text: "OK",
        onPress() {
          return callback(true);
        }
      }
    ];
    Alert.alert("Confirm", arg0, items);
  }
};
NativeRouter.propTypes = { initialEntries: emptyFunctionDefault.array, initialIndex: emptyFunctionDefault.number, getUserConfirmation: emptyFunctionDefault.func, keyLength: emptyFunctionDefault.number, children: emptyFunctionDefault.node };

export default NativeRouter;
