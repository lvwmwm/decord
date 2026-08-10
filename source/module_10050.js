// Module ID: 10050
// Function ID: 10051
// Dependencies: [19, 21, 10051, 10054, 10058, 10059, 10060]

// Module 10050
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(10051) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(10054) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(10058) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(10060) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(10059) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
