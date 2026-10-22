// Module ID: 10486
// Function ID: 10487
// Dependencies: [19, 21, 10487, 10490, 10494, 10495, 10496]

// Module 10486
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10487 */;
import _mod10490 from "module_10490" /* 10490 */;
import react3 from "react" /* 10494 */;
import _mod10495 from "module_10495" /* 10495 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10490;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10495.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
