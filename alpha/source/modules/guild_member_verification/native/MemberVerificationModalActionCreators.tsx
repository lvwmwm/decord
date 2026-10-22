// Module ID: 6857
// Function ID: 6858
// Name: guild_member_verification/MemberVerificationModalActionCreators
// Dependencies: [6858, 1087, 1267, 6834, 6657, 6859, 2002, 2]

// Module 6857 (guild_member_verification/MemberVerificationModalActionCreators)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 6834 */;
import MemberVerificationConstants from "MemberVerificationConstants" /* 6858 */;
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
    obj4.pushLazy(asyncRequire(6859, dependencyMap.paths), obj5, React3);
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
