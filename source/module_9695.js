// Module ID: 9695
// Function ID: 75425
// Dependencies: [31, 33, 9696, 9699, 9703, 9704, 9705]

// Module 9695
import { jsx } from "jsxProd";

const require = arg1;

export default require("result").forwardRef((defaultIndex, ref) => {
  let obj = require(9696) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  const commonVariables = require(9699) /* useCommonVariables */.useCommonVariables(initProps);
  const obj2 = require(9699) /* useCommonVariables */;
  const propsErrorBoundary = require(9703) /* usePropsErrorBoundary */.usePropsErrorBoundary(Object.assign({}, initProps, { dataLength: initProps.dataLength }));
  obj = { value: { props: initProps, common: commonVariables } };
  obj = { ref };
  obj.children = jsx(require(9705) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9704) /* context */.GlobalStateProvider, { ref });
});
