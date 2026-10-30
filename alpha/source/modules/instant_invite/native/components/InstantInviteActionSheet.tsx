// Module ID: 9108
// Function ID: 9109
// Name: InstantInviteActionSheet
// Dependencies: [32, 19, 17, 4863, 9100, 4880, 4941, 1072, 21, 5009, 575, 9109, 1626, 7320, 7345, 7324, 504, 5745, 9110, 9099, 7873, 5253, 8742, 9111, 1197, 9113, 5267, 7315, 1114, 1188, 9134, 9138, 9140, 7212, 9131, 9177, 9178, 2]
// Exports: default

// Module 9108 (InstantInviteActionSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import InviteCodeUtils from "InviteCodeUtils" /* 5745 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9099 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9109 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9111 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import StageInstanceStore from "StageInstanceStore" /* 4863 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9100 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, vanityURLCode;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
function Loading() {
  let items1;
  let tmp2;
  const tmp = closure_15();
  const items = [];
  let num = 0;
  do {
    tmp2 = authStore2;
    let obj = { row: num };
    let arr = items.push(authStore2(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  const obj2 = { children: items1 };
  items1 = [, , ];
  const obj3 = { style: tmp.placeholderHeader };
  items1[0] = tmp2(hasOwnProperty, obj3);
  const obj4 = { style: tmp.placeholderLabel };
  items1[1] = tmp2(hasOwnProperty, obj4);
  items1[2] = items;
  return authStore3(map1, obj2);
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const Permissions = Constants.Permissions;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { placeholderHeader: size, placeholderLabel: size1, errorEmptyState: { backgroundColor: "transparent" }, searchAndShareContainer: obj2, inviteAgeText: obj3, shareApps: { paddingVertical: 0 } };
size = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles = createStyles.createStyles;
size1 = { height: 16, width: "40%", margin: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, flexDirection: "column", gap: nativeDefault.space.PX_12 };
obj3 = { paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_4 };
let closure_15 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteActionSheet.tsx");

export default function InstantInviteActionSheet(channel) {
  let BottomSheetTitleHeader;
  let code;
  let error;
  let isFetchingRows;
  let items1;
  let items11;
  let obj4;
  let obj8;
  let obj9;
  let rows;
  let stringResult;
  let stringResult1;
  let targetApplicationId;
  let tmp29Result;
  let tmp39;
  channel = channel.channel;
  const source = channel.source;
  vanityURLCode = channel.vanityURLCode;
  ({ guildScheduledEventId: _slicedToArray, targetApplicationId, code } = channel);
  let stateFromStores;
  let str;
  const tmp = closure_15();
  const bottom = source(vanityURLCode[12])().bottom;
  const tmp4 = source(vanityURLCode[13]);
  const analyticsLocations = tmp4(source(vanityURLCode[14]).INSTANT_INVITE_MODAL).analyticsLocations;
  const tmp5 = source(vanityURLCode[15]);
  if (null != targetApplicationId) {
    const items = [targetApplicationId];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = _slicedToArray;
  const first = _slicedToArray(tmp5(items1), 1)[0];
  let obj = channel(tmp3[16]);
  const items2 = [PermissionStore, CreateInviteModalStore, str];
  stateFromStores = obj.useStateFromStores(items2, () => {
    if (null != code) {
      return code;
    } else {
      if (channel.isGuildStageVoice()) {
        if (!PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
          const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(tmp17.id);
          let invite_code;
          if (stageInstanceByChannel != null) {
            invite_code = stageInstanceByChannel.invite_code;
          }
          if (null != invite_code) {
            return stageInstanceByChannel.invite_code;
          }
        }
      }
      if (null != vanityURLCode) {
        let inviteKeyFromExtraData = tmp6;
        if (null != _slicedToArray) {
          const obj2 = { baseCode: vanityURLCode, guildScheduledEventId: tmp13 };
          const obj3 = InviteCodeUtils;
          inviteKeyFromExtraData = obj3.generateInviteKeyFromExtraData(obj2);
        }
        return inviteKeyFromExtraData;
      } else {
        const invite = CreateInviteModalStore.getInvite();
        let tmp9;
        if (null != invite) {
          if (null != _slicedToArray) {
            const obj4 = { baseCode: invite.code, guildScheduledEventId: tmp10 };
            const obj = InviteCodeUtils;
            code = obj.generateInviteKeyFromExtraData(obj4);
          } else {
            code = invite.code;
          }
          tmp9 = code;
        }
        return tmp9;
      }
    }
  });
  let obj2 = channel(tmp3[16]);
  const items3 = [CreateInviteModalStore];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => error.getError());
  let tmp11 = null;
  if (null != stateFromStores) {
    tmp11 = tmp2(tmp3[18])(stateFromStores);
  }
  str = "";
  if (null != tmp11) {
    const tmp8Result = channel(vanityURLCode[19]);
    str = tmp8Result.getShareMessage(tmp11);
  }
  let EMBEDDED_APPLICATION = null;
  if (null != targetApplicationId) {
    EMBEDDED_APPLICATION = tmp8(tmp3[20]).InviteTargetTypes.EMBEDDED_APPLICATION;
  }
  const tmp13 = code;
  const items4 = [channel, analyticsLocations];
  const items5 = [channel, stateFromStores, str, source];
  const callback = code.useCallback((userId) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { userId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj2);
  }, items4);
  const items6 = [channel];
  const callback1 = code.useCallback((fn) => {
    if (null != stateFromStores) {
      const obj = { channel, code: tmp, message: str, location: source };
      fn(obj);
      const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
      HubProgressActionCreators;
      const guildId = channel.getGuildId();
      const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
    }
  }, items5);
  const items7 = [stateFromStores, channel, source];
  const callback2 = code.useCallback(() => {
    const setHubProgressActionComplete = HubProgressActionCreators.setHubProgressActionComplete;
    HubProgressActionCreators;
    const guildId = channel.getGuildId();
    const result = setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
  }, items6);
  const items8 = [stateFromStores, channel, str, source];
  const callback3 = code.useCallback(() => {
    const obj = instant_invite_InstantInviteUtils;
    return obj.handleCopy(stateFromStores, channel, source);
  }, items7);
  const items9 = [channel];
  const callback4 = code.useCallback(() => {
    const obj = instant_invite_InstantInviteUtils;
    return obj.handleOpenShareSheet(stateFromStores, channel, str, source);
  }, items8);
  const callback5 = code.useCallback(() => {
    const obj = instant_invite_InstantInviteUtils;
    return obj.handlePressSettings(channel);
  }, items9);
  ({ rows, isFetchingRows } = source(vanityURLCode[25])(channel, source, EMBEDDED_APPLICATION, targetApplicationId));
  let tmp21 = null == stateFromStores;
  source(vanityURLCode[25])(channel, source, EMBEDDED_APPLICATION, targetApplicationId);
  if (!tmp21) {
    tmp21 = 0 === rows.length && isFetchingRows;
  }
  let tmp23 = null != stateFromStores;
  const useState = tmp13.useState;
  if (tmp23) {
    tmp23 = 0 === rows.length;
  }
  if (tmp23) {
    tmp23 = !isFetchingRows;
  }
  const first1 = tmp6(useState(tmp23), 1)[0];
  let obj3 = { value: analyticsLocations, children: closure_12(BottomSheet, obj4) };
  const AnalyticsLocationProvider = tmp8(tmp3[13]).AnalyticsLocationProvider;
  let tmp26 = null != stateFromStores1;
  BottomSheet = tmp8(tmp3[26]).BottomSheet;
  if (!tmp26) {
    tmp26 = !tmp21;
  }
  if (!tmp26) {
    tmp26 = !first1;
  }
  obj4 = { showGradient: tmp26, scrollable: true, startExpanded: true, header: closure_12(BottomSheetTitleHeader, { title: stringResult }), children: tmp29Result };
  BottomSheetTitleHeader = tmp8(tmp3[27]).BottomSheetTitleHeader;
  if (null != targetApplicationId) {
    let formatToPlainStringResult;
    if (null != first) {
      const intl3 = tmp8(tmp3[28]).intl;
      const obj5 = { applicationName: first.name };
      formatToPlainStringResult = intl3.formatToPlainString(tmp8(tmp3[28]).t.ZdK3dW, obj5);
    } else {
      const intl2 = tmp8(tmp3[28]).intl;
      formatToPlainStringResult = intl2.string(tmp8(tmp3[28]).t["OzOM/q"]);
    }
    stringResult = formatToPlainStringResult;
  } else {
    const intl = tmp8(tmp3[28]).intl;
    stringResult = intl.string(tmp8(tmp3[28]).t["f1+QIK"]);
  }
  if (null != stateFromStores1) {
    const obj6 = { style: tmp.errorEmptyState, Illustration: channel(vanityURLCode[30]).AppCrash, title: stateFromStores1 };
    const EmptyState = tmp8(tmp3[29]).EmptyState;
    tmp29Result = tmp25(EmptyState, obj6);
  } else if (tmp21) {
    tmp29Result = tmp25(Loading, {});
  } else if (first1) {
    const obj7 = { contentContainerStyle: obj8, children: closure_12(source(vanityURLCode[31]), obj9) };
    obj8 = { paddingBottom: bottom + 16 };
    obj9 = { link: tmp11, onCopy: callback3, onShare: callback4, onPressSettings: callback5 };
    tmp29Result = tmp25(stateFromStores, obj7);
  } else {
    const obj10 = { contentContainerStyle: tmp.shareApps, onItemPressed: callback1 };
    const items10 = [closure_12(tmp2(tmp3[32]), obj10), ];
    const obj11 = { style: tmp.searchAndShareContainer, children: items11 };
    const obj12 = { size: "md", round: true, onChange: channel(vanityURLCode[34]).searchInviteSuggestions, placeholder: stringResult1 };
    const SearchBar = tmp8(tmp3[33]).SearchBar;
    const tmp30 = closure_13;
    if (null != targetApplicationId) {
      const intl5 = tmp8(tmp3[28]).intl;
      stringResult1 = intl5.string(tmp8(tmp3[28]).t.iI1gMg);
    } else {
      const intl4 = tmp8(tmp3[28]).intl;
      const formatToPlainString = intl4.formatToPlainString;
      const v1UgGdm = tmp8(tmp3[28]).t["1UgGdm"];
      const guild = GuildStore.getGuild(channel.guild_id);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      const obj13 = { groupname: name };
      stringResult1 = formatToPlainString(v1UgGdm, obj13);
    }
    items11 = [closure_12(SearchBar, obj12), ];
    let tmp25Result2 = null == vanityURLCode;
    if (tmp25Result2) {
      const obj14 = { style: tmp.inviteAgeText, channel, canEditInvite: null == code };
      tmp25Result2 = tmp25(tmp2(tmp3[35]), obj14);
    }
    const obj15 = { children: items10 };
    items11[1] = tmp25Result2;
    items10[1] = closure_14(analyticsLocations, obj11);
    const items12 = [closure_14(analyticsLocations, obj15), ];
    const obj16 = { data: rows, code: stateFromStores, source: tmp39, onPressAvatar: callback, onInviteSent: callback2 };
    const obj17 = { children: items12 };
    const tmp2Result = source(vanityURLCode[36]);
    items12[1] = closure_12(tmp2Result, obj16);
    tmp29Result = tmp29(tmp30, obj17);
    tmp39 = source;
  }
  return closure_12(AnalyticsLocationProvider, obj3);
};
