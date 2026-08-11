// Module ID: 14140
// Function ID: 14141
// Name: FamilyCenterFeatureRows
// Dependencies: [19, 17, 21, 4303, 712, 11332, 1236, 2303, 14141, 14142, 11753, 8503, 9101, 14137, 4712, 4299, 5767, 5374, 2]
// Exports: default

// Module 14140 (FamilyCenterFeatureRows)
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
  let obj = require(11332) /* useAgeSpecificText */;
  const intl = require(1236) /* getSystemLocale */.intl;
  const tmp = createCacheKey();
  const intl2 = require(1236) /* getSystemLocale */.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(importDefault(2303).qITXhY), intl2.string(importDefault(2303).bmhCnL));
  let obj1 = require(11332) /* useAgeSpecificText */;
  const intl3 = require(1236) /* getSystemLocale */.intl;
  const stringResult = intl.string(importDefault(2303).qITXhY);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  const ageSpecificText1 = obj1.useAgeSpecificText(intl3.string(importDefault(2303).t7SkFy), intl4.string(importDefault(2303)["68zfxD"]));
  let obj2 = require(11332) /* useAgeSpecificText */;
  const intl5 = require(1236) /* getSystemLocale */.intl;
  const stringResult1 = intl3.string(importDefault(2303).t7SkFy);
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj = { icon: null, IconComponent: null, header: null, description: null };
  const ageSpecificText2 = obj2.useAgeSpecificText(intl5.string(importDefault(2303)["+pi4Yt"]), intl6.string(importDefault(2303)["1xPTwE"]));
  obj[0] = importDefault(14141);
  obj[1] = require(14142) /* ChatCheckIcon */.ChatCheckIcon;
  const intl7 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl7.string(importDefault(2303)["001l3m"]);
  obj[3] = ageSpecificText;
  const items = [obj, , ];
  obj = { icon: importDefault(11753), IconComponent: require(8503) /* EyeIcon */.EyeIcon, header: null, description: null };
  const intl8 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl8.string(importDefault(2303).yipAeP);
  obj[3] = ageSpecificText1;
  items[1] = obj;
  obj1 = { icon: importDefault(9101), IconComponent: require(14137) /* QrCodeIcon */.QrCodeIcon, header: null, description: null };
  const intl9 = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl9.string(importDefault(2303).hhOuMe);
  obj1[3] = ageSpecificText2;
  items[2] = obj1;
  obj2 = { style: tmp.tableGroup, children: null };
  const obj3 = { spacing: 8, children: null };
  const obj4 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl10 = require(1236) /* getSystemLocale */.intl;
  obj4[3] = intl10.string(importDefault(2303)["6JkHSg"]);
  const items1 = [callback(require(4299) /* Text */.Text, obj4), ];
  const obj5 = { hasIcons: true, children: null };
  obj5[1] = items.map((header) => {
    let IconComponent;
    let description;
    let icon;
    header = header.header;
    ({ description, icon, IconComponent } = header);
    const obj = { label: header, subLabel: description, icon: null };
    obj[2] = callback2(callback(5374).TableRow.Icon, { source: icon, IconComponent });
    return callback2(callback(5374).TableRow, obj, header);
  });
  items1[1] = callback(require(5767) /* TableRowGroupTitle */.TableRowGroup, obj5);
  obj3[1] = items1;
  obj2[1] = callback2(require(4712) /* Stack */.Stack, obj3);
  return callback(View, obj2);
};
