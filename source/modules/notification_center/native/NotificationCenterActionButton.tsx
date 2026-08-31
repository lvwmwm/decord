// Module ID: 15959
// Function ID: 15960
// Name: NotificationCenterActionButton
// Dependencies: [19, 21, 7974, 8762, 4415, 15960, 2009, 1236, 2]
// Exports: default

// Module 15959 (NotificationCenterActionButton)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import IconButton from "IconButton" /* 7974 */;
import registerAssetDefault from "registerAsset" /* 8762 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = {
    variant: "tertiary",
    size: "sm",
    icon: registerAssetDefault,
    onPress() {
      return callback2(paths[4]).openLazy(callback(paths[6])(paths[5], paths.paths), "NotificationCenterActionSheet");
    },
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2
  };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t["UKOtz+"]);
  return jsx(IconButton.IconButton, {
    variant: "tertiary",
    size: "sm",
    icon: registerAssetDefault,
    onPress() {
      return callback2(paths[4]).openLazy(callback(paths[6])(paths[5], paths.paths), "NotificationCenterActionSheet");
    },
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2
  });
};
