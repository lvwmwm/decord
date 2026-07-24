// Module ID: 15343
// Function ID: 116950
// Dependencies: [31, 27, 1838, 3758, 1849, 33, 4130, 689, 1450, 15087, 566, 5646, 1212, 15344, 15345, 15351, 3950, 1456, 9338, 15346, 5788, 8512, 8404, 11676, 11676, 8797, 2]

// Module 15343
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.content = { flex: 1 };
obj.tabContainer = { marginTop: 12, minHeight: 32 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  let num;
  let stateFromStores;
  let stateFromStores1;
  let navigation;
  let callback;
  let callback1;
  let segmentedControlState;
  let obj = guildId(stateFromStores[9]);
  const submittedGuildJoinRequestTotal = obj.useSubmittedGuildJoinRequestTotal({ guildId });
  num = 0;
  if (null != submittedGuildJoinRequestTotal) {
    num = submittedGuildJoinRequestTotal;
  }
  let tmp2 = callback3();
  let obj1 = guildId(stateFromStores[10]);
  let items = [callback];
  const items1 = [guildId];
  stateFromStores = obj1.useStateFromStores(items, () => callback.getGuild(guildId), items1);
  let obj2 = guildId(stateFromStores[10]);
  const items2 = [callback1, segmentedControlState];
  const items3 = [stateFromStores];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let canPruneGuildMembersResult = null != stateFromStores;
    if (canPruneGuildMembersResult) {
      canPruneGuildMembersResult = guildId(stateFromStores[11]).canPruneGuildMembers(stateFromStores, segmentedControlState.getCurrentUser(), callback1);
      const obj = guildId(stateFromStores[11]);
    }
    return canPruneGuildMembersResult;
  }, items3);
  const items4 = [guildId, num];
  const memo = stateFromStores1.useMemo(() => {
    let obj = {};
    const intl = guildId(stateFromStores[12]).intl;
    obj.label = intl.string(guildId(stateFromStores[12]).t.NOOm1Z);
    obj.id = guildId(stateFromStores[13]).MemberSafetyPageTab.ALL_MEMBERS;
    obj = { guildId };
    obj.page = outer1_8(num(stateFromStores[14]), obj);
    const items = [obj, , , ];
    obj = {};
    const intl2 = guildId(stateFromStores[12]).intl;
    obj.label = intl2.string(guildId(stateFromStores[12]).t["4eQVBO"]);
    obj.id = guildId(stateFromStores[13]).MemberSafetyPageTab.PENDING;
    let tmp;
    if (num > 0) {
      tmp = num;
    }
    obj.count = tmp;
    const obj1 = { guildId, applicationStatus: guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.SUBMITTED };
    obj.page = outer1_8(num(stateFromStores[15]), obj1);
    items[1] = obj;
    const obj2 = {};
    const intl3 = guildId(stateFromStores[12]).intl;
    obj2.label = intl3.string(guildId(stateFromStores[12]).t.bSZkla);
    obj2.id = guildId(stateFromStores[13]).MemberSafetyPageTab.REJECTED;
    const obj3 = { guildId };
    const tmp2 = num(stateFromStores[15]);
    obj3.applicationStatus = guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.REJECTED;
    obj2.page = outer1_8(num(stateFromStores[15]), obj3);
    items[2] = obj2;
    const obj4 = {};
    const intl4 = guildId(stateFromStores[12]).intl;
    obj4.label = intl4.string(guildId(stateFromStores[12]).t.aURgY2);
    obj4.id = guildId(stateFromStores[13]).MemberSafetyPageTab.APPROVED;
    const obj5 = { guildId };
    const tmp3 = num(stateFromStores[15]);
    obj5.applicationStatus = guildId(stateFromStores[16]).GuildJoinRequestApplicationStatuses.APPROVED;
    obj4.page = outer1_8(num(stateFromStores[15]), obj5);
    items[3] = obj4;
    return items;
  }, items4);
  navigation = guildId(stateFromStores[17]).useNavigation();
  const items5 = [stateFromStores1, stateFromStores];
  callback = stateFromStores1.useCallback(() => {
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
      obj = { source: num(stateFromStores[21]) };
      const intl = guildId(stateFromStores[12]).intl;
      obj.accessibilityLabel = intl.string(guildId(stateFromStores[12]).t.ogxXGq);
      obj.ref = ref.ref;
      const merged1 = Object.assign(merged);
      return outer2_8(guildId(stateFromStores[20]).HeaderActionButton, obj);
    };
    return outer1_8(guildId(stateFromStores[18]).ContextMenu, obj);
  }, items5);
  const items6 = [navigation, callback];
  callback1 = stateFromStores1.useCallback((arg0) => {
    let closure_0 = arg0;
    navigation.setOptions({
      headerRight() {
        let tmp = null;
        if (0 === closure_0) {
          tmp = outer1_5();
        }
        return tmp;
      }
    });
  }, items6);
  let obj4 = guildId(stateFromStores[17]);
  obj = { pageWidth: num(stateFromStores[8])().width, items: memo };
  let num2 = 0;
  if (num > 0) {
    num2 = 1;
  }
  obj.defaultIndex = num2;
  obj.onSetActiveIndex = callback1;
  segmentedControlState = guildId(stateFromStores[22]).useSegmentedControlState(obj);
  const items7 = [segmentedControlState.activeIndex, callback1];
  const effect = stateFromStores1.useEffect(() => {
    const activeIndex = segmentedControlState.activeIndex;
    callback1(activeIndex.get());
  }, items7);
  obj = { style: tmp2.container };
  obj1 = { style: tmp2.tabContainer };
  const callback2 = stateFromStores1.useCallback((toLocaleString) => "(" + guildId(stateFromStores[23]).defaultCountFormatter(toLocaleString) + ")", []);
  obj1.children = callback(guildId(stateFromStores[24]).Tabs, { state: segmentedControlState, grow: true, formatCount: callback2 });
  const items8 = [callback(navigation, obj1), ];
  obj2 = { style: tmp2.content, children: callback(guildId(stateFromStores[25]).SegmentedControlPages, { state: segmentedControlState }) };
  items8[1] = callback(navigation, obj2);
  obj.children = items8;
  return callback2(navigation, obj);
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default memoResult;
