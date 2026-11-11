// Module ID: 12186
// Function ID: 12187
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12187, 5952, 11034, 5951, 2]
// Exports: default

// Module 12186 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5951 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import RetryIcon from "RetryIcon" /* 11034 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12187 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5952).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
