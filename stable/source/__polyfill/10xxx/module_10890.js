// Module ID: 10890
// Function ID: 10891
// Dependencies: [19, 21, 10891, 10894, 10898, 10899, 10900]

// Module 10890
import _mod10891 from "module_10891" /* 10891 */;
import _mod10894 from "module_10894" /* 10894 */;
import _mod10898 from "module_10898" /* 10898 */;
import _mod10899 from "module_10899" /* 10899 */;
import CarouselLayout from "CarouselLayout" /* 10900 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10891.useInitProps(defaultIndex);
  const commonVariables = _mod10894.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10898.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10899.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});
