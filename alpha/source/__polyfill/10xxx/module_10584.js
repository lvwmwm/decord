// Module ID: 10584
// Function ID: 10585
// Dependencies: [19, 21, 10585, 10588, 10592, 10593, 10594]

// Module 10584
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10585 */;
import _mod10588 from "module_10588" /* 10588 */;
import react3 from "react" /* 10592 */;
import _mod10593 from "module_10593" /* 10593 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10588;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10593.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
