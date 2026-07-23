// Module ID: 15133
// Function ID: 115231
// Name: NotificationCenterActionButton
// Dependencies: [31, 33, 7771, 8969, 4098, 15134, 1934, 1212, 2]
// Exports: default

// Module 15133 (NotificationCenterActionButton)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("IconButton").fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = {
    variant: "tertiary",
    size: "sm",
    icon: importDefault(8969),
    onPress() {
      return outer1_1(outer1_2[4]).openLazy(outer1_0(outer1_2[6])(outer1_2[5], outer1_2.paths), "NotificationCenterActionSheet");
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["UKOtz+"]);
  obj.maxFontSizeMultiplier = 2;
  return jsx(require(7771) /* IconButton */.IconButton, {
    variant: "tertiary",
    size: "sm",
    icon: importDefault(8969),
    onPress() {
      return outer1_1(outer1_2[4]).openLazy(outer1_0(outer1_2[6])(outer1_2[5], outer1_2.paths), "NotificationCenterActionSheet");
    }
  });
};
