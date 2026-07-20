// Module ID: 7526
// Function ID: 60235
// Name: set
// Dependencies: []
// Exports: getAgeVerificationGetStartedSteps

// Module 7526 (set)
const HelpdeskArticles = require(dependencyMap[0]).HelpdeskArticles;
const items = [require(dependencyMap[1]).AgeVerificationModalEntryPoint.NSFW_GUILD];
let obj = { FACIAL_AGE_ESTIMATION: 1, [1]: "FACIAL_AGE_ESTIMATION", ID_VERIFICATION: 2, [2]: "ID_VERIFICATION", MODULAR: 3, [3]: "MODULAR", GOOGLE_WALLET: 9, [9]: "GOOGLE_WALLET" };
obj = {};
obj = { title: importDefault(dependencyMap[5]).2yLvkS, description: importDefault(dependencyMap[5]).eJmat5 };
obj[obj.FACIAL_AGE_ESTIMATION] = obj;
const set = new Set(items);
obj[obj.ID_VERIFICATION] = { title: importDefault(dependencyMap[5]).dwkwo0, description: importDefault(dependencyMap[5]).ZdmRwW };
const obj1 = { title: importDefault(dependencyMap[5]).dwkwo0, description: importDefault(dependencyMap[5]).ZdmRwW };
obj[obj.GOOGLE_WALLET] = { title: importDefault(dependencyMap[5]).Y9sLpR, description: importDefault(dependencyMap[5]).dah4bF };
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/age_assurance/AgeVerificationConstants.tsx");

export const FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS = set;
export const getAgeVerificationGetStartedSteps = function getAgeVerificationGetStartedSteps(arg0) {
  const require = arg0;
  let obj = {};
  const intl = require(dependencyMap[2]).intl;
  obj.title = intl.string(require(dependencyMap[2]).t.HphYKp);
  const intl2 = require(dependencyMap[2]).intl;
  obj.description = intl2.string(require(dependencyMap[2]).t.GCZC+9);
  const items = [obj, , ];
  obj = {};
  const intl3 = require(dependencyMap[2]).intl;
  obj.title = intl3.string(require(dependencyMap[2]).t.nkO4L3);
  const intl4 = require(dependencyMap[2]).intl;
  obj.description = intl4.string(require(dependencyMap[2]).t.rHZFsH);
  items[1] = obj;
  obj = {};
  const intl5 = require(dependencyMap[2]).intl;
  obj.title = intl5.string(require(dependencyMap[2]).t.aVwLfn);
  const intl6 = require(dependencyMap[2]).intl;
  obj.description = intl6.format(require(dependencyMap[2]).t.n5vd1E, {
    handleOnHelpUrlHook() {
      const obj = callback(closure_2[3]);
      obj.openUrl(callback(closure_2[4]).getArticleURL(constants.TIGGER_PAWTECT_SYSTEM_DMS));
      const obj2 = callback(closure_2[4]);
      const result = arg0(closure_2[1]).trackAgeVerificationModalClicked(arg0, arg0(closure_2[1]).AgeVerificationModalVersion.PRIMARY, arg0(closure_2[1]).AgeVerificationModalCta.SYSTEM_DMS_LEARN_MORE);
    }
  });
  items[2] = obj;
  return items;
};
export const AGE_VERIFICATION_MODAL_KEY = "AGE_VERIFICATION_MODAL_KEY";
export const AGE_VERIFICATION_GET_STARTED_MODAL_KEY = "AGE_VERIFICATION_GET_STARTED_MODAL_KEY";
export const AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY = "AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY";
export const VerificationVendorName = { K_ID: "K_ID", GOOGLE_WALLET: "GOOGLE_WALLET", INCODE: "INCODE" };
export const VerificationMethod = obj;
export const VERIFICATION_METHOD_TITLE_MAP = obj;
