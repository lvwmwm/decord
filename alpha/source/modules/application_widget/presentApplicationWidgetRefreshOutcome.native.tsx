// Module ID: 11991
// Function ID: 11992
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11992, 5701, 11993, 5700, 2]
// Exports: default

// Module 11991 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5700 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11992 */;
import RetryIcon from "RetryIcon" /* 11993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5701).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
