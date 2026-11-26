// Module ID: 11177
// Function ID: 11178
// Dependencies: [19, 21, 11178, 11181, 11185, 11186, 11187]

// Module 11177
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 11178 */;
import useCommonVariables from "useCommonVariables" /* 11181 */;
import react3 from "react" /* 11185 */;
import _mod11186 from "module_11186" /* 11186 */;
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
  const GlobalStateProvider = _mod11186.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
