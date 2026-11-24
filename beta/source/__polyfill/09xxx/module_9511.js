// Module ID: 9511
// Function ID: 9512
// Dependencies: [19, 21, 9512, 9515, 9519, 9520, 9521]

// Module 9511
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 9512 */;
import useCommonVariables from "useCommonVariables" /* 9515 */;
import react3 from "react" /* 9519 */;
import _mod9520 from "module_9520" /* 9520 */;
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
  const GlobalStateProvider = _mod9520.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
