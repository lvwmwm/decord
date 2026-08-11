// Module ID: 7563
// Function ID: 7564
// Name: captureFeedback
// Dependencies: [7483, 7462]

// Module 7563 (captureFeedback)
const require = arg1;
const dependencyMap = arg6;
arg5.captureFeedback = function captureFeedback(arg0) {
  let associatedEventId;
  let email;
  let message;
  let name;
  let source;
  let tags;
  let url;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = require(7483) /* getClient */.getCurrentScope();
    const obj3 = require(7483) /* getClient */;
  }
  obj = { contexts: null, type: "feedback", level: "info", tags: null };
  obj = { feedback: null };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj[0] = require(7462) /* addNonEnumerableProperty */.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId });
  obj[0] = obj;
  obj[3] = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = require(7483) /* getClient */.getClient();
    const tmp3Result = require(7483) /* getClient */;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj, obj);
  }
  return currentScope.captureEvent(obj, obj);
};
