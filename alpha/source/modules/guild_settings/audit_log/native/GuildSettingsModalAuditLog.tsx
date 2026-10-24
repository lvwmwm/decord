// Module ID: 19034
// Function ID: 19035
// Name: GuildSettingsModalAuditLog
// Dependencies: [32, 19, 17, 4823, 4845, 4874, 1392, 19035, 1087, 21, 4971, 587, 1505, 504, 19037, 5025, 1128, 7290, 19039, 19049, 7485, 19040, 6880, 6903, 5234, 6912, 1202, 19050, 7220, 5592, 2]
// Exports: default

// Module 19034 (GuildSettingsModalAuditLog)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1128 */;
import showSimpleActionSheet2 from "showSimpleActionSheet" /* 7290 */;
import AuditLogUtilsAll from "AuditLogUtils" /* 19037 */;
import AuditLogActionCreators from "AuditLogActionCreators" /* 19040 */;
import AuditLogDefault from "AuditLog" /* 19049 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import GuildStore from "GuildStore" /* 4845 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;
import UserStore from "UserStore" /* 1392 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 19035 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let obj2;
let obj3;
const View = react_native.View;
({ GuildSettingsSections: closure_12, AuditLogFilterTypes: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { listView: { marginVertical: 12 }, spinner: { marginTop: 40 }, filterTextWrapper: obj2, filtersWrapper: obj3, firstAuditRow: { marginTop: 0 }, lastAuditRow: { marginBottom: 0 }, filterTrailing: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 8 } };
obj2 = { borderRadius: nativeDefault.radii.md, paddingVertical: 6, paddingHorizontal: 8, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_8 };
let closure_17 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLog.tsx");

export default function ConnectedGuildSettingsModalAuditLog(guildId) {
  let TableRow;
  let Text;
  let actionFilter;
  let actionFilterLabel;
  let constants2;
  let hasError;
  let intl;
  let isInitialLoading;
  let isLoading;
  let isLoadingNextPage;
  let items10;
  let items8;
  let obj11;
  let obj13;
  let obj7;
  let obj8;
  let obj9;
  let string2Result;
  let userIdFilterLabel;
  guildId = guildId.guildId;
  let stateFromStores;
  actionFilter = undefined;
  let stateFromStores1;
  let memo;
  let extraData;
  let user;
  let onPress;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp = closure_17();
  let closure_1 = tmp;
  let tmp2 = guildId;
  let tmp3 = stateFromStores;
  let obj = guildId(stateFromStores[12]);
  navigation = obj.useNavigation();
  let obj2 = guildId(stateFromStores[13]);
  let items = [stateFromStores1, extraData];
  stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.getChannel(first.getChannelId()));
  let obj3 = guildId(stateFromStores[13]);
  const items1 = [onPress, user];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    let str;
    let userTag;
    const obj = navigation(stateFromStores[14]);
    const ACTION_FILTER_ITEMSResult = obj.ACTION_FILTER_ITEMS();
    const first = ACTION_FILTER_ITEMSResult.filter((value) => value.value === actionFilter.actionFilter)[0];
    user = null;
    if (null != callback.userIdFilter) {
      user = user.getUser(tmp3.userIdFilter);
    }
    const obj2 = { isInitialLoading: callback.isInitialLoading, isLoading: callback.isLoading, isLoadingNextPage: callback.isLoadingNextPage, showLoadMore: callback.groupedFetchCount > 2, hasError: callback.hasError, hasOlderLogs: callback.hasOlderLogs, actionFilter: callback.actionFilter, actionFilterLabel: str, userIdFilter: callback.userIdFilter, userIdFilterLabel: userTag, _logs: callback.logs };
    str = "";
    if (null != first) {
      str = first.label;
    }
    if (null != user) {
      const obj3 = closure_1(stateFromStores[15]);
      userTag = obj3.getUserTag(user);
    } else {
      const intl = guildId(tmp[16]).intl;
      userTag = intl.string(guildId(tmp[16]).t.ZRFdsL);
    }
    return obj2;
  });
  ({ hasError, actionFilter } = stateFromStoresObject);
  const userIdFilter = stateFromStoresObject.userIdFilter;
  const _logs = stateFromStoresObject._logs;
  ({ isInitialLoading, isLoading, isLoadingNextPage, userIdFilterLabel, actionFilterLabel } = stateFromStoresObject);
  const items2 = [memo];
  const obj4 = guildId(stateFromStores[13]);
  stateFromStores1 = obj4.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  const items3 = [_logs, stateFromStores1];
  memo = userIdFilter.useMemo(() => {
    if (null != _logs) {
      if (null != stateFromStores1) {
        const obj = AuditLogUtilsAll;
        obj.transformLogs(tmp, tmp2);
      }
      return [];
    }
  }, items3);
  const tmp8 = actionFilter(userIdFilter.useState({ current: null, prev: null }), 2);
  extraData = tmp8[0];
  user = tmp8[1];
  const items4 = [actionFilter, userIdFilter, navigation];
  onPress = userIdFilter.useCallback(() => {
    let intl;
    let intl2;
    let items;
    let obj = { key: "GuildSettingsAuditLogFilter", options: items, hasIcons: false };
    const tmp = showSimpleActionSheet2;
    let obj2 = {
      label: intl.string(intl4.t["hxnY/q"]),
      onPress() {
        let createAuditLogFilterUserData;
        let tmp3;
        const push = navigation.push;
        const AUDIT_LOG_FILTER = constants.AUDIT_LOG_FILTER;
        const obj = { filterType: constants2.USER, data: createAuditLogFilterUserData(tmp3) };
        createAuditLogFilterUserData = guildId(stateFromStores[18]).createAuditLogFilterUserData;
        guildId(stateFromStores[18]);
        push(AUDIT_LOG_FILTER, obj);
        tmp3 = userIdFilter;
      }
    };
    const showSimpleActionSheet = tmp.showSimpleActionSheet;
    intl = intl4.intl;
    items = [obj2, ];
    const obj3 = {
      label: intl2.string(intl4.t.rautds),
      onPress() {
        let obj2;
        const push = navigation.push;
        const AUDIT_LOG_FILTER = constants.AUDIT_LOG_FILTER;
        const obj = { filterType: constants2.ACTION, data: obj2.createAuditLogFilterActionData(actionFilter) };
        obj2 = guildId(stateFromStores[18]);
        push(AUDIT_LOG_FILTER, obj);
      }
    };
    intl2 = intl4.intl;
    items[1] = obj3;
    const result = showSimpleActionSheet(obj);
  }, items4);
  const items5 = [tmp, extraData, stateFromStores, guildId, memo.length];
  const items6 = [onPress, navigation];
  const callback1 = userIdFilter.useCallback((arg0) => {
    let index;
    let item;
    let ref;
    ({ item, index } = arg0);
    const current = first.current;
    const id = item.id;
    const prev = first.prev;
    const id2 = item.id;
    const diff = memo.length - 1;
    let firstAuditRow = 0 === index;
    const tmp2 = syncedClientThemes;
    const tmp3 = AuditLogDefault;
    if (firstAuditRow) {
      firstAuditRow = closure_1.firstAuditRow;
    }
    let lastAuditRow = index === diff;
    const items = [firstAuditRow, ];
    if (lastAuditRow) {
      lastAuditRow = closure_1.lastAuditRow;
    }
    let obj = {
      containerStyle: items,
      onHeaderClick(id) {
        if (ref.current !== id.id) {
          const obj = { current: id.id, prev: tmp.current };
          user(obj);
        } else {
          user({ current: null, prev: null });
        }
      },
      log: item,
      expanded: current === id,
      lastExpanded: prev === id2,
      guildId,
      channel: stateFromStores
    };
    items[1] = lastAuditRow;
    return tmp2(tmp3, obj);
  }, items5);
  const layoutEffect = userIdFilter.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        let intl;
        const obj = { onPress, text: intl.string(guildId(stateFromStores[16]).t.pEasFX) };
        const HeaderActionButton = guildId(stateFromStores[20]).HeaderActionButton;
        intl = guildId(stateFromStores[16]).intl;
        return closure_2_14(HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items6);
  const items7 = [guildId];
  const effect = userIdFilter.useEffect(() => {
    const obj = AuditLogActionCreators;
    const logs = obj.fetchLogs(guildId);
  }, items7);
  const obj5 = { style: tmp.spinner };
  const tmp15 = closure_14(guildId(stateFromStores[22]).ActivityIndicator, obj5);
  let tmp16Result = tmp15;
  if (!isLoading) {
    tmp16Result = tmp15;
    if (!isInitialLoading) {
      let tmp14Result;
      const obj6 = { style: tmp.filtersWrapper, children: closure_14(TableRow, obj7) };
      obj7 = { start: true, end: true, icon: closure_14(Text, obj8), label: closure_15(_logs, obj9), onPress, trailing: closure_14(tmp2(tmp3[25]).TableRowArrow, {}) };
      TableRow = tmp2(tmp3[23]).TableRow;
      obj8 = { variant: "text-md/semibold", children: intl.string(tmp2(tmp3[16]).t.kP6oFy) };
      Text = tmp2(tmp3[24]).Text;
      intl = tmp2(tmp3[16]).intl;
      obj9 = { style: tmp.filterTrailing, children: items8 };
      const obj10 = { style: tmp.filterTextWrapper, children: closure_14(tmp2(tmp3[24]).Text, obj11) };
      obj11 = { variant: "text-sm/semibold", children: userIdFilterLabel };
      items8 = [closure_14(_logs, obj10), ];
      const obj12 = { style: tmp.filterTextWrapper, children: closure_14(tmp2(tmp3[24]).Text, obj13) };
      obj13 = { variant: "text-sm/semibold", children: actionFilterLabel };
      items8[1] = closure_14(_logs, obj12);
      const items9 = [closure_14(_logs, obj6), , ];
      if (0 === memo.length) {
        let stringResult;
        const EmptyState = tmp2(tmp3[26]).EmptyState;
        let intl2 = tmp2(tmp3[16]).intl;
        const string = intl2.string;
        const t = tmp2(tmp3[16]).t;
        if (hasError) {
          stringResult = string(t.tzkaD7);
        } else {
          stringResult = string(t.lNuYhh);
        }
        const obj14 = { body: stringResult, title: string2Result, Illustration: tmp2(tmp3[27]).EmptyServerSettingsAuditLog };
        const intl3 = tmp2(tmp3[16]).intl;
        const string2 = intl3.string;
        const t2 = tmp2(tmp3[16]).t;
        if (hasError) {
          string2Result = string2(t2.Ww5Tjy);
        } else {
          string2Result = string2(t2["RHhk+P"]);
        }
        tmp14Result = tmp14(EmptyState, obj14);
      } else {
        const obj15 = {
          style: tmp.listView,
          contentContainerStyle,
          data: memo,
          extraData,
          keyExtractor(id) {
                  return id.id;
                },
          renderItem: callback1,
          onEndReached() {
                  const obj = AuditLogActionCreators;
                  const nextLogPage = obj.fetchNextLogPage(guildId);
                }
        };
        tmp14Result = tmp14(tmp2(tmp3[28]).FlashList, obj15);
      }
      items9[1] = tmp14Result;
      let tmp23 = null;
      if (isLoadingNextPage) {
        tmp23 = tmp15;
      }
      const obj16 = { children: items9 };
      items9[2] = tmp23;
      tmp16Result = tmp16(tmp17, obj16);
    }
  }
  const obj17 = { children: items10 };
  items10 = [tmp16Result, closure_14(tmp2(tmp3[29]).NavScrim, {})];
  return closure_15(closure_16, obj17);
};
