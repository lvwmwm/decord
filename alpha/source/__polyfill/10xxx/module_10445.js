// Module ID: 10445
// Function ID: 10446
// Dependencies: [19, 21, 10446, 10449, 10453, 10454, 10455]

// Module 10445
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10446 */;
import _mod10449 from "module_10449" /* 10449 */;
import react3 from "react" /* 10453 */;
import _mod10454 from "module_10454" /* 10454 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10449;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10454.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
