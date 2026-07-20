// Module ID: 11446
// Function ID: 89199
// Name: ChatInputGuardWrapper
// Dependencies: []
// Exports: default

// Module 11446 (ChatInputGuardWrapper)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const isThread = arg1(dependencyMap[2]).isThread;
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const TextAreaCta = arg1(dependencyMap[8]).TextAreaCta;
({ AnalyticEvents: closure_11, ChannelTypes: closure_12, JoinGuildSources: closure_13, VerificationCriteria: closure_14 } = arg1(dependencyMap[9]));
let closure_15 = arg1(dependencyMap[10]).PHONE_VERIFICATION_MODAL_KEY;
const jsx = arg1(dependencyMap[11]).jsx;
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[48]).fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardWrapper.tsx");

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
  const arg1 = channel;
  ({ screenIndex, canSendMessages, canCreateThreads, children, isReadonly, onJumpToPresent } = channel);
  let guildId = channel.getGuildId();
  const importDefault = guildId;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel(stateFromStores[13]).guildHasVerificationGate(guild.getGuild(guildId)));
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[12]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => check.getCheck(guildId));
  const notClaimed = stateFromStores1.notClaimed;
  let closure_3 = notClaimed;
  const verificationRole = stateFromStores1.verificationRole;
  const isThread = verificationRole;
  ({ notPhoneVerified, notEmailVerified, newMember, newAccount, memberDeadline, accountDeadline, missingVerificationRole } = stateFromStores1);
  let obj2 = arg1(dependencyMap[12]);
  const items2 = [closure_9, closure_5];
  const items3 = [guildId, stateFromStores, notClaimed];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    const currentUser = currentUser.getCurrentUser();
    let member = null;
    if (null != currentUser) {
      member = null;
      if (null != guildId) {
        member = member.getMember(guildId, currentUser.id);
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
    const obj2 = channel(stateFromStores[14]);
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
  const tmp7 = importDefault(dependencyMap[17])(obj);
  let obj4 = arg1(dependencyMap[18]);
  const tmp5 = importDefault(dependencyMap[16])(user, channel);
  let obj5 = arg1(dependencyMap[19]);
  const tmp8 = obj4.useIsMessageRequest(channel.id) && channel.isPrivate();
  const tmp9 = obj5.useIsSpamMessageRequest(channel.id) && channel.isPrivate();
  let obj6 = arg1(dependencyMap[12]);
  const items4 = [closure_8];
  const items5 = [channel];
  const stateFromStores2 = obj6.useStateFromStores(items4, () => {
    let isDMResult = channel.isDM();
    if (isDMResult) {
      isDMResult = blocked.isBlocked(channel.getRecipientId());
    }
    return isDMResult;
  }, items5);
  let obj7 = arg1(dependencyMap[12]);
  const items6 = [closure_3];
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
  let obj8 = arg1(dependencyMap[20]);
  const isForumPostResult = channel.isForumPost();
  ({ showLinkedLobbyApplicationLoadingIndicator, requiredLinkedLobbyApplication } = importDefault(dependencyMap[21])(channel.linkedLobby));
  importDefault(dependencyMap[22])(channel.id);
  if (isLurking) {
    if (stateFromStoresObject1.lurkingSourceType !== constants2.DIRECTORY_ENTRY) {
      if (obj8.useMobileLurkerServerPreview("ChatInputGuardWrapper").enabled) {
        if (null != guildId) {
          guildId = importDefault;
          guildId = dependencyMap;
          obj = { guildId };
          let tmp20Result = jsx(importDefault(dependencyMap[32]), obj);
        }
        guildId = jsx;
        guildId = arg1;
        guildId = dependencyMap;
        obj1 = { screenIndex, channelId: channel.id, onJumpToPresent, children: tmp20Result };
        return jsx(arg1(dependencyMap[35]).ChatInputGuardContainer, obj1);
      }
    }
  }
  if (tmp8) {
    obj2 = { channel };
    tmp20Result = jsx(importDefault(dependencyMap[33]), obj2);
  } else if (tmp9) {
    const obj3 = { channel };
    tmp20Result = jsx(importDefault(dependencyMap[34]), obj3);
  } else if (channel.isSystemDM()) {
    obj4 = { type: "simple-action", icon: jsx(arg1(dependencyMap[36]).CircleInformationIcon, {}) };
    const intl14 = arg1(dependencyMap[37]).intl;
    obj4.message = intl14.string(arg1(dependencyMap[37]).t.Bt2N7D);
    const intl15 = arg1(dependencyMap[37]).intl;
    obj4.subtext = intl15.string(arg1(dependencyMap[37]).t.n/Vzkw);
    tmp20Result = jsx(importDefault(dependencyMap[35]), obj4);
    const tmp91 = importDefault(dependencyMap[35]);
  } else if (tmp5) {
    tmp20Result = jsx(importDefault(dependencyMap[38]), {});
  } else {
    if (tmp6) {
      if (null != tmp7) {
        obj5 = { pendingGameProfileReturn: tmp7 };
        tmp20Result = jsx(importDefault(dependencyMap[39]), obj5);
      }
    }
    if (!isLurking) {
      if (!tmp6) {
        if (stateFromStores2) {
          obj6 = { type: "button-action" };
          const intl12 = arg1(dependencyMap[37]).intl;
          obj6.message = intl12.string(arg1(dependencyMap[37]).t.9T6N5/);
          const intl13 = arg1(dependencyMap[37]).intl;
          obj6.buttonPrimaryText = intl13.string(arg1(dependencyMap[37]).t.XyHpKH);
          obj6.buttonPrimaryOnPress = function handleUnblock() {
            if (channel.isDM()) {
              let obj = guildId(stateFromStores[23]);
              obj = { cta_type: constants.UNBLOCK };
              obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
              guildId(stateFromStores[24]).unblockUser(channel.getRecipientId());
              const obj3 = guildId(stateFromStores[24]);
            }
          };
          tmp20Result = jsx(importDefault(dependencyMap[35]), obj6);
          const tmp77 = importDefault(dependencyMap[35]);
        } else if (showMemberVerificationModal) {
          obj7 = { guildId };
          tmp20Result = jsx(importDefault(dependencyMap[41]), obj7);
        } else {
          if (!showLinkedLobbyApplicationLoadingIndicator) {
            if (null == requiredLinkedLobbyApplication) {
              if (null != communicationDisabledGuildMember) {
                obj8 = { guildMember: communicationDisabledGuildMember };
                tmp20Result = jsx(importDefault(dependencyMap[43]), obj8);
              } else if (automodUserProfileQuarantined) {
                const obj9 = { guildId };
                tmp20Result = jsx(importDefault(dependencyMap[44]), obj9);
              } else if (notClaimed) {
                const obj10 = { type: "simple-action", icon: jsx(arg1(dependencyMap[45]).ChatXIcon, {}) };
                const intl11 = arg1(dependencyMap[37]).intl;
                obj10.message = intl11.string(arg1(dependencyMap[37]).t.Eg3/c9);
                tmp20Result = jsx(importDefault(dependencyMap[35]), obj10);
                const tmp60 = importDefault(dependencyMap[35]);
              } else if (notPhoneVerified) {
                const obj11 = { type: "button-action" };
                const intl9 = arg1(dependencyMap[37]).intl;
                obj11.message = intl9.string(arg1(dependencyMap[37]).t.2dThMM);
                const intl10 = arg1(dependencyMap[37]).intl;
                obj11.buttonPrimaryText = intl10.string(arg1(dependencyMap[37]).t.50gfOv);
                obj11.buttonPrimaryOnPress = function handleVerifyPhone() {
                  let obj = guildId(stateFromStores[23]);
                  obj = { cta_type: constants.VERIFY_PHONE };
                  obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
                  obj = {};
                  const obj3 = guildId(stateFromStores[25]);
                  obj.reason = channel(stateFromStores[28]).ChangePhoneReason.GUILD_PHONE_REQUIRED;
                  obj3.pushLazy(channel(stateFromStores[27])(stateFromStores[26], stateFromStores.paths), obj, closure_15);
                };
                tmp20Result = jsx(importDefault(dependencyMap[35]), obj11);
                const tmp55 = importDefault(dependencyMap[35]);
              } else if (notEmailVerified) {
                const obj12 = { type: "button-action" };
                const intl7 = arg1(dependencyMap[37]).intl;
                obj12.message = intl7.string(arg1(dependencyMap[37]).t.FkGPS5);
                const intl8 = arg1(dependencyMap[37]).intl;
                obj12.buttonPrimaryText = intl8.string(arg1(dependencyMap[37]).t.lm1UKt);
                obj12.buttonPrimaryOnPress = function handleVerifyEmail() {
                  let obj = guildId(stateFromStores[23]);
                  obj = { cta_type: constants.VERIFY_EMAIL };
                  obj.trackWithMetadata(constants2.TEXT_AREA_CTA_CLICKED, obj);
                  guildId(stateFromStores[29]).open();
                };
                tmp20Result = jsx(importDefault(dependencyMap[35]), obj12);
                const tmp50 = importDefault(dependencyMap[35]);
              } else if (newMember) {
                const obj13 = { type: "simple-action", icon: jsx(arg1(dependencyMap[46]).CalendarIcon, {}) };
                const intl6 = arg1(dependencyMap[37]).intl;
                const obj14 = { min: constants3.MEMBER_AGE };
                obj13.message = intl6.formatToPlainString(arg1(dependencyMap[37]).t.IH7RMF, obj14);
                obj13.countdown = memberDeadline;
                tmp20Result = jsx(importDefault(dependencyMap[35]), obj13);
                const tmp44 = importDefault(dependencyMap[35]);
              } else if (newAccount) {
                const obj15 = { type: "simple-action", icon: jsx(arg1(dependencyMap[46]).CalendarIcon, {}) };
                const intl5 = arg1(dependencyMap[37]).intl;
                const obj16 = { min: constants3.ACCOUNT_AGE };
                obj15.message = intl5.formatToPlainString(arg1(dependencyMap[37]).t.2JA2GH, obj16);
                obj15.countdown = accountDeadline;
                tmp20Result = jsx(importDefault(dependencyMap[35]), obj15);
                const tmp38 = importDefault(dependencyMap[35]);
              } else {
                if (missingVerificationRole) {
                  if (null != verificationRole) {
                    const intl3 = arg1(dependencyMap[37]).intl;
                    const obj17 = {};
                    const _HermesInternal = HermesInternal;
                    obj17.roleName = "@" + verificationRole.name;
                    const formatResult = intl3.format(arg1(dependencyMap[37]).t.HbivnU, obj17);
                    if (null === verificationRole.tags.guild_connections) {
                      const obj18 = { type: "button-action", message: formatResult };
                      const intl4 = arg1(dependencyMap[37]).intl;
                      obj18.buttonPrimaryText = intl4.string(arg1(dependencyMap[37]).t.6Ge2LG);
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
                    tmp20Result = jsx(importDefault(dependencyMap[35]), obj19);
                    const tmp30 = jsx;
                    const tmp32 = importDefault(dependencyMap[35]);
                  }
                }
                if (isReadonly) {
                  if (null != guildId) {
                    if (!isForumPostResult) {
                      if (!isThread(channel.type)) {
                        if (canCreateThreads) {
                          const obj20 = { type: "button-action" };
                          const intl = arg1(tmp22[37]).intl;
                          obj20.message = intl.string(arg1(tmp22[37]).t.Yi2xuY);
                          const intl2 = arg1(tmp22[37]).intl;
                          obj20.buttonPrimaryText = intl2.string(arg1(tmp22[37]).t.rBIGBL);
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
          tmp20Result = jsx(importDefault(dependencyMap[42]), obj22);
        }
      }
    }
    const obj23 = { channel, isReadonlyAnnouncementsChannel: tmp6 };
    tmp20Result = jsx(importDefault(dependencyMap[40]), obj23);
  }
};
