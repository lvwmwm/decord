// Module ID: 7337
// Function ID: 59168
// Name: captureFeedback
// Dependencies: []

// Module 7337 (captureFeedback)
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
      obj = { "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008817691602546455, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001455652143458673, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010097896816362654 };
      obj = {};
      ({ message, name, email, url, source, associatedEventId, tags } = arg0);
      let obj1 = { contact_email: email, name, message, url, source, associated_event_id: associatedEventId };
      obj.feedback = arg1(arg6[1]).dropUndefinedKeys(obj1);
      obj.contexts = obj;
      obj.tags = tags;
      let client = currentScope;
      if (currentScope) {
        client = currentScope.getClient();
      }
      if (!client) {
        client = arg1(arg6[0]).getClient();
        const obj9 = arg1(arg6[0]);
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
