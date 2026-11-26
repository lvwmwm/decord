// Module ID: 18713
// Function ID: 18714
// Name: MobileOnboardingFrictionExperiment
// Dependencies: [18665, 1388, 6069, 1452, 18714, 1627, 11, 2]

// Module 18713 (MobileOnboardingFrictionExperiment)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import TimeUtils from "TimeUtils" /* 6069 */;
import MobileOnboardingFrictionShared from "MobileOnboardingFrictionShared" /* 18714 */;
import ParentalConsentStore from "ParentalConsentStore" /* 18665 */;
import UserStore from "UserStore" /* 1388 */;
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
