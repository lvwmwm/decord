// Module ID: 11899
// Function ID: 11900
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11900, 5664, 11901, 5663, 2]
// Exports: default

// Module 11899 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5663 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5664 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11900 */;
import RetryIcon from "RetryIcon" /* 11901 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5664).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
