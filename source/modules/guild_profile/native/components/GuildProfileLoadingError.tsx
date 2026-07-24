// Module ID: 11911
// Function ID: 92206
// Name: GuildProfileLoadingError
// Dependencies: [31, 27, 33, 8624, 4066, 3834, 689, 4554, 7631, 4126, 1212, 4660, 2]
// Exports: default

// Module 11911 (GuildProfileLoadingError)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileLoadingError.tsx");

export default function GuildProfileLoadingError(onPress) {
  let obj = require(8624) /* getBackgroundForProfile */;
  const styles = obj.useStyles();
  let obj1 = require(3834) /* map */;
  obj = { style: styles.container };
  const token = obj1.useToken(importDefault(689).colors.BACKGROUND_BASE_LOWEST);
  obj = { style: styles.colorBanner };
  const tmp2 = importDefault(4066)();
  obj.start = require(8624) /* getBackgroundForProfile */.DiagonalGradient.START;
  obj.end = require(8624) /* getBackgroundForProfile */.DiagonalGradient.END;
  let obj4 = require(8624) /* getBackgroundForProfile */;
  obj.colors = obj4.getBackgroundForProfile(tmp2, token);
  const items = [callback(importDefault(4554), obj), , ];
  obj1 = { style: styles.header };
  const obj2 = { style: styles.avatarBackground };
  const obj3 = { style: styles.avatarBackground };
  obj4 = { size: "lg", color: importDefault(689).colors.TEXT_FEEDBACK_WARNING };
  obj3.children = callback(require(7631) /* WarningIcon */.WarningIcon, obj4);
  obj2.children = callback(View, obj3);
  obj1.children = callback(View, obj2);
  items[1] = callback(View, obj1);
  const obj5 = { style: styles.body };
  const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl.string(require(1212) /* getSystemLocale */.t.DmIUGK);
  const items1 = [callback(require(4126) /* Text */.Text, obj6), ];
  const obj7 = { style: styles.error, onPress: onPress.onRetry, accessibilityRole: "button" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj7.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.s1fAEw);
  const obj8 = { size: "sm", color: importDefault(689).colors.TEXT_FEEDBACK_WARNING };
  const items2 = [callback(require(7631) /* WarningIcon */.WarningIcon, obj8), ];
  const obj9 = { variant: "text-sm/normal", color: "text-feedback-warning" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj9.children = intl3.string(require(1212) /* getSystemLocale */.t.tmGHjc);
  items2[1] = callback(require(4126) /* Text */.Text, obj9);
  obj7.children = items2;
  items1[1] = callback2(require(4660) /* PressableBase */.PressableOpacity, obj7);
  obj5.children = items1;
  items[2] = callback2(View, obj5);
  obj.children = items;
  return callback2(View, obj);
};
