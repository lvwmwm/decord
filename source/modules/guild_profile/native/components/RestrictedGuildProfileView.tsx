// Module ID: 8431
// Function ID: 67245
// Name: RestrictedGuildProfileView
// Dependencies: [31, 27, 33, 8432, 4101, 3869, 689, 4589, 5548, 4161, 1212, 2]
// Exports: default

// Module 8431 (RestrictedGuildProfileView)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/guild_profile/native/components/RestrictedGuildProfileView.tsx");

export default function RestrictedGuildProfileView() {
  let obj = require(8432) /* getBackgroundForProfile */;
  const styles = obj.useStyles();
  let obj1 = require(3869) /* map */;
  obj = { style: styles.container };
  const token = obj1.useToken(importDefault(689).colors.BACKGROUND_BASE_LOWEST);
  obj = { style: styles.colorBanner };
  const tmp2 = importDefault(4101)();
  obj.start = require(8432) /* getBackgroundForProfile */.DiagonalGradient.START;
  obj.end = require(8432) /* getBackgroundForProfile */.DiagonalGradient.END;
  let obj4 = require(8432) /* getBackgroundForProfile */;
  obj.colors = obj4.getBackgroundForProfile(tmp2, token);
  const items = [callback(importDefault(4589), obj), , ];
  obj1 = { style: styles.header };
  const obj2 = { style: styles.avatarBackground };
  const obj3 = { size: null, value: "?", selected: false };
  const tmp4 = importDefault(4589);
  obj3.size = require(5548) /* makeSizeStyle */.GuildIconSizes.XXLARGE;
  obj3.textStyle = styles.restrictedAcronym;
  obj2.children = callback(importDefault(5548), obj3);
  obj1.children = callback(View, obj2);
  items[1] = callback(View, obj1);
  obj4 = { style: styles.body };
  const obj5 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl.string(require(1212) /* getSystemLocale */.t.wZmueu);
  const items1 = [callback(require(4161) /* Text */.Text, obj5), ];
  const obj6 = { variant: "text-md/medium", color: "text-subtle" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl2.string(require(1212) /* getSystemLocale */.t["8mfCqY"]);
  items1[1] = callback(require(4161) /* Text */.Text, obj6);
  obj4.children = items1;
  items[2] = callback2(View, obj4);
  obj.children = items;
  return callback2(View, obj);
};
