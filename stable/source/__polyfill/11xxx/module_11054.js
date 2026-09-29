// Module ID: 11054
// Function ID: 11055
// Dependencies: [19, 21, 11055, 11058, 11062, 11063, 11064]

// Module 11054
import _mod11055 from "module_11055" /* 11055 */;
import _mod11058 from "module_11058" /* 11058 */;
import _mod11062 from "module_11062" /* 11062 */;
import _mod11063 from "module_11063" /* 11063 */;
import CarouselLayout from "CarouselLayout" /* 11064 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11055.useInitProps(defaultIndex);
  const commonVariables = _mod11058.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11062.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11063.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});
