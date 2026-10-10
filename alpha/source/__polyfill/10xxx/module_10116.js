// Module ID: 10116
// Function ID: 10117
// Dependencies: [19, 21, 10117, 10120, 10124, 10125, 10126]

// Module 10116
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10117 */;
import _mod10120 from "module_10120" /* 10120 */;
import react3 from "react" /* 10124 */;
import _mod10125 from "module_10125" /* 10125 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10120;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10125.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
