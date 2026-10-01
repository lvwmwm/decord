// Module ID: 15357
// Function ID: 15358
// Name: UserSettingsDesignSystemText
// Dependencies: [19, 17, 21, 4531, 576, 5279, 5999, 4833, 5917, 4832, 2]
// Exports: default

// Module 15357 (UserSettingsDesignSystemText)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import TextVariants from "TextVariants" /* 4833 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableRow2 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
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
};
