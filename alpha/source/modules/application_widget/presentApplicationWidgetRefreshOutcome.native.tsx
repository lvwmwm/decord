// Module ID: 11937
// Function ID: 11938
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11938, 5699, 11939, 5698, 2]
// Exports: default

// Module 11937 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5698 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11938 */;
import RetryIcon from "RetryIcon" /* 11939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5699).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
