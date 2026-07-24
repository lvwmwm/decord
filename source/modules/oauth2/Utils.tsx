// Module ID: 8998
// Function ID: 70852
// Name: getApplicationDetailsText
// Dependencies: [653, 8999, 1212, 8223, 2]
// Exports: getApplicationDetailsText, isContentClassificationRestricted

// Module 8998 (getApplicationDetailsText)
import { MarketingURLs } from "ME";

let result = require("getSystemLocale").fileFinishedImporting("modules/oauth2/Utils.tsx");

export const getApplicationDetailsText = function getApplicationDetailsText(application) {
  let obj = require(8999) /* getIsSocialLayerParentApplication */;
  const isSocialLayerParentApplication = obj.getIsSocialLayerParentApplication(application);
  if (null != application.privacy_policy_url) {
    if (null != application.terms_of_service_url) {
      const t4 = require(1212) /* getSystemLocale */.t;
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj = {};
      ({ name: obj5.application, privacy_policy_url: obj5.privacyPolicyURL, terms_of_service_url: obj5.termsOfServiceURL } = application);
      obj.discordPrivacyPolicyURL = MarketingURLs.PRIVACY;
      return intl4.format(isSocialLayerParentApplication ? t4.yVfotv : t4.rxlyKL, obj);
    }
  }
  if (null != application.privacy_policy_url) {
    const t3 = require(1212) /* getSystemLocale */.t;
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = {};
    ({ name: obj4.application, privacy_policy_url: obj4.privacyPolicyURL } = application);
    obj.discordPrivacyPolicyURL = MarketingURLs.PRIVACY;
    return intl3.format(isSocialLayerParentApplication ? t3.pYVSah : t3.TBvmM2, obj);
  } else if (null != application.terms_of_service_url) {
    const t2 = require(1212) /* getSystemLocale */.t;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj1 = {};
    ({ name: obj3.application, terms_of_service_url: obj3.termsOfServiceURL } = application);
    obj1.discordPrivacyPolicyURL = MarketingURLs.PRIVACY;
    return intl2.format(isSocialLayerParentApplication ? t2.nBLOp5 : t2["q0T/Q1"], obj1);
  } else {
    const t = require(1212) /* getSystemLocale */.t;
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj2 = { application: application.name, discordPrivacyPolicyURL: MarketingURLs.PRIVACY };
    return intl.format(isSocialLayerParentApplication ? t["8LemYv"] : t["3Ywek3"], obj2);
  }
};
export const isContentClassificationRestricted = function isContentClassificationRestricted(content_classification, nsfwAllowed) {
  let result = null != content_classification;
  if (result) {
    result = require(8223) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(content_classification);
    const obj = require(8223) /* isAgeRestrictedContentClassification */;
  }
  if (result) {
    result = false === nsfwAllowed;
  }
  return result;
};
