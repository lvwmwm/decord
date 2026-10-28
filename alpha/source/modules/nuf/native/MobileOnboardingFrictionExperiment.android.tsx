// Module ID: 17696
// Function ID: 17697
// Name: MobileOnboardingFrictionExperiment
// Dependencies: [17648, 1389, 5758, 1452, 17697, 1627, 11, 2]

// Module 17696 (MobileOnboardingFrictionExperiment)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import TimeUtils from "TimeUtils" /* 5758 */;
import MobileOnboardingFrictionShared from "MobileOnboardingFrictionShared" /* 17697 */;
import ParentalConsentStore from "ParentalConsentStore" /* 17648 */;
import UserStore from "UserStore" /* 1389 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let closure_5 = 30 * TimeUtils.MS_PER_MINUTE;
let obj = { name: "2026-10-android-mobile-onboarding-friction-negative-test", kind: "user", defaultConfig: MobileOnboardingFrictionShared.CONTROL, variations: obj2 };
const createApexExperiment = ApexExperiment.createApexExperiment;
obj2 = { 0: MobileOnboardingFrictionShared.CONTROL, 1: MobileOnboardingFrictionShared.LOW_FRICTION_V1 };
let closure_6 = createApexExperiment(obj);
let obj3 = {
  trackMobileOnboardingFrictionExposure(AuthManager) {
    if (!ParentalConsentStore.getShouldShowGuardianConnect()) {
      const obj = MetaQuestUtils;
      if (!obj.isMetaQuest()) {
        const obj2 = { location: AuthManager };
        const config = closure_6.getConfig(obj2, { autoTrackExposure: true });
      }
    }
    const CONTROL = MobileOnboardingFrictionShared.CONTROL;
  },
  getMobileOnboardingFrictionConfig(NewUserUtils) {
    if (!ParentalConsentStore.getShouldShowGuardianConnect()) {
      let CONTROL;
      const obj = MetaQuestUtils;
      if (!obj.isMetaQuest()) {
        const obj2 = { location: NewUserUtils };
        CONTROL = closure_6.getConfig(obj2, { autoTrackExposure: false });
      }
      return CONTROL;
    }
    CONTROL = MobileOnboardingFrictionShared.CONTROL;
  },
  isATTDeferred(location) {
    const currentUser = UserStore.getCurrentUser();
    let tmp2 = null == currentUser;
    if (!tmp2) {
      if (!ParentalConsentStore.getShouldShowGuardianConnect()) {
        let CONTROL;
        const obj = MetaQuestUtils;
        if (!obj.isMetaQuest()) {
          const obj2 = { location };
          CONTROL = closure_6.getConfig(obj2, { autoTrackExposure: false });
        }
        tmp2 = !CONTROL.deferATT;
      }
      CONTROL = MobileOnboardingFrictionShared.CONTROL;
    }
    let tmp10 = !tmp2;
    if (tmp10) {
      const _Date = Date;
      const timestamp = Date.now();
      const obj3 = SnowflakeUtilsDefault;
      tmp10 = timestamp < obj3.extractTimestamp(currentUser.id) + closure_5;
    }
    return tmp10;
  }
};
const result = size.fileFinishedImporting("modules/nuf/native/MobileOnboardingFrictionExperiment.android.tsx");

export default obj3;
