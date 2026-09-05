// Module ID: 16406
// Function ID: 16407
// Name: NotificationCenterActionButton
// Dependencies: [19, 21, 8097, 8673, 4527, 16407, 1896, 1114, 2]
// Exports: default

// Module 16406 (NotificationCenterActionButton)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import IconButton from "IconButton" /* 8097 */;
import registerAssetDefault from "registerAsset" /* 8673 */;
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
