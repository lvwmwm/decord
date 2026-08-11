// Module ID: 12212
// Function ID: 12213
// Name: GuildProfileLoadingError
// Dependencies: [19, 17, 21, 9262, 4239, 4024, 712, 4725, 7964, 4299, 1236, 4846, 2]
// Exports: default

// Module 12212 (GuildProfileLoadingError)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileLoadingError.tsx");

export default function GuildProfileLoadingError(onPress) {
  let obj = require(9262) /* GuildProfileBackground */;
  const styles = obj.useStyles();
  let obj1 = require(4024) /* map */;
  obj = { style: styles.container, children: null };
  const token = obj1.useToken(importDefault(712).colors.BACKGROUND_BASE_LOWEST);
  obj = { style: styles.colorBanner, start: null, end: null, colors: null };
  const tmp2 = importDefault(4239)();
  obj[1] = require(9262) /* GuildProfileBackground */.DiagonalGradient.START;
  obj[2] = require(9262) /* GuildProfileBackground */.DiagonalGradient.END;
  let obj4 = require(9262) /* GuildProfileBackground */;
  obj[3] = obj4.getBackgroundForProfile(tmp2, token);
  const items = [callback(importDefault(4725), obj), , ];
  obj1 = { style: styles.header, children: null };
  const obj2 = { style: styles.avatarBackground, children: null };
  const obj3 = { style: styles.avatarBackground, children: null };
  obj4 = { size: "lg", color: null };
  obj4[1] = importDefault(712).colors.TEXT_FEEDBACK_WARNING;
  obj3[1] = callback(require(7964) /* WarningIcon */.WarningIcon, obj4);
  obj2[1] = callback(View, obj3);
  obj1[1] = callback(View, obj2);
  items[1] = callback(View, obj1);
  const obj5 = { style: styles.body, children: null };
  const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj6[2] = intl.string(require(1236) /* getSystemLocale */.t.DmIUGK);
  const items1 = [callback(require(4299) /* Text */.Text, obj6), ];
  const obj7 = { style: styles.error, onPress: onPress.onRetry, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj7[3] = intl2.string(require(1236) /* getSystemLocale */.t.s1fAEw);
  const obj8 = { size: "sm", color: null };
  obj8[1] = importDefault(712).colors.TEXT_FEEDBACK_WARNING;
  const items2 = [callback(require(7964) /* WarningIcon */.WarningIcon, obj8), ];
  const obj9 = { variant: "text-sm/normal", color: "text-feedback-warning", children: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj9[2] = intl3.string(require(1236) /* getSystemLocale */.t.tmGHjc);
  items2[1] = callback(require(4299) /* Text */.Text, obj9);
  obj7[4] = items2;
  items1[1] = callback2(require(4846) /* PressableBase */.PressableOpacity, obj7);
  obj5[1] = items1;
  items[2] = callback2(View, obj5);
  obj[1] = items;
  return callback2(View, obj);
};
