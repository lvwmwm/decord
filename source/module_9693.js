// Module ID: 9693
// Function ID: 75362
// Dependencies: [31, 33, 9694, 9697, 9701, 9702, 9703]

// Module 9693
import { jsx } from "jsxProd";

const require = arg1;

export default require("result").forwardRef((defaultIndex, ref) => {
  let obj = require(9694) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  const commonVariables = require(9697) /* useCommonVariables */.useCommonVariables(initProps);
  const obj2 = require(9697) /* useCommonVariables */;
  const propsErrorBoundary = require(9701) /* usePropsErrorBoundary */.usePropsErrorBoundary(Object.assign({}, initProps, { dataLength: initProps.dataLength }));
  obj = { value: { props: initProps, common: commonVariables } };
  obj = { ref };
  obj.children = jsx(require(9703) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9702) /* context */.GlobalStateProvider, { ref });
});
