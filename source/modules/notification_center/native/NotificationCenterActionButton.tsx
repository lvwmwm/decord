// Module ID: 15243
// Function ID: 115889
// Name: NotificationCenterActionButton
// Dependencies: [31, 33, 6661, 8940, 4133, 15244, 1935, 1212, 2]
// Exports: default

// Module 15243 (NotificationCenterActionButton)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("IconButton").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = {
    variant: "tertiary",
    size: "sm",
    icon: importDefault(8940),
    onPress() {
      return outer1_1(outer1_2[4]).openLazy(outer1_0(outer1_2[6])(outer1_2[5], outer1_2.paths), "NotificationCenterActionSheet");
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["UKOtz+"]);
  obj.maxFontSizeMultiplier = 2;
  return jsx(require(6661) /* IconButton */.IconButton, {
    variant: "tertiary",
    size: "sm",
    icon: importDefault(8940),
    onPress() {
      return outer1_1(outer1_2[4]).openLazy(outer1_0(outer1_2[6])(outer1_2[5], outer1_2.paths), "NotificationCenterActionSheet");
    }
  });
};
