// Module ID: 14409
// Function ID: 108704
// Name: toggle
// Dependencies: []

// Module 14409 (toggle)
const _module = require(dependencyMap[0]);
({ getSelectedGuildId: closure_2, useUserSafetySettingsSelectedGuildStore: closure_3 } = _module);
const _module1 = require(dependencyMap[4]);
const toggle = _module1.createToggle({
  useTitle() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.IQO6Bi);
  },
  useDescription() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.TUKMak);
  },
  parent: require(dependencyMap[1]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const ActivityRestrictedGuilds = require(dependencyMap[2]).ActivityRestrictedGuilds;
    const setting = ActivityRestrictedGuilds.useSetting();
    return !setting.includes(callback2().selectedGuildId);
  },
  onValueChange(arg0) {
    const tmp = callback();
    const sanitizedActivityRestrictedGuilds = require(dependencyMap[3]).getSanitizedActivityRestrictedGuilds();
    if (arg0) {
      sanitizedActivityRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityRestrictedGuilds.add(tmp);
    }
    const ActivityRestrictedGuilds = require(dependencyMap[2]).ActivityRestrictedGuilds;
    const items = [...sanitizedActivityRestrictedGuilds];
    ActivityRestrictedGuilds.updateSetting(items);
  }
});
const _module2 = require(dependencyMap[6]);
const result = _module2.fileFinishedImporting("modules/user_settings/defs/native/GuildSettingActivityStatus.tsx");

export default toggle;
