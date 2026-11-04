// Module ID: 12042
// Function ID: 12043
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12043, 5695, 11823, 5694, 2]
// Exports: default

// Module 12042 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5694 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5695 */;
import RetryIcon from "RetryIcon" /* 11823 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12043 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5695).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
