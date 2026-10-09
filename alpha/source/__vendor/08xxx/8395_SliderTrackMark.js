// Module ID: 8395
// Function ID: 8396
// Name: SliderTrackMark
// Dependencies: [8389, 19, 17, 21, 8393]
// Exports: SliderTrackMark

// Module 8395 (SliderTrackMark)
import react2 from "react" /* 19 */;
import styles from "styles" /* 8393 */;
import module_8389 from "module_8389" /* 8389 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

const react = module_8389(react2);

export const SliderTrackMark = function SliderTrackMark(arg0) {
  let StepMarker;
  let currentValue;
  let index;
  let isTrue;
  let max;
  let min;
  let thumbImage;
  ({ isTrue, thumbImage, StepMarker } = arg0);
  ({ index, currentValue, min, max } = arg0);
  const jsxs = Fragment.jsxs;
  const View = react_native.View;
  let jsxResult = null;
  if (StepMarker) {
    jsxResult = <StepMarker stepMarked={isTrue} index={index} currentValue={currentValue} min={min} max={max} />;
  }
  const items = [jsxResult, ];
  let jsxResult1 = null;
  if (thumbImage) {
    jsxResult1 = null;
    if (isTrue) {
      const jsx = obj.jsx;
      const View2 = tmp.View;
      const jsx2 = obj.jsx;
      const Image = tmp.Image;
      jsxResult1 = <View2 style={styles.styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{jsx2(Image, { source: thumbImage, style: styles.styles.thumbImage })}</View2>;
      const obj4 = { source: thumbImage, style: styles.styles.thumbImage };
    }
  }
  items[1] = jsxResult1;
  return <View style={styles.styles.trackMarkContainer}>{items}</View>;
};
