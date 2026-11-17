// Module ID: 10132
// Function ID: 10133
// Dependencies: [19, 21, 10133, 10136, 10140, 10141, 10142]

// Module 10132
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10133 */;
import useCommonVariables from "useCommonVariables" /* 10136 */;
import react3 from "react" /* 10140 */;
import _mod10141 from "module_10141" /* 10141 */;
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
  const GlobalStateProvider = _mod10141.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
