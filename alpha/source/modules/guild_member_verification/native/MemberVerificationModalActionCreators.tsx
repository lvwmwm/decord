// Module ID: 6145
// Function ID: 6146
// Name: guild_member_verification/MemberVerificationModalActionCreators
// Dependencies: [6146, 1085, 1265, 6122, 5934, 6147, 2000, 2]

// Module 6145 (guild_member_verification/MemberVerificationModalActionCreators)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 6122 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 6146 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ MEMBER_VERIFICATION_TYPE: c3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: closure_4 } = MemberVerificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let obj = {
  openMemberVerificationModal(guildId, startCreateForumPostFlow) {
    const obj = MemberVerificationActionCreatorsDefault;
    const verificationForm = obj.fetchVerificationForm(guildId);
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { type, guild_id: guildId };
    obj2.track(AnalyticEvents.OPEN_MODAL, obj3);
    const obj4 = ModalActionCreatorsDefault;
    const obj5 = { guildId, onClose: startCreateForumPostFlow };
    obj4.pushLazy(asyncRequire(6147, dependencyMap.paths), obj5, React3);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      const obj2 = { type };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj2);
    }
    const obj3 = ModalActionCreatorsDefault;
    obj3.popWithKey(React3);
  }
};
const result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default obj;
