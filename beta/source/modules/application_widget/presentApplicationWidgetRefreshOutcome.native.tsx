// Module ID: 13226
// Function ID: 13227
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [13227, 4490, 11896, 4489, 2]
// Exports: default

// Module 13226 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4489 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import RetryIcon from "RetryIcon" /* 11896 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 13227 */;
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
