// Module ID: 13241
// Function ID: 13242
// Name: showReportModalForUserWidget
// Dependencies: [5440, 7325, 7721, 6852, 2]
// Exports: showReportModalForUserWidget

// Module 13241 (showReportModalForUserWidget)
import ReportModals from "ReportModals" /* 7721 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const user_profile_widget = "user_profile_widget";
let result = size.fileFinishedImporting("modules/user_profile/showReportModalForUserWidget.tsx");

export const USER_PROFILE_WIDGET_REPORT_ENTRYPOINT = "user_profile_widget";
export const showReportModalForUserWidget = function showReportModalForUserWidget(userId, widget) {
  let applicationId;
  _require = userId;
  importDefault = widget;
  let tmp = _require;
  let tmp2 = applicationId;
  if (widget instanceof require("UserProfileApplicationWidgetTypes").ApplicationWidget) {
    applicationId = widget.applicationId;
    let obj2 = ApplicationStore;
    if (ApplicationStore.isHydrated(applicationId)) {
      let application = obj2.getApplication(applicationId);
      let prop;
      if (application != null) {
        prop = application.vibegrationsProjectId;
      }
      if (null != prop) {
        let obj = { application, entrypoint: user_profile_widget };
        const tmpResult = tmp(tmp2[2]);
        let result = tmpResult.showReportModalForApp(obj);
      } else {
        const tmpResult3 = tmp(tmp2[2]);
        let result1 = tmpResult3.showReportModalForWidget(userId, widget);
      }
    } else {
      let obj3 = require("ApplicationActionCreators");
      const application1 = obj3.fetchApplication(applicationId);
      const nextPromise = application1.then(() => {
        const application = ApplicationStore.getApplication(applicationId);
        let prop;
        const tmp = userId;
        const tmp2 = widget;
        if (application != null) {
          prop = application.vibegrationsProjectId;
        }
        if (null != prop) {
          const obj3 = { application, entrypoint: user_profile_widget };
          const obj2 = ReportModals;
          const result = obj2.showReportModalForApp(obj3);
        } else {
          const obj = ReportModals;
          const result1 = obj.showReportModalForWidget(tmp, tmp2);
        }
      });
      nextPromise.catch(() => {
        const obj = ReportModals;
        return obj.showReportModalForWidget(userId, widget);
      });
    }
  } else {
    const tmpResult4 = tmp(tmp2[2]);
    const result2 = tmpResult4.showReportModalForWidget(userId, widget);
  }
};
