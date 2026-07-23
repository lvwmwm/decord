// Module ID: 14985
// Function ID: 114193
// Name: useStickyServerHeaderSubtitle
// Dependencies: [4051, 653, 566, 2]
// Exports: default

// Module 14985 (useStickyServerHeaderSubtitle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    const features = closure_0.features;
    let memberCount;
    if (features.has(outer1_3.COMMUNITY)) {
      memberCount = outer1_2.getMemberCount(closure_0.id);
    }
    return memberCount;
  });
};
