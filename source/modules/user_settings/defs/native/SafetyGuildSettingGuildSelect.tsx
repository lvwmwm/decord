// Module ID: 14635
// Function ID: 111512
// Name: MobileSetting
// Dependencies: [31, 5005, 13659, 14636, 7733, 4133, 14637, 1935, 10099, 2]

// Module 14635 (MobileSetting)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import zustandStore from "zustandStore";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ getSelectedGuildId: closure_6, GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
let items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileSetting);
createToggle = {
  unsearchable: true,
  useSelectedGuildId() {
    const field = zustandStore.useField("selected");
    const items = [field];
    const effect = React.useEffect(() => {
      const first = outer1_4.getFlattenedGuildIds()[0];
      let hasItem = outer1_10.includes(field);
      if (hasItem) {
        hasItem = null != first;
      }
      if (hasItem) {
        hasItem = outer1_6() === outer1_7;
      }
      if (hasItem) {
        outer1_8(first);
      }
    }, items);
    return callback().selectedGuildId;
  },
  parent: MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(14637, dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
};
createToggle = createToggle.createGuildSelector(createToggle);
const result = require("zustandStore").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default createToggle;
export const GUILD_SPECIFIC_SETTINGS = items;
