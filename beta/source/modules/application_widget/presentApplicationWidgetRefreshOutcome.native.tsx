// Module ID: 12452
// Function ID: 12453
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [12453, 4531, 11106, 4530, 2]
// Exports: default

// Module 12452 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4530 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import RetryIcon from "RetryIcon" /* 11106 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 12453 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { key: "APPLICATION_WIDGET_REFRESH", content: text, IconComponent: RetryIcon.RetryIcon };
    const open = tmp(4531).open;
    ToastActionCreatorsDefault;
    open(obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
