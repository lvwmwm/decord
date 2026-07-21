// Module ID: 15079
// Function ID: 113518
// Name: ICYMIFeedbackSheet
// Dependencies: []
// Exports: default

// Module 15079 (ICYMIFeedbackSheet)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/icymi/native/ICYMIFeedbackSheet.tsx");

export default function ICYMIFeedbackSheet() {
  let obj = { "Null": null, "Null": null, "Null": null };
  const intl = arg1(dependencyMap[3]).intl;
  obj.headerLabel = intl.string(arg1(dependencyMap[3]).t.ppfH9+);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.ratingsBodyLabel = intl2.string(arg1(dependencyMap[3]).t.ePk/Cf);
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.reasonsHeaderLabel = intl3.string(arg1(dependencyMap[3]).t.sBOuOf);
  obj = {};
  const intl4 = arg1(dependencyMap[3]).intl;
  obj.label = intl4.string(arg1(dependencyMap[3]).t.F6TmZA);
  obj.value = "irrelevant_content";
  const items = [obj, , , , ];
  obj = {};
  const intl5 = arg1(dependencyMap[3]).intl;
  obj.label = intl5.string(arg1(dependencyMap[3]).t.voWAzi);
  obj.value = "not_enough_content";
  items[1] = obj;
  const obj1 = {};
  const intl6 = arg1(dependencyMap[3]).intl;
  obj1.label = intl6.string(arg1(dependencyMap[3]).t.Ay8iwx);
  obj1.value = "too_much_content";
  items[2] = obj1;
  const obj2 = {};
  const intl7 = arg1(dependencyMap[3]).intl;
  obj2.label = intl7.string(arg1(dependencyMap[3]).t.Yu+52W);
  obj2.value = "laggy";
  items[3] = obj2;
  items[4] = { <string:2048437162>: null, <string:2887950716>: true };
  obj.reasons = items;
  obj.otherKey = "other";
  obj.trackOpen = arg1(dependencyMap[4]).ICYMIAnalytics.trackFeedFeedbackPromptViewed;
  obj.feedbackReasons = ["isArray"];
  obj.trackReport = function trackReport(reason) {
    let obj = callback2(closure_2[5]);
    obj.giveFeedback();
    const ICYMIAnalytics = callback(closure_2[4]).ICYMIAnalytics;
    obj = {};
    let tmp2;
    if (null != reason.reason) {
      const items = [reason.reason.value];
      tmp2 = items;
    }
    obj.reason_descriptions = tmp2;
    const rating = reason.rating;
    let tmp3;
    if (null != rating) {
      tmp3 = rating;
    }
    obj.rating = tmp3;
    obj.user_feedback = reason.feedback;
    const result = ICYMIAnalytics.trackFeedFeedbackSubmitted(obj);
  };
  return jsx(importDefault(dependencyMap[2]), obj);
};
