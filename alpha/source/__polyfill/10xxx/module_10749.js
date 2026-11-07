// Module ID: 10749
// Function ID: 10750
// Dependencies: [19, 21, 10750, 10753, 10757, 10758, 10759]

// Module 10749
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10750 */;
import useCommonVariables from "useCommonVariables" /* 10753 */;
import react3 from "react" /* 10757 */;
import _mod10758 from "module_10758" /* 10758 */;
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
  const GlobalStateProvider = _mod10758.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
