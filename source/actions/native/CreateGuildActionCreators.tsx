// Module ID: 11779
// Function ID: 91421
// Name: showInstantInviteModal
// Dependencies: [1907, 653, 8481, 2]
// Exports: showInstantInviteModal

// Module 11779 (showInstantInviteModal)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { InstantInviteSources } from "ME";

const require = arg1;
let result = require("showInstantInviteActionSheet").fileFinishedImporting("actions/native/CreateGuildActionCreators.tsx");

export const showInstantInviteModal = function showInstantInviteModal(closure_0) {
  let result = _isNativeReflectConstruct.addConditionalChangeListener(() => {
    defaultChannel = outer1_2.getDefaultChannel(defaultChannel);
    let flag = null == defaultChannel;
    if (!flag) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj = defaultChannel(outer2_1[2]);
        obj = { source: outer2_3.GUILD_CREATE };
        const result = obj.showInstantInviteActionSheet(defaultChannel, obj);
      });
      flag = false;
    }
    return flag;
  });
};
