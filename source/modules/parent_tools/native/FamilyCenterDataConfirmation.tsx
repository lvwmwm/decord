// Module ID: 11063
// Function ID: 86131
// Name: RowGroup
// Dependencies: [31, 33, 4541, 4126, 5503, 5165, 1212, 2198, 11064, 4068, 9009, 4645, 11065, 11067, 8773, 9417, 4094, 11069, 5791, 5119, 2]
// Exports: default

// Module 11063 (RowGroup)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
function RowGroup(rows) {
  rows = rows.rows;
  let obj = { spacing: 8 };
  obj = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: rows.title };
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = {
    hasIcons: true,
    children: rows.map((header) => {
      let IconComponent;
      let description;
      let negative;
      header = header.header;
      ({ description, IconComponent, negative } = header);
      let obj = { label: header, subLabel: description };
      obj = {};
      let str = "default";
      if (true === negative) {
        str = "text-status-dnd";
      }
      obj.variant = str;
      obj.IconComponent = IconComponent;
      obj.icon = outer1_3(outer1_0(outer1_2[5]).TableRow.Icon, obj);
      return outer1_3(outer1_0(outer1_2[5]).TableRow, obj, header);
    })
  };
  items[1] = callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
  obj.children = items;
  return callback2(require(4541) /* Stack */.Stack, obj);
}
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("Stack").fileFinishedImporting("modules/parent_tools/native/FamilyCenterDataConfirmation.tsx");

export default function FamilyCenterDataConfirmation() {
  const intl = require(1212) /* getSystemLocale */.intl;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(importDefault(2198).CI1Env);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const stringResult1 = intl2.string(importDefault(2198)["ksze+o"]);
  let obj = require(11064) /* useAgeSpecificText */;
  const intl4 = require(1212) /* getSystemLocale */.intl;
  const stringResult2 = intl3.string(importDefault(2198)["n73g+V"]);
  const intl5 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl4.string(importDefault(2198)["5x3taM"]), intl5.string(importDefault(2198).WZwGFX));
  let obj1 = require(11064) /* useAgeSpecificText */;
  const intl6 = require(1212) /* getSystemLocale */.intl;
  const stringResult3 = intl4.string(importDefault(2198)["5x3taM"]);
  const intl7 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText1 = obj1.useAgeSpecificText(intl6.string(importDefault(2198).FcKkcr), intl7.string(importDefault(2198).PQtDFk));
  let obj2 = require(11064) /* useAgeSpecificText */;
  const intl8 = require(1212) /* getSystemLocale */.intl;
  const stringResult4 = intl6.string(importDefault(2198).FcKkcr);
  const intl9 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText2 = obj2.useAgeSpecificText(intl8.string(importDefault(2198)["dES/2r"]), intl9.string(importDefault(2198).ep6mdN));
  let obj3 = require(11064) /* useAgeSpecificText */;
  const intl10 = require(1212) /* getSystemLocale */.intl;
  const stringResult5 = intl8.string(importDefault(2198)["dES/2r"]);
  const intl11 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText3 = obj3.useAgeSpecificText(intl10.string(importDefault(2198).GWPcQg), intl11.string(importDefault(2198).yFnKIg));
  let obj4 = require(11064) /* useAgeSpecificText */;
  const intl12 = require(1212) /* getSystemLocale */.intl;
  const stringResult6 = intl10.string(importDefault(2198).GWPcQg);
  const intl13 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText4 = obj4.useAgeSpecificText(intl12.string(importDefault(2198)["30+sih"]), intl13.string(importDefault(2198)["0cuLn1"]));
  let obj5 = require(11064) /* useAgeSpecificText */;
  const intl14 = require(1212) /* getSystemLocale */.intl;
  const stringResult7 = intl12.string(importDefault(2198)["30+sih"]);
  const intl15 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText5 = obj5.useAgeSpecificText(intl14.string(importDefault(2198).tHTyRh), intl15.string(importDefault(2198).TeNlMb));
  let obj6 = require(11064) /* useAgeSpecificText */;
  const intl16 = require(1212) /* getSystemLocale */.intl;
  const stringResult8 = intl14.string(importDefault(2198).tHTyRh);
  const intl17 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText6 = obj6.useAgeSpecificText(intl16.string(importDefault(2198).PfveQ6), intl17.string(importDefault(2198)["f7ofm/"]));
  let obj7 = require(11064) /* useAgeSpecificText */;
  const intl18 = require(1212) /* getSystemLocale */.intl;
  const stringResult9 = intl16.string(importDefault(2198).PfveQ6);
  const intl19 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText7 = obj7.useAgeSpecificText(intl18.string(importDefault(2198).MKeCj3), intl19.string(importDefault(2198).HdcGGl));
  let obj8 = require(11064) /* useAgeSpecificText */;
  const intl20 = require(1212) /* getSystemLocale */.intl;
  const stringResult10 = intl18.string(importDefault(2198).MKeCj3);
  const intl21 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText8 = obj8.useAgeSpecificText(intl20.string(importDefault(2198).wZejZr), intl21.string(importDefault(2198).tdgcf1));
  let obj9 = require(11064) /* useAgeSpecificText */;
  const intl22 = require(1212) /* getSystemLocale */.intl;
  const stringResult11 = intl20.string(importDefault(2198).wZejZr);
  const intl23 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText9 = obj9.useAgeSpecificText(intl22.string(importDefault(2198).ASf7XN), intl23.string(importDefault(2198)["82y87X"]));
  let obj10 = require(11064) /* useAgeSpecificText */;
  const intl24 = require(1212) /* getSystemLocale */.intl;
  const stringResult12 = intl22.string(importDefault(2198).ASf7XN);
  const intl25 = require(1212) /* getSystemLocale */.intl;
  obj = {};
  const ageSpecificText10 = obj10.useAgeSpecificText(intl24.string(importDefault(2198)["0QDVFN"]), intl25.string(importDefault(2198)["1xBHHV"]));
  const intl26 = require(1212) /* getSystemLocale */.intl;
  obj.header = intl26.string(importDefault(2198)["/zMYZX"]);
  obj.description = ageSpecificText;
  obj.IconComponent = require(4068) /* UserPlusIcon */.UserPlusIcon;
  const items = [obj, , , , , , ];
  obj = {};
  const intl27 = require(1212) /* getSystemLocale */.intl;
  obj.header = intl27.string(importDefault(2198)["44NEx6"]);
  obj.description = ageSpecificText1;
  obj.IconComponent = require(9009) /* ServerIcon */.ServerIcon;
  items[1] = obj;
  obj1 = {};
  const intl28 = require(1212) /* getSystemLocale */.intl;
  obj1.header = intl28.string(importDefault(2198)["Z3G+8h"]);
  const intl29 = require(1212) /* getSystemLocale */.intl;
  obj1.description = intl29.string(importDefault(2198).KBgArX);
  obj1.IconComponent = require(4645) /* ForumIcon */.ForumIcon;
  items[2] = obj1;
  obj2 = {};
  const intl30 = require(1212) /* getSystemLocale */.intl;
  obj2.header = intl30.string(importDefault(2198).GNs2ZH);
  const intl31 = require(1212) /* getSystemLocale */.intl;
  obj2.description = intl31.string(importDefault(2198).Ief2xc);
  obj2.IconComponent = require(11065) /* PhoneIcon */.PhoneIcon;
  items[3] = obj2;
  obj3 = {};
  const intl32 = require(1212) /* getSystemLocale */.intl;
  obj3.header = intl32.string(importDefault(2198).PjM3r5);
  obj3.description = ageSpecificText2;
  obj3.IconComponent = require(11067) /* CreditCardIcon */.CreditCardIcon;
  items[4] = obj3;
  obj4 = {};
  const intl33 = require(1212) /* getSystemLocale */.intl;
  obj4.header = intl33.string(importDefault(2198).Fv3n8L);
  obj4.description = ageSpecificText3;
  obj4.IconComponent = require(8773) /* GiftIcon */.GiftIcon;
  items[5] = obj4;
  obj5 = { header: ageSpecificText4, description: ageSpecificText5, IconComponent: require(9417) /* FlagIcon */.FlagIcon };
  items[6] = obj5;
  obj6 = {};
  const intl34 = require(1212) /* getSystemLocale */.intl;
  obj6.header = intl34.string(importDefault(2198).kyT6pZ);
  obj6.description = ageSpecificText6;
  obj6.IconComponent = require(4094) /* ClockIcon */.ClockIcon;
  const items1 = [obj6, , ];
  obj7 = {};
  const intl35 = require(1212) /* getSystemLocale */.intl;
  obj7.header = intl35.string(importDefault(2198)["52ld7c"]);
  obj7.description = ageSpecificText7;
  obj7.IconComponent = require(11069) /* PiggyBankIcon */.PiggyBankIcon;
  items1[1] = obj7;
  obj8 = {};
  const intl36 = require(1212) /* getSystemLocale */.intl;
  obj8.header = intl36.string(importDefault(2198).UCuHM8);
  obj8.description = ageSpecificText8;
  obj8.IconComponent = require(5791) /* SettingsIcon */.SettingsIcon;
  items1[2] = obj8;
  obj9 = { spacing: 24 };
  const items2 = [callback(RowGroup, { title: stringResult, rows: items }), callback(RowGroup, { title: stringResult1, rows: items1 }), ];
  obj10 = { title: stringResult2 };
  const stringResult13 = intl24.string(importDefault(2198)["0QDVFN"]);
  const items3 = [{ header: ageSpecificText9, description: ageSpecificText10, IconComponent: require(5119) /* XSmallIcon */.XSmallIcon, negative: true }];
  obj10.rows = items3;
  items2[2] = callback(RowGroup, obj10);
  obj9.children = items2;
  return callback2(require(4541) /* Stack */.Stack, obj9);
};
