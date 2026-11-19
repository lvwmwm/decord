// Module ID: 7587
// Function ID: 7588
// Name: StageChannelUpsellCardStore
// Dependencies: [4647, 1258, 510, 1263, 4707, 2]
// Exports: useStageChannelUpsellCardStore

// Module 7587 (StageChannelUpsellCardStore)
import Storage2 from "Storage" /* 510 */;
import react_native from "react-native" /* 1263 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4647 */;
import _slicedToArray from "_slicedToArray" /* 4707 */;
import module_1258 from "module_1258" /* 1258 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_2 = GuildScheduledEventsConstants.GUILD_EVENT_STAGE_UPSELL_CARD_KEY;
let closure_3 = module_1258.createWithEqualityFn((arg0) => {
  let Storage;
  let closure_0;
  _require = arg0;
  let obj = {
    hasSeenUpsellCard: true === Storage.get(closure_2),
    markAsSeen() {
      const Storage = Storage2.Storage;
      const result = Storage.set(closure_2, true);
      const obj = react_native;
      obj.batchUpdates(() => closure_1_0({ hasSeenUpsellCard: true }));
    }
  };
  Storage = require("Storage").Storage;
  return obj;
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx");

export function useStageChannelUpsellCardStore() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
}
