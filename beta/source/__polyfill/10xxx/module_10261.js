// Module ID: 10261
// Function ID: 10262
// Dependencies: [19, 21, 10262, 10265, 10269, 10270, 10271]

// Module 10261
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10262 */;
import _mod10265 from "module_10265" /* 10265 */;
import react3 from "react" /* 10269 */;
import _mod10270 from "module_10270" /* 10270 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10265;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10270.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
