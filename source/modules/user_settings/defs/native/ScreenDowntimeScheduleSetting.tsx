// Module ID: 14225
// Function ID: 107522
// Name: toggle
// Dependencies: []

// Module 14225 (toggle)
const _module = require(dependencyMap[4]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.dxlHN2);
  },
  useDescription() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t./071J7);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[6]).EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(addFlagResult) {
    const EnableScreenDowntimeScheduleNotifications = require(dependencyMap[6]).EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(addFlagResult);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = require(dependencyMap[1]).useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeScheduleSetting" });
    const obj = require(dependencyMap[1]);
    const tmp2 = importDefault(dependencyMap[2])();
    const hasActiveParentLinks = require(dependencyMap[3]).useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;
