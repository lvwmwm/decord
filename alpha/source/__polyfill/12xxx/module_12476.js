// Module ID: 12476
// Function ID: 12477
// Dependencies: [12396, 12375]
// Exports: captureFeedback

// Module 12476
import _mod12375 from "module_12375" /* 12375 */;
import _mod12396 from "module_12396" /* 12396 */;


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
    const obj3 = _mod12396;
    currentScope = obj3.getCurrentScope();
  }
  const obj2 = { contexts: obj4, type: "feedback", level: "info", tags };
  obj4 = { feedback: obj6.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj6 = _mod12375;
  let client = currentScope && currentScope.getClient();
  if (!client) {
    const tmp3Result = _mod12396;
    client = tmp3Result.getClient();
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
};
