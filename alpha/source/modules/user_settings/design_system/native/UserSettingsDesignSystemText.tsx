// Module ID: 17407
// Function ID: 17408
// Name: UserSettingsDesignSystemText
// Dependencies: [19, 17, 21, 5607, 575, 6115, 6140, 5635, 6144, 5634, 2]
// Exports: default

// Module 17407 (UserSettingsDesignSystemText)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5607 */;
import TextVariants from "TextVariants" /* 5635 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import TableRowGroup2 from "TableRowGroup" /* 6140 */;
import TableRow2 from "TableRow" /* 6144 */;
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
      const TableRow = TableRow2.TableRow;
      return <TableRow key={arg0} label={null} />;
    })
  });
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  TEXT_VARIANT = TextVariants.TEXT_VARIANT;
  return <ScrollView>{null}</ScrollView>;
};
