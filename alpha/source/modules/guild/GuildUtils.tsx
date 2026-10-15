// Module ID: 9775
// Function ID: 9776
// Name: guild/GuildUtils
// Dependencies: [6320, 7139, 2]
// Exports: handleJoinGuild

// Module 9775 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6320 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  _require = guildId;
  if (null != guildId) {
    let obj = GuildActionCreatorsDefault;
    const joinGuildResult = obj.joinGuild(guildId);
    const nextPromise = joinGuildResult.then(() => {
      const obj = GuildActionCreatorsDefault;
      const result = obj.transitionToGuildSync(guildId);
    });
    nextPromise.catch(require("JoinGuildRefusedError").ignoreJoinGuildRefused);
  }
};
