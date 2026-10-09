// Module ID: 16047
// Function ID: 16048
// Name: UserSettingsDesignSystemText
// Dependencies: [19, 17, 21, 558, 576, 4779, 587, 6269, 5088, 6186, 5087, 5374, 2]

// Module 16047 (UserSettingsDesignSystemText)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4779 */;
import TableRow2 from "TableRow" /* 6186 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const TextVariants = tmp(5088);
const Stack_Stack = tmp(5374);
const TableRowGroup2 = tmp(6269);
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsDesignSystemText() {
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  if (cResult[0] !== token) {
    const obj3 = { paddingHorizontal: token };
    cResult[0] = token;
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const TEXT_VARIANT = TextVariants.TEXT_VARIANT;
    const tmp9 = <TableRowGroup title="Text Variants" hasIcons={false}>{TEXT_VARIANT.map((variant) => {
      let tmp = null;
      if ("code" !== variant) {
        const TableRow = TableRow2.TableRow;
        tmp = <TableRow key={arg0} label={null} />;
      }
      return tmp;
    })}</TableRowGroup>;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp6) {
    ({ spacing: nativeDefault.space.PX_24, style: tmp6, children: tmp7 });
    const Stack = Stack_Stack.Stack;
    const tmp13 = <ScrollView>{null}</ScrollView>;
    cResult[3] = tmp6;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : (function UserSettingsDesignSystemText() {
  let TEXT_VARIANT;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  ({ spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: null });
  const Stack = Stack_Stack.Stack;
  ({
    title: "Text Variants",
    hasIcons: false,
    children: TEXT_VARIANT.map((variant) => {
      let tmp = null;
      if ("code" !== variant) {
        const TableRow = TableRow2.TableRow;
        tmp = <TableRow key={arg0} label={null} />;
      }
      return tmp;
    })
  });
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  TEXT_VARIANT = TextVariants.TEXT_VARIANT;
  return <ScrollView>{null}</ScrollView>;
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default tmp3;
