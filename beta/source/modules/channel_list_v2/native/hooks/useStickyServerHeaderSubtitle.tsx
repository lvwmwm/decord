// Module ID: 16483
// Function ID: 16484
// Name: useStickyServerHeaderSubtitle
// Dependencies: [4710, 1078, 558, 568, 504, 2]

// Module 16483 (useStickyServerHeaderSubtitle)
import GuildMemberCountStore from "GuildMemberCountStore" /* 4710 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1078).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((features) => {
  _require = features;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === features.features) {
    if (cResult[2] === features.id) {
      let tmp6 = cResult[3];
    }
    return require("initialize").useStateFromStores(first, tmp6);
  }
  const fn = function o() {
    features = features.features;
    if (features.has(GuildFeatures.COMMUNITY)) {
      return GuildMemberCountStore.getMemberCount(tmp.id);
    }
    tmp = features;
  };
  cResult[1] = features.features;
  cResult[2] = features.id;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildMemberCountStore];
  return require("initialize").useStateFromStores(items, () => {
    features = features.features;
    let memberCount;
    if (features.has(GuildFeatures.COMMUNITY)) {
      memberCount = GuildMemberCountStore.getMemberCount(features.id);
    }
    return memberCount;
  });
});
