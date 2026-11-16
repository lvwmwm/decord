// Module ID: 11310
// Function ID: 11311
// Name: guild/GuildUtils
// Dependencies: [6907, 6912, 2]
// Exports: handleJoinGuild

// Module 11310 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6907 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export function handleJoinGuild(guildId) {
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
}
