// Module ID: 12380
// Function ID: 12381
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12381, 5837, 11215, 5836, 2]
// Exports: default

// Module 12380 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5836 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import RetryIcon from "RetryIcon" /* 11215 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5837).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
