// Module ID: 16503
// Function ID: 16504
// Name: NotificationCenterActionButton
// Dependencies: [19, 21, 8202, 8796, 4603, 16504, 1896, 1114, 2]
// Exports: default

// Module 16503 (NotificationCenterActionButton)
import util from "util" /* 1114 */;
import IconButton from "IconButton" /* 8202 */;
import _modDef8796 from "module_8796" /* 8796 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  const obj = {
    variant: "tertiary",
    size: "sm",
    icon: _modDef8796,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[5], paths.paths), "NotificationCenterActionSheet");
    },
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["UKOtz+"]);
  return jsx(IconButton.IconButton, {
    variant: "tertiary",
    size: "sm",
    icon: _modDef8796,
    onPress() {
      return require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[5], paths.paths), "NotificationCenterActionSheet");
    },
    accessibilityLabel: null,
    maxFontSizeMultiplier: 2
  });
};
