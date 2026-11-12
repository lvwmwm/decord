// Module ID: 11624
// Function ID: 11625
// Dependencies: [19, 21, 11625, 11628, 11632, 11633, 11634]

// Module 11624
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 11625 */;
import useCommonVariables from "useCommonVariables" /* 11628 */;
import react3 from "react" /* 11632 */;
import _mod11633 from "module_11633" /* 11633 */;
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
  const GlobalStateProvider = _mod11633.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
