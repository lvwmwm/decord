// Module ID: 7314
// Function ID: 7315
// Name: UserProfileApplicationWidgetTypes
// Dependencies: [7310, 2]
// Exports: isApplicationWidgetWithId

// Module 7314 (UserProfileApplicationWidgetTypes)
import WidgetType from "WidgetType" /* 7310 */;
import size from "module_2" /* 2 */;

class ApplicationWidget {
  constructor(arg0) {
    let applicationId;
    let id;
    ({ id, applicationId } = arg0);
    const obj = Object.create(new.target.prototype);
    obj.id = id;
    obj.type = WidgetType.WidgetType.APPLICATION;
    obj.applicationId = applicationId;
    return obj;
  }
  toSubmission() {
    return { id: this.id, data: { type: this.type, application_id: this.applicationId } };
  }
  isUpdatable() {
    return true;
  }
  isDiscardable() {
    return false;
  }
  isValid() {
    return true;
  }
  isEqual(applicationId) {
    let tmp = applicationId instanceof ApplicationWidget;
    if (tmp) {
      const self = this;
      tmp = applicationId.applicationId === this.applicationId;
    }
    return tmp;
  }
  getUniqueKey() {
    return "" + this.type + "-" + this.applicationId;
  }
  getProfileAnalyticsOptions() {
    return { widgetType: this.type, applicationId: this.applicationId };
  }
  getProfileEditAnalyticsOptions() {
    return { widgetEdited: this.type, applicationId: this.applicationId };
  }
}
const prototype = ApplicationWidget.prototype;
const result = size.fileFinishedImporting("modules/user_profile/UserProfileApplicationWidgetTypes.tsx");

export { ApplicationWidget };
export const isApplicationWidgetWithId = function isApplicationWidgetWithId(applicationId, arg1) {
  return null != arg1 && applicationId instanceof ApplicationWidget && applicationId.applicationId === arg1;
};
