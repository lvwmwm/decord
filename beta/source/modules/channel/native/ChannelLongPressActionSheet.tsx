// Module ID: 10375
// Function ID: 10376
// Name: ChannelLongPressActionSheet
// Dependencies: [5, 19, 10376, 6748, 2050, 5819, 2049, 6538, 2045, 6947, 2067, 4469, 4851, 4479, 2099, 5017, 1372, 2052, 1074, 10377, 21, 7841, 1981, 5043, 1115, 10378, 7624, 4773, 4849, 4989, 5203, 9713, 10380, 4775, 5039, 10392, 3361, 8587, 1101, 10413, 5388, 10415, 9683, 3715, 9492, 9275, 10416, 6534, 4693, 5992, 10418, 8048, 10419, 10420, 10422, 9706, 9707, 9709, 6389, 6531, 9613, 9067, 6540, 6535, 10424, 8085, 5387, 10426, 10427, 5411, 5385, 4800, 10428, 10429, 5037, 7842, 8124, 8089, 6387, 5832, 6798, 4779, 9015, 10092, 6610, 4527, 6583, 6603, 9685, 504, 2053, 6955, 7309, 2021, 5896, 1177, 10430, 10437, 10438, 10461, 5370, 10463, 6618, 1610, 10464, 6620, 2]
// Exports: default

// Module 10375 (ChannelLongPressActionSheet)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2053 */;
import ActionSheetRow2 from "ActionSheetRow" /* 6620 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10376 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10377 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 6748 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5819 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 6538 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 6947 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, closure_1, paths;

let c10;
let c9;
let closure_12;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let unpackModuleId;
function handleVoiceOrStageChannelConnectPress() {
  return obj(...arguments);
}
let obj = function _handleVoiceOrStageChannelConnectPress() {
  obj = _asyncToGenerator(async (arg0) => {
    const guildStageVoice = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp;
              const isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
              const tmp19 = asyncRequire;
              if (isGuildStageVoiceResult) {
                c2 = 2;
                c3 = 1;
                const obj4 = { value: tmp19(dependencyMap[21], dependencyMap.paths), done: false };
                return obj4;
              } else {
                c2 = 1;
                c3 = 1;
                const obj5 = { value: tmp19(dependencyMap[23], dependencyMap.paths), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                return { value, done: true };
              } else {
                value.openGuildVoiceModal(guildStageVoice, "Channel List");
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              value.connectAndOpen(guildStageVoice);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c3 = 3;
          throw tmp11;
        }
      }
    })();
  });
  return obj(...arguments);
};
function ChannelLongPressActionSheetConnected(channel) {
  let ActionSheet;
  let CopyIcon;
  let canConnect;
  let canCreateInstantInvite;
  let canManageChannel;
  let canModerateStage;
  let constants3;
  let constants4;
  let constants5;
  let constants6;
  let constants7;
  let currentUser;
  let currentlySelectedChannelId;
  let intl;
  let intl11;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl2;
  let intl26;
  let intl27;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl36;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isOptedIn;
  let isParentOptedIn;
  let isPinned;
  let items13;
  let items14;
  let items16;
  let obj54;
  let obj55;
  let tmp24;
  let tmp25;
  let tmp5Result26;
  channel = channel.channel;
  const onClose = channel.onClose;
  let guildId;
  let setting;
  let items12;
  let tmp = onClose;
  let tmp2 = guildId;
  let tmp3 = onClose(guildId[86]);
  const analyticsLocations = tmp3(onClose(guildId[87]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  const tmp5 = channel;
  obj = channel(guildId[88]);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  let obj2 = channel(guildId[89]);
  const items = [GuildStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj3 = channel(guildId[89]);
  const items1 = [PermissionStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
    return obj;
  });
  ({ canCreateInstantInvite, canManageChannel, canConnect, canModerateStage } = stateFromStoresObject);
  const tmp9 = channel(guildId[91]);
  const useOptInEnabledForGuild = tmp9.useOptInEnabledForGuild;
  if (guildId == null) {
    guildId = closure_30;
  }
  const optInEnabledForGuild = useOptInEnabledForGuild(guildId);
  const items2 = [UserGuildSettingsStore];
  const tmp5Result = tmp5(tmp2[89]);
  const stateFromStoresObject1 = tmp5Result.useStateFromStoresObject(items2, () => {
    let isFavorite;
    let tmp;
    obj = { isOptedIn: UserGuildSettingsStore.isChannelOptedIn(guildId, channel.id), isParentOptedIn: null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id), isPinned: isFavorite(tmp, channel.id) };
    tmp = guildId;
    isFavorite = obj2.isFavorite;
    null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
    if (tmp == null) {
      tmp = closure_33;
    }
    return obj;
  });
  ({ isOptedIn, isPinned, isParentOptedIn } = stateFromStoresObject1);
  const items3 = [UserGuildSettingsStore];
  const tmp5Result14 = tmp5(tmp2[89]);
  const stateFromStores1 = tmp5Result14.useStateFromStores(items3, () => UserGuildSettingsStore.isChannelMuted(guildId, channel.id));
  const items4 = [ReadStateStore];
  const tmp5Result15 = tmp5(tmp2[89]);
  const stateFromStores2 = tmp5Result15.useStateFromStores(items4, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const tmp5Result16 = tmp5(tmp2[57]);
  const canMarkChannelUnread = tmp5Result16.useCanMarkChannelUnread(channel);
  const items5 = [ActiveThreadsStore];
  const tmp5Result17 = tmp5(tmp2[89]);
  const stateFromStores3 = tmp5Result17.useStateFromStores(items5, () => {
    const hasThreadsForChannelResult = null != guildId && ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    return hasThreadsForChannelResult;
  });
  const items6 = [CategoryCollapseStore];
  const tmp5Result18 = tmp5(tmp2[89]);
  const stateFromStores4 = tmp5Result18.useStateFromStores(items6, () => CategoryCollapseStore.isCollapsed(channel.parent_id));
  const items7 = [CollapsedVoiceChannelStore];
  const tmp5Result19 = tmp5(tmp2[89]);
  const stateFromStores5 = tmp5Result19.useStateFromStores(items7, () => CollapsedVoiceChannelStore.isCollapsed(channel.id));
  const items8 = [StageInstanceStore];
  const tmp5Result20 = tmp5(tmp2[89]);
  const stateFromStores6 = tmp5Result20.useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  let tmpResult = tmp(tmp2[29]);
  const tmpResultResult = tmpResult(channel, !channel.isThread());
  const tmp22 = tmp(tmp2[92])(channel);
  const DeveloperMode = tmp5(tmp2[93]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const tmp11 = UserGuildSettingsStore;
  if (null != stateFromStores) {
    tmp(tmp2[94]);
    tmp25 = <tmpResult3 guild={stateFromStores} size={tmp5(tmp2[94]).GuildIconSizes.LARGE} />;
    tmp24 = jsx;
  } else {
    tmp24 = jsx;
    const Avatar = tmp5(tmp2[95]).Avatar;
    tmp25 = <Avatar size={tmp5(tmp2[95]).AvatarSizes.LARGE} channel={channel} />;
  }
  const items9 = [UserStore];
  const tmp5Result21 = tmp5(tmp2[89]);
  const stateFromStores7 = tmp5Result21.useStateFromStores(items9, () => currentUser.getCurrentUser());
  const items10 = [tmp11];
  const tmp28 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const tmp5Result22 = tmp5(tmp2[89]);
  const stateFromStores8 = tmp5Result22.useStateFromStores(items10, () => UserGuildSettingsStore.isMessagesFavorite(channel.id));
  const tmp5Result23 = tmp5(tmp2[96]);
  const inappropriateConversationsTiers = tmp5Result23.useInappropriateConversationsTiers(channel);
  let isTier1;
  if (inappropriateConversationsTiers != null) {
    isTier1 = inappropriateConversationsTiers.isTier1;
  }
  let tmp32 = null != isTier1;
  if (tmp32) {
    let isTier11;
    if (inappropriateConversationsTiers != null) {
      isTier11 = inappropriateConversationsTiers.isTier1;
    }
    tmp32 = !isTier11;
  }
  let isTier2;
  if (inappropriateConversationsTiers != null) {
    isTier2 = inappropriateConversationsTiers.isTier2;
  }
  let tmp35 = null != isTier2;
  if (tmp35) {
    let isTier21;
    if (inappropriateConversationsTiers != null) {
      isTier21 = inappropriateConversationsTiers.isTier2;
    }
    tmp35 = !isTier21;
  }
  const items11 = [ChannelSpoilerAgreeStore];
  const tmp5Result24 = tmp5(tmp2[89]);
  const stateFromStores9 = tmp5Result24.useStateFromStores(items11, () => ChannelSpoilerAgreeStore.didAgree(channel.id));
  const tmp38 = tmp(tmp2[97])(channel, "ChannelLongPressActionSheet");
  const tmp39 = tmp(tmp2[98])(channel);
  const tmp40 = tmp(tmp2[99])(channel);
  const tmp5Result25 = tmp5(tmp2[100]);
  const isVibegrationsChannelCandidate = tmp5Result25.useIsVibegrationsChannelCandidate(channel, "ChannelLongPressActionSheet");
  let tmp43 = null;
  const tmpResult4 = tmp(tmp2[101]);
  if (isVibegrationsChannelCandidate) {
    tmp43 = channel;
  }
  const tmpResult2Result = tmpResult4(tmp43);
  let isStaffResult;
  if (stateFromStores7 != null) {
    isStaffResult = stateFromStores7.isStaff();
  }
  let id;
  if (tmpResult2Result != null) {
    id = tmpResult2Result.id;
  }
  if (id == null) {
    id = null;
  }
  let closure_6 = tmp40;
  const obj6 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    let buttons = obj6.buttons;
    const push = buttons.push;
    const obj7 = {
      label: intl.string(tmp5(tmp2[24]).t.LYju5J),
      IconComponent: tmp5(tmp2[25]).UserCircleIcon,
      onPress() {
          obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
          const tmp = onClose(guildId[26]);
          tmp(obj);
        }
    };
    intl = tmp5(tmp2[24]).intl;
    push(obj7);
    if (!isFavoritesGuildSelected) {
      const buttons1 = obj6.buttons;
      const push2 = buttons1.push;
      const obj8 = {
        label: intl2.string(tmp5(tmp2[24]).t.jsvgc3),
        IconComponent: tmp5(tmp2[27]).UserMinusIcon,
        onPress() {
              obj = onClose(guildId[28]);
              obj.closePrivateChannel(channel.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === channel.id);
            }
      };
      intl2 = tmp5(tmp2[24]).intl;
      push2(obj8);
    }
  }
  const obj9 = { sectionKey: "gdm", buttons: [] };
  const obj10 = { sectionKey: "gdm-destructive", buttons: [] };
  if (channel.isGroupDM()) {
    if (!isFavoritesGuildSelected) {
      const buttons2 = obj10.buttons;
      const push3 = buttons2.push;
      const obj11 = {
        label: intl3.string(tmp5(tmp2[24]).t["26C4oi"]),
        IconComponent: tmp5(tmp2[27]).UserMinusIcon,
        isDestructive: true,
        onPress() {
              let intl5;
              let intl6;
              let user;
              obj = channel(guildId[29]);
              const channelName = obj.computeChannelName(channel, currentUser, RelationshipStore);
              const intl = channel(guildId[24]).intl;
              const formatToPlainStringResult = intl.formatToPlainString(channel(guildId[24]).t.hJ5Ap4, { name: channelName });
              const intl2 = channel(guildId[24]).intl;
              let formatResult = intl2.format(channel(guildId[24]).t.SSIVOu, { name: channelName });
              let formatToPlainStringResult1 = formatToPlainStringResult;
              if (channel.isManaged()) {
                const intl3 = tmp(tmp2[24]).intl;
                const obj2 = { name: channelName };
                formatToPlainStringResult1 = intl3.formatToPlainString(tmp(tmp2[24]).t.hVGjEW, obj2);
                const intl4 = tmp(tmp2[24]).intl;
                const obj3 = { name: channelName };
                formatResult = intl4.format(tmp(tmp2[24]).t.IK1Qvs, obj3);
              }
              const obj4 = {
                title: formatToPlainStringResult1,
                body: formatResult,
                confirmText: intl5.string(channel(guildId[24]).t.p89ACt),
                cancelText: intl6.string(channel(guildId[24]).t.gm1Vej),
                onConfirm() {
                  obj = stateFromStores1(isOptedIn[28]);
                  obj.closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
                }
              };
              const show = onClose(guildId[30]).show;
              onClose(guildId[30]);
              intl5 = tmp(tmp2[24]).intl;
              intl6 = tmp(tmp2[24]).intl;
              show(obj4);
            }
      };
      intl3 = tmp5(tmp2[24]).intl;
      push3(obj11);
    }
    const buttons3 = obj9.buttons;
    const push4 = buttons3.push;
    const obj12 = {
      label: intl4.string(tmp5(tmp2[24]).t["1r5E+m"]),
      IconComponent: tmp5(tmp2[31]).PencilIcon,
      onPress() {
          obj = { channelId: channel.id };
          onClose(guildId[32])(obj);
        }
    };
    intl4 = tmp5(tmp2[24]).intl;
    push4(obj12);
    if (tmp28) {
      const buttons4 = obj9.buttons;
      const push5 = buttons4.push;
      const obj13 = {
        label: intl5.string(tmp5(tmp2[24]).t.OQ9MKu),
        IconComponent: tmp5(tmp2[33]).LinkIcon,
        onPress() {
              obj = onClose(guildId[34]);
              const obj2 = { channelId: channel.id };
              obj.pushLazy(channel(guildId[22])(guildId[35], guildId.paths), obj2);
            }
      };
      intl5 = tmp5(tmp2[24]).intl;
      push5(obj13);
    }
  }
  items12 = [];
  if (obj6.buttons.length > 0) {
    items12.push(obj6);
  }
  const tmp53 = isFavoritesGuildSelected && null != channel.guild_id && !channel.isCategory();
  if (tmp53) {
    const obj14 = { sectionKey: "go-to-server", buttons: items13 };
    const push6 = items12.push;
    const obj15 = {
      label: intl6.string(tmp(tmp2[36])["3KruG3"]),
      IconComponent: tmp5(tmp2[37]).ServerIcon,
      onPress() {
          obj = channel(guildId[38]);
          obj.transitionToGuild(channel.guild_id, channel.id);
        }
    };
    intl6 = tmp5(tmp2[24]).intl;
    items13 = [obj15];
    push6(obj14);
  }
  if (null != tmp39) {
    const obj16 = { sectionKey: "favorites-add-to-category", buttons: items14 };
    const push7 = items12.push;
    items14 = [{ label: tmp39.label, IconComponent: tmp5(tmp2[39]).PlusLargeIcon, onPress: tmp39.perform }];
    const obj17 = { label: tmp39.label, IconComponent: tmp5(tmp2[39]).PlusLargeIcon, onPress: tmp39.perform };
    push7(obj16);
  }
  const items15 = [];
  if (null != tmp40) {
    const push8 = items15.push;
    const obj18 = {
      label: tmp40.label,
      IconComponent: tmp5(tmp2[40]).FolderIcon,
      onPress() {
          onClose(guildId[41])(channel.id, closure_6);
        }
    };
    push8(obj18);
  }
  const tmp57 = tmp(tmp2[42])(tmp38);
  if (null != tmp57) {
    items15.push(tmp57);
  }
  if (items15.length > 0) {
    const obj19 = { sectionKey: "favorites", buttons: items15 };
    items12.push(obj19);
  }
  const guildId1 = channel.getGuildId();
  const tmp61 = null != id && null != guildId1;
  if (tmp61) {
    const obj20 = { sectionKey: "vibegrations", buttons: items16 };
    const push9 = items12.push;
    const obj21 = {
      label: intl7.string(tmp(tmp2[43]).NXfIfj),
      IconComponent: tmp5(tmp2[31]).PencilIcon,
      onPress() {
          obj = channel(guildId[38]);
          obj.transitionTo(closure_2_32.CHANNEL(guildId1, constants.VIBEGRATIONS, id));
        }
    };
    intl7 = tmp5(tmp2[24]).intl;
    items16 = [obj21];
    push9(obj20);
  }
  const obj22 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj22.buttons;
    const push10 = buttons5.push;
    const obj23 = {
      label: intl8.string(tmp5(tmp2[24]).t.VINpSK),
      IconComponent: tmp5(tmp2[44]).GroupPlusIcon,
      onPress() {
          obj = channel(guildId[45]);
          const obj2 = { source: constants6.CONTEXT_MENU };
          const result = obj.showInstantInviteActionSheet(channel, obj2);
        }
    };
    intl8 = tmp5(tmp2[24]).intl;
    push10(obj23);
  }
  const tmp65 = isFavoritesGuildSelected || null == guildId1 || channel.isThread();
  if (!tmp65) {
    if (!channel.isCategory()) {
      let stringResult;
      const buttons6 = obj22.buttons;
      const push11 = buttons6.push;
      const intl9 = tmp5(tmp2[24]).intl;
      const string = intl9.string;
      const t = tmp5(tmp2[24]).t;
      if (isPinned) {
        stringResult = string(t.M5PWSf);
      } else {
        stringResult = string(t.RMpwZu);
      }
      const obj24 = {
        label: stringResult,
        IconComponent: tmp5(tmp2[46]).PinIcon,
        onPress() {
              obj = channel(guildId[47]);
              const obj2 = { section: constants4.CHANNEL_ACTION_SHEET };
              obj.setIsFavorite(guildId1, channel.id, !isPinned, obj2);
              const tmp = channel;
              const tmp2 = guildId;
              const tmp3 = guildId1;
              const tmp4 = channel;
              if (!isPinned) {
                const tmpResult = tmp(tmp2[48]);
                const rootNavigationRef = tmpResult.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  let params;
                  const currentRoute = rootNavigationRef.getCurrentRoute();
                  let name;
                  if (currentRoute != null) {
                    name = currentRoute.name;
                  }
                  const currentRoute1 = rootNavigationRef.getCurrentRoute();
                  if (currentRoute1 != null) {
                    params = currentRoute1.params;
                  }
                  let tmp10 = "guilds" === name;
                  if (tmp10) {
                    guildId = undefined;
                    if (params != null) {
                      guildId = params.guildId;
                    }
                    tmp10 = guildId === tmp3;
                  }
                  if (tmp10) {
                    const obj3 = { jumpToChannelId: tmp4.id };
                    rootNavigationRef.setParams(obj3);
                  }
                }
              }
            }
      };
      push11(obj24);
    }
    if (optInEnabledForGuild) {
      const buttons7 = obj22.buttons;
      const push12 = buttons7.push;
      const obj25 = { label: null, IconComponent: null, onPress: null };
      const intl10 = tmp5(tmp2[24]).intl;
      const string2 = intl10.string;
      const t2 = tmp5(tmp2[24]).t;
      if (isParentOptedIn) {
        obj25.label = string2(t2.jNphKT);
        obj25.IconComponent = tmp5(tmp2[49]).XSmallIcon;
        obj25.onPress = function onPress() {
          if (null != channel.parent_id) {
            obj = channel(guildId[47]);
            const obj2 = { section: constants4.CHANNEL_ACTION_SHEET };
            obj.setOptInChannel(guildId1, tmp.parent_id, false, obj2);
          }
        };
        push12(obj25);
      } else {
        let string2Result;
        let PlusLargeIcon;
        if (isOptedIn) {
          string2Result = string2(t2["3zySTA"]);
        } else {
          string2Result = string2(t2["9mysCh"]);
        }
        obj25.label = string2Result;
        if (isOptedIn) {
          PlusLargeIcon = tmp5(tmp2[49]).XSmallIcon;
        } else {
          PlusLargeIcon = tmp5(tmp2[39]).PlusLargeIcon;
        }
        obj25.IconComponent = PlusLargeIcon;
        obj25.onPress = function onPress() {
          obj = channel(guildId[47]);
          const obj2 = { section: constants4.CHANNEL_ACTION_SHEET };
          obj.setOptInChannel(guildId1, channel.id, !isOptedIn, obj2);
        };
        push12(obj25);
      }
    }
  }
  const isForumLikeChannelResult = closure_9(channel.type) || closure_10(channel.type) || channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const buttons8 = obj22.buttons;
    const push13 = buttons8.push;
    const obj26 = {
      label: intl11.string(tmp5(tmp2[24]).t.WqhZss),
      IconComponent: tmp5(tmp2[33]).LinkIcon,
      isDestructive: false,
      onPress() {
          obj = channel(guildId[50]);
          const result = obj.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
        }
    };
    intl11 = tmp5(tmp2[24]).intl;
    push13(obj26);
  }
  const tmp75 = !isFavoritesGuildSelected && channel.isPrivate();
  if (tmp75) {
    let string3Result;
    const buttons9 = obj22.buttons;
    const push14 = buttons9.push;
    const intl12 = tmp5(tmp2[24]).intl;
    const string3 = intl12.string;
    const t3 = tmp5(tmp2[24]).t;
    if (stateFromStores8) {
      string3Result = string3(t3.vDYmad);
    } else {
      string3Result = string3(t3["uKw3A+"]);
    }
    const obj27 = {
      label: string3Result,
      IconComponent: tmp5(tmp2[46]).PinIcon,
      onPress() {
          obj = channel(guildId[47]);
          obj.setMessagesFavorite(channel.id, !stateFromStores8);
        }
    };
    push14(obj27);
  }
  const obj28 = { sectionKey: "safety-warning-tooling", buttons: [] };
  if (tmp32) {
    const buttons10 = obj28.buttons;
    const push15 = buttons10.push;
    const obj29 = {
      label: intl13.string(tmp5(tmp2[24]).t.EuzCET),
      IconComponent: tmp5(tmp2[51]).WarningIcon,
      onPress() {
          obj = channel(guildId[52]);
          const result = obj.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
        }
    };
    intl13 = tmp5(tmp2[24]).intl;
    push15(obj29);
  }
  if (tmp35) {
    const buttons11 = obj28.buttons;
    const push16 = buttons11.push;
    const obj30 = {
      label: intl14.string(tmp5(tmp2[24]).t["tBw/1i"]),
      IconComponent: tmp5(tmp2[51]).WarningIcon,
      onPress() {
          obj = channel(guildId[52]);
          const result = obj.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
        }
    };
    intl14 = tmp5(tmp2[24]).intl;
    push16(obj30);
  }
  if (obj28.buttons.length > 0) {
    items12.push(obj28);
  }
  if (true === isStaffResult) {
    if (setting) {
      if (channel.isDM()) {
        const obj31 = { sectionKey: "message-request", buttons: [] };
        if (true !== channel.isMessageRequest) {
          const buttons12 = obj31.buttons;
          const push17 = buttons12.push;
          const obj32 = {
            label: intl15.string(tmp5(tmp2[24]).t.L6623r),
            IconComponent: tmp5(tmp2[53]).InboxIcon,
            onPress() {
                      obj = channel(guildId[54]);
                      obj.markAsMessageRequest(channel.id);
                    }
          };
          intl15 = tmp5(tmp2[24]).intl;
          push17(obj32);
        }
        const buttons13 = obj31.buttons;
        const push18 = buttons13.push;
        const obj33 = {
          label: intl16.string(tmp5(tmp2[24]).t["85YWlY"]),
          IconComponent: tmp5(tmp2[53]).InboxIcon,
          onPress() {
                  obj = channel(guildId[54]);
                  const result = obj.clearMessageRequestState(channel.id);
                }
        };
        intl16 = tmp5(tmp2[24]).intl;
        push18(obj33);
        if (obj31.buttons.length > 0) {
          items12.push(obj31);
        }
      }
    }
  }
  if (obj22.buttons.length > 0) {
    items12.push(obj22);
  }
  const obj34 = { sectionKey: "notifications", buttons: [] };
  const tmp85 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  if (tmp85) {
    const MarkChannelUnreadExperiment = tmp5(tmp2[55]).MarkChannelUnreadExperiment;
    if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
      if (!stateFromStores2) {
        if (canMarkChannelUnread) {
          const buttons14 = obj34.buttons;
          const push19 = buttons14.push;
          const obj35 = {
            label: intl17.string(tmp5(tmp2[24]).t.RpE9k7),
            IconComponent: tmp5(tmp2[56]).ChatMarkUnreadIcon,
            onPress() {
                      onClose(guildId[57])(channel.id);
                    }
          };
          intl17 = tmp5(tmp2[24]).intl;
          push19(obj35);
        }
      }
    }
    const buttons15 = obj34.buttons;
    const push20 = buttons15.push;
    const obj36 = {
      label: intl18.string(tmp5(tmp2[24]).t.e6RscS),
      IconComponent: tmp5(tmp2[58]).EyeIcon,
      onPress() {
          obj = channel(guildId[59]);
          const obj2 = { section: constants4.CHANNEL_ACTION_SHEET, object: constants3.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants2.ACK_MANUAL };
          obj.ackChannel(channel, obj2);
        }
    };
    intl18 = tmp5(tmp2[24]).intl;
    push20(obj36);
  }
  if (!closure_12(channel.type)) {
    const tmp94 = closure_9(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
    if (tmp94) {
      const buttons16 = obj34.buttons;
      const push23 = buttons16.push;
      const obj37 = {
        label: intl26.string(tmp5(tmp2[24]).t.h850Ss),
        IconComponent: tmp5(tmp2[64]).ChannelNotificationIcon,
        disableColor: true,
        onPress() {
              obj = onClose(guildId[65]);
              obj.setSection(constants5.NOTIFICATIONS);
              const obj2 = onClose(guildId[65]);
              obj2.open(channel.id);
            }
      };
      intl26 = tmp5(tmp2[24]).intl;
      push23(obj37);
    }
    if (obj34.buttons.length > 0) {
      items12.push(obj34);
    }
    const obj38 = { sectionKey: "threads", buttons: [] };
    const tmp97 = channel.isThread() || channel.isForumLikeChannel() || !stateFromStores3 || tmp22;
    if (!tmp97) {
      const buttons17 = obj38.buttons;
      const push24 = buttons17.push;
      const obj39 = {
        label: intl27.string(tmp5(tmp2[24]).t.B2panI),
        IconComponent: tmp5(tmp2[66]).ThreadIcon,
        onPress() {
              onClose(guildId[67])(channel);
            }
      };
      intl27 = tmp5(tmp2[24]).intl;
      push24(obj39);
    }
    if (obj38.buttons.length > 0) {
      items12.push(obj38);
    }
    const obj40 = { sectionKey: "voice", buttons: [] };
    const tmp101 = closure_10(channel.type) && !stateFromStores4;
    if (tmp101) {
      let string5Result;
      const buttons18 = obj40.buttons;
      const push25 = buttons18.push;
      const intl28 = tmp5(tmp2[24]).intl;
      const string5 = intl28.string;
      const t5 = tmp5(tmp2[24]).t;
      if (stateFromStores5) {
        string5Result = string5(t5.JYF2Oa);
      } else {
        string5Result = string5(t5.LxzNiu);
      }
      const obj41 = {
        label: string5Result,
        IconComponent: tmp5(tmp2[25]).UserCircleIcon,
        onPress() {
              obj = onClose(guildId[68]);
              obj.update(channel.id);
            }
      };
      push25(obj41);
    }
    if (channel.isGuildVocal()) {
      const buttons19 = obj40.buttons;
      const push26 = buttons19.push;
      const obj42 = { label: null, IconComponent: null, onPress: null };
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      const intl29 = tmp5(tmp2[24]).intl;
      const string6 = intl29.string;
      const t6 = tmp5(tmp2[24]).t;
      if (isGuildStageVoiceResult) {
        obj42.label = string6(t6["7vb2cc"]);
        obj42.IconComponent = tmp5(tmp2[69]).StageIcon;
        obj42.onPress = function onPress() {
          handleVoiceOrStageChannelConnectPress(channel);
        };
        push26(obj42);
        const buttons20 = obj40.buttons;
        const push27 = buttons20.push;
        const obj43 = {
          label: intl30.string(tmp5(tmp2[24]).t.ZXxLQg),
          IconComponent: tmp5(tmp2[70]).ChatIcon,
          onPress() {
                  obj = onClose(guildId[71]);
                  obj.hideActionSheet();
                  const obj2 = onClose(guildId[34]);
                  const obj3 = { channel };
                  obj2.pushLazy(channel(guildId[22])(guildId[72], guildId.paths), obj3);
                  onClose(guildId[73])();
                }
        };
        intl30 = tmp5(tmp2[24]).intl;
        push27(obj43);
      } else {
        obj42.label = string6(t6.ZXxLQg);
        obj42.IconComponent = tmp5(tmp2[70]).ChatIcon;
        obj42.onPress = function onPress() {
          handleVoiceOrStageChannelConnectPress(channel);
          obj = onClose(guildId[74]);
          obj.updateChatOpen(channel.id, true);
          onClose(guildId[73])();
        };
        push26(obj42);
      }
    }
    const tmp108 = channel.isGuildStageVoice() && stateFromStores6 && canModerateStage;
    if (tmp108) {
      const buttons21 = obj40.buttons;
      const push28 = buttons21.push;
      const obj44 = {
        label: intl31.string(tmp5(tmp2[24]).t.saZaRb),
        IconComponent: tmp5(tmp2[49]).XSmallIcon,
        isDestructive: true,
        onPress() {
              return setting(function*(arg0, value) {
                let closure_0;
                if (paths === 2) {
                  paths = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    paths = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        paths = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        paths = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        c1 = 1;
                        paths = 1;
                        const obj4 = { value: tmp3(paths[22])(paths[75], paths.paths), done: false };
                        return obj4;
                      }
                    } else if (arg0 === 1) {
                      paths = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      paths = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      value.openEndStageModal(closure_128_0);
                      paths = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } catch (tmp9) {
                    paths = 3;
                    throw tmp9;
                  }
                }
              })();
            }
      };
      intl31 = tmp5(tmp2[24]).intl;
      push28(obj44);
    }
    const tmp110 = channel.isGuildStageVoice() && stateFromStores6 && canConnect;
    if (tmp110) {
      const buttons22 = obj40.buttons;
      const push29 = buttons22.push;
      const obj45 = {
        label: intl32.string(tmp5(tmp2[24]).t["+78Pfm"]),
        IconComponent: tmp5(tmp2[76]).FlagIcon,
        isDestructive: true,
        onPress() {
              obj = channel(guildId[77]);
              const result = obj.showReportModalForStageChannel(channel);
            }
      };
      intl32 = tmp5(tmp2[24]).intl;
      push29(obj45);
    }
    if (obj40.buttons.length > 0) {
      items12.push(obj40);
    }
    if (channel.isSpoilerChannel()) {
      if (stateFromStores9) {
        const obj46 = { sectionKey: "spoiler", buttons: [] };
        const buttons23 = obj46.buttons;
        const push30 = buttons23.push;
        const obj47 = {
          label: intl33.string(tmp5(tmp2[24]).t.ix2UVZ),
          IconComponent: tmp5(tmp2[78]).EyeSlashIcon,
          onPress() {
                  obj = onClose(guildId[79]);
                  obj.clearSpoilerAgree(channel.id);
                }
        };
        intl33 = tmp5(tmp2[24]).intl;
        push30(obj47);
        items12.push(obj46);
      }
    }
    const obj48 = { sectionKey: "admin-actions", buttons: [] };
    if (canManageChannel) {
      let string7Result;
      const buttons24 = obj48.buttons;
      const push31 = buttons24.push;
      const isCategoryResult = channel.isCategory();
      const intl34 = tmp5(tmp2[24]).intl;
      const string7 = intl34.string;
      const t7 = tmp5(tmp2[24]).t;
      if (isCategoryResult) {
        string7Result = string7(t7.zdPFs9);
      } else {
        string7Result = string7(t7["3gUsJb"]);
      }
      const obj49 = {
        label: string7Result,
        IconComponent: tmp5(tmp2[80]).SettingsIcon,
        onPress() {
              obj = onClose(guildId[65]);
              obj.setSection(constants5.OVERVIEW);
              const obj2 = onClose(guildId[65]);
              obj2.open(channel.id);
            }
      };
      push31(obj49);
      const tmp118 = closure_9(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
      if (tmp118) {
        let string8Result;
        const buttons25 = obj48.buttons;
        const push32 = buttons25.push;
        const isCategoryResult1 = channel.isCategory();
        const intl35 = tmp5(tmp2[24]).intl;
        const string8 = intl35.string;
        const t8 = tmp5(tmp2[24]).t;
        if (isCategoryResult1) {
          string8Result = string8(t8["fUYU+j"]);
        } else {
          string8Result = string8(t8.dEaPc4);
        }
        const obj50 = {
          label: string8Result,
          IconComponent: CopyIcon,
          onPress() {
                  const open = onClose(guildId[82]).open;
                  let type;
                  onClose(guildId[82]);
                  if (!channel.isCategory()) {
                    type = obj.type;
                  }
                  guildId = obj.getGuildId();
                  id = undefined;
                  const tmp4 = channel.isCategory() ? channel.id : channel.parent_id;
                  if (!channel.isCategory()) {
                    id = obj.id;
                  }
                  open(type, guildId, tmp4, id);
                }
        };
        if (channel.isCategory()) {
          CopyIcon = tmp5(tmp2[39]).PlusLargeIcon;
        } else {
          CopyIcon = tmp5(tmp2[81]).CopyIcon;
        }
        push32(obj50);
      }
    }
    if (setting) {
      const buttons26 = obj48.buttons;
      const push33 = buttons26.push;
      const obj51 = {
        label: intl36.string(tmp5(tmp2[24]).t.gFHI3k),
        IconComponent: tmp5(tmp2[83]).IdIcon,
        onPress() {
              obj = channel(guildId[84]);
              obj.copy(channel.id);
              const obj2 = channel(guildId[85]);
              obj2.presentIdCopied();
            }
      };
      intl36 = tmp5(tmp2[24]).intl;
      push33(obj51);
    }
    if (obj48.buttons.length > 0) {
      items12.push(obj48);
    }
    if (obj9.buttons.length > 0) {
      items12.push(obj9);
    }
    if (obj10.buttons.length > 0) {
      items12.push(obj10);
    }
    let formatToPlainStringResult;
    if (channel.isGroupDM()) {
      const intl37 = tmp5(tmp2[24]).intl;
      const obj52 = { members: channel.recipients.length + 1 };
      formatToPlainStringResult = intl37.formatToPlainString(tmp5(tmp2[24]).t.ABMKx3, obj52);
    }
    const items17 = [items12.length, setting, onClose];
    const effect = items12.useEffect(() => {
      const tmp = 0 !== items12.length || setting;
      if (!tmp) {
        onClose();
      }
    }, items17);
    const obj53 = { value: analyticsLocations, children: tmp24(ActionSheet, obj54) };
    const AnalyticsLocationProvider = tmp5(tmp2[86]).AnalyticsLocationProvider;
    obj54 = {
      showGradient: true,
      startExpanded: tmp5Result26.isMetaQuest(),
      header: tmp24(tmp5(tmp2[104]).ActionSheetIconHeader, obj55),
      children: items12.map((buttons) => {
          buttons = buttons.buttons;
          const Group = ActionSheetRow2.ActionSheetRow.Group;
          return <Group key={arg0.sectionKey} hasIcons>{buttons.map((onPress, index) => {
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
            obj = {
              variant: str,
              label,
              icon: closure_1_35(channel(guildId[105]).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
              trailing,
              onPress() {
                if (onPress != null) {
                  tmp();
                }
                onClose();
              }
            };
            const ActionSheetRow = channel(guildId[105]).ActionSheetRow;
            return closure_1_35(ActionSheetRow, obj, index);
          })}</Group>;
        })
    };
    ActionSheet = tmp5(tmp2[102]).ActionSheet;
    obj55 = { icon: tmp25, title: tmpResultResult, subtitle: formatToPlainStringResult };
    tmp5Result26 = tmp5(tmp2[103]);
    return tmp24(AnalyticsLocationProvider, obj53);
  }
  const intl19 = tmp5(tmp2[24]).intl;
  const string4 = intl19.string;
  const t4 = tmp5(tmp2[24]).t;
  if (stateFromStores1) {
    let stringResult1;
    const string4Result = string4(t4.OYefme);
    if (channel.isCategory()) {
      const intl25 = tmp5(tmp2[24]).intl;
      stringResult1 = intl25.string(tmp5(tmp2[24]).t.olaBeG);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl23 = tmp5(tmp2[24]).intl;
            stringResult1 = intl23.string(tmp5(tmp2[24]).t["Cq/TzF"]);
          }
        }
      }
      const intl24 = tmp5(tmp2[24]).intl;
      stringResult1 = intl24.string(tmp5(tmp2[24]).t["s5/5fm"]);
    }
    const buttons27 = obj34.buttons;
    const push22 = buttons27.push;
    const obj56 = {
      label: stringResult1,
      IconComponent: tmp5(tmp2[61]).BellIcon,
      onPress() {
          let NotificationLabel;
          let obj2;
          const tmp = onClose(guildId[62]);
          const updateChannelOverrideSettings = tmp.updateChannelOverrideSettings;
          obj = { guildId: channel.getGuildId(), channelId: channel.id, settings: obj2, label: NotificationLabel.muted(!stateFromStores1) };
          obj2 = { muted: !stateFromStores1 };
          NotificationLabel = channel(guildId[63]).NotificationLabel;
          const result = updateChannelOverrideSettings(obj);
        }
    };
    push22(obj56);
  } else {
    let stringResult2;
    const string4Result1 = string4(t4.tbeRRJ);
    if (channel.isCategory()) {
      const intl22 = tmp5(tmp2[24]).intl;
      stringResult2 = intl22.string(tmp5(tmp2[24]).t.pNMCg2);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult2 = string4Result1;
          if (channel.isThread()) {
            const intl20 = tmp5(tmp2[24]).intl;
            stringResult2 = intl20.string(tmp5(tmp2[24]).t.bUUd8q);
          }
        }
      }
      const intl21 = tmp5(tmp2[24]).intl;
      stringResult2 = intl21.string(tmp5(tmp2[24]).t.LO3kaK);
    }
    const buttons28 = obj34.buttons;
    const push21 = buttons28.push;
    const obj57 = {
      label: stringResult2,
      IconComponent: tmp5(tmp2[60]).BellSlashIcon,
      onPress() {
          obj = channel(guildId[48]);
          const rootNavigationRef = obj.getRootNavigationRef();
          const tmp = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp) {
            const obj2 = { channelId: channel.id, initialRouteName: constants7.MUTE, source: "channel-long-press-sheet" };
            rootNavigationRef.navigate("sidebar", obj2);
          }
        }
    };
    push21(obj57);
  }
}
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
({ isGuildTextChannelType: c9, isGuildVocalChannelType: c10, isReadableType: unpackModuleId, isTextChannel: closure_12 } = ChannelRecord);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ AnalyticsObjectTypes: closure_24, AnalyticsObjects: closure_25, AnalyticsSections: closure_26, ChannelSettingsSections: closure_27, ChannelTypes: closure_28, InstantInviteSources: closure_29, NULL_STRING_GUILD_ID: closure_30, Permissions: closure_31, Routes: closure_32, ZERO_STRING_GUILD_ID: closure_33 } = Constants);
let closure_34 = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default function ChannelLongPressActionSheet(arg0) {
  let onClose;
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  const items = [ChannelStore];
  obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [stateFromStores, onClose];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = <ChannelLongPressActionSheetConnected channel={stateFromStores} onClose={onClose} />;
  }
  return tmp3;
};
