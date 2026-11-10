// Module ID: 12389
// Function ID: 12390
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12390, 5839, 11224, 5838, 2]
// Exports: default

// Module 12389 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5838 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import RetryIcon from "RetryIcon" /* 11224 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12390 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5839).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
