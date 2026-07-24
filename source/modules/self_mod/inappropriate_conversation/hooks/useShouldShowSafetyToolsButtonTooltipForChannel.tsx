// Module ID: 10160
// Function ID: 78583
// Name: useSafetyToolsButtonTooltipForChannel
// Dependencies: [9139, 664, 10136, 10140, 10161, 10162, 2]
// Exports: useSafetyToolsButtonTooltipForChannel

// Module 10160 (useSafetyToolsButtonTooltipForChannel)
import { SafetyWarningTypes } from "_isNativeReflectConstruct";

const HOUR = require("set").Millis.HOUR;
let closure_4 = 12 * require("set").Millis.HOUR;
const result = require("useInappropriateConversationSafetyToolsWarningForChannel").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx");

export const useSafetyToolsButtonTooltipForChannel = function useSafetyToolsButtonTooltipForChannel(channelId) {
  const inappropriateConversationSafetyToolsWarningForChannel = require(10136) /* useInappropriateConversationSafetyToolsWarningForChannel */.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = require(10136) /* useInappropriateConversationSafetyToolsWarningForChannel */;
  const inappropriateConversationWarningsForChannel = require(10140) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
  const obj2 = require(10140) /* useInappropriateConversationWarningsForChannel */;
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    if (!obj3.useShouldShowInitialSafetyToolsButtonTooltip(channelId)) {
      if (!obj4.shouldShowTakeoverForWarnings(inappropriateConversationWarningsForChannel)) {
        const someResult = inappropriateConversationWarningsForChannel.some((type) => type.type === outer1_2.INAPPROPRIATE_CONVERSATION_TIER_1);
        const found = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp);
        const sorted = found.sort((dismiss_timestamp, dismiss_timestamp2) => {
          let num = 1;
          if (dismiss_timestamp2.dismiss_timestamp < dismiss_timestamp.dismiss_timestamp) {
            num = -1;
          }
          return num;
        });
        if (sorted.length >= 1) {
          const dismiss_timestamp = sorted[0].dismiss_timestamp;
          let flag = someResult;
          if (someResult === undefined) {
            flag = false;
          }
          if (null == dismiss_timestamp) {
            {
              const found1 = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null == dismiss_timestamp.dismiss_timestamp);
              let findLastResult = found1.findLast((type) => type.type === outer1_2.INAPPROPRIATE_CONVERSATION_TIER_1);
              if (null == findLastResult) {
                findLastResult = found1.findLast((type) => type.type === outer1_2.INAPPROPRIATE_CONVERSATION_TIER_2);
              }
              return findLastResult;
            }
          } else {
            let time1 = globalThis;
            const _Date = Date;
            const date = new Date(dismiss_timestamp);
            let time = date.getTime();
            let _Date2 = time1.Date;
            const prototype2 = _Date2.prototype;
            const sum = time + (flag ? HOUR : closure_4);
            _Date2 = new _Date2();
            time = _Date2;
            time1 = _Date2.getTime();
          }
        }
      }
      obj4 = require(10162) /* shouldShowTakeoverForWarnings */;
    }
  }
};
