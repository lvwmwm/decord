// Module ID: 9983
// Function ID: 9984
// Dependencies: [19, 21, 9984, 9987, 9991, 9992, 9993]

// Module 9983
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(9984) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(9987) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(9991) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(9993) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9992) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
