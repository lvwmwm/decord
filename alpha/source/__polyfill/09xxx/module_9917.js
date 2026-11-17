// Module ID: 9917
// Function ID: 9918
// Dependencies: [9837, 9816]
// Exports: captureFeedback

// Module 9917
import _mod9816 from "module_9816" /* 9816 */;
import _mod9837 from "module_9837" /* 9837 */;


export function captureFeedback(arg0) {
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
    const obj3 = _mod9837;
    currentScope = obj3.getCurrentScope();
  }
  const obj2 = { contexts: obj4, type: "feedback", level: "info", tags };
  obj4 = { feedback: obj6.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj6 = _mod9816;
  let client = currentScope && currentScope.getClient();
  if (!client) {
    const tmp3Result = _mod9837;
    client = tmp3Result.getClient();
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
}
