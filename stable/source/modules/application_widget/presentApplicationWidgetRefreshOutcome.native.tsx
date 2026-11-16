// Module ID: 12412
// Function ID: 12413
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12413, 5869, 11247, 5868, 2]
// Exports: default

// Module 12412 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5868 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import RetryIcon from "RetryIcon" /* 11247 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12413 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5869).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
