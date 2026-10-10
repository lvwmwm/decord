// Module ID: 13348
// Function ID: 13349
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [13349, 4809, 12620, 4808, 2]
// Exports: default

// Module 13348 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4808 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import RetryIcon from "RetryIcon" /* 12620 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 13349 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(4809).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
