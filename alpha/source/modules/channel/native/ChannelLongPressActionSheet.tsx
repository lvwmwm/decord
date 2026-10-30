// Module ID: 10783
// Function ID: 10784
// Name: ChannelLongPressActionSheet
// Dependencies: [5, 19, 10784, 6748, 4863, 6855, 4862, 7280, 4858, 7699, 4880, 4941, 6836, 4951, 4912, 6769, 1384, 1072, 10117, 21, 7942, 1995, 7931, 1114, 10785, 8742, 5720, 7479, 5647, 5953, 10212, 10118, 5722, 6738, 10787, 3447, 9738, 1100, 10808, 8638, 10810, 10825, 3865, 10826, 5253, 10828, 10957, 10958, 9099, 10960, 7276, 5194, 7048, 10962, 8018, 10963, 10964, 10966, 10968, 10969, 10971, 7131, 7273, 10973, 9189, 7282, 7277, 10975, 8191, 8637, 10977, 10978, 8661, 8635, 10979, 14341, 5754, 7933, 10064, 8344, 14342, 14343, 11845, 14344, 7129, 6896, 7555, 5726, 9025, 10504, 7352, 5706, 7320, 7345, 10812, 504, 4866, 6879, 9816, 4834, 6951, 1188, 14347, 11124, 14348, 14354, 7413, 14359, 14360, 1448, 11786, 14363, 9656, 7360, 1623, 11125, 7362, 2]
// Exports: default

// Module 10783 (ChannelLongPressActionSheet)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4866 */;
import ActionSheetRow2 from "ActionSheetRow" /* 7362 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10117 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10784 */;
import EmbeddedAppShimExperiment from "EmbeddedAppShimExperiment" /* 11786 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 6748 */;
import StageInstanceStore from "StageInstanceStore" /* 4863 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 6855 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7280 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7699 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, closure_1, paths;

let c10;
let c9;
let closure_12;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
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
                const obj4 = { value: tmp19(dependencyMap[20], dependencyMap.paths), done: false };
                return obj4;
              } else {
                c2 = 1;
                c3 = 1;
                const obj5 = { value: tmp19(dependencyMap[22], dependencyMap.paths), done: false };
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
  let ActionSheetIconHeader;
  let CopyIcon;
  let canConnect;
  let canCreateInstantInvite;
  let canManageChannel;
  let canModerateStage;
  let constants3;
  let constants4;
  let constants5;
  let constants6;
  let currentUser;
  let currentlySelectedChannelId;
  let intl;
  let intl12;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl27;
  let intl28;
  let intl3;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl38;
  let intl4;
  let intl40;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isOptedIn;
  let isParentOptedIn;
  let isPinned;
  let items15;
  let items16;
  let items18;
  let obj58;
  let obj59;
  let subtitle;
  let title;
  let tmp24;
  let tmp25;
  let tmp5Result30;
  channel = channel.channel;
  const onClose = channel.onClose;
  let guildId;
  let setting;
  let isConjureChannelCandidate;
  let frameId;
  let items14;
  let tmp = onClose;
  let tmp2 = guildId;
  let tmp3 = onClose(guildId[92]);
  const analyticsLocations = tmp3(onClose(guildId[93]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  const tmp5 = channel;
  obj = channel(guildId[94]);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  let obj2 = channel(guildId[95]);
  const items = [GuildStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj3 = channel(guildId[95]);
  const items1 = [PermissionStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) };
    return obj;
  });
  ({ canCreateInstantInvite, canManageChannel, canConnect, canModerateStage } = stateFromStoresObject);
  const tmp9 = channel(guildId[97]);
  const useOptInEnabledForGuild = tmp9.useOptInEnabledForGuild;
  if (guildId == null) {
    guildId = closure_29;
  }
  const optInEnabledForGuild = useOptInEnabledForGuild(guildId);
  const items2 = [UserGuildSettingsStore];
  const tmp5Result = tmp5(tmp2[95]);
  const stateFromStoresObject1 = tmp5Result.useStateFromStoresObject(items2, () => {
    let isFavorite;
    let tmp;
    obj = { isOptedIn: UserGuildSettingsStore.isChannelOptedIn(guildId, channel.id), isParentOptedIn: null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id), isPinned: isFavorite(tmp, channel.id) };
    tmp = guildId;
    isFavorite = obj2.isFavorite;
    null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
    if (tmp == null) {
      tmp = __initData;
    }
    return obj;
  });
  ({ isOptedIn, isPinned, isParentOptedIn } = stateFromStoresObject1);
  const items3 = [UserGuildSettingsStore];
  const tmp5Result16 = tmp5(tmp2[95]);
  const stateFromStores1 = tmp5Result16.useStateFromStores(items3, () => UserGuildSettingsStore.isChannelMuted(guildId, channel.id));
  const items4 = [ReadStateStore];
  const tmp5Result17 = tmp5(tmp2[95]);
  const stateFromStores2 = tmp5Result17.useStateFromStores(items4, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const tmp5Result18 = tmp5(tmp2[60]);
  const canMarkChannelUnread = tmp5Result18.useCanMarkChannelUnread(channel);
  const items5 = [ActiveThreadsStore];
  const tmp5Result19 = tmp5(tmp2[95]);
  const stateFromStores3 = tmp5Result19.useStateFromStores(items5, () => {
    const hasThreadsForChannelResult = null != guildId && ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    return hasThreadsForChannelResult;
  });
  const items6 = [CategoryCollapseStore];
  const tmp5Result20 = tmp5(tmp2[95]);
  const stateFromStores4 = tmp5Result20.useStateFromStores(items6, () => CategoryCollapseStore.isCollapsed(channel.parent_id));
  const items7 = [CollapsedVoiceChannelStore];
  const tmp5Result21 = tmp5(tmp2[95]);
  const stateFromStores5 = tmp5Result21.useStateFromStores(items7, () => CollapsedVoiceChannelStore.isCollapsed(channel.id));
  const items8 = [StageInstanceStore];
  const tmp5Result22 = tmp5(tmp2[95]);
  const stateFromStores6 = tmp5Result22.useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  let tmpResult = tmp(tmp2[28]);
  const tmpResultResult = tmpResult(channel, !channel.isThread());
  const tmp22 = tmp(tmp2[98])(channel);
  const DeveloperMode = tmp5(tmp2[99]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const tmp11 = UserGuildSettingsStore;
  if (null != stateFromStores) {
    tmp(tmp2[100]);
    tmp25 = <tmpResult3 guild={stateFromStores} size={tmp5(tmp2[100]).GuildIconSizes.LARGE} />;
    tmp24 = jsx;
  } else {
    tmp24 = jsx;
    const Avatar = tmp5(tmp2[101]).Avatar;
    tmp25 = <Avatar size={tmp5(tmp2[101]).AvatarSizes.LARGE} channel={channel} />;
  }
  const items9 = [UserStore];
  const tmp5Result23 = tmp5(tmp2[95]);
  const stateFromStores7 = tmp5Result23.useStateFromStores(items9, () => currentUser.getCurrentUser());
  const items10 = [tmp11];
  const tmp28 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const tmp5Result24 = tmp5(tmp2[95]);
  const stateFromStores8 = tmp5Result24.useStateFromStores(items10, () => UserGuildSettingsStore.isMessagesFavorite(channel.id));
  const tmp5Result25 = tmp5(tmp2[102]);
  const inappropriateConversationsTiers = tmp5Result25.useInappropriateConversationsTiers(channel);
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
  const items11 = [items14];
  const tmp5Result26 = tmp5(tmp2[95]);
  const stateFromStores9 = tmp5Result26.useStateFromStores(items11, () => ChannelSpoilerAgreeStore.didAgree(channel.id));
  const tmp38 = tmp(tmp2[103])(channel);
  const tmp39 = tmp(tmp2[104])(channel);
  const tmp40 = tmp(tmp2[105])(channel);
  let isFavorites;
  if (tmp40 != null) {
    isFavorites = tmp40.isFavorites;
  }
  let tmp42 = null;
  if (true === isFavorites) {
    const destinations = tmp40.destinations;
    tmp42 = null;
    if (destinations.some((disabled) => !disabled.disabled)) {
      tmp42 = tmp40;
    }
  }
  const tmp5Result27 = tmp5(tmp2[106]);
  isConjureChannelCandidate = tmp5Result27.useIsConjureChannelCandidate(channel, "ChannelLongPressActionSheet");
  let tmp45 = null;
  const tmpResult4 = tmp(tmp2[107]);
  if (isConjureChannelCandidate) {
    tmp45 = channel;
  }
  const tmpResult2Result = tmpResult4(tmp45);
  const tmp47 = tmp(tmp2[108])(channel);
  frameId = tmp47.frameId;
  const userMuted = tmp47.userMuted;
  const useStateFromStores = tmp5(tmp2[95]).useStateFromStores;
  const items12 = [];
  tmp5(tmp2[95]);
  items12[0] = tmp5(tmp2[109]).ApexExperimentStore;
  const items13 = [isConjureChannelCandidate, frameId];
  const stateFromStores10 = useStateFromStores(items12, () => {
    let tmp = isConjureChannelCandidate && null != frameId;
    if (tmp) {
      obj = EmbeddedAppShimExperiment;
      tmp = 2 === obj.getEmbeddedAppShimVersion("ChannelLongPressActionSheet");
    }
    return tmp;
  }, items13);
  const tmp50 = tmp(tmp2[111])(channel, isConjureChannelCandidate);
  let tmp52 = null != tmpResult2Result;
  const useIsConjureMobileEnabled = tmp5(tmp2[112]).useIsConjureMobileEnabled;
  tmp5(tmp2[112]);
  if (!tmp52) {
    tmp52 = null != tmp50.remixProject;
  }
  const isConjureMobileEnabled = useIsConjureMobileEnabled(tmp52, "ChannelLongPressActionSheet");
  let isStaffResult;
  if (stateFromStores7 != null) {
    isStaffResult = stateFromStores7.isStaff();
  }
  let tmp55 = null;
  if (isConjureMobileEnabled) {
    let id;
    if (tmpResult2Result != null) {
      id = tmpResult2Result.id;
    }
    if (id == null) {
      id = null;
    }
    tmp55 = id;
  }
  let remixProject = null;
  if (isConjureMobileEnabled) {
    remixProject = tmp50.remixProject;
  }
  let tmp58 = null;
  if (stateFromStores10) {
    tmp58 = userMuted;
  }
  let closure_6 = tmp42;
  id = tmp55;
  const guildId1 = channel.getGuildId();
  const obj6 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    let buttons = obj6.buttons;
    const push = buttons.push;
    const obj7 = {
      label: intl.string(tmp5(tmp2[23]).t.LYju5J),
      IconComponent: tmp5(tmp2[24]).UserCircleIcon,
      onPress() {
          obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
          const tmp = onClose(guildId[25]);
          tmp(obj);
        }
    };
    intl = tmp5(tmp2[23]).intl;
    push(obj7);
    if (!isFavoritesGuildSelected) {
      const buttons1 = obj6.buttons;
      const push2 = buttons1.push;
      const obj8 = {
        label: intl2.string(tmp5(tmp2[23]).t.jsvgc3),
        IconComponent: tmp5(tmp2[26]).UserMinusIcon,
        onPress() {
              obj = onClose(guildId[27]);
              obj.closePrivateChannel(channel.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === channel.id);
            }
      };
      intl2 = tmp5(tmp2[23]).intl;
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
        label: intl3.string(tmp5(tmp2[23]).t["26C4oi"]),
        IconComponent: tmp5(tmp2[26]).UserMinusIcon,
        isDestructive: true,
        onPress() {
              let intl5;
              let intl6;
              let user;
              obj = channel(guildId[28]);
              const channelName = obj.computeChannelName(channel, currentUser, RelationshipStore);
              const intl = channel(guildId[23]).intl;
              const formatToPlainStringResult = intl.formatToPlainString(channel(guildId[23]).t.hJ5Ap4, { name: channelName });
              const intl2 = channel(guildId[23]).intl;
              let formatResult = intl2.format(channel(guildId[23]).t.SSIVOu, { name: channelName });
              let formatToPlainStringResult1 = formatToPlainStringResult;
              if (channel.isManaged()) {
                const intl3 = tmp(tmp2[23]).intl;
                const obj2 = { name: channelName };
                formatToPlainStringResult1 = intl3.formatToPlainString(tmp(tmp2[23]).t.hVGjEW, obj2);
                const intl4 = tmp(tmp2[23]).intl;
                const obj3 = { name: channelName };
                formatResult = intl4.format(tmp(tmp2[23]).t.IK1Qvs, obj3);
              }
              const obj4 = {
                title: formatToPlainStringResult1,
                body: formatResult,
                confirmText: intl5.string(channel(guildId[23]).t.p89ACt),
                cancelText: intl6.string(channel(guildId[23]).t.gm1Vej),
                onConfirm() {
                  obj = stateFromStores1(isOptedIn[27]);
                  obj.closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
                }
              };
              const show = onClose(guildId[29]).show;
              onClose(guildId[29]);
              intl5 = tmp(tmp2[23]).intl;
              intl6 = tmp(tmp2[23]).intl;
              show(obj4);
            }
      };
      intl3 = tmp5(tmp2[23]).intl;
      push3(obj11);
    }
    const buttons3 = obj9.buttons;
    const push4 = buttons3.push;
    const obj12 = {
      label: intl4.string(tmp5(tmp2[23]).t["1r5E+m"]),
      IconComponent: tmp5(tmp2[30]).PencilIcon,
      onPress() {
          obj = { channelId: channel.id };
          onClose(guildId[31])(obj);
        }
    };
    intl4 = tmp5(tmp2[23]).intl;
    push4(obj12);
    if (tmp28) {
      const buttons4 = obj9.buttons;
      const push5 = buttons4.push;
      const obj13 = {
        label: intl5.string(tmp5(tmp2[23]).t.OQ9MKu),
        IconComponent: tmp5(tmp2[32]).LinkIcon,
        onPress() {
              obj = onClose(guildId[33]);
              const obj2 = { channelId: channel.id };
              obj.pushLazy(channel(guildId[21])(guildId[34], guildId.paths), obj2);
            }
      };
      intl5 = tmp5(tmp2[23]).intl;
      push5(obj13);
    }
  }
  items14 = [];
  if (obj6.buttons.length > 0) {
    items14.push(obj6);
  }
  const tmp66 = isFavoritesGuildSelected && null != channel.guild_id && !channel.isCategory();
  if (tmp66) {
    const obj14 = { sectionKey: "go-to-server", buttons: items15 };
    const push6 = items14.push;
    const obj15 = {
      label: intl6.string(tmp(tmp2[35])["3KruG3"]),
      IconComponent: tmp5(tmp2[36]).ServerIcon,
      onPress() {
          obj = channel(guildId[37]);
          obj.transitionToGuild(channel.guild_id, channel.id);
        }
    };
    intl6 = tmp5(tmp2[23]).intl;
    items15 = [obj15];
    push6(obj14);
  }
  if (null != tmp39) {
    const obj16 = { sectionKey: "favorites-add-to-category", buttons: items16 };
    const push7 = items14.push;
    items16 = [{ label: tmp39.label, IconComponent: tmp5(tmp2[38]).PlusLargeIcon, onPress: tmp39.perform }];
    const obj17 = { label: tmp39.label, IconComponent: tmp5(tmp2[38]).PlusLargeIcon, onPress: tmp39.perform };
    push7(obj16);
  }
  const items17 = [];
  if (null != tmp42) {
    const push8 = items17.push;
    const obj18 = {
      label: tmp42.label,
      IconComponent: tmp5(tmp2[39]).FolderIcon,
      onPress() {
          onClose(guildId[40])(channel.id, closure_6);
        }
    };
    push8(obj18);
  }
  const tmp70 = tmp(tmp2[41])(tmp38);
  if (null != tmp70) {
    items17.push(tmp70);
  }
  if (items17.length > 0) {
    const obj19 = { sectionKey: "favorites", buttons: items17 };
    items14.push(obj19);
  }
  const obj20 = { sectionKey: "conjure", buttons: [] };
  const tmp73 = null != remixProject && null != guildId1;
  if (tmp73) {
    const buttons5 = obj20.buttons;
    const push9 = buttons5.push;
    const obj21 = {
      label: intl7.string(tmp(tmp2[42]).KMwCb7),
      IconComponent: tmp5(tmp2[43]).RemixIcon,
      onPress() {
          const tmp = channel(guildId[44]);
          const showActionSheet = tmp.showActionSheet;
          obj = { key: channel(guildId[45]).CONJURE_REMIX_SHEET_KEY, content: null };
          showActionSheet(obj);
        }
    };
    intl7 = tmp5(tmp2[23]).intl;
    push9(obj21);
  }
  const tmp75 = null != tmp55 && null != guildId1;
  if (tmp75) {
    const buttons6 = obj20.buttons;
    const push10 = buttons6.push;
    const obj22 = {
      label: intl8.string(tmp(tmp2[42]).jMMrDM),
      IconComponent: tmp5(tmp2[30]).PencilIcon,
      onPress() {
          onClose(guildId[46])(id);
        }
    };
    intl8 = tmp5(tmp2[23]).intl;
    push10(obj22);
  }
  if (obj20.buttons.length > 0) {
    items14.push(obj20);
  }
  const obj23 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons7 = obj23.buttons;
    const push11 = buttons7.push;
    const obj24 = {
      label: intl9.string(tmp5(tmp2[23]).t.VINpSK),
      IconComponent: tmp5(tmp2[47]).GroupPlusIcon,
      onPress() {
          obj = channel(guildId[48]);
          const obj2 = { source: constants5.CONTEXT_MENU };
          const result = obj.showInstantInviteActionSheet(channel, obj2);
        }
    };
    intl9 = tmp5(tmp2[23]).intl;
    push11(obj24);
  }
  const tmp80 = isFavoritesGuildSelected || null == guildId1 || channel.isThread();
  if (!tmp80) {
    if (!channel.isCategory()) {
      let stringResult;
      const buttons8 = obj23.buttons;
      const push12 = buttons8.push;
      const intl10 = tmp5(tmp2[23]).intl;
      const string = intl10.string;
      const t = tmp5(tmp2[23]).t;
      if (isPinned) {
        stringResult = string(t.M5PWSf);
      } else {
        stringResult = string(t.RMpwZu);
      }
      const obj25 = {
        label: stringResult,
        IconComponent: tmp5(tmp2[49]).PinIcon,
        onPress() {
              obj = channel(guildId[50]);
              const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
              obj.setIsFavorite(guildId1, channel.id, !isPinned, obj2);
              const tmp = channel;
              const tmp2 = guildId;
              const tmp3 = guildId1;
              const tmp4 = channel;
              if (!isPinned) {
                const tmpResult = tmp(tmp2[51]);
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
      push12(obj25);
    }
    if (optInEnabledForGuild) {
      const buttons9 = obj23.buttons;
      const push13 = buttons9.push;
      const obj26 = { label: null, IconComponent: null, onPress: null };
      const intl11 = tmp5(tmp2[23]).intl;
      const string2 = intl11.string;
      const t2 = tmp5(tmp2[23]).t;
      if (isParentOptedIn) {
        obj26.label = string2(t2.jNphKT);
        obj26.IconComponent = tmp5(tmp2[52]).XSmallIcon;
        obj26.onPress = function onPress() {
          if (null != channel.parent_id) {
            obj = channel(guildId[50]);
            const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
            obj.setOptInChannel(guildId1, tmp.parent_id, false, obj2);
          }
        };
        push13(obj26);
      } else {
        let string2Result;
        let PlusLargeIcon;
        if (isOptedIn) {
          string2Result = string2(t2["3zySTA"]);
        } else {
          string2Result = string2(t2["9mysCh"]);
        }
        obj26.label = string2Result;
        if (isOptedIn) {
          PlusLargeIcon = tmp5(tmp2[52]).XSmallIcon;
        } else {
          PlusLargeIcon = tmp5(tmp2[38]).PlusLargeIcon;
        }
        obj26.IconComponent = PlusLargeIcon;
        obj26.onPress = function onPress() {
          obj = channel(guildId[50]);
          const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
          obj.setOptInChannel(guildId1, channel.id, !isOptedIn, obj2);
        };
        push13(obj26);
      }
    }
  }
  const isForumLikeChannelResult = closure_9(channel.type) || closure_10(channel.type) || channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const buttons10 = obj23.buttons;
    const push14 = buttons10.push;
    const obj27 = {
      label: intl12.string(tmp5(tmp2[23]).t.WqhZss),
      IconComponent: tmp5(tmp2[32]).LinkIcon,
      isDestructive: false,
      onPress() {
          obj = channel(guildId[53]);
          const result = obj.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
        }
    };
    intl12 = tmp5(tmp2[23]).intl;
    push14(obj27);
  }
  const tmp90 = !isFavoritesGuildSelected && channel.isPrivate();
  if (tmp90) {
    let string3Result;
    const buttons11 = obj23.buttons;
    const push15 = buttons11.push;
    const intl13 = tmp5(tmp2[23]).intl;
    const string3 = intl13.string;
    const t3 = tmp5(tmp2[23]).t;
    if (stateFromStores8) {
      string3Result = string3(t3.vDYmad);
    } else {
      string3Result = string3(t3["uKw3A+"]);
    }
    const obj28 = {
      label: string3Result,
      IconComponent: tmp5(tmp2[49]).PinIcon,
      onPress() {
          obj = channel(guildId[50]);
          obj.setMessagesFavorite(channel.id, !stateFromStores8);
        }
    };
    push15(obj28);
  }
  const obj29 = { sectionKey: "safety-warning-tooling", buttons: [] };
  if (tmp32) {
    const buttons12 = obj29.buttons;
    const push16 = buttons12.push;
    const obj30 = {
      label: intl14.string(tmp5(tmp2[23]).t.EuzCET),
      IconComponent: tmp5(tmp2[54]).WarningIcon,
      onPress() {
          obj = channel(guildId[55]);
          const result = obj.markAsInappropriateConversation(channel.id, frameId.INAPPROPRIATE_CONVERSATION_TIER_1);
        }
    };
    intl14 = tmp5(tmp2[23]).intl;
    push16(obj30);
  }
  if (tmp35) {
    const buttons13 = obj29.buttons;
    const push17 = buttons13.push;
    const obj31 = {
      label: intl15.string(tmp5(tmp2[23]).t["tBw/1i"]),
      IconComponent: tmp5(tmp2[54]).WarningIcon,
      onPress() {
          obj = channel(guildId[55]);
          const result = obj.markAsInappropriateConversation(channel.id, frameId.INAPPROPRIATE_CONVERSATION_TIER_2);
        }
    };
    intl15 = tmp5(tmp2[23]).intl;
    push17(obj31);
  }
  if (obj29.buttons.length > 0) {
    items14.push(obj29);
  }
  if (true === isStaffResult) {
    if (setting) {
      if (channel.isDM()) {
        const obj32 = { sectionKey: "message-request", buttons: [] };
        if (true !== channel.isMessageRequest) {
          const buttons14 = obj32.buttons;
          const push18 = buttons14.push;
          const obj33 = {
            label: intl16.string(tmp5(tmp2[23]).t.L6623r),
            IconComponent: tmp5(tmp2[56]).InboxIcon,
            onPress() {
                      obj = channel(guildId[57]);
                      obj.markAsMessageRequest(channel.id);
                    }
          };
          intl16 = tmp5(tmp2[23]).intl;
          push18(obj33);
        }
        const buttons15 = obj32.buttons;
        const push19 = buttons15.push;
        const obj34 = {
          label: intl17.string(tmp5(tmp2[23]).t["85YWlY"]),
          IconComponent: tmp5(tmp2[56]).InboxIcon,
          onPress() {
                  obj = channel(guildId[57]);
                  const result = obj.clearMessageRequestState(channel.id);
                }
        };
        intl17 = tmp5(tmp2[23]).intl;
        push19(obj34);
        if (obj32.buttons.length > 0) {
          items14.push(obj32);
        }
      }
    }
  }
  if (obj23.buttons.length > 0) {
    items14.push(obj23);
  }
  const obj35 = { sectionKey: "notifications", buttons: [] };
  const tmp100 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  if (tmp100) {
    const MarkChannelUnreadExperiment = tmp5(tmp2[58]).MarkChannelUnreadExperiment;
    if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
      if (!stateFromStores2) {
        if (canMarkChannelUnread) {
          const buttons16 = obj35.buttons;
          const push20 = buttons16.push;
          const obj36 = {
            label: intl18.string(tmp5(tmp2[23]).t.RpE9k7),
            IconComponent: tmp5(tmp2[59]).ChatMarkUnreadIcon,
            onPress() {
                      onClose(guildId[60])(channel.id);
                    }
          };
          intl18 = tmp5(tmp2[23]).intl;
          push20(obj36);
        }
      }
    }
    const buttons17 = obj35.buttons;
    const push21 = buttons17.push;
    const obj37 = {
      label: intl19.string(tmp5(tmp2[23]).t.e6RscS),
      IconComponent: tmp5(tmp2[61]).EyeIcon,
      onPress() {
          obj = channel(guildId[62]);
          const obj2 = { section: constants3.CHANNEL_ACTION_SHEET, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL };
          obj.ackChannel(channel, obj2);
        }
    };
    intl19 = tmp5(tmp2[23]).intl;
    push21(obj37);
  }
  if (!closure_12(channel.type)) {
    let formatToPlainStringResult;
    const tmp109 = closure_9(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
    if (tmp109) {
      const buttons18 = obj35.buttons;
      const push24 = buttons18.push;
      const obj38 = {
        label: intl27.string(tmp5(tmp2[23]).t.h850Ss),
        IconComponent: tmp5(tmp2[67]).ChannelNotificationIcon,
        disableColor: true,
        onPress() {
              obj = onClose(guildId[68]);
              obj.setSection(constants4.NOTIFICATIONS);
              const obj2 = onClose(guildId[68]);
              obj2.open(channel.id);
            }
      };
      intl27 = tmp5(tmp2[23]).intl;
      push24(obj38);
    }
    if (obj35.buttons.length > 0) {
      items14.push(obj35);
    }
    const obj39 = { sectionKey: "threads", buttons: [] };
    const tmp112 = channel.isThread() || channel.isForumLikeChannel() || !stateFromStores3 || tmp22;
    if (!tmp112) {
      const buttons19 = obj39.buttons;
      const push25 = buttons19.push;
      const obj40 = {
        label: intl28.string(tmp5(tmp2[23]).t.B2panI),
        IconComponent: tmp5(tmp2[69]).ThreadIcon,
        onPress() {
              onClose(guildId[70])(channel);
            }
      };
      intl28 = tmp5(tmp2[23]).intl;
      push25(obj40);
    }
    if (obj39.buttons.length > 0) {
      items14.push(obj39);
    }
    const obj41 = { sectionKey: "voice", buttons: [] };
    const tmp116 = closure_10(channel.type) && !stateFromStores4;
    if (tmp116) {
      let string5Result;
      const buttons20 = obj41.buttons;
      const push26 = buttons20.push;
      const intl29 = tmp5(tmp2[23]).intl;
      const string5 = intl29.string;
      const t5 = tmp5(tmp2[23]).t;
      if (stateFromStores5) {
        string5Result = string5(t5.JYF2Oa);
      } else {
        string5Result = string5(t5.LxzNiu);
      }
      const obj42 = {
        label: string5Result,
        IconComponent: tmp5(tmp2[24]).UserCircleIcon,
        onPress() {
              obj = onClose(guildId[71]);
              obj.update(channel.id);
            }
      };
      push26(obj42);
    }
    if (channel.isGuildVocal()) {
      const buttons21 = obj41.buttons;
      const push27 = buttons21.push;
      const obj43 = { label: null, IconComponent: null, onPress: null };
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      const intl30 = tmp5(tmp2[23]).intl;
      const string6 = intl30.string;
      const t6 = tmp5(tmp2[23]).t;
      if (isGuildStageVoiceResult) {
        obj43.label = string6(t6["7vb2cc"]);
        obj43.IconComponent = tmp5(tmp2[72]).StageIcon;
        obj43.onPress = function onPress() {
          handleVoiceOrStageChannelConnectPress(channel);
        };
        push27(obj43);
        const buttons22 = obj41.buttons;
        const push28 = buttons22.push;
        const obj44 = {
          label: intl31.string(tmp5(tmp2[23]).t.ZXxLQg),
          IconComponent: tmp5(tmp2[73]).ChatIcon,
          onPress() {
                  obj = onClose(guildId[44]);
                  obj.hideActionSheet();
                  const obj2 = onClose(guildId[33]);
                  const obj3 = { channel };
                  obj2.pushLazy(channel(guildId[21])(guildId[74], guildId.paths), obj3);
                  onClose(guildId[75])();
                }
        };
        intl31 = tmp5(tmp2[23]).intl;
        push28(obj44);
      } else {
        obj43.label = string6(t6.ZXxLQg);
        obj43.IconComponent = tmp5(tmp2[73]).ChatIcon;
        obj43.onPress = function onPress() {
          handleVoiceOrStageChannelConnectPress(channel);
          obj = onClose(guildId[76]);
          obj.updateChatOpen(channel.id, true);
          onClose(guildId[75])();
        };
        push27(obj43);
      }
    }
    const tmp123 = channel.isGuildStageVoice() && stateFromStores6 && canModerateStage;
    if (tmp123) {
      const buttons23 = obj41.buttons;
      const push29 = buttons23.push;
      const obj45 = {
        label: intl32.string(tmp5(tmp2[23]).t.saZaRb),
        IconComponent: tmp5(tmp2[52]).XSmallIcon,
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
                        const obj4 = { value: tmp3(paths[21])(paths[77], paths.paths), done: false };
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
      intl32 = tmp5(tmp2[23]).intl;
      push29(obj45);
    }
    const tmp125 = channel.isGuildStageVoice() && stateFromStores6 && canConnect;
    if (tmp125) {
      const buttons24 = obj41.buttons;
      const push30 = buttons24.push;
      const obj46 = {
        label: intl33.string(tmp5(tmp2[23]).t["+78Pfm"]),
        IconComponent: tmp5(tmp2[78]).FlagIcon,
        isDestructive: true,
        onPress() {
              obj = channel(guildId[79]);
              const result = obj.showReportModalForStageChannel(channel);
            }
      };
      intl33 = tmp5(tmp2[23]).intl;
      push30(obj46);
    }
    if (obj41.buttons.length > 0) {
      items14.push(obj41);
    }
    if (channel.type === constants.GUILD_APP) {
      if (null != channel.application_id) {
        const obj47 = { sectionKey: "app-channel", buttons: items18 };
        const obj48 = {
          label: intl40.string(tmp5(tmp2[23]).t.ZXxLQg),
          IconComponent: tmp5(tmp2[73]).ChatIcon,
          onPress() {
                  onClose(guildId[80])(channel);
                  onClose(guildId[75])();
                }
        };
        intl40 = tmp5(tmp2[23]).intl;
        items18 = [obj48];
        const tmp129 = null != frameId && null != tmp58;
        if (tmp129) {
          const buttons25 = obj47.buttons;
          buttons25.push(tmp(tmp2[81])(frameId, tmp58));
        }
        if (null != frameId) {
          const buttons26 = obj47.buttons;
          const push31 = buttons26.push;
          const obj49 = {
            label: intl34.string(tmp5(tmp2[23]).t.VkMnR2),
            IconComponent: tmp5(tmp2[82]).DoorExitIcon,
            onPress() {
                      onClose(guildId[83])(frameId);
                    }
          };
          intl34 = tmp5(tmp2[23]).intl;
          push31(obj49);
        }
        items14.push(obj47);
      }
    }
    if (channel.isSpoilerChannel()) {
      if (stateFromStores9) {
        const obj50 = { sectionKey: "spoiler", buttons: [] };
        const buttons27 = obj50.buttons;
        const push32 = buttons27.push;
        const obj51 = {
          label: intl35.string(tmp5(tmp2[23]).t.ix2UVZ),
          IconComponent: tmp5(tmp2[84]).EyeSlashIcon,
          onPress() {
                  obj = onClose(guildId[85]);
                  obj.clearSpoilerAgree(channel.id);
                }
        };
        intl35 = tmp5(tmp2[23]).intl;
        push32(obj51);
        items14.push(obj50);
      }
    }
    const obj52 = { sectionKey: "admin-actions", buttons: [] };
    if (canManageChannel) {
      let string7Result;
      const buttons28 = obj52.buttons;
      const push33 = buttons28.push;
      const isCategoryResult = channel.isCategory();
      const intl36 = tmp5(tmp2[23]).intl;
      const string7 = intl36.string;
      const t7 = tmp5(tmp2[23]).t;
      if (isCategoryResult) {
        string7Result = string7(t7.zdPFs9);
      } else {
        string7Result = string7(t7["3gUsJb"]);
      }
      const obj53 = {
        label: string7Result,
        IconComponent: tmp5(tmp2[86]).SettingsIcon,
        onPress() {
              obj = onClose(guildId[68]);
              obj.setSection(constants4.OVERVIEW);
              const obj2 = onClose(guildId[68]);
              obj2.open(channel.id);
            }
      };
      push33(obj53);
      const tmp138 = closure_9(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
      if (tmp138) {
        let string8Result;
        const buttons29 = obj52.buttons;
        const push34 = buttons29.push;
        const isCategoryResult1 = channel.isCategory();
        const intl37 = tmp5(tmp2[23]).intl;
        const string8 = intl37.string;
        const t8 = tmp5(tmp2[23]).t;
        if (isCategoryResult1) {
          string8Result = string8(t8["fUYU+j"]);
        } else {
          string8Result = string8(t8.dEaPc4);
        }
        const obj54 = {
          label: string8Result,
          IconComponent: CopyIcon,
          onPress() {
                  const open = onClose(guildId[88]).open;
                  let type;
                  onClose(guildId[88]);
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
          CopyIcon = tmp5(tmp2[38]).PlusLargeIcon;
        } else {
          CopyIcon = tmp5(tmp2[87]).CopyIcon;
        }
        push34(obj54);
      }
    }
    if (setting) {
      const buttons30 = obj52.buttons;
      const push35 = buttons30.push;
      const obj55 = {
        label: intl38.string(tmp5(tmp2[23]).t.gFHI3k),
        IconComponent: tmp5(tmp2[89]).IdIcon,
        onPress() {
              obj = channel(guildId[90]);
              obj.copy(channel.id);
              const obj2 = channel(guildId[91]);
              obj2.presentIdCopied();
            }
      };
      intl38 = tmp5(tmp2[23]).intl;
      push35(obj55);
    }
    if (obj52.buttons.length > 0) {
      items14.push(obj52);
    }
    if (obj9.buttons.length > 0) {
      items14.push(obj9);
    }
    if (obj10.buttons.length > 0) {
      items14.push(obj10);
    }
    if (channel.isGroupDM()) {
      const intl39 = tmp5(tmp2[23]).intl;
      const obj56 = { members: channel.recipients.length + 1 };
      formatToPlainStringResult = intl39.formatToPlainString(tmp5(tmp2[23]).t.ABMKx3, obj56);
    }
    const items19 = [items14.length, setting, onClose];
    const effect = isConjureChannelCandidate.useEffect(() => {
      const tmp = 0 !== items14.length || setting;
      if (!tmp) {
        onClose();
      }
    }, items19);
    const obj57 = { value: analyticsLocations, children: tmp24(ActionSheet, obj58) };
    const AnalyticsLocationProvider = tmp5(tmp2[92]).AnalyticsLocationProvider;
    obj58 = {
      showGradient: true,
      startExpanded: tmp5Result30.isMetaQuest(),
      header: tmp24(ActionSheetIconHeader, obj59),
      children: items14.map((buttons) => {
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
              icon: closure_1_33(channel(guildId[116]).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
              trailing,
              onPress() {
                if (onPress != null) {
                  tmp();
                }
                onClose();
              }
            };
            const ActionSheetRow = channel(guildId[116]).ActionSheetRow;
            return closure_1_33(ActionSheetRow, obj, index);
          })}</Group>;
        })
    };
    ActionSheet = tmp5(tmp2[113]).ActionSheet;
    const header = tmp50.header;
    let icon;
    tmp5Result30 = tmp5(tmp2[114]);
    ActionSheetIconHeader = tmp5(tmp2[115]).ActionSheetIconHeader;
    if (header != null) {
      icon = header.icon;
    }
    if (icon == null) {
      icon = tmp25;
    }
    const header2 = tmp50.header;
    obj59 = { icon, title, subtitle };
    title = undefined;
    if (header2 != null) {
      title = header2.title;
    }
    if (title == null) {
      title = tmpResultResult;
    }
    const header3 = tmp50.header;
    subtitle = undefined;
    if (header3 != null) {
      subtitle = header3.subtitle;
    }
    if (subtitle == null) {
      subtitle = formatToPlainStringResult;
    }
    return tmp24(AnalyticsLocationProvider, obj57);
  }
  const intl20 = tmp5(tmp2[23]).intl;
  const string4 = intl20.string;
  const t4 = tmp5(tmp2[23]).t;
  if (stateFromStores1) {
    let stringResult1;
    const string4Result = string4(t4.OYefme);
    if (channel.isCategory()) {
      const intl26 = tmp5(tmp2[23]).intl;
      stringResult1 = intl26.string(tmp5(tmp2[23]).t.olaBeG);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl24 = tmp5(tmp2[23]).intl;
            stringResult1 = intl24.string(tmp5(tmp2[23]).t["Cq/TzF"]);
          }
        }
      }
      const intl25 = tmp5(tmp2[23]).intl;
      stringResult1 = intl25.string(tmp5(tmp2[23]).t["s5/5fm"]);
    }
    const buttons31 = obj35.buttons;
    const push23 = buttons31.push;
    const obj60 = {
      label: stringResult1,
      IconComponent: tmp5(tmp2[64]).BellIcon,
      onPress() {
          let NotificationLabel;
          let obj2;
          const tmp = onClose(guildId[65]);
          const updateChannelOverrideSettings = tmp.updateChannelOverrideSettings;
          obj = { guildId: channel.getGuildId(), channelId: channel.id, settings: obj2, label: NotificationLabel.muted(!stateFromStores1) };
          obj2 = { muted: !stateFromStores1 };
          NotificationLabel = channel(guildId[66]).NotificationLabel;
          const result = updateChannelOverrideSettings(obj);
        }
    };
    push23(obj60);
  } else {
    let stringResult2;
    const string4Result1 = string4(t4.tbeRRJ);
    if (channel.isCategory()) {
      const intl23 = tmp5(tmp2[23]).intl;
      stringResult2 = intl23.string(tmp5(tmp2[23]).t.pNMCg2);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult2 = string4Result1;
          if (channel.isThread()) {
            const intl21 = tmp5(tmp2[23]).intl;
            stringResult2 = intl21.string(tmp5(tmp2[23]).t.bUUd8q);
          }
        }
      }
      const intl22 = tmp5(tmp2[23]).intl;
      stringResult2 = intl22.string(tmp5(tmp2[23]).t.LO3kaK);
    }
    const buttons32 = obj35.buttons;
    const push22 = buttons32.push;
    const obj61 = {
      label: stringResult2,
      IconComponent: tmp5(tmp2[63]).BellSlashIcon,
      onPress() {
          obj = channel(guildId[51]);
          const rootNavigationRef = obj.getRootNavigationRef();
          const tmp = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp) {
            const obj2 = { channelId: channel.id, initialRouteName: constants6.MUTE, source: "channel-long-press-sheet" };
            rootNavigationRef.navigate("sidebar", obj2);
          }
        }
    };
    push22(obj61);
  }
}
const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
({ isGuildTextChannelType: c9, isGuildVocalChannelType: c10, isReadableType: unpackModuleId, isTextChannel: closure_12 } = ChannelRecord);
({ AnalyticsObjectTypes: closure_23, AnalyticsObjects: closure_24, AnalyticsSections: closure_25, ChannelSettingsSections: closure_26, ChannelTypes: closure_27, InstantInviteSources: closure_28, NULL_STRING_GUILD_ID: closure_29, Permissions: closure_30, ZERO_STRING_GUILD_ID: closure_31 } = Constants);
let closure_32 = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
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
