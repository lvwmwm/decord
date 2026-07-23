// Module ID: 11464
// Function ID: 89298
// Name: ChatInputGuardWrapper
// Dependencies: [31, 3759, 1352, 1917, 1838, 4946, 3767, 1849, 11105, 653, 9237, 33, 566, 4620, 3747, 3764, 11465, 11466, 10405, 10404, 5698, 11467, 11468, 4324, 8923, 4337, 9236, 1934, 9239, 9181, 9990, 9811, 11470, 11472, 11482, 11481, 4086, 1212, 11484, 11487, 11488, 11489, 11493, 11494, 11497, 11498, 8461, 11500, 2]
// Exports: default

// Module 11464 (ChatInputGuardWrapper)
import "navigateToThreadCreation";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isThread } from "_callSuper";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { TextAreaCta } from "TextAreaCta";
import ME from "ME";
import { PHONE_VERIFICATION_MODAL_KEY as closure_15 } from "PHONE_VERIFICATION_MODAL_KEY";
import { jsx } from "module_11472";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
({ AnalyticEvents: closure_11, ChannelTypes: closure_12, JoinGuildSources: closure_13, VerificationCriteria: closure_14 } = ME);
let result = require("_callSuper").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardWrapper.tsx");

export default function ChatInputGuardWrapper(channel) {
  let accountDeadline;
  let automodUserProfileQuarantined;
  let canCreateThreads;
  let canSendMessages;
  let children;
  let isReadonly;
  let memberDeadline;
  let missingVerificationRole;
  let newAccount;
  let newMember;
  let notEmailVerified;
  let notPhoneVerified;
  let onJumpToPresent;
  let requiredLinkedLobbyApplication;
  let screenIndex;
  let showLinkedLobbyApplicationLoadingIndicator;
  let showMemberVerificationModal;
  let user;
  channel = channel.channel;
  ({ screenIndex, canSendMessages, canCreateThreads, children, isReadonly, onJumpToPresent } = channel);
  let guildId = channel.getGuildId();
  let obj = channel(stateFromStores[12]);
  const items = [_createForOfIteratorHelperLoose];
  stateFromStores = obj.useStateFromStores(items, () => channel(stateFromStores[13]).guildHasVerificationGate(outer1_6.getGuild(guildId)));
  let obj1 = channel(stateFromStores[12]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.getCheck(guildId));
  const notClaimed = stateFromStores1.notClaimed;
  const verificationRole = stateFromStores1.verificationRole;
  ({ notPhoneVerified, notEmailVerified, newMember, newAccount, memberDeadline, accountDeadline, missingVerificationRole } = stateFromStores1);
  let obj2 = channel(stateFromStores[12]);
  const items2 = [closure_9, closure_5];
  const items3 = [guildId, stateFromStores, notClaimed];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    const currentUser = outer1_9.getCurrentUser();
    let member = null;
    if (null != currentUser) {
      member = null;
      if (null != guildId) {
        member = outer1_5.getMember(guildId, currentUser.id);
      }
    }
    const obj = { user: currentUser };
    let isPending;
    if (null != member) {
      isPending = member.isPending;
    }
    obj.showMemberVerificationModal = (true === isPending || notClaimed) && stateFromStores;
    let tmp7;
    if (obj2.isMemberCommunicationDisabled(member)) {
      tmp7 = member;
    }
    obj.communicationDisabledGuildMember = tmp7;
    obj2 = channel(stateFromStores[14]);
    obj.automodUserProfileQuarantined = channel(stateFromStores[15]).hasAutomodQuarantinedProfile(member);
    return obj;
  }, items3);
  const communicationDisabledGuildMember = stateFromStoresObject.communicationDisabledGuildMember;
  ({ user, showMemberVerificationModal, automodUserProfileQuarantined } = stateFromStoresObject);
  let tmp6 = channel.type === constants.GUILD_ANNOUNCEMENT;
  if (tmp6) {
    tmp6 = !canSendMessages;
  }
  obj = { channelId: channel.id };
  let tmp7 = guildId(stateFromStores[17])(obj);
  let obj4 = channel(stateFromStores[18]);
  const tmp5 = guildId(stateFromStores[16])(user, channel);
  let obj5 = channel(stateFromStores[19]);
  const tmp8 = obj4.useIsMessageRequest(channel.id) && channel.isPrivate();
  const tmp9 = obj5.useIsSpamMessageRequest(channel.id) && channel.isPrivate();
  let obj6 = channel(stateFromStores[12]);
  const items4 = [closure_8];
  const items5 = [channel];
  const stateFromStores2 = obj6.useStateFromStores(items4, () => {
    let isDMResult = channel.isDM();
    if (isDMResult) {
      isDMResult = outer1_8.isBlocked(channel.getRecipientId());
    }
    return isDMResult;
  }, items5);
  let obj7 = channel(stateFromStores[12]);
  const items6 = [notClaimed];
  const items7 = [guildId];
  const stateFromStoresObject1 = obj7.useStateFromStoresObject(items6, () => {
    const obj = {};
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = notClaimed.isLurking(guildId);
    }
    obj.isLurking = isLurkingResult;
    let tmp4 = null != guildId;
    if (tmp4) {
      const lurkingSourceForGuild = notClaimed.getLurkingSourceForGuild(guildId);
      let type;
      if (null != lurkingSourceForGuild) {
        type = lurkingSourceForGuild.type;
      }
      tmp4 = type;
    }
    obj.lurkingSourceType = tmp4;
    return obj;
  }, items7);
  const isLurking = stateFromStoresObject1.isLurking;
  let obj8 = channel(stateFromStores[20]);
  const isForumPostResult = channel.isForumPost();
  ({ showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication } = guildId(stateFromStores[21])(channel.linkedLobby));
  guildId(stateFromStores[22])(channel.id);
  if (isLurking) {
    if (stateFromStoresObject1.lurkingSourceType !== constants2.DIRECTORY_ENTRY) {
      if (obj8.useMobileLurkerServerPreview("ChatInputGuardWrapper").enabled) {
        if (null != guildId) {
          guildId = stateFromStores;
          obj = { guildId };
          let tmp20Result = jsx(guildId(stateFromStores[32]), { guildId });
        }
        guildId = jsx;
        guildId = channel;
        guildId = stateFromStores;
        obj1 = { screenIndex, channelId: channel.id, onJumpToPresent, children: tmp20Result };
        return jsx(channel(stateFromStores[35]).ChatInputGuardContainer, { screenIndex, channelId: channel.id, onJumpToPresent, children: tmp20Result });
      }
    }
  }
  if (tmp8) {
    obj2 = { channel };
    tmp20Result = jsx(guildId(stateFromStores[33]), { channel });
  } else if (tmp9) {
    let obj3 = { channel };
    tmp20Result = jsx(guildId(stateFromStores[34]), { channel });
  } else if (channel.isSystemDM()) {
    obj4 = { type: "simple-action", icon: jsx(channel(stateFromStores[36]).CircleInformationIcon, {}) };
    const intl14 = channel(stateFromStores[37]).intl;
    obj4.message = intl14.string(channel(stateFromStores[37]).t.Bt2N7D);
    const intl15 = channel(stateFromStores[37]).intl;
    obj4.subtext = intl15.string(channel(stateFromStores[37]).t["n/Vzkw"]);
    tmp20Result = jsx(guildId(stateFromStores[35]), { type: "simple-action", icon: jsx(channel(stateFromStores[36]).CircleInformationIcon, {}) });
    const tmp91 = guildId(stateFromStores[35]);
  } else if (tmp5) {
    tmp20Result = jsx(guildId(stateFromStores[38]), {});
  } else {
    if (tmp6) {
      if (null != tmp7) {
        obj5 = { pendingGameProfileReturn: tmp7 };
        tmp20Result = jsx(guildId(stateFromStores[39]), { pendingGameProfileReturn: tmp7 });
      }
    }
    if (!isLurking) {
      if (!tmp6) {
        if (stateFromStores2) {
          obj6 = { type: "button-action" };
          const intl12 = channel(stateFromStores[37]).intl;
          obj6.message = intl12.string(channel(stateFromStores[37]).t["9T6N5/"]);
          const intl13 = channel(stateFromStores[37]).intl;
          obj6.buttonPrimaryText = intl13.string(channel(stateFromStores[37]).t.XyHpKH);
          obj6.buttonPrimaryOnPress = function handleUnblock() {
            if (channel.isDM()) {
              let obj = guildId(stateFromStores[23]);
              obj = { cta_type: outer1_10.UNBLOCK };
              obj.trackWithMetadata(outer1_11.TEXT_AREA_CTA_CLICKED, obj);
              guildId(stateFromStores[24]).unblockUser(channel.getRecipientId());
              const obj3 = guildId(stateFromStores[24]);
            }
          };
          tmp20Result = jsx(guildId(stateFromStores[35]), { type: "button-action" });
          const tmp77 = guildId(stateFromStores[35]);
        } else if (showMemberVerificationModal) {
          obj7 = { guildId };
          tmp20Result = jsx(guildId(stateFromStores[41]), { guildId });
        } else {
          if (!showLinkedLobbyApplicationLoadingIndicator) {
            if (null == requiredLinkedLobbyApplication) {
              if (null != communicationDisabledGuildMember) {
                obj8 = { guildMember: communicationDisabledGuildMember };
                tmp20Result = jsx(guildId(stateFromStores[43]), { guildMember: communicationDisabledGuildMember });
              } else if (automodUserProfileQuarantined) {
                const obj9 = { guildId };
                tmp20Result = jsx(guildId(stateFromStores[44]), { guildId });
              } else if (notClaimed) {
                const obj10 = { type: "simple-action", icon: jsx(channel(stateFromStores[45]).ChatXIcon, {}) };
                const intl11 = channel(stateFromStores[37]).intl;
                obj10.message = intl11.string(channel(stateFromStores[37]).t["Eg3/c9"]);
                tmp20Result = jsx(guildId(stateFromStores[35]), { type: "simple-action", icon: jsx(channel(stateFromStores[45]).ChatXIcon, {}) });
                const tmp60 = guildId(stateFromStores[35]);
              } else if (notPhoneVerified) {
                const obj11 = { type: "button-action" };
                const intl9 = channel(stateFromStores[37]).intl;
                obj11.message = intl9.string(channel(stateFromStores[37]).t["2dThMM"]);
                const intl10 = channel(stateFromStores[37]).intl;
                obj11.buttonPrimaryText = intl10.string(channel(stateFromStores[37]).t["50gfOv"]);
                obj11.buttonPrimaryOnPress = function handleVerifyPhone() {
                  let obj = guildId(stateFromStores[23]);
                  obj = { cta_type: outer1_10.VERIFY_PHONE };
                  obj.trackWithMetadata(outer1_11.TEXT_AREA_CTA_CLICKED, obj);
                  obj = {};
                  const obj3 = guildId(stateFromStores[25]);
                  obj.reason = channel(stateFromStores[28]).ChangePhoneReason.GUILD_PHONE_REQUIRED;
                  obj3.pushLazy(channel(stateFromStores[27])(stateFromStores[26], stateFromStores.paths), obj, outer1_15);
                };
                tmp20Result = jsx(guildId(stateFromStores[35]), { type: "button-action" });
                const tmp55 = guildId(stateFromStores[35]);
              } else if (notEmailVerified) {
                const obj12 = { type: "button-action" };
                const intl7 = channel(stateFromStores[37]).intl;
                obj12.message = intl7.string(channel(stateFromStores[37]).t.FkGPS5);
                const intl8 = channel(stateFromStores[37]).intl;
                obj12.buttonPrimaryText = intl8.string(channel(stateFromStores[37]).t.lm1UKt);
                obj12.buttonPrimaryOnPress = function handleVerifyEmail() {
                  let obj = guildId(stateFromStores[23]);
                  obj = { cta_type: outer1_10.VERIFY_EMAIL };
                  obj.trackWithMetadata(outer1_11.TEXT_AREA_CTA_CLICKED, obj);
                  guildId(stateFromStores[29]).open();
                };
                tmp20Result = jsx(guildId(stateFromStores[35]), { type: "button-action" });
                const tmp50 = guildId(stateFromStores[35]);
              } else if (newMember) {
                const obj13 = { type: "simple-action", icon: jsx(channel(stateFromStores[46]).CalendarIcon, {}) };
                const intl6 = channel(stateFromStores[37]).intl;
                const obj14 = { min: constants3.MEMBER_AGE };
                obj13.message = intl6.formatToPlainString(channel(stateFromStores[37]).t.IH7RMF, obj14);
                obj13.countdown = memberDeadline;
                tmp20Result = jsx(guildId(stateFromStores[35]), { type: "simple-action", icon: jsx(channel(stateFromStores[46]).CalendarIcon, {}) });
                const tmp44 = guildId(stateFromStores[35]);
              } else if (newAccount) {
                const obj15 = { type: "simple-action", icon: jsx(channel(stateFromStores[46]).CalendarIcon, {}) };
                const intl5 = channel(stateFromStores[37]).intl;
                const obj16 = { min: constants3.ACCOUNT_AGE };
                obj15.message = intl5.formatToPlainString(channel(stateFromStores[37]).t["2JA2GH"], obj16);
                obj15.countdown = accountDeadline;
                tmp20Result = jsx(guildId(stateFromStores[35]), { type: "simple-action", icon: jsx(channel(stateFromStores[46]).CalendarIcon, {}) });
                const tmp38 = guildId(stateFromStores[35]);
              } else {
                if (missingVerificationRole) {
                  if (null != verificationRole) {
                    const intl3 = channel(stateFromStores[37]).intl;
                    const obj17 = {};
                    const _HermesInternal = HermesInternal;
                    obj17.roleName = "@" + verificationRole.name;
                    const formatResult = intl3.format(channel(stateFromStores[37]).t.HbivnU, obj17);
                    if (null === verificationRole.tags.guild_connections) {
                      const obj18 = { type: "button-action", message: formatResult };
                      const intl4 = channel(stateFromStores[37]).intl;
                      obj18.buttonPrimaryText = intl4.string(channel(stateFromStores[37]).t["6Ge2LG"]);
                      obj18.buttonPrimaryOnPress = function handleGetVerificationRole() {
                        let tmp = null != verificationRole;
                        if (tmp) {
                          tmp = null != guildId;
                        }
                        if (tmp) {
                          const result = channel(stateFromStores[30]).openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId);
                          const obj = channel(stateFromStores[30]);
                        }
                      };
                      let obj19 = obj18;
                    } else {
                      obj19 = { type: "simple-action", message: formatResult };
                    }
                    tmp20Result = jsx(guildId(stateFromStores[35]), obj19);
                    const tmp30 = jsx;
                    const tmp32 = guildId(stateFromStores[35]);
                  }
                }
                if (isReadonly) {
                  if (null != guildId) {
                    if (!isForumPostResult) {
                      if (!verificationRole(channel.type)) {
                        if (canCreateThreads) {
                          const obj20 = { type: "button-action" };
                          const intl = channel(tmp22[37]).intl;
                          obj20.message = intl.string(channel(tmp22[37]).t.Yi2xuY);
                          const intl2 = channel(tmp22[37]).intl;
                          obj20.buttonPrimaryText = intl2.string(channel(tmp22[37]).t.rBIGBL);
                          obj20.buttonPrimaryOnPress = function handleCreateThread() {
                            const result = channel(stateFromStores[31]).navigateToThreadCreation(channel, "chat input guard");
                          };
                          tmp20Result = tmp20(tmp21(tmp22[35]), obj20);
                          const tmp21Result = tmp21(tmp22[35]);
                        } else {
                          const obj21 = { guildId, channel };
                          tmp20Result = tmp20(tmp21(tmp22[47]), obj21);
                        }
                      }
                    }
                  }
                }
                return children;
              }
            }
          }
          const obj22 = { showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication };
          tmp20Result = jsx(guildId(stateFromStores[42]), { showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication });
        }
      }
    }
    const obj23 = { channel, isReadonlyAnnouncementsChannel: tmp6 };
    tmp20Result = jsx(guildId(stateFromStores[40]), { channel, isReadonlyAnnouncementsChannel: tmp6 });
  }
};
