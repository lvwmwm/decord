// Module ID: 10108
// Function ID: 10109
// Dependencies: [19, 21, 10109, 10112, 10116, 10117, 10118]

// Module 10108
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(10109) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(10112) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(10116) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(10118) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(10117) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
