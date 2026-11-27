// Module ID: 14678
// Function ID: 14679
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [14679, 5725, 10686, 5724, 2]
// Exports: default

// Module 14678 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5724 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import RetryIcon from "RetryIcon" /* 10686 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 14679 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5725).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
