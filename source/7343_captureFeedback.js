// Module ID: 7343
// Function ID: 59254
// Name: captureFeedback
// Dependencies: [7263, 7242]

// Module 7343 (captureFeedback)
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
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    if (arguments.length > 2) {
      if (undefined !== arguments[2]) {
        let currentScope = arguments[2];
      }
      obj = { contexts: null, type: "feedback", level: "info" };
      obj = {};
      ({ message, name, email, url, source, associatedEventId, tags } = arg0);
      let obj1 = { contact_email: email, name, message, url, source, associated_event_id: associatedEventId };
      obj.feedback = require(7242) /* addNonEnumerableProperty */.dropUndefinedKeys(obj1);
      obj.contexts = obj;
      obj.tags = tags;
      let client = currentScope;
      if (currentScope) {
        client = currentScope.getClient();
      }
      if (!client) {
        client = require(7263) /* getCurrentScope */.getClient();
        const obj9 = require(7263) /* getCurrentScope */;
      }
      if (client) {
        client.emit("beforeSendFeedback", obj, obj);
      }
      return currentScope.captureEvent(obj, obj);
    }
    obj1 = require(7263) /* getCurrentScope */;
    currentScope = obj1.getCurrentScope();
  }
  obj = {};
};
