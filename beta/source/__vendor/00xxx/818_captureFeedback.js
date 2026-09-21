// Module ID: 818
// Function ID: 819
// Name: captureFeedback
// Dependencies: [717]
// Exports: captureFeedback

// Module 818 (captureFeedback)
import _mod717 from "module_717" /* 717 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const captureFeedback = function captureFeedback(contact_email) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = _mod717.getCurrentScope();
  }
  const obj2 = { contexts: { feedback: { contact_email: contact_email.email, name: contact_email.name, message: contact_email.message, url: contact_email.url, source: contact_email.source, associated_event_id: contact_email.associatedEventId } }, type: "feedback", level: "info", tags: contact_email.tags };
  let client;
  if (currentScope != null) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = _mod717.getClient();
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
};
