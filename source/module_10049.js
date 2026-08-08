// Module ID: 10049
// Function ID: 10050
// Dependencies: [19, 21, 10050, 10053, 10057, 10058, 10059]

// Module 10049
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(10050) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(10053) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(10057) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(10059) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(10058) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
