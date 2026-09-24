// Module ID: 10544
// Function ID: 10545
// Name: useTrackOpenPopout
// Dependencies: [19, 2045, 2099, 1379, 1078, 4970, 5235, 10476, 1245, 2]
// Exports: useTrackOpenPopout

// Module 10544 (useTrackOpenPopout)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4970 */;
import useMountEffectDefault from "useMountEffect" /* 5235 */;
import emojis_EmojiActionCreators from "emojis/EmojiActionCreators" /* 10476 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;

require = fn;
const EmojiInteractionPoint = fn(1379).EmojiInteractionPoint;
const AnalyticEvents = fn(1078).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/useTrackOpenPopout.tsx");

export const useTrackOpenPopout = (emojiId) => {
  ({ currentGuildId, popoutData: require, nonce: importDefault, demoMode: dependencyMap } = emojiId);
  let current;
  let merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(SelectedChannelStore.getChannelId(currentGuildId))));
  current = current.useRef({ guild_id: currentGuildId, emoji_id: emojiId.emojiId }).current;
  useMountEffectDefault(() => {
    const result = emojis_EmojiActionCreators.initiateEmojiInteraction(EmojiInteractionPoint.TrackOpenPopoutUsed);
    if (!dependencyMap) {
      let str;
      if (analyticsType != null) {
        str = analyticsType.analyticsType;
      }
      if (str == null) {
        str = "Standard Emoji Popout";
      }
      const obj3 = { type: str, nonce };
      const merged = Object.assign(current);
      AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj3);
    }
  });
  return current;
};
