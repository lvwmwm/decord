// Module ID: 14420
// Function ID: 108764
// Name: toggle
// Dependencies: []

// Module 14420 (toggle)
const _module = require(dependencyMap[0]);
({ getSelectedGuildId: closure_2, useUserSafetySettingsSelectedGuildStore: closure_3 } = _module);
const _module1 = require(dependencyMap[4]);
const toggle = _module1.createToggle({
  useTitle() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.T+nevN);
  },
  useDescription() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.b+bVSw);
  },
  parent: require(dependencyMap[1]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const ActivityJoiningRestrictedGuilds = require(dependencyMap[2]).ActivityJoiningRestrictedGuilds;
    const setting = ActivityJoiningRestrictedGuilds.useSetting();
    return !setting.includes(callback2().selectedGuildId);
  },
  onValueChange(arg0) {
    const tmp = callback();
    const sanitizedActivityJoiningRestrictedGuilds = require(dependencyMap[3]).getSanitizedActivityJoiningRestrictedGuilds();
    if (arg0) {
      sanitizedActivityJoiningRestrictedGuilds.delete(tmp);
    } else {
      sanitizedActivityJoiningRestrictedGuilds.add(tmp);
    }
    const ActivityJoiningRestrictedGuilds = require(dependencyMap[2]).ActivityJoiningRestrictedGuilds;
    const items = [...sanitizedActivityJoiningRestrictedGuilds];
    ActivityJoiningRestrictedGuilds.updateSetting(items);
  }
});
const _module2 = require(dependencyMap[6]);
const result = _module2.fileFinishedImporting("modules/user_settings/defs/native/GuildSettingActivityJoining.tsx");

export default toggle;
