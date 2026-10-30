// Module ID: 12179
// Function ID: 12180
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12180, 5707, 11064, 5706, 2]
// Exports: default

// Module 12179 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5706 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import RetryIcon from "RetryIcon" /* 11064 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12180 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5707).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
