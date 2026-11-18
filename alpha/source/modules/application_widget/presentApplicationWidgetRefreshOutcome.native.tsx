// Module ID: 10303
// Function ID: 10304
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [10304, 5505, 10305, 5504, 2]
// Exports: default

// Module 10303 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5504 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5505 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 10304 */;
import RetryIcon from "RetryIcon" /* 10305 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5505).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
