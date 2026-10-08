// Module ID: 13205
// Function ID: 13206
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [13206, 4766, 12633, 4765, 2]
// Exports: default

// Module 13205 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4765 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import RetryIcon from "RetryIcon" /* 12633 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 13206 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { key: "APPLICATION_WIDGET_REFRESH", content: text, IconComponent: RetryIcon.RetryIcon };
    const open = tmp(4766).open;
    ToastActionCreatorsDefault;
    open(obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
