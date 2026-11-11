// Module ID: 12865
// Function ID: 12866
// Name: useStageSummary
// Dependencies: [6886, 6880, 1113, 2]
// Exports: default

// Module 12865 (useStageSummary)
import intl3 from "intl" /* 1113 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6880 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6886 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stage_channels/useStageSummary.tsx");

export default function useStageSummary(id) {
  const obj = StageChannelParticipantStoreHooks;
  const actualStageSpeakerCount = obj.useActualStageSpeakerCount(id);
  const obj2 = StageChannelParticipantStoreHooks;
  const count = obj2.useStageParticipantsCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
  const intl = intl3.intl;
  const formatToPlainStringResult = intl.formatToPlainString(intl3.t.chmM9N, { count: actualStageSpeakerCount });
  const intl2 = intl3.intl;
  return "" + formatToPlainStringResult + " \u00B7 " + intl2.formatToPlainString(intl3.t["+v2pN2"], { count });
};
