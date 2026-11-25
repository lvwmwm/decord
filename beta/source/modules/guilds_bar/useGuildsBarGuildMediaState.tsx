// Module ID: 17915
// Function ID: 17916
// Name: useGuildsBarGuildMediaState
// Dependencies: [14998, 504, 2]
// Exports: default

// Module 17915 (useGuildsBarGuildMediaState)
import GuildMediaStateStore from "GuildMediaStateStore" /* 14998 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/guilds_bar/useGuildsBarGuildMediaState.tsx");

export default function useGuildsBarGuildMediaState(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildMediaStateStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => GuildMediaStateStore.getGuildMediaState(closure_0), items1);
};
