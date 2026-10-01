// Module ID: 16114
// Function ID: 16115
// Name: ICYMIFeedbackSheet
// Dependencies: [19, 21, 11142, 1115, 7807, 7799, 2]
// Exports: default

// Module 16114 (ICYMIFeedbackSheet)
import Fragment from "Fragment" /* 21 */;
import intl8 from "intl" /* 1115 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 7807 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 11142 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIFeedbackSheet.tsx");

export default function ICYMIFeedbackSheet() {
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  FeedbackActionSheetDefault;
  const intl = intl8.intl;
  const intl2 = intl8.intl;
  const intl3 = intl8.intl;
  let obj2 = { label: intl4.string(intl8.t.F6TmZA), value: "irrelevant_content" };
  intl4 = intl8.intl;
  let items = [obj2, , , , ];
  const obj3 = { label: intl5.string(intl8.t.voWAzi), value: "not_enough_content" };
  intl5 = intl8.intl;
  items[1] = obj3;
  const obj4 = { label: intl6.string(intl8.t.Ay8iwx), value: "too_much_content" };
  intl6 = intl8.intl;
  items[2] = obj4;
  const obj5 = { label: intl7.string(intl8.t["Yu+52W"]), value: "laggy" };
  intl7 = intl8.intl;
  items[3] = obj5;
  items[4] = { label: "Other", value: "other" };
  return <tmp headerLabel={intl.string(intl8.t["ppfH9+"])} showHeaderCloseButton hideDontShowAgainCheckbox ratingsBodyLabel={intl2.string(intl8.t["ePk/Cf"])} reasonsHeaderLabel={intl3.string(intl8.t.sBOuOf)} reasons={items} otherKey="other" trackOpen={ICYMIAnalytics2.ICYMIAnalytics.trackFeedFeedbackPromptViewed} feedbackReasons={["other"]} trackReport={function trackReport(reason) {
    let rating;
    const obj = ICYMIActionCreatorsDefault;
    obj.giveFeedback();
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    let tmp2;
    const trackFeedFeedbackSubmitted = ICYMIAnalytics.trackFeedFeedbackSubmitted;
    if (null != reason.reason) {
      const items = [reason.reason.value];
      tmp2 = items;
    }
    const obj2 = { reason_descriptions: tmp2, rating, user_feedback: reason.feedback };
    rating = reason.rating;
    const result = trackFeedFeedbackSubmitted(obj2);
  }} />;
};
