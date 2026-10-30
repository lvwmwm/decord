// Module ID: 10610
// Function ID: 10611
// Dependencies: [19, 21, 10611, 10614, 10618, 10619, 10620]

// Module 10610
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 10611 */;
import _mod10614 from "module_10614" /* 10614 */;
import react3 from "react" /* 10618 */;
import _mod10619 from "module_10619" /* 10619 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export default react.forwardRef((defaultIndex, ref) => {
  const obj = react2;
  const initProps = obj.useInitProps(defaultIndex);
  const dataLength = initProps.dataLength;
  const obj2 = _mod10614;
  const commonVariables = obj2.useCommonVariables(initProps);
  const obj3 = { dataLength };
  const usePropsErrorBoundary = react3.usePropsErrorBoundary;
  react3;
  const merged = Object.assign(initProps);
  const propsErrorBoundary = usePropsErrorBoundary(obj3);
  const GlobalStateProvider = _mod10619.GlobalStateProvider;
  return <GlobalStateProvider value={{ props: initProps, common: commonVariables }}>{null}</GlobalStateProvider>;
});
