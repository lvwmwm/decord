// Module ID: 16936
// Function ID: 16937
// Name: VoicePanelSettingsOverview
// Dependencies: [19, 2044, 4852, 8844, 502, 2045, 1993, 4469, 1372, 4860, 1074, 4857, 9165, 21, 4836, 576, 504, 16937, 4989, 9183, 9144, 5901, 4832, 9238, 1115, 5409, 7, 4528, 16934, 7809, 5917, 5923, 15115, 8087, 5924, 573, 6621, 2021, 9104, 5037, 8085, 9433, 4800, 16938, 1981, 9167, 9186, 16939, 16927, 16880, 10966, 9131, 16940, 6798, 16941, 9136, 16942, 9569, 9407, 9492, 9491, 2]

// Module 16936 (VoicePanelSettingsOverview)
import LogAggregator from "LogAggregator" /* 7 */;
import get_initialized from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import intl18 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import CallConstants from "CallConstants" /* 4857 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import LockIcon from "LockIcon" /* 5409 */;
import TableRow6 from "TableRow" /* 5917 */;
import TableRowIcon7 from "TableRowIcon" /* 5923 */;
import TableRowArrow from "TableRowArrow" /* 5924 */;
import TableSwitchRow3 from "TableSwitchRow" /* 6621 */;
import showShareActionSheet from "showShareActionSheet" /* 7809 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8085 */;
import AssetRegistryDefault from "AssetRegistry" /* 8087 */;
import FormComponents from "FormComponents" /* 9131 */;
import useIsSecureFramesVerified from "useIsSecureFramesVerified" /* 9144 */;
import SecureFramesConstants from "SecureFramesConstants" /* 9165 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9167 */;
import useIsSecureFramesUIEnabled from "useIsSecureFramesUIEnabled" /* 9183 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 9433 */;
import WrenchIcon from "WrenchIcon" /* 15115 */;
import VoicePanelSettingsActionCreators from "VoicePanelSettingsActionCreators" /* 16934 */;
import getChannelInfoSubtitleDefault from "getChannelInfoSubtitle" /* 16937 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 8844 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let closure_14;
let closure_15;
let closure_18;
let closure_19;
let closure_20;
let map1;
let obj2;
class VoicePanelSettingsOverviewHeader {
  constructor(arg0) {
    let channelId;
    let intl;
    let intl2;
    let items3;
    let items4;
    let items5;
    ({ guildId: require, channelId } = arg0);
    const tmp = closure_21();
    const items = [SortedVoiceStateStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => {
      const voiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt(channelId, require);
      const substr = voiceStatesForChannelAlt.slice(0, 2);
      const mapped = substr.map((user) => user.user);
      return getChannelInfoSubtitleDefault(require, channelId, mapped, voiceStatesForChannelAlt.length - mapped.length);
    });
    const items1 = [ChannelStore];
    const items2 = [channelId];
    const obj2 = get_initialized;
    const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
    const tmp7 = channelId(4989)(stateFromStores1);
    const obj3 = useIsSecureFramesUIEnabled;
    let isSecureFramesUIEnabled = obj3.useIsSecureFramesUIEnabled({ channelId });
    const obj4 = useIsSecureFramesVerified;
    let isCallSecureFramesVerified = obj4.useIsCallSecureFramesVerified({ channelId });
    const obj5 = { style: tmp.headerContainer, children: items4 };
    const obj6 = { style: tmp.channelTitleWrapper, children: items3 };
    items3 = [, ];
    const obj7 = { style: tmp.channelTitle, variant: "heading-lg/bold", lineClamp: 1, accessibilityRole: "header", children: tmp7 };
    const tmp11 = channelId(5901);
    const tmp12 = channelId(5901);
    items3[0] = closure_18(Text_Text.Text, obj7);
    const tmp6 = channelId;
    if (isCallSecureFramesVerified) {
      const obj8 = { style: tmp.secureFramesIcon, size: "xs", accessibilityLabel: intl.string(intl18.t.mR9cf3) };
      const ShieldLockIcon = tmp2(9238).ShieldLockIcon;
      intl = tmp2(1115).intl;
      isCallSecureFramesVerified = tmp13(ShieldLockIcon, obj8);
    }
    items3[1] = isCallSecureFramesVerified;
    items4 = [closure_19(tmp12, obj6), , ];
    const obj9 = { style: tmp.channelSubtitle, variant: "text-sm/medium", accessibilityRole: "summary", children: stateFromStores };
    items4[1] = closure_18(Text_Text.Text, obj9);
    if (isSecureFramesUIEnabled) {
      const obj10 = { style: tmp.secureFrames, children: items5 };
      items5 = [, ];
      const tmp6Result = tmp6(5901);
      items5[0] = closure_18(LockIcon.LockIcon, { size: "xxs", color: "status-positive" });
      const obj11 = { variant: "text-xs/medium", color: "status-positive", children: intl2.string(intl18.t["3BogKe"]) };
      const Text = tmp2(4832).Text;
      intl2 = tmp2(1115).intl;
      items5[1] = closure_18(Text, obj11);
      isSecureFramesUIEnabled = tmp10(tmp6Result, obj10);
    }
    items4[2] = isSecureFramesUIEnabled;
    return closure_19(tmp11, obj5);
  }
}
function ShareActivityLogsButton() {
  let TableRowIcon;
  let intl;
  let obj2;
  const callback = react.useCallback(() => {
    let intl;
    const items = [closure_1_15];
    const obj = LogAggregator;
    const json = obj.stringify(items);
    if ("" === json) {
      const obj2 = { key: "EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE", content: intl.string(intl18.t["i+9VWy"]) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = tmp(tmp2[24]).intl;
      open(obj2);
    } else {
      const tmpResult = VoicePanelSettingsActionCreators;
      const result = tmpResult.closeVoicePanelSettingsActionSheet();
      const obj3 = { message: json };
      const tmpResult2 = showShareActionSheet;
      tmpResult2.showShareActionSheet(obj3, "Activity Logs");
    }
  }, []);
  let obj = { onPress: callback, icon: authStore4(TableRowIcon, obj2), label: intl.string(intl18.t.iQzQs3), trailing: authStore4(TableRowArrow.TableRowArrow, {}) };
  const TableRow = TableRow6.TableRow;
  obj2 = { IconComponent: WrenchIcon.WrenchIcon, source: AssetRegistryDefault };
  TableRowIcon = TableRowIcon7.TableRowIcon;
  intl = intl18.intl;
  return authStore4(TableRow, obj);
}
function ActivityDebugToggle() {
  let TableRowIcon;
  let intl;
  let intl2;
  let obj3;
  let showActivitiesDebugOverlay;
  let obj = get_initialized;
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const callback = react.useCallback((visible) => {
    const obj = DispatcherDefault;
    const obj2 = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj2);
  }, []);
  let obj2 = { icon: authStore4(TableRowIcon, obj3), accessibilityHint: intl.string(intl18.t["qv5/SP"]), value: stateFromStores, onValueChange: callback, label: intl2.string(intl18.t["qv5/SP"]) };
  const TableSwitchRow = TableSwitchRow3.TableSwitchRow;
  obj3 = { IconComponent: WrenchIcon.WrenchIcon, source: AssetRegistryDefault };
  TableRowIcon = TableRowIcon7.TableRowIcon;
  intl = intl18.intl;
  intl2 = intl18.intl;
  return authStore4(TableSwitchRow, obj2);
}
({ AnalyticsSections: map1, Permissions: closure_14, RPC_APPLICATION_LOGGING_CATEGORY: closure_15 } = Constants);
const isStreamParticipant = CallConstants.isStreamParticipant;
let closure_17 = SecureFramesConstants.SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY;
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
let obj = { headerContainer: { alignItems: "center" }, channelTitleWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 8 }, channelTitle: { textAlign: "center" }, channelSubtitle: { marginTop: 4, marginHorizontal: 16, textAlign: "center" }, secureFrames: obj2, secureFramesIcon: { marginStart: 4 } };
obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 4, gap: 4 };
let closure_21 = createStyles.createStyles(obj);
const memoResult = react.memo(function VoicePanelSettingsOverview(guildId) {
  let AWmdd9;
  let TableRowIcon;
  let TableRowIcon2;
  let TableRowIcon3;
  let TableRowIcon4;
  let TableRowIcon5;
  let TableRowIcon6;
  let formatToPlainString;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl16;
  let intl17;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items17;
  let items18;
  let obj15;
  let obj19;
  let obj21;
  let obj23;
  let obj25;
  let obj27;
  let obj29;
  let obj31;
  let selfDeaf;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  let stateFromStores;
  let stateFromStores4;
  const tmp = guildId;
  const tmp2 = stateFromStores;
  let obj = guildId(stateFromStores[16]);
  let items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const DeveloperMode = guildId(stateFromStores[37]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj2 = guildId(stateFromStores[16]);
  const items1 = [SortedVoiceStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SortedVoiceStateStore.getVoiceStatesForChannelAlt(channelId, guildId));
  const items2 = [UserStore];
  const items3 = [stateFromStores, stateFromStores1];
  const obj3 = guildId(stateFromStores[16]);
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, function() {
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        const items = [];
        const recipients = obj.recipients;
        set = new Set(stateFromStores1.map((user) => user.user.id));
        for (const item10020 of recipients) {
          let tmp6 = item10020;
          let user = UserStore.getUser(item10020);
          let hasItem = null == user;
          let tmp9 = user;
          if (!hasItem) {
            hasItem = set.has(tmp6);
          }
          if (!hasItem) {
            let arr = items.push(tmp9);
          }
          continue;
        }
        return items;
      }
    }
    return [];
  }, items3);
  const items4 = [MediaEngineStore];
  const obj4 = guildId(stateFromStores[16]);
  const stateFromStores2 = obj4.useStateFromStores(items4, () => selfDeaf.isSelfDeaf());
  const callback = stateFromStores1.useCallback(() => {
    const obj = channelId(stateFromStores[38]);
    obj.toggleSelfDeaf();
  }, []);
  const items5 = [stateFromStores4];
  const obj5 = guildId(stateFromStores[16]);
  const stateFromStores3 = obj5.useStateFromStores(items5, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items6 = [stateFromStores4, AuthenticationStore];
  const obj6 = guildId(stateFromStores[16]);
  stateFromStores4 = obj6.useStateFromStores(items6, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channelId);
    let id = null;
    if (isStreamParticipant(selectedParticipant)) {
      id = null;
      if (selectedParticipant.stream.ownerId !== AuthenticationStore.getId()) {
        id = selectedParticipant.id;
      }
    }
    return id;
  });
  const items7 = [channelId, stateFromStores3];
  const items8 = [channelId];
  const callback1 = stateFromStores1.useCallback(() => {
    const obj = ChannelRTCActionCreatorsDefault;
    const result = obj.toggleVoiceParticipantsHidden(channelId, !stateFromStores3);
  }, items7);
  const items9 = [guildId];
  const callback2 = stateFromStores1.useCallback(() => {
    const obj = VoicePanelSettingsActionCreators;
    const result = obj.closeVoicePanelSettingsActionSheet();
    const obj2 = ChannelSettingsActionCreatorsDefault;
    obj2.open(channelId);
  }, items8);
  const items10 = [channelId];
  const callback3 = stateFromStores1.useCallback(() => {
    const obj = VoicePanelSettingsActionCreators;
    const result = obj.closeVoicePanelSettingsActionSheet();
    const obj2 = ChannelCallConnectingScreen;
    const result1 = obj2.showVoiceSettingsActionSheet(guildId);
  }, items9);
  const items11 = [channelId, stateFromStores4];
  const callback4 = stateFromStores1.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { channelId };
    obj.openLazy(asyncRequire(16938, dependencyMap.paths), closure_17, obj2);
  }, items10);
  const callback5 = stateFromStores1.useCallback(() => {
    if (null != stateFromStores4) {
      const obj = SecureFramesPlatformUtilsDefault;
      const result = obj.openSecureFramesStreamVerification(tmp, channelId);
    }
  }, items11);
  const obj7 = guildId(stateFromStores[46]);
  const isCallRTCConnectionEmpty = obj7.useIsCallRTCConnectionEmpty();
  const obj8 = guildId(stateFromStores[46]);
  const isStreamRTCConnectionEmpty = obj8.useIsStreamRTCConnectionEmpty(stateFromStores4);
  const items12 = [stateFromStores3];
  const obj9 = guildId(stateFromStores[16]);
  const stateFromStores5 = obj9.useStateFromStores(items12, () => null != stateFromStores3.getCurrentEmbeddedActivity(), []);
  const items13 = [PermissionStore];
  const items14 = [channelId];
  const tmp18 = channelId(stateFromStores[47])(stateFromStores);
  const obj10 = guildId(stateFromStores[16]);
  const stateFromStores6 = obj10.useStateFromStores(items13, () => {
    const obj = { channelId };
    return PermissionStore.canWithPartialContext(constants.MANAGE_CHANNELS, obj);
  }, items14);
  const obj11 = guildId(stateFromStores[48]);
  const canInviteMembers = obj11.useCanInviteMembers(channelId);
  const obj12 = guildId(stateFromStores[49]);
  const inviteMembersCallback = obj12.useInviteMembersCallback(channelId);
  const tmp22 = channelId(stateFromStores[50])(stateFromStores);
  const obj13 = guildId(stateFromStores[19]);
  let isSecureFramesUIEnabled = obj13.useIsSecureFramesUIEnabled({ channelId });
  const children = [closure_18(VoicePanelSettingsOverviewHeader, { guildId, channelId }), , , , , ];
  let tmp26Result = null;
  const tmp25 = closure_20;
  if (tmp22) {
    const obj14 = { hasIcons: false, children: closure_18(channelId(tmp2[52]), obj15) };
    const VoicePanelFormSection = tmp(tmp2[51]).VoicePanelFormSection;
    obj15 = { channel: stateFromStores, analyticsSection: constants.CHANNEL_ACTION_SHEET };
    tmp26Result = tmp26(VoicePanelFormSection, obj14);
  }
  children[1] = tmp26Result;
  let tmp26Result7 = stateFromStores6 || tmp18;
  if (tmp26Result7) {
    let tmp26Result6 = stateFromStores6;
    const VoicePanelFormSection2 = tmp(tmp2[51]).VoicePanelFormSection;
    if (stateFromStores6) {
      const obj16 = { onPress: callback2, label: intl.string(tmp(tmp2[24]).t.XPDhcc), subLabel: intl2.string(tmp(tmp2[24]).t.w7ZEot), trailing: closure_18(tmp(tmp2[34]).TableRowArrow, {}) };
      const TableRow = tmp(tmp2[30]).TableRow;
      intl = tmp(tmp2[24]).intl;
      intl2 = tmp(tmp2[24]).intl;
      tmp26Result6 = tmp26(TableRow, obj16);
    }
    const obj17 = { hasIcons: false, children: tmp26Result6 };
    tmp26Result7 = tmp26(VoicePanelFormSection2, obj17);
  }
  children[2] = tmp26Result7;
  const VoicePanelFormSection3 = tmp(tmp2[51]).VoicePanelFormSection;
  const obj18 = { onPress: callback3, icon: closure_18(TableRowIcon, obj19), label: intl3.string(tmp(tmp2[24]).t.dsXapM), subLabel: intl4.string(tmp(tmp2[24]).t["16SG+O"]), trailing: closure_18(tmp(tmp2[34]).TableRowArrow, {}) };
  const TableRow2 = tmp(tmp2[30]).TableRow;
  obj19 = { IconComponent: tmp(tmp2[53]).SettingsIcon, source: channelId(tmp2[54]) };
  TableRowIcon = tmp(tmp2[31]).TableRowIcon;
  intl3 = tmp(tmp2[24]).intl;
  intl4 = tmp(tmp2[24]).intl;
  const items16 = [closure_18(TableRow2, obj18), , , , ];
  const obj20 = { icon: closure_18(TableRowIcon2, obj21), accessibilityHint: intl5.string(tmp(tmp2[24]).t.wjcRFX), value: stateFromStores2, onValueChange: callback, label: intl6.string(tmp(tmp2[24]).t.wjcRFX), subLabel: intl7.string(tmp(tmp2[24]).t.M3VN2U) };
  const TableSwitchRow = tmp(tmp2[36]).TableSwitchRow;
  obj21 = { IconComponent: tmp(tmp2[55]).HeadphonesSlashIcon, source: channelId(tmp2[56]) };
  TableRowIcon2 = tmp(tmp2[31]).TableRowIcon;
  intl5 = tmp(tmp2[24]).intl;
  intl6 = tmp(tmp2[24]).intl;
  intl7 = tmp(tmp2[24]).intl;
  items16[1] = closure_18(TableSwitchRow, obj20);
  const obj22 = { icon: closure_18(TableRowIcon3, obj23), accessibilityHint: intl8.string(tmp(tmp2[24]).t.ZMTRyc), value: stateFromStores3, onValueChange: callback1, label: intl9.string(tmp(tmp2[24]).t.ZMTRyc), subLabel: intl10.string(tmp(tmp2[24]).t.MlpCFS) };
  const TableSwitchRow2 = tmp(tmp2[36]).TableSwitchRow;
  obj23 = { IconComponent: tmp(tmp2[57]).VideoIcon, source: channelId(tmp2[58]) };
  TableRowIcon3 = tmp(tmp2[31]).TableRowIcon;
  intl8 = tmp(tmp2[24]).intl;
  intl9 = tmp(tmp2[24]).intl;
  intl10 = tmp(tmp2[24]).intl;
  items16[2] = closure_18(TableSwitchRow2, obj22);
  let tmp26Result8 = isSecureFramesUIEnabled && null == stateFromStores4 && !isCallRTCConnectionEmpty;
  if (tmp26Result8) {
    const obj24 = { onPress: callback4, icon: closure_18(TableRowIcon4, obj25), label: intl11.string(tmp(tmp2[24]).t.cTQI5t), subLabel: intl12.string(tmp(tmp2[24]).t.Etxti2), trailing: closure_18(tmp(tmp2[34]).TableRowArrow, {}) };
    const TableRow3 = tmp(tmp2[30]).TableRow;
    obj25 = { IconComponent: tmp(tmp2[25]).LockIcon, source: channelId(tmp2[54]) };
    TableRowIcon4 = tmp(tmp2[31]).TableRowIcon;
    intl11 = tmp(tmp2[24]).intl;
    intl12 = tmp(tmp2[24]).intl;
    tmp26Result8 = tmp26(TableRow3, obj24);
  }
  items16[3] = tmp26Result8;
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = null != stateFromStores4;
  }
  if (isSecureFramesUIEnabled) {
    isSecureFramesUIEnabled = !isStreamRTCConnectionEmpty;
  }
  if (isSecureFramesUIEnabled) {
    const obj26 = { onPress: callback5, icon: closure_18(TableRowIcon5, obj27), label: intl13.string(tmp(tmp2[24]).t.QogHld), subLabel: intl14.string(tmp(tmp2[24]).t["j5+1ed"]), trailing: closure_18(tmp(tmp2[34]).TableRowArrow, {}) };
    const TableRow4 = tmp(tmp2[30]).TableRow;
    obj27 = { IconComponent: tmp(tmp2[25]).LockIcon, source: channelId(tmp2[54]) };
    TableRowIcon5 = tmp(tmp2[31]).TableRowIcon;
    intl13 = tmp(tmp2[24]).intl;
    intl14 = tmp(tmp2[24]).intl;
    isSecureFramesUIEnabled = tmp26(TableRow4, obj26);
  }
  items16[4] = isSecureFramesUIEnabled;
  children[3] = closure_19(VoicePanelFormSection3, { hasIcons: true, children: items16 });
  let tmp24Result = stateFromStores1.length > 0 || canInviteMembers;
  if (tmp24Result) {
    const obj28 = { title: "" + formatToPlainString(AWmdd9, obj29), hasIcons: true, children: items17 };
    const VoicePanelFormSection4 = tmp(tmp2[51]).VoicePanelFormSection;
    const intl15 = tmp(tmp2[24]).intl;
    formatToPlainString = intl15.formatToPlainString;
    const _HermesInternal = HermesInternal;
    obj29 = { count: "" + stateFromStores1.length };
    AWmdd9 = tmp(tmp2[24]).t.AWmdd9;
    const _HermesInternal2 = HermesInternal;
    let tmp26Result9 = null;
    if (canInviteMembers) {
      const obj30 = { onPress: inviteMembersCallback, icon: closure_18(TableRowIcon6, obj31), label: intl16.string(tmp(tmp2[24]).t["f1+QIK"]), trailing: closure_18(tmp(tmp2[34]).TableRowArrow, {}) };
      const TableRow5 = tmp(tmp2[30]).TableRow;
      obj31 = { IconComponent: tmp(tmp2[59]).GroupPlusIcon, source: channelId(tmp2[60]) };
      TableRowIcon6 = tmp(tmp2[31]).TableRowIcon;
      intl16 = tmp(tmp2[24]).intl;
      tmp26Result9 = tmp26(TableRow5, obj30);
    }
    items17 = [
      tmp26Result9,
      stateFromStores1.map((user) => {
          let nick;
          const obj = { user: user.user, selfStream: user.voiceState.selfStream, nick, channelId, guildId, showSecureFramesUI: isSecureFramesUIEnabled, showGameActivity: true };
          nick = user.nick;
          const MemberRowItem = FormComponents.MemberRowItem;
          return authStore4(MemberRowItem, obj, user.user.id);
        }),
      stateFromStoresArray.map((user) => {
          const obj = { user, channelId, guildId, notConnected: true, showRing: true };
          return authStore4(FormComponents.MemberRowItem, obj, user.id);
        })
    ];
    tmp24Result = tmp24(VoicePanelFormSection4, obj28);
  }
  children[4] = tmp24Result;
  let tmp24Result2 = null;
  if (setting) {
    const obj32 = { title: intl17.string(tmp(tmp2[24]).t.J6rqB7), hasIcons: true, children: items18 };
    const VoicePanelFormSection5 = tmp(tmp2[51]).VoicePanelFormSection;
    intl17 = tmp(tmp2[24]).intl;
    let tmp26Result10 = null;
    if (stateFromStores5) {
      tmp26Result10 = tmp26(ShareActivityLogsButton, {});
    }
    items18 = [tmp26Result10, closure_18(ActivityDebugToggle, {})];
    tmp24Result2 = tmp24(VoicePanelFormSection5, obj32);
  }
  children[5] = tmp24Result2;
  return closure_19(tmp25, { children });
});
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx");

export default memoResult;
export { VoicePanelSettingsOverviewHeader };
