// Module ID: 10646
// Function ID: 83127
// Name: shouldShowEndStageModal
// Dependencies: []
// Exports: default

// Module 10646 (shouldShowEndStageModal)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/stage_channels/shouldShowEndStageModal.tsx");

export default function shouldShowEndStageModal(isGuildStageVoice) {
  const arg1 = isGuildStageVoice;
  if (isGuildStageVoice.isGuildStageVoice()) {
    if (live.isLive(isGuildStageVoice.id)) {
      const id = id.getId();
      const dependencyMap = id;
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
              isModeratorResult = closure_4.isModerator(user.user.id, user.id);
            }
            return isModeratorResult;
          });
          if (!tmp12) {
            const mutableParticipants1 = store.getMutableParticipants(isGuildStageVoice.id, arg1(dependencyMap[4]).StageChannelParticipantNamedIndex.SPEAKER);
            tmp12 = null == mutableParticipants1.find((user) => {
              let isModeratorResult = user.user.id !== id;
              if (isModeratorResult) {
                isModeratorResult = closure_4.isModerator(user.user.id, user.id);
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
