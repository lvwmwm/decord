// Module ID: 16514
// Function ID: 127512
// Name: promise
// Dependencies: []

// Module 16514 (promise)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  const importDefault = channelId.channelId;
  return new Promise((arg0) => {
    const channelId = arg0;
    channelId(closure_1[1]).awaitStorage(() => {
      const invite = arg0(closure_1[2]).createInvite(arg0, {}, "Mobile Voice Overlay");
      invite.then((code) => {
        const RNCClipboard = RNCClipboard.RNCClipboard;
        RNCClipboard.setString(callback(closure_1[3])(code.code));
        callback(true);
      });
    });
  });
};
