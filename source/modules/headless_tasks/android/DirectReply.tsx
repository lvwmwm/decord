// Module ID: 16504
// Function ID: 127458
// Name: promise
// Dependencies: []

// Module 16504 (promise)
let closure_2 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
const MessageSendLocation = arg1(dependencyMap[2]).MessageSendLocation;
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("DirectReply");
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/headless_tasks/android/DirectReply.tsx");

export default (arg0) => {
  const importDefault = arg0;
  return new Promise((arg0) => {
    closure_5.log("Executing DirectReply");
    const PushNotificationAndroid = obj.PushNotificationAndroid;
    const result = PushNotificationAndroid.markNotificationAsDirectReply(arg0.channelId);
    const obj = arg0(closure_1[4]);
    obj.awaitStorage(() => {
      function _sendMessage() {
        // CreateGeneratorClosureLongIndex (0x67)
        const obj = callback(tmp);
        const _sendMessage = obj;
        return obj(...arguments);
      }
      closure_5.log("Storage loaded");
      function sendMessage(_sendMessage) {
        return _sendMessage(...arguments);
      }(_sendMessage);
    });
  });
};
