// Module ID: 12473
// Function ID: 12474
// Name: InAppReportsDeleteMessageElement
// Dependencies: [32, 19, 5056, 1074, 21, 504, 5016, 6876, 12468, 1115, 4790, 2]
// Exports: default

// Module 12473 (InAppReportsDeleteMessageElement)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6876 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 5056 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsDeleteMessageElement.tsx");

export default function DeleteMessageElement(message) {
  let closure_2;
  message = message.message;
  const reportId = message.reportId;
  let stateFromStores;
  const tmp = stateFromStores(react.useState(false), 2);
  dependencyMap = tmp[1];
  const first = tmp[0];
  let obj = message(504);
  const items = [MessageStore];
  const items1 = [message];
  stateFromStores = obj.useStateFromStores(items, () => null == MessageStore.getMessage(message.getChannelId(), message.id), items1);
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    closure_2(stateFromStores);
  }, items2);
  const items3 = [message, reportId];
  const callback = react.useCallback(() => {
    closure_2(true);
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { report_id: reportId };
    obj.trackWithMetadata(AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, obj2);
    const obj3 = MessageActionCreatorsDefault;
    obj3.deleteMessage(message.getChannelId(), message.id);
  }, items3);
  reportId(12468);
  const intl = message(1115).intl;
  const intl2 = message(1115).intl;
  const intl3 = message(1115).intl;
  return <tmp6 title={intl.string(message(1115).t.c9BHL9)} disabledTitle={intl2.string(message(1115).t.AT2KSd)} description={intl3.string(message(1115).t.dK8S0w)} disabled={first} variant="danger" onPress={callback} icon={null} />;
};
