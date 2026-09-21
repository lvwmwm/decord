// Module ID: 9793
// Function ID: 9794
// Name: StageChannelUpsellCardStore
// Dependencies: [2051, 1247, 510, 1252, 558, 568, 4383, 2]

// Module 9793 (StageChannelUpsellCardStore)
import Storage2 from "Storage" /* 510 */;
import c from "c" /* 568 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1252 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import _mod4383 from "module_4383" /* 4383 */;
import identity from "module_1247" /* 1247 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = GuildScheduledEventsConstants.GUILD_EVENT_STAGE_UPSELL_CARD_KEY;
let closure_3 = identity.createWithEqualityFn((arg0) => {
  _require = arg0;
  const obj = { hasSeenUpsellCard: null, markAsSeen: null };
  let Storage = require("Storage").Storage;
  obj.hasSeenUpsellCard = true === Storage.get(closure_2);
  obj.markAsSeen = function markAsSeen() {
    const Storage = Storage2.Storage;
    const result = Storage.set(closure_2, true);
    ReactBatchUpdates.batchUpdates(() => closure_1_0({ hasSeenUpsellCard: true }));
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx");

export const useStageChannelUpsellCardStore = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arg0) {
      const items = [, ];
      ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _mod4383.shallow);
}) : (() => closure_3((arg0) => {
  const items = [, ];
  ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
  return items;
}, _mod4383.shallow));
