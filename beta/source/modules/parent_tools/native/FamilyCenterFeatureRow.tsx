// Module ID: 14421
// Function ID: 14422
// Name: FamilyCenterFeatureRow
// Dependencies: [19, 17, 21, 4836, 576, 11398, 1115, 2487, 14422, 14423, 11865, 6389, 9316, 14418, 5279, 4832, 5999, 5917, 2]
// Exports: default

// Module 14421 (FamilyCenterFeatureRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl11 from "intl" /* 1115 */;
import _modDef2487 from "module_2487" /* 2487 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableRow2 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import EyeIcon from "EyeIcon" /* 6389 */;
import AssetRegistryDefault from "AssetRegistry" /* 9316 */;
import useAgeSpecificText4 from "useAgeSpecificText" /* 11398 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11865 */;
import QrCodeIcon from "QrCodeIcon" /* 14418 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14422 */;
import ChatCheckIcon from "ChatCheckIcon" /* 14423 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let header;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { tableGroup: obj2 };
obj2 = { marginTop: 20, marginBottom: nativeDefault.space.PX_24 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterFeatureRow.tsx");

export default function FamilyCenterFeatureRows() {
  let Stack;
  let intl10;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let obj5;
  const tmp = closure_6();
  const useAgeSpecificText = useAgeSpecificText4.useAgeSpecificText;
  useAgeSpecificText4;
  const intl = intl11.intl;
  const stringResult = intl.string(_modDef2487.qITXhY);
  const intl2 = intl11.intl;
  const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2487.bmhCnL));
  const useAgeSpecificText2 = useAgeSpecificText4.useAgeSpecificText;
  useAgeSpecificText4;
  const intl3 = intl11.intl;
  const stringResult1 = intl3.string(_modDef2487.t7SkFy);
  const intl4 = intl11.intl;
  const ageSpecificText2 = useAgeSpecificText2(stringResult1, intl4.string(_modDef2487["68zfxD"]));
  const useAgeSpecificText3 = useAgeSpecificText4.useAgeSpecificText;
  useAgeSpecificText4;
  const intl5 = intl11.intl;
  const stringResult2 = intl5.string(_modDef2487["+pi4Yt"]);
  const intl6 = intl11.intl;
  let obj = { icon: AssetRegistryDefault3, IconComponent: ChatCheckIcon.ChatCheckIcon, header: intl7.string(_modDef2487["001l3m"]), description: ageSpecificText };
  const ageSpecificText3 = useAgeSpecificText3(stringResult2, intl6.string(_modDef2487["1xPTwE"]));
  intl7 = intl11.intl;
  const items = [obj, , ];
  const obj2 = { icon: AssetRegistryDefault2, IconComponent: EyeIcon.EyeIcon, header: intl8.string(_modDef2487.yipAeP), description: ageSpecificText2 };
  intl8 = intl11.intl;
  items[1] = obj2;
  const obj3 = { icon: AssetRegistryDefault, IconComponent: QrCodeIcon.QrCodeIcon, header: intl9.string(_modDef2487.hhOuMe), description: ageSpecificText3 };
  intl9 = intl11.intl;
  items[2] = obj3;
  const obj4 = { style: tmp.tableGroup, children: hasOwnProperty(Stack, obj5) };
  obj5 = { spacing: 8, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj6 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: intl10.string(_modDef2487["6JkHSg"]) };
  const Text = Text_Text.Text;
  intl10 = intl11.intl;
  items1 = [React3(Text, obj6), ];
  const obj7 = {
    hasIcons: true,
    children: items.map((header) => {
      let IconComponent;
      let description;
      let icon;
      header = header.header;
      ({ description, icon, IconComponent } = header);
      const obj = { label: header, subLabel: description, icon: closure_1_4(TableRow2.TableRow.Icon, { source: icon, IconComponent }) };
      const TableRow = TableRow2.TableRow;
      return closure_1_4(TableRow, obj, header);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items1[1] = React3(TableRowGroup, obj7);
  return React3(View, obj4);
};
