// Module ID: 925
// Function ID: 10084
// Name: captureFeedback
// Dependencies: []

// Module 925 (captureFeedback)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.captureFeedback = function captureFeedback(tags) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    if (arguments.length > 2) {
      if (undefined !== arguments[2]) {
        let currentScope = arguments[2];
      }
      obj = {};
      obj = {};
      let obj1 = {};
      ({ email: obj6.contact_email, name: obj6.name, message: obj6.message, url: obj6.url, source: obj6.source, associatedEventId: obj6.associated_event_id } = tags);
      obj.feedback = obj1;
      obj.contexts = obj;
      obj.tags = tags.tags;
      let client;
      if (null != currentScope) {
        client = currentScope.getClient();
      }
      if (!client) {
        client = arg1(arg6[0]).getClient();
        const obj7 = arg1(arg6[0]);
      }
      if (client) {
        client.emit("beforeSendFeedback", obj, obj);
      }
      return currentScope.captureEvent(obj, obj);
    }
    obj1 = arg1(arg6[0]);
    currentScope = obj1.getCurrentScope();
  }
  obj = {};
};
