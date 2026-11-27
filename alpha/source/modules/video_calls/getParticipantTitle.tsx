// Module ID: 10564
// Function ID: 10565
// Name: getParticipantTitle
// Dependencies: [5693, 10565, 6807, 1112, 2]
// Exports: default

// Module 10564 (getParticipantTitle)
import CallConstants from "CallConstants" /* 5693 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6807 */;
import useIsGuestOrLurker from "useIsGuestOrLurker" /* 10565 */;
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
      const intl = tmp10(1112).intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(tmp10(1112).t["pFO/Ph"]);
    }
    return name1 + str;
  }
};
