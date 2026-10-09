// Module ID: 16478
// Function ID: 16479
// Name: useStickyServerHeaderSubtitle
// Dependencies: [4981, 1085, 558, 576, 504, 2]

// Module 16478 (useStickyServerHeaderSubtitle)
import Constants from "Constants" /* 1085 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4981 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStickyServerHeaderSubtitle(features) {
  let first;
  _require = features;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === features.features) {
    let tmp6;
    if (cResult[2] === features.id) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6);
  }
  const fn = function o() {
    features = features.features;
    const tmp = features;
    if (features.has(GuildFeatures.COMMUNITY)) {
      return GuildMemberCountStore.getMemberCount(tmp.id);
    }
  };
  cResult[1] = features.features;
  cResult[2] = features.id;
  cResult[3] = fn;
  tmp6 = fn;
}) : (function useStickyServerHeaderSubtitle(arg0) {
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
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default tmp2;
