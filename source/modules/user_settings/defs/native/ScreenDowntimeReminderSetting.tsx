// Module ID: 14223
// Function ID: 107502
// Name: toggle
// Dependencies: []

// Module 14223 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.z6tZKH);
  },
  useDescription() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.TummoQ);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.NOTIFICATIONS,
  useValue() {
    const items = [closure_3];
    return arg1(dependencyMap[7]).useStateFromStores(items, () => obj.screenDowntimeReminder);
  },
  onValueChange(screenDowntimeReminder) {
    return importDefault(dependencyMap[8]).setScreenDowntimeReminder(screenDowntimeReminder);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = arg1(dependencyMap[2]).useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeReminderSetting" });
    const obj = arg1(dependencyMap[2]);
    const tmp2 = importDefault(dependencyMap[3])();
    const hasActiveParentLinks = arg1(dependencyMap[4]).useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default toggle;
