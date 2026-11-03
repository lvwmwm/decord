// Module ID: 13297
// Function ID: 13298
// Dependencies: [13217, 13196]
// Exports: captureFeedback

// Module 13297
import _mod13196 from "module_13196" /* 13196 */;
import _mod13217 from "module_13217" /* 13217 */;


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
    const obj3 = _mod13217;
    currentScope = obj3.getCurrentScope();
  }
  const obj2 = { contexts: obj4, type: "feedback", level: "info", tags };
  obj4 = { feedback: obj6.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj6 = _mod13196;
  let client = currentScope && currentScope.getClient();
  if (!client) {
    const tmp3Result = _mod13217;
    client = tmp3Result.getClient();
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
}
