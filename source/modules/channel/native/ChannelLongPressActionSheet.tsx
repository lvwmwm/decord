// Module ID: 9138
// Function ID: 71487
// Name: handleVoiceOrStageChannelConnectPress
// Dependencies: [57, 5, 31, 9139, 5724, 1353, 5040, 1352, 5076, 1348, 6759, 1838, 3758, 3767, 1906, 4325, 1849, 653, 1345, 9140, 33, 7557, 1934, 4341, 4130, 689, 1273, 1212, 7607, 8537, 4072, 4140, 4320, 4470, 9142, 9143, 4074, 4337, 10197, 2944, 9048, 1198, 10218, 10225, 8526, 9989, 5072, 3982, 5119, 10227, 10229, 7631, 10180, 10230, 10170, 8777, 5069, 10232, 10234, 5079, 5073, 10235, 7685, 4631, 10130, 10237, 4654, 4629, 4098, 10238, 11837, 4323, 7558, 9453, 7689, 9254, 5048, 5791, 4078, 8456, 7609, 5490, 3830, 5462, 5482, 10220, 566, 1356, 6767, 11838, 1334, 5802, 9172, 3803, 5513, 11839, 10377, 5498, 1553, 10378, 5500, 2]
// Exports: default

// Module 9138 (handleVoiceOrStageChannelConnectPress)
import BellSlashIcon from "BellSlashIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_4140 from "module_4140";
import { SafetyWarningTypes } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_createForOfIteratorHelperLoose";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { ChannelDetailsNavigatorScreens as closure_33 } from "ChannelDetailsNavigatorScreens";
import { jsx } from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
const require = arg1;
function handleVoiceOrStageChannelConnectPress() {
  return _handleVoiceOrStageChannelConnectPress(...arguments);
}
function _handleVoiceOrStageChannelConnectPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function NewBadge() {
  const tmp = _createForOfIteratorHelperLoose();
  return jsx(require(1273) /* Button */.NewTag, { variant: "eyebrow", containerStyle: _createForOfIteratorHelperLoose().tagContainer });
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
  const onClose = channel.onClose;
  let setting;
  let arr13;
  const analyticsLocations = onClose(guildId[83])(onClose(guildId[84]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  let obj = channel(guildId[85]);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  let obj1 = channel(guildId[86]);
  let items = [closure_17];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_17.getGuild(guildId));
  let obj2 = channel(guildId[86]);
  let items1 = [closure_18];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ canManageChannel: outer1_18.can(outer1_30.MANAGE_CHANNELS, channel), canCreateInstantInvite: outer1_18.can(outer1_30.CREATE_INSTANT_INVITE, channel), canConnect: outer1_18.can(outer1_30.CONNECT, channel), canModerateStage: outer1_18.can(channel(guildId[87]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) }));
  ({ canManageChannel, canCreateInstantInvite, canConnect, canModerateStage } = stateFromStoresObject);
  let obj3 = channel(guildId[88]);
  let tmp6 = guildId;
  if (null == guildId) {
    tmp6 = closure_29;
  }
  const optInEnabledForGuild = obj3.useOptInEnabledForGuild(tmp6);
  let obj4 = channel(guildId[86]);
  let items2 = [closure_21];
  const stateFromStoresObject1 = obj4.useStateFromStoresObject(items2, () => {
    const obj = { isOptedIn: outer1_21.isChannelOptedIn(guildId, channel.id) };
    let isChannelOptedInResult = null != channel.parent_id;
    if (isChannelOptedInResult) {
      isChannelOptedInResult = outer1_21.isChannelOptedIn(guildId, channel.parent_id);
    }
    obj.isParentOptedIn = isChannelOptedInResult;
    obj.isPinned = outer1_21.isFavorite(null != guildId ? guildId : outer1_31, channel.id);
    return obj;
  });
  let isPinned = stateFromStoresObject1.isPinned;
  ({ isOptedIn, isParentOptedIn } = stateFromStoresObject1);
  let obj5 = channel(guildId[89]);
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
              let items3 = [channel(guildId[90]).DismissibleContent.PIN_CHANNEL_NEW_BADGE];
            }
            let obj7 = channel(guildId[91]);
            [tmp18, tmp19] = setting(channel(guildId[91]).useSelectedDismissibleContent(items3), 2);
            let tmp17 = setting(channel(guildId[91]).useSelectedDismissibleContent(items3), 2);
            const items4 = [closure_21];
            const stateFromStores1 = channel(guildId[86]).useStateFromStores(items4, () => outer1_21.isChannelMuted(guildId, channel.id));
            let obj8 = channel(guildId[86]);
            const items5 = [closure_9];
            const stateFromStores2 = channel(guildId[86]).useStateFromStores(items5, () => {
              let hasThreadsForChannelResult = null != guildId;
              if (hasThreadsForChannelResult) {
                hasThreadsForChannelResult = outer1_9.hasThreadsForChannel(guildId, channel.id);
              }
              return hasThreadsForChannelResult;
            });
            let obj9 = channel(guildId[86]);
            const items6 = [closure_14];
            const stateFromStores3 = channel(guildId[86]).useStateFromStores(items6, () => outer1_14.isCollapsed(channel.parent_id));
            let obj10 = channel(guildId[86]);
            const items7 = [closure_16];
            const stateFromStores4 = channel(guildId[86]).useStateFromStores(items7, () => outer1_16.isCollapsed(channel.id));
            let obj11 = channel(guildId[86]);
            const items8 = [closure_8];
            const stateFromStores5 = channel(guildId[86]).useStateFromStores(items8, () => outer1_8.isLive(channel.id));
            let obj12 = channel(guildId[86]);
            const tmp31 = onClose(guildId[32])(channel, true);
            const DeveloperMode = channel(guildId[93]).DeveloperMode;
            setting = DeveloperMode.useSetting();
            if (null != stateFromStores) {
              obj = { guild: stateFromStores, size: channel(guildId[94]).GuildIconSizes.LARGE };
              let tmp37 = jsx(onClose(guildId[94]), { guild: stateFromStores, size: channel(guildId[94]).GuildIconSizes.LARGE });
              const tmp41 = onClose(guildId[94]);
            } else {
              obj = { size: channel(guildId[26]).AvatarSizes.LARGE, channel };
              tmp37 = jsx(channel(guildId[26]).Avatar, { size: channel(guildId[26]).AvatarSizes.LARGE, channel });
            }
            let tmp32 = onClose(guildId[92])(channel);
            const items9 = [closure_22];
            const stateFromStores6 = channel(guildId[86]).useStateFromStores(items9, () => outer1_22.getCurrentUser());
            let obj15 = channel(guildId[86]);
            const tmp46 = null != stateFromStores6 && channel.isOwner(stateFromStores6.id);
            const items10 = [closure_21];
            const stateFromStores7 = channel(guildId[86]).useStateFromStores(items10, () => outer1_21.isMessagesFavorite(channel.id));
            let obj17 = channel(guildId[86]);
            const inappropriateConversationsTiers = channel(guildId[95]).useInappropriateConversationsTiers(channel);
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
            let obj18 = channel(guildId[95]);
            const items11 = [closure_7];
            const stateFromStores8 = channel(guildId[86]).useStateFromStores(items11, () => outer1_7.didAgree(channel.id));
            obj1 = { channel, canManageChannel, canCreateInstantInvite, canConnect, developerMode: setting, isMuted: stateFromStores1, isOwner: tmp46, hasThreads: stateFromStores2, isNsfwGated: tmp32, isInCollapsedCategory: stateFromStores3, isCollapsedVoiceChannel: stateFromStores4, isLiveStageChannel: stateFromStores5, canModerateStage, isOptInEnabled: optInEnabledForGuild, isOptedIn, isParentOptedIn, isPinned, canPin: tmp11, pinDCShowNewBadge: tmp18 === channel(guildId[90]).DismissibleContent.PIN_CHANNEL_NEW_BADGE, pinDCMarkAsDismissed: tmp19, isMessagesFavorited: stateFromStores7, canMarkAsTier1InappropriateConversation: tmp53, canMarkAsTier2InappropriateConversation: tmp56, isSpoilerAgreed: stateFromStores8, analyticsLocations, isFavoritesGuild: isFavoritesGuildSelected };
            let isStaffResult;
            let obj19 = channel(guildId[86]);
            if (null != stateFromStores6) {
              isStaffResult = stateFromStores6.isStaff();
            }
            obj1.isStaff = true === isStaffResult;
            obj1.favorites = onClose(guildId[96])(channel, "ChannelLongPressActionSheet");
            arr13 = (function getActionSheetButtons(channel) {
              let canConnect;
              let canCreateInstantInvite;
              let canManageChannel;
              let canMarkAsTier1InappropriateConversation;
              let canMarkAsTier2InappropriateConversation;
              let canModerateStage;
              let canPin;
              let module_4140;
              let closure_7;
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
              ({ isLiveStageChannel, isOptedIn } = channel);
              const isPinned = channel.isPinned;
              const pinDCShowNewBadge = channel.pinDCShowNewBadge;
              ({ pinDCMarkAsDismissed: module_4140, isMessagesFavorited } = channel);
              ({ analyticsLocations: closure_7, isFavoritesGuild } = channel);
              let guildId;
              const items = [];
              let obj = { sectionKey: "dm", buttons: [] };
              ({ canManageChannel, canConnect, isOwner, hasThreads, isNsfwGated, isInCollapsedCategory, isCollapsedVoiceChannel, canModerateStage, isOptInEnabled, isParentOptedIn, canPin, canMarkAsTier1InappropriateConversation, canMarkAsTier2InappropriateConversation, isSpoilerAgreed, isStaff, favorites } = channel);
              if (channel.isDM()) {
                const buttons = obj.buttons;
                obj = {};
                let arr20 = channel;
                let intl = channel(guildId[27]).intl;
                obj.label = intl.string(channel(guildId[27]).t.LYju5J);
                obj.IconComponent = channel(guildId[28]).UserCircleIcon;
                obj.onPress = function onPress() {
                  const obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations: closure_7 };
                  onClose(guildId[29])(obj);
                };
                buttons.push(obj);
                if (!isFavoritesGuild) {
                  const buttons1 = obj.buttons;
                  obj = {};
                  let intl2 = channel(guildId[27]).intl;
                  obj.label = intl2.string(channel(guildId[27]).t.jsvgc3);
                  obj.IconComponent = channel(guildId[30]).UserMinusIcon;
                  obj.onPress = function onPress() {
                    onClose(guildId[31]).closePrivateChannel(channel.id, outer2_20.getCurrentlySelectedChannelId() === channel.id);
                  };
                  buttons1.push(obj);
                }
              }
              let obj1 = { sectionKey: "gdm", buttons: [] };
              const obj2 = { sectionKey: "gdm-destructive", buttons: [] };
              if (channel.isGroupDM()) {
                if (!isFavoritesGuild) {
                  const buttons2 = obj2.buttons;
                  let obj3 = {};
                  let intl3 = channel(guildId[27]).intl;
                  obj3.label = intl3.string(channel(guildId[27]).t["26C4oi"]);
                  obj3.IconComponent = channel(guildId[30]).UserMinusIcon;
                  obj3.isDestructive = true;
                  obj3.onPress = function onPress() {
                    let obj = channel(guildId[32]);
                    const channelName = obj.computeChannelName(channel, outer2_22, outer2_19);
                    const intl = channel(guildId[27]).intl;
                    const intl2 = channel(guildId[27]).intl;
                    let formatResult = intl2.format(channel(guildId[27]).t.SSIVOu, { name: channelName });
                    let formatToPlainStringResult1 = intl.formatToPlainString(channel(guildId[27]).t.hJ5Ap4, { name: channelName });
                    if (channel.isManaged()) {
                      const intl3 = channel(guildId[27]).intl;
                      obj = { name: channelName };
                      formatToPlainStringResult1 = intl3.formatToPlainString(channel(guildId[27]).t.hVGjEW, obj);
                      const intl4 = channel(guildId[27]).intl;
                      obj = { name: channelName };
                      formatResult = intl4.format(channel(guildId[27]).t.IK1Qvs, obj);
                    }
                    const formatToPlainStringResult = intl.formatToPlainString(channel(guildId[27]).t.hJ5Ap4, { name: channelName });
                    const obj1 = { title: formatToPlainStringResult1, body: formatResult };
                    const intl5 = channel(guildId[27]).intl;
                    obj1.confirmText = intl5.string(channel(guildId[27]).t.p89ACt);
                    const intl6 = channel(guildId[27]).intl;
                    obj1.cancelText = intl6.string(channel(guildId[27]).t.gm1Vej);
                    obj1.onConfirm = function onConfirm() {
                      onClose(guildId[31]).closePrivateChannel(outer1_0.id, outer3_20.getCurrentlySelectedChannelId() === outer1_0.id);
                    };
                    onClose(guildId[33]).show(obj1);
                  };
                  buttons2.push(obj3);
                }
                const buttons3 = obj1.buttons;
                const obj4 = {};
                let intl4 = channel(guildId[27]).intl;
                obj4.label = intl4.string(channel(guildId[27]).t["1r5E+m"]);
                obj4.IconComponent = channel(guildId[34]).PencilIcon;
                obj4.onPress = function onPress() {
                  onClose(guildId[35])({ channelId: channel.id });
                };
                buttons3.push(obj4);
                if (isOwner) {
                  const buttons4 = obj1.buttons;
                  const obj5 = {};
                  let intl5 = channel(guildId[27]).intl;
                  obj5.label = intl5.string(channel(guildId[27]).t.OQ9MKu);
                  obj5.IconComponent = channel(guildId[36]).LinkIcon;
                  obj5.onPress = function onPress() {
                    let obj = onClose(guildId[37]);
                    obj = { channelId: channel.id };
                    obj.pushLazy(channel(guildId[22])(guildId[38], guildId.paths), obj);
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
                let intl6 = channel(guildId[27]).intl;
                obj7.label = intl6.string(onClose(guildId[39])["3KruG3"]);
                obj7.IconComponent = channel(guildId[40]).ServerIcon;
                obj7.onPress = function onPress() {
                  channel(guildId[41]).transitionToGuild(channel.guild_id, channel.id);
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
                canCreateInstantInvite = channel.type !== outer1_27.GUILD_CATEGORY;
              }
              if (canCreateInstantInvite) {
                const buttons5 = obj9.buttons;
                const obj10 = {};
                const intl7 = channel(guildId[27]).intl;
                obj10.label = intl7.string(channel(guildId[27]).t.VINpSK);
                obj10.IconComponent = channel(guildId[43]).GroupPlusIcon;
                obj10.onPress = function onPress() {
                  let obj = channel(guildId[44]);
                  obj = { source: outer2_28.CONTEXT_MENU };
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
                    tmp38 = outer1_34(outer1_38, {});
                  }
                  obj11.trailing = tmp38;
                  obj11.onPress = function onPress() {
                    if (pinDCShowNewBadge) {
                      callback(outer2_32.TAKE_ACTION);
                    }
                    let obj = channel(guildId[46]);
                    obj = { section: outer2_25.CHANNEL_ACTION_SHEET };
                    obj.setIsFavorite(guildId, channel.id, !isPinned, obj);
                    if (!isPinned) {
                      const rootNavigationRef = channel(guildId[47]).getRootNavigationRef();
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
                          guildId = undefined;
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
                      const obj3 = channel(guildId[47]);
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
                        let obj = channel(guildId[46]);
                        obj = { section: outer2_25.CHANNEL_ACTION_SHEET };
                        obj.setOptInChannel(guildId, channel.parent_id, false, obj);
                      }
                    };
                    push(obj12);
                  } else {
                    if (isOptedIn) {
                      let string2Result = string2(t2["3zySTA"]);
                    } else {
                      string2Result = string2(t2["9mysCh"]);
                    }
                    obj12.label = string2Result;
                    if (isOptedIn) {
                      let PlusLargeIcon = tmp45(tmp46[48]).XSmallIcon;
                    } else {
                      PlusLargeIcon = tmp45(tmp46[49]).PlusLargeIcon;
                    }
                    obj12.IconComponent = PlusLargeIcon;
                    obj12.onPress = function onPress() {
                      let obj = channel(guildId[46]);
                      obj = { section: outer2_25.CHANNEL_ACTION_SHEET };
                      obj.setOptInChannel(guildId, channel.id, !isOptedIn, obj);
                    };
                    push(obj12);
                  }
                  tmp42 = channel;
                  tmp43 = guildId;
                }
              }
              let isForumLikeChannelResult = outer1_10(channel.type);
              if (!isForumLikeChannelResult) {
                isForumLikeChannelResult = outer1_11(channel.type);
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
                  const result = channel(guildId[50]).copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
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
                    const result = channel(guildId[52]).markAsInappropriateConversation(channel.id, outer2_6.INAPPROPRIATE_CONVERSATION_TIER_1);
                  };
                  buttons9.push(obj15);
                }
                if (canMarkAsTier2InappropriateConversation) {
                  const buttons10 = obj14.buttons;
                  const obj16 = {};
                  const intl13 = channel(guildId[27]).intl;
                  obj16.label = intl13.string(channel(guildId[27]).t["tBw/1i"]);
                  obj16.IconComponent = channel(guildId[51]).WarningIcon;
                  obj16.onPress = function onPress() {
                    const result = channel(guildId[52]).markAsInappropriateConversation(channel.id, outer2_6.INAPPROPRIATE_CONVERSATION_TIER_2);
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
                          channel(guildId[54]).markAsMessageRequest(channel.id);
                        };
                        buttons11.push(obj18);
                      }
                      const buttons12 = obj17.buttons;
                      const obj19 = {};
                      const intl15 = channel(guildId[27]).intl;
                      obj19.label = intl15.string(channel(guildId[27]).t["85YWlY"]);
                      obj19.IconComponent = channel(guildId[53]).InboxIcon;
                      obj19.onPress = function onPress() {
                        const result = channel(guildId[54]).clearMessageRequestState(channel.id);
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
                    let obj = channel(guildId[56]);
                    obj = { section: outer2_25.CHANNEL_ACTION_SHEET, object: outer2_24.MARK_CHANNEL_AS_READ_BUTTON, objectType: outer2_23.ACK_MANUAL };
                    obj.ackChannel(channel, obj);
                  };
                  buttons13.push(obj21);
                }
                if (!outer1_13(channel.type)) {
                  arr20 = outer1_10;
                  arr20 = outer1_10(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
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
                      onClose(guildId[62]).setSection(outer2_26.NOTIFICATIONS);
                      const obj = onClose(guildId[62]);
                      onClose(guildId[62]).open(channel.id);
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
                      onClose(guildId[64])(channel);
                    };
                    arr20 = buttons15.push(obj24);
                  }
                  if (obj23.buttons.length > 0) {
                    arr20 = items.push(obj23);
                  }
                  const obj25 = { sectionKey: "voice", buttons: [] };
                  arr20 = outer1_11;
                  arr20 = outer1_11(channel.type) && !isInCollapsedCategory;
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
                        obj26.label = string6(t6["7vb2cc"]);
                        obj26.IconComponent = arr20(arr20[66]).StageIcon;
                        obj26.onPress = function onPress() {
                          outer2_36(channel);
                        };
                        arr20 = push2(obj26);
                        const buttons17 = obj25.buttons;
                        const obj27 = {};
                        const intl28 = arr20(arr20[27]).intl;
                        obj27.label = intl28.string(arr20(arr20[27]).t.ZXxLQg);
                        obj27.IconComponent = arr20(arr20[67]).ChatIcon;
                        obj27.onPress = function onPress() {
                          let obj = onClose(guildId[68]);
                          obj.hideActionSheet();
                          obj = { channel };
                          onClose(guildId[37]).pushLazy(channel(guildId[22])(guildId[69], guildId.paths), obj);
                          onClose(guildId[70])();
                        };
                        arr20 = buttons17.push(obj27);
                      } else {
                        obj26.label = string6(t6.ZXxLQg);
                        obj26.IconComponent = arr20(arr20[67]).ChatIcon;
                        obj26.onPress = function onPress() {
                          outer2_36(channel);
                          onClose(guildId[71]).updateChatOpen(channel.id, true);
                          onClose(guildId[70])();
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
                        return arr13(tmp)();
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
                      obj29.label = intl30.string(channel(guildId[27]).t["+78Pfm"]);
                      obj29.IconComponent = channel(guildId[73]).FlagIcon;
                      obj29.isDestructive = true;
                      obj29.onPress = function onPress() {
                        const result = channel(guildId[74]).showReportModalForStageChannel(channel);
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
                          onClose(guildId[76]).clearSpoilerAgree(channel.id);
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
                        arr20 = string7(t7["3gUsJb"]);
                      }
                      obj33.label = arr20;
                      arr20 = channel;
                      arr20 = guildId;
                      obj33.IconComponent = channel(guildId[77]).SettingsIcon;
                      obj33.onPress = function onPress() {
                        onClose(guildId[62]).setSection(outer2_26.OVERVIEW);
                        const obj = onClose(guildId[62]);
                        onClose(guildId[62]).open(channel.id);
                      };
                      arr20 = buttons21.push(obj33);
                      arr20 = outer1_10;
                      arr20 = outer1_10(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
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
                          arr20 = string8(t8["fUYU+j"]);
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
                          const obj = onClose(guildId[79]);
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
                        channel(guildId[81]).copy(channel.id);
                        const obj = channel(guildId[81]);
                        channel(guildId[82]).presentIdCopied();
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
                      onClose(guildId[65]).update(channel.id);
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
                      let obj = onClose(guildId[59]);
                      guildId = channel.getGuildId();
                      obj = { muted: !isMuted };
                      const NotificationLabel = channel(guildId[60]).NotificationLabel;
                      const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj, NotificationLabel.muted(!isMuted));
                    };
                    arr20 = buttons25.push(obj37);
                  } else if (!channel.isDM()) {
                    if (!channel.isGroupDM()) {
                      stringResult1 = string4Result;
                      if (channel.isThread()) {
                        const intl21 = channel(guildId[num34]).intl;
                        stringResult1 = intl21.string(channel(guildId[num34]).t["Cq/TzF"]);
                      }
                    }
                  }
                  const intl22 = channel(guildId[num34]).intl;
                  stringResult1 = intl22.string(channel(guildId[num34]).t["s5/5fm"]);
                  string4Result = string4(t4.OYefme);
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
                          let obj = channel(guildId[47]);
                          const rootNavigationRef = obj.getRootNavigationRef();
                          if (tmp) {
                            obj = { channelId: channel.id, initialRouteName: outer2_33.MUTE, source: "channel-long-press-sheet" };
                            rootNavigationRef.navigate("sidebar", obj);
                          }
                        }
                  };
                  buttons26.push(obj38);
                  string4Result1 = string4(t4.tbeRRJ);
                }
                tmp74 = outer1_12(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
              } else {
                const buttons27 = obj9.buttons;
                let obj39 = {};
                const intl11 = channel(guildId[27]).intl;
                let string3 = intl11.string;
                let t3 = channel(guildId[27]).t;
                if (isMessagesFavorited) {
                  let string3Result = string3(t3.vDYmad);
                } else {
                  string3Result = string3(t3["uKw3A+"]);
                }
                obj39.label = string3Result;
                t3 = channel;
                string3 = guildId;
                obj39.IconComponent = channel(guildId[45]).PinIcon;
                obj39.onPress = function onPress() {
                  channel(guildId[46]).setMessagesFavorite(channel.id, !isMessagesFavorited);
                };
                obj39 = buttons27.push(obj39);
              }
            })(obj1);
            let formatToPlainStringResult;
            if (channel.isGroupDM()) {
              let intl = channel(guildId[27]).intl;
              obj2 = { members: channel.recipients.length + 1 };
              formatToPlainStringResult = intl.formatToPlainString(channel(guildId[27]).t.ABMKx3, obj2);
            }
            const items12 = [arr13.length, setting, onClose];
            const effect = React.useEffect(() => {
              if (!tmp) {
                onClose();
              }
            }, items12);
            obj3 = { value: analyticsLocations };
            obj4 = { showGradient: true };
            const tmp63 = onClose(guildId[96])(channel, "ChannelLongPressActionSheet");
            obj4.startExpanded = channel(guildId[98]).isMetaQuest();
            obj5 = { icon: tmp37, title: tmp31, subtitle: formatToPlainStringResult };
            obj4.header = jsx(channel(guildId[99]).ActionSheetIconHeader, { icon: tmp37, title: tmp31, subtitle: formatToPlainStringResult });
            obj4.children = arr13.map((buttons) => {
              let obj = { hasIcons: true };
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
                  icon: outer2_34(channel(guildId[100]).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
                  trailing,
                  onPress() {
                    if (null != onPress) {
                      onPress();
                    }
                    outer2_1();
                  }
                };
                return outer2_34(channel(guildId[100]).ActionSheetRow, obj, arg1);
              });
              return outer1_34(channel(guildId[100]).ActionSheetRow.Group, obj, buttons.sectionKey);
            });
            obj3.children = jsx(channel(guildId[97]).ActionSheet, { showGradient: true });
            return jsx(channel(guildId[83]).AnalyticsLocationProvider, { value: analyticsLocations });
          }
        }
      }
    }
  }
  items3 = [];
}
({ isGuildTextChannelType: closure_10, isGuildVocalChannelType: closure_11, isReadableType: closure_12, isTextChannel: closure_13 } = _callSuper);
({ AnalyticsObjectTypes: closure_23, AnalyticsObjects: closure_24, AnalyticsSections: closure_25, ChannelSettingsSections: closure_26, ChannelTypes: closure_27, InstantInviteSources: closure_28, NULL_STRING_GUILD_ID: closure_29, Permissions: closure_30, ZERO_STRING_GUILD_ID: closure_31 } = ME);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.tagContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("result").fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default function ChannelLongPressActionSheet(arg0) {
  let onClose;
  let require;
  ({ channelId: require, onClose } = arg0);
  let obj = require(stateFromStores[86]);
  const items = [closure_15];
  stateFromStores = obj.useStateFromStores(items, () => outer1_15.getChannel(closure_0));
  const items1 = [stateFromStores, onClose];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores, onClose };
    tmp3 = <ChannelLongPressActionSheetConnected channel={stateFromStores} onClose={onClose} />;
  }
  return tmp3;
};
