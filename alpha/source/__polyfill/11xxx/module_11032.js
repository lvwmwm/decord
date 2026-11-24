// Module ID: 11032
// Function ID: 11033
// Dependencies: [19, 21, 11033, 11036, 11040, 11041, 11042]

// Module 11032
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 11033 */;
import useCommonVariables from "useCommonVariables" /* 11036 */;
import react3 from "react" /* 11040 */;
import _mod11041 from "module_11041" /* 11041 */;
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
  const GlobalStateProvider = _mod11041.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
