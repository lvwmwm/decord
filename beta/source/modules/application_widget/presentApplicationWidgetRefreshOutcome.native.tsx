// Module ID: 12275
// Function ID: 12276
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12276, 6005, 11095, 6004, 2]
// Exports: default

// Module 12275 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 6004 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6005 */;
import RetryIcon from "RetryIcon" /* 11095 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12276 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(6005).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
