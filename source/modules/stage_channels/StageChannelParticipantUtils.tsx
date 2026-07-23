// Module ID: 10665
// Function ID: 83209
// Name: participantMemberInfo
// Dependencies: [664, 3969, 1212, 2]
// Exports: participantMemberInfo

// Module 10665 (participantMemberInfo)
const require = arg1;
const DAY = require("set").Millis.DAY;
const result = require("getSystemLocale").fileFinishedImporting("modules/stage_channels/StageChannelParticipantUtils.tsx");

export const participantMemberInfo = function participantMemberInfo(participant) {
  if (obj.isNewUser(participant.user)) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.VaCdhQ);
  } else {
    const member = participant.member;
    let joinedAt;
    if (null != member) {
      joinedAt = member.joinedAt;
    }
    if (null == joinedAt) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl4.string(require(1212) /* getSystemLocale */.t.CQmzib);
    } else {
      if (null != participant.member) {
        if (participant.member.roles.length > 0) {
          const role = participant.role;
          let name;
          if (null != role) {
            name = role.name;
          }
          if (null == name) {
            const intl3 = require(1212) /* getSystemLocale */.intl;
            name = intl3.string(require(1212) /* getSystemLocale */.t["97/NdO"]);
          }
          stringResult = name;
        }
      }
      const _Date = Date;
      const date = new Date();
      const _Date2 = Date;
      const time = date.getTime();
      if (time - Date.parse(joinedAt) < DAY) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        stringResult = intl2.string(require(1212) /* getSystemLocale */.t.IKE48n);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t.u0gUWt);
      }
    }
    return stringResult;
  }
  obj = require(3969) /* conceal */;
};
