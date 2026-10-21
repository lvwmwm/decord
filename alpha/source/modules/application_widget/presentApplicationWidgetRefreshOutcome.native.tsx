// Module ID: 11921
// Function ID: 11922
// Name: presentApplicationWidgetRefreshOutcome
// Dependencies: [11922, 5645, 11714, 5644, 2]
// Exports: default

// Module 11921 (presentApplicationWidgetRefreshOutcome)
import ToastUtils from "ToastUtils" /* 5644 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5645 */;
import RetryIcon from "RetryIcon" /* 11714 */;
import applicationWidgetRefreshOutcomeDefault from "applicationWidgetRefreshOutcome" /* 11922 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/presentApplicationWidgetRefreshOutcome.native.tsx");

export default function presentApplicationWidgetRefreshOutcome(arg0) {
  const tmp3 = applicationWidgetRefreshOutcomeDefault(arg0);
  const text = tmp3.text;
  if (tmp3.ok) {
    const obj2 = { text, icon: RetryIcon.RetryIcon };
    const open = tmp(5645).open;
    ToastActionCreatorsDefault;
    open("APPLICATION_WIDGET_REFRESH", obj2);
  } else {
    const obj = ToastUtils;
    obj.presentError(text);
  }
};
