// Module ID: 13239
// Function ID: 13240
// Name: InAppReportsDeleteMessageElement
// Dependencies: [32, 19, 5008, 1074, 21, 504, 4968, 7730, 13234, 1115, 4745, 2]
// Exports: default

// Module 13239 (InAppReportsDeleteMessageElement)
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4968 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7730 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MessageStore from "MessageStore" /* 5008 */;

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsDeleteMessageElement.tsx");

export default function DeleteMessageElement(message) {
  message = message.message;
  const reportId = message.reportId;
  let stateFromStores;
  const tmp = stateFromStores(noop.useState(false), 2);
  dependencyMap = tmp[1];
  const items = [MessageStore];
  const items1 = [message];
  stateFromStores = message(504).useStateFromStores(items, () => null == MessageStore.getMessage(message.getChannelId(), message.id), items1);
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    closure_2(stateFromStores);
  }, items2);
  const items3 = [message, reportId];
  const callback = noop.useCallback(() => {
    closure_2(true);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: reportId });
    const obj2 = { report_id: reportId };
    MessageActionCreatorsDefault.deleteMessage(message.getChannelId(), message.id);
  }, items3);
  let obj2 = { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null };
  let obj = message(504);
  const intl = message(1115).intl;
  obj2.title = intl.string(message(1115).t.c9BHL9);
  const intl2 = message(1115).intl;
  obj2.disabledTitle = intl2.string(message(1115).t.AT2KSd);
  const intl3 = message(1115).intl;
  obj2.description = intl3.string(message(1115).t.dK8S0w);
  obj2.disabled = tmp[0];
  obj2.onPress = callback;
  obj2.icon = jsx(message(4745).TrashIcon, { color: "text-feedback-critical" });
  return jsx(reportId(13234), { title: null, disabledTitle: null, description: null, disabled: null, variant: "danger", onPress: null, icon: null });
};
