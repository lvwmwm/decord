// Module ID: 12409
// Function ID: 12410
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12410, 5846, 11270, 5845, 2]
// Exports: default

// Module 12409 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5845 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import RetryIcon from "RetryIcon" /* 11270 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12410 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5846).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
