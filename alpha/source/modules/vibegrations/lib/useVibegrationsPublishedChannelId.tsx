// Module ID: 16251
// Function ID: 16252
// Name: useVibegrationsPublishedChannelId
// Dependencies: [4464, 504, 5363, 2]
// Exports: default

// Module 16251 (useVibegrationsPublishedChannelId)
import VibegrationsUtils from "VibegrationsUtils" /* 5363 */;
import GuildChannelStore from "GuildChannelStore" /* 4464 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPublishedChannelId.tsx");

export default function useVibegrationsPublishedChannelId(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildChannelStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let result = null;
    if (null != closure_1) {
      result = VibegrationsUtils.findVibegrationChannelId(closure_0, tmp);
    }
    return result;
  }, items1);
};
