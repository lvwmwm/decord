// Module ID: 10341
// Function ID: 10342
// Name: getParticipantTitle
// Dependencies: [4811, 10342, 4942, 1119, 2]
// Exports: default

// Module 10341 (getParticipantTitle)
import CallConstants from "CallConstants" /* 4811 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4942 */;
import useIsGuestOrLurker from "useIsGuestOrLurker" /* 10342 */;
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
      const intl = tmp10(1119).intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(tmp10(1119).t["pFO/Ph"]);
    }
    return name1 + str;
  }
};
