// Module ID: 9413
// Function ID: 9414
// Dependencies: [19, 21, 9414, 9417, 9421, 9422, 9423]

// Module 9413
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 9414 */;
import useCommonVariables from "useCommonVariables" /* 9417 */;
import react3 from "react" /* 9421 */;
import _mod9422 from "module_9422" /* 9422 */;
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
  const GlobalStateProvider = _mod9422.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
