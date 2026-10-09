// Module ID: 7687
// Function ID: 7688
// Name: getAgeVerificationGetStartedSteps
// Dependencies: [1085, 1126, 7497, 2127, 5916, 2]
// Exports: getAgeVerificationGetStartedSteps

// Module 7687 (getAgeVerificationGetStartedSteps)
import Constants from "Constants" /* 1085 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5916 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const HelpdeskArticles = Constants.HelpdeskArticles;
let result = size.fileFinishedImporting("modules/age_assurance/getAgeVerificationGetStartedSteps.tsx");

export const getAgeVerificationGetStartedSteps = function getAgeVerificationGetStartedSteps(modalSessionId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj4;
  _require = modalSessionId;
  let obj = { title: intl.string(require("intl").t.HphYKp), description: intl2.string(require("intl").t["GCZC+9"]) };
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  const items = [obj, , ];
  const obj2 = { title: intl3.string(require("intl").t.nkO4L3), description: intl4.string(require("intl").t.rHZFsH) };
  intl3 = require("intl").intl;
  intl4 = require("intl").intl;
  items[1] = obj2;
  const obj3 = { title: intl5.string(require("intl").t.aVwLfn), description: intl6.format(require("intl").t.n5vd1E, obj4) };
  intl5 = require("intl").intl;
  intl6 = require("intl").intl;
  obj4 = {
    handleOnHelpUrlHook() {
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const obj = HelpdeskUtilsDefault;
      openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_SYSTEM_DMS));
      const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
      AgeVerificationAnalyticsUtils;
      const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.SYSTEM_DMS_LEARN_MORE);
    }
  };
  items[2] = obj3;
  return items;
};
