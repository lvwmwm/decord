// Module ID: 10357
// Function ID: 10358
// Dependencies: [19, 21, 10358, 10361, 10365, 10366, 10367]

// Module 10357
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10358 */;
import _mod10361 from "module_10361" /* 10361 */;
import react3 from "react" /* 10365 */;
import _mod10366 from "module_10366" /* 10366 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10361;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10366.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
