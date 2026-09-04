// Module ID: 15395
// Function ID: 15396
// Name: toggle
// Dependencies: [1302, 7906, 586, 11400, 1233, 9287, 2]

// Module 15395 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import saveGuildFoldersDefault from "saveGuildFolders" /* 9287 */;
import closure_2 from "initialize" /* 1302 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3340dY"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => closure_2.shouldSync("text"));
  },
  onValueChange: saveGuildFoldersDefault.setShouldSyncTextSettings
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default createToggle;
