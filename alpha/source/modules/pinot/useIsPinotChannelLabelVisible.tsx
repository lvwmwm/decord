// Module ID: 11068
// Function ID: 11069
// Name: useIsPinotChannelLabelVisible
// Dependencies: [558, 11069, 11070, 2]

// Module 11068 (useIsPinotChannelLabelVisible)
import useIsChannelPinotPromotable from "useIsChannelPinotPromotable" /* 11069 */;
import PinotExperiment from "PinotExperiment" /* 11070 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotChannelLabelVisible(guild_id, arg1) {
  const obj = useIsChannelPinotPromotable;
  const pinotPromotableChannelId = obj.usePinotPromotableChannelId(guild_id, arg1);
  let tmp3 = null;
  const useIsPinotMemberNoticeEnabled = PinotExperiment.useIsPinotMemberNoticeEnabled;
  PinotExperiment;
  if (null != pinotPromotableChannelId) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    tmp3 = guild_id;
  }
  const tmp5 = null != pinotPromotableChannelId && useIsPinotMemberNoticeEnabled(tmp3, arg1);
  return tmp5;
}) : (function useIsPinotChannelLabelVisible(guild_id, arg1) {
  const obj = useIsChannelPinotPromotable;
  const pinotPromotableChannelId = obj.usePinotPromotableChannelId(guild_id, arg1);
  let tmp3 = null;
  const useIsPinotMemberNoticeEnabled = PinotExperiment.useIsPinotMemberNoticeEnabled;
  PinotExperiment;
  if (null != pinotPromotableChannelId) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    tmp3 = guild_id;
  }
  const tmp5 = null != pinotPromotableChannelId && useIsPinotMemberNoticeEnabled(tmp3, arg1);
  return tmp5;
});
const result = size.fileFinishedImporting("modules/pinot/useIsPinotChannelLabelVisible.tsx");

export const useIsPinotChannelLabelVisible = tmp2;
