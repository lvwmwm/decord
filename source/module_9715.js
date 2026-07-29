// Module ID: 9715
// Function ID: 9716
// Dependencies: [19, 21, 9716, 9719, 9723, 9724, 9725]

// Module 9715
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(9716) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(9719) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(9723) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(9725) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9724) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
