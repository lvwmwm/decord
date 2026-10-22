// Module ID: 9917
// Function ID: 9918
// Name: useTrackOpenPopout
// Dependencies: [19, 4821, 4872, 1395, 1087, 5697, 5249, 9803, 1267, 2]
// Exports: useTrackOpenPopout

// Module 9917 (useTrackOpenPopout)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import EmojiConstants from "EmojiConstants" /* 1395 */;
import useMountEffectDefault from "useMountEffect" /* 5249 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5697 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 9803 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
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
