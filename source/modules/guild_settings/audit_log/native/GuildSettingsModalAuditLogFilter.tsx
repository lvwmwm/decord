// Module ID: 16095
// Function ID: 124129
// Name: GuildSettingsModalAuditLogFilter
// Dependencies: []
// Exports: createAuditLogFilterActionData, createAuditLogFilterUserData, default

// Module 16095 (GuildSettingsModalAuditLogFilter)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const AuditLogFilterTypes = arg1(dependencyMap[5]).AuditLogFilterTypes;
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_12, paddingVertical: importDefault(dependencyMap[8]).space.PX_16 };
obj.searchBar = obj;
obj.allUsersIconContainer = {};
let closure_12 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx");

export default function GuildSettingsModalAuditLogFilter(data) {
  data = data.data;
  const arg1 = data;
  const filterType = data.filterType;
  const importDefault = filterType;
  const guildId = data.guildId;
  const dependencyMap = guildId;
  const tmp = callback3();
  let callback = tmp;
  let obj = arg1(dependencyMap[13]);
  const navigation = obj.useNavigation();
  const React = navigation;
  const tmp3 = callback(React.useState(""), 2);
  const first = tmp3[0];
  const View = first;
  const items = [first, data];
  const memo = React.useMemo(() => ({
    data: data.filter((label) => {
      const formatted = closure_5.toLowerCase();
      return callback(closure_2[14])(formatted, label.label.toLowerCase());
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
  let closure_6 = data;
  const items1 = [filterType, navigation];
  const effect = React.useEffect(() => {
    const obj = {};
    if (constants.USER === filterType) {
      const intl3 = data(guildId[9]).intl;
      let stringResult = intl3.string(data(guildId[9]).t.hxnY/q);
    } else if (constants.ACTION === tmp2) {
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
  callback = React.useCallback((arg0, action) => {
    let tmp = action;
    if (arg0) {
      if (filterType === constants.USER) {
        let id = null;
        if (null != tmp) {
          id = tmp.id;
        }
        data(guildId[15]).filterByUserId(id, guildId);
        const obj2 = data(guildId[15]);
      } else if (filterType === constants.ACTION) {
        data(guildId[15]).filterByAction(tmp, guildId);
        const obj = data(guildId[15]);
      }
      tmp = navigation;
      navigation.pop();
    }
  }, items2);
  let closure_7 = callback;
  const items3 = [filterType, guildId, callback, data.length, tmp.allUsersIconContainer];
  obj = {};
  obj = { style: tmp.searchBar };
  const callback1 = React.useCallback((item) => {
    const value = iter.value;
    const data = value;
    const selected = iter.selected;
    const filterType = selected;
    const index = item.index;
    if (filterType === constants.USER) {
      if (null !== value) {
        let obj = {
          start: 0 === index,
          end: index === data.length - 1,
          userId: value.id,
          guildId,
          onPress() {
                return callback(!selected, value);
              }
        };
        obj = { selected };
        obj.trailing = callback(data(guildId[17]).FormRadio, obj);
        let tmp2Result = callback(filterType(guildId[16]), obj);
        const tmp17 = filterType(guildId[16]);
      }
      return tmp2Result;
    }
    obj = { start: 0 === index, end: index === data.length - 1 };
    if (filterType === constants.USER) {
      const obj1 = { style: tmp.allUsersIconContainer };
      const obj2 = { size: data(guildId[19]).Icon.Sizes.MEDIUM, source: filterType(guildId[20]) };
      obj1.children = callback(data(guildId[19]).Icon, obj2);
      let tmp6 = callback(first, obj1);
    } else {
      const obj3 = { action: value };
      tmp6 = callback(filterType(guildId[21]), obj3);
    }
    obj.icon = tmp6;
    obj.label = item.item.label;
    obj.onPress = function onPress() {
      return callback(!selected, value);
    };
    obj.trailing = callback(data(guildId[17]).FormRadio, { selected });
    tmp2Result = callback(data(guildId[18]).TableRow, obj);
  }, items3);
  const obj1 = { size: "md" };
  if (filterType === AuditLogFilterTypes.USER) {
    const intl3 = arg1(dependencyMap[9]).intl;
    let stringResult = intl3.string(arg1(dependencyMap[9]).t.pYHobK);
  } else if (filterType === AuditLogFilterTypes.ACTION) {
    const intl2 = arg1(dependencyMap[9]).intl;
    stringResult = intl2.string(arg1(dependencyMap[9]).t.I288Zx);
  } else {
    const intl = arg1(dependencyMap[9]).intl;
    stringResult = intl.string(arg1(dependencyMap[9]).t.5h0QOP);
  }
  obj1.placeholder = stringResult;
  obj1.onChange = tmp3[1];
  obj.children = callback2(arg1(dependencyMap[22]).SearchField, obj1);
  const items4 = [callback2(View, obj), , ];
  if (0 === data.length) {
    const obj2 = {};
    const intl4 = arg1(dependencyMap[9]).intl;
    obj2.body = intl4.string(arg1(dependencyMap[9]).t.V6nAfF);
    const intl5 = arg1(dependencyMap[9]).intl;
    const obj3 = { count: 0 };
    obj2.title = intl5.formatToPlainString(arg1(dependencyMap[9]).t.ZGVL3g, obj3);
    obj2.Illustration = arg1(dependencyMap[23]).NoResults;
    let tmp24 = callback2(arg1(dependencyMap[19]).EmptyState, obj2);
  } else {
    const obj4 = { keyExtractor: memo.keyExtractor, renderItem: callback1, data };
    const obj5 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_12, paddingBottom: importDefault(dependencyMap[12])().bottom };
    obj4.contentContainerStyle = obj5;
    tmp24 = callback2(arg1(dependencyMap[24]).FlashList, obj4);
  }
  items4[1] = tmp24;
  items4[2] = callback2(arg1(dependencyMap[25]).NavScrim, {});
  obj.children = items4;
  return closure_11(closure_10, obj);
};
export const createAuditLogFilterUserData = function createAuditLogFilterUserData(arg0) {
  const arg1 = arg0;
  function userIdResolver(userId) {
    if (null != userId) {
      const user = user.getUser(userId);
      if (!tmp) {
        set.add(userId);
        const obj = { label: items(set[10]).getUserTag(user), value: user, selected: user.id === userId, index: items.length };
        items.push(obj);
        const obj2 = items(set[10]);
      }
      const tmp = set.has(userId) || null == user;
    }
  }
  const items = [];
  const importDefault = items;
  const obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.label = intl.string(arg1(dependencyMap[9]).t.ZRFdsL);
  obj.value = null;
  obj.selected = null == arg0;
  obj.index = 0;
  items.push(obj);
  const dependencyMap = new Set();
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
export const createAuditLogFilterActionData = function createAuditLogFilterActionData(closure_4) {
  const arg1 = closure_4;
  const obj = arg1(dependencyMap[11]);
  const mapped = arg1(dependencyMap[11]).ACTION_FILTER_ITEMS().map((label, index) => ({ label: label.label, value: label.value, selected: label === label.value, index }));
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
