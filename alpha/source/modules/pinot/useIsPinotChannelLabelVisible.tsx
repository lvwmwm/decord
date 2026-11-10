// Module ID: 11469
// Function ID: 11470
// Name: useIsPinotChannelLabelVisible
// Dependencies: [11470, 9141, 2]
// Exports: useIsPinotChannelLabelVisible

// Module 11469 (useIsPinotChannelLabelVisible)
import PinotExperiment from "PinotExperiment" /* 9141 */;
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable" /* 11470 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/useIsPinotChannelLabelVisible.tsx");

export function useIsPinotChannelLabelVisible(channel, mobile_channel_details_label) {
  const obj = useIsChannelPinotPromotable;
  const pinotPromotableChannelId = obj.usePinotPromotableChannelId(channel, mobile_channel_details_label);
  let tmp3 = null;
  const useIsPinotMemberNoticeEnabled = PinotExperiment.useIsPinotMemberNoticeEnabled;
  PinotExperiment;
  if (null != pinotPromotableChannelId) {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp3 = guild_id;
  }
  const tmp5 = null != pinotPromotableChannelId && useIsPinotMemberNoticeEnabled(tmp3, mobile_channel_details_label);
  return tmp5;
}
