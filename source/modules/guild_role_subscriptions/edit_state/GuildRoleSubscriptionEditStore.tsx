// Module ID: 14117
// Function ID: 108658
// Name: AllChannelAccessOptions
// Dependencies: [621, 682, 2]

// Module 14117 (AllChannelAccessOptions)
import keys from "keys";

let obj = keys.create((arg0) => {
  let closure_0 = arg0;
  return {
    listings: {},
    setListing(arg0, arg1) {
      const callback = arg0;
      let closure_1 = arg1;
      return callback(outer1_1[1]).batchUpdates(() => callback((listings) => {
        let obj = {};
        obj = {};
        const merged = Object.assign(listings.listings);
        obj[outer1_0] = outer1_1(listings.listings[outer1_0]);
        obj.listings = obj;
        return obj;
      }));
    },
    editStateIdsForGroup: {},
    setEditStateIdsForGroup(arg0, arg1) {
      const callback = arg0;
      let closure_1 = arg1;
      return callback(outer1_1[1]).batchUpdates(() => {
        callback((editStateIdsForGroup) => {
          let obj = {};
          obj = {};
          const merged = Object.assign(editStateIdsForGroup.editStateIdsForGroup);
          obj[outer1_0] = outer1_1(editStateIdsForGroup.editStateIdsForGroup[outer1_0]);
          obj.editStateIdsForGroup = obj;
          return obj;
        });
      });
    }
  };
});
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionEditStore.tsx");

export const AllChannelAccessOptions = { ALL_CHANNELS_ACCESS: 0, [0]: "ALL_CHANNELS_ACCESS", SOME_CHANNELS_ACCESS: 1, [1]: "SOME_CHANNELS_ACCESS" };
export const useEditStateStore = obj;
