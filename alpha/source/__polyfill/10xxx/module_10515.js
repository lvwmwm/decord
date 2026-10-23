// Module ID: 10515
// Function ID: 10516
// Dependencies: [19, 21, 10516, 10519, 10523, 10524, 10525]

// Module 10515
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10516 */;
import _mod10519 from "module_10519" /* 10519 */;
import react3 from "react" /* 10523 */;
import _mod10524 from "module_10524" /* 10524 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10519;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10524.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
