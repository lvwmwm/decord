// Module ID: 15538
// Function ID: 15539
// Name: NotificationCenterActionButton
// Dependencies: [19, 21, 7753, 8611, 4271, 15539, 2007, 1236, 2]
// Exports: default

// Module 15538 (NotificationCenterActionButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("IconButton").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 2 };
  obj[2] = importDefault(8611);
  obj[3] = function onPress() {
    return callback2(paths[4]).openLazy(callback(paths[6])(paths[5], paths.paths), "NotificationCenterActionSheet");
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl.string(require(1236) /* getSystemLocale */.t["UKOtz+"]);
  return jsx(require(7753) /* IconButton */.IconButton, { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 2 });
};
