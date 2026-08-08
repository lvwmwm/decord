// Module ID: 8413
// Function ID: 8414
// Dependencies: [4792, 676, 698, 5334, 4509, 8414, 1988, 2]

// Module 8413
import items from "items";
import { AnalyticEvents } from "ME";

let c3;
let c4;
({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: c4 } = items);
const result = require("expandEventProperties").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    let obj = importDefault(5334);
    const verificationForm = obj.fetchVerificationForm(guildId);
    obj = { type: closure_3, guild_id: guildId };
    importDefault(698).track(AnalyticEvents.OPEN_MODAL, obj);
    const obj2 = importDefault(698);
    obj = { guildId, onClose: connect };
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(8414, dependencyMap.paths), obj, closure_4);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      let obj = importDefault(698);
      obj = { type: null };
      obj[0] = closure_3;
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj);
    }
    importDefault(4509).popWithKey(closure_4);
  }
};
