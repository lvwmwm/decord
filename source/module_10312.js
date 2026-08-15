// Module ID: 10312
// Function ID: 10313
// Dependencies: [19, 21, 10313, 10316, 10320, 10321, 10322]

// Module 10312
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(10313) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(10316) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(10320) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(10322) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(10321) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
