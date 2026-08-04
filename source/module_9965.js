// Module ID: 9965
// Function ID: 9966
// Dependencies: [19, 21, 9966, 9969, 9973, 9974, 9975]

// Module 9965
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(9966) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(9969) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(9973) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(9975) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9974) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
