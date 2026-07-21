// Module ID: 7518
// Function ID: 60197
// Name: _getRequireWildcardCache
// Dependencies: []

// Module 7518 (_getRequireWildcardCache)
function _getRequireWildcardCache(arg0) {
  if ("function" !== typeof WeakMap) {
    return null;
  } else {
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    const require = weakMap;
    const _WeakMap2 = WeakMap;
    const weakMap1 = new WeakMap();
    const dependencyMap = weakMap1;
    function _getRequireWildcardCache(arg0) {
      return arg0 ? weakMap1 : weakMap;
    }
    return _getRequireWildcardCache(arg0);
  }
}
const _module = require(dependencyMap[0]);
let closure_2 = _module(require(dependencyMap[1]));
let closure_3 = _module(require(dependencyMap[2]));
const _module1 = require(dependencyMap[3]);
if (!_module1) {
  if (null !== _module1) {
    let obj = _getRequireWildcardCache(undefined);
    if (obj) {
      if (obj.has(_module1)) {
        let value = obj.get(_module1);
      }
    }
    obj = Object.create(null);
    const _Object = Object;
    let getOwnPropertyDescriptor = Object.defineProperty;
    if (getOwnPropertyDescriptor) {
      const _Object2 = Object;
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    }
    for (const key10042 in _module1) {
      let tmp15 = key10042;
      if ("default" === key10042) {
        continue;
      } else {
        let hasOwnProperty = {}.hasOwnProperty;
        if (!hasOwnProperty.call(_module1, key10042)) {
          continue;
        } else {
          let ownPropertyDescriptor = null;
          if (getOwnPropertyDescriptor) {
            let _Object3 = Object;
            ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_module1, key10042);
          }
          if (!ownPropertyDescriptor) {
            obj[key10042] = _module1[key10042];
            let tmp10 = ownPropertyDescriptor;
            // continue
          } else {
            let _Object4 = Object;
            let definePropertyResult1 = Object.defineProperty(obj, key10042, ownPropertyDescriptor);
            let tmp12 = ownPropertyDescriptor;
            // continue
          }
          continue;
        }
        continue;
      }
      continue;
    }
    obj.default = _module1;
    value = obj;
    if (obj) {
      const result = obj.set(_module1, obj);
      value = obj;
    }
  }
  obj = { default: _module1 };
  value = obj;
} else {
  value = _module1;
}
let closure_5 = require(dependencyMap[4]);
let closure_6 = _module(require(dependencyMap[5]));
let closure_7 = require(dependencyMap[6]);
let closure_8 = [278959, 75742532, 72731904, 74502400, 70346496, 1592082944, 1592131588, -1438253052, 939524580, 1224737072, -1862270350, 771752394];

export default value.default.forwardRef(function SliderComponent(onSlidingComplete, ref) {
  let onSlidingStart;
  let tmp16;
  ({ onValueChange: closure_0, onSlidingStart } = onSlidingComplete);
  const dependencyMap = onSlidingStart;
  onSlidingComplete = onSlidingComplete.onSlidingComplete;
  let closure_2 = onSlidingComplete;
  const onAccessibilityAction = onSlidingComplete.onAccessibilityAction;
  let closure_3 = onAccessibilityAction;
  let SLIDER_DEFAULT_INITIAL_VALUE = onSlidingComplete.value;
  if (undefined === SLIDER_DEFAULT_INITIAL_VALUE) {
    SLIDER_DEFAULT_INITIAL_VALUE = require(dependencyMap[7]).constants.SLIDER_DEFAULT_INITIAL_VALUE;
  }
  const minimumValue = onSlidingComplete.minimumValue;
  let num2 = 0;
  if (undefined !== minimumValue) {
    num2 = minimumValue;
  }
  const value = num2;
  const maximumValue = onSlidingComplete.maximumValue;
  let num3 = 1;
  if (undefined !== maximumValue) {
    num3 = maximumValue;
  }
  const step = onSlidingComplete.step;
  let num4 = 0;
  if (undefined !== step) {
    num4 = step;
  }
  const inverted = onSlidingComplete.inverted;
  const tapToSeek = onSlidingComplete.tapToSeek;
  let lowerLimit = onSlidingComplete.lowerLimit;
  if (undefined === lowerLimit) {
    const Platform = RN.Platform;
    let obj = { web: num2, default: require(dependencyMap[7]).constants.LIMIT_MIN_VALUE };
    lowerLimit = Platform.select(obj);
  }
  const RN = lowerLimit;
  let upperLimit = onSlidingComplete.upperLimit;
  if (undefined === upperLimit) {
    const Platform2 = RN.Platform;
    obj = { web: num3, default: require(dependencyMap[7]).constants.LIMIT_MAX_VALUE };
    upperLimit = Platform2.select(obj);
  }
  const mod = upperLimit;
  const defaultResult = closure_3.default(onSlidingComplete, closure_8);
  let SLIDER_DEFAULT_INITIAL_VALUE2 = num2;
  if (null != SLIDER_DEFAULT_INITIAL_VALUE) {
    SLIDER_DEFAULT_INITIAL_VALUE2 = SLIDER_DEFAULT_INITIAL_VALUE;
  }
  if (null == SLIDER_DEFAULT_INITIAL_VALUE2) {
    SLIDER_DEFAULT_INITIAL_VALUE2 = require(dependencyMap[7]).constants.SLIDER_DEFAULT_INITIAL_VALUE;
  }
  const defaultResult1 = closure_2.default(value.useState(SLIDER_DEFAULT_INITIAL_VALUE2), 2);
  const React = defaultResult1[1];
  [tmp16, closure_8] = closure_2.default(value.useState(0), 2);
  let DEFAULT_STEP_RESOLUTION = num4;
  if (!num4) {
    DEFAULT_STEP_RESOLUTION = require(dependencyMap[7]).constants.DEFAULT_STEP_RESOLUTION;
  }
  const result = (num3 - num2) / DEFAULT_STEP_RESOLUTION;
  let tmp20 = num4;
  if (!num4) {
    tmp20 = result;
  }
  const _getRequireWildcardCache = tmp20;
  obj = {};
  if (num4) {
    DEFAULT_STEP_RESOLUTION = result;
  }
  obj.length = DEFAULT_STEP_RESOLUTION + 1;
  const defaultResult2 = closure_2.default(value.useState(0), 2);
  const tmp4 = undefined !== tapToSeek && tapToSeek;
  if ("ios" === RN.Platform.OS) {
    let defaultSlider = require(dependencyMap[8]).styles.defaultSlideriOS;
  } else {
    defaultSlider = require(dependencyMap[8]).styles.defaultSlider;
  }
  const items = [defaultSlider, defaultResult.style];
  function onValueChangeEvent(nativeEvent) {
    if (callback) {
      callback(nativeEvent.nativeEvent.value);
    }
    callback2(nativeEvent.nativeEvent.value);
  }
  if ("boolean" === typeof defaultResult.disabled) {
    let disabled = defaultResult.disabled;
  } else {
    const accessibilityState = defaultResult.accessibilityState;
    disabled = undefined;
    if (null != accessibilityState) {
      disabled = accessibilityState.disabled;
    }
    disabled = true === disabled;
  }
  if ("boolean" === typeof defaultResult.disabled) {
    const _Object = Object;
    const obj1 = { disabled: defaultResult.disabled };
    let accessibilityState2 = Object.assign({}, defaultResult.accessibilityState, obj1);
  } else {
    accessibilityState2 = defaultResult.accessibilityState;
  }
  let fn = null;
  if (onSlidingStart) {
    fn = (nativeEvent) => {
      onSlidingStart(nativeEvent.nativeEvent.value);
    };
  }
  let fn2 = null;
  if (onSlidingComplete) {
    fn2 = (nativeEvent) => {
      onSlidingComplete(nativeEvent.nativeEvent.value);
    };
  }
  let fn3 = null;
  if (onAccessibilityAction) {
    fn3 = (arg0) => {
      onAccessibilityAction(arg0);
    };
  }
  let tmp27;
  if (!Number.isNaN(SLIDER_DEFAULT_INITIAL_VALUE)) {
    if (SLIDER_DEFAULT_INITIAL_VALUE) {
      tmp27 = SLIDER_DEFAULT_INITIAL_VALUE;
    }
  }
  const items1 = [lowerLimit, upperLimit];
  const effect = value.useEffect(() => {
    if (lowerLimit >= upperLimit) {
      const _console = console;
      console.warn("Invalid configuration: lower limit is supposed to be smaller than upper limit");
    }
  }, items1);
  const obj2 = {
    onLayout(nativeEvent) {
      callback3(nativeEvent.nativeEvent.layout.width);
    },
    style: items2
  };
  const items2 = [items, { justifyContent: "center" }];
  if (defaultResult.StepMarker) {
    const obj3 = { options: arr, sliderWidth: tmp16, currentValue: defaultResult1[0] };
    ({ renderStepNumber: obj6.renderStepNumber, thumbImage: obj6.thumbImage, StepMarker: obj6.StepMarker } = defaultResult);
    obj3.isLTR = tmp3;
    let jsxResult = React.jsx(require(dependencyMap[9]).StepsIndicator, obj3);
  } else {
    jsxResult = null;
  }
  const items3 = [jsxResult, ];
  const obj4 = { minimumValue: num2, maximumValue: num3, step: num4, inverted: undefined !== inverted && inverted, tapToSeek: tmp4, value: tmp27, lowerLimit, upperLimit, accessibilityState: accessibilityState2 };
  if ("web" === RN.Platform.OS) {
    let thumbImage = defaultResult.thumbImage;
  } else if (!defaultResult.StepMarker) {
    const Image = RN.Image;
    thumbImage = Image.resolveAssetSource(defaultResult.thumbImage);
  }
  obj4.thumbImage = thumbImage;
  obj4.ref = ref;
  const items4 = [{ zIndex: 1, width: tmp16 }, defaultSlider, { flexDirection: null, justifyContent: null }];
  obj4.style = items4;
  obj4.onChange = onValueChangeEvent;
  obj4.onRNCSliderSlidingStart = fn;
  obj4.onRNCSliderSlidingComplete = fn2;
  obj4.onRNCSliderValueChange = onValueChangeEvent;
  obj4.disabled = disabled;
  obj4.onStartShouldSetResponder = function onStartShouldSetResponder() {
    return true;
  };
  obj4.onResponderTerminationRequest = function onResponderTerminationRequest() {
    return false;
  };
  obj4.onRNCSliderAccessibilityAction = fn3;
  if (!defaultResult.thumbImage) {
    let str = defaultResult.thumbTintColor;
  } else {
    str = "transparent";
  }
  obj4.thumbTintColor = str;
  items3[1] = <mod.default {...Object.assign({}, defaultResult, obj4)} />;
  obj2.children = items3;
  return <RN.View {...obj2} />;
});
