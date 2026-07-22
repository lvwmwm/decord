// Module ID: 7525
// Function ID: 60235
// Name: SliderTrackMark
// Dependencies: [0, 0, 0, 0, 0]
// Exports: SliderTrackMark

// Module 7525 (SliderTrackMark)
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";


export const SliderTrackMark = function SliderTrackMark(arg0) {
  let StepMarker;
  let currentValue;
  let index;
  let isTrue;
  let max;
  let min;
  let thumbImage;
  ({ isTrue, thumbImage, StepMarker } = arg0);
  let obj = { style: require(dependencyMap[4]).styles.trackMarkContainer };
  ({ index, currentValue, min, max } = arg0);
  let jsxResult = null;
  if (StepMarker) {
    obj = { stepMarked: isTrue, index, currentValue, min, max };
    jsxResult = <StepMarker {...obj} />;
  }
  const items = [jsxResult, ];
  let jsxResult1 = null;
  if (thumbImage) {
    jsxResult1 = null;
    if (isTrue) {
      obj = { style: require(dependencyMap[4]).styles.thumbImageContainer };
      const obj1 = { source: thumbImage, style: require(dependencyMap[4]).styles.thumbImage };
      obj.children = <__exportStarResult1.Image {...obj1} />;
      jsxResult1 = <__exportStarResult1.View {...obj} />;
    }
  }
  items[1] = jsxResult1;
  obj.children = items;
  return <__exportStarResult1.View {...obj} />;
};
