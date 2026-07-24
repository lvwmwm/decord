// Module ID: 9556
// Function ID: 74305
// Name: trackOpen
// Dependencies: [31, 9534, 653, 33, 1212, 675, 9557, 9537, 4098, 9559, 1934, 2]
// Exports: default

// Module 9556 (trackOpen)
import "result";
import { NotificationUserFeedbackReasons as closure_3 } from "NotificationUserFeedbackReasons";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function trackOpen() {
  importDefault(675).track(AnalyticEvents.OPEN_POPOUT, { type: "Notification Feedback Sheet", source: "Notification End" });
}
const result = require("ME").fileFinishedImporting("modules/notifications/native/NotificationSurveyActionSheet.tsx");

export default function NotificationSurveyActionSheet(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ notificationType: require, location: importDefault, messageId: dependencyMap } = arg0);
  let obj = { value: constants.TOO_MANY };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.pLeQp0);
  const items = [obj, , ];
  obj = { value: constants.IRRELEVANT };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.tuwPcC);
  items[1] = obj;
  obj = { value: constants.DISLIKE_CONTENT };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t.glUMhg);
  items[2] = obj;
  const obj1 = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.headerLabel = intl4.string(require(1212) /* getSystemLocale */.t.wGioO1);
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj1.ratingsBodyLabel = intl5.string(require(1212) /* getSystemLocale */.t.Yzl7Or);
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj1.reasonsHeaderLabel = intl6.string(require(1212) /* getSystemLocale */.t.g1q5fr);
  obj1.reasons = items;
  obj1.trackOpen = trackOpen;
  obj1.trackReport = function trackReport(arg0) {
    let rating;
    let reason;
    ({ rating, reason } = arg0);
    if (null != rating) {
      let obj = outer1_1(outer1_2[5]);
      obj = {};
      let value = null;
      if (null != reason) {
        value = reason.value;
      }
      obj.reason = value;
      obj.rating = rating;
      obj.notification_type = closure_0;
      obj.location = closure_1;
      obj.message_id = closure_2;
      obj.track(outer1_4.NOTIFICATION_REPORT_SUBMITTED, obj);
    }
    outer1_0(outer1_2[7]).handleSurveyCleanup();
    const obj3 = outer1_0(outer1_2[7]);
    obj = {};
    const obj4 = outer1_1(outer1_2[8]);
    const intl = outer1_0(outer1_2[4]).intl;
    obj.header = intl.string(outer1_0(outer1_2[4]).t.wGioO1);
    obj4.openLazy(outer1_0(outer1_2[10])(outer1_2[9], outer1_2.paths), "UserFeedbackSurvey", obj);
  };
  return jsx(importDefault(9557), { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true });
};
