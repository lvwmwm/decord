// Module ID: 10087
// Function ID: 10088
// Dependencies: [19, 21, 10088, 10091, 10095, 10096, 10097]

// Module 10087
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10088 */;
import _mod10091 from "module_10091" /* 10091 */;
import react3 from "react" /* 10095 */;
import _mod10096 from "module_10096" /* 10096 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10091;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10096.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
