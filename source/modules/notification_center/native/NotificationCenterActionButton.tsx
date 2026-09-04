// Module ID: 16330
// Function ID: 16331
// Name: NotificationCenterActionButton
// Dependencies: [19, 21, 8028, 8603, 4448, 16331, 2008, 1233, 2]
// Exports: default

// Module 16330 (NotificationCenterActionButton)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import IconButton from "IconButton" /* 8028 */;
import registerAssetDefault from "registerAsset" /* 8603 */;
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
