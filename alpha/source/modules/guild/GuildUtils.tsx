// Module ID: 10204
// Function ID: 10205
// Name: guild/GuildUtils
// Dependencies: [6982, 6986, 2]
// Exports: handleJoinGuild

// Module 10204 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6982 */;
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
