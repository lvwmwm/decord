// Module ID: 14454
// Function ID: 110361
// Name: toggle
// Dependencies: [10224, 7733, 5838, 13921, 6235, 10099, 1212, 566, 14455, 2]

// Module 14454 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.z6tZKH);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.TummoQ);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.screenDowntimeReminder);
  },
  onValueChange(screenDowntimeReminder) {
    return importDefault(14455).setScreenDowntimeReminder(screenDowntimeReminder);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = require(5838) /* apexExperiment */.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeReminderSetting" });
    const obj = require(5838) /* apexExperiment */;
    const tmp2 = importDefault(13921)();
    const hasActiveParentLinks = require(6235) /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeReminderSetting.tsx");

export default createToggle;
