// Module ID: 18562
// Function ID: 18563
// Name: useStickyServerHeaderSubtitle
// Dependencies: [5390, 1072, 504, 2]
// Exports: default

// Module 18562 (useStickyServerHeaderSubtitle)
import Constants from "Constants" /* 1072 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5390 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, features;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  _require = arg0;
  const items = [GuildMemberCountStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    features = features.features;
    let memberCount;
    const tmp = features;
    if (features.has(GuildFeatures.COMMUNITY)) {
      memberCount = GuildMemberCountStore.getMemberCount(tmp.id);
    }
    return memberCount;
  });
};
