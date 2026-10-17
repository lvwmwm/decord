// Module ID: 17546
// Function ID: 17547
// Name: NotificationCenterActionButton
// Dependencies: [19, 21, 7840, 9044, 5155, 17547, 2002, 1128, 2]
// Exports: default

// Module 17546 (NotificationCenterActionButton)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import IconButton2 from "IconButton" /* 7840 */;
import AssetRegistryDefault from "AssetRegistry" /* 9044 */;
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
