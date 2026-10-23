// Module ID: 11980
// Function ID: 11981
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11981, 5661, 11762, 5660, 2]
// Exports: default

// Module 11980 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5660 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5661 */;
import RetryIcon from "RetryIcon" /* 11762 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11981 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5661).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
