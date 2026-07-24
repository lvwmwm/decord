// Module ID: 6875
// Function ID: 54379
// Name: ApplicationWidget
// Dependencies: [6, 7, 6856, 2]
// Exports: isApplicationWidgetWithId

// Module 6875 (ApplicationWidget)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class ApplicationWidget {
    constructor(arg0) {
      ({ id, applicationId } = arg0);
      tmp = outer1_2(this, ApplicationWidget);
      this.id = id;
      this.type = ApplicationWidget(outer1_1[2]).WidgetType.APPLICATION;
      this.applicationId = applicationId;
      return;
    }
  }
  let obj = {
    key: "toSubmission",
    value() {
      obj = { id: this.id, data: obj };
      obj = { type: this.type, application_id: this.applicationId };
      return obj;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isDiscardable",
    value() {
      return false;
    }
  };
  items[1] = obj;
  obj = {
    key: "isValid",
    value() {
      return true;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isEqual",
    value(applicationId) {
      let tmp = applicationId instanceof ApplicationWidget;
      if (tmp) {
        const self = this;
        tmp = applicationId.applicationId === this.applicationId;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getUniqueKey",
    value() {
      return "" + this.type + "-" + this.applicationId;
    }
  };
  items[5] = {
    key: "getProfileAnalyticsOptions",
    value() {
      return { widgetType: this.type, applicationId: this.applicationId };
    }
  };
  items[6] = {
    key: "getProfileEditAnalyticsOptions",
    value() {
      return { widgetEdited: this.type, applicationId: this.applicationId };
    }
  };
  return callback(ApplicationWidget, items);
})();
let closure_4 = tmp2;
const result = require("WidgetType").fileFinishedImporting("modules/user_profile/UserProfileApplicationWidgetTypes.tsx");

export const ApplicationWidget = tmp2;
export const isApplicationWidgetWithId = function isApplicationWidgetWithId(applicationId) {
  let tmp = null != arg1;
  if (tmp) {
    tmp = applicationId instanceof closure_4;
  }
  if (tmp) {
    tmp = applicationId.applicationId === arg1;
  }
  return tmp;
};
