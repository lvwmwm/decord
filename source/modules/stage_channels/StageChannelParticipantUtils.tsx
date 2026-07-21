// Module ID: 10654
// Function ID: 83146
// Name: participantMemberInfo
// Dependencies: []
// Exports: participantMemberInfo

// Module 10654 (participantMemberInfo)
const DAY = importDefault(dependencyMap[0]).Millis.DAY;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/StageChannelParticipantUtils.tsx");

export const participantMemberInfo = function participantMemberInfo(participant) {
  if (obj.isNewUser(participant.user)) {
    const intl5 = arg1(dependencyMap[2]).intl;
    return intl5.string(arg1(dependencyMap[2]).t.VaCdhQ);
  } else {
    const member = participant.member;
    let joinedAt;
    if (null != member) {
      joinedAt = member.joinedAt;
    }
    if (null == joinedAt) {
      const intl4 = arg1(dependencyMap[2]).intl;
      let stringResult = intl4.string(arg1(dependencyMap[2]).t.CQmzib);
    } else {
      if (null != participant.member) {
        if (participant.member.roles.length > 0) {
          const role = participant.role;
          let name;
          if (null != role) {
            name = role.name;
          }
          if (null == name) {
            const intl3 = arg1(dependencyMap[2]).intl;
            name = intl3.string(arg1(dependencyMap[2]).t.97/NdO);
          }
          stringResult = name;
        }
      }
      const _Date = Date;
      const date = new Date();
      const _Date2 = Date;
      const time = date.getTime();
      if (time - Date.parse(joinedAt) < DAY) {
        const intl2 = arg1(dependencyMap[2]).intl;
        stringResult = intl2.string(arg1(dependencyMap[2]).t.IKE48n);
      } else {
        const intl = arg1(dependencyMap[2]).intl;
        stringResult = intl.string(arg1(dependencyMap[2]).t.u0gUWt);
      }
    }
    return stringResult;
  }
  const obj = arg1(dependencyMap[1]);
};
