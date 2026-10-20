// Module ID: 10434
// Function ID: 10435
// Dependencies: [19, 21, 10435, 10438, 10442, 10443, 10444]

// Module 10434
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10435 */;
import _mod10438 from "module_10438" /* 10438 */;
import react3 from "react" /* 10442 */;
import _mod10443 from "module_10443" /* 10443 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10438;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10443.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
