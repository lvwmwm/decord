// Module ID: 5811
// Function ID: 5812
// Name: ScreenStack
// Dependencies: [109, 19, 21, 5812, 5813, 5814]
// Exports: default

// Module 5811 (ScreenStack)
import Fragment from "Fragment" /* 21 */;
import warnOnceDefault from "warnOnce" /* 5812 */;
import react2 from "react" /* 5813 */;
import _modDef5814 from "module_5814" /* 5814 */;
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
  _modDef5814;
  const merged = Object.assign(tmp);
  let backgroundColor;
  if (nativeContainerStyle != null) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  return <Provider value={ref}>{null}</Provider>;
};
