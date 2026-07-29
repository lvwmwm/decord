// Module ID: 13916
// Function ID: 13917
// Name: FamilyCenterFeatureRows
// Dependencies: [19, 17, 21, 4189, 712, 11113, 1236, 2223, 13917, 13918, 11475, 8733, 12239, 13913, 4598, 4185, 5554, 5220, 2]
// Exports: default

// Module 13916 (FamilyCenterFeatureRows)
import "noop";
import { View } from "TableRowInner";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { tableGroup: null };
createCacheKey = { marginTop: 20, marginBottom: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterFeatureRow.tsx");

export default function FamilyCenterFeatureRows() {
  let obj = require(11113) /* useAgeSpecificText */;
  const intl = require(1236) /* getSystemLocale */.intl;
  const tmp = createCacheKey();
  const intl2 = require(1236) /* getSystemLocale */.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(importDefault(2223).qITXhY), intl2.string(importDefault(2223).bmhCnL));
  let obj1 = require(11113) /* useAgeSpecificText */;
  const intl3 = require(1236) /* getSystemLocale */.intl;
  const stringResult = intl.string(importDefault(2223).qITXhY);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  const ageSpecificText1 = obj1.useAgeSpecificText(intl3.string(importDefault(2223).t7SkFy), intl4.string(importDefault(2223)["68zfxD"]));
  let obj2 = require(11113) /* useAgeSpecificText */;
  const intl5 = require(1236) /* getSystemLocale */.intl;
  const stringResult1 = intl3.string(importDefault(2223).t7SkFy);
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj = { icon: null, IconComponent: null, header: null, description: null };
  const ageSpecificText2 = obj2.useAgeSpecificText(intl5.string(importDefault(2223)["+pi4Yt"]), intl6.string(importDefault(2223)["1xPTwE"]));
  obj[0] = importDefault(13917);
  obj[1] = require(13918) /* ChatCheckIcon */.ChatCheckIcon;
  const intl7 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl7.string(importDefault(2223)["001l3m"]);
  obj[3] = ageSpecificText;
  const items = [obj, , ];
  obj = { icon: importDefault(11475), IconComponent: require(8733) /* EyeIcon */.EyeIcon, header: null, description: null };
  const intl8 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl8.string(importDefault(2223).yipAeP);
  obj[3] = ageSpecificText1;
  items[1] = obj;
  obj1 = { icon: importDefault(12239), IconComponent: require(13913) /* QrCodeIcon */.QrCodeIcon, header: null, description: null };
  const intl9 = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl9.string(importDefault(2223).hhOuMe);
  obj1[3] = ageSpecificText2;
  items[2] = obj1;
  obj2 = { style: tmp.tableGroup, children: null };
  const obj3 = { spacing: 8, children: null };
  const obj4 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl10 = require(1236) /* getSystemLocale */.intl;
  obj4[3] = intl10.string(importDefault(2223)["6JkHSg"]);
  const items1 = [callback(require(4185) /* Text */.Text, obj4), ];
  const obj5 = { hasIcons: true, children: null };
  obj5[1] = items.map((header) => {
    let IconComponent;
    let description;
    let icon;
    header = header.header;
    ({ description, icon, IconComponent } = header);
    const obj = { label: header, subLabel: description, icon: null };
    obj[2] = callback2(callback(5220).TableRow.Icon, { source: icon, IconComponent });
    return callback2(callback(5220).TableRow, obj, header);
  });
  items1[1] = callback(require(5554) /* TableRowGroupTitle */.TableRowGroup, obj5);
  obj3[1] = items1;
  obj2[1] = callback2(require(4598) /* Stack */.Stack, obj3);
  return callback(View, obj2);
};
