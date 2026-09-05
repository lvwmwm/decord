// Module ID: 16134
// Function ID: 16135
// Name: useStickyServerHeaderSubtitle
// Dependencies: [4480, 1074, 504, 2]
// Exports: default

// Module 16134 (useStickyServerHeaderSubtitle)
import closure_2 from "handleInviteData" /* 4480 */;
import { GuildFeatures } from "ME" /* 1074 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(504).useStateFromStores(items, () => {
    features = features.features;
    let memberCount;
    if (features.has(closure_1_3.COMMUNITY)) {
      memberCount = closure_1_2.getMemberCount(features.id);
    }
    return memberCount;
  });
};
