// Module ID: 18424
// Function ID: 18425
// Name: NotificationCenterActionButton
// Dependencies: [19, 21, 8020, 9188, 5253, 18425, 1995, 1114, 2]
// Exports: default

// Module 18424 (NotificationCenterActionButton)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import IconButton2 from "IconButton" /* 8020 */;
import AssetRegistryDefault from "AssetRegistry" /* 9188 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionButton.tsx");

export default function NotificationCenterActionButton() {
  let paths;
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="tertiary" size="sm" icon={AssetRegistryDefault} onPress={function onPress() {
    const obj = require("ActionSheetActionCreators");
    return obj.openLazy(require("asyncRequire")(paths[5], paths.paths), "NotificationCenterActionSheet");
  }} accessibilityLabel={intl.string(intl2.t["UKOtz+"])} maxFontSizeMultiplier={2} />;
};
