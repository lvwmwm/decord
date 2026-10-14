// Module ID: 10127
// Function ID: 10128
// Dependencies: [19, 21, 10128, 10131, 10135, 10136, 10137]

// Module 10127
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10128 */;
import _mod10131 from "module_10131" /* 10131 */;
import react3 from "react" /* 10135 */;
import _mod10136 from "module_10136" /* 10136 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10131;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10136.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
