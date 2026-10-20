// Module ID: 11317
// Function ID: 11318
// Dependencies: [11237, 11216]
// Exports: captureFeedback

// Module 11317
import _mod11216 from "module_11216" /* 11216 */;
import _mod11237 from "module_11237" /* 11237 */;


export const captureFeedback = function captureFeedback(arg0) {
  let associatedEventId;
  let email;
  let message;
  let name;
  let obj4;
  let obj6;
  let source;
  let tags;
  let url;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    const obj3 = _mod11237;
    currentScope = obj3.getCurrentScope();
  }
  const obj2 = { contexts: obj4, type: "feedback", level: "info", tags };
  obj4 = { feedback: obj6.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj6 = _mod11216;
  let client = currentScope && currentScope.getClient();
  if (!client) {
    const tmp3Result = _mod11237;
    client = tmp3Result.getClient();
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
};
