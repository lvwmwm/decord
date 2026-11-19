// Module ID: 9391
// Function ID: 9392
// Dependencies: [19, 21, 9392, 9395, 9399, 9400, 9401]

// Module 9391
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 9392 */;
import useCommonVariables from "useCommonVariables" /* 9395 */;
import react3 from "react" /* 9399 */;
import _mod9400 from "module_9400" /* 9400 */;
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
  const GlobalStateProvider = _mod9400.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
