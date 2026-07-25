// Module ID: 10810
// Function ID: 83857
// Name: NativeRouter
// Dependencies: [31, 27, 33, 3959, 3956]

// Module 10810 (NativeRouter)
import "result";
import { Alert } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
class NativeRouter {
  constructor(arg0) {
    return jsx(require("_extends").MemoryRouter, Object.assign({}, global));
  }
}
NativeRouter.defaultProps = {
  getUserConfirmation(captureScreenshotError) {
    let closure_0 = arg1;
    let obj = {
      text: "Cancel",
      onPress() {
        return callback(false);
      }
    };
    const items = [obj, ];
    obj = {
      text: "OK",
      onPress() {
        return callback(true);
      }
    };
    items[1] = obj;
    Alert.alert("Confirm", captureScreenshotError, items);
  }
};
NativeRouter.propTypes = { initialEntries: require("emptyFunction").array, initialIndex: require("emptyFunction").number, getUserConfirmation: require("emptyFunction").func, keyLength: require("emptyFunction").number, children: require("emptyFunction").node };

export default NativeRouter;
