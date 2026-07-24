// Module ID: 7665
// Function ID: 60904
// Name: SliderTrackMark
// Dependencies: [7659, 31, 27, 33, 7663]
// Exports: SliderTrackMark

// Module 7665 (SliderTrackMark)
import module_7659 from "module_7659";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";


export const SliderTrackMark = function SliderTrackMark(arg0) {
  let StepMarker;
  let currentValue;
  let index;
  let isTrue;
  let max;
  let min;
  let thumbImage;
  ({ isTrue, thumbImage, StepMarker } = arg0);
  let obj = { style: require(7663) /* styles */.styles.trackMarkContainer };
  ({ index, currentValue, min, max } = arg0);
  let jsxResult = null;
  if (StepMarker) {
    obj = { stepMarked: isTrue, index, currentValue, min, max };
    jsxResult = <StepMarker stepMarked={isTrue} index={index} currentValue={currentValue} min={min} max={max} />;
  }
  const items = [jsxResult, ];
  let jsxResult1 = null;
  if (thumbImage) {
    jsxResult1 = null;
    if (isTrue) {
      obj = { style: require(7663) /* styles */.styles.thumbImageContainer };
      const obj1 = { source: thumbImage, style: require(7663) /* styles */.styles.thumbImage };
      obj.children = <get ActivityIndicator.Image source={thumbImage} style={require(7663) /* styles */.styles.thumbImage} />;
      jsxResult1 = <get ActivityIndicator.View style={require(7663) /* styles */.styles.thumbImageContainer} />;
    }
  }
  items[1] = jsxResult1;
  obj.children = items;
  return <get ActivityIndicator.View style={require(7663) /* styles */.styles.trackMarkContainer} />;
};
