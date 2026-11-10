// Module ID: 10630
// Function ID: 10631
// Dependencies: [19, 21, 10631, 10634, 10638, 10639, 10640]

// Module 10630
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10631 */;
import _mod10634 from "module_10634" /* 10634 */;
import react3 from "react" /* 10638 */;
import _mod10639 from "module_10639" /* 10639 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10634;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10639.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
