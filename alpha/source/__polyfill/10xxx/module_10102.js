// Module ID: 10102
// Function ID: 10103
// Dependencies: [19, 21, 10103, 10106, 10110, 10111, 10112]

// Module 10102
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10103 */;
import _mod10106 from "module_10106" /* 10106 */;
import react3 from "react" /* 10110 */;
import _mod10111 from "module_10111" /* 10111 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10106;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10111.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
