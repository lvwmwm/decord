// Module ID: 10548
// Function ID: 10549
// Dependencies: [19, 21, 10549, 10552, 10556, 10557, 10558]

// Module 10548
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10549 */;
import _mod10552 from "module_10552" /* 10552 */;
import react3 from "react" /* 10556 */;
import _mod10557 from "module_10557" /* 10557 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10552;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10557.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
