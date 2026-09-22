// Module ID: 10044
// Function ID: 10045
// Name: shouldShowEndStageModal
// Dependencies: [502, 5499, 5502, 1962, 5506, 2]
// Exports: default

// Module 10044 (shouldShowEndStageModal)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5499 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5502 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/shouldShowEndStageModal.tsx");

export default function shouldShowEndStageModal(isGuildStageVoice) {
  _require = isGuildStageVoice;
  if (isGuildStageVoice.isGuildStageVoice()) {
    if (StageInstanceStore.isLive(isGuildStageVoice.id)) {
      const id = AuthenticationStore.getId();
      let isModeratorResult = StageChannelRoleStore.isModerator(id, isGuildStageVoice.id);
      if (isModeratorResult) {
        let isSpeakerResult = StageChannelRoleStore.isSpeaker(id, isGuildStageVoice.id);
        if (isSpeakerResult) {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(isGuildStageVoice.id);
          let tmp7 = null == mutableParticipants.find((user) => {
            let isModeratorResult = user.user.id !== id;
            if (isModeratorResult) {
              isModeratorResult = StageChannelRoleStore.isModerator(user.user.id, isGuildStageVoice.id);
            }
            return isModeratorResult;
          });
          if (!tmp7) {
            const mutableParticipants1 = obj2.getMutableParticipants(isGuildStageVoice.id, require("StageChannelParticipants").StageChannelParticipantNamedIndex.SPEAKER);
            tmp7 = null == mutableParticipants1.find((user) => {
              let isModeratorResult = user.user.id !== id;
              if (isModeratorResult) {
                isModeratorResult = StageChannelRoleStore.isModerator(user.user.id, isGuildStageVoice.id);
              }
              return isModeratorResult;
            });
          }
          isSpeakerResult = tmp7;
          obj2 = StageChannelParticipantStore;
        }
        isModeratorResult = isSpeakerResult;
      }
      return isModeratorResult;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
