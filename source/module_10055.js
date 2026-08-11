// Module ID: 10055
// Function ID: 10056
// Dependencies: [19, 21, 10056, 10059, 10063, 10064, 10065]

// Module 10055
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(10056) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(10059) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(10063) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(10065) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(10064) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
