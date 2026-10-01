// Module ID: 8126
// Function ID: 8127
// Name: showReportModalForUserWidget
// Dependencies: [5063, 7047, 8089, 6584, 2]
// Exports: showReportModalForUserWidget

// Module 8126 (showReportModalForUserWidget)
import ReportModals from "ReportModals" /* 8089 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const user_profile_widget = "user_profile_widget";
let result = size.fileFinishedImporting("modules/user_profile/showReportModalForUserWidget.tsx");

export const USER_PROFILE_WIDGET_REPORT_ENTRYPOINT = "user_profile_widget";
export const showReportModalForUserWidget = function showReportModalForUserWidget(user_id, applicationId) {
  _require = user_id;
  importDefault = applicationId;
  let tmp = _require;
  let tmp2 = applicationId;
  if (applicationId instanceof require("UserProfileApplicationWidgetTypes").ApplicationWidget) {
    applicationId = applicationId.applicationId;
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
        let result1 = tmpResult3.showReportModalForWidget(user_id, applicationId);
      }
    } else {
      let obj3 = require("ApplicationActionCreators");
      const application1 = obj3.fetchApplication(applicationId);
      const nextPromise = application1.then(() => {
        const application = ApplicationStore.getApplication(applicationId);
        let prop;
        const tmp = user_id;
        const tmp2 = closure_1;
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
        return obj.showReportModalForWidget(user_id, applicationId);
      });
    }
  } else {
    const tmpResult4 = tmp(tmp2[2]);
    const result2 = tmpResult4.showReportModalForWidget(user_id, applicationId);
  }
};
