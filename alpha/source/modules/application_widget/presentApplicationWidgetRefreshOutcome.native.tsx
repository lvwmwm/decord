// Module ID: 14495
// Function ID: 14496
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [14496, 5599, 10541, 5598, 2]
// Exports: default

// Module 14495 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5598 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5599 */;
import RetryIcon from "RetryIcon" /* 10541 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 14496 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5599).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
