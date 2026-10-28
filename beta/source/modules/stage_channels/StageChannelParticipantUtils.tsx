// Module ID: 11579
// Function ID: 11580
// Name: StageChannelParticipantUtils
// Dependencies: [1104, 5057, 1128, 2]
// Exports: participantMemberInfo

// Module 11579 (StageChannelParticipantUtils)
import DurationsDefault from "Durations" /* 1104 */;
import intl6 from "intl" /* 1128 */;
import UserUtils from "UserUtils" /* 5057 */;
import size from "module_2" /* 2 */;

const DAY = DurationsDefault.Millis.DAY;
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipantUtils.tsx");

export const participantMemberInfo = function participantMemberInfo(participant) {
  const obj = UserUtils;
  if (obj.isNewUser(participant.user)) {
    const intl5 = tmp(1128).intl;
    return intl5.string(intl6.t.VaCdhQ);
  } else {
    let stringResult;
    const member = participant.member;
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    if (null == joinedAt) {
      const intl4 = tmp(1128).intl;
      stringResult = intl4.string(tmp(1128).t.CQmzib);
    } else {
      if (null != participant.member) {
        if (participant.member.roles.length > 0) {
          const role = participant.role;
          let name;
          if (role != null) {
            name = role.name;
          }
          if (name == null) {
            const intl3 = tmp(1128).intl;
            name = intl3.string(tmp(1128).t["97/NdO"]);
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
        const intl2 = tmp(1128).intl;
        stringResult = intl2.string(tmp(1128).t.IKE48n);
      } else {
        const intl = tmp(1128).intl;
        stringResult = intl.string(tmp(1128).t.u0gUWt);
      }
    }
    return stringResult;
  }
};
