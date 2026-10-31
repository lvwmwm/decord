// Module ID: 14571
// Function ID: 14572
// Name: ConjureAppChannelSheet
// Dependencies: [19, 14568, 4863, 4946, 1072, 21, 5014, 575, 5652, 7420, 6027, 5624, 14569, 14542, 14401, 9676, 14397, 504, 5258, 10848, 10976, 8199, 9118, 7060, 6975, 6983, 12553, 1113, 11883, 10846, 3868, 10232, 6984, 5735, 7561, 10994, 11281, 8661, 10977, 10084, 5272, 5275, 7292, 2]

// Module 14571 (ConjureAppChannelSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import useChannelNameDefault from "useChannelName" /* 5652 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import useAppChannelApplication from "useAppChannelApplication" /* 7420 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8199 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9118 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10848 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10976 */;
import openConjureAppChannelSheet from "openConjureAppChannelSheet" /* 14569 */;
import react_mod from "react" /* 19 */;
import ChannelMemberCountStore from "ChannelMemberCountStore" /* 14568 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;
let BottomSheet;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
function ConjureAppChannelSheetHeader(channel) {
  let items;
  channel = channel.channel;
  const tmp = closure_13();
  const tmp3 = useChannelNameDefault(channel);
  const obj = useAppChannelApplication;
  const appChannelApplication = obj.useAppChannelApplication(channel);
  const obj2 = { spacing: nativeDefault.space.PX_4, align: "center", children: items };
  const Stack = Stack_Stack.Stack;
  items = [, ];
  const obj3 = { variant: "heading-lg/bold", lineClamp: 1, style: tmp.centered, children: tmp3 };
  items[0] = authStore(Text_Text.Heading, obj3);
  let tmp7Result = null;
  const tmp6 = unpackModuleId;
  const tmp7 = authStore;
  if (null != appChannelApplication) {
    const obj4 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.centered, children: appChannelApplication.name };
    tmp7Result = tmp7(Text_Text.Text, obj4);
  }
  items[1] = tmp7Result;
  return tmp6(Stack, obj2);
}
function ConjureAppChannelSheetContent(channel) {
  let ChannelNotificationIcon;
  let TableRow10;
  let TableRowIcon;
  let TableRowIcon10;
  let TableRowIcon2;
  let TableRowIcon3;
  let TableRowIcon4;
  let TableRowIcon5;
  let TableRowIcon6;
  let TableRowIcon7;
  let TableRowIcon8;
  let TableRowIcon9;
  let closure_3;
  let formatToPlainStringResult;
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let obj12;
  let obj14;
  let obj16;
  let obj19;
  let obj21;
  let obj24;
  let obj26;
  let obj27;
  let obj7;
  let obj9;
  let string;
  let t;
  let tmp22Result;
  const f106901 = () => {
    let fn = null;
    if (null != report) {
      fn = () => {
        const obj = report(remixProject[12]);
        const result = obj.closeConjureAppChannelSheet();
        closure_1_0();
      };
    }
    return fn;
  };
  channel = channel.channel;
  let remixProject;
  react = undefined;
  let canManageChannel;
  let guild_id = channel.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  let tmp2 = channel;
  const tmp3 = remixProject;
  let obj = channel(remixProject[13]);
  const appChannelAppActions = obj.useAppChannelAppActions(channel);
  remixProject = guild_id(remixProject[14])(channel, true).remixProject;
  let obj2 = channel(remixProject[15]);
  const isConjureMobileEnabled = obj2.useIsConjureMobileEnabled(null != remixProject, "ConjureAppChannelSheet");
  const tmp7 = guild_id(remixProject[16])(channel);
  react = tmp7;
  let obj3 = channel(remixProject[15]);
  const isConjureMobileEnabled1 = obj3.useIsConjureMobileEnabled(null != tmp7, "ConjureAppChannelSheet");
  const items = [PermissionStore];
  const items1 = [channel];
  const obj4 = channel(remixProject[17]);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => {
    const obj = { canManageChannel: PermissionStore.can(constants.MANAGE_CHANNELS, channel), canInvite: PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel) };
    return obj;
  }, items1);
  canManageChannel = stateFromStoresObject.canManageChannel;
  const canInvite = stateFromStoresObject.canInvite;
  const items2 = [canManageChannel];
  const items3 = [channel.id];
  const obj5 = channel(remixProject[17]);
  const stateFromStores = obj5.useStateFromStores(items2, () => ChannelMemberCountStore.getMemberCount(channel.id).total, items3);
  const items4 = [guild_id, channel.id];
  const effect = react.useEffect(() => {
    if (null != guild_id) {
      const count = ChannelMemberCountStore.requestCount(tmp, channel.id);
    }
  }, items4);
  const reload = appChannelAppActions.reload;
  const items5 = [reload];
  const memo = react.useMemo(f106901, items5);
  const close = appChannelAppActions.close;
  const items6 = [close];
  const memo1 = react.useMemo(f106901, items6);
  const appInfo = appChannelAppActions.appInfo;
  const items7 = [appInfo];
  const memo2 = react.useMemo(f106901, items7);
  const devicePermissions = appChannelAppActions.devicePermissions;
  const items8 = [devicePermissions];
  const memo3 = react.useMemo(f106901, items8);
  const report = appChannelAppActions.report;
  const items9 = [report];
  const memo4 = react.useMemo(f106901, items9);
  const items10 = [guild_id, remixProject];
  const items11 = [tmp7];
  const callback = react.useCallback(() => {
    let obj3;
    let tmp2 = null != remixProject;
    const tmp = remixProject;
    if (tmp2) {
      tmp2 = null != guild_id;
    }
    if (tmp2) {
      const obj = openConjureAppChannelSheet;
      const result = obj.closeConjureAppChannelSheet();
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: authStore(ConjureRemixSheetDefault, obj3) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj3 = {
        project: tmp,
        currentGuildId: guild_id,
        onRemixed(arg0) {
            return guild_id(remixProject[20])(arg0, { entryPoint: "remix" });
          }
      };
      showActionSheet(obj2);
    }
  }, items10);
  const items12 = [canManageChannel, channel.id];
  const callback1 = react.useCallback(() => {
    if (null != closure_3) {
      const obj = openConjureAppChannelSheet;
      const result = obj.closeConjureAppChannelSheet();
      openConjureHomeScreenDefault(tmp.id, { entryPoint: "app_channel" });
    }
  }, items11);
  const items13 = [channel.id];
  const callback2 = react.useCallback(() => {
    const obj = openConjureAppChannelSheet;
    const result = obj.closeConjureAppChannelSheet();
    const obj2 = ChannelSettingsActionCreatorsDefault;
    obj2.setSection(canManageChannel ? metroImportDefault.OVERVIEW : metroImportDefault.NOTIFICATIONS);
    const tmp3Result = ChannelSettingsActionCreatorsDefault;
    tmp3Result.open(channel.id);
  }, items12);
  const items14 = [channel];
  const callback3 = react.useCallback(() => {
    const obj = openConjureAppChannelSheet;
    const result = obj.closeConjureAppChannelSheet();
    const obj2 = openConjureAppChannelSheet;
    const result1 = obj2.openConjureAppChannelMembersSheet(channel.id);
  }, items13);
  const callback4 = react.useCallback(() => {
    const obj = openConjureAppChannelSheet;
    const result = obj.closeConjureAppChannelSheet();
    const obj2 = instant_invite_InstantInviteUtils;
    const obj3 = { source: metroImportAll.CONTEXT_MENU };
    const result1 = obj2.showInstantInviteActionSheet(channel, obj3);
  }, items14);
  const children = [closure_10(ConjureAppChannelSheetHeader, { channel }), , , , ];
  const tmp23 = closure_12;
  if (null != memo) {
    let tmp24Result = null;
    const TableRowGroup = tmp2(tmp3[23]).TableRowGroup;
    if (null != memo) {
      const obj6 = { onPress: memo, icon: closure_10(TableRowIcon, obj7), label: intl.string(tmp2(tmp3[27]).t.kHie4V) };
      const TableRow = tmp2(tmp3[24]).TableRow;
      obj7 = { IconComponent: tmp2(tmp3[26]).RefreshIcon };
      TableRowIcon = tmp2(tmp3[25]).TableRowIcon;
      intl = tmp2(tmp3[27]).intl;
      tmp24Result = tmp24(TableRow, obj6);
    }
    const items16 = [tmp24Result, ];
    let tmp24Result8 = null;
    if (null != memo1) {
      const obj8 = { onPress: memo1, icon: closure_10(TableRowIcon2, obj9), label: intl2.string(tmp2(tmp3[27]).t.VkMnR2) };
      const TableRow2 = tmp2(tmp3[24]).TableRow;
      obj9 = { IconComponent: tmp2(tmp3[28]).DoorExitIcon };
      TableRowIcon2 = tmp2(tmp3[25]).TableRowIcon;
      intl2 = tmp2(tmp3[27]).intl;
      tmp24Result8 = tmp24(TableRow2, obj8);
    }
    const obj10 = { hasIcons: true, children: items16 };
    items16[1] = tmp24Result8;
    tmp22Result = tmp22(TableRowGroup, obj10);
  } else {
    tmp22Result = null;
  }
  children[1] = tmp22Result;
  let tmp24Result9 = null;
  const TableRowGroup2 = tmp2(tmp3[23]).TableRowGroup;
  if (isConjureMobileEnabled) {
    tmp24Result9 = null;
    if (null != remixProject) {
      tmp24Result9 = null;
      if (null != guild_id) {
        const obj11 = { onPress: callback, icon: closure_10(TableRowIcon3, obj12), label: intl3.string(guild_id(tmp3[30]).KMwCb7) };
        const TableRow3 = tmp2(tmp3[24]).TableRow;
        obj12 = { IconComponent: tmp2(tmp3[29]).RemixIcon };
        TableRowIcon3 = tmp2(tmp3[25]).TableRowIcon;
        intl3 = tmp2(tmp3[27]).intl;
        tmp24Result9 = tmp24(TableRow3, obj11);
      }
    }
  }
  const items17 = [tmp24Result9, , , , ];
  let tmp24Result10 = null;
  if (isConjureMobileEnabled1) {
    tmp24Result10 = null;
    if (null != tmp7) {
      tmp24Result10 = null;
      if (null != guild_id) {
        const obj13 = { onPress: callback1, icon: closure_10(TableRowIcon4, obj14), label: intl4.string(guild_id(tmp3[30]).jMMrDM), trailing: closure_10(tmp2(tmp3[32]).TableRowArrow, {}) };
        const TableRow4 = tmp2(tmp3[24]).TableRow;
        obj14 = { IconComponent: tmp2(tmp3[31]).PencilIcon };
        TableRowIcon4 = tmp2(tmp3[25]).TableRowIcon;
        intl4 = tmp2(tmp3[27]).intl;
        tmp24Result10 = tmp24(TableRow4, obj13);
      }
    }
  }
  items17[1] = tmp24Result10;
  let tmp24Result11 = null;
  if (null != memo2) {
    const obj15 = { onPress: memo2, icon: closure_10(TableRowIcon5, obj16), label: intl5.string(tmp2(tmp3[27]).t.Sh2z9g) };
    const TableRow5 = tmp2(tmp3[24]).TableRow;
    obj16 = { IconComponent: tmp2(tmp3[33]).CircleInformationIcon };
    TableRowIcon5 = tmp2(tmp3[25]).TableRowIcon;
    intl5 = tmp2(tmp3[27]).intl;
    tmp24Result11 = tmp24(TableRow5, obj15);
  }
  items17[2] = tmp24Result11;
  const obj17 = { onPress: callback2, icon: closure_10(TableRowIcon6, { IconComponent: ChannelNotificationIcon }), label: string(canManageChannel ? t.XPDhcc : t.h850Ss), trailing: closure_10(tmp2(tmp3[32]).TableRowArrow, {}) };
  const TableRow6 = tmp2(tmp3[24]).TableRow;
  TableRowIcon6 = tmp2(tmp3[25]).TableRowIcon;
  if (canManageChannel) {
    ChannelNotificationIcon = tmp2(tmp3[34]).SettingsIcon;
  } else {
    ChannelNotificationIcon = tmp2(tmp3[35]).ChannelNotificationIcon;
  }
  const intl6 = tmp2(tmp3[27]).intl;
  string = intl6.string;
  t = tmp2(tmp3[27]).t;
  items17[3] = closure_10(TableRow6, obj17);
  let tmp24Result12 = null;
  if (null != memo3) {
    const obj18 = { onPress: memo3, icon: closure_10(TableRowIcon7, obj19), label: intl7.string(guild_id(tmp3[30]).wum6n2), trailing: closure_10(tmp2(tmp3[32]).TableRowArrow, {}) };
    const TableRow7 = tmp2(tmp3[24]).TableRow;
    obj19 = { IconComponent: tmp2(tmp3[36]).ShieldIcon };
    TableRowIcon7 = tmp2(tmp3[25]).TableRowIcon;
    intl7 = tmp2(tmp3[27]).intl;
    tmp24Result12 = tmp24(TableRow7, obj18);
  }
  items17[4] = tmp24Result12;
  children[2] = closure_11(TableRowGroup2, { hasIcons: true, children: items17 });
  const TableRowGroup3 = tmp2(tmp3[23]).TableRowGroup;
  const obj20 = { onPress: callback3, icon: closure_10(TableRowIcon8, obj21), label: formatToPlainStringResult, trailing: closure_10(tmp2(tmp3[32]).TableRowArrow, {}) };
  const TableRow8 = tmp2(tmp3[24]).TableRow;
  obj21 = { IconComponent: tmp2(tmp3[37]).GroupIcon };
  TableRowIcon8 = tmp2(tmp3[25]).TableRowIcon;
  if (null != stateFromStores) {
    const intl9 = tmp2(tmp3[27]).intl;
    const obj22 = { count: stateFromStores };
    formatToPlainStringResult = intl9.formatToPlainString(tmp2(tmp3[27]).t.AWmdd9, obj22);
  } else {
    const intl8 = tmp2(tmp3[27]).intl;
    formatToPlainStringResult = intl8.string(tmp2(tmp3[27]).t.x87QCk);
  }
  const items18 = [closure_10(TableRow8, obj20), ];
  let tmp24Result13 = null;
  if (canInvite) {
    const obj23 = { onPress: callback4, icon: closure_10(TableRowIcon9, obj24), label: intl10.string(tmp2(tmp3[27]).t["f1+QIK"]), trailing: closure_10(tmp2(tmp3[32]).TableRowArrow, {}) };
    const TableRow9 = tmp2(tmp3[24]).TableRow;
    obj24 = { IconComponent: tmp2(tmp3[38]).GroupPlusIcon };
    TableRowIcon9 = tmp2(tmp3[25]).TableRowIcon;
    intl10 = tmp2(tmp3[27]).intl;
    tmp24Result13 = tmp24(TableRow9, obj23);
  }
  items18[1] = tmp24Result13;
  children[3] = closure_11(TableRowGroup3, { hasIcons: true, children: items18 });
  let tmp24Result14 = null;
  if (null != memo4) {
    const obj25 = { hasIcons: true, children: closure_10(TableRow10, obj26) };
    const TableRowGroup4 = tmp2(tmp3[23]).TableRowGroup;
    obj26 = { onPress: memo4, variant: "danger", icon: closure_10(TableRowIcon10, obj27), label: intl11.string(tmp2(tmp3[27]).t.NgA5vp) };
    TableRow10 = tmp2(tmp3[24]).TableRow;
    obj27 = { IconComponent: tmp2(tmp3[39]).FlagIcon, variant: "danger" };
    TableRowIcon10 = tmp2(tmp3[25]).TableRowIcon;
    intl11 = tmp2(tmp3[27]).intl;
    tmp24Result14 = tmp24(TableRowGroup4, obj25);
  }
  children[4] = tmp24Result14;
  return closure_11(tmp23, { children });
}
let react = react_mod;
({ ChannelSettingsSections: metroImportDefault, InstantInviteSources: metroImportAll, Permissions: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { content: obj2, centered: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
const memoResult = react.memo(function ConjureAppChannelSheet(channelId) {
  let BottomSheetScrollView;
  let SafeAreaPaddingView;
  let Stack;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  channelId = channelId.channelId;
  const tmp = closure_13();
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = openConjureAppChannelSheet;
      const result = obj.closeConjureAppChannelSheet();
    }
  }, items2);
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj2 = { startExpanded: true, scrollable: true, children: closure_10(BottomSheetScrollView, obj3) };
    BottomSheet = tmp2(5272).BottomSheet;
    obj3 = { children: closure_10(SafeAreaPaddingView, obj4) };
    BottomSheetScrollView = tmp2(5275).BottomSheetScrollView;
    obj4 = { bottom: true, style: tmp.content, children: closure_10(Stack, obj5) };
    SafeAreaPaddingView = tmp2(7292).SafeAreaPaddingView;
    obj5 = { spacing: stateFromStores(575).space.PX_24, children: closure_10(ConjureAppChannelSheetContent, obj6) };
    Stack = tmp2(6027).Stack;
    obj6 = { channel: stateFromStores };
    tmp6 = closure_10(BottomSheet, obj2);
  }
  return tmp6;
});
let result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureAppChannelSheet.tsx");

export default memoResult;
