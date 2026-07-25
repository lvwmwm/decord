// Module ID: 9653
// Function ID: 75232
// Dependencies: [31, 33, 9654, 9657, 9661, 9662, 9663]

// Module 9653
import { jsx } from "jsxProd";

const require = arg1;

export default require("result").forwardRef((defaultIndex, ref) => {
  let obj = require(9654) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  const commonVariables = require(9657) /* useCommonVariables */.useCommonVariables(initProps);
  const obj2 = require(9657) /* useCommonVariables */;
  const propsErrorBoundary = require(9661) /* usePropsErrorBoundary */.usePropsErrorBoundary(Object.assign({}, initProps, { dataLength: initProps.dataLength }));
  obj = { value: { props: initProps, common: commonVariables } };
  obj = { ref };
  obj.children = jsx(require(9663) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9662) /* context */.GlobalStateProvider, { ref });
});
