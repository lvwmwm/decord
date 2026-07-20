// Module ID: 15162
// Function ID: 114357
// Dependencies: [1849, 1212, 4096, 15166, 1934, 5640, 15167, 5493, 2, 31, 27, 4120, 1910, 8428, 33, 4126, 689, 566, 8427, 4096]

// Module 15162
import importAllResult from "_isNativeReflectConstruct";
import { View } from "getSystemLocale";
import showActionSheet from "showActionSheet";
import MembersFilterActionSheet from "MembersFilterActionSheet";
import maybeLoadBundle from "maybeLoadBundle";
import getContextForPermission from "getContextForPermission";
import MembersPruneActionSheetContent from "MembersPruneActionSheetContent";

({ jsx: closure_8, jsxs: closure_9 } = getContextForPermission);
let obj = {};
obj = { flex: 1, backgroundColor: require("showSimpleActionSheet").colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.content = { flex: 1 };
obj.tabContainer = {};
let closure_10 = MembersPruneActionSheetContent.createStyles(obj);
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let importDefault;
  let dependencyMap;
  let importAllResult;
  let View;
  let showActionSheet;
  let MembersFilterActionSheet;
  let maybeLoadBundle;
  let obj = arg1(dependencyMap[9]);
  const submittedGuildJoinRequestTotal = obj.useSubmittedGuildJoinRequestTotal({ guildId });
  let num = 0;
  if (null != submittedGuildJoinRequestTotal) {
    num = submittedGuildJoinRequestTotal;
  }
  importDefault = num;
  const tmp2 = callback3();
  let obj1 = arg1(dependencyMap[10]);
  const items = [showActionSheet];
  const items1 = [guildId];
  const stateFromStores = obj1.useStateFromStores(items, () => callback.getGuild(guildId), items1);
  dependencyMap = stateFromStores;
  let obj2 = arg1(dependencyMap[10]);
  const items2 = [MembersFilterActionSheet, maybeLoadBundle];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let canPruneGuildMembersResult = null != stateFromStores;
    if (canPruneGuildMembersResult) {
      canPruneGuildMembersResult = guildId(stateFromStores[11]).canPruneGuildMembers(stateFromStores, segmentedControlState.getCurrentUser(), callback1);
      const obj = guildId(stateFromStores[11]);
    }
    return canPruneGuildMembersResult;
  }, items3);
  importAllResult = stateFromStores1;
  const items4 = [guildId, num];
  const memo = importAllResult.useMemo(() => {
    let obj = {};
    const intl = guildId(stateFromStores[12]).intl;
    obj.label = intl.string(guildId(stateFromStores[12]).t.NOOm1Z);
    obj.id = guildId(stateFromStores[13]).MemberSafetyPageTab.ALL_MEMBERS;
    obj = { guildId };
    obj.page = callback(num(stateFromStores[14]), obj);
    const items = [obj, , , ];
    obj = {};
    const intl2 = guildId(stateFromStores[12]).intl;
    obj.label = intl2.string(guildId(stateFromStores[12]).t.4eQVBO);
    obj.id = guildId(stateFromStores[13]).MemberSafetyPageTab.PENDING;
    let tmp;
    if (num > 0) {
      tmp = num;
    }
    obj.count = tmp;
    const obj1 = { guildId, applicationStatus: guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.SUBMITTED };
    obj.page = callback(num(stateFromStores[15]), obj1);
    items[1] = obj;
    const obj2 = {};
    const intl3 = guildId(stateFromStores[12]).intl;
    obj2.label = intl3.string(guildId(stateFromStores[12]).t.bSZkla);
    obj2.id = guildId(stateFromStores[13]).MemberSafetyPageTab.REJECTED;
    const obj3 = { guildId };
    const tmp2 = num(stateFromStores[15]);
    obj3.applicationStatus = guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.REJECTED;
    obj2.page = callback(num(stateFromStores[15]), obj3);
    items[2] = obj2;
    const obj4 = {};
    const intl4 = guildId(stateFromStores[12]).intl;
    obj4.label = intl4.string(guildId(stateFromStores[12]).t.aURgY2);
    obj4.id = guildId(stateFromStores[13]).MemberSafetyPageTab.APPROVED;
    const obj5 = { guildId };
    const tmp3 = num(stateFromStores[15]);
    obj5.applicationStatus = guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.APPROVED;
    obj4.page = callback(num(stateFromStores[15]), obj5);
    items[3] = obj4;
    return items;
  }, items4);
  const navigation = arg1(dependencyMap[17]).useNavigation();
  View = navigation;
  const items5 = [stateFromStores1, stateFromStores];
  const callback = importAllResult.useCallback(() => {
    let obj = {};
    if (null != stateFromStores) {
      obj = { guild: stateFromStores, canPrune: stateFromStores1 };
      let membersManagementActions = guildId(stateFromStores[19]).getMembersManagementActions(obj);
      const obj2 = guildId(stateFromStores[19]);
    } else {
      membersManagementActions = [];
    }
    obj.items = membersManagementActions;
    obj.children = function children(ref) {
      let obj = Object.create(null);
      obj.ref = 0;
      const merged = Object.assign(ref, obj);
      obj = { source: callback2(closure_2[21]) };
      const intl = callback(closure_2[12]).intl;
      obj.accessibilityLabel = intl.string(callback(closure_2[12]).t.ogxXGq);
      obj.ref = ref.ref;
      const merged1 = Object.assign(merged);
      return callback3(callback(closure_2[20]).HeaderActionButton, obj);
    };
    return closure_8(guildId(stateFromStores[18]).ContextMenu, obj);
  }, items5);
  showActionSheet = callback;
  const items6 = [navigation, callback];
  const callback1 = importAllResult.useCallback((arg0) => {
    const guildId = arg0;
    navigation.setOptions({
      headerRight() {
        let tmp = null;
        if (0 === arg0) {
          tmp = callback();
        }
        return tmp;
      }
    });
  }, items6);
  MembersFilterActionSheet = callback1;
  const obj4 = arg1(dependencyMap[17]);
  obj = { pageWidth: importDefault(dependencyMap[8])().width, items: memo };
  let num2 = 0;
  if (num > 0) {
    num2 = 1;
  }
  obj.defaultIndex = num2;
  obj.onSetActiveIndex = callback1;
  const segmentedControlState = arg1(dependencyMap[22]).useSegmentedControlState(obj);
  maybeLoadBundle = segmentedControlState;
  const items7 = [segmentedControlState.activeIndex, callback1];
  const effect = importAllResult.useEffect(() => {
    const activeIndex = segmentedControlState.activeIndex;
    callback1(activeIndex.get());
  }, items7);
  obj = { style: tmp2.container };
  obj1 = { style: tmp2.tabContainer };
  const callback2 = importAllResult.useCallback((toLocaleString) => "(" + guildId(stateFromStores[23]).defaultCountFormatter(toLocaleString) + ")", []);
  obj1.children = callback(arg1(dependencyMap[24]).Tabs, { state: segmentedControlState, grow: true, formatCount: callback2 });
  const items8 = [callback(View, obj1), ];
  obj2 = { style: tmp2.content, children: callback(arg1(dependencyMap[25]).SegmentedControlPages, { state: segmentedControlState }) };
  items8[1] = callback(View, obj2);
  obj.children = items8;
  return callback2(View, obj);
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default memoResult;
