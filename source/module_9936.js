// Module ID: 9936
// Function ID: 9937
// Dependencies: [19, 21, 9937, 9940, 9944, 9945, 9946]

// Module 9936
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(9937) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(9940) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(9944) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(9946) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9945) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
