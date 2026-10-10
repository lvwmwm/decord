// Module ID: 18284
// Function ID: 18285
// Name: GuildSettingsModalAuditLogFilter
// Dependencies: [32, 19, 17, 1390, 18280, 1085, 21, 5092, 587, 1126, 4962, 18282, 558, 576, 4832, 6265, 10299, 1631, 1503, 6094, 18285, 1200, 11146, 18286, 6261, 6738, 8358, 8624, 6727, 2]
// Exports: createAuditLogFilterActionData, createAuditLogFilterUserData

// Module 18284 (GuildSettingsModalAuditLogFilter)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import react_native2 from "react-native" /* 4832 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import fuzzysearchDefault from "fuzzysearch" /* 6094 */;
import FormRadio from "FormRadio" /* 6265 */;
import DetailedGuildIdentityUserRowDefault from "DetailedGuildIdentityUserRow" /* 10299 */;
import AuditLogUtils from "AuditLogUtils" /* 18282 */;
import AuditLogActionCreators from "AuditLogActionCreators" /* 18285 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 18280 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, navigation, set;

let c10;
let c9;
let obj2;
let unpackModuleId;
const View = react_native.View;
const AuditLogFilterTypes = Constants.AuditLogFilterTypes;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let obj = { searchBar: obj2, allUsersIconContainer: { height: 30, width: 30, alignItems: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AuditLogFilterUserRow(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let end;
  let guildId;
  let onPress;
  let selected;
  let start;
  let tmp4;
  let tmp6;
  let userId;
  const obj = react2;
  const cResult = obj.c(13);
  ({ start, end, selected, guildId, userId, onPress } = arg0);
  if (cResult[0] !== selected) {
    const obj2 = { selected };
    cResult[0] = selected;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = react_native2;
  const radioA11yNative = tmpResult.useRadioA11yNative(tmp4);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (cResult[2] !== selected) {
    const obj3 = { selected };
    const tmp8 = React4(FormRadio.FormRadio, obj3);
    cResult[2] = selected;
    cResult[3] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === accessibilityRole) {
    if (cResult[5] === accessibilityState) {
      if (cResult[6] === end) {
        if (cResult[7] === guildId) {
          if (cResult[8] === onPress) {
            if (cResult[9] === start) {
              if (cResult[10] === tmp6) {
                let tmp9;
                if (cResult[11] === userId) {
                  tmp9 = cResult[12];
                }
                return tmp9;
              }
            }
          }
        }
      }
    }
  }
  const tmp10 = React4(DetailedGuildIdentityUserRowDefault, { start, end, userId, guildId, onPress, accessibilityRole, accessibilityState, trailing: tmp6 });
  cResult[4] = accessibilityRole;
  cResult[5] = accessibilityState;
  cResult[6] = end;
  cResult[7] = guildId;
  cResult[8] = onPress;
  cResult[9] = start;
  cResult[10] = tmp6;
  cResult[11] = userId;
  cResult[12] = tmp10;
  tmp9 = tmp10;
}) : (function AuditLogFilterUserRow(selected) {
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
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalAuditLogFilter(guildId) {
  let closure_2;
  let data;
  let filterType;
  let first;
  let tmp9;
  let tmp = filterType;
  let tmp2 = dependencyMap;
  let obj = filterType(576);
  const cResult = obj.c(39);
  ({ data, filterType } = guildId);
  guildId = guildId.guildId;
  let tmp4 = closure_12();
  dependencyMap = tmp4;
  const bottom = guildId(1631)().bottom;
  let obj2 = filterType(1503);
  navigation = obj2.useNavigation();
  let obj3 = first;
  let tmp6 = navigation(first.useState(""), 2);
  first = tmp6[0];
  if (cResult[0] === data) {
    let tmp8;
    let tmp12;
    let tmp13;
    if (cResult[1] === first) {
      tmp8 = cResult[2];
    }
    const tmp11 = globalThis;
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      function keyExtractor(value) {
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
      cResult[5] = keyExtractor;
      tmp12 = keyExtractor;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== tmp8) {
      let obj4 = { data: tmp8, keyExtractor: tmp12 };
      cResult[6] = tmp8;
      cResult[7] = obj4;
      tmp13 = obj4;
    } else {
      tmp13 = cResult[7];
    }
    const data1 = tmp13.data;
    const keyExtractor2 = tmp13.keyExtractor;
    if (cResult[8] === filterType) {
      let tmp14;
      let tmp15;
      if (cResult[9] === navigation) {
        tmp14 = cResult[10];
        tmp15 = cResult[11];
      }
      const effect = obj3.useEffect(tmp14, tmp15);
      if (cResult[12] === filterType) {
        if (cResult[13] === guildId) {
          let closure_7 = tmp17;
          if (cResult[16] === data1.length) {
            if (cResult[17] === filterType) {
              if (cResult[18] === guildId) {
                if (cResult[19] === tmp17) {
                  if (cResult[20] === keyExtractor2) {
                    let tmp20;
                    let tmp23;
                    if (cResult[23] !== filterType) {
                      let stringResult;
                      if (filterType === AuditLogFilterTypes.USER) {
                        let intl3 = tmp(1126).intl;
                        stringResult = intl3.string(tmp(1126).t.pYHobK);
                      } else if (filterType === tmp21.ACTION) {
                        let intl2 = tmp(1126).intl;
                        stringResult = intl2.string(tmp(1126).t.I288Zx);
                      } else {
                        let intl = tmp(1126).intl;
                        stringResult = intl.string(tmp(1126).t["5h0QOP"]);
                      }
                      cResult[23] = filterType;
                      class O {
                        constructor(arg0, id) {
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
                        }
                      }
                      cResult[24] = stringResult;
                      tmp20 = stringResult;
                    } else {
                      tmp20 = cResult[24];
                    }
                    if (cResult[25] !== tmp20) {
                      let obj5 = { size: "md", placeholder: tmp20, onChange: null };
                      class O {
                        constructor(arg0, id) {
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
                        }
                      }
                      const tmp25 = closure_9(tmp(6738).SearchField, obj5);
                      cResult[25] = tmp20;
                      cResult[26] = tmp25;
                      tmp23 = tmp25;
                    } else {
                      tmp23 = cResult[26];
                    }
                    class O {
                      constructor(arg0, id) {
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
                      }
                    }
                    const obj6 = { style: tmp4.searchBar, children: tmp23 };
                    cResult[27] = tmp4.searchBar;
                    const tmp29 = closure_9(data1, obj6);
                    class N {
                      constructor() {
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
                      }
                    }
                    cResult[28] = tmp23;
                    cResult[29] = tmp29;
                  }
                }
              }
            }
          }
          class O {
            constructor(arg0, id) {
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
            }
          }
          cResult[16] = data1.length;
          cResult[17] = filterType;
          cResult[18] = guildId;
          cResult[19] = tmp17;
          class N {
            constructor() {
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
            }
          }
          cResult[20] = keyExtractor2;
          cResult[21] = tmp4.allUsersIconContainer;
          cResult[22] = tmp19;
        }
      }
      class O {
        constructor(arg0, id) {
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
        }
      }
      cResult[12] = filterType;
      cResult[13] = guildId;
      cResult[14] = navigation;
      cResult[15] = O;
      class N {
        constructor() {
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
        }
      }
    }
    class N {
      constructor() {
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
      }
    }
    const items = [filterType, navigation];
    cResult[8] = filterType;
    cResult[9] = navigation;
    cResult[10] = N;
    cResult[11] = items;
    tmp15 = items;
    tmp14 = N;
  }
  if (cResult[3] !== first) {
    const fn = function c(label) {
      const str = label.label;
      const tmp = fuzzysearchDefault;
      const formatted = first.toLowerCase();
      return tmp(formatted, str.toLowerCase());
    };
    cResult[3] = first;
    class O {
      constructor(arg0, id) {
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
      }
    }
    cResult[4] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[4];
  }
  const found = data.filter(tmp9);
  cResult[0] = data;
  cResult[1] = first;
  cResult[2] = found;
  tmp8 = found;
}) : (function GuildSettingsModalAuditLogFilter(data) {
  let SearchField;
  let intl4;
  let intl5;
  let obj5;
  let stringResult;
  let tmp15Result;
  data = data.data;
  const filterType = data.filterType;
  const guildId = data.guildId;
  let tmp = closure_12();
  let closure_3 = tmp;
  const tmp3 = guildId;
  let tmp2 = filterType;
  let tmp4 = data;
  const bottom = filterType(guildId[17])().bottom;
  let obj = data(guildId[18]);
  navigation = obj.useNavigation();
  let tmp6 = closure_3(navigation.useState(""), 2);
  const first = tmp6[0];
  const items = [first, data];
  const tmp8 = tmp6[1];
  const memo = navigation.useMemo(() => {
    const obj = {
      data: data.filter((label) => {
        const str = label.label;
        const tmp = filterType(guildId[19]);
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
      obj4 = { size: data(guildId[21]).Icon.Sizes.MEDIUM, source: filterType(guildId[22]) };
      Icon = data(guildId[21]).Icon;
      tmp7 = closure_1_9(first, obj3);
      tmp6 = guildId;
      tmp4 = closure_1_9;
    } else {
      tmp4 = closure_1_9;
      tmp6 = guildId;
      const obj = { action: value };
      tmp7 = closure_1_9(filterType(guildId[23]), obj);
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
    const TableRadioRow = data(tmp6[24]).TableRadioRow;
    return tmp4(TableRadioRow, obj5);
  }, items3);
  SearchField = data(guildId[25]).SearchField;
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
    let obj3 = { body: intl4.string(tmp4(tmp3[9]).t.V6nAfF), title: intl5.formatToPlainString(tmp4(tmp3[9]).t.ZGVL3g, { count: 0 }), Illustration: tmp4(tmp3[26]).NoResults };
    const EmptyState = tmp4(tmp3[21]).EmptyState;
    intl4 = tmp4(tmp3[9]).intl;
    intl5 = tmp4(tmp3[9]).intl;
    tmp15Result = tmp15(EmptyState, obj3);
  } else {
    let obj4 = { keyExtractor, renderItem: callback1, data: data1, contentContainerStyle: obj5 };
    obj5 = { paddingHorizontal: tmp2(tmp3[8]).space.PX_12, paddingBottom: bottom };
    const FlashList = tmp4(tmp3[27]).FlashList;
    tmp15Result = tmp15(FlashList, obj4);
  }
  const obj6 = { children: items4 };
  items4[1] = tmp15Result;
  items4[2] = closure_9(tmp4(tmp3[28]).NavScrim, {});
  return tmp13(tmp14, obj6);
});
const result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx");

export default tmp4;
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
