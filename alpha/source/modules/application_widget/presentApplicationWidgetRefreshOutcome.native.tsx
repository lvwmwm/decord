// Module ID: 11961
// Function ID: 11962
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11962, 5649, 11742, 5648, 2]
// Exports: default

// Module 11961 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5648 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import RetryIcon from "RetryIcon" /* 11742 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11962 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5649).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
