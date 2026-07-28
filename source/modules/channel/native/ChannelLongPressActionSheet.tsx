// Module ID: 9074
// Function ID: 71124
// Name: handleVoiceOrStageChannelConnectPress
// Dependencies: [57, 5, 31, 9075, 7705, 1353, 5075, 1352, 5111, 1348, 5762, 1838, 3793, 3802, 1907, 4360, 1850, 653, 1345, 9076, 33, 6689, 1935, 4376, 4165, 689, 1273, 1212, 6753, 8335, 4107, 4175, 4355, 4505, 9078, 9079, 4109, 4372, 10169, 2945, 8980, 1198, 10190, 10192, 10201, 8324, 9957, 5107, 4017, 5153, 10203, 7606, 10152, 10204, 10142, 8709, 5104, 10206, 10208, 5113, 5108, 10209, 7663, 4666, 10102, 10211, 4689, 4664, 4133, 10212, 11853, 4358, 6690, 9417, 7669, 9190, 5083, 8987, 4113, 8252, 6755, 5525, 3865, 5497, 5517, 10194, 566, 1356, 5771, 11854, 1334, 8417, 9108, 3838, 5548, 11855, 10351, 11856, 5533, 1553, 10352, 5535, 2]
// Exports: default

// Module 9074 (handleVoiceOrStageChannelConnectPress)
import BellSlashIcon from "BellSlashIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_4175 from "module_4175";
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
              let tmp41 = onClose(guildId[94]);
            } else {
              obj = { size: channel(guildId[26]).AvatarSizes.LARGE, channel };
              tmp37 = jsx(channel(guildId[26]).Avatar, { size: channel(guildId[26]).AvatarSizes.LARGE, channel });
            }
            const tmp32 = onClose(guildId[92])(channel);
            const items9 = [closure_22];
            const stateFromStores6 = channel(guildId[86]).useStateFromStores(items9, () => outer1_22.getCurrentUser());
            let obj15 = channel(guildId[86]);
            let tmp46 = null != stateFromStores6 && channel.isOwner(stateFromStores6.id);
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
            let obj19 = channel(guildId[86]);
            obj1 = { channel, canManageChannel, canCreateInstantInvite, canConnect, developerMode: setting, isMuted: stateFromStores1, isOwner: tmp46, hasThreads: stateFromStores2, isNsfwGated: tmp32, isInCollapsedCategory: stateFromStores3, isCollapsedVoiceChannel: stateFromStores4, isLiveStageChannel: stateFromStores5, canModerateStage, isOptInEnabled: optInEnabledForGuild, isOptedIn, isParentOptedIn, isPinned, canPin: tmp11, pinDCShowNewBadge: tmp18 === channel(guildId[90]).DismissibleContent.PIN_CHANNEL_NEW_BADGE, pinDCMarkAsDismissed: tmp19, isMessagesFavorited: stateFromStores7, canMarkAsTier1InappropriateConversation: tmp53, canMarkAsTier2InappropriateConversation: tmp56, isSpoilerAgreed: stateFromStores8, analyticsLocations, isFavoritesGuild: isFavoritesGuildSelected };
            let isStaffResult;
            const tmp63 = onClose(guildId[96])(channel, "ChannelLongPressActionSheet");
            if (null != stateFromStores6) {
              isStaffResult = stateFromStores6.isStaff();
            }
            obj1.isStaff = true === isStaffResult;
            obj1.favorites = tmp63;
            obj1.favoritesCategoryAddAction = onClose(guildId[97])(channel);
            arr13 = (function getActionSheetButtons(channel) {
              let canConnect;
              let canCreateInstantInvite;
              let canManageChannel;
              let canMarkAsTier1InappropriateConversation;
              let canMarkAsTier2InappropriateConversation;
              let canModerateStage;
              let canPin;
              let module_4175;
              let closure_7;
              let developerMode;
              let favorites;
              let favoritesCategoryAddAction;
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
              ({ pinDCMarkAsDismissed: module_4175, isMessagesFavorited } = channel);
              ({ analyticsLocations: closure_7, isFavoritesGuild, favoritesCategoryAddAction } = channel);
              let guildId;
              const items = [];
              let obj = { sectionKey: "dm", buttons: [] };
              ({ canManageChannel, canConnect, isOwner, hasThreads, isNsfwGated, isInCollapsedCategory, isCollapsedVoiceChannel, canModerateStage, isOptInEnabled, isParentOptedIn, canPin, canMarkAsTier1InappropriateConversation, canMarkAsTier2InappropriateConversation, isSpoilerAgreed, isStaff, favorites } = channel);
              if (channel.isDM()) {
                const buttons = obj.buttons;
                obj = {};
                let arr21 = channel;
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
              if (null != favoritesCategoryAddAction) {
                const obj8 = { sectionKey: "favorites-add-to-category" };
                const obj9 = { label: favoritesCategoryAddAction.label, IconComponent: channel(guildId[42]).PlusLargeIcon, onPress: favoritesCategoryAddAction.perform };
                const items2 = [obj9];
                obj8.buttons = items2;
                items.push(obj8);
              }
              const tmp26 = onClose(guildId[43])(favorites);
              if (null != tmp26) {
                const obj10 = { sectionKey: "favorites" };
                const items3 = [tmp26];
                obj10.buttons = items3;
                items.push(obj10);
              }
              guildId = channel.getGuildId();
              const obj11 = { sectionKey: "channel-actions", buttons: [] };
              if (canCreateInstantInvite) {
                canCreateInstantInvite = channel.type !== outer1_27.GUILD_CATEGORY;
              }
              if (canCreateInstantInvite) {
                const buttons5 = obj11.buttons;
                const obj12 = {};
                const intl7 = channel(guildId[27]).intl;
                obj12.label = intl7.string(channel(guildId[27]).t.VINpSK);
                obj12.IconComponent = channel(guildId[44]).GroupPlusIcon;
                obj12.onPress = function onPress() {
                  let obj = channel(guildId[45]);
                  obj = { source: outer2_28.CONTEXT_MENU };
                  const result = obj.showInstantInviteActionSheet(channel, obj);
                };
                buttons5.push(obj12);
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
                  const tmp35 = !isPinned && !canPin;
                }
                if (!isCategoryResult) {
                  const buttons6 = obj11.buttons;
                  const obj13 = {};
                  const intl8 = channel(guildId[27]).intl;
                  const string = intl8.string;
                  const t = channel(guildId[27]).t;
                  if (isPinned) {
                    let stringResult = string(t.M5PWSf);
                  } else {
                    stringResult = string(t.RMpwZu);
                  }
                  obj13.label = stringResult;
                  obj13.IconComponent = channel(guildId[46]).PinIcon;
                  let tmp41;
                  if (pinDCShowNewBadge) {
                    tmp41 = outer1_34(outer1_38, {});
                  }
                  obj13.trailing = tmp41;
                  obj13.onPress = function onPress() {
                    if (pinDCShowNewBadge) {
                      callback(outer2_32.TAKE_ACTION);
                    }
                    let obj = channel(guildId[47]);
                    obj = { section: outer2_25.CHANNEL_ACTION_SHEET };
                    obj.setIsFavorite(guildId, channel.id, !isPinned, obj);
                    if (!isPinned) {
                      const rootNavigationRef = channel(guildId[48]).getRootNavigationRef();
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
                      const obj3 = channel(guildId[48]);
                    }
                  };
                  buttons6.push(obj13);
                }
                if (isOptInEnabled) {
                  const buttons7 = obj11.buttons;
                  const push = buttons7.push;
                  const obj14 = {};
                  const intl9 = channel(guildId[27]).intl;
                  const string2 = intl9.string;
                  const t2 = channel(guildId[27]).t;
                  if (isParentOptedIn) {
                    obj14.label = string2(t2.jNphKT);
                    obj14.IconComponent = tmp45(tmp46[49]).XSmallIcon;
                    obj14.onPress = function onPress() {
                      if (null != channel.parent_id) {
                        let obj = channel(guildId[47]);
                        obj = { section: outer2_25.CHANNEL_ACTION_SHEET };
                        obj.setOptInChannel(guildId, channel.parent_id, false, obj);
                      }
                    };
                    push(obj14);
                  } else {
                    if (isOptedIn) {
                      let string2Result = string2(t2["3zySTA"]);
                    } else {
                      string2Result = string2(t2["9mysCh"]);
                    }
                    obj14.label = string2Result;
                    if (isOptedIn) {
                      let PlusLargeIcon = tmp48(tmp49[49]).XSmallIcon;
                    } else {
                      PlusLargeIcon = tmp48(tmp49[42]).PlusLargeIcon;
                    }
                    obj14.IconComponent = PlusLargeIcon;
                    obj14.onPress = function onPress() {
                      let obj = channel(guildId[47]);
                      obj = { section: outer2_25.CHANNEL_ACTION_SHEET };
                      obj.setOptInChannel(guildId, channel.id, !isOptedIn, obj);
                    };
                    push(obj14);
                  }
                  tmp45 = channel;
                  tmp46 = guildId;
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
                const buttons8 = obj11.buttons;
                const obj15 = {};
                const intl10 = channel(guildId[27]).intl;
                obj15.label = intl10.string(channel(guildId[27]).t.WqhZss);
                obj15.IconComponent = channel(guildId[36]).LinkIcon;
                obj15.isDestructive = false;
                obj15.onPress = function onPress() {
                  const result = channel(guildId[50]).copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
                };
                buttons8.push(obj15);
              }
              if (!tmp57) {
                const obj16 = { sectionKey: "safety-warning-tooling", buttons: [] };
                if (canMarkAsTier1InappropriateConversation) {
                  const buttons9 = obj16.buttons;
                  const obj17 = {};
                  const intl12 = channel(guildId[27]).intl;
                  obj17.label = intl12.string(channel(guildId[27]).t.EuzCET);
                  obj17.IconComponent = channel(guildId[51]).WarningIcon;
                  obj17.onPress = function onPress() {
                    const result = channel(guildId[52]).markAsInappropriateConversation(channel.id, outer2_6.INAPPROPRIATE_CONVERSATION_TIER_1);
                  };
                  buttons9.push(obj17);
                }
                if (canMarkAsTier2InappropriateConversation) {
                  const buttons10 = obj16.buttons;
                  const obj18 = {};
                  const intl13 = channel(guildId[27]).intl;
                  obj18.label = intl13.string(channel(guildId[27]).t["tBw/1i"]);
                  obj18.IconComponent = channel(guildId[51]).WarningIcon;
                  obj18.onPress = function onPress() {
                    const result = channel(guildId[52]).markAsInappropriateConversation(channel.id, outer2_6.INAPPROPRIATE_CONVERSATION_TIER_2);
                  };
                  buttons10.push(obj18);
                }
                if (obj16.buttons.length > 0) {
                  items.push(obj16);
                }
                if (isStaff) {
                  if (developerMode) {
                    if (channel.isDM()) {
                      const obj19 = { sectionKey: "message-request", buttons: [] };
                      if (true !== channel.isMessageRequest) {
                        const buttons11 = obj19.buttons;
                        const obj20 = {};
                        const intl14 = channel(guildId[27]).intl;
                        obj20.label = intl14.string(channel(guildId[27]).t.L6623r);
                        obj20.IconComponent = channel(guildId[53]).InboxIcon;
                        obj20.onPress = function onPress() {
                          channel(guildId[54]).markAsMessageRequest(channel.id);
                        };
                        buttons11.push(obj20);
                      }
                      const buttons12 = obj19.buttons;
                      const obj21 = {};
                      const intl15 = channel(guildId[27]).intl;
                      obj21.label = intl15.string(channel(guildId[27]).t["85YWlY"]);
                      obj21.IconComponent = channel(guildId[53]).InboxIcon;
                      obj21.onPress = function onPress() {
                        const result = channel(guildId[54]).clearMessageRequestState(channel.id);
                      };
                      buttons12.push(obj21);
                      if (obj19.buttons.length > 0) {
                        items.push(obj19);
                      }
                    }
                  }
                }
                if (obj11.buttons.length > 0) {
                  items.push(obj11);
                }
                const obj22 = { sectionKey: "notifications", buttons: [] };
                if (tmp77) {
                  const buttons13 = obj22.buttons;
                  const obj23 = {};
                  const intl16 = channel(guildId[27]).intl;
                  obj23.label = intl16.string(channel(guildId[27]).t.e6RscS);
                  obj23.IconComponent = channel(guildId[55]).EyeIcon;
                  obj23.onPress = function onPress() {
                    let obj = channel(guildId[56]);
                    obj = { section: outer2_25.CHANNEL_ACTION_SHEET, object: outer2_24.MARK_CHANNEL_AS_READ_BUTTON, objectType: outer2_23.ACK_MANUAL };
                    obj.ackChannel(channel, obj);
                  };
                  buttons13.push(obj23);
                }
                if (!outer1_13(channel.type)) {
                  arr21 = outer1_10;
                  arr21 = outer1_10(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
                  if (arr21) {
                    const buttons14 = obj22.buttons;
                    const obj24 = {};
                    arr21 = channel;
                    arr21 = guildId;
                    const intl24 = channel(guildId[27]).intl;
                    obj24.label = intl24.string(channel(guildId[27]).t.h850Ss);
                    obj24.IconComponent = channel(guildId[61]).ChannelNotificationIcon;
                    obj24.disableColor = true;
                    obj24.onPress = function onPress() {
                      onClose(guildId[62]).setSection(outer2_26.NOTIFICATIONS);
                      const obj = onClose(guildId[62]);
                      onClose(guildId[62]).open(channel.id);
                    };
                    arr21 = buttons14.push(obj24);
                  }
                  if (obj22.buttons.length > 0) {
                    arr21 = items.push(obj22);
                  }
                  const obj25 = { sectionKey: "threads", buttons: [] };
                  arr21 = channel.isThread() || channel.isForumLikeChannel() || !hasThreads || isNsfwGated;
                  if (!arr21) {
                    const buttons15 = obj25.buttons;
                    const obj26 = {};
                    arr21 = channel;
                    arr21 = guildId;
                    const intl25 = channel(guildId[27]).intl;
                    obj26.label = intl25.string(channel(guildId[27]).t.B2panI);
                    obj26.IconComponent = channel(guildId[63]).ThreadIcon;
                    obj26.onPress = function onPress() {
                      onClose(guildId[64])(channel);
                    };
                    arr21 = buttons15.push(obj26);
                  }
                  if (obj25.buttons.length > 0) {
                    arr21 = items.push(obj25);
                  }
                  const obj27 = { sectionKey: "voice", buttons: [] };
                  arr21 = outer1_11;
                  arr21 = outer1_11(channel.type) && !isInCollapsedCategory;
                  if (!arr21) {
                    if (channel.isGuildVocal()) {
                      const buttons16 = obj27.buttons;
                      const push2 = buttons16.push;
                      const obj28 = {};
                      arr21 = channel;
                      arr21 = guildId;
                      arr21 = channel.isGuildStageVoice();
                      const intl27 = channel(guildId[27]).intl;
                      const string6 = intl27.string;
                      const t6 = channel(guildId[27]).t;
                      if (arr21) {
                        obj28.label = string6(t6["7vb2cc"]);
                        obj28.IconComponent = arr21(arr21[66]).StageIcon;
                        obj28.onPress = function onPress() {
                          outer2_36(channel);
                        };
                        arr21 = push2(obj28);
                        const buttons17 = obj27.buttons;
                        const obj29 = {};
                        const intl28 = arr21(arr21[27]).intl;
                        obj29.label = intl28.string(arr21(arr21[27]).t.ZXxLQg);
                        obj29.IconComponent = arr21(arr21[67]).ChatIcon;
                        obj29.onPress = function onPress() {
                          let obj = onClose(guildId[68]);
                          obj.hideActionSheet();
                          obj = { channel };
                          onClose(guildId[37]).pushLazy(channel(guildId[22])(guildId[69], guildId.paths), obj);
                          onClose(guildId[70])();
                        };
                        arr21 = buttons17.push(obj29);
                      } else {
                        obj28.label = string6(t6.ZXxLQg);
                        obj28.IconComponent = arr21(arr21[67]).ChatIcon;
                        obj28.onPress = function onPress() {
                          outer2_36(channel);
                          onClose(guildId[71]).updateChatOpen(channel.id, true);
                          onClose(guildId[70])();
                        };
                        arr21 = push2(obj28);
                      }
                    }
                    arr21 = channel.isGuildStageVoice() && isLiveStageChannel && canModerateStage;
                    if (arr21) {
                      const buttons18 = obj27.buttons;
                      const obj30 = {};
                      arr21 = channel;
                      arr21 = guildId;
                      const intl29 = channel(guildId[27]).intl;
                      obj30.label = intl29.string(channel(guildId[27]).t.saZaRb);
                      obj30.IconComponent = channel(guildId[49]).XSmallIcon;
                      obj30.isDestructive = true;
                      obj30.onPress = function onPress() {
                        // CreateGeneratorClosureLongIndex (0x67)
                        return arr13(tmp)();
                      };
                      arr21 = buttons18.push(obj30);
                    }
                    arr21 = channel.isGuildStageVoice() && isLiveStageChannel && canConnect;
                    if (arr21) {
                      const buttons19 = obj27.buttons;
                      const obj31 = {};
                      arr21 = channel;
                      arr21 = guildId;
                      const intl30 = channel(guildId[27]).intl;
                      obj31.label = intl30.string(channel(guildId[27]).t["+78Pfm"]);
                      obj31.IconComponent = channel(guildId[73]).FlagIcon;
                      obj31.isDestructive = true;
                      obj31.onPress = function onPress() {
                        const result = channel(guildId[74]).showReportModalForStageChannel(channel);
                      };
                      arr21 = buttons19.push(obj31);
                    }
                    if (obj27.buttons.length > 0) {
                      arr21 = items.push(obj27);
                    }
                    if (channel.isSpoilerChannel()) {
                      if (isSpoilerAgreed) {
                        const obj32 = { sectionKey: "spoiler", buttons: [] };
                        const buttons20 = obj32.buttons;
                        const obj33 = {};
                        arr21 = channel;
                        arr21 = guildId;
                        const intl31 = channel(guildId[27]).intl;
                        obj33.label = intl31.string(channel(guildId[27]).t.ix2UVZ);
                        obj33.IconComponent = channel(guildId[75]).EyeSlashIcon;
                        obj33.onPress = function onPress() {
                          onClose(guildId[76]).clearSpoilerAgree(channel.id);
                        };
                        arr21 = buttons20.push(obj33);
                        arr21 = items.push(obj32);
                      }
                    }
                    const obj34 = { sectionKey: "admin-actions", buttons: [] };
                    if (canManageChannel) {
                      const buttons21 = obj34.buttons;
                      const obj35 = {};
                      arr21 = channel;
                      arr21 = guildId;
                      arr21 = channel.isCategory();
                      const intl32 = channel(guildId[27]).intl;
                      const string7 = intl32.string;
                      const t7 = channel(guildId[27]).t;
                      if (arr21) {
                        arr21 = string7(t7.zdPFs9);
                      } else {
                        arr21 = string7(t7["3gUsJb"]);
                      }
                      obj35.label = arr21;
                      arr21 = channel;
                      arr21 = guildId;
                      obj35.IconComponent = channel(guildId[77]).SettingsIcon;
                      obj35.onPress = function onPress() {
                        onClose(guildId[62]).setSection(outer2_26.OVERVIEW);
                        const obj = onClose(guildId[62]);
                        onClose(guildId[62]).open(channel.id);
                      };
                      arr21 = buttons21.push(obj35);
                      arr21 = outer1_10;
                      arr21 = outer1_10(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
                      if (arr21) {
                        const buttons22 = obj34.buttons;
                        let obj36 = {};
                        arr21 = channel;
                        arr21 = guildId;
                        arr21 = channel.isCategory();
                        const intl33 = channel(guildId[27]).intl;
                        const string8 = intl33.string;
                        const t8 = channel(guildId[27]).t;
                        if (arr21) {
                          arr21 = string8(t8["fUYU+j"]);
                        } else {
                          arr21 = string8(t8.dEaPc4);
                        }
                        obj36.label = arr21;
                        arr21 = channel;
                        arr21 = guildId;
                        if (channel.isCategory()) {
                          let CopyIcon = arr21(arr21[42]).PlusLargeIcon;
                        } else {
                          CopyIcon = arr21(arr21[78]).CopyIcon;
                        }
                        obj36.IconComponent = CopyIcon;
                        obj36.onPress = function onPress() {
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
                        obj36 = buttons22.push(obj36);
                      }
                    }
                    if (developerMode) {
                      const buttons23 = obj34.buttons;
                      const obj37 = {};
                      arr21 = channel;
                      arr21 = guildId;
                      const intl34 = channel(guildId[27]).intl;
                      obj37.label = intl34.string(channel(guildId[27]).t.gFHI3k);
                      obj37.IconComponent = channel(guildId[80]).IdIcon;
                      obj37.onPress = function onPress() {
                        channel(guildId[81]).copy(channel.id);
                        const obj = channel(guildId[81]);
                        channel(guildId[82]).presentIdCopied();
                      };
                      arr21 = buttons23.push(obj37);
                    }
                    if (obj34.buttons.length > 0) {
                      arr21 = items.push(obj34);
                    }
                    if (obj1.buttons.length > 0) {
                      arr21 = items.push(obj1);
                    }
                    if (obj2.buttons.length > 0) {
                      arr21 = items.push(obj2);
                    }
                    return items;
                  } else {
                    const buttons24 = obj27.buttons;
                    let obj38 = {};
                    arr21 = channel;
                    arr21 = guildId;
                    const intl26 = channel(guildId[27]).intl;
                    let string5 = intl26.string;
                    let t5 = channel(guildId[27]).t;
                    if (isCollapsedVoiceChannel) {
                      arr21 = string5(t5.JYF2Oa);
                    } else {
                      arr21 = string5(t5.LxzNiu);
                    }
                    obj38.label = arr21;
                    t5 = channel;
                    string5 = guildId;
                    obj38.IconComponent = channel(guildId[28]).UserCircleIcon;
                    obj38.onPress = function onPress() {
                      onClose(guildId[65]).update(channel.id);
                    };
                    obj38 = buttons24.push(obj38);
                  }
                }
                let num35 = 27;
                const intl17 = channel(guildId[27]).intl;
                const string4 = intl17.string;
                const t4 = channel(guildId[27]).t;
                if (isMuted) {
                  if (channel.isCategory()) {
                    arr21 = channel;
                    arr21 = guildId;
                    const intl23 = channel(guildId[num35]).intl;
                    let stringResult1 = intl23.string(channel(guildId[num35]).t.olaBeG);
                    const buttons25 = obj22.buttons;
                    const obj39 = { label: stringResult1 };
                    arr21 = channel;
                    num35 = guildId;
                    obj39.IconComponent = channel(guildId[58]).BellIcon;
                    obj39.onPress = function onPress() {
                      let obj = onClose(guildId[59]);
                      guildId = channel.getGuildId();
                      obj = { muted: !isMuted };
                      const NotificationLabel = channel(guildId[60]).NotificationLabel;
                      const result = obj.updateChannelOverrideSettings(guildId, channel.id, obj, NotificationLabel.muted(!isMuted));
                    };
                    arr21 = buttons25.push(obj39);
                  } else if (!channel.isDM()) {
                    if (!channel.isGroupDM()) {
                      stringResult1 = string4Result;
                      if (channel.isThread()) {
                        const intl21 = channel(guildId[num35]).intl;
                        stringResult1 = intl21.string(channel(guildId[num35]).t["Cq/TzF"]);
                      }
                    }
                  }
                  arr21 = guildId;
                  const intl22 = channel(guildId[num35]).intl;
                  stringResult1 = intl22.string(channel(guildId[num35]).t["s5/5fm"]);
                  string4Result = string4(t4.OYefme);
                } else {
                  if (channel.isCategory()) {
                    const intl20 = channel(guildId[num35]).intl;
                    let stringResult2 = intl20.string(channel(guildId[num35]).t.pNMCg2);
                  } else {
                    if (!channel.isDM()) {
                      if (!channel.isGroupDM()) {
                        stringResult2 = string4Result1;
                        if (channel.isThread()) {
                          const intl18 = channel(guildId[num35]).intl;
                          stringResult2 = intl18.string(channel(guildId[num35]).t.bUUd8q);
                        }
                      }
                    }
                    const intl19 = channel(guildId[num35]).intl;
                    stringResult2 = intl19.string(channel(guildId[num35]).t.LO3kaK);
                  }
                  const buttons26 = obj22.buttons;
                  const obj40 = {
                    label: stringResult2,
                    IconComponent: channel(guildId[57]).BellSlashIcon,
                    onPress() {
                          let obj = channel(guildId[48]);
                          const rootNavigationRef = obj.getRootNavigationRef();
                          if (tmp) {
                            obj = { channelId: channel.id, initialRouteName: outer2_33.MUTE, source: "channel-long-press-sheet" };
                            rootNavigationRef.navigate("sidebar", obj);
                          }
                        }
                  };
                  buttons26.push(obj40);
                  string4Result1 = string4(t4.tbeRRJ);
                }
                tmp77 = outer1_12(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
              } else {
                const buttons27 = obj11.buttons;
                let obj41 = {};
                const intl11 = channel(guildId[27]).intl;
                let string3 = intl11.string;
                let t3 = channel(guildId[27]).t;
                if (isMessagesFavorited) {
                  let string3Result = string3(t3.vDYmad);
                } else {
                  string3Result = string3(t3["uKw3A+"]);
                }
                obj41.label = string3Result;
                t3 = channel;
                string3 = guildId;
                obj41.IconComponent = channel(guildId[46]).PinIcon;
                obj41.onPress = function onPress() {
                  channel(guildId[47]).setMessagesFavorite(channel.id, !isMessagesFavorited);
                };
                obj41 = buttons27.push(obj41);
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
            const tmp64 = onClose(guildId[97])(channel);
            obj4.startExpanded = channel(guildId[99]).isMetaQuest();
            obj5 = { icon: tmp37, title: tmp31, subtitle: formatToPlainStringResult };
            obj4.header = jsx(channel(guildId[100]).ActionSheetIconHeader, { icon: tmp37, title: tmp31, subtitle: formatToPlainStringResult });
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
                  icon: outer2_34(channel(guildId[101]).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
                  trailing,
                  onPress() {
                    if (null != onPress) {
                      onPress();
                    }
                    outer2_1();
                  }
                };
                return outer2_34(channel(guildId[101]).ActionSheetRow, obj, arg1);
              });
              return outer1_34(channel(guildId[101]).ActionSheetRow.Group, obj, buttons.sectionKey);
            });
            obj3.children = jsx(channel(guildId[98]).ActionSheet, { showGradient: true });
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
