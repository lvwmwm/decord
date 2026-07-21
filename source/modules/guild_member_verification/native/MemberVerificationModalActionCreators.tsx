// Module ID: 9138
// Function ID: 71632
// Dependencies: []

// Module 9138
const _module = require(dependencyMap[0]);
({ MEMBER_VERIFICATION_TYPE: closure_3, IN_APP_MEMBER_VERIFICATION_MODAL_KEY: closure_4 } = _module);
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx");

export default {
  openMemberVerificationModal(guildId, connect) {
    let obj = importDefault(dependencyMap[3]);
    const verificationForm = obj.fetchVerificationForm(guildId);
    obj = { type: closure_3, guild_id: guildId };
    importDefault(dependencyMap[2]).track(AnalyticEvents.OPEN_MODAL, obj);
    const obj2 = importDefault(dependencyMap[2]);
    obj = { guildId, onClose: connect };
    importDefault(dependencyMap[4]).pushLazy(require(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), obj, closure_4);
  },
  closeMemberVerificationModal() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!flag) {
      let obj = importDefault(dependencyMap[2]);
      obj = { type: closure_3 };
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj);
    }
    importDefault(dependencyMap[4]).popWithKey(closure_4);
  }
};
