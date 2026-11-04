// Module ID: 10808
// Function ID: 10809
// Dependencies: [19, 21, 10809, 10812, 10816, 10817, 10818]

// Module 10808
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10809 */;
import useCommonVariables from "useCommonVariables" /* 10812 */;
import react3 from "react" /* 10816 */;
import _mod10817 from "module_10817" /* 10817 */;
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
  const GlobalStateProvider = _mod10817.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
