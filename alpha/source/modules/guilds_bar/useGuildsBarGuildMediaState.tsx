// Module ID: 17905
// Function ID: 17906
// Name: useGuildsBarGuildMediaState
// Dependencies: [14988, 504, 2]
// Exports: default

// Module 17905 (useGuildsBarGuildMediaState)
import GuildMediaStateStore from "GuildMediaStateStore" /* 14988 */;
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
