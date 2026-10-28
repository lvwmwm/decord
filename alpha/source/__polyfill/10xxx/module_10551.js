// Module ID: 10551
// Function ID: 10552
// Dependencies: [19, 21, 10552, 10555, 10559, 10560, 10561]

// Module 10551
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10552 */;
import _mod10555 from "module_10555" /* 10555 */;
import react3 from "react" /* 10559 */;
import _mod10560 from "module_10560" /* 10560 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10555;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10560.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
