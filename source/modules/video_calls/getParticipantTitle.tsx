// Module ID: 10795
// Function ID: 10796
// Name: getParticipantTitle
// Dependencies: [4273, 10796, 4444, 1236, 2]
// Exports: default

// Module 10795 (getParticipantTitle)
import { ParticipantTypes } from "ParticipantTypes";

let result = require("getNickname").fileFinishedImporting("modules/video_calls/getParticipantTitle.tsx");

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
    const result = require(10796) /* useIsGuestOrLurker */.isGuestOrLurkerInGuild(guild_id.guild_id, id);
    const obj2 = require(10796) /* useIsGuestOrLurker */;
    let str = "";
    const name1 = importDefault(4444).getName(guild_id.getGuildId(), guild_id.id, type.user);
    if (result) {
      const intl = tmp10(1236).intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(tmp10(1236).t["pFO/Ph"]);
    }
    return name1 + str;
  }
};
