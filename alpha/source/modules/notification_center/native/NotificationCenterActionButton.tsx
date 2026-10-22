// Module ID: 17771
// Function ID: 17772
// Name: NotificationCenterActionButton
// Dependencies: [19, 21, 7944, 9115, 5196, 17772, 2002, 1128, 2]
// Exports: default

// Module 17771 (NotificationCenterActionButton)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import IconButton2 from "IconButton" /* 7944 */;
import AssetRegistryDefault from "AssetRegistry" /* 9115 */;
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
