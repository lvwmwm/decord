// Module ID: 12217
// Function ID: 12218
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12218, 5712, 11083, 5711, 2]
// Exports: default

// Module 12217 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5711 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import RetryIcon from "RetryIcon" /* 11083 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12218 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5712).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
