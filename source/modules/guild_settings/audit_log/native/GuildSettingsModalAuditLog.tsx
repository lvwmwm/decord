// Module ID: 16225
// Function ID: 126045
// Name: ConnectedGuildSettingsModalAuditLog
// Dependencies: [57, 31, 27, 1348, 1838, 1906, 1849, 16226, 653, 33, 4130, 689, 1456, 566, 16228, 1212, 5497, 16235, 16245, 5788, 16236, 5586, 5165, 4126, 5171, 1273, 16246, 5448, 2]
// Exports: default

// Module 16225 (ConnectedGuildSettingsModalAuditLog)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "NavScrim";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_6, FlatList: closure_7 } = get_ActivityIndicator);
({ GuildSettingsSections: closure_13, AuditLogFilterTypes: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
_createForOfIteratorHelperLoose = { listView: { marginVertical: 12 }, spinner: { marginTop: 40 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingVertical: 6, paddingHorizontal: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.filterTextWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.filtersWrapper = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.firstAuditRow = { marginTop: 0 };
_createForOfIteratorHelperLoose.lastAuditRow = { marginBottom: 0 };
_createForOfIteratorHelperLoose.filterTrailing = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLog.tsx");

export default function ConnectedGuildSettingsModalAuditLog(guildId) {
  let actionFilter;
  let actionFilterLabel;
  let hasError;
  let isInitialLoading;
  let isLoading;
  let isLoadingNextPage;
  let userIdFilterLabel;
  guildId = guildId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  let obj = guildId(stateFromStores[12]);
  const navigation = obj.useNavigation();
  let obj1 = guildId(stateFromStores[13]);
  let items = [memo, closure_10];
  stateFromStores = obj1.useStateFromStores(items, () => memo.getChannel(channelId.getChannelId()));
  let obj2 = guildId(stateFromStores[13]);
  const items1 = [closure_12, callback];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let obj = navigation(stateFromStores[14]);
    const first = obj.ACTION_FILTER_ITEMS().filter((value) => value.value === outer2_12.actionFilter)[0];
    let user = null;
    if (null != outer1_12.userIdFilter) {
      user = callback.getUser(outer1_12.userIdFilter);
    }
    obj = { isInitialLoading: outer1_12.isInitialLoading, isLoading: outer1_12.isLoading, isLoadingNextPage: outer1_12.isLoadingNextPage, showLoadMore: outer1_12.groupedFetchCount > 2, hasError: outer1_12.hasError, hasOlderLogs: outer1_12.hasOlderLogs, actionFilter: outer1_12.actionFilter };
    let str = "";
    if (null != first) {
      str = first.label;
    }
    obj.actionFilterLabel = str;
    obj.userIdFilter = outer1_12.userIdFilter;
    if (null != user) {
      let tag = user.tag;
    } else {
      const intl = guildId(stateFromStores[15]).intl;
      tag = intl.string(guildId(stateFromStores[15]).t.ZRFdsL);
    }
    obj.userIdFilterLabel = tag;
    obj._logs = outer1_12.logs;
    return obj;
  });
  ({ hasError, actionFilter } = stateFromStoresObject);
  const userIdFilter = stateFromStoresObject.userIdFilter;
  const _logs = stateFromStoresObject._logs;
  ({ isInitialLoading, isLoading, isLoadingNextPage, userIdFilterLabel, actionFilterLabel } = stateFromStoresObject);
  let obj3 = guildId(stateFromStores[13]);
  const items2 = [first];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => first.getGuild(guildId));
  const items3 = [_logs, stateFromStores1];
  memo = userIdFilter.useMemo(() => {
    if (null != _logs) {
      if (null != stateFromStores1) {
        navigation(stateFromStores[14]).transformLogs(_logs, stateFromStores1);
        const obj = navigation(stateFromStores[14]);
      }
      return [];
    }
  }, items3);
  const tmp6 = actionFilter(userIdFilter.useState({ current: null, prev: null }), 2);
  first = tmp6[0];
  closure_10 = tmp6[1];
  const items4 = [actionFilter, userIdFilter, navigation];
  callback = userIdFilter.useCallback(() => {
    let obj = guildId(stateFromStores[16]);
    obj = { key: "GuildSettingsAuditLogFilter", options: null, hasIcons: false };
    obj = {};
    const intl = guildId(stateFromStores[15]).intl;
    obj.label = intl.string(guildId(stateFromStores[15]).t["hxnY/q"]);
    obj.onPress = function onPress() {
      const obj = { filterType: outer2_14.USER };
      let tmp2;
      if (null != outer1_5) {
        tmp2 = outer1_5;
      }
      obj.data = guildId(stateFromStores[17]).createAuditLogFilterUserData(tmp2);
      outer1_2.push(outer2_13.AUDIT_LOG_FILTER, obj);
    };
    const items = [obj, ];
    const obj1 = {};
    const intl2 = guildId(stateFromStores[15]).intl;
    obj1.label = intl2.string(guildId(stateFromStores[15]).t.rautds);
    obj1.onPress = function onPress() {
      const obj = { filterType: outer2_14.ACTION, data: guildId(stateFromStores[17]).createAuditLogFilterActionData(outer1_4) };
      outer1_2.push(outer2_13.AUDIT_LOG_FILTER, obj);
    };
    items[1] = obj1;
    obj.options = items;
    const result = obj.showSimpleActionSheet(obj);
  }, items4);
  const items5 = [tmp, first, stateFromStores, guildId, memo.length];
  const items6 = [callback, navigation];
  const callback1 = userIdFilter.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let lastAuditRow = index === memo.length - 1;
    let obj = {};
    let firstAuditRow = 0 === index;
    if (firstAuditRow) {
      firstAuditRow = tmp.firstAuditRow;
    }
    const items = [firstAuditRow, ];
    if (lastAuditRow) {
      lastAuditRow = tmp.lastAuditRow;
    }
    items[1] = lastAuditRow;
    obj.containerStyle = items;
    obj.onHeaderClick = function onHeaderClick(log) {
      if (outer1_9.current !== log.id) {
        const obj = { current: log.id, prev: outer1_9.current };
        outer1_10(obj);
      } else {
        outer1_10({ current: null, prev: null });
      }
    };
    obj.log = item;
    obj.expanded = first.current === item.id;
    obj.lastExpanded = first.prev === item.id;
    obj.guildId = guildId;
    obj.channel = stateFromStores;
    return outer1_15(outer1_15(stateFromStores[18]), obj, item.id);
  }, items5);
  const layoutEffect = userIdFilter.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { onPress: outer1_11 };
        const intl = guildId(stateFromStores[15]).intl;
        obj.text = intl.string(guildId(stateFromStores[15]).t.pEasFX);
        return outer2_15(guildId(stateFromStores[19]).HeaderActionButton, obj);
      }
    });
  }, items6);
  const items7 = [guildId];
  const effect = userIdFilter.useEffect(() => {
    const logs = guildId(stateFromStores[20]).fetchLogs(guildId);
  }, items7);
  obj = { style: tmp.spinner };
  const tmp12 = callback(guildId(stateFromStores[21]).ActivityIndicator, obj);
  obj = {};
  let tmp16Result = tmp12;
  if (!isLoading) {
    tmp16Result = tmp12;
    if (!isInitialLoading) {
      obj1 = {};
      obj2 = { style: tmp.filtersWrapper };
      obj3 = { start: true, end: true };
      const obj4 = { variant: "text-md/semibold" };
      let intl = guildId(stateFromStores[15]).intl;
      obj4.children = intl.string(guildId(stateFromStores[15]).t.kP6oFy);
      obj3.icon = callback(guildId(stateFromStores[23]).Text, obj4);
      const obj5 = { style: tmp.filterTrailing };
      const obj6 = { style: tmp.filterTextWrapper };
      const obj7 = { variant: "text-sm/semibold", children: userIdFilterLabel };
      obj6.children = callback(guildId(stateFromStores[23]).Text, obj7);
      const items8 = [callback(_logs, obj6), ];
      const obj8 = { style: tmp.filterTextWrapper };
      const obj9 = { variant: "text-sm/semibold", children: actionFilterLabel };
      obj8.children = callback(guildId(stateFromStores[23]).Text, obj9);
      items8[1] = callback(_logs, obj8);
      obj5.children = items8;
      obj3.label = callback2(_logs, obj5);
      obj3.onPress = callback;
      obj3.trailing = callback(guildId(stateFromStores[24]).TableRowArrow, {});
      obj2.children = callback(guildId(stateFromStores[22]).TableRow, obj3);
      const items9 = [callback(_logs, obj2), , ];
      if (0 === memo.length) {
        const obj10 = {};
        let intl2 = guildId(stateFromStores[15]).intl;
        const string = intl2.string;
        const t = guildId(stateFromStores[15]).t;
        if (hasError) {
          let stringResult = string(t.tzkaD7);
        } else {
          stringResult = string(t.lNuYhh);
        }
        obj10.body = stringResult;
        const intl3 = guildId(stateFromStores[15]).intl;
        let string2 = intl3.string;
        let t2 = guildId(stateFromStores[15]).t;
        if (hasError) {
          let string2Result = string2(t2.Ww5Tjy);
        } else {
          string2Result = string2(t2["RHhk+P"]);
        }
        obj10.title = string2Result;
        t2 = guildId;
        string2 = stateFromStores;
        obj10.Illustration = guildId(stateFromStores[26]).EmptyServerSettingsAuditLog;
        callback(guildId(stateFromStores[25]).EmptyState, obj10);
        const tmp24 = callback;
      } else {
        const obj11 = {};
        const items10 = [tmp.listView];
        obj11.style = items10;
        obj11.contentContainerStyle = guildId.contentContainerStyle;
        obj11.data = memo;
        obj11.extraData = first;
        obj11.keyExtractor = function keyExtractor(id) {
          return id.id;
        };
        obj11.renderItem = callback1;
        obj11.onEndReached = function onEndReached() {
          const nextLogPage = guildId(stateFromStores[20]).fetchNextLogPage(guildId);
        };
        items9[1] = callback(stateFromStores1, obj11);
        let tmp34 = null;
        if (isLoadingNextPage) {
          tmp34 = tmp12;
        }
        items9[2] = tmp34;
        obj1.children = items9;
        tmp16Result = tmp16(tmp17, obj1);
      }
      tmp16 = callback2;
      tmp17 = closure_17;
    }
  }
  const items11 = [tmp16Result, callback(guildId(stateFromStores[27]).NavScrim, {})];
  obj.children = items11;
  return callback2(closure_17, obj);
};
