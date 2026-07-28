// Module ID: 5323
// Function ID: 45782
// Name: Text
// Dependencies: [29, 31, 27, 33, 5302, 5287]
// Exports: Text

// Module 5323 (Text)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
let closure_2 = ["onPress", "onLongPress", "ref"];
({ useEffect: closure_4, useMemo: closure_5, useRef: closure_6 } = result);
({ Platform, Text: closure_7 } = get_ActivityIndicator);

export const Text = function Text(arg0) {
  let onLongPress;
  let onPress;
  let ref;
  ({ onPress, onLongPress, ref } = arg0);
  const tmp = callback(arg0, closure_2);
  const dependencyMap = callback4(null);
  const items = [ref];
  const tmp3 = callback3(() => {
    function handler(current) {
      outer1_1.current = current;
      if (outer1_0) {
        if ("function" === typeof outer1_0) {
          outer1_0(current);
        } else {
          outer1_0.current = current;
        }
      }
    }
    handler.rngh = true;
    return handler;
  }, items);
  callback2(() => {

  }, []);
  if (!onPress) {
    if (!onLongPress) {
      const _Object = Object;
      let obj = { ref: tmp3 };
      let tmp8 = <closure_7 {...Object.assign(obj, tmp)} />;
    }
    return tmp8;
  }
  obj = {
    gesture: callback3(() => {
      const GestureObjects = ref(table[4]).GestureObjects;
      return GestureObjects.Native().runOnJS(true);
    }, []),
    children: <closure_7 {...Object.assign({ onPress, onLongPress, ref: tmp3 }, tmp)} />
  };
  tmp8 = jsx(ref(5287).GestureDetector, {
    gesture: callback3(() => {
      const GestureObjects = ref(table[4]).GestureObjects;
      return GestureObjects.Native().runOnJS(true);
    }, []),
    children: <closure_7 {...Object.assign({ onPress, onLongPress, ref: tmp3 }, tmp)} />
  });
};
