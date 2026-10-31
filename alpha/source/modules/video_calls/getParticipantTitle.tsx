// Module ID: 12028
// Function ID: 12029
// Name: getParticipantTitle
// Dependencies: [5681, 12029, 6041, 1113, 2]
// Exports: default

// Module 12028 (getParticipantTitle)
import CallConstants from "CallConstants" /* 5681 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6041 */;
import useIsGuestOrLurker from "useIsGuestOrLurker" /* 12029 */;
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
    const isGuestOrLurkerInGuild = useIsGuestOrLurker.isGuestOrLurkerInGuild;
    guild_id = guild_id.guild_id;
    useIsGuestOrLurker;
    if (user != null) {
      id = user.id;
    }
    const result = isGuestOrLurkerInGuild(guild_id, id);
    let str = "";
    const obj = NicknameUtilsDefault;
    const name1 = obj.getName(guild_id.getGuildId(), guild_id.id, type.user);
    if (result) {
      const intl = tmp10(1113).intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(tmp10(1113).t["pFO/Ph"]);
    }
    return name1 + str;
  }
};
