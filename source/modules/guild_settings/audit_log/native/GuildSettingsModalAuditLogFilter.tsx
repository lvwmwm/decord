// Module ID: 16282
// Function ID: 126760
// Name: GuildSettingsModalAuditLogFilter
// Dependencies: [57, 31, 27, 1849, 16273, 653, 33, 4130, 689, 1212, 3969, 16275, 1557, 1456, 5045, 16283, 10209, 7655, 5165, 1273, 10788, 16284, 5772, 8547, 7527, 5448, 2]
// Exports: createAuditLogFilterActionData, createAuditLogFilterUserData, default

// Module 16282 (GuildSettingsModalAuditLogFilter)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { AuditLogFilterTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.searchBar = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.allUsersIconContainer = { height: 30, width: 30, alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx");

export default function GuildSettingsModalAuditLogFilter(data) {
  data = data.data;
  const filterType = data.filterType;
  const guildId = data.guildId;
  let tmp = _createForOfIteratorHelperLoose();
  let callback = tmp;
  let obj = data(guildId[13]);
  const navigation = obj.useNavigation();
  const tmp3 = callback(navigation.useState(""), 2);
  const first = tmp3[0];
  const items = [first, data];
  const memo = navigation.useMemo(() => ({
    data: data.filter((label) => {
      const formatted = outer1_5.toLowerCase();
      return filterType(guildId[14])(formatted, label.label.toLowerCase());
    }),
    keyExtractor(value) {
      if (null != value.value) {
        let str = value.value.toString();
        const str2 = value.value;
      } else {
        str = value.index;
        str = str.toString();
      }
      return str;
    }
  }), items);
  data = memo.data;
  const items1 = [filterType, navigation];
  const effect = navigation.useEffect(() => {
    const obj = {};
    if (outer1_8.USER === filterType) {
      const intl3 = data(guildId[9]).intl;
      let stringResult = intl3.string(data(guildId[9]).t["hxnY/q"]);
    } else if (outer1_8.ACTION === tmp2) {
      const intl2 = data(guildId[9]).intl;
      stringResult = intl2.string(data(guildId[9]).t.rautds);
    } else {
      const intl = data(guildId[9]).intl;
      stringResult = intl.string(data(guildId[9]).t.pEasFX);
    }
    obj.headerTitle = stringResult;
    navigation.setOptions(obj);
  }, items1);
  const items2 = [filterType, guildId, navigation];
  callback = navigation.useCallback((arg0, action) => {
    let tmp = action;
    if (arg0) {
      if (filterType === outer1_8.USER) {
        let id = null;
        if (null != tmp) {
          id = tmp.id;
        }
        data(guildId[15]).filterByUserId(id, guildId);
        const obj2 = data(guildId[15]);
      } else if (filterType === outer1_8.ACTION) {
        data(guildId[15]).filterByAction(tmp, guildId);
        const obj = data(guildId[15]);
      }
      tmp = navigation;
      navigation.pop();
    }
  }, items2);
  const items3 = [filterType, guildId, callback, data.length, tmp.allUsersIconContainer];
  obj = {};
  obj = { style: tmp.searchBar };
  const callback1 = navigation.useCallback((item) => {
    const value = iter.value;
    const data = value;
    const selected = iter.selected;
    const index = item.index;
    if (selected === outer1_8.USER) {
      if (null !== value) {
        let obj = {
          start: 0 === index,
          end: index === data.length - 1,
          userId: value.id,
          guildId,
          onPress() {
                return outer1_7(!selected, closure_0);
              }
        };
        obj = { selected };
        obj.trailing = outer1_9(data(guildId[17]).FormRadio, obj);
        let tmp2Result = outer1_9(filterType(guildId[16]), obj);
        const tmp17 = filterType(guildId[16]);
      }
      return tmp2Result;
    }
    obj = { start: 0 === index, end: index === data.length - 1 };
    if (selected === outer1_8.USER) {
      const obj1 = { style: tmp.allUsersIconContainer };
      const obj2 = { size: data(guildId[19]).Icon.Sizes.MEDIUM, source: filterType(guildId[20]) };
      obj1.children = outer1_9(data(guildId[19]).Icon, obj2);
      let tmp6 = outer1_9(first, obj1);
    } else {
      const obj3 = { action: value };
      tmp6 = outer1_9(filterType(guildId[21]), obj3);
    }
    obj.icon = tmp6;
    obj.label = item.item.label;
    obj.onPress = function onPress() {
      return outer1_7(!selected, closure_0);
    };
    obj.trailing = outer1_9(data(guildId[17]).FormRadio, { selected });
    tmp2Result = outer1_9(data(guildId[18]).TableRow, obj);
  }, items3);
  let obj1 = { size: "md" };
  if (filterType === AuditLogFilterTypes.USER) {
    let intl3 = data(guildId[9]).intl;
    let stringResult = intl3.string(data(guildId[9]).t.pYHobK);
  } else if (filterType === AuditLogFilterTypes.ACTION) {
    let intl2 = data(guildId[9]).intl;
    stringResult = intl2.string(data(guildId[9]).t.I288Zx);
  } else {
    let intl = data(guildId[9]).intl;
    stringResult = intl.string(data(guildId[9]).t["5h0QOP"]);
  }
  obj1.placeholder = stringResult;
  obj1.onChange = tmp3[1];
  obj.children = callback2(data(guildId[22]).SearchField, obj1);
  const items4 = [callback2(first, obj), , ];
  if (0 === data.length) {
    let obj2 = {};
    const intl4 = data(guildId[9]).intl;
    obj2.body = intl4.string(data(guildId[9]).t.V6nAfF);
    const intl5 = data(guildId[9]).intl;
    let obj3 = { count: 0 };
    obj2.title = intl5.formatToPlainString(data(guildId[9]).t.ZGVL3g, obj3);
    obj2.Illustration = data(guildId[23]).NoResults;
    let tmp24 = callback2(data(guildId[19]).EmptyState, obj2);
  } else {
    const obj4 = { keyExtractor: memo.keyExtractor, renderItem: callback1, data };
    const obj5 = { paddingHorizontal: filterType(guildId[8]).space.PX_12, paddingBottom: filterType(guildId[12])().bottom };
    obj4.contentContainerStyle = obj5;
    tmp24 = callback2(data(guildId[24]).FlashList, obj4);
  }
  items4[1] = tmp24;
  items4[2] = callback2(data(guildId[25]).NavScrim, {});
  obj.children = items4;
  return closure_11(closure_10, obj);
};
export const createAuditLogFilterUserData = function createAuditLogFilterUserData(arg0) {
  const _require = arg0;
  function userIdResolver(userId) {
    if (null != userId) {
      const user = outer1_6.getUser(userId);
      if (!tmp) {
        set.add(userId);
        const obj = { label: items(set[10]).getUserTag(user), value: user, selected: user.id === closure_0, index: items.length };
        items.push(obj);
        const obj2 = items(set[10]);
      }
      tmp = set.has(userId) || null == user;
    }
  }
  const items = [];
  let obj = {};
  const intl = _require(set[9]).intl;
  obj.label = intl.string(_require(set[9]).t.ZRFdsL);
  obj.value = null;
  obj.selected = null == arg0;
  obj.index = 0;
  items.push(obj);
  set = new Set();
  const logs = closure_7.logs;
  const item = logs.forEach((userId) => {
    userIdResolver(userId.userId);
  });
  const userIds = closure_7.userIds;
  const item1 = userIds.forEach((userId) => {
    userIdResolver(userId);
  });
  const sorted = items.sort((selected, selected2) => {
    let num = -1;
    if (!selected.selected) {
      let num2 = 1;
      if (!selected2.selected) {
        num2 = selected.index - selected2.index;
      }
      num = num2;
    }
    return num;
  });
  return items;
};
export const createAuditLogFilterActionData = function createAuditLogFilterActionData(outer1_4) {
  const _require = outer1_4;
  const obj = _require(16275);
  const mapped = _require(16275).ACTION_FILTER_ITEMS().map((label, index) => ({ label: label.label, value: label.value, selected: closure_0 === label.value, index }));
  return mapped.sort((selected, selected2) => {
    let num = -1;
    if (!selected.selected) {
      let num2 = 1;
      if (!selected2.selected) {
        num2 = selected.index - selected2.index;
      }
      num = num2;
    }
    return num;
  });
};
