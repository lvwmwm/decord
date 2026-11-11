// Module ID: 11630
// Function ID: 11631
// Dependencies: [19, 21, 11631, 11634, 11638, 11639, 11640]

// Module 11630
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 11631 */;
import useCommonVariables from "useCommonVariables" /* 11634 */;
import react3 from "react" /* 11638 */;
import _mod11639 from "module_11639" /* 11639 */;
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
  const GlobalStateProvider = _mod11639.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
