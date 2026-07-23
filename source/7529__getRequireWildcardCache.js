// Module ID: 7529
// Function ID: 60262
// Name: _getRequireWildcardCache
// Dependencies: [31, 27, 33, 7527, 7528, 7530, 7531]
// Exports: StepsIndicator

// Module 7529 (_getRequireWildcardCache)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
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
    const _Object = Object;
    let getOwnPropertyDescriptor = Object.defineProperty;
    if (getOwnPropertyDescriptor) {
      const _Object2 = Object;
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    }
    for (const key10031 in _module) {
      let tmp14 = key10031;
      if ("default" === key10031) {
        continue;
      } else {
        let hasOwnProperty = {}.hasOwnProperty;
        if (!hasOwnProperty.call(result, key10031)) {
          continue;
        } else {
          let ownPropertyDescriptor = null;
          if (getOwnPropertyDescriptor) {
            let _Object3 = Object;
            ownPropertyDescriptor = Object.getOwnPropertyDescriptor(result, key10031);
          }
          if (!ownPropertyDescriptor) {
            obj[key10031] = result[key10031];
            let tmp9 = ownPropertyDescriptor;
            continue;
          } else {
            let _Object4 = Object;
            let definePropertyResult1 = Object.defineProperty(obj, key10031, ownPropertyDescriptor);
            let tmp11 = ownPropertyDescriptor;
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

export const StepsIndicator = function StepsIndicator(options) {
  let isLTR;
  let sliderWidth;
  options = options.options;
  const currentValue = options.currentValue;
  const StepMarker = options.StepMarker;
  const renderStepNumber = options.renderStepNumber;
  const thumbImage = options.thumbImage;
  let items = [options.length];
  ({ sliderWidth, isLTR } = options);
  const memo = StepMarker.useMemo(() => {
    const obj = {};
    if (options.length > 9) {
      let STEP_NUMBER_TEXT_FONT_BIG = options(currentValue[3]).constants.STEP_NUMBER_TEXT_FONT_SMALL;
    } else {
      STEP_NUMBER_TEXT_FONT_BIG = options(currentValue[3]).constants.STEP_NUMBER_TEXT_FONT_BIG;
    }
    obj.fontSize = STEP_NUMBER_TEXT_FONT_BIG;
    return obj;
  }, items);
  let reversed = options;
  if (isLTR) {
    reversed = options.reverse();
  }
  const items1 = [currentValue, StepMarker, options, thumbImage, renderStepNumber, memo];
  let closure_6 = StepMarker.useCallback((index) => {
    let obj = {};
    obj = { style: options(currentValue[4]).styles.stepIndicatorElement };
    obj = { isTrue: currentValue === index, index, thumbImage, StepMarker, currentValue, min: options[0], max: options[options.length - 1] };
    const items = [thumbImage.jsx(options(currentValue[5]).SliderTrackMark, { isTrue: currentValue === index, index, thumbImage, StepMarker, currentValue, min: options[0], max: options[options.length - 1] }, "" + arg1 + "-SliderTrackMark"), ];
    let jsxResult = null;
    if (renderStepNumber) {
      const obj1 = { i: index, style: memo };
      const _HermesInternal = HermesInternal;
      jsxResult = thumbImage.jsx(options(currentValue[6]).StepNumber, { i: index, style: memo }, "" + arg1 + "th-step");
    }
    items[1] = jsxResult;
    obj.children = items;
    obj.children = <renderStepNumber.View key={"" + arg1 + "-View"} isTrue={currentValue === arg0} index={arg0} thumbImage={thumbImage} StepMarker={StepMarker} currentValue={currentValue} min={options[0]} max={options[options.length - 1]} />;
    return <></>;
  }, items1);
  let obj = { pointerEvents: "none" };
  const items2 = [options(currentValue[4]).styles.stepsIndicator, ];
  obj = { marginHorizontal: sliderWidth * options(currentValue[3]).constants.MARGIN_HORIZONTAL_PADDING };
  items2[1] = obj;
  obj.style = items2;
  obj.children = reversed.map((arg0, arg1) => callback(arg0, arg1));
  return <renderStepNumber.View marginHorizontal={sliderWidth * options(currentValue[3]).constants.MARGIN_HORIZONTAL_PADDING} />;
};
