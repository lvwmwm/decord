// Module ID: 8952
// Function ID: 70596
// Name: getApplicationDetailsText
// Dependencies: []
// Exports: getApplicationDetailsText, isContentClassificationRestricted

// Module 8952 (getApplicationDetailsText)
const MarketingURLs = require(dependencyMap[0]).MarketingURLs;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/oauth2/Utils.tsx");

export const getApplicationDetailsText = function getApplicationDetailsText(application) {
  let obj = require(dependencyMap[1]);
  const isSocialLayerParentApplication = obj.getIsSocialLayerParentApplication(application);
  if (null != application.privacy_policy_url) {
    if (null != application.terms_of_service_url) {
      const t4 = require(dependencyMap[2]).t;
      const intl4 = require(dependencyMap[2]).intl;
      obj = {};
      ({ name: obj5.application, privacy_policy_url: obj5.privacyPolicyURL, terms_of_service_url: obj5.termsOfServiceURL } = application);
      obj.discordPrivacyPolicyURL = MarketingURLs.PRIVACY;
      return intl4.format(isSocialLayerParentApplication ? t4.yVfotv : t4.rxlyKL, obj);
    }
  }
  if (null != application.privacy_policy_url) {
    const t3 = require(dependencyMap[2]).t;
    const intl3 = require(dependencyMap[2]).intl;
    obj = {};
    ({ name: obj4.application, privacy_policy_url: obj4.privacyPolicyURL } = application);
    obj.discordPrivacyPolicyURL = MarketingURLs.PRIVACY;
    return intl3.format(isSocialLayerParentApplication ? t3.pYVSah : t3.TBvmM2, obj);
  } else if (null != application.terms_of_service_url) {
    const t2 = require(dependencyMap[2]).t;
    const intl2 = require(dependencyMap[2]).intl;
    const obj1 = {};
    ({ name: obj3.application, terms_of_service_url: obj3.termsOfServiceURL } = application);
    obj1.discordPrivacyPolicyURL = MarketingURLs.PRIVACY;
    return intl2.format(isSocialLayerParentApplication ? t2.nBLOp5 : t2.q0T/Q1, obj1);
  } else {
    const t = require(dependencyMap[2]).t;
    const intl = require(dependencyMap[2]).intl;
    const obj2 = { application: application.name, discordPrivacyPolicyURL: MarketingURLs.PRIVACY };
    return intl.format(isSocialLayerParentApplication ? t.8LemYv : t.3Ywek3, obj2);
  }
};
export const isContentClassificationRestricted = function isContentClassificationRestricted(content_classification, nsfwAllowed) {
  let result = null != content_classification;
  if (result) {
    result = require(dependencyMap[3]).isAgeRestrictedContentClassification(content_classification);
    const obj = require(dependencyMap[3]);
  }
  if (result) {
    result = false === nsfwAllowed;
  }
  return result;
};
