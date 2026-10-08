// Module ID: 10792
// Function ID: 10793
// Name: StageChannelParticipantUtils
// Dependencies: [1102, 4922, 1126, 2]
// Exports: participantMemberInfo

// Module 10792 (StageChannelParticipantUtils)
import DurationsDefault from "Durations" /* 1102 */;
import intl6 from "intl" /* 1126 */;
import UserUtils from "UserUtils" /* 4922 */;
import size from "module_2" /* 2 */;

const DAY = DurationsDefault.Millis.DAY;
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipantUtils.tsx");

export const participantMemberInfo = function participantMemberInfo(participant) {
  const obj = UserUtils;
  if (obj.isNewUser(participant.user)) {
    const intl5 = tmp(1126).intl;
    return intl5.string(intl6.t.VaCdhQ);
  } else {
    let stringResult;
    const member = participant.member;
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    if (null == joinedAt) {
      const intl4 = tmp(1126).intl;
      stringResult = intl4.string(tmp(1126).t.CQmzib);
    } else {
      if (null != participant.member) {
        if (participant.member.roles.length > 0) {
          const role = participant.role;
          let name;
          if (role != null) {
            name = role.name;
          }
          if (name == null) {
            const intl3 = tmp(1126).intl;
            name = intl3.string(tmp(1126).t["97/NdO"]);
          }
          stringResult = name;
        }
      }
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const date = new Date();
      const time = date.getTime();
      if (time - Date.parse(joinedAt) < DAY) {
        const intl2 = tmp(1126).intl;
        stringResult = intl2.string(tmp(1126).t.IKE48n);
      } else {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t.u0gUWt);
      }
    }
    return stringResult;
  }
};
