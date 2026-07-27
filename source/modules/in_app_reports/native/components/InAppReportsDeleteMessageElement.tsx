// Module ID: 12343
// Function ID: 96039
// Name: DeleteMessageElement
// Dependencies: [57, 31, 4350, 653, 33, 566, 4325, 5685, 12339, 1212, 4090, 2]
// Exports: default

// Module 12343 (DeleteMessageElement)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsDeleteMessageElement.tsx");

export default function DeleteMessageElement(message) {
  message = message.message;
  const reportId = message.reportId;
  const tmp = stateFromStores(React.useState(false), 2);
  const dependencyMap = tmp[1];
  let obj = message(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [message];
  stateFromStores = obj.useStateFromStores(items, () => null == outer1_5.getMessage(message.getChannelId(), message.id), items1);
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    dependencyMap(stateFromStores);
  }, items2);
  const items3 = [message, reportId];
  const callback = React.useCallback(() => {
    dependencyMap(true);
    let obj = reportId(4325);
    obj = { report_id: reportId };
    obj.trackWithMetadata(outer1_6.IAR_DELETE_MESSAGE_BUTTON_CLICKED, obj);
    reportId(5685).deleteMessage(message.getChannelId(), message.id);
  }, items3);
  obj = {};
  const intl = message(1212).intl;
  obj.title = intl.string(message(1212).t.c9BHL9);
  const intl2 = message(1212).intl;
  obj.disabledTitle = intl2.string(message(1212).t.AT2KSd);
  const intl3 = message(1212).intl;
  obj.description = intl3.string(message(1212).t.dK8S0w);
  obj.disabled = tmp[0];
  obj.variant = "danger";
  obj.onPress = callback;
  obj.icon = jsx(message(4090).TrashIcon, { color: "text-feedback-critical" });
  return jsx(reportId(12339), {});
};
