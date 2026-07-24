// Module ID: 9729
// Function ID: 75637
// Dependencies: [31, 33, 9730, 9733, 9737, 9738, 9739]

// Module 9729
import { jsx } from "jsxProd";

const require = arg1;

export default require("result").forwardRef((defaultIndex, ref) => {
  let obj = require(9730) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  const commonVariables = require(9733) /* useCommonVariables */.useCommonVariables(initProps);
  const obj2 = require(9733) /* useCommonVariables */;
  const propsErrorBoundary = require(9737) /* usePropsErrorBoundary */.usePropsErrorBoundary(Object.assign({}, initProps, { dataLength: initProps.dataLength }));
  obj = { value: { props: initProps, common: commonVariables } };
  obj = { ref };
  obj.children = jsx(require(9739) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9738) /* context */.GlobalStateProvider, { ref });
});
