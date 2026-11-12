// Module ID: 12234
// Function ID: 12235
// Name: useIsPinotChannelLabelVisible
// Dependencies: [12235, 8103, 2]
// Exports: useIsPinotChannelLabelVisible

// Module 12234 (useIsPinotChannelLabelVisible)
import PinotExperiment from "PinotExperiment" /* 8103 */;
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable" /* 12235 */;
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
