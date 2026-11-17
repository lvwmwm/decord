// Module ID: 11021
// Function ID: 11022
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11022, 6009, 11023, 6008, 2]
// Exports: default

// Module 11021 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 6008 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11022 */;
import RetryIcon from "RetryIcon" /* 11023 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(6009).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
