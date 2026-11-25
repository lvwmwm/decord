// Module ID: 11131
// Function ID: 11132
// Dependencies: [19, 21, 11132, 11135, 11139, 11140, 11141]

// Module 11131
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 11132 */;
import useCommonVariables from "useCommonVariables" /* 11135 */;
import react3 from "react" /* 11139 */;
import _mod11140 from "module_11140" /* 11140 */;
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
  const GlobalStateProvider = _mod11140.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
