// Module ID: 14003
// Function ID: 106502
// Name: AllChannelAccessOptions
// Dependencies: []

// Module 14003 (AllChannelAccessOptions)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionEditStore.tsx");

export const AllChannelAccessOptions = { ALL_CHANNELS_ACCESS: 0, [0]: "ALL_CHANNELS_ACCESS", SOME_CHANNELS_ACCESS: 1, [1]: "SOME_CHANNELS_ACCESS" };
export const useEditStateStore = _module.create((arg0) => {
  const require = arg0;
  return {
    listings: {},
    setListing(arg0, arg1) {
      return arg0(arg1[1]).batchUpdates(() => arg0((listings) => {
        let obj = {};
        obj = {};
        const merged = Object.assign(listings.listings);
        obj[closure_0] = callback(listings.listings[closure_0]);
        obj.listings = obj;
        return obj;
      }));
    },
    editStateIdsForGroup: {},
    setEditStateIdsForGroup(arg0, arg1) {
      return arg0(arg1[1]).batchUpdates(() => {
        arg0((editStateIdsForGroup) => {
          let obj = {};
          obj = {};
          const merged = Object.assign(editStateIdsForGroup.editStateIdsForGroup);
          obj[closure_0] = callback(editStateIdsForGroup.editStateIdsForGroup[closure_0]);
          obj.editStateIdsForGroup = obj;
          return obj;
        });
      });
    }
  };
});
