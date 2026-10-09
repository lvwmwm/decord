// Module ID: 13298
// Function ID: 13299
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [13299, 4768, 12573, 4767, 2]
// Exports: default

// Module 13298 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4767 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import RetryIcon from "RetryIcon" /* 12573 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 13299 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { key: "APPLICATION_WIDGET_REFRESH", content: text, IconComponent: RetryIcon.RetryIcon };
    const open = tmp(4768).open;
    ToastActionCreatorsDefault;
    open(obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
