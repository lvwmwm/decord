// Module ID: 13191
// Function ID: 13192
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [13192, 4454, 10437, 4453, 2]
// Exports: default

// Module 13191 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4453 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import RetryIcon from "RetryIcon" /* 10437 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 13192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { key: "APPLICATION_WIDGET_REFRESH", content: text, IconComponent: RetryIcon.RetryIcon };
    ToastActionCreatorsDefault.open(obj2);
    const tmpResult = ToastActionCreatorsDefault;
  } else {
    ToastUtils.presentError(text);
  }
};
