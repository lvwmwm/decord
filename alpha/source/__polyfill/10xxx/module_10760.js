// Module ID: 10760
// Function ID: 10761
// Dependencies: [19, 21, 10761, 10764, 10768, 10769, 10770]

// Module 10760
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10761 */;
import useCommonVariables from "useCommonVariables" /* 10764 */;
import react3 from "react" /* 10768 */;
import _mod10769 from "module_10769" /* 10769 */;
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
  const GlobalStateProvider = _mod10769.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
