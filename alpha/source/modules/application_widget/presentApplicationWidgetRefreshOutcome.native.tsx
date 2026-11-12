// Module ID: 12180
// Function ID: 12181
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12181, 5952, 11028, 5951, 2]
// Exports: default

// Module 12180 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5951 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import RetryIcon from "RetryIcon" /* 11028 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12181 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5952).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
