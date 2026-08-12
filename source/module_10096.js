// Module ID: 10096
// Function ID: 10097
// Dependencies: [19, 21, 10097, 10100, 10104, 10105, 10106]

// Module 10096
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(10097) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(10100) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(10104) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(10106) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(10105) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
