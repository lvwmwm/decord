// Module ID: 9712
// Function ID: 9713
// Dependencies: [19, 21, 9713, 9716, 9720, 9721, 9722]

// Module 9712
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(9713) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(9716) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(9720) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(9722) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9721) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
