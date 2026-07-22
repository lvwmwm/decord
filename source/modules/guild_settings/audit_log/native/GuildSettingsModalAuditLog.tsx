// Module ID: 16108
// Function ID: 123872
// Name: ConnectedGuildSettingsModalAuditLog
// Dependencies: []
// Exports: default

// Module 16108 (ConnectedGuildSettingsModalAuditLog)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ View: closure_6, FlatList: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[2]);
({ GuildSettingsSections: closure_13, AuditLogFilterTypes: closure_14 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { listView: { marginVertical: 12 }, spinner: { marginTop: 40 } };
obj = { libvpx: null, getVideoControls: "center", FITNESS: "center", borderRadius: importDefault(dependencyMap[11]).radii.md, backgroundColor: importDefault(dependencyMap[11]).colors.INPUT_BACKGROUND_DEFAULT };
obj.filterTextWrapper = obj;
const tmp4 = arg1(dependencyMap[9]);
obj.filtersWrapper = { paddingTop: importDefault(dependencyMap[11]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_8 };
obj.firstAuditRow = { marginTop: 0 };
obj.lastAuditRow = { marginBottom: 0 };
obj.filterTrailing = { position: 29705451, top: 6257, bottom: -1621032704, left: 1095330385 };
let closure_18 = obj.createStyles(obj);
const obj1 = { paddingTop: importDefault(dependencyMap[11]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_8 };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLog.tsx");

export default function ConnectedGuildSettingsModalAuditLog(guildId) {
  let actionFilter;
  let actionFilterLabel;
  let hasError;
  let isInitialLoading;
  let isLoading;
  let isLoadingNextPage;
  let userIdFilterLabel;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback4();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[12]);
  const navigation = obj.useNavigation();
  const importAll = navigation;
  let obj1 = arg1(dependencyMap[13]);
  const items = [closure_8, closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => memo.getChannel(channelId.getChannelId()));
  const dependencyMap = stateFromStores;
  let obj2 = arg1(dependencyMap[13]);
  const items1 = [closure_12, closure_11];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let obj = navigation(stateFromStores[14]);
    const first = obj.ACTION_FILTER_ITEMS().filter((value) => value.value === actionFilter.actionFilter)[0];
    let user = null;
    if (null != closure_12.userIdFilter) {
      user = callback.getUser(closure_12.userIdFilter);
    }
    obj = { isInitialLoading: closure_12.isInitialLoading, isLoading: closure_12.isLoading, isLoadingNextPage: closure_12.isLoadingNextPage, showLoadMore: closure_12.groupedFetchCount > 2, hasError: closure_12.hasError, hasOlderLogs: closure_12.hasOlderLogs, actionFilter: closure_12.actionFilter };
    let str = "";
    if (null != first) {
      str = first.label;
    }
    obj.actionFilterLabel = str;
    obj.userIdFilter = closure_12.userIdFilter;
    if (null != user) {
      let tag = user.tag;
    } else {
      const intl = guildId(stateFromStores[15]).intl;
      tag = intl.string(guildId(stateFromStores[15]).t.ZRFdsL);
    }
    obj.userIdFilterLabel = tag;
    obj._logs = closure_12.logs;
    return obj;
  });
  ({ hasError, actionFilter } = stateFromStoresObject);
  let callback = actionFilter;
  const userIdFilter = stateFromStoresObject.userIdFilter;
  const React = userIdFilter;
  const _logs = stateFromStoresObject._logs;
  ({ isInitialLoading, isLoading, isLoadingNextPage, userIdFilterLabel, actionFilterLabel } = stateFromStoresObject);
  let obj3 = arg1(dependencyMap[13]);
  const items2 = [closure_9];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => first.getGuild(guildId));
  const items3 = [_logs, stateFromStores1];
  const memo = React.useMemo(() => {
    if (null != _logs) {
      if (null != stateFromStores1) {
        navigation(stateFromStores[14]).transformLogs(_logs, stateFromStores1);
        const obj = navigation(stateFromStores[14]);
      }
      return [];
    }
  }, items3);
  closure_8 = memo;
  const tmp6 = callback(React.useState({ "Bool(true)": "o", "Bool(true)": "o" }), 2);
  const first = tmp6[0];
  closure_9 = first;
  closure_10 = tmp6[1];
  const items4 = [actionFilter, userIdFilter, navigation];
  callback = React.useCallback(() => {
    let obj = guildId(stateFromStores[16]);
    obj = { 0: "header", 9223372036854775807: "text-md/medium", 9223372036854775807: "mobile-text-heading-primary" };
    obj = {};
    const intl = guildId(stateFromStores[15]).intl;
    obj.label = intl.string(guildId(stateFromStores[15]).t.hxnY/q);
    obj.onPress = function onPress() {
      const obj = { filterType: constants2.USER };
      let tmp2;
      if (null != closure_5) {
        tmp2 = closure_5;
      }
      obj.data = callback(closure_3[17]).createAuditLogFilterUserData(tmp2);
      const arr = arr.push(constants.AUDIT_LOG_FILTER, obj);
    };
    const items = [obj, ];
    const obj1 = {};
    const intl2 = guildId(stateFromStores[15]).intl;
    obj1.label = intl2.string(guildId(stateFromStores[15]).t.rautds);
    obj1.onPress = function onPress() {
      const obj = { filterType: constants2.ACTION, data: callback(closure_3[17]).createAuditLogFilterActionData(closure_4) };
      const obj2 = callback(closure_3[17]);
    };
    items[1] = obj1;
    obj.options = items;
    const result = obj.showSimpleActionSheet(obj);
  }, items4);
  closure_11 = callback;
  const items5 = [tmp, first, stateFromStores, guildId, memo.length];
  const items6 = [callback, navigation];
  const callback1 = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let lastAuditRow = index === memo.length - 1;
    const obj = {};
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
      if (ref.current !== log.id) {
        const obj = { current: log.id, prev: ref.current };
        callback(obj);
      } else {
        callback({ "Bool(true)": "o", "Bool(true)": "o" });
      }
    };
    obj.log = item;
    obj.expanded = first.current === item.id;
    obj.lastExpanded = first.prev === item.id;
    obj.guildId = guildId;
    obj.channel = stateFromStores;
    return closure_15(closure_15(stateFromStores[18]), obj, item.id);
  }, items5);
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { onPress: closure_11 };
        const intl = callback(closure_3[15]).intl;
        obj.text = intl.string(callback(closure_3[15]).t.pEasFX);
        return callback2(callback(closure_3[19]).HeaderActionButton, obj);
      }
    });
  }, items6);
  const items7 = [guildId];
  const effect = React.useEffect(() => {
    const logs = guildId(stateFromStores[20]).fetchLogs(guildId);
  }, items7);
  obj = { style: tmp.spinner };
  const tmp12 = callback2(arg1(dependencyMap[21]).ActivityIndicator, obj);
  obj = {};
  let tmp16Result = tmp12;
  if (!isLoading) {
    tmp16Result = tmp12;
    if (!isInitialLoading) {
      obj1 = {};
      obj2 = { style: tmp.filtersWrapper };
      obj3 = { 400888199: null, 2091392542: null };
      const obj4 = { variant: "text-md/semibold" };
      const intl = arg1(dependencyMap[15]).intl;
      obj4.children = intl.string(arg1(dependencyMap[15]).t.kP6oFy);
      obj3.icon = callback2(arg1(dependencyMap[23]).Text, obj4);
      const obj5 = { style: tmp.filterTrailing };
      const obj6 = { style: tmp.filterTextWrapper };
      const obj7 = { variant: "text-sm/semibold", children: userIdFilterLabel };
      obj6.children = callback2(arg1(dependencyMap[23]).Text, obj7);
      const items8 = [callback2(_logs, obj6), ];
      const obj8 = { style: tmp.filterTextWrapper };
      const obj9 = { variant: "text-sm/semibold", children: actionFilterLabel };
      obj8.children = callback2(arg1(dependencyMap[23]).Text, obj9);
      items8[1] = callback2(_logs, obj8);
      obj5.children = items8;
      obj3.label = callback3(_logs, obj5);
      obj3.onPress = callback;
      obj3.trailing = callback2(arg1(dependencyMap[24]).TableRowArrow, {});
      obj2.children = callback2(arg1(dependencyMap[22]).TableRow, obj3);
      const items9 = [callback2(_logs, obj2), , ];
      if (0 === memo.length) {
        const obj10 = {};
        const intl2 = arg1(dependencyMap[15]).intl;
        const string = intl2.string;
        const t = arg1(dependencyMap[15]).t;
        if (hasError) {
          let stringResult = string(t.tzkaD7);
        } else {
          stringResult = string(t.lNuYhh);
        }
        obj10.body = stringResult;
        const intl3 = arg1(dependencyMap[15]).intl;
        let string2 = intl3.string;
        let t2 = arg1(dependencyMap[15]).t;
        if (hasError) {
          let string2Result = string2(t2.Ww5Tjy);
        } else {
          string2Result = string2(t2.RHhk+P);
        }
        obj10.title = string2Result;
        t2 = arg1;
        string2 = dependencyMap;
        obj10.Illustration = arg1(dependencyMap[26]).EmptyServerSettingsAuditLog;
        callback2(arg1(dependencyMap[25]).EmptyState, obj10);
        const tmp24 = callback2;
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
        items9[1] = callback2(stateFromStores1, obj11);
        let tmp34 = null;
        if (isLoadingNextPage) {
          tmp34 = tmp12;
        }
        items9[2] = tmp34;
        obj1.children = items9;
        tmp16Result = tmp16(tmp17, obj1);
      }
      const tmp16 = callback3;
      const tmp17 = closure_17;
    }
  }
  const items11 = [tmp16Result, callback2(arg1(dependencyMap[27]).NavScrim, {})];
  obj.children = items11;
  return callback3(closure_17, obj);
};
