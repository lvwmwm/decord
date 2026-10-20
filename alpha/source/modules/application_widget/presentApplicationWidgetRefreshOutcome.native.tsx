// Module ID: 11873
// Function ID: 11874
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11874, 5625, 11666, 5624, 2]
// Exports: default

// Module 11873 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5624 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5625 */;
import RetryIcon from "RetryIcon" /* 11666 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11874 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5625).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
