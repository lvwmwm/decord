// Module ID: 12162
// Function ID: 12163
// Name: showInstantInviteModal
// Dependencies: [1980, 676, 9114, 2]
// Exports: showInstantInviteModal

// Module 12162 (showInstantInviteModal)
import comparator from "comparator";
import { InstantInviteSources } from "ME";

const require = arg1;
let result = require("showInstantInviteActionSheet").fileFinishedImporting("actions/native/CreateGuildActionCreators.tsx");

export const showInstantInviteModal = function showInstantInviteModal(closure_0) {
  let result = comparator.addConditionalChangeListener(() => {
    defaultChannel = outer1_2.getDefaultChannel(defaultChannel);
    let flag = null == defaultChannel;
    if (!flag) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj = defaultChannel(outer1_1[2]);
        obj = { source: outer1_3.GUILD_CREATE };
        const result = obj.showInstantInviteActionSheet(defaultChannel, obj);
      });
      flag = false;
    }
    return flag;
  });
};
