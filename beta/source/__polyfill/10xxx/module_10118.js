// Module ID: 10118
// Function ID: 10119
// Dependencies: [19, 21, 10119, 10122, 10126, 10127, 10128]

// Module 10118
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10119 */;
import _mod10122 from "module_10122" /* 10122 */;
import react3 from "react" /* 10126 */;
import _mod10127 from "module_10127" /* 10127 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10122;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10127.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
