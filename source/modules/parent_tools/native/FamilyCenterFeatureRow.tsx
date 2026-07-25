// Module ID: 13850
// Function ID: 106137
// Name: FamilyCenterFeatureRows
// Dependencies: [31, 27, 33, 4131, 689, 11050, 1212, 2199, 13851, 13852, 11412, 8665, 12171, 13847, 4542, 4127, 5501, 5164, 2]
// Exports: default

// Module 13850 (FamilyCenterFeatureRows)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: 20, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.tableGroup = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterFeatureRow.tsx");

export default function FamilyCenterFeatureRows() {
  let obj = require(11050) /* useAgeSpecificText */;
  const intl = require(1212) /* getSystemLocale */.intl;
  const tmp = _createForOfIteratorHelperLoose();
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(importDefault(2199).qITXhY), intl2.string(importDefault(2199).bmhCnL));
  let obj1 = require(11050) /* useAgeSpecificText */;
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(importDefault(2199).qITXhY);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText1 = obj1.useAgeSpecificText(intl3.string(importDefault(2199).t7SkFy), intl4.string(importDefault(2199)["68zfxD"]));
  let obj2 = require(11050) /* useAgeSpecificText */;
  const intl5 = require(1212) /* getSystemLocale */.intl;
  const stringResult1 = intl3.string(importDefault(2199).t7SkFy);
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj = {};
  const ageSpecificText2 = obj2.useAgeSpecificText(intl5.string(importDefault(2199)["+pi4Yt"]), intl6.string(importDefault(2199)["1xPTwE"]));
  obj.icon = importDefault(13851);
  obj.IconComponent = require(13852) /* ChatCheckIcon */.ChatCheckIcon;
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj.header = intl7.string(importDefault(2199)["001l3m"]);
  obj.description = ageSpecificText;
  const items = [obj, , ];
  obj = { icon: importDefault(11412), IconComponent: require(8665) /* EyeIcon */.EyeIcon };
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj.header = intl8.string(importDefault(2199).yipAeP);
  obj.description = ageSpecificText1;
  items[1] = obj;
  obj1 = { icon: importDefault(12171), IconComponent: require(13847) /* QrCodeIcon */.QrCodeIcon };
  const intl9 = require(1212) /* getSystemLocale */.intl;
  obj1.header = intl9.string(importDefault(2199).hhOuMe);
  obj1.description = ageSpecificText2;
  items[2] = obj1;
  obj2 = { style: tmp.tableGroup };
  const obj3 = { spacing: 8 };
  const obj4 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted" };
  const intl10 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl10.string(importDefault(2199)["6JkHSg"]);
  const items1 = [callback(require(4127) /* Text */.Text, obj4), ];
  const obj5 = {
    hasIcons: true,
    children: items.map((header) => {
      let IconComponent;
      let description;
      let icon;
      header = header.header;
      ({ description, icon, IconComponent } = header);
      const obj = { label: header, subLabel: description, icon: outer1_4(outer1_0(outer1_2[17]).TableRow.Icon, { source: icon, IconComponent }) };
      return outer1_4(outer1_0(outer1_2[17]).TableRow, obj, header);
    })
  };
  items1[1] = callback(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj5);
  obj3.children = items1;
  obj2.children = callback2(require(4542) /* Stack */.Stack, obj3);
  return callback(View, obj2);
};
