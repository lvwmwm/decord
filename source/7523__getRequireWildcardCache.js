// Module ID: 7523
// Function ID: 60242
// Name: _getRequireWildcardCache
// Dependencies: [7524, 57, 29, 31, 27, 7525, 33, 7527, 7528, 7529]

// Module 7523 (_getRequireWildcardCache)
import module_7524 from "module_7524";
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG";
import jsxProd from "jsxProd";

function _getRequireWildcardCache(arg0) {
  if ("function" !== typeof WeakMap) {
    return null;
  } else {
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    const _WeakMap2 = WeakMap;
    const weakMap1 = new WeakMap();
    function _getRequireWildcardCache(arg0) {
      return arg0 ? weakMap1 : weakMap;
    }
    return _getRequireWildcardCache(arg0);
  }
}
if (!result) {
  if (null !== result) {
    let obj = _getRequireWildcardCache(undefined);
    if (obj) {
      if (obj.has(result)) {
        let value = obj.get(result);
      }
    }
    obj = Object.create(null);
    let _Object = Object;
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
        if (!hasOwnProperty.call(result, key10042)) {
          continue;
        } else {
          let ownPropertyDescriptor = null;
          if (getOwnPropertyDescriptor) {
            let _Object3 = Object;
            ownPropertyDescriptor = Object.getOwnPropertyDescriptor(result, key10042);
          }
          if (!ownPropertyDescriptor) {
            obj[key10042] = result[key10042];
            let tmp10 = ownPropertyDescriptor;
            continue;
          } else {
            let _Object4 = Object;
            let definePropertyResult1 = Object.defineProperty(obj, key10042, ownPropertyDescriptor);
            let tmp12 = ownPropertyDescriptor;
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    obj.default = result;
    value = obj;
    if (obj) {
      result = obj.set(result, obj);
      value = obj;
    }
  }
  obj = { default: result };
  value = obj;
} else {
  value = result;
}
let closure_8 = ["onValueChange", "onSlidingStart", "onSlidingComplete", "onAccessibilityAction", "value", "minimumValue", "maximumValue", "step", "inverted", "tapToSeek", "lowerLimit", "upperLimit"];

export default value.default.forwardRef(function SliderComponent(onSlidingComplete, ref) {
  let closure_8;
  let onSlidingStart;
  let require;
  let tmp16;
  ({ onValueChange: require, onSlidingStart } = onSlidingComplete);
  onSlidingComplete = onSlidingComplete.onSlidingComplete;
  const onAccessibilityAction = onSlidingComplete.onAccessibilityAction;
  let SLIDER_DEFAULT_INITIAL_VALUE = onSlidingComplete.value;
  if (undefined === SLIDER_DEFAULT_INITIAL_VALUE) {
    SLIDER_DEFAULT_INITIAL_VALUE = require(onSlidingStart[7]).constants.SLIDER_DEFAULT_INITIAL_VALUE;
  }
  const minimumValue = onSlidingComplete.minimumValue;
  let num2 = 0;
  if (undefined !== minimumValue) {
    num2 = minimumValue;
  }
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
    const Platform = lowerLimit.Platform;
    let obj = { web: num2, default: require(onSlidingStart[7]).constants.LIMIT_MIN_VALUE };
    lowerLimit = Platform.select(obj);
  }
  let upperLimit = onSlidingComplete.upperLimit;
  if (undefined === upperLimit) {
    const Platform2 = lowerLimit.Platform;
    obj = { web: num3, default: require(onSlidingStart[7]).constants.LIMIT_MAX_VALUE };
    upperLimit = Platform2.select(obj);
  }
  const defaultResult = onAccessibilityAction.default(onSlidingComplete, closure_8);
  let SLIDER_DEFAULT_INITIAL_VALUE2 = num2;
  if (null != SLIDER_DEFAULT_INITIAL_VALUE) {
    SLIDER_DEFAULT_INITIAL_VALUE2 = SLIDER_DEFAULT_INITIAL_VALUE;
  }
  if (null == SLIDER_DEFAULT_INITIAL_VALUE2) {
    SLIDER_DEFAULT_INITIAL_VALUE2 = require(onSlidingStart[7]).constants.SLIDER_DEFAULT_INITIAL_VALUE;
  }
  const defaultResult1 = onSlidingComplete.default(num2.useState(SLIDER_DEFAULT_INITIAL_VALUE2), 2);
  const jsxProd = defaultResult1[1];
  [tmp16, closure_8] = onSlidingComplete.default(num2.useState(0), 2);
  let DEFAULT_STEP_RESOLUTION = num4;
  if (!num4) {
    DEFAULT_STEP_RESOLUTION = require(onSlidingStart[7]).constants.DEFAULT_STEP_RESOLUTION;
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
  const defaultResult2 = onSlidingComplete.default(num2.useState(0), 2);
  const tmp4 = undefined !== tapToSeek && tapToSeek;
  if ("ios" === lowerLimit.Platform.OS) {
    let defaultSlider = require(onSlidingStart[8]).styles.defaultSlideriOS;
  } else {
    defaultSlider = require(onSlidingStart[8]).styles.defaultSlider;
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
  const effect = num2.useEffect(() => {
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
  items2 = [items, { justifyContent: "center" }];
  if (defaultResult.StepMarker) {
    const obj3 = { options: arr, sliderWidth: tmp16, currentValue: defaultResult1[0] };
    ({ renderStepNumber: obj6.renderStepNumber, thumbImage: obj6.thumbImage, StepMarker: obj6.StepMarker } = defaultResult);
    obj3.isLTR = tmp3;
    let jsxResult = jsxProd.jsx(require(onSlidingStart[9]).StepsIndicator, { options: arr, sliderWidth: tmp16, currentValue: defaultResult1[0] });
  } else {
    jsxResult = null;
  }
  const items3 = [jsxResult, ];
  const obj4 = { minimumValue: num2, maximumValue: num3, step: num4, inverted: undefined !== inverted && inverted, tapToSeek: tmp4, value: tmp27, lowerLimit, upperLimit, accessibilityState: accessibilityState2 };
  if ("web" === lowerLimit.Platform.OS) {
    let thumbImage = defaultResult.thumbImage;
  } else if (!defaultResult.StepMarker) {
    const Image = lowerLimit.Image;
    thumbImage = Image.resolveAssetSource(defaultResult.thumbImage);
  }
  obj4.thumbImage = thumbImage;
  obj4.ref = ref;
  const items4 = [{ zIndex: 1, width: tmp16 }, defaultSlider, { alignContent: "center", alignItems: "center" }];
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
  items3[1] = <upperLimit.default {...Object.assign({}, defaultResult, obj4)} />;
  obj2.children = items3;
  return <lowerLimit.View onLayout={function onLayout(nativeEvent) {
    callback3(nativeEvent.nativeEvent.layout.width);
  }} style={items2} />;
});
