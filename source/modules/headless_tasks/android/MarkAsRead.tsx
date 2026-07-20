// Module ID: 16484
// Function ID: 127344
// Name: promise
// Dependencies: []

// Module 16484 (promise)
const _module = require(dependencyMap[0]);
({ AnalyticsObjectTypes: closure_2, AnalyticsObjects: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/headless_tasks/android/MarkAsRead.tsx");

export default (arg0) => {
  const require = arg0;
  return new Promise((self) => {
    let obj = self(closure_1[1]);
    obj = { object: constants2.MARK_CHANNEL_AS_READ_FROM_NOTIFICATION, objectType: constants.ACK_MANUAL };
    obj.ack(self.channelId, obj, true, true, self.messageId);
    self(true);
  });
};
