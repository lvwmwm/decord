// Module ID: 14962
// Function ID: 14963
// Name: showReportModalForUserWidget
// Dependencies: [2038, 7777, 8352, 6881, 2]
// Exports: showReportModalForUserWidget

// Module 14962 (showReportModalForUserWidget)
import ReportModals from "ReportModals" /* 8352 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const user_profile_widget = "user_profile_widget";
let result = size.fileFinishedImporting("modules/user_profile/showReportModalForUserWidget.tsx");

export const USER_PROFILE_WIDGET_REPORT_ENTRYPOINT = "user_profile_widget";
export function showReportModalForUserWidget(user_id, applicationId) {
  _require = user_id;
  importDefault = applicationId;
  let tmp = _require;
  let tmp2 = applicationId;
  if (applicationId instanceof require("UserProfileApplicationWidgetTypes").ApplicationWidget) {
    applicationId = applicationId.applicationId;
    let obj2 = ApplicationStore;
    if (ApplicationStore.isHydrated(applicationId)) {
      let application = obj2.getApplication(applicationId);
      let conjureProjectId;
      if (application != null) {
        conjureProjectId = application.conjureProjectId;
      }
      if (null != conjureProjectId) {
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
        let conjureProjectId;
        const tmp = user_id;
        const tmp2 = closure_1;
        if (application != null) {
          conjureProjectId = application.conjureProjectId;
        }
        if (null != conjureProjectId) {
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
}
