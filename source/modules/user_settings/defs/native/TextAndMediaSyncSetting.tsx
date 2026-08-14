// Module ID: 14739
// Function ID: 14740
// Name: toggle
// Dependencies: [1303, 8148, 589, 10421, 1236, 8761, 2]

// Module 14739 (toggle)
import initialize from "initialize";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["3340dY"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [initialize];
    return require(589) /* initialize */.useStateFromStores(items, () => initialize.shouldSync("text"));
  },
  onValueChange: require("saveGuildFolders").setShouldSyncTextSettings
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default createToggle;
