// Module ID: 5158
// Function ID: 44956
// Name: context
// Dependencies: [31, 27, 33, 4131, 5159, 5163, 2]

// Module 5158 (context)
import importAllResult from "result";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ form: { flex: 1 }, redesign: { paddingTop: 16 } });
const context = importAllResult.createContext({ isForm: false });
const forwardRefResult = importAllResult.forwardRef((keyboardShouldPersistTaps, ref) => {
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
  const tmp = callback();
  let redesign = importAllResult.useContext(require(5163) /* context */.RedesignCompatContext);
  let obj = { value: { isForm: true } };
  obj = { ref, onLayout, scrollsToTop };
  const items = [tmp.form, style, ];
  if (redesign) {
    redesign = tmp.redesign;
  }
  items[2] = redesign;
  obj.style = items;
  obj = { paddingBottom: 38 + importDefault(5159)().insets.bottom };
  const items1 = [obj, contentContainerStyle];
  obj.contentContainerStyle = items1;
  obj.contentInset = { top: 0 };
  obj.automaticallyAdjustContentInsets = false;
  obj.keyboardShouldPersistTaps = str;
  obj.alwaysBounceVertical = flag;
  obj.onScroll = onScroll;
  obj.children = children;
  obj.children = <ScrollView paddingBottom={38 + importDefault(5159)().insets.bottom} />;
  return <context.Provider paddingBottom={38 + importDefault(5159)().insets.bottom} />;
});
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/Form.tsx");

export default forwardRefResult;
export const FormContext = context;
