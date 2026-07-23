// Module ID: 5289
// Function ID: 45655
// Name: forwardRef
// Dependencies: [29, 31, 27, 33, 5268, 5253]

// Module 5289 (forwardRef)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let closure_4;
let closure_5;
let closure_6;
let forwardRef;
const require = arg1;
let closure_2 = ["onPress", "onLongPress"];
({ useEffect: closure_4, useRef: closure_5, forwardRef } = result);
({ Platform, Text: closure_6 } = get_ActivityIndicator);

export const Text = forwardRef((arg0, ref) => {
  let onLongPress;
  let onPress;
  const _require = ref;
  ({ onPress, onLongPress } = arg0);
  const tmp = callback(arg0, closure_2);
  const dependencyMap = callback3(null);
  const GestureObjects = _require(5268).GestureObjects;
  function refHandler(current) {
    closure_1.current = current;
    if (null !== callback) {
      if ("function" === typeof callback) {
        callback(current);
      } else {
        callback.current = current;
      }
    }
  }
  refHandler.rngh = true;
  const NativeResult = GestureObjects.Native();
  callback2(() => {

  }, []);
  if (!onPress) {
    if (!onLongPress) {
      const _Object = Object;
      let obj = { ref };
      let tmp7 = <closure_6 {...Object.assign(obj, tmp)} />;
    }
    return tmp7;
  }
  obj = { gesture: GestureObjects.Native().runOnJS(true), children: <closure_6 {...Object.assign({ onPress, onLongPress, ref: refHandler }, tmp)} /> };
  tmp7 = jsx(_require(5253).GestureDetector, { gesture: GestureObjects.Native().runOnJS(true), children: <closure_6 {...Object.assign({ onPress, onLongPress, ref: refHandler }, tmp)} /> });
});
