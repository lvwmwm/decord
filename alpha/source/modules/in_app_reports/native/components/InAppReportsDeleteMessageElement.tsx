// Module ID: 15128
// Function ID: 15129
// Name: InAppReportsDeleteMessageElement
// Dependencies: [32, 19, 6056, 1072, 21, 504, 5755, 7629, 15124, 1114, 5733, 2]
// Exports: default

// Module 15128 (InAppReportsDeleteMessageElement)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7629 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 6056 */;
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
  reportId(15124);
  const intl = message(1114).intl;
  const intl2 = message(1114).intl;
  const intl3 = message(1114).intl;
  return <tmp6 title={intl.string(message(1114).t.c9BHL9)} disabledTitle={intl2.string(message(1114).t.AT2KSd)} description={intl3.string(message(1114).t.dK8S0w)} disabled={first} variant="danger" onPress={callback} icon={null} />;
};
