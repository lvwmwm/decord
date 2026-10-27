// Module ID: 10519
// Function ID: 10520
// Dependencies: [19, 21, 10520, 10523, 10527, 10528, 10529]

// Module 10519
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10520 */;
import _mod10523 from "module_10523" /* 10523 */;
import react3 from "react" /* 10527 */;
import _mod10528 from "module_10528" /* 10528 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10523;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10528.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
