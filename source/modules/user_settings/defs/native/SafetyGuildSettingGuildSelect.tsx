// Module ID: 14397
// Function ID: 108633
// Name: MobileSetting
// Dependencies: []

// Module 14397 (MobileSetting)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ getSelectedGuildId: closure_6, GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7, setSelectedGuildId: closure_8, useUserSafetySettingsSelectedGuildStore: closure_9 } = arg1(dependencyMap[3]));
const MobileSetting = arg1(dependencyMap[4]).MobileSetting;
const items = [, ];
({ GUILD_SETTING_ACTIVITY_STATUS: arr[0], GUILD_SETTING_ACTIVITY_JOINING: arr[1] } = MobileSetting);
let obj = arg1(dependencyMap[8]);
obj = {
  unsearchable: true,
  useSelectedGuildId() {
    const field = closure_5.useField("selected");
    const arg1 = field;
    const items = [field];
    const effect = React.useEffect(() => {
      const first = flattenedGuildIds.getFlattenedGuildIds()[0];
      let hasItem = closure_10.includes(field);
      if (hasItem) {
        hasItem = null != first;
      }
      if (hasItem) {
        hasItem = callback() === closure_7;
      }
      if (hasItem) {
        callback2(first);
      }
    }, items);
    return callback().selectedGuildId;
  },
  parent: MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onGuildSelectPress() {
    importDefault(dependencyMap[5]).openLazy(arg1(dependencyMap[7])(dependencyMap[6], dependencyMap.paths), "SettingsPrivacyAndSafetyGuildSelectActionSheet");
  }
};
const guildSelector = obj.createGuildSelector(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingGuildSelect.tsx");

export default guildSelector;
export const GUILD_SPECIFIC_SETTINGS = items;
