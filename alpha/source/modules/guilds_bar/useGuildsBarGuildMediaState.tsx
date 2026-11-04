// Module ID: 18658
// Function ID: 18659
// Name: useGuildsBarGuildMediaState
// Dependencies: [15843, 504, 2]
// Exports: default

// Module 18658 (useGuildsBarGuildMediaState)
import GuildMediaStateStore from "GuildMediaStateStore" /* 15843 */;
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
