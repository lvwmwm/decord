// Module ID: 10758
// Function ID: 10759
// Dependencies: [19, 21, 10759, 10762, 10766, 10767, 10768]

// Module 10758
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10759 */;
import useCommonVariables from "useCommonVariables" /* 10762 */;
import react3 from "react" /* 10766 */;
import _mod10767 from "module_10767" /* 10767 */;
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
  const GlobalStateProvider = _mod10767.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
