// Module ID: 16503
// Function ID: 127454
// Name: promise
// Dependencies: []

// Module 16503 (promise)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  const require = arg0;
  return new Promise((arg0) => {
    callback(closure_2[1]).awaitStorage((self) => {
      if (self.isFullscreenCallUI) {
        let obj = callback(closure_2[2]);
        obj = { action_type: "decline" };
        const merged = Object.assign(self(closure_2[3]).collectChannelAnalyticsMetadataFromId(self.channelId));
        obj.track(constants.CALLKIT_CLICKED, obj);
        const obj3 = self(closure_2[3]);
      }
      obj = { location: callback(closure_2[4]).PUSH_NOTIFICATION, guild_id: self.guildId, ringer_user_id: self.userId };
      const obj4 = callback(closure_2[2]);
      const merged1 = Object.assign(self(closure_2[3]).collectChannelAnalyticsMetadataFromId(self.channelId));
      obj4.track(constants.RING_CALL_DECLINED, obj);
      const obj6 = self(closure_2[3]);
      callback(closure_2[5]).stopRinging(self.channelId);
      self(true);
    });
  });
};
