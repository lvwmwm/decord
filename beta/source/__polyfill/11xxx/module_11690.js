// Module ID: 11690
// Function ID: 11691
// Dependencies: [19, 21, 11691, 11694, 11698, 11699, 11700]

// Module 11690
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 11691 */;
import useCommonVariables from "useCommonVariables" /* 11694 */;
import react3 from "react" /* 11698 */;
import _mod11699 from "module_11699" /* 11699 */;
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
  const GlobalStateProvider = _mod11699.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
