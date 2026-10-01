// Module ID: 7915
// Function ID: 7916
// Name: SliderTrackMark
// Dependencies: [7909, 19, 17, 21, 7913]
// Exports: SliderTrackMark

// Module 7915 (SliderTrackMark)
import _mod19 from "module_19" /* 19 */;
import _mod7913 from "module_7913" /* 7913 */;
import module_7909 from "module_7909" /* 7909 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_7909(_mod19);

export const SliderTrackMark = function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  const obj2 = { style: _mod7913.styles.trackMarkContainer, children: null };
  ({ index, currentValue, min, max } = arg0);
  let jsxResult = null;
  if (StepMarker) {
    const range = { stepMarked: isTrue, index, currentValue, min, max };
    jsxResult = <StepMarker stepMarked={isTrue} index={index} currentValue={currentValue} min={min} max={max} />;
  }
  const items = [jsxResult, ];
  let jsxResult1 = null;
  if (thumbImage) {
    jsxResult1 = null;
    if (isTrue) {
      const obj3 = { style: tmp2(7913).styles.thumbImageContainer, testID: "sliderTrackMark-thumbImage", children: null };
      const obj4 = { source: thumbImage, style: tmp2(7913).styles.thumbImage };
      obj3.children = <tmp.Image source={thumbImage} style={tmp2(7913).styles.thumbImage} />;
      jsxResult1 = <tmp.View style={tmp2(7913).styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{null}</tmp.View>;
    }
  }
  items[1] = jsxResult1;
  obj2.children = items;
  return <get ActivityIndicator.View style={_mod7913.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
};
