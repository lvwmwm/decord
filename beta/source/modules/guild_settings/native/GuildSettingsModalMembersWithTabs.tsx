// Module ID: 16220
// Function ID: 16221
// Name: GuildSettingsModalMembersWithTabs
// Dependencies: [32, 19, 17, 2067, 4469, 1372, 21, 4836, 576, 15847, 504, 6683, 1115, 16221, 16222, 16228, 4658, 1485, 7358, 16223, 6795, 9091, 9083, 12111, 12113, 2]

// Module 16220 (GuildSettingsModalMembersWithTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6683 */;
import ContextMenu2 from "ContextMenu" /* 7358 */;
import MemberSafetyPageTypes from "MemberSafetyPageTypes" /* 16221 */;
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers" /* 16222 */;
import GuildSettingsModalMemberApplicationsDefault from "GuildSettingsModalMemberApplications" /* 16228 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let guildId, navigation;

let c10;
let c9;
let obj2;
let tmp2;
const showMembersManagementActionSheet = tmp2(16223);
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { container: obj2, content: { flex: 1 }, tabContainer: { marginTop: 12, minHeight: 32 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo((guildId) => {
  let callback3;
  let items8;
  let num2;
  guildId = guildId.guildId;
  let num;
  let stateFromStores;
  let stateFromStores1;
  navigation = undefined;
  let callback;
  let callback1;
  let segmentedControlState;
  let obj = stateFromStores1;
  let tmp = stateFromStores(stateFromStores1.useState(0), 2);
  let closure_1 = tmp[1];
  const tmp4 = num;
  const first = tmp[0];
  let obj2 = guildId(num[9]);
  num = obj2.useSubmittedGuildJoinRequestTotal({ guildId });
  if (num == null) {
    num = 0;
  }
  const tmp5 = closure_11();
  let items = [callback];
  const items1 = [guildId];
  const tmp3Result = guildId(tmp4[10]);
  stateFromStores = tmp3Result.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const items2 = [callback1, segmentedControlState];
  const items3 = [stateFromStores];
  const tmp3Result4 = guildId(tmp4[10]);
  stateFromStores1 = tmp3Result4.useStateFromStores(items2, () => {
    let canPruneGuildMembersResult = null != stateFromStores;
    if (canPruneGuildMembersResult) {
      const obj = MemberSafetyPermissionsUtils;
      canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
    }
    return canPruneGuildMembersResult;
  }, items3);
  const items4 = [guildId, num];
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj2;
    let obj4;
    let obj6;
    let obj8;
    let tmp4Result;
    let tmp4Result3;
    let tmp4Result4;
    let tmp6;
    const obj = { label: intl.string(intl5.t.NOOm1Z), id: MemberSafetyPageTypes.MemberSafetyPageTab.ALL_MEMBERS, page: React4(GuildSettingsModalMembersDefault, obj2) };
    intl = intl5.intl;
    const items = [obj, , , ];
    obj2 = { guildId };
    const obj3 = { label: intl2.string(intl5.t["4eQVBO"]), id: MemberSafetyPageTypes.MemberSafetyPageTab.PENDING, count: tmp6, page: React4(tmp4Result, obj4) };
    intl2 = intl5.intl;
    tmp6 = undefined;
    if (num > 0) {
      tmp6 = num;
    }
    obj4 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
    items[1] = obj3;
    tmp4Result = GuildSettingsModalMemberApplicationsDefault;
    const obj5 = { label: intl3.string(intl5.t.bSZkla), id: MemberSafetyPageTypes.MemberSafetyPageTab.REJECTED, page: React4(tmp4Result3, obj6) };
    intl3 = tmp(1115).intl;
    obj6 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED };
    items[2] = obj5;
    tmp4Result3 = GuildSettingsModalMemberApplicationsDefault;
    const obj7 = { label: intl4.string(intl5.t.aURgY2), id: MemberSafetyPageTypes.MemberSafetyPageTab.APPROVED, page: React4(tmp4Result4, obj8) };
    intl4 = tmp(1115).intl;
    obj8 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED };
    items[3] = obj7;
    tmp4Result4 = GuildSettingsModalMemberApplicationsDefault;
    return items;
  }, items4);
  const tmp3Result5 = guildId(tmp4[17]);
  navigation = tmp3Result5.useNavigation();
  const items5 = [stateFromStores1, stateFromStores];
  callback = obj.useCallback(() => {
    let membersManagementActions;
    const ContextMenu = ContextMenu2.ContextMenu;
    const tmp = React4;
    if (null != stateFromStores) {
      let obj = { guild: tmp4, canPrune: stateFromStores1 };
      const tmp2Result = showMembersManagementActionSheet;
      membersManagementActions = tmp2Result.getMembersManagementActions(obj);
    } else {
      membersManagementActions = [];
    }
    const obj2 = {
      items: membersManagementActions,
      children(ref) {
        let intl;
        ref = ref.ref;
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { source: closure_1_1(num[21]), accessibilityLabel: intl.string(guildId(num[12]).t.ogxXGq), ref };
        const HeaderActionButton = guildId(num[20]).HeaderActionButton;
        intl = guildId(num[12]).intl;
        const merged1 = Object.assign(merged);
        return closure_1_9(HeaderActionButton, obj);
      }
    };
    return tmp(ContextMenu, obj2);
  }, items5);
  const items6 = [navigation, callback];
  callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = {
      headerRight() {
        let tmp = null;
        if (0 === closure_0) {
          tmp = callback();
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items6);
  const callback2 = obj.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = { pageWidth: first, items: memo, defaultIndex: num2, onSetActiveIndex: callback1 };
  num2 = 0;
  const useSegmentedControlState = tmp3(tmp4[22]).useSegmentedControlState;
  guildId(tmp4[22]);
  if (num > 0) {
    num2 = 1;
  }
  segmentedControlState = useSegmentedControlState(obj3);
  const items7 = [segmentedControlState.activeIndex, callback1];
  const effect = obj.useEffect(() => {
    const activeIndex = segmentedControlState.activeIndex;
    callback1(activeIndex.get());
  }, items7);
  let obj4 = { style: tmp5.container, children: items8 };
  let obj5 = { style: tmp5.tabContainer, children: closure_9(tmp3(tmp4[23]).Tabs, { state: segmentedControlState, grow: true, formatCount: callback3 }) };
  callback3 = obj.useCallback((toLocaleString) => {
    const obj = guildId(num[23]);
    return "(" + obj.defaultCountFormatter(toLocaleString) + ")";
  }, []);
  items8 = [closure_9(navigation, obj5), ];
  let obj6 = { style: tmp5.content, onLayout: callback2, children: closure_9(tmp3(tmp4[24]).SegmentedControlPages, { state: segmentedControlState }) };
  items8[1] = closure_9(navigation, obj6);
  return closure_10(navigation, obj4);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default memoResult;
