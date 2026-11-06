// Module ID: 11457
// Function ID: 11458
// Name: useShouldShowSafetyToolsButtonTooltipForChannel
// Dependencies: [10940, 1089, 11458, 11419, 11459, 11460, 2]
// Exports: useSafetyToolsButtonTooltipForChannel

// Module 11457 (useShouldShowSafetyToolsButtonTooltipForChannel)
import DurationsDefault from "Durations" /* 1089 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10940 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11419 */;
import useInappropriateConversationSafetyToolsWarningForChannel from "useInappropriateConversationSafetyToolsWarningForChannel" /* 11458 */;
import useShouldShowInitialSafetyToolsButtonTooltip from "useShouldShowInitialSafetyToolsButtonTooltip" /* 11459 */;
import size from "module_2" /* 2 */;

let tmp;
const InappropriateConversationUtils = tmp(11460);
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const HOUR = DurationsDefault.Millis.HOUR;
let closure_4 = 12 * DurationsDefault.Millis.HOUR;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx");

export function useSafetyToolsButtonTooltipForChannel(channelId) {
  const obj = useInappropriateConversationSafetyToolsWarningForChannel;
  const inappropriateConversationSafetyToolsWarningForChannel = obj.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj2 = useInappropriateConversationWarningsForChannel;
  const inappropriateConversationWarningsForChannel = obj2.useInappropriateConversationWarningsForChannel(channelId);
  const obj3 = useShouldShowInitialSafetyToolsButtonTooltip;
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    if (!obj3.useShouldShowInitialSafetyToolsButtonTooltip(channelId)) {
      const tmpResult = InappropriateConversationUtils;
      if (!tmpResult.shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel)) {
        const someResult = inappropriateConversationWarningsForChannel.some((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
        const found = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp);
        const sorted = found.sort((dismiss_timestamp, dismiss_timestamp2) => {
          let num = 1;
          if (dismiss_timestamp2.dismiss_timestamp < dismiss_timestamp.dismiss_timestamp) {
            num = -1;
          }
          return num;
        });
        let num = 1;
        if (sorted.length >= 1) {
          const dismiss_timestamp = sorted[0].dismiss_timestamp;
          let flag = someResult;
          if (someResult === undefined) {
            flag = false;
          }
          let flag2 = true;
          if (null != dismiss_timestamp) {
            const _Date = Date;
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const date = new Date(dismiss_timestamp);
            const sum = date.getTime() + (flag ? HOUR : closure_4);
            const date1 = new Date();
            flag2 = date1.getTime() >= sum;
          }
          if (flag2) {
            const found1 = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
            let findLastResult = found1.findLast((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
            if (findLastResult == null) {
              findLastResult = found1.findLast((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
            }
            return findLastResult;
          }
        }
      }
    }
  }
}
