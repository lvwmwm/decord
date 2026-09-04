// Module ID: 16056
// Function ID: 16057
// Name: useStickyServerHeaderSubtitle
// Dependencies: [4401, 673, 586, 2]
// Exports: default

// Module 16056 (useStickyServerHeaderSubtitle)
import closure_2 from "handleInviteData" /* 4401 */;
import { GuildFeatures } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(586).useStateFromStores(items, () => {
    features = features.features;
    let memberCount;
    if (features.has(closure_1_3.COMMUNITY)) {
      memberCount = closure_1_2.getMemberCount(features.id);
    }
    return memberCount;
  });
};
