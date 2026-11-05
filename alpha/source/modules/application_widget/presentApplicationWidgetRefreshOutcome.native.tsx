// Module ID: 12417
// Function ID: 12418
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12418, 5849, 11278, 5848, 2]
// Exports: default

// Module 12417 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5848 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5849 */;
import RetryIcon from "RetryIcon" /* 11278 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12418 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5849).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
