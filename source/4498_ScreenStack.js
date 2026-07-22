// Module ID: 4498
// Function ID: 39669
// Name: ScreenStack
// Dependencies: []
// Exports: default

// Module 4498 (ScreenStack)
let closure_4 = [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000620639888636876, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010012832363411923, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017731057309979261, 212542960048045350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005432309225444, 0];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;

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
  const global = ref1;
  let Children = React.Children;
  const callback = Children.count(children);
  const context = React.useContext(callback(dependencyMap[4]).GHContext);
  let obj = {
    stackUseEffectCallback(ref1) {

    }
  };
  const ref2 = React.useRef(obj);
  const importDefault = ref2;
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
      let obj = callback(closure_3[5]);
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
    return closure_7(ref2(closure_3[6]), obj);
  });
  const effect = React.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  importDefault(dependencyMap[3])("GHWrapper" !== context.name && undefined !== goBackGesture, "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.");
  importDefault(dependencyMap[3])(undefined !== goBackGesture && null === ref && undefined === currentScreenId, "Custom Screen Transition require screensRefs and currentScreenId to be provided.");
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
  const tmp = callback2(arg0, closure_4);
  const tmp11 = "GHWrapper" !== context.name && undefined !== goBackGesture;
  const tmp13 = undefined !== goBackGesture && null === ref && undefined === currentScreenId;
  const tmp5 = callback;
  const tmp6 = dependencyMap;
  obj2.iosPreventReattachmentOfDismissedScreens = importDefault(dependencyMap[8]).experiment.iosPreventReattachmentOfDismissedScreens;
  obj2.onFinishTransitioning = onFinishTransitioning;
  obj2.ref = ref1;
  obj2.children = mapped;
  obj1.children = jsx(importDefault(dependencyMap[7]), Object.assign({}, tmp, obj2));
  obj.children = <context {...obj1} />;
  return jsx(tmp5(tmp6[4]).RNSScreensRefContext.Provider, obj);
};
