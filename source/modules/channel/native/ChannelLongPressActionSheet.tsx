// Module ID: 9093
// Function ID: 71234
// Name: handleVoiceOrStageChannelConnectPress
// Dependencies: []
// Exports: default

// Module 9093 (handleVoiceOrStageChannelConnectPress)
function handleVoiceOrStageChannelConnectPress() {
  return _handleVoiceOrStageChannelConnectPress(...arguments);
}
function _handleVoiceOrStageChannelConnectPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _handleVoiceOrStageChannelConnectPress = obj;
  return obj(...arguments);
}
function NewBadge() {
  const tmp = callback3();
  return jsx(arg1(dependencyMap[26]).NewTag, { variant: "eyebrow", containerStyle: callback3().tagContainer });
}
function ChannelLongPressActionSheetConnected(channel) {
  let canConnect;
  let canCreateInstantInvite;
  let canManageChannel;
  let canModerateStage;
  let isOptedIn;
  let isParentOptedIn;
  let tmp18;
  let tmp19;
  channel = channel.channel;
  const arg1 = channel;
  const onClose = channel.onClose;
  const importDefault = onClose;
  let callback;
  let closure_4;
  const analyticsLocations = importDefault(dependencyMap[83])(importDefault(dependencyMap[84]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  const guildId = channel.getGuildId();
  const dependencyMap = guildId;
  let obj = arg1(dependencyMap[85]);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  let obj1 = arg1(dependencyMap[86]);
  const items = [closure_17];
  const stateFromStores = obj1.useStateFromStores(items, () => guild.getGuild(guildId));
  let obj2 = arg1(dependencyMap[86]);
  const items1 = [closure_18];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ canManageChannel: closure_18.can(constants2.MANAGE_CHANNELS, channel), canCreateInstantInvite: closure_18.can(constants2.CREATE_INSTANT_INVITE, channel), canConnect: closure_18.can(constants2.CONNECT, channel), canModerateStage: closure_18.can(channel(guildId[87]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) }));
  ({ canManageChannel, canCreateInstantInvite, canConnect, canModerateStage } = stateFromStoresObject);
  let obj3 = arg1(dependencyMap[88]);
  let tmp6 = guildId;
  if (null == guildId) {
    tmp6 = closure_29;
  }
  const optInEnabledForGuild = obj3.useOptInEnabledForGuild(tmp6);
  let obj4 = arg1(dependencyMap[86]);
  const items2 = [closure_21];
  const stateFromStoresObject1 = obj4.useStateFromStoresObject(items2, () => {
    const obj = { isOptedIn: closure_21.isChannelOptedIn(guildId, channel.id) };
    let isChannelOptedInResult = null != channel.parent_id;
    if (isChannelOptedInResult) {
      isChannelOptedInResult = closure_21.isChannelOptedIn(guildId, channel.parent_id);
    }
    obj.isParentOptedIn = isChannelOptedInResult;
    obj.isPinned = closure_21.isFavorite(null != guildId ? guildId : closure_31, channel.id);
    return obj;
  });
  const isPinned = stateFromStoresObject1.isPinned;
  ({ isOptedIn, isParentOptedIn } = stateFromStoresObject1);
  let obj5 = arg1(dependencyMap[89]);
  let tmp9 = guildId;
  if (null == guildId) {
    tmp9 = closure_29;
  }
  const canPinChannelsInGuild = obj5.useCanPinChannelsInGuild(tmp9);
  if (!isPinned) {
    if (canPinChannelsInGuild.pinningNewlyAvailable) {
      if (!channel.isThread()) {
        if (!channel.isCategory()) {
          if (null != guildId) {
            if (!isFavoritesGuildSelected) {
              let items3 = [arg1(dependencyMap[90]).DismissibleContent.PIN_CHANNEL_NEW_BADGE];
            }
            const obj7 = arg1(dependencyMap[91]);
            [tmp18, tmp19] = callback(arg1(dependencyMap[91]).useSelectedDismissibleContent(items3), 2);
            const tmp17 = callback(arg1(dependencyMap[91]).useSelectedDismissibleContent(items3), 2);
            const items4 = [closure_21];
            const stateFromStores1 = arg1(dependencyMap[86]).useStateFromStores(items4, () => closure_21.isChannelMuted(guildId, channel.id));
            const obj8 = arg1(dependencyMap[86]);
            const items5 = [closure_9];
            const stateFromStores2 = arg1(dependencyMap[86]).useStateFromStores(items5, () => {
              let hasThreadsForChannelResult = null != guildId;
              if (hasThreadsForChannelResult) {
                hasThreadsForChannelResult = closure_9.hasThreadsForChannel(guildId, channel.id);
              }
              return hasThreadsForChannelResult;
            });
            const obj9 = arg1(dependencyMap[86]);
            const items6 = [closure_14];
            const stateFromStores3 = arg1(dependencyMap[86]).useStateFromStores(items6, () => collapsed.isCollapsed(channel.parent_id));
            const obj10 = arg1(dependencyMap[86]);
            const items7 = [closure_16];
            const stateFromStores4 = arg1(dependencyMap[86]).useStateFromStores(items7, () => collapsed2.isCollapsed(channel.id));
            const obj11 = arg1(dependencyMap[86]);
            const items8 = [closure_8];
            const stateFromStores5 = arg1(dependencyMap[86]).useStateFromStores(items8, () => live.isLive(channel.id));
            const obj12 = arg1(dependencyMap[86]);
            const tmp31 = importDefault(dependencyMap[32])(channel, true);
            const DeveloperMode = arg1(dependencyMap[93]).DeveloperMode;
            const setting = DeveloperMode.useSetting();
            callback = setting;
            if (null != stateFromStores) {
              obj = { guild: stateFromStores, size: arg1(dependencyMap[94]).GuildIconSizes.LARGE };
              let tmp37 = jsx(importDefault(dependencyMap[94]), obj);
              const tmp41 = importDefault(dependencyMap[94]);
            } else {
              obj = { size: arg1(dependencyMap[26]).AvatarSizes.LARGE, channel };
              tmp37 = jsx(arg1(dependencyMap[26]).Avatar, obj);
            }
            const tmp32 = importDefault(dependencyMap[92])(channel);
            const items9 = [closure_22];
            const stateFromStores6 = arg1(dependencyMap[86]).useStateFromStores(items9, () => currentUser.getCurrentUser());
            const obj15 = arg1(dependencyMap[86]);
            const tmp46 = null != stateFromStores6 && channel.isOwner(stateFromStores6.id);
            const items10 = [closure_21];
            const stateFromStores7 = arg1(dependencyMap[86]).useStateFromStores(items10, () => closure_21.isMessagesFavorite(channel.id));
            const obj17 = arg1(dependencyMap[86]);
            const inappropriateConversationsTiers = arg1(dependencyMap[95]).useInappropriateConversationsTiers(channel);
            let isTier1;
            if (null != inappropriateConversationsTiers) {
              isTier1 = inappropriateConversationsTiers.isTier1;
            }
            let tmp53 = null != isTier1;
            if (tmp53) {
              tmp53 = !(null != inappropriateConversationsTiers && inappropriateConversationsTiers.isTier1);
              const tmp54 = null != inappropriateConversationsTiers && inappropriateConversationsTiers.isTier1;
            }
            let isTier2;
            if (null != inappropriateConversationsTiers) {
              isTier2 = inappropriateConversationsTiers.isTier2;
            }
            let tmp56 = null != isTier2;
            if (tmp56) {
              tmp56 = !(null != inappropriateConversationsTiers && inappropriateConversationsTiers.isTier2);
              const tmp57 = null != inappropriateConversationsTiers && inappropriateConversationsTiers.isTier2;
            }
            const obj18 = arg1(dependencyMap[95]);
            const items11 = [closure_7];
            const stateFromStores8 = arg1(dependencyMap[86]).useStateFromStores(items11, () => closure_7.didAgree(channel.id));
            obj1 = { channel, canManageChannel, canCreateInstantInvite, canConnect, developerMode: setting, isMuted: stateFromStores1, isOwner: tmp46, hasThreads: stateFromStores2, isNsfwGated: tmp32, isInCollapsedCategory: stateFromStores3, isCollapsedVoiceChannel: stateFromStores4, isLiveStageChannel: stateFromStores5, canModerateStage, isOptInEnabled: optInEnabledForGuild, isOptedIn, isParentOptedIn, isPinned, canPin: tmp11, pinDCShowNewBadge: tmp18 === arg1(dependencyMap[90]).DismissibleContent.PIN_CHANNEL_NEW_BADGE, pinDCMarkAsDismissed: tmp19, isMessagesFavorited: stateFromStores7, canMarkAsTier1InappropriateConversation: tmp53, canMarkAsTier2InappropriateConversation: tmp56, isSpoilerAgreed: stateFromStores8, analyticsLocations, isFavoritesGuild: isFavoritesGuildSelected };
            let isStaffResult;
            const obj19 = arg1(dependencyMap[86]);
            if (null != stateFromStores6) {
              isStaffResult = stateFromStores6.isStaff();
            }
            obj1.isStaff = true === isStaffResult;
            obj1.favorites = importDefault(dependencyMap[96])(channel, "ChannelLongPressActionSheet");
            const arr13 = function getActionSheetButtons(channel) {
              let canConnect;
              let canCreateInstantInvite;
              let canManageChannel;
              let canMarkAsTier1InappropriateConversation;
              let canMarkAsTier2InappropriateConversation;
              let canModerateStage;
              let canPin;
              let developerMode;
              let favorites;
              let hasThreads;
              let isCollapsedVoiceChannel;
              let isFavoritesGuild;
              let isInCollapsedCategory;
              let isLiveStageChannel;
              let isMessagesFavorited;
              let isMuted;
              let isNsfwGated;
              let isOptInEnabled;
              let isOptedIn;
              let isOwner;
              let isParentOptedIn;
              let isSpoilerAgreed;
              let isStaff;
              channel = channel.channel;
              ({ canCreateInstantInvite, developerMode, isMuted } = channel);
              const onClose = isMuted;
              ({ isLiveStageChannel, isOptedIn } = channel);
              let guildId = isOptedIn;
              const isPinned = channel.isPinned;
              const setting = isPinned;
              const pinDCShowNewBadge = channel.pinDCShowNewBadge;
              ({ pinDCMarkAsDismissed: closure_5, isMessagesFavorited } = channel);
              ({ analyticsLocations: closure_7, isFavoritesGuild } = channel);
              guildId = undefined;
              const items = [];
              let obj = { sectionKey: "dm", buttons: [] };
              ({ canManageChannel, canConnect, isOwner, hasThreads, isNsfwGated, isInCollapsedCategory, isCollapsedVoiceChannel, canModerateStage, isOptInEnabled, isParentOptedIn, canPin, canMarkAsTier1InappropriateConversation, canMarkAsTier2InappropriateConversation, isSpoilerAgreed, isStaff, favorites } = channel);
              if (channel.isDM()) {
                const buttons = obj.buttons;
                obj = {};
                let arr20 = channel;
                const intl = channel(guildId[27]).intl;
                obj.label = intl.string(channel(guildId[27]).t.LYju5J);
                obj.IconComponent = channel(guildId[28]).UserCircleIcon;
                obj.onPress = function onPress() {
                  const obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations: closure_7 };
                  isMuted(isOptedIn[29])(obj);
                };
                buttons.push(obj);
                if (!isFavoritesGuild) {
                  const buttons1 = obj.buttons;
                  obj = {};
                  const intl2 = channel(guildId[27]).intl;
                  obj.label = intl2.string(channel(guildId[27]).t.jsvgc3);
                  obj.IconComponent = channel(guildId[30]).UserMinusIcon;
                  obj.onPress = function onPress() {
                    isMuted(isOptedIn[31]).closePrivateChannel(channel.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === channel.id);
                  };
                  buttons1.push(obj);
                }
              }
              const obj1 = { sectionKey: "gdm", buttons: [] };
              const obj2 = { sectionKey: "gdm-destructive", buttons: [] };
              if (channel.isGroupDM()) {
                if (!isFavoritesGuild) {
                  const buttons2 = obj2.buttons;
                  const obj3 = {};
                  const intl3 = channel(guildId[27]).intl;
                  obj3.label = intl3.string(channel(guildId[27]).t.26C4oi);
                  obj3.IconComponent = channel(guildId[30]).UserMinusIcon;
                  obj3.isDestructive = true;
                  obj3.onPress = function onPress() {
                    let obj = channel(isOptedIn[32]);
                    const channelName = obj.computeChannelName(channel, closure_22, closure_19);
                    const intl = channel(isOptedIn[27]).intl;
                    const intl2 = channel(isOptedIn[27]).intl;
                    let formatResult = intl2.format(channel(isOptedIn[27]).t.SSIVOu, { name: channelName });
                    let formatToPlainStringResult1 = intl.formatToPlainString(channel(isOptedIn[27]).t.hJ5Ap4, { name: channelName });
                    if (channel.isManaged()) {
                      const intl3 = channel(isOptedIn[27]).intl;
                      obj = { name: channelName };
                      formatToPlainStringResult1 = intl3.formatToPlainString(channel(isOptedIn[27]).t.hVGjEW, obj);
                      const intl4 = channel(isOptedIn[27]).intl;
                      obj = { name: channelName };
                      formatResult = intl4.format(channel(isOptedIn[27]).t.IK1Qvs, obj);
                    }
                    const formatToPlainStringResult = intl.formatToPlainString(channel(isOptedIn[27]).t.hJ5Ap4, { name: channelName });
                    const obj1 = { title: formatToPlainStringResult1, body: formatResult };
                    const intl5 = channel(isOptedIn[27]).intl;
                    obj1.confirmText = intl5.string(channel(isOptedIn[27]).t.p89ACt);
                    const intl6 = channel(isOptedIn[27]).intl;
                    obj1.cancelText = intl6.string(channel(isOptedIn[27]).t.gm1Vej);
                    obj1.onConfirm = function onConfirm() {
                      callback(closure_2[31]).closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
                    };
                    isMuted(isOptedIn[33]).show(obj1);
                  };
                  buttons2.push(obj3);
                }
                const buttons3 = obj1.buttons;
                const obj4 = {};
                const intl4 = channel(guildId[27]).intl;
                obj4.label = intl4.string(channel(guildId[27]).t.1r5E+m);
                obj4.IconComponent = channel(guildId[34]).PencilIcon;
                obj4.onPress = function onPress() {
                  isMuted(isOptedIn[35])({ channelId: channel.id });
                };
                buttons3.push(obj4);
                if (isOwner) {
                  const buttons4 = obj1.buttons;
                  const obj5 = {};
                  const intl5 = channel(guildId[27]).intl;
                  obj5.label = intl5.string(channel(guildId[27]).t.OQ9MKu);
                  obj5.IconComponent = channel(guildId[36]).LinkIcon;
                  obj5.onPress = function onPress() {
                    let obj = isMuted(isOptedIn[37]);
                    obj = { channelId: channel.id };
                    obj.pushLazy(channel(isOptedIn[22])(isOptedIn[38], isOptedIn.paths), obj);
                  };
                  buttons4.push(obj5);
                }
              }
              if (obj.buttons.length > 0) {
                items.push(obj);
              }
              let tmp17 = isFavoritesGuild;
              if (isFavoritesGuild) {
                tmp17 = null != channel.guild_id;
              }
              if (tmp17) {
                tmp17 = !channel.isCategory();
              }
              if (tmp17) {
                const obj6 = { sectionKey: "go-to-server" };
                const obj7 = {};
                const intl6 = channel(guildId[27]).intl;
                obj7.label = intl6.string(onClose(guildId[39]).3KruG3);
                obj7.IconComponent = channel(guildId[40]).ServerIcon;
                obj7.onPress = function onPress() {
                  channel(isOptedIn[41]).transitionToGuild(channel.guild_id, channel.id);
                };
                const items1 = [obj7];
                obj6.buttons = items1;
                items.push(obj6);
              }
              const tmp23 = onClose(guildId[42])(favorites);
              if (null != tmp23) {
                const obj8 = { sectionKey: "favorites" };
                const items2 = [tmp23];
                obj8.buttons = items2;
                items.push(obj8);
              }
              guildId = channel.getGuildId();
              const obj9 = { sectionKey: "channel-actions", buttons: [] };
              if (canCreateInstantInvite) {
                canCreateInstantInvite = channel.type !== constants.GUILD_CATEGORY;
              }
              if (canCreateInstantInvite) {
                const buttons5 = obj9.buttons;
                const obj10 = {};
                const intl7 = channel(guildId[27]).intl;
                obj10.label = intl7.string(channel(guildId[27]).t.VINpSK);
                obj10.IconComponent = channel(guildId[43]).GroupPlusIcon;
                obj10.onPress = function onPress() {
                  let obj = channel(isOptedIn[44]);
                  obj = { source: constants5.CONTEXT_MENU };
                  const result = obj.showInstantInviteActionSheet(channel, obj);
                };
                buttons5.push(obj10);
              }
              let isThreadResult = isFavoritesGuild;
              if (!isFavoritesGuild) {
                isThreadResult = null == guildId;
              }
              if (!isThreadResult) {
                isThreadResult = channel.isThread();
              }
              if (!isThreadResult) {
                let isCategoryResult = channel.isCategory();
                if (!isCategoryResult) {
                  isCategoryResult = !isPinned && !canPin;
                  const tmp32 = !isPinned && !canPin;
                }
                if (!isCategoryResult) {
                  const buttons6 = obj9.buttons;
                  const obj11 = {};
                  const intl8 = channel(guildId[27]).intl;
                  const string = intl8.string;
                  const t = channel(guildId[27]).t;
                  if (isPinned) {
                    let stringResult = string(t.M5PWSf);
                  } else {
                    stringResult = string(t.RMpwZu);
                  }
                  obj11.label = stringResult;
                  obj11.IconComponent = channel(guildId[45]).PinIcon;
                  let tmp38;
                  if (pinDCShowNewBadge) {
                    tmp38 = callback5(closure_38, {});
                  }
                  obj11.trailing = tmp38;
                  obj11.onPress = function onPress() {
                    if (pinDCShowNewBadge) {
                      callback(constants6.TAKE_ACTION);
                    }
                    let obj = channel(isOptedIn[46]);
                    obj = { section: constants3.CHANNEL_ACTION_SHEET };
                    obj.setIsFavorite(guildId, channel.id, !isPinned, obj);
                    if (!isPinned) {
                      const rootNavigationRef = channel(isOptedIn[47]).getRootNavigationRef();
                      if (null != rootNavigationRef) {
                        const currentRoute = rootNavigationRef.getCurrentRoute();
                        let name;
                        if (null != currentRoute) {
                          name = currentRoute.name;
                        }
                        const currentRoute1 = rootNavigationRef.getCurrentRoute();
                        if (null != currentRoute1) {
                          const params = currentRoute1.params;
                        }
                        let tmp11 = "guilds" === name;
                        if (tmp11) {
                          let guildId;
                          if (null != params) {
                            guildId = params.guildId;
                          }
                          tmp11 = guildId === guildId;
                        }
                        if (tmp11) {
                          obj = { jumpToChannelId: channel.id };
                          rootNavigationRef.setParams(obj);
                        }
                      }
                      const obj3 = channel(isOptedIn[47]);
                    }
                  };
                  buttons6.push(obj11);
                }
                if (isOptInEnabled) {
                  const buttons7 = obj9.buttons;
                  const push = buttons7.push;
                  const obj12 = {};
                  const intl9 = channel(guildId[27]).intl;
                  const string2 = intl9.string;
                  const t2 = channel(guildId[27]).t;
                  if (isParentOptedIn) {
                    obj12.label = string2(t2.jNphKT);
                    obj12.IconComponent = tmp42(tmp43[48]).XSmallIcon;
                    obj12.onPress = function onPress() {
                      if (null != channel.parent_id) {
                        let obj = channel(isOptedIn[46]);
                        obj = { section: constants3.CHANNEL_ACTION_SHEET };
                        obj.setOptInChannel(guildId, channel.parent_id, false, obj);
                      }
                    };
                    push(obj12);
                  } else {
                    if (isOptedIn) {
                      let string2Result = string2(t2.3zySTA);
                    } else {
                      string2Result = string2(t2.9mysCh);
                    }
                    obj12.label = string2Result;
                    if (isOptedIn) {
                      let PlusLargeIcon = tmp45(tmp46[48]).XSmallIcon;
                    } else {
                      PlusLargeIcon = tmp45(tmp46[49]).PlusLargeIcon;
                    }
                    obj12.IconComponent = PlusLargeIcon;
                    obj12.onPress = function onPress() {
                      let obj = channel(isOptedIn[46]);
                      obj = { section: constants3.CHANNEL_ACTION_SHEET };
                      obj.setOptInChannel(guildId, channel.id, !isOptedIn, obj);
                    };
                    push(obj12);
                  }
                  const tmp42 = channel;
                  const tmp43 = guildId;
                }
              }
              let isForumLikeChannelResult = callback(channel.type);
              if (!isForumLikeChannelResult) {
                isForumLikeChannelResult = callback2(channel.type);
              }
              if (!isForumLikeChannelResult) {
                isForumLikeChannelResult = channel.isForumLikeChannel();
              }
              if (isForumLikeChannelResult) {
                const buttons8 = obj9.buttons;
                const obj13 = {};
                const intl10 = channel(guildId[27]).intl;
                obj13.label = intl10.string(channel(guildId[27]).t.WqhZss);
                obj13.IconComponent = channel(guildId[36]).LinkIcon;
                obj13.isDestructive = false;
                obj13.onPress = function onPress() {
                  const result = channel(isOptedIn[50]).copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
                };
                buttons8.push(obj13);
              }
              if (!tmp54) {
                const obj14 = { sectionKey: "safety-warning-tooling", buttons: [] };
                if (canMarkAsTier1InappropriateConversation) {
                  const buttons9 = obj14.buttons;
                  const obj15 = {};
                  const intl12 = channel(guildId[27]).intl;
                  obj15.label = intl12.string(channel(guildId[27]).t.EuzCET);
                  obj15.IconComponent = channel(guildId[51]).WarningIcon;
                  obj15.onPress = function onPress() {
                    const result = channel(isOptedIn[52]).markAsInappropriateConversation(channel.id, isMessagesFavorited.INAPPROPRIATE_CONVERSATION_TIER_1);
                  };
                  buttons9.push(obj15);
                }
                if (canMarkAsTier2InappropriateConversation) {
                  const buttons10 = obj14.buttons;
                  const obj16 = {};
                  const intl13 = channel(guildId[27]).intl;
                  obj16.label = intl13.string(channel(guildId[27]).t.tBw/1i);
                  obj16.IconComponent = channel(guildId[51]).WarningIcon;
                  obj16.onPress = function onPress() {
                    const result = channel(isOptedIn[52]).markAsInappropriateConversation(channel.id, isMessagesFavorited.INAPPROPRIATE_CONVERSATION_TIER_2);
                  };
                  buttons10.push(obj16);
                }
                if (obj14.buttons.length > 0) {
                  items.push(obj14);
                }
                if (isStaff) {
                  if (developerMode) {
                    if (channel.isDM()) {
                      const obj17 = { sectionKey: "message-request", buttons: [] };
                      if (true !== channel.isMessageRequest) {
                        const buttons11 = obj17.buttons;
                        const obj18 = {};
                        const intl14 = channel(guildId[27]).intl;
                        obj18.label = intl14.string(channel(guildId[27]).t.L6623r);
                        obj18.IconComponent = channel(guildId[53]).InboxIcon;
                        obj18.onPress = function onPress() {
                          channel(isOptedIn[54]).markAsMessageRequest(channel.id);
                        };
                        buttons11.push(obj18);
                      }
                      const buttons12 = obj17.buttons;
                      const obj19 = {};
                      const intl15 = channel(guildId[27]).intl;
                      obj19.label = intl15.string(channel(guildId[27]).t.85YWlY);
                      obj19.IconComponent = channel(guildId[53]).InboxIcon;
                      obj19.onPress = function onPress() {
                        const result = channel(isOptedIn[54]).clearMessageRequestState(channel.id);
                      };
                      buttons12.push(obj19);
                      if (obj17.buttons.length > 0) {
                        items.push(obj17);
                      }
                    }
                  }
                }
                if (obj9.buttons.length > 0) {
                  items.push(obj9);
                }
                const obj20 = { sectionKey: "notifications", buttons: [] };
                if (tmp74) {
                  const buttons13 = obj20.buttons;
                  const obj21 = {};
                  const intl16 = channel(guildId[27]).intl;
                  obj21.label = intl16.string(channel(guildId[27]).t.e6RscS);
                  obj21.IconComponent = channel(guildId[55]).EyeIcon;
                  obj21.onPress = function onPress() {
                    let obj = channel(isOptedIn[56]);
                    obj = { section: constants3.CHANNEL_ACTION_SHEET, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
                    obj.ackChannel(channel, obj);
                  };
                  buttons13.push(obj21);
                }
                if (!callback4(channel.type)) {
                  arr20 = callback;
                  arr20 = callback(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
                  if (arr20) {
                    const buttons14 = obj20.buttons;
                    const obj22 = {};
                    arr20 = channel;
                    arr20 = guildId;
                    const intl24 = channel(guildId[27]).intl;
                    obj22.label = intl24.string(channel(guildId[27]).t.h850Ss);
                    obj22.IconComponent = channel(guildId[61]).ChannelNotificationIcon;
                    obj22.disableColor = true;
                    obj22.onPress = function onPress() {
                      isMuted(isOptedIn[62]).setSection(constants4.NOTIFICATIONS);
                      const obj = isMuted(isOptedIn[62]);
                      isMuted(isOptedIn[62]).open(channel.id);
                    };
                    arr20 = buttons14.push(obj22);
                  }
                  if (obj20.buttons.length > 0) {
                    arr20 = items.push(obj20);
                  }
                  const obj23 = { sectionKey: "threads", buttons: [] };
                  arr20 = channel.isThread() || channel.isForumLikeChannel() || !hasThreads || isNsfwGated;
                  if (!arr20) {
                    const buttons15 = obj23.buttons;
                    const obj24 = {};
                    arr20 = channel;
                    arr20 = guildId;
                    const intl25 = channel(guildId[27]).intl;
                    obj24.label = intl25.string(channel(guildId[27]).t.B2panI);
                    obj24.IconComponent = channel(guildId[63]).ThreadIcon;
                    obj24.onPress = function onPress() {
                      isMuted(isOptedIn[64])(channel);
                    };
                    arr20 = buttons15.push(obj24);
                  }
                  if (obj23.buttons.length > 0) {
                    arr20 = items.push(obj23);
                  }
                  const obj25 = { sectionKey: "voice", buttons: [] };
                  arr20 = callback2;
                  arr20 = callback2(channel.type) && !isInCollapsedCategory;
                  if (!arr20) {
                    if (channel.isGuildVocal()) {
                      const buttons16 = obj25.buttons;
                      const push2 = buttons16.push;
                      const obj26 = {};
                      arr20 = channel;
                      arr20 = guildId;
                      arr20 = channel.isGuildStageVoice();
                      const intl27 = channel(guildId[27]).intl;
                      const string6 = intl27.string;
                      const t6 = channel(guildId[27]).t;
                      if (arr20) {
                        obj26.label = string6(t6.7vb2cc);
                        obj26.IconComponent = arr20(arr20[66]).StageIcon;
                        obj26.onPress = function onPress() {
                          callback2(channel);
                        };
                        arr20 = push2(obj26);
                        const buttons17 = obj25.buttons;
                        const obj27 = {};
                        const intl28 = arr20(arr20[27]).intl;
                        obj27.label = intl28.string(arr20(arr20[27]).t.ZXxLQg);
                        obj27.IconComponent = arr20(arr20[67]).ChatIcon;
                        obj27.onPress = function onPress() {
                          let obj = isMuted(isOptedIn[68]);
                          obj.hideActionSheet();
                          obj = { channel };
                          isMuted(isOptedIn[37]).pushLazy(channel(isOptedIn[22])(isOptedIn[69], isOptedIn.paths), obj);
                          isMuted(isOptedIn[70])();
                        };
                        arr20 = buttons17.push(obj27);
                      } else {
                        obj26.label = string6(t6.ZXxLQg);
                        obj26.IconComponent = arr20(arr20[67]).ChatIcon;
                        obj26.onPress = function onPress() {
                          callback2(channel);
                          isMuted(isOptedIn[71]).updateChatOpen(channel.id, true);
                          isMuted(isOptedIn[70])();
                        };
                        arr20 = push2(obj26);
                      }
                    }
                    arr20 = channel.isGuildStageVoice() && isLiveStageChannel && canModerateStage;
                    if (arr20) {
                      const buttons18 = obj25.buttons;
                      const obj28 = {};
                      arr20 = channel;
                      arr20 = guildId;
                      const intl29 = channel(guildId[27]).intl;
                      obj28.label = intl29.string(channel(guildId[27]).t.saZaRb);
                      obj28.IconComponent = channel(guildId[48]).XSmallIcon;
                      obj28.isDestructive = true;
                      obj28.onPress = function onPress() {
                        // CreateGeneratorClosureLongIndex (0x67)
                        return pinDCShowNewBadge(tmp)();
                      };
                      arr20 = buttons18.push(obj28);
                    }
                    arr20 = channel.isGuildStageVoice() && isLiveStageChannel && canConnect;
                    if (arr20) {
                      const buttons19 = obj25.buttons;
                      const obj29 = {};
                      arr20 = channel;
                      arr20 = guildId;
                      const intl30 = channel(guildId[27]).intl;
                      obj29.label = intl30.string(channel(guildId[27]).t.+78Pfm);
                      obj29.IconComponent = channel(guildId[73]).FlagIcon;
                      obj29.isDestructive = true;
                      obj29.onPress = function onPress() {
                        const result = channel(isOptedIn[74]).showReportModalForStageChannel(channel);
                      };
                      arr20 = buttons19.push(obj29);
                    }
                    if (obj25.buttons.length > 0) {
                      arr20 = items.push(obj25);
                    }
                    if (channel.isSpoilerChannel()) {
                      if (isSpoilerAgreed) {
                        const obj30 = { sectionKey: "spoiler", buttons: [] };
                        const buttons20 = obj30.buttons;
                        const obj31 = {};
                        arr20 = channel;
                        arr20 = guildId;
                        const intl31 = channel(guildId[27]).intl;
                        obj31.label = intl31.string(channel(guildId[27]).t.ix2UVZ);
                        obj31.IconComponent = channel(guildId[75]).EyeSlashIcon;
                        obj31.onPress = function onPress() {
                          isMuted(isOptedIn[76]).clearSpoilerAgree(channel.id);
                        };
                        arr20 = buttons20.push(obj31);
                        arr20 = items.push(obj30);
                      }
                    }
                    const obj32 = { sectionKey: "admin-actions", buttons: [] };
                    if (canManageChannel) {
                      const buttons21 = obj32.buttons;
                      const obj33 = {};
                      arr20 = channel;
                      arr20 = guildId;
                      arr20 = channel.isCategory();
                      const intl32 = channel(guildId[27]).intl;
                      const string7 = intl32.string;
                      const t7 = channel(guildId[27]).t;
                      if (arr20) {
                        arr20 = string7(t7.zdPFs9);
                      } else {
                        arr20 = string7(t7.3gUsJb);
                      }
                      obj33.label = arr20;
                      arr20 = channel;
                      arr20 = guildId;
                      obj33.IconComponent = channel(guildId[77]).SettingsIcon;
                      obj33.onPress = function onPress() {
                        isMuted(isOptedIn[62]).setSection(constants4.OVERVIEW);
                        const obj = isMuted(isOptedIn[62]);
                        isMuted(isOptedIn[62]).open(channel.id);
                      };
                      arr20 = buttons21.push(obj33);
                      arr20 = callback;
                      arr20 = callback(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
                      if (arr20) {
                        const buttons22 = obj32.buttons;
                        let obj34 = {};
                        arr20 = channel;
                        arr20 = guildId;
                        arr20 = channel.isCategory();
                        const intl33 = channel(guildId[27]).intl;
                        const string8 = intl33.string;
                        const t8 = channel(guildId[27]).t;
                        if (arr20) {
                          arr20 = string8(t8.fUYU+j);
                        } else {
                          arr20 = string8(t8.dEaPc4);
                        }
                        obj34.label = arr20;
                        arr20 = channel;
                        arr20 = guildId;
                        if (channel.isCategory()) {
                          let CopyIcon = arr20(arr20[49]).PlusLargeIcon;
                        } else {
                          CopyIcon = arr20(arr20[78]).CopyIcon;
                        }
                        obj34.IconComponent = CopyIcon;
                        obj34.onPress = function onPress() {
                          let type;
                          if (!channel.isCategory()) {
                            type = channel.type;
                          }
                          const guildId = channel.getGuildId();
                          const obj = isMuted(isOptedIn[79]);
                          let id;
                          if (!channel.isCategory()) {
                            id = channel.id;
                          }
                          obj.open(type, guildId, channel.isCategory() ? channel.id : channel.parent_id, id);
                        };
                        obj34 = buttons22.push(obj34);
                      }
                    }
                    if (developerMode) {
                      const buttons23 = obj32.buttons;
                      const obj35 = {};
                      arr20 = channel;
                      arr20 = guildId;
                      const intl34 = channel(guildId[27]).intl;
                      obj35.label = intl34.string(channel(guildId[27]).t.gFHI3k);
                      obj35.IconComponent = channel(guildId[80]).IdIcon;
                      obj35.onPress = function onPress() {
                        channel(isOptedIn[81]).copy(channel.id);
                        const obj = channel(isOptedIn[81]);
                        channel(isOptedIn[82]).presentIdCopied();
                      };
                      arr20 = buttons23.push(obj35);
                    }
                    if (obj32.buttons.length > 0) {
                      arr20 = items.push(obj32);
                    }
                    if (obj1.buttons.length > 0) {
                      arr20 = items.push(obj1);
                    }
                    if (obj2.buttons.length > 0) {
                      arr20 = items.push(obj2);
                    }
                    return items;
                  } else {
                    const buttons24 = obj25.buttons;
                    let obj36 = {};
                    arr20 = channel;
                    arr20 = guildId;
                    const intl26 = channel(guildId[27]).intl;
                    let string5 = intl26.string;
                    let t5 = channel(guildId[27]).t;
                    if (isCollapsedVoiceChannel) {
                      arr20 = string5(t5.JYF2Oa);
                    } else {
                      arr20 = string5(t5.LxzNiu);
                    }
                    obj36.label = arr20;
                    t5 = channel;
                    string5 = guildId;
                    obj36.IconComponent = channel(guildId[28]).UserCircleIcon;
                    obj36.onPress = function onPress() {
                      isMuted(isOptedIn[65]).update(channel.id);
                    };
                    obj36 = buttons24.push(obj36);
                  }
                }
                let num34 = 27;
                const intl17 = channel(guildId[27]).intl;
                const string4 = intl17.string;
                const t4 = channel(guildId[27]).t;
                if (isMuted) {
                  if (channel.isCategory()) {
                    const intl23 = channel(guildId[num34]).intl;
                    let stringResult1 = intl23.string(channel(guildId[num34]).t.olaBeG);
                    const buttons25 = obj20.buttons;
                    const obj37 = { label: stringResult1 };
                    arr20 = channel;
                    num34 = guildId;
                    obj37.IconComponent = channel(guildId[58]).BellIcon;
                    obj37.onPress = function onPress() {
                      let obj = isMuted(isOptedIn[59]);
                      const guildId = channel.getGuildId();
                      obj = { muted: !isMuted };
                      const NotificationLabel = channel(isOptedIn[60]).NotificationLabel;
                      const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj, NotificationLabel.muted(!isMuted));
                    };
                    arr20 = buttons25.push(obj37);
                  } else if (!channel.isDM()) {
                    if (!channel.isGroupDM()) {
                      stringResult1 = string4Result;
                      if (channel.isThread()) {
                        const intl21 = channel(guildId[num34]).intl;
                        stringResult1 = intl21.string(channel(guildId[num34]).t.Cq/TzF);
                      }
                    }
                  }
                  const intl22 = channel(guildId[num34]).intl;
                  stringResult1 = intl22.string(channel(guildId[num34]).t.s5/5fm);
                  const string4Result = string4(t4.OYefme);
                } else {
                  if (channel.isCategory()) {
                    const intl20 = channel(guildId[num34]).intl;
                    let stringResult2 = intl20.string(channel(guildId[num34]).t.pNMCg2);
                  } else {
                    if (!channel.isDM()) {
                      if (!channel.isGroupDM()) {
                        stringResult2 = string4Result1;
                        if (channel.isThread()) {
                          const intl18 = channel(guildId[num34]).intl;
                          stringResult2 = intl18.string(channel(guildId[num34]).t.bUUd8q);
                        }
                      }
                    }
                    const intl19 = channel(guildId[num34]).intl;
                    stringResult2 = intl19.string(channel(guildId[num34]).t.LO3kaK);
                  }
                  const buttons26 = obj20.buttons;
                  const obj38 = {
                    label: stringResult2,
                    IconComponent: channel(guildId[57]).BellSlashIcon,
                    onPress() {
                          let obj = channel(isOptedIn[47]);
                          const rootNavigationRef = obj.getRootNavigationRef();
                          if (tmp) {
                            obj = { channelId: channel.id, initialRouteName: constants7.MUTE, source: "channel-long-press-sheet" };
                            rootNavigationRef.navigate("sidebar", obj);
                          }
                        }
                  };
                  buttons26.push(obj38);
                  const string4Result1 = string4(t4.tbeRRJ);
                }
                const tmp74 = callback3(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
              } else {
                const buttons27 = obj9.buttons;
                let obj39 = {};
                const intl11 = channel(guildId[27]).intl;
                let string3 = intl11.string;
                let t3 = channel(guildId[27]).t;
                if (isMessagesFavorited) {
                  let string3Result = string3(t3.vDYmad);
                } else {
                  string3Result = string3(t3.uKw3A+);
                }
                obj39.label = string3Result;
                t3 = channel;
                string3 = guildId;
                obj39.IconComponent = channel(guildId[45]).PinIcon;
                obj39.onPress = function onPress() {
                  channel(isOptedIn[46]).setMessagesFavorite(channel.id, !isMessagesFavorited);
                };
                obj39 = buttons27.push(obj39);
              }
            }(obj1);
            closure_4 = arr13;
            let formatToPlainStringResult;
            if (channel.isGroupDM()) {
              const intl = arg1(dependencyMap[27]).intl;
              obj2 = { members: channel.recipients.length + 1 };
              formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[27]).t.ABMKx3, obj2);
            }
            const items12 = [arr13.length, setting, onClose];
            const effect = React.useEffect(() => {
              if (!tmp) {
                onClose();
              }
            }, items12);
            obj3 = { value: analyticsLocations };
            obj4 = { showGradient: true };
            const tmp63 = importDefault(dependencyMap[96])(channel, "ChannelLongPressActionSheet");
            obj4.startExpanded = arg1(dependencyMap[98]).isMetaQuest();
            obj5 = { icon: tmp37, title: tmp31, subtitle: formatToPlainStringResult };
            obj4.header = jsx(arg1(dependencyMap[99]).ActionSheetIconHeader, obj5);
            obj4.children = arr13.map((buttons) => {
              const obj = { hasIcons: true };
              buttons = buttons.buttons;
              obj.children = buttons.map((onPress) => {
                let IconComponent;
                let disableColor;
                let iconStyle;
                let label;
                let trailing;
                onPress = onPress.onPress;
                let str = "default";
                ({ label, IconComponent, iconStyle, trailing, disableColor } = onPress);
                if (onPress.isDestructive) {
                  str = "danger";
                }
                const obj = {
                  variant: str,
                  label,
                  icon: callback(onPress(closure_2[100]).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
                  trailing,
                  onPress() {
                    if (null != onPress) {
                      onPress();
                    }
                    callback();
                  }
                };
                return callback(onPress(closure_2[100]).ActionSheetRow, obj, arg1);
              });
              return callback5(channel(guildId[100]).ActionSheetRow.Group, obj, buttons.sectionKey);
            });
            obj3.children = jsx(arg1(dependencyMap[97]).ActionSheet, obj4);
            return jsx(arg1(dependencyMap[83]).AnalyticsLocationProvider, obj3);
          }
        }
      }
    }
  }
  items3 = [];
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const SafetyWarningTypes = arg1(dependencyMap[3]).SafetyWarningTypes;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ isGuildTextChannelType: closure_10, isGuildVocalChannelType: closure_11, isReadableType: closure_12, isTextChannel: closure_13 } = arg1(dependencyMap[7]));
let closure_14 = importDefault(dependencyMap[8]);
let closure_15 = importDefault(dependencyMap[9]);
let closure_16 = importDefault(dependencyMap[10]);
let closure_17 = importDefault(dependencyMap[11]);
let closure_18 = importDefault(dependencyMap[12]);
let closure_19 = importDefault(dependencyMap[13]);
let closure_20 = importDefault(dependencyMap[14]);
let closure_21 = importDefault(dependencyMap[15]);
let closure_22 = importDefault(dependencyMap[16]);
const tmp2 = arg1(dependencyMap[7]);
({ AnalyticsObjectTypes: closure_23, AnalyticsObjects: closure_24, AnalyticsSections: closure_25, ChannelSettingsSections: closure_26, ChannelTypes: closure_27, InstantInviteSources: closure_28, NULL_STRING_GUILD_ID: closure_29, Permissions: closure_30, ZERO_STRING_GUILD_ID: closure_31 } = arg1(dependencyMap[17]));
const ContentDismissActionType = arg1(dependencyMap[18]).ContentDismissActionType;
let closure_33 = arg1(dependencyMap[19]).ChannelDetailsNavigatorScreens;
const jsx = arg1(dependencyMap[20]).jsx;
let obj = arg1(dependencyMap[24]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[25]).colors.BADGE_BACKGROUND_DEFAULT };
obj.tagContainer = obj;
let closure_35 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[17]);
const result = arg1(dependencyMap[101]).fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default function ChannelLongPressActionSheet(arg0) {
  let onClose;
  ({ channelId: closure_0, onClose } = arg0);
  const importDefault = onClose;
  let obj = arg1(dependencyMap[86]);
  const items = [closure_15];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_0));
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, onClose];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, onClose };
    tmp3 = <ChannelLongPressActionSheetConnected {...obj} />;
  }
  return tmp3;
};
