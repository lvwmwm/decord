// Module ID: 5341
// Function ID: 5342
// Name: ScreenStack
// Dependencies: [109, 19, 21, 5342, 5343, 5344]
// Exports: default

// Module 5341 (ScreenStack)
import Fragment from "Fragment" /* 21 */;
import warnOnceDefault from "warnOnce" /* 5342 */;
import react2 from "react" /* 5343 */;
import _modDef5344 from "module_5344" /* 5344 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

let closure_3 = ["goBackGesture", "screensRefs", "currentScreenId", "transitionAnimation", "screenEdgeGesture", "nativeContainerStyle", "onFinishTransitioning", "children"];
const jsx = Fragment.jsx;

export default function ScreenStack(arg0) {
  let children;
  let currentScreenId;
  let goBackGesture;
  let nativeContainerStyle;
  let onFinishTransitioning;
  let screenEdgeGesture;
  let screensRefs;
  let transitionAnimation;
  ({ goBackGesture, screensRefs, currentScreenId, screenEdgeGesture, nativeContainerStyle } = arg0);
  ({ transitionAnimation, onFinishTransitioning, children } = arg0);
  let current;
  const useRef = react.useRef;
  const tmp = _objectWithoutProperties(arg0, closure_3);
  if (screensRefs != null) {
    current = screensRefs.current;
  }
  if (current == null) {
    current = {};
  }
  const ref = useRef(current);
  const ref1 = obj.useRef(null);
  const context = obj.useContext(react2.GHContext);
  const obj2 = {
    stackUseEffectCallback(ref1) {

    }
  };
  const ref2 = obj.useRef(obj2);
  const effect = obj.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  const tmp9 = "GHWrapper" !== context.name && undefined !== goBackGesture;
  warnOnceDefault(tmp9, "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.");
  const tmp12 = undefined !== goBackGesture && null === ref && undefined === currentScreenId;
  warnOnceDefault(tmp12, "Custom Screen Transition require screensRefs and currentScreenId to be provided.");
  const Provider = react2.RNSScreensRefContext.Provider;
  if (screenEdgeGesture == null) {
    screenEdgeGesture = false;
  }
  _modDef5344;
  const merged = Object.assign(tmp);
  let backgroundColor;
  if (nativeContainerStyle != null) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  return <Provider value={ref}>{null}</Provider>;
};
