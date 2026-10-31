// Module ID: 13346
// Function ID: 13347
// Name: FamilyCenterDataConfirmation
// Dependencies: [19, 21, 6027, 5624, 7060, 6975, 1113, 2538, 13347, 5721, 9758, 8660, 13348, 8015, 13350, 10084, 5740, 13351, 7561, 7054, 2]
// Exports: default

// Module 13346 (FamilyCenterDataConfirmation)
import intl37 from "intl" /* 1113 */;
import _modDef2538 from "module_2538" /* 2538 */;
import Text_Text from "Text/Text" /* 5624 */;
import UserPlusIcon from "UserPlusIcon" /* 5721 */;
import ClockIcon from "ClockIcon" /* 5740 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import TableRow2 from "TableRow" /* 6975 */;
import XSmallIcon from "XSmallIcon" /* 7054 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import SettingsIcon from "SettingsIcon" /* 7561 */;
import CreditCardIcon from "CreditCardIcon" /* 8015 */;
import ForumIcon from "ForumIcon" /* 8660 */;
import ServerIcon from "ServerIcon" /* 9758 */;
import FlagIcon from "FlagIcon" /* 10084 */;
import useAgeSpecificText12 from "useAgeSpecificText" /* 13347 */;
import PhoneIcon from "PhoneIcon" /* 13348 */;
import GiftIcon from "GiftIcon" /* 13350 */;
import PiggyBankIcon from "PiggyBankIcon" /* 13351 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let header;

let c3;
let closure_4;
function RowGroup(rows) {
  let items;
  rows = rows.rows;
  const title = rows.title;
  let obj = { spacing: 8, children: items };
  const Stack = Stack_Stack.Stack;
  items = [_false(Text_Text.Text, { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: title }), ];
  const obj2 = {
    hasIcons: true,
    children: rows.map((header) => {
      let Icon;
      let IconComponent;
      let description;
      let negative;
      let str;
      header = header.header;
      ({ description, IconComponent, negative } = header);
      const obj = { label: header, subLabel: description, icon: closure_1_3(Icon, { variant: str, IconComponent }) };
      const TableRow = TableRow2.TableRow;
      str = "default";
      Icon = TableRow2.TableRow.Icon;
      if (true === negative) {
        str = "text-status-dnd";
      }
      return closure_1_3(TableRow, obj, header);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items[1] = _false(TableRowGroup, obj2);
  return React3(Stack, obj);
}
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterDataConfirmation.tsx");

export default function FamilyCenterDataConfirmation() {
  let intl26;
  let intl27;
  let intl28;
  let intl29;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl36;
  let items2;
  let items3;
  const intl = intl37.intl;
  const stringResult = intl.string(_modDef2538.CI1Env);
  const intl2 = intl37.intl;
  const stringResult1 = intl2.string(_modDef2538["ksze+o"]);
  const intl3 = intl37.intl;
  const stringResult2 = intl3.string(_modDef2538["n73g+V"]);
  const useAgeSpecificText = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl4 = intl37.intl;
  const stringResult3 = intl4.string(_modDef2538["5x3taM"]);
  const intl5 = intl37.intl;
  const ageSpecificText = useAgeSpecificText(stringResult3, intl5.string(_modDef2538.WZwGFX));
  const useAgeSpecificText2 = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl6 = intl37.intl;
  const stringResult4 = intl6.string(_modDef2538.FcKkcr);
  const intl7 = intl37.intl;
  const ageSpecificText2 = useAgeSpecificText2(stringResult4, intl7.string(_modDef2538.PQtDFk));
  const useAgeSpecificText3 = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl8 = intl37.intl;
  const stringResult5 = intl8.string(_modDef2538["dES/2r"]);
  const intl9 = intl37.intl;
  const ageSpecificText3 = useAgeSpecificText3(stringResult5, intl9.string(_modDef2538.ep6mdN));
  const useAgeSpecificText4 = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl10 = intl37.intl;
  const stringResult6 = intl10.string(_modDef2538.GWPcQg);
  const intl11 = intl37.intl;
  const ageSpecificText4 = useAgeSpecificText4(stringResult6, intl11.string(_modDef2538.yFnKIg));
  const useAgeSpecificText5 = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl12 = intl37.intl;
  const stringResult7 = intl12.string(_modDef2538["30+sih"]);
  const intl13 = intl37.intl;
  const ageSpecificText5 = useAgeSpecificText5(stringResult7, intl13.string(_modDef2538["0cuLn1"]));
  const useAgeSpecificText6 = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl14 = intl37.intl;
  const stringResult8 = intl14.string(_modDef2538.tHTyRh);
  const intl15 = intl37.intl;
  const ageSpecificText6 = useAgeSpecificText6(stringResult8, intl15.string(_modDef2538.TeNlMb));
  const useAgeSpecificText7 = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl16 = intl37.intl;
  const stringResult9 = intl16.string(_modDef2538.PfveQ6);
  const intl17 = intl37.intl;
  const ageSpecificText7 = useAgeSpecificText7(stringResult9, intl17.string(_modDef2538["f7ofm/"]));
  const useAgeSpecificText8 = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl18 = intl37.intl;
  const stringResult10 = intl18.string(_modDef2538.MKeCj3);
  const intl19 = intl37.intl;
  const ageSpecificText8 = useAgeSpecificText8(stringResult10, intl19.string(_modDef2538.HdcGGl));
  const useAgeSpecificText9 = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl20 = intl37.intl;
  const stringResult11 = intl20.string(_modDef2538.wZejZr);
  const intl21 = intl37.intl;
  const ageSpecificText9 = useAgeSpecificText9(stringResult11, intl21.string(_modDef2538.tdgcf1));
  const useAgeSpecificText10 = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl22 = intl37.intl;
  const stringResult12 = intl22.string(_modDef2538.ASf7XN);
  const intl23 = intl37.intl;
  const ageSpecificText10 = useAgeSpecificText10(stringResult12, intl23.string(_modDef2538["82y87X"]));
  const useAgeSpecificText11 = useAgeSpecificText12.useAgeSpecificText;
  useAgeSpecificText12;
  const intl24 = intl37.intl;
  const stringResult13 = intl24.string(_modDef2538["0QDVFN"]);
  const intl25 = intl37.intl;
  const obj = { header: intl26.string(_modDef2538["/zMYZX"]), description: ageSpecificText, IconComponent: UserPlusIcon.UserPlusIcon };
  const ageSpecificText11 = useAgeSpecificText11(stringResult13, intl25.string(_modDef2538["1xBHHV"]));
  intl26 = intl37.intl;
  const items = [obj, , , , , , ];
  const obj2 = { header: intl27.string(_modDef2538["44NEx6"]), description: ageSpecificText2, IconComponent: ServerIcon.ServerIcon };
  intl27 = intl37.intl;
  items[1] = obj2;
  const obj3 = { header: intl28.string(_modDef2538["Z3G+8h"]), description: intl29.string(_modDef2538.KBgArX), IconComponent: ForumIcon.ForumIcon };
  intl28 = intl37.intl;
  intl29 = intl37.intl;
  items[2] = obj3;
  const obj4 = { header: intl30.string(_modDef2538.GNs2ZH), description: intl31.string(_modDef2538.Ief2xc), IconComponent: PhoneIcon.PhoneIcon };
  intl30 = intl37.intl;
  intl31 = intl37.intl;
  items[3] = obj4;
  const obj5 = { header: intl32.string(_modDef2538.PjM3r5), description: ageSpecificText3, IconComponent: CreditCardIcon.CreditCardIcon };
  intl32 = intl37.intl;
  items[4] = obj5;
  const obj6 = { header: intl33.string(_modDef2538.Fv3n8L), description: ageSpecificText4, IconComponent: GiftIcon.GiftIcon };
  intl33 = intl37.intl;
  items[5] = obj6;
  items[6] = { header: ageSpecificText5, description: ageSpecificText6, IconComponent: FlagIcon.FlagIcon };
  const obj8 = { header: intl34.string(_modDef2538.kyT6pZ), description: ageSpecificText7, IconComponent: ClockIcon.ClockIcon };
  ({ header: ageSpecificText5, description: ageSpecificText6, IconComponent: FlagIcon.FlagIcon });
  intl34 = intl37.intl;
  const items1 = [obj8, , ];
  const obj9 = { header: intl35.string(_modDef2538["52ld7c"]), description: ageSpecificText8, IconComponent: PiggyBankIcon.PiggyBankIcon };
  intl35 = intl37.intl;
  items1[1] = obj9;
  const obj10 = { header: intl36.string(_modDef2538.UCuHM8), description: ageSpecificText9, IconComponent: SettingsIcon.SettingsIcon };
  intl36 = intl37.intl;
  items1[2] = obj10;
  const obj11 = { spacing: 24, children: items2 };
  const Stack = Stack_Stack.Stack;
  items2 = [_false(RowGroup, { title: stringResult, rows: items }), _false(RowGroup, { title: stringResult1, rows: items1 }), ];
  const obj12 = { title: stringResult2, rows: items3 };
  items3 = [{ header: ageSpecificText10, description: ageSpecificText11, IconComponent: XSmallIcon.XSmallIcon, negative: true }];
  ({ header: ageSpecificText10, description: ageSpecificText11, IconComponent: XSmallIcon.XSmallIcon, negative: true });
  items2[2] = _false(RowGroup, obj12);
  return React3(Stack, obj11);
};
