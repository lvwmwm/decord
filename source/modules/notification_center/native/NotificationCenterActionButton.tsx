// Module ID: 15276
// Function ID: 15277
// Name: NotificationCenterActionButton
// Dependencies: [19, 21, 6682, 8964, 4157, 15277, 1959, 1236, 2]
// Exports: default

// Module 15276 (NotificationCenterActionButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("IconButton").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj[2] = importDefault(8964);
  obj[3] = function onPress() {
    return callback2(paths[4]).openLazy(callback(paths[6])(paths[5], paths.paths), "NotificationCenterActionSheet");
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl.string(require(1236) /* getSystemLocale */.t["UKOtz+"]);
  return jsx(require(6682) /* IconButton */.IconButton, { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 2 });
};
