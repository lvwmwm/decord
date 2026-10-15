// Module ID: 9763
// Function ID: 9764
// Name: useTrackOpenPopout
// Dependencies: [19, 2065, 2116, 1393, 1085, 5166, 5456, 9648, 1265, 2]
// Exports: useTrackOpenPopout

// Module 9763 (useTrackOpenPopout)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import EmojiConstants from "EmojiConstants" /* 1393 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5166 */;
import useMountEffectDefault from "useMountEffect" /* 5456 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9648 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
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
