// Module ID: 9967
// Function ID: 9968
// Dependencies: [19, 21, 9968, 9971, 9975, 9976, 9977]

// Module 9967
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(9968) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(9971) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(9975) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(9977) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9976) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
