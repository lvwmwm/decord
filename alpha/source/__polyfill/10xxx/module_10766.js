// Module ID: 10766
// Function ID: 10767
// Dependencies: [19, 21, 10767, 10770, 10774, 10775, 10776]

// Module 10766
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10767 */;
import useCommonVariables from "useCommonVariables" /* 10770 */;
import react3 from "react" /* 10774 */;
import _mod10775 from "module_10775" /* 10775 */;
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
  const GlobalStateProvider = _mod10775.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
