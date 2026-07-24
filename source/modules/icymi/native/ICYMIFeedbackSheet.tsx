// Module ID: 15249
// Function ID: 116052
// Name: ICYMIFeedbackSheet
// Dependencies: [31, 33, 9557, 1212, 8374, 8365, 2]
// Exports: default

// Module 15249 (ICYMIFeedbackSheet)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("closeActionSheet").fileFinishedImporting("modules/icymi/native/ICYMIFeedbackSheet.tsx");

export default function ICYMIFeedbackSheet() {
  let obj = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerLabel = intl.string(require(1212) /* getSystemLocale */.t["ppfH9+"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.ratingsBodyLabel = intl2.string(require(1212) /* getSystemLocale */.t["ePk/Cf"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.reasonsHeaderLabel = intl3.string(require(1212) /* getSystemLocale */.t.sBOuOf);
  obj = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl4.string(require(1212) /* getSystemLocale */.t.F6TmZA);
  obj.value = "irrelevant_content";
  let items = [obj, , , , ];
  obj = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl5.string(require(1212) /* getSystemLocale */.t.voWAzi);
  obj.value = "not_enough_content";
  items[1] = obj;
  const obj1 = {};
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl6.string(require(1212) /* getSystemLocale */.t.Ay8iwx);
  obj1.value = "too_much_content";
  items[2] = obj1;
  const obj2 = {};
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl7.string(require(1212) /* getSystemLocale */.t["Yu+52W"]);
  obj2.value = "laggy";
  items[3] = obj2;
  items[4] = { label: "Other", value: "other" };
  obj.reasons = items;
  obj.otherKey = "other";
  obj.trackOpen = require(8374) /* listItemToType */.ICYMIAnalytics.trackFeedFeedbackPromptViewed;
  obj.feedbackReasons = ["other"];
  obj.trackReport = function trackReport(reason) {
    let obj = outer1_1(outer1_2[5]);
    obj.giveFeedback();
    const ICYMIAnalytics = outer1_0(outer1_2[4]).ICYMIAnalytics;
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
  return jsx(importDefault(9557), {});
};
