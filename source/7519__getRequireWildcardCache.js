// Module ID: 7519
// Function ID: 60193
// Name: _getRequireWildcardCache
// Dependencies: []
// Exports: StepsIndicator

// Module 7519 (_getRequireWildcardCache)
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
if (!_module) {
  if (null !== _module) {
    let obj = _getRequireWildcardCache(undefined);
    if (obj) {
      if (obj.has(_module)) {
        let value = obj.get(_module);
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
        if (!hasOwnProperty.call(_module, key10031)) {
          continue;
        } else {
          let ownPropertyDescriptor = null;
          if (getOwnPropertyDescriptor) {
            let _Object3 = Object;
            ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_module, key10031);
          }
          if (!ownPropertyDescriptor) {
            obj[key10031] = _module[key10031];
            let tmp9 = ownPropertyDescriptor;
            // continue
          } else {
            let _Object4 = Object;
            let definePropertyResult1 = Object.defineProperty(obj, key10031, ownPropertyDescriptor);
            let tmp11 = ownPropertyDescriptor;
            // continue
          }
          continue;
        }
        continue;
      }
      continue;
    }
    obj.default = _module;
    value = obj;
    if (obj) {
      const result = obj.set(_module, obj);
      value = obj;
    }
  }
  obj = { default: _module };
  value = obj;
} else {
  value = _module;
}
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);

export const StepsIndicator = function StepsIndicator(options) {
  let isLTR;
  let sliderWidth;
  options = options.options;
  const require = options;
  const currentValue = options.currentValue;
  const dependencyMap = currentValue;
  const StepMarker = options.StepMarker;
  const value = StepMarker;
  const renderStepNumber = options.renderStepNumber;
  const RN = renderStepNumber;
  const thumbImage = options.thumbImage;
  const React = thumbImage;
  const items = [options.length];
  ({ sliderWidth, isLTR } = options);
  const memo = value.useMemo(() => {
    const obj = {};
    if (options.length > 9) {
      let STEP_NUMBER_TEXT_FONT_BIG = options(currentValue[3]).constants.STEP_NUMBER_TEXT_FONT_SMALL;
    } else {
      STEP_NUMBER_TEXT_FONT_BIG = options(currentValue[3]).constants.STEP_NUMBER_TEXT_FONT_BIG;
    }
    obj.fontSize = STEP_NUMBER_TEXT_FONT_BIG;
    return obj;
  }, items);
  const _getRequireWildcardCache = memo;
  let reversed = options;
  if (isLTR) {
    reversed = options.reverse();
  }
  const items1 = [currentValue, StepMarker, options, thumbImage, renderStepNumber, memo];
  let closure_6 = value.useCallback((index) => {
    let obj = {};
    obj = { style: options(currentValue[4]).styles.stepIndicatorElement };
    obj = { isTrue: currentValue === index, index, thumbImage, StepMarker, currentValue, min: options[0], max: options[closure_0.length - 1] };
    const items = [thumbImage.jsx(options(currentValue[5]).SliderTrackMark, obj, "" + arg1 + "-SliderTrackMark"), ];
    let jsxResult = null;
    if (renderStepNumber) {
      const obj1 = { i: index, style: memo };
      const _HermesInternal = HermesInternal;
      jsxResult = thumbImage.jsx(options(currentValue[6]).StepNumber, obj1, "" + arg1 + "th-step");
    }
    items[1] = jsxResult;
    obj.children = items;
    obj.children = <renderStepNumber.View key={"" + arg1 + "-View"} {...obj} />;
    return <></>;
  }, items1);
  let obj = { pointerEvents: "none" };
  const items2 = [require(dependencyMap[4]).styles.stepsIndicator, ];
  obj = { marginHorizontal: sliderWidth * require(dependencyMap[3]).constants.MARGIN_HORIZONTAL_PADDING };
  items2[1] = obj;
  obj.style = items2;
  obj.children = reversed.map((arg0, arg1) => callback(arg0, arg1));
  return <RN.View {...obj} />;
};
