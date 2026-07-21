// Module ID: 11478
// Function ID: 89386
// Dependencies: []

// Module 11478
const Image = arg1(dependencyMap[1]).Image;
let closure_4 = importDefault(dependencyMap[2]);
const TextAreaCta = arg1(dependencyMap[3]).TextAreaCta;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const jsx = arg1(dependencyMap[5]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_8 = arg1(dependencyMap[6]).createStyles({ noticeIcon: {}, lottieAnimation: {} });
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback();
  let obj = arg1(dependencyMap[7]);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (null != currentUserGuildJoinRequest) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (arg1(dependencyMap[8]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp7 = importDefault(dependencyMap[9]);
    const intl2 = arg1(dependencyMap[10]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[10]).t.lk30cY);
    class A {
      constructor() {
        obj = closure_1(closure_2[11]);
        obj = { cta_type: closure_5.MEMBER_VERIFICATION_REJECTED };
        trackWithMetadataResult = obj.trackWithMetadata(closure_6.TEXT_AREA_CTA_CLICKED, obj);
        obj3 = guildId(closure_2[12]);
        obj1 = { guildId, canWithdraw: false };
        result = obj3.openMemberVerificationRejectedAlert(obj1);
        return;
      }
    }
  } else if (arg1(dependencyMap[8]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp7 = importDefault(dependencyMap[13]);
    class A {
      constructor() {
        obj = closure_1(closure_2[11]);
        obj = { cta_type: closure_5.MEMBER_VERIFICATION_CONFIRMED };
        trackWithMetadataResult = obj.trackWithMetadata(closure_6.TEXT_AREA_CTA_CLICKED, obj);
        obj3 = guildId(closure_2[12]);
        obj1 = { guildId };
        intl = guildId(closure_2[10]).intl;
        obj1.subtitleText = intl.string(guildId(closure_2[10]).t.13tjTU);
        result = obj3.openMemberVerificationCancelPendingAlert(obj1);
        return;
      }
    }
    stringResult = obj1.string(arg1(dependencyMap[10]).t.5iLvSx);
    const tmp8 = jsx(arg1(dependencyMap[14]).XSmallIcon, {});
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    stringResult = intl.string(arg1(dependencyMap[10]).t.rEBKvg);
    class A {
      constructor() {
        obj = closure_1(closure_2[11]);
        obj = { cta_type: closure_5.MEMBER_VERIFICATION };
        trackWithMetadataResult = obj.trackWithMetadata(closure_6.TEXT_AREA_CTA_CLICKED, obj);
        obj3 = guildId(closure_2[15]);
        result = obj3.openMemberVerificationModal(guildId);
        return;
      }
    }
  }
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[16]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { type: "simple-action" };
  const obj3 = arg1(dependencyMap[16]);
  const tmp17 = jsx;
  if (null != tmp7) {
    obj = { style: tmp.noticeIcon, source: tmp7 };
    let tmp23 = <Image {...obj} />;
  } else {
    const obj1 = { style: tmp.lottieAnimation };
    class A {
      constructor() {
        obj = closure_1(closure_2[11]);
        obj = { cta_type: closure_5.MEMBER_VERIFICATION };
        trackWithMetadataResult = obj.trackWithMetadata(closure_6.TEXT_AREA_CTA_CLICKED, obj);
        obj3 = guildId(closure_2[15]);
        result = obj3.openMemberVerificationModal(guildId);
        return;
      }
    }
    obj1.autoPlay = !stateFromStores;
    tmp23 = jsx(importDefault(dependencyMap[18]), obj1);
    const tmp22 = importDefault(dependencyMap[18]);
  }
  obj.icon = tmp23;
  obj.message = stringResult;
  obj.actionIcon = tmp8;
  const intl3 = arg1(dependencyMap[10]).intl;
  obj.actionLabel = intl3.string(arg1(dependencyMap[10]).t.r8/DT+);
  obj.actionOnPress = A;
  return tmp17(importDefault(dependencyMap[17]), obj);
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
