// Module ID: 6559
// Function ID: 6560
// Name: Form/Form
// Dependencies: [19, 17, 21, 4836, 6402, 5998, 2]

// Module 6559 (Form/Form)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import RedesignCompat from "RedesignCompat" /* 5998 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ form: { flex: 1 }, redesign: { paddingTop: 16 } });
const context = react.createContext({ isForm: false });
const forwardRefResult = react.forwardRef((keyboardShouldPersistTaps, ref) => {
  let children;
  let contentContainerStyle;
  let onLayout;
  let onScroll;
  let scrollsToTop;
  let style;
  let str = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
  ({ style, children } = keyboardShouldPersistTaps);
  if (str === undefined) {
    str = "never";
  }
  let flag = keyboardShouldPersistTaps.alwaysBounceVertical;
  if (flag === undefined) {
    flag = true;
  }
  ({ contentContainerStyle, onScroll, scrollsToTop, onLayout } = keyboardShouldPersistTaps);
  const tmp = closure_6();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  let redesign = react.useContext(RedesignCompat.RedesignCompatContext);
  const items = [tmp.form, style, ];
  const Provider = context.Provider;
  if (redesign) {
    redesign = tmp.redesign;
  }
  items[2] = redesign;
  const items1 = [, ];
  const obj3 = { paddingBottom: 38 + insets.bottom };
  items1[0] = obj3;
  items1[1] = contentContainerStyle;
  return <Provider value={{ isForm: true }}>{null}</Provider>;
});
const result = size.fileFinishedImporting("design/void/Form/native/Form.tsx");

export default forwardRefResult;
export const FormContext = context;
