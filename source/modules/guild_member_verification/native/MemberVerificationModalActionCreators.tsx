// Module ID: 9074
// Function ID: 71392
// Dependencies: [4622, 653, 675, 5127, 4338, 9075, 1935, 2]

// Module 9074
import items from "items";
import { AnalyticEvents } from "ME";

let closure_3;
let closure_4;
({ MEMBER_VERIFICATION_TYPE: closure_3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: closure_4 } = items);
const result = require("expandLocation").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    let obj = importDefault(5127);
    const verificationForm = obj.fetchVerificationForm(guildId);
    obj = { type: closure_3, guild_id: guildId };
    importDefault(675).track(AnalyticEvents.OPEN_MODAL, obj);
    const obj2 = importDefault(675);
    obj = { guildId, onClose: connect };
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(9075, dependencyMap.paths), obj, closure_4);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      let obj = importDefault(675);
      obj = { type: closure_3 };
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj);
    }
    importDefault(4338).popWithKey(closure_4);
  }
};
