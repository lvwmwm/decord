// Module ID: 11274
// Function ID: 11275
// Dependencies: [11194, 11173]
// Exports: captureFeedback

// Module 11274
import _mod11173 from "module_11173" /* 11173 */;
import _mod11194 from "module_11194" /* 11194 */;


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
    const obj3 = _mod11194;
    currentScope = obj3.getCurrentScope();
  }
  const obj2 = { contexts: obj4, type: "feedback", level: "info", tags };
  obj4 = { feedback: obj6.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj6 = _mod11173;
  let client = currentScope && currentScope.getClient();
  if (!client) {
    const tmp3Result = _mod11194;
    client = tmp3Result.getClient();
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
};
