// Module ID: 11093
// Function ID: 11094
// Dependencies: [19, 21, 11094, 11097, 11101, 11102, 11103]

// Module 11093
import _mod11094 from "module_11094" /* 11094 */;
import _mod11097 from "module_11097" /* 11097 */;
import _mod11101 from "module_11101" /* 11101 */;
import _mod11102 from "module_11102" /* 11102 */;
import CarouselLayout from "CarouselLayout" /* 11103 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11094.useInitProps(defaultIndex);
  const commonVariables = _mod11097.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11101.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11102.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});
