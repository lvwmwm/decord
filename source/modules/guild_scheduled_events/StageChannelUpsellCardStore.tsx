// Module ID: 8406
// Function ID: 66903
// Name: useStageChannelUpsellCardStore
// Dependencies: [1354, 677, 587, 682, 3743, 2]
// Exports: useStageChannelUpsellCardStore

// Module 8406 (useStageChannelUpsellCardStore)
import { GUILD_EVENT_STAGE_UPSELL_CARD_KEY as closure_2 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

let closure_3 = useStoreWithEqualityFn.createWithEqualityFn((arg0) => {
  const _require = arg0;
  const obj = {};
  let Storage = _require(587).Storage;
  obj.hasSeenUpsellCard = true === Storage.get(closure_2);
  obj.markAsSeen = function markAsSeen(id) {
    const Storage = callback(outer1_1[2]).Storage;
    const result = Storage.set(outer1_2, true);
    callback(outer1_1[3]).batchUpdates(() => outer1_0({ hasSeenUpsellCard: true }));
  };
  return obj;
});
let result = require("Storage").fileFinishedImporting("modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx");

export const useStageChannelUpsellCardStore = function useStageChannelUpsellCardStore() {
  return callback((arg0) => {
    const items = [, ];
    ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
    return items;
  }, require(3743) /* isIterable */.shallow);
};
