// Module ID: 11178
// Function ID: 11179
// Dependencies: [19, 21, 11179, 11182, 11186, 11187, 11188]

// Module 11178
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 11179 */;
import useCommonVariables from "useCommonVariables" /* 11182 */;
import react3 from "react" /* 11186 */;
import _mod11187 from "module_11187" /* 11187 */;
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
  const GlobalStateProvider = _mod11187.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
