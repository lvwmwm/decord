// Module ID: 10223
// Function ID: 10224
// Dependencies: [19, 21, 10224, 10227, 10231, 10232, 10233]

// Module 10223
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10224 */;
import _mod10227 from "module_10227" /* 10227 */;
import react3 from "react" /* 10231 */;
import _mod10232 from "module_10232" /* 10232 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10227;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10232.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
