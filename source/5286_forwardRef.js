// Module ID: 5286
// Function ID: 45636
// Name: forwardRef
// Dependencies: []

// Module 5286 (forwardRef)
let Platform;
let forwardRef;
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
({ useEffect: closure_4, useRef: closure_5, forwardRef } = arg1(dependencyMap[1]));
importDefault(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[1]);
({ Platform, Text: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;

export const Text = forwardRef((arg0, ref) => {
  let onLongPress;
  let onPress;
  ({ onPress, onLongPress } = arg0);
  const tmp = callback(arg0, closure_2);
  let closure_1 = callback3(null);
  const GestureObjects = ref(closure_1[4]).GestureObjects;
  function refHandler(current) {
    closure_1.current = current;
    if (null !== arg1) {
      if ("function" === typeof arg1) {
        arg1(current);
      } else {
        arg1.current = current;
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
  tmp7 = jsx(ref(closure_1[5]).GestureDetector, obj);
});
