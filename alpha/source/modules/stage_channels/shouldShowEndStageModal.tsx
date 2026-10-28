// Module ID: 11576
// Function ID: 11577
// Name: shouldShowEndStageModal
// Dependencies: [502, 6676, 6721, 4861, 6723, 2]
// Exports: default

// Module 11576 (shouldShowEndStageModal)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6676 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6721 */;
import StageInstanceStore from "StageInstanceStore" /* 4861 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/stage_channels/shouldShowEndStageModal.tsx");

export default function shouldShowEndStageModal(isGuildStageVoice) {
  _require = isGuildStageVoice;
  if (isGuildStageVoice.isGuildStageVoice()) {
    if (StageInstanceStore.isLive(isGuildStageVoice.id)) {
      const id = AuthenticationStore.getId();
      let isModeratorResult = StageChannelRoleStore.isModerator(id, isGuildStageVoice.id);
      const obj = StageChannelRoleStore;
      if (isModeratorResult) {
        let isSpeakerResult = obj.isSpeaker(id, isGuildStageVoice.id);
        if (isSpeakerResult) {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(isGuildStageVoice.id);
          let tmp7 = null == mutableParticipants.find((user) => {
            const isModeratorResult = user.user.id !== id && StageChannelRoleStore.isModerator(user.user.id, isGuildStageVoice.id);
            return isModeratorResult;
          });
          const obj2 = StageChannelParticipantStore;
          if (!tmp7) {
            const mutableParticipants1 = obj2.getMutableParticipants(isGuildStageVoice.id, require("StageChannelParticipants").StageChannelParticipantNamedIndex.SPEAKER);
            tmp7 = null == mutableParticipants1.find((user) => {
              const isModeratorResult = user.user.id !== id && StageChannelRoleStore.isModerator(user.user.id, isGuildStageVoice.id);
              return isModeratorResult;
            });
          }
          isSpeakerResult = tmp7;
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
