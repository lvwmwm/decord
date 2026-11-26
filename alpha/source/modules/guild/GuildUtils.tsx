// Module ID: 9770
// Function ID: 9771
// Name: guild/GuildUtils
// Dependencies: [6991, 6995, 2]
// Exports: handleJoinGuild

// Module 9770 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6991 */;
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
