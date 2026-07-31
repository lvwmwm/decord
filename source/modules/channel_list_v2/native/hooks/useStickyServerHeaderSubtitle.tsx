// Module ID: 15139
// Function ID: 15140
// Name: useStickyServerHeaderSubtitle
// Dependencies: [4114, 676, 589, 2]
// Exports: default

// Module 15139 (useStickyServerHeaderSubtitle)
import handleInviteData from "handleInviteData";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  const _require = arg0;
  const items = [handleInviteData];
  return _require(589).useStateFromStores(items, () => {
    features = features.features;
    let memberCount;
    if (features.has(outer1_3.COMMUNITY)) {
      memberCount = outer1_2.getMemberCount(features.id);
    }
    return memberCount;
  });
};
