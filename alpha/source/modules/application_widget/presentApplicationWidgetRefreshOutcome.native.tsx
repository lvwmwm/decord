// Module ID: 12009
// Function ID: 12010
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12010, 5663, 11790, 5662, 2]
// Exports: default

// Module 12009 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5662 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5663 */;
import RetryIcon from "RetryIcon" /* 11790 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12010 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5663).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
