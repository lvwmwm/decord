// Module ID: 4502
// Function ID: 39702
// Name: ScreenStack
// Dependencies: [29, 31, 33, 4487, 4503, 4481, 4488, 4504, 4491]
// Exports: default

// Module 4502 (ScreenStack)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = ["goBackGesture", "screensRefs", "currentScreenId", "transitionAnimation", "screenEdgeGesture", "onFinishTransitioning", "children"];

export default function ScreenStack(arg0) {
  let children;
  let currentScreenId;
  let goBackGesture;
  let onFinishTransitioning;
  let screenEdgeGesture;
  let screensRefs;
  let transitionAnimation;
  ({ goBackGesture, screensRefs, currentScreenId, screenEdgeGesture, children } = arg0);
  ({ transitionAnimation, onFinishTransitioning } = arg0);
  let current;
  if (null != screensRefs) {
    current = screensRefs.current;
  }
  if (null == current) {
    current = {};
  }
  const ref = React.useRef(current);
  const ref1 = React.useRef(null);
  let Children = React.Children;
  const _require = Children.count(children);
  const context = React.useContext(_require(4503).GHContext);
  let obj = {
    stackUseEffectCallback(ref1) {

    }
  };
  const ref2 = React.useRef(obj);
  Children = React.Children;
  const mapped = Children.map(children, (props) => {
    props = props.props;
    let descriptor;
    if (null != props) {
      descriptor = props.descriptor;
    }
    if (null == descriptor) {
      let tmp2;
      if (null != props) {
        const descriptors = props.descriptors;
        if (null != descriptors) {
          tmp2 = descriptors[props.key];
        }
      }
      descriptor = tmp2;
    }
    let freezeOnBlur;
    if (null != descriptor) {
      const options = descriptor.options;
      if (null != options) {
        freezeOnBlur = options.freezeOnBlur;
      }
    }
    if (null == freezeOnBlur) {
      let obj = callback(outer1_3[5]);
      freezeOnBlur = obj.freezeEnabled();
    }
    const diff = callback - arg1;
    if ("nativeFabricUIManager" in ref1) {
      let tmp7 = diff > 2;
    } else {
      tmp7 = diff > 1;
    }
    obj = {};
    if (freezeOnBlur) {
      freezeOnBlur = tmp7;
    }
    obj.freeze = freezeOnBlur;
    obj.children = props;
    return outer1_7(ref2(outer1_3[6]), obj);
  });
  const effect = React.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  ref2(4487)("GHWrapper" !== context.name && undefined !== goBackGesture, "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.");
  ref2(4487)(undefined !== goBackGesture && null === ref && undefined === currentScreenId, "Custom Screen Transition require screensRefs and currentScreenId to be provided.");
  obj = { value: ref };
  const obj1 = { gestureDetectorBridge: ref2, goBackGesture, transitionAnimation };
  let tmp16 = null != screenEdgeGesture;
  if (tmp16) {
    tmp16 = screenEdgeGesture;
  }
  obj1.screenEdgeGesture = tmp16;
  obj1.screensRefs = ref;
  obj1.currentScreenId = currentScreenId;
  const obj2 = {};
  const tmp = callback(arg0, closure_4);
  const tmp11 = "GHWrapper" !== context.name && undefined !== goBackGesture;
  const tmp13 = undefined !== goBackGesture && null === ref && undefined === currentScreenId;
  const tmp5 = _require;
  obj2.iosPreventReattachmentOfDismissedScreens = ref2(4491).experiment.iosPreventReattachmentOfDismissedScreens;
  obj2.onFinishTransitioning = onFinishTransitioning;
  obj2.ref = ref1;
  obj2.children = mapped;
  obj1.children = jsx(ref2(4504), Object.assign({}, tmp, obj2));
  obj.children = <context gestureDetectorBridge={ref2} goBackGesture={goBackGesture} transitionAnimation={transitionAnimation} />;
  return jsx(tmp5(4503).RNSScreensRefContext.Provider, { value: ref });
};
