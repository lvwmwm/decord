// Module ID: 16275
// Function ID: 16276
// Name: useVibegrationsPublishedChannelId
// Dependencies: [4467, 504, 5370, 2]
// Exports: default

// Module 16275 (useVibegrationsPublishedChannelId)
import VibegrationsUtils from "VibegrationsUtils" /* 5370 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPublishedChannelId.tsx");

export default function useVibegrationsPublishedChannelId(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [GuildChannelStore];
  const items1 = [arg0, arg1];
  return obj.useStateFromStores(items, () => {
    let result = null;
    if (null != closure_1) {
      const obj = VibegrationsUtils;
      result = obj.findVibegrationChannelId(closure_0, tmp);
    }
    return result;
  }, items1);
};
