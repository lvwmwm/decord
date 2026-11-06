// Module ID: 18943
// Function ID: 18944
// Name: GuildSettingsModalMembersWithTabs
// Dependencies: [19, 17, 5041, 5102, 1385, 21, 5170, 575, 9087, 18547, 504, 7526, 1113, 18944, 18945, 18952, 5204, 1499, 10012, 18947, 7653, 9198, 9077, 12344, 14401, 2]

// Module 18943 (GuildSettingsModalMembersWithTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5204 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 7526 */;
import ContextMenu2 from "ContextMenu" /* 10012 */;
import MemberSafetyPageTypes from "MemberSafetyPageTypes" /* 18944 */;
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers" /* 18945 */;
import GuildSettingsModalMemberApplicationsDefault from "GuildSettingsModalMemberApplications" /* 18952 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5041 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let navigation;

let c9;
let metroImportAll;
let obj2;
let tmp2;
const showMembersManagementActionSheet = tmp2(18947);
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { container: obj2, content: { flex: 1 }, tabContainer: { marginTop: 12, minHeight: 32 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_10 = createStyles.createStyles(obj);
const memoResult = react.memo(function GuildSettingsModalMembersWithTabs(guildId) {
  let callback2;
  let items8;
  let num3;
  let onLayout;
  let ref;
  guildId = guildId.guildId;
  let num2;
  let stateFromStores;
  let stateFromStores1;
  navigation = undefined;
  let callback;
  let callback1;
  let segmentedControlState;
  let tmp = stateFromStores;
  let tmp2 = num2(stateFromStores[8])();
  const width = tmp2.width;
  let num = 0;
  ({ ref, onLayout } = tmp2);
  if (undefined !== width) {
    num = width;
  }
  let obj = guildId(tmp[9]);
  num2 = obj.useSubmittedGuildJoinRequestTotal({ guildId });
  if (num2 == null) {
    num2 = 0;
  }
  const tmp4 = closure_10();
  let items = [callback];
  const items1 = [guildId];
  const tmp3Result = guildId(tmp[10]);
  stateFromStores = tmp3Result.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const items2 = [callback1, segmentedControlState];
  const items3 = [stateFromStores];
  const tmp3Result4 = guildId(tmp[10]);
  stateFromStores1 = tmp3Result4.useStateFromStores(items2, () => {
    let canPruneGuildMembersResult = null != stateFromStores;
    if (canPruneGuildMembersResult) {
      const obj = MemberSafetyPermissionsUtils;
      canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
    }
    return canPruneGuildMembersResult;
  }, items3);
  let obj4 = stateFromStores1;
  const items4 = [guildId, num2];
  const memo = stateFromStores1.useMemo(() => {
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
    const obj = { label: intl.string(intl5.t.NOOm1Z), id: MemberSafetyPageTypes.MemberSafetyPageTab.ALL_MEMBERS, page: metroImportAll(GuildSettingsModalMembersDefault, obj2) };
    intl = intl5.intl;
    const items = [obj, , , ];
    obj2 = { guildId };
    const obj3 = { label: intl2.string(intl5.t["4eQVBO"]), id: MemberSafetyPageTypes.MemberSafetyPageTab.PENDING, count: tmp6, page: metroImportAll(tmp4Result, obj4) };
    intl2 = intl5.intl;
    tmp6 = undefined;
    if (num2 > 0) {
      tmp6 = num2;
    }
    obj4 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
    items[1] = obj3;
    tmp4Result = GuildSettingsModalMemberApplicationsDefault;
    const obj5 = { label: intl3.string(intl5.t.bSZkla), id: MemberSafetyPageTypes.MemberSafetyPageTab.REJECTED, page: metroImportAll(tmp4Result3, obj6) };
    intl3 = tmp(1113).intl;
    obj6 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED };
    items[2] = obj5;
    tmp4Result3 = GuildSettingsModalMemberApplicationsDefault;
    const obj7 = { label: intl4.string(intl5.t.aURgY2), id: MemberSafetyPageTypes.MemberSafetyPageTab.APPROVED, page: metroImportAll(tmp4Result4, obj8) };
    intl4 = tmp(1113).intl;
    obj8 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED };
    items[3] = obj7;
    tmp4Result4 = GuildSettingsModalMemberApplicationsDefault;
    return items;
  }, items4);
  const tmp3Result5 = guildId(tmp[17]);
  navigation = tmp3Result5.useNavigation();
  const items5 = [stateFromStores1, stateFromStores];
  callback = stateFromStores1.useCallback(() => {
    let membersManagementActions;
    const ContextMenu = ContextMenu2.ContextMenu;
    const tmp = metroImportAll;
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
        const obj = { source: num2(stateFromStores[21]), accessibilityLabel: intl.string(guildId(stateFromStores[12]).t.ogxXGq), ref };
        const HeaderActionButton = guildId(stateFromStores[20]).HeaderActionButton;
        intl = guildId(stateFromStores[12]).intl;
        const merged1 = Object.assign(merged);
        return closure_1_8(HeaderActionButton, obj);
      }
    };
    return tmp(ContextMenu, obj2);
  }, items5);
  const items6 = [navigation, callback];
  callback1 = stateFromStores1.useCallback((arg0) => {
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
  let obj2 = { pageWidth: num, items: memo, defaultIndex: num3, onSetActiveIndex: callback1 };
  num3 = 0;
  const useSegmentedControlState = tmp3(tmp[22]).useSegmentedControlState;
  guildId(tmp[22]);
  if (num2 > 0) {
    num3 = 1;
  }
  segmentedControlState = useSegmentedControlState(obj2);
  const items7 = [segmentedControlState.activeIndex, callback1];
  const effect = obj4.useEffect(() => {
    const activeIndex = segmentedControlState.activeIndex;
    callback1(activeIndex.get());
  }, items7);
  let obj3 = { style: tmp4.container, children: items8 };
  let obj5 = { style: tmp4.tabContainer, children: closure_8(tmp3(tmp[23]).Tabs, { state: segmentedControlState, grow: true, formatCount: callback2 }) };
  callback2 = obj4.useCallback((toLocaleString) => {
    const obj = guildId(stateFromStores[23]);
    return "(" + obj.defaultCountFormatter(toLocaleString) + ")";
  }, []);
  items8 = [closure_8(navigation, obj5), ];
  let obj6 = { style: tmp4.content, ref, onLayout, children: closure_8(tmp3(tmp[24]).SegmentedControlPages, { state: segmentedControlState }) };
  items8[1] = closure_8(navigation, obj6);
  return closure_9(navigation, obj3);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default memoResult;
