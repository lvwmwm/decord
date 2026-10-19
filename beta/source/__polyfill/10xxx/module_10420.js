// Module ID: 10420
// Function ID: 10421
// Dependencies: [19, 21, 10421, 10424, 10428, 10429, 10430]

// Module 10420
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10421 */;
import _mod10424 from "module_10424" /* 10424 */;
import react3 from "react" /* 10428 */;
import _mod10429 from "module_10429" /* 10429 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10424;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10429.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
