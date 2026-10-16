// Module ID: 11757
// Function ID: 11758
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11758, 4868, 11557, 4867, 2]
// Exports: default

// Module 11757 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4867 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4868 */;
import RetryIcon from "RetryIcon" /* 11557 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11758 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(4868).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
