// Module ID: 14872
// Function ID: 14873
// Name: RequestToStreamActionCreators
// Dependencies: [14873, 572, 2]
// Exports: dismissStreamRequestReminder, startStreamRequestCooldown

// Module 14872 (RequestToStreamActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import RequestToStreamConstants from "RequestToStreamConstants" /* 14873 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_2 = RequestToStreamConstants.REQUEST_TO_STREAM_COOLDOWN_MS;
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamActionCreators.tsx");

export function startStreamRequestCooldown(userId) {
  importDefault = userId;
  let obj = DispatcherDefault;
  let obj2 = { type: "STREAM_REQUEST_COOLDOWN_START", userId };
  obj.dispatch(obj2);
  const timerId = setTimeout(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "STREAM_REQUEST_COOLDOWN_END", userId };
    obj.dispatch(obj2);
  }, closure_2);
}
export function dismissStreamRequestReminder(messageId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "STREAM_REQUEST_REMINDER_DISMISS", messageId };
  obj.dispatch(obj2);
}
