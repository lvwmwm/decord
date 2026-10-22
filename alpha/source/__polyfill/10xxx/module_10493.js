// Module ID: 10493
// Function ID: 10494
// Dependencies: [19, 21, 10494, 10497, 10501, 10502, 10503]

// Module 10493
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10494 */;
import _mod10497 from "module_10497" /* 10497 */;
import react3 from "react" /* 10501 */;
import _mod10502 from "module_10502" /* 10502 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10497;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10502.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
