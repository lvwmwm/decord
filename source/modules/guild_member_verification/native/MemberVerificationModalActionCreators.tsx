// Module ID: 8196
// Function ID: 8197
// Dependencies: [4743, 676, 698, 5263, 4460, 8197, 1959, 2]

// Module 8196
import items from "items";
import { AnalyticEvents } from "ME";

let c3;
let c4;
({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: c4 } = items);
const result = require("expandEventProperties").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    let obj = importDefault(5263);
    const verificationForm = obj.fetchVerificationForm(guildId);
    obj = { type: closure_3, guild_id: guildId };
    importDefault(698).track(AnalyticEvents.OPEN_MODAL, obj);
    const obj2 = importDefault(698);
    obj = { guildId, onClose: connect };
    importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(8197, dependencyMap.paths), obj, closure_4);
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
    importDefault(4460).popWithKey(closure_4);
  }
};
