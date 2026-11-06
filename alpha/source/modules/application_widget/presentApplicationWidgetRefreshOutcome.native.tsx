// Module ID: 12382
// Function ID: 12383
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12383, 5867, 11233, 5866, 2]
// Exports: default

// Module 12382 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5866 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
import RetryIcon from "RetryIcon" /* 11233 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5867).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
