// Module ID: 11511
// Function ID: 11512
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11512, 4811, 11313, 4810, 2]
// Exports: default

// Module 11511 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4810 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4811 */;
import RetryIcon from "RetryIcon" /* 11313 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11512 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(4811).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
