// Module ID: 11057
// Function ID: 11058
// Dependencies: [19, 21, 11058, 11061, 11065, 11066, 11067]

// Module 11057
import _mod11058 from "module_11058" /* 11058 */;
import _mod11061 from "module_11061" /* 11061 */;
import _mod11065 from "module_11065" /* 11065 */;
import _mod11066 from "module_11066" /* 11066 */;
import CarouselLayout from "CarouselLayout" /* 11067 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11058.useInitProps(defaultIndex);
  const commonVariables = _mod11061.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11065.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11066.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});
