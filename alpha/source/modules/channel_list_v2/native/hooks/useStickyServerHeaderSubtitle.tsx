// Module ID: 17654
// Function ID: 17655
// Name: useStickyServerHeaderSubtitle
// Dependencies: [5534, 1071, 504, 2]
// Exports: default

// Module 17654 (useStickyServerHeaderSubtitle)
import Constants from "Constants" /* 1071 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5534 */;
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
