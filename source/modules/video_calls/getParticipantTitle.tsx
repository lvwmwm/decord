// Module ID: 10759
// Function ID: 83635
// Name: getParticipantTitle
// Dependencies: []
// Exports: default

// Module 10759 (getParticipantTitle)
const ParticipantTypes = require(dependencyMap[0]).ParticipantTypes;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/video_calls/getParticipantTitle.tsx");

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
    const result = require(dependencyMap[1]).isGuestOrLurkerInGuild(guild_id.guild_id, id);
    const obj2 = require(dependencyMap[1]);
    let str = "";
    const name1 = importDefault(dependencyMap[2]).getName(guild_id.getGuildId(), guild_id.id, type.user);
    if (result) {
      const intl = require(dependencyMap[3]).intl;
      const _HermesInternal = HermesInternal;
      str = " " + intl.string(require(dependencyMap[3]).t.pFO/Ph);
    }
    return name1 + str;
  }
};
