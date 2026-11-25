// Module ID: 10346
// Function ID: 10347
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [10347, 5595, 10348, 5594, 2]
// Exports: default

// Module 10346 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5594 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 10347 */;
import RetryIcon from "RetryIcon" /* 10348 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5595).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
