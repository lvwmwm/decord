// Module ID: 12225
// Function ID: 93834
// Name: DeleteMessageElement
// Dependencies: []
// Exports: default

// Module 12225 (DeleteMessageElement)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsDeleteMessageElement.tsx");

export default function DeleteMessageElement(message) {
  message = message.message;
  const arg1 = message;
  const reportId = message.reportId;
  const importDefault = reportId;
  const tmp = callback(React.useState(false), 2);
  let closure_2 = tmp[1];
  let obj = arg1(closure_2[5]);
  const items = [closure_5];
  const items1 = [message];
  const stateFromStores = obj.useStateFromStores(items, () => null == message.getMessage(message.getChannelId(), message.id), items1);
  let callback = stateFromStores;
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    callback(stateFromStores);
  }, items2);
  const items3 = [message, reportId];
  callback = React.useCallback(() => {
    callback(true);
    let obj = reportId(callback[6]);
    obj = { report_id: reportId };
    obj.trackWithMetadata(constants.IAR_DELETE_MESSAGE_BUTTON_CLICKED, obj);
    reportId(callback[7]).deleteMessage(message.getChannelId(), message.id);
  }, items3);
  obj = {};
  const intl = arg1(closure_2[9]).intl;
  obj.title = intl.string(arg1(closure_2[9]).t.c9BHL9);
  const intl2 = arg1(closure_2[9]).intl;
  obj.disabledTitle = intl2.string(arg1(closure_2[9]).t.AT2KSd);
  const intl3 = arg1(closure_2[9]).intl;
  obj.description = intl3.string(arg1(closure_2[9]).t.dK8S0w);
  obj.disabled = tmp[0];
  obj.variant = "danger";
  obj.onPress = callback;
  obj.icon = jsx(arg1(closure_2[10]).TrashIcon, { color: "text-feedback-critical" });
  return jsx(importDefault(closure_2[8]), obj);
};
