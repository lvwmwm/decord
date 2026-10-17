// Module ID: 11819
// Function ID: 11820
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11820, 4904, 11616, 4903, 2]
// Exports: default

// Module 11819 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4903 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4904 */;
import RetryIcon from "RetryIcon" /* 11616 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11820 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(4904).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
