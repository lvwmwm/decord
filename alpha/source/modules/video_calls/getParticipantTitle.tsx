// Module ID: 9508
// Function ID: 9509
// Name: getParticipantTitle
// Dependencies: [4857, 9509, 4988, 1115, 2]
// Exports: default

// Module 9508 (getParticipantTitle)
import CallConstants from "CallConstants" /* 4857 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import useIsGuestOrLurker from "useIsGuestOrLurker" /* 9509 */;
import size from "module_2" /* 2 */;

const ParticipantTypes = CallConstants.ParticipantTypes;
let result = size.fileFinishedImporting("modules/video_calls/getParticipantTitle.tsx");

export default function getParticipantTitle(guild_id, type, name) {
  if (type.type === ParticipantTypes.ACTIVITY) {
    name = undefined;
    if (name != null) {
      name = name.name;
    }
    if (name == null) {
      name = null;
    }
    return name;
  } else {
    const user = type.user;
    let id;
    if (user != null) {
      id = user.id;
    }
    const result = useIsGuestOrLurker.isGuestOrLurkerInGuild(guild_id.guild_id, id);
    let str = "";
    const name1 = NicknameUtilsDefault.getName(guild_id.getGuildId(), guild_id.id, type.user);
    if (result) {
      const intl = tmp10(1115).intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(tmp10(1115).t["pFO/Ph"]);
    }
    return name1 + str;
  }
};
