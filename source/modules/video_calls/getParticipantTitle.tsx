// Module ID: 10805
// Function ID: 83923
// Name: getParticipantTitle
// Dependencies: [4148, 10806, 4319, 1212, 2]
// Exports: default

// Module 10805 (getParticipantTitle)
import { ParticipantTypes } from "ParticipantTypes";

let result = require("getNickname").fileFinishedImporting("modules/video_calls/getParticipantTitle.tsx");

export default function getParticipantTitle(guild_id, type, name) {
  if (type.type === ParticipantTypes.ACTIVITY) {
    name = undefined;
    if (null != name) {
      name = name.name;
    }
    let tmp11 = null;
    if (null != name) {
      tmp11 = name;
    }
    return tmp11;
  } else {
    const user = type.user;
    let id;
    if (null != user) {
      id = user.id;
    }
    const result = require(10806) /* _isGuestOrLurkerInGuild */.isGuestOrLurkerInGuild(guild_id.guild_id, id);
    const obj2 = require(10806) /* _isGuestOrLurkerInGuild */;
    let str = "";
    const name1 = importDefault(4319).getName(guild_id.getGuildId(), guild_id.id, type.user);
    if (result) {
      const intl = require(1212) /* getSystemLocale */.intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(require(1212) /* getSystemLocale */.t["pFO/Ph"]);
    }
    return name1 + str;
  }
};
