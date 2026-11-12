// Module ID: 10781
// Function ID: 10782
// Dependencies: [19, 21, 10782, 10785, 10789, 10790, 10791]

// Module 10781
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10782 */;
import useCommonVariables from "useCommonVariables" /* 10785 */;
import react3 from "react" /* 10789 */;
import _mod10790 from "module_10790" /* 10790 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = useCommonVariables;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10790.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
