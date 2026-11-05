// Module ID: 10814
// Function ID: 10815
// Dependencies: [19, 21, 10815, 10818, 10822, 10823, 10824]

// Module 10814
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10815 */;
import useCommonVariables from "useCommonVariables" /* 10818 */;
import react3 from "react" /* 10822 */;
import _mod10823 from "module_10823" /* 10823 */;
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
  const GlobalStateProvider = _mod10823.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
