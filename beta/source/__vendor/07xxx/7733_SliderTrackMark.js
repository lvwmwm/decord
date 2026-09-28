// Module ID: 7733
// Function ID: 7734
// Name: SliderTrackMark
// Dependencies: [7727, 19, 17, 21, 7731]
// Exports: SliderTrackMark

// Module 7733 (SliderTrackMark)
import _mod19 from "module_19" /* 19 */;
import _mod7731 from "module_7731" /* 7731 */;
import module_7727 from "module_7727" /* 7727 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_7727(_mod19);

export const SliderTrackMark = function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  const obj2 = { style: _mod7731.styles.trackMarkContainer, children: null };
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
      const obj3 = { style: tmp2(7731).styles.thumbImageContainer, testID: "sliderTrackMark-thumbImage", children: null };
      const obj4 = { source: thumbImage, style: tmp2(7731).styles.thumbImage };
      obj3.children = <tmp.Image source={thumbImage} style={tmp2(7731).styles.thumbImage} />;
      jsxResult1 = <tmp.View style={tmp2(7731).styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{null}</tmp.View>;
    }
  }
  items[1] = jsxResult1;
  obj2.children = items;
  return <get ActivityIndicator.View style={_mod7731.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
};
