// Module ID: 10219
// Function ID: 10220
// Name: guild/GuildUtils
// Dependencies: [6990, 6994, 2]
// Exports: handleJoinGuild

// Module 10219 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6990 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export function handleJoinGuild(arg0) {
  let closure_0;
  _require = arg0;
  if (null != arg0) {
    let obj = GuildActionCreatorsDefault;
    const joinGuildResult = obj.joinGuild(arg0);
    const nextPromise = joinGuildResult.then(() => {
      const obj = GuildActionCreatorsDefault;
      const result = obj.transitionToGuildSync(closure_0);
    });
    nextPromise.catch(require("JoinGuildRefusedError").ignoreJoinGuildRefused);
  }
}
