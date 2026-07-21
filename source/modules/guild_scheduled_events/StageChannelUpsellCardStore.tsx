// Module ID: 8399
// Function ID: 66854
// Name: useStageChannelUpsellCardStore
// Dependencies: []
// Exports: useStageChannelUpsellCardStore

// Module 8399 (useStageChannelUpsellCardStore)
let closure_2 = require(dependencyMap[0]).GUILD_EVENT_STAGE_UPSELL_CARD_KEY;
const _module = require(dependencyMap[1]);
let closure_3 = _module.createWithEqualityFn((arg0) => {
  const require = arg0;
  const obj = {};
  const Storage = require(dependencyMap[2]).Storage;
  obj.hasSeenUpsellCard = true === Storage.get(closure_2);
  obj.markAsSeen = function markAsSeen(id) {
    const Storage = id(closure_1[2]).Storage;
    const result = Storage.set(closure_2, true);
    id(closure_1[3]).batchUpdates(() => callback({ hasSeenUpsellCard: true }));
  };
  return obj;
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx");

export const useStageChannelUpsellCardStore = function useStageChannelUpsellCardStore() {
  return callback((arg0) => {
    const items = [, ];
    ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
    return items;
  }, require(dependencyMap[4]).shallow);
};
