// Module ID: 11322
// Function ID: 11323
// Name: useTrackOpenPopout
// Dependencies: [19, 4762, 4816, 1389, 1071, 5650, 5474, 9064, 1255, 2]
// Exports: useTrackOpenPopout

// Module 11322 (useTrackOpenPopout)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import EmojiConstants from "EmojiConstants" /* 1389 */;
import useMountEffectDefault from "useMountEffect" /* 5474 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5650 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9064 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import size from "module_2" /* 2 */;

const EmojiInteractionPoint = EmojiConstants.EmojiInteractionPoint;
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export const useTrackOpenPopout = (emojiId) => {
  let analyticsType;
  let currentGuildId;
  let nonce;
  ({ currentGuildId, popoutData: require, nonce: importDefault, demoMode: dependencyMap } = emojiId);
  let current;
  let obj = { guild_id: currentGuildId, emoji_id: emojiId.emojiId };
  const useRef = current.useRef;
  let obj2 = AppAnalyticsUtils;
  let merged = Object.assign(obj2.collectChannelAnalyticsMetadata(ChannelStore.getChannel(SelectedChannelStore.getChannelId(currentGuildId))));
  current = useRef(obj).current;
  useMountEffectDefault(() => {
    const obj = emojis_EmojiActionCreators;
    const result = obj.initiateEmojiInteraction(EmojiInteractionPoint.TrackOpenPopoutUsed);
    const tmp3 = dependencyMap;
    if (!tmp3) {
      let str;
      const track = AnalyticsUtilsDefault.track;
      const OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
      AnalyticsUtilsDefault;
      if (require != null) {
        str = require.analyticsType;
      }
      if (str == null) {
        str = "Standard Emoji Popout";
      }
      const obj2 = { type: str, nonce: importDefault };
      const merged = Object.assign(current);
      track(OPEN_POPOUT, obj2);
    }
  });
  return current;
};
