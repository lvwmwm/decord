// Module ID: 9424
// Function ID: 73403
// Name: useTrackOpenPopout
// Dependencies: [31, 1348, 1906, 1852, 653, 4324, 4559, 9363, 675, 2]
// Exports: useTrackOpenPopout

// Module 9424 (useTrackOpenPopout)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { EmojiInteractionPoint } from "set";
import { AnalyticEvents } from "ME";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export const useTrackOpenPopout = (emojiId) => {
  let currentGuildId;
  let dependencyMap;
  let importDefault;
  let require;
  ({ currentGuildId, popoutData: require, nonce: importDefault, demoMode: dependencyMap } = emojiId);
  let merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(channel.getChannel(channelId.getChannelId(currentGuildId))));
  current = current.useRef({ guild_id: currentGuildId, emoji_id: emojiId.emojiId }).current;
  importDefault(4559)(() => {
    let obj = outer1_0(outer1_2[7]);
    const result = obj.initiateEmojiInteraction(outer1_6.TrackOpenPopoutUsed);
    if (!closure_2) {
      obj = {};
      let analyticsType;
      if (null != analyticsType) {
        analyticsType = analyticsType.analyticsType;
      }
      let str = "Standard Emoji Popout";
      if (null != analyticsType) {
        str = analyticsType;
      }
      obj.type = str;
      obj.nonce = closure_1;
      const merged = Object.assign(current);
      outer1_1(outer1_2[8]).track(outer1_7.OPEN_POPOUT, obj);
      const obj2 = outer1_1(outer1_2[8]);
    }
  });
  return current;
};
