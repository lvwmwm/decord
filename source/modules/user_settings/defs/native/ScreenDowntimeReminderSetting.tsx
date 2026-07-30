// Module ID: 14472
// Function ID: 14473
// Name: toggle
// Dependencies: [10241, 7753, 5854, 13937, 6252, 10116, 1236, 589, 14473, 2]

// Module 14472 (toggle)
import DesktopNotificationTypes from "DesktopNotificationTypes";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.z6tZKH);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.TummoQ);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue() {
    const items = [DesktopNotificationTypes];
    return require(589) /* initialize */.useStateFromStores(items, () => obj.screenDowntimeReminder);
  },
  onValueChange(screenDowntimeReminder) {
    return importDefault(14473).setScreenDowntimeReminder(screenDowntimeReminder);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = require(5854) /* apexExperiment */.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeReminderSetting" });
    const obj = require(5854) /* apexExperiment */;
    const tmp2 = importDefault(13937)();
    const hasActiveParentLinks = require(6252) /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
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
