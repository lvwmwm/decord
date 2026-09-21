// Module ID: 13190
// Function ID: 13191
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [13191, 4458, 11860, 4457, 2]
// Exports: default

// Module 13190 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 4457 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import RetryIcon from "RetryIcon" /* 11860 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 13191 */;
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
