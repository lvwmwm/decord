// Module ID: 17346
// Function ID: 17347
// Name: GuildSettingsModalAuditLogFilter
// Dependencies: [32, 19, 17, 1372, 17342, 1074, 21, 4836, 576, 1115, 4678, 17344, 4548, 10404, 6001, 1613, 1485, 5829, 17347, 1177, 9489, 17348, 6000, 6471, 7678, 8179, 6461, 2]
// Exports: createAuditLogFilterActionData, createAuditLogFilterUserData, default

// Module 17346 (GuildSettingsModalAuditLogFilter)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl6 from "intl" /* 1115 */;
import react_native2 from "react-native" /* 4548 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import FormRadio from "FormRadio" /* 6001 */;
import DetailedGuildIdentityUserRowDefault from "DetailedGuildIdentityUserRow" /* 10404 */;
import AuditLogUtils from "AuditLogUtils" /* 17344 */;
import AuditLogActionCreators from "AuditLogActionCreators" /* 17347 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 17342 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation, set;

let c10;
let c9;
let obj2;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const AuditLogFilterTypes = Constants.AuditLogFilterTypes;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let obj = { searchBar: obj2, allUsersIconContainer: { height: 30, width: 30, alignItems: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = react.memo((selected) => {
  let accessibilityRole;
  let accessibilityState;
  let end;
  let guildId;
  let onPress;
  let start;
  let userId;
  selected = selected.selected;
  ({ start, end, guildId, userId, onPress } = selected);
  const obj = react_native2;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = { start, end, userId, guildId, onPress, accessibilityRole, accessibilityState, trailing: React4(FormRadio.FormRadio, { selected }) };
  const tmp2 = DetailedGuildIdentityUserRowDefault;
  return React4(tmp2, obj2);
});
const result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx");

export default function GuildSettingsModalAuditLogFilter(data) {
  let SearchField;
  let closure_3;
  let first;
  let intl4;
  let intl5;
  let obj5;
  let stringResult;
  let tmp15Result;
  let tmp8;
  data = data.data;
  const filterType = data.filterType;
  const guildId = data.guildId;
  first = undefined;
  let tmp = closure_12();
  _slicedToArray = tmp;
  const tmp3 = guildId;
  let tmp2 = filterType;
  let tmp4 = data;
  const bottom = filterType(guildId[15])().bottom;
  let obj = data(guildId[16]);
  navigation = obj.useNavigation();
  [first, tmp8] = navigation.useState("");
  const items = [first, data];
  const memo = navigation.useMemo(() => {
    const obj = {
      data: data.filter((label) => {
        const str = label.label;
        const tmp = filterType(guildId[17]);
        const formatted = first.toLowerCase();
        return tmp(formatted, str.toLowerCase());
      }),
      keyExtractor(value) {
        let str1;
        if (null != value.value) {
          const str2 = value.value;
          str1 = str2.toString();
        } else {
          const str = value.index;
          str1 = str.toString();
        }
        return str1;
      }
    };
    return obj;
  }, items);
  const data1 = memo.data;
  const keyExtractor = memo.keyExtractor;
  const items1 = [filterType, navigation];
  const effect = navigation.useEffect(() => {
    let stringResult;
    const setOptions = navigation.setOptions;
    if (AuditLogFilterTypes.USER === filterType) {
      const intl3 = intl6.intl;
      stringResult = intl3.string(intl6.t["hxnY/q"]);
    } else if (tmp3.ACTION === tmp2) {
      const intl2 = intl6.intl;
      stringResult = intl2.string(intl6.t.rautds);
    } else {
      const intl = intl6.intl;
      stringResult = intl.string(intl6.t.pEasFX);
    }
    setOptions({ headerTitle: stringResult });
  }, items1);
  const items2 = [filterType, guildId, navigation];
  const callback = navigation.useCallback((arg0, id) => {
    const tmp = arg0;
    if (tmp) {
      if (filterType === AuditLogFilterTypes.USER) {
        id = null;
        const filterByUserId = AuditLogActionCreators.filterByUserId;
        AuditLogActionCreators;
        if (null != id) {
          id = id.id;
        }
        filterByUserId(id, guildId);
      } else if (tmp3 === tmp4.ACTION) {
        const obj = AuditLogActionCreators;
        obj.filterByAction(id, guildId);
      }
      navigation.pop();
    }
  }, items2);
  const items3 = [filterType, guildId, callback, data1.length, tmp.allUsersIconContainer, keyExtractor];
  let obj2 = { style: tmp.searchBar, children: tmp15(SearchField, { size: "md", placeholder: stringResult, onChange: tmp8 }) };
  const callback1 = navigation.useCallback((arg0) => {
    let Icon;
    let index;
    let item;
    let obj4;
    let tmp4;
    let tmp6;
    let tmp7;
    ({ item, index } = arg0);
    const value = item.value;
    let c0 = value;
    const selected = item.selected;
    const label = item.label;
    const tmp = selected;
    const tmp2 = callback;
    if (selected === callback.USER) {
      if (null !== value) {
        const obj2 = {
          start: 0 === index,
          end: index === data1.length - 1,
          selected,
          guildId,
          userId: value.id,
          onPress() {
                return callback(!selected, c0);
              }
        };
        return closure_1_9(closure_1_13, obj2);
      }
    }
    if (tmp === tmp2.USER) {
      const obj3 = { style: closure_3.allUsersIconContainer, children: closure_1_9(Icon, obj4) };
      obj4 = { size: data(guildId[19]).Icon.Sizes.MEDIUM, source: filterType(guildId[20]) };
      Icon = data(guildId[19]).Icon;
      tmp7 = closure_1_9(first, obj3);
      tmp6 = guildId;
      tmp4 = closure_1_9;
    } else {
      tmp4 = closure_1_9;
      tmp6 = guildId;
      const obj = { action: value };
      tmp7 = closure_1_9(filterType(guildId[21]), obj);
    }
    const obj5 = {
      start: 0 === index,
      end: index === data1.length - 1,
      icon: tmp7,
      label,
      value: keyExtractor(item),
      legacyCompat_selected: selected,
      legacyCompat_onPress() {
        return callback(!selected, c0);
      }
    };
    const TableRadioRow = data(tmp6[22]).TableRadioRow;
    return tmp4(TableRadioRow, obj5);
  }, items3);
  SearchField = data(guildId[23]).SearchField;
  const tmp13 = closure_11;
  const tmp14 = closure_10;
  const tmp16 = first;
  if (filterType === callback.USER) {
    let intl3 = tmp4(tmp3[9]).intl;
    stringResult = intl3.string(tmp4(tmp3[9]).t.pYHobK);
  } else if (filterType === tmp17.ACTION) {
    let intl2 = tmp4(tmp3[9]).intl;
    stringResult = intl2.string(tmp4(tmp3[9]).t.I288Zx);
  } else {
    let intl = tmp4(tmp3[9]).intl;
    stringResult = intl.string(tmp4(tmp3[9]).t["5h0QOP"]);
  }
  const items4 = [tmp15(tmp16, obj2), , ];
  if (0 === data1.length) {
    let obj3 = { body: intl4.string(tmp4(tmp3[9]).t.V6nAfF), title: intl5.formatToPlainString(tmp4(tmp3[9]).t.ZGVL3g, { count: 0 }), Illustration: tmp4(tmp3[24]).NoResults };
    const EmptyState = tmp4(tmp3[19]).EmptyState;
    intl4 = tmp4(tmp3[9]).intl;
    intl5 = tmp4(tmp3[9]).intl;
    tmp15Result = tmp15(EmptyState, obj3);
  } else {
    let obj4 = { keyExtractor, renderItem: callback1, data: data1, contentContainerStyle: obj5 };
    obj5 = { paddingHorizontal: tmp2(tmp3[8]).space.PX_12, paddingBottom: bottom };
    const FlashList = tmp4(tmp3[25]).FlashList;
    tmp15Result = tmp15(FlashList, obj4);
  }
  const obj6 = { children: items4 };
  items4[1] = tmp15Result;
  items4[2] = closure_9(tmp4(tmp3[26]).NavScrim, {});
  return tmp13(tmp14, obj6);
};
export const createAuditLogFilterUserData = function createAuditLogFilterUserData(arg0) {
  let closure_0;
  let intl;
  _require = arg0;
  const items = [];
  let obj = { label: intl.string(require("intl").t.ZRFdsL), value: null, selected: null == arg0, index: 0 };
  let push = items.push;
  intl = require("intl").intl;
  push(obj);
  set = new Set();
  const logs = GuildSettingsAuditLogStore.logs;
  const item = logs.forEach((userId) => {
    let obj2;
    userId = userId.userId;
    if (null != userId) {
      const user = UserStore.getUser(userId);
      const obj3 = set;
      const tmp = set.has(userId) || null == user;
      if (!tmp) {
        obj3.add(userId);
        const push = items.push;
        const obj = { label: obj2.getUserTag(user), value: user, selected: user.id === closure_0, index: items.length };
        obj2 = UserUtilsDefault;
        push(obj);
      }
    }
  });
  const userIds = GuildSettingsAuditLogStore.userIds;
  const item1 = userIds.forEach((item) => {
    let obj2;
    if (null != item) {
      const user = UserStore.getUser(item);
      const obj3 = set;
      const tmp = set.has(item) || null == user;
      if (!tmp) {
        obj3.add(item);
        const push = items.push;
        const obj = { label: obj2.getUserTag(user), value: user, selected: user.id === closure_0, index: items.length };
        obj2 = UserUtilsDefault;
        push(obj);
      }
    }
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
export const createAuditLogFilterActionData = function createAuditLogFilterActionData(arg0) {
  let closure_0 = arg0;
  const obj = AuditLogUtils;
  const ACTION_FILTER_ITEMSResult = obj.ACTION_FILTER_ITEMS();
  const mapped = ACTION_FILTER_ITEMSResult.map((label, index) => ({ label: label.label, value: label.value, selected: closure_0 === label.value, index }));
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
