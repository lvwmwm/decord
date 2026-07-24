// Module ID: 10685
// Function ID: 83369
// Name: shouldShowEndStageModal
// Dependencies: [1194, 4951, 4954, 1353, 4957, 2]
// Exports: default

// Module 10685 (shouldShowEndStageModal)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/shouldShowEndStageModal.tsx");

export default function shouldShowEndStageModal(isGuildStageVoice) {
  const _require = isGuildStageVoice;
  if (isGuildStageVoice.isGuildStageVoice()) {
    if (live.isLive(isGuildStageVoice.id)) {
      id = id.getId();
      const tmp5 = !closure_4.isModerator(id, isGuildStageVoice.id);
      let tmp6 = !tmp5;
      if (!tmp5) {
        const tmp8 = !closure_4.isSpeaker(id, isGuildStageVoice.id);
        let tmp9 = !tmp8;
        if (!tmp8) {
          const mutableParticipants = store.getMutableParticipants(isGuildStageVoice.id);
          let tmp12 = null == mutableParticipants.find((user) => {
            let isModeratorResult = user.user.id !== id;
            if (isModeratorResult) {
              isModeratorResult = outer1_4.isModerator(user.user.id, isGuildStageVoice.id);
            }
            return isModeratorResult;
          });
          if (!tmp12) {
            const mutableParticipants1 = store.getMutableParticipants(isGuildStageVoice.id, _require(id[4]).StageChannelParticipantNamedIndex.SPEAKER);
            tmp12 = null == mutableParticipants1.find((user) => {
              let isModeratorResult = user.user.id !== id;
              if (isModeratorResult) {
                isModeratorResult = outer1_4.isModerator(user.user.id, isGuildStageVoice.id);
              }
              return isModeratorResult;
            });
          }
          tmp9 = tmp12;
        }
        tmp6 = tmp9;
      }
      return tmp6;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
