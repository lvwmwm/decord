// Module ID: 9381
// Function ID: 73153
// Name: useTrackOpenPopout
// Dependencies: []
// Exports: useTrackOpenPopout

// Module 9381 (useTrackOpenPopout)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const EmojiInteractionPoint = arg1(dependencyMap[3]).EmojiInteractionPoint;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export const useTrackOpenPopout = (emojiId) => {
  let currentGuildId;
  ({ currentGuildId, popoutData: closure_0, nonce: closure_1, demoMode: closure_2 } = emojiId);
  const merged = Object.assign(arg1(dependencyMap[5]).collectChannelAnalyticsMetadata(channel.getChannel(channelId.getChannelId(currentGuildId))));
  const current = React.useRef({ guild_id: currentGuildId, emoji_id: emojiId.emojiId }).current;
  const React = current;
  importDefault(dependencyMap[6])(() => {
    let obj = lib(closure_2[7]);
    const result = obj.initiateEmojiInteraction(TrackOpenPopoutUsed.TrackOpenPopoutUsed);
    if (!closure_2) {
      obj = {};
      let analyticsType;
      if (null != lib) {
        analyticsType = lib.analyticsType;
      }
      let str = "Standard Emoji Popout";
      if (null != analyticsType) {
        str = analyticsType;
      }
      obj.type = str;
      obj.nonce = callback;
      const merged = Object.assign(current);
      callback(closure_2[8]).track(constants.OPEN_POPOUT, obj);
      const obj2 = callback(closure_2[8]);
    }
  });
  return current;
};
