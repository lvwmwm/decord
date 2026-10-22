// Module ID: 11947
// Function ID: 11948
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11948, 5649, 11731, 5648, 2]
// Exports: default

// Module 11947 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5648 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import RetryIcon from "RetryIcon" /* 11731 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11948 */;
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
