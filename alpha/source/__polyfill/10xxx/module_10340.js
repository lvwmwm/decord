// Module ID: 10340
// Function ID: 10341
// Dependencies: [19, 21, 10341, 10344, 10348, 10349, 10350]

// Module 10340
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10341 */;
import _mod10344 from "module_10344" /* 10344 */;
import react3 from "react" /* 10348 */;
import _mod10349 from "module_10349" /* 10349 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10344;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10349.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
