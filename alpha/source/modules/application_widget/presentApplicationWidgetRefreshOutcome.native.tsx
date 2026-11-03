// Module ID: 12344
// Function ID: 12345
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12345, 5832, 11220, 5831, 2]
// Exports: default

// Module 12344 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5831 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5832 */;
import RetryIcon from "RetryIcon" /* 11220 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12345 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5832).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
