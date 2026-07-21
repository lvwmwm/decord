// Module ID: 6871
// Function ID: 54326
// Name: ApplicationWidget
// Dependencies: []
// Exports: isApplicationWidgetWithId

// Module 6871 (ApplicationWidget)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class ApplicationWidget {
    constructor(arg0) {
      ({ id, applicationId } = arg0);
      tmp = closure_2(this, ApplicationWidget);
      this.id = id;
      this.type = ApplicationWidget(closure_1[2]).WidgetType.APPLICATION;
      this.applicationId = applicationId;
      return;
    }
  }
  const arg1 = ApplicationWidget;
  let obj = {
    key: "toSubmission",
    value() {
      let obj = { id: this.id, data: obj };
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
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/user_profile/UserProfileApplicationWidgetTypes.tsx");

export const ApplicationWidget = tmp2;
export const isApplicationWidgetWithId = function isApplicationWidgetWithId(applicationId) {
  let tmp = null != arg1;
  if (tmp) {
    tmp = applicationId instanceof tmp2;
  }
  if (tmp) {
    tmp = applicationId.applicationId === arg1;
  }
  return tmp;
};
