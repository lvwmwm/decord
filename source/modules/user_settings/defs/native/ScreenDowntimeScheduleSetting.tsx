// Module ID: 14598
// Function ID: 14599
// Name: toggle
// Dependencies: [7892, 6962, 14062, 7259, 10361, 1236, 3958, 2]

// Module 14598 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.dxlHN2);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/071J7"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(arg0) {
    const EnableScreenDowntimeScheduleNotifications = require(3958) /* explicitContentFromProto */.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(arg0);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = require(6962) /* apexExperiment */.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeScheduleSetting" });
    const obj = require(6962) /* apexExperiment */;
    const tmp2 = importDefault(14062)();
    const hasActiveParentLinks = require(7259) /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.dxlHN2);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/071J7"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableScreenDowntimeScheduleNotifications.useSetting,
  onValueChange(arg0) {
    const EnableScreenDowntimeScheduleNotifications = require(3958) /* explicitContentFromProto */.EnableScreenDowntimeScheduleNotifications;
    return EnableScreenDowntimeScheduleNotifications.updateSetting(arg0);
  },
  usePredicate() {
    let isFamilyCenterV3Enabled = require(6962) /* apexExperiment */.useIsFamilyCenterV3Enabled({ location: "ScreenDowntimeScheduleSetting" });
    const obj = require(6962) /* apexExperiment */;
    const tmp2 = importDefault(14062)();
    const hasActiveParentLinks = require(7259) /* useUserIdsForLinkStatus */.useHasActiveParentLinks();
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = tmp2;
    }
    if (isFamilyCenterV3Enabled) {
      isFamilyCenterV3Enabled = hasActiveParentLinks;
    }
    return isFamilyCenterV3Enabled;
  }
};
const result = require("useUserIsTeenAgeGroup").fileFinishedImporting("modules/user_settings/defs/native/ScreenDowntimeScheduleSetting.tsx");

export default toggle;
