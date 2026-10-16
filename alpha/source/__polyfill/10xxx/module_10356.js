// Module ID: 10356
// Function ID: 10357
// Dependencies: [19, 21, 10357, 10360, 10364, 10365, 10366]

// Module 10356
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10357 */;
import _mod10360 from "module_10360" /* 10360 */;
import react3 from "react" /* 10364 */;
import _mod10365 from "module_10365" /* 10365 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10360;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10365.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
