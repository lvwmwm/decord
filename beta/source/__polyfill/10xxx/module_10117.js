// Module ID: 10117
// Function ID: 10118
// Dependencies: [19, 21, 10118, 10121, 10125, 10126, 10127]

// Module 10117
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10118 */;
import _mod10121 from "module_10121" /* 10121 */;
import react3 from "react" /* 10125 */;
import _mod10126 from "module_10126" /* 10126 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10121;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10126.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
