// Module ID: 10696
// Function ID: 10697
// Name: ConjureRemixSheet
// Dependencies: [5, 32, 19, 17, 4845, 6701, 21, 4971, 587, 558, 576, 10697, 7345, 504, 1128, 3830, 7291, 5210, 7248, 5234, 6987, 6903, 5244, 7298, 2]

// Module 10696 (ConjureRemixSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 7291 */;
import ConjureRemix from "ConjureRemix" /* 10697 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore_mod from "GuildStore" /* 4845 */;
import SortedGuildStore_mod from "SortedGuildStore" /* 6701 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;

let c10;
let c9;
let obj2;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let GuildStore = GuildStore_mod;
let SortedGuildStore = SortedGuildStore_mod;
({ jsx: c9, jsxs: c10 } = Fragment);
const ConjureRemixSheet_str = "ConjureRemixSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRemixSheet(project) {
  let closure_4;
  let closure_6;
  let first;
  let first1;
  let flattenedGuildIds;
  let guild;
  let items1;
  let obj11;
  let obj8;
  let onRemixed;
  let tmp10;
  let tmp12;
  let tmp = project;
  let tmp2 = onRemixed;
  let obj = project(onRemixed[10]);
  const cResult = obj.c(39);
  project = project.project;
  const currentGuildId = project.currentGuildId;
  onRemixed = project.onRemixed;
  let tmp4 = closure_12();
  let obj2 = first1;
  [first, _slicedToArray] = first1.useState(currentGuildId);
  [first1, closure_6] = first1.useState(false);
  let tmp9 = _slicedToArray(first1.useState(null), 2);
  [tmp10, GuildStore] = tmp9;
  let tmp11 = _slicedToArray(first1.useState(0), 2);
  [tmp12, SortedGuildStore] = tmp11;
  let closure_9 = first1.useRef(null);
  if (cResult[0] === currentGuildId) {
    let tmp13;
    if (cResult[1] === project) {
      tmp13 = cResult[2];
    }
    if (cResult[3] === tmp12) {
      if (cResult[4] === currentGuildId) {
        let tmp14;
        let tmp18;
        let tmp17;
        if (cResult[5] === project) {
          tmp14 = cResult[6];
        }
        const effect = obj2.useEffect(tmp13, tmp14);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [SortedGuildStore, ];
          items[1] = GuildStore;
          class R {
            constructor() {
              const items = [];
              SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
              const tmp2 = SortedGuildStore[Symbol.iterator]();
              while (tmp2 !== undefined) {
                GuildStore = GuildStore.getGuild(tmp3);
                let tmp6 = GuildStore;
                let result = null != GuildStore;
                if (result) {
                  let obj = project(onRemixed[12]);
                  result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                }
                if (result) {
                  let arr = items.push(tmp6);
                }
                continue;
              }
              return items;
            }
          }
          cResult[7] = items;
          cResult[8] = R;
          tmp18 = R;
          tmp17 = items;
        } else {
          tmp17 = cResult[7];
          tmp18 = cResult[8];
        }
        const tmpResult = tmp(tmp2[13]);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp17, tmp18);
        if (cResult[9] === first) {
          let tmp21;
          let tmp23;
          if (cResult[10] === stateFromStoresArray) {
            tmp21 = cResult[11];
          }
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[14]).intl;
            const stringResult = intl.string(currentGuildId(tmp2[15])["maL0+X"]);
            class R {
              constructor() {
                const items = [];
                SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
                const tmp2 = SortedGuildStore[Symbol.iterator]();
                while (tmp2 !== undefined) {
                  GuildStore = GuildStore.getGuild(tmp3);
                  let tmp6 = GuildStore;
                  let result = null != GuildStore;
                  if (result) {
                    let obj = project(onRemixed[12]);
                    result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                  }
                  if (result) {
                    let arr = items.push(tmp6);
                  }
                  continue;
                }
                return items;
              }
            }
            tmp23 = stringResult;
          } else {
            tmp23 = cResult[12];
          }
          const title = tmp23;
          class R {
            constructor() {
              const items = [];
              SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
              const tmp2 = SortedGuildStore[Symbol.iterator]();
              while (tmp2 !== undefined) {
                GuildStore = GuildStore.getGuild(tmp3);
                let tmp6 = GuildStore;
                let result = null != GuildStore;
                if (result) {
                  let obj = project(onRemixed[12]);
                  result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                }
                if (result) {
                  let arr = items.push(tmp6);
                }
                continue;
              }
              return items;
            }
          }
          if (cResult[15] === first) {
            if (cResult[16] === onRemixed) {
              let tmp27;
              let tmp29;
              let tmp35;
              if (cResult[17] === first1) {
                tmp27 = cResult[18];
              }
              closure_12 = tmp27;
              const _Symbol3 = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp30 = closure_9;
                let obj3 = { title: tmp31(currentGuildId(tmp2[15])["9wQTdG"]) };
                const BottomSheetTitleHeader = tmp(tmp2[18]).BottomSheetTitleHeader;
                const intl2 = tmp(tmp2[14]).intl;
                class R {
                  constructor() {
                    const items = [];
                    SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
                    const tmp2 = SortedGuildStore[Symbol.iterator]();
                    while (tmp2 !== undefined) {
                      GuildStore = GuildStore.getGuild(tmp3);
                      let tmp6 = GuildStore;
                      let result = null != GuildStore;
                      if (result) {
                        let obj = project(onRemixed[12]);
                        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                      }
                      if (result) {
                        let arr = items.push(tmp6);
                      }
                      continue;
                    }
                    return items;
                  }
                }
                const tmp33 = closure_9(BottomSheetTitleHeader, obj3);
                cResult[19] = tmp33;
                tmp29 = tmp33;
              } else {
                tmp29 = cResult[19];
              }
              class R {
                constructor() {
                  const items = [];
                  SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
                  const tmp2 = SortedGuildStore[Symbol.iterator]();
                  while (tmp2 !== undefined) {
                    GuildStore = GuildStore.getGuild(tmp3);
                    let tmp6 = GuildStore;
                    let result = null != GuildStore;
                    if (result) {
                      let obj = project(onRemixed[12]);
                      result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                    }
                    if (result) {
                      let arr = items.push(tmp6);
                    }
                    continue;
                  }
                  return items;
                }
              }
              if (cResult[20] !== tmp21) {
                let obj4 = { variant: "text-md/normal", color: "text-muted", children: tmp21 };
                const tmp37 = closure_9(tmp(tmp2[19]).Text, obj4);
                class R {
                  constructor() {
                    const items = [];
                    SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
                    const tmp2 = SortedGuildStore[Symbol.iterator]();
                    while (tmp2 !== undefined) {
                      GuildStore = GuildStore.getGuild(tmp3);
                      let tmp6 = GuildStore;
                      let result = null != GuildStore;
                      if (result) {
                        let obj = project(onRemixed[12]);
                        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                      }
                      if (result) {
                        let arr = items.push(tmp6);
                      }
                      continue;
                    }
                    return items;
                  }
                }
                cResult[21] = tmp37;
                tmp35 = tmp37;
              } else {
                tmp35 = cResult[21];
              }
              let tmp38 = first1 || stateFromStoresArray.length < 2;
              if (cResult[22] === tmp26) {
                if (cResult[23] === tmp35) {
                  let tmp39;
                  let tmp42;
                  let tmp46;
                  if (cResult[24] === tmp38) {
                    tmp39 = cResult[25];
                  }
                  if (cResult[26] !== tmp10) {
                    let tmp43 = null;
                    if (null != tmp10) {
                      let obj5 = { accessibilityRole: "alert", children: null };
                      let obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp10 };
                      class R {
                        constructor() {
                          const items = [];
                          SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
                          const tmp2 = SortedGuildStore[Symbol.iterator]();
                          while (tmp2 !== undefined) {
                            GuildStore = GuildStore.getGuild(tmp3);
                            let tmp6 = GuildStore;
                            let result = null != GuildStore;
                            if (result) {
                              let obj = project(onRemixed[12]);
                              result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                            }
                            if (result) {
                              let arr = items.push(tmp6);
                            }
                            continue;
                          }
                          return items;
                        }
                      }
                      tmp43 = closure_9(closure_6, obj5);
                    }
                    cResult[26] = tmp10;
                    class R {
                      constructor() {
                        const items = [];
                        SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
                        const tmp2 = SortedGuildStore[Symbol.iterator]();
                        while (tmp2 !== undefined) {
                          GuildStore = GuildStore.getGuild(tmp3);
                          let tmp6 = GuildStore;
                          let result = null != GuildStore;
                          if (result) {
                            let obj = project(onRemixed[12]);
                            result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                          }
                          if (result) {
                            let arr = items.push(tmp6);
                          }
                          continue;
                        }
                        return items;
                      }
                    }
                    tmp42 = tmp43;
                  } else {
                    tmp42 = cResult[27];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = tmp(tmp2[14]).intl;
                    const stringResult1 = intl3.string(currentGuildId(tmp2[15]).XWgAfc);
                    class R {
                      constructor() {
                        const items = [];
                        SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
                        const tmp2 = SortedGuildStore[Symbol.iterator]();
                        while (tmp2 !== undefined) {
                          GuildStore = GuildStore.getGuild(tmp3);
                          let tmp6 = GuildStore;
                          let result = null != GuildStore;
                          if (result) {
                            let obj = project(onRemixed[12]);
                            result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                          }
                          if (result) {
                            let arr = items.push(tmp6);
                          }
                          continue;
                        }
                        return items;
                      }
                    }
                    tmp46 = stringResult1;
                  } else {
                    tmp46 = cResult[28];
                  }
                  class R {
                    constructor() {
                      const items = [];
                      SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
                      const tmp2 = SortedGuildStore[Symbol.iterator]();
                      while (tmp2 !== undefined) {
                        GuildStore = GuildStore.getGuild(tmp3);
                        let tmp6 = GuildStore;
                        let result = null != GuildStore;
                        if (result) {
                          let obj = project(onRemixed[12]);
                          result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                        }
                        if (result) {
                          let arr = items.push(tmp6);
                        }
                        continue;
                      }
                      return items;
                    }
                  }
                  if (cResult[31] === first1) {
                    let tmp50;
                    if (cResult[32] === tmp49) {
                      tmp50 = cResult[33];
                    }
                    if (cResult[34] === tmp4.content) {
                      if (cResult[35] === tmp39) {
                        if (cResult[36] === tmp42) {
                          let tmp53;
                          if (cResult[37] === tmp50) {
                            tmp53 = cResult[38];
                          }
                          return tmp53;
                        }
                      }
                    }
                    const obj7 = { header: tmp29, children: stateFromStoresArray(closure_6, obj8) };
                    class R {
                      constructor() {
                        const items = [];
                        SortedGuildStore = SortedGuildStore.getFlattenedGuildIds();
                        const tmp2 = SortedGuildStore[Symbol.iterator]();
                        while (tmp2 !== undefined) {
                          GuildStore = GuildStore.getGuild(tmp3);
                          let tmp6 = GuildStore;
                          let result = null != GuildStore;
                          if (result) {
                            let obj = project(onRemixed[12]);
                            result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
                          }
                          if (result) {
                            let arr = items.push(tmp6);
                          }
                          continue;
                        }
                        return items;
                      }
                    }
                    obj8 = { style: tmp34, children: items1 };
                    items1 = [tmp39, tmp42, tmp50];
                    const ActionSheet = tmp(tmp2[23]).ActionSheet;
                    const tmp56 = closure_9(ActionSheet, obj7);
                    cResult[34] = tmp4.content;
                    cResult[35] = tmp39;
                    cResult[36] = tmp42;
                    cResult[37] = tmp50;
                    cResult[38] = tmp56;
                    tmp53 = tmp56;
                  }
                  const obj9 = { variant: "primary", text: tmp46, loading: first1, onPress: tmp49 };
                  const tmp52 = closure_9(tmp(tmp2[22]).Button, obj9);
                  cResult[31] = first1;
                  cResult[32] = tmp49;
                  cResult[33] = tmp52;
                  tmp50 = tmp52;
                }
              }
              const obj10 = { hasIcons: false, children: closure_9(tmp(tmp2[21]).TableRow, obj11) };
              const TableRowGroup = tmp(tmp2[20]).TableRowGroup;
              obj11 = { label: tmp23, trailing: tmp35, arrow: true, disabled: tmp38, onPress: tmp26 };
              const tmp41 = closure_9(TableRowGroup, obj10);
              cResult[22] = tmp26;
              cResult[23] = tmp35;
              cResult[24] = tmp38;
              cResult[25] = tmp41;
              tmp39 = tmp41;
            }
          }
          let closure_0 = first(function*(arg0, value) {
            let v1;
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let tmp;
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_1 = tmp4;
                    tmp = undefined;
                    const tmp38 = first1;
                    if (!tmp38) {
                      if (null != ref.current) {
                        closure_1_6(true);
                        guild(null);
                        const current = tmp23.current;
                        c2 = 1;
                        c3 = 1;
                        const obj4 = { value: current.open(c3), done: false };
                        return obj4;
                      }
                    }
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  tmp = value;
                  if (tmp.ok) {
                    const obj = currentGuildId(onRemixed[17]);
                    obj.hideActionSheet(title);
                    c2(tmp.projectId, tmp.guildId);
                    c3 = 3;
                    const obj6 = { value: undefined, done: true };
                    return obj6;
                  } else {
                    guild(tmp.message);
                    if (!tmp.kept) {
                      flattenedGuildIds((arg0) => arg0 + 1);
                    }
                    closure_1_6(false);
                  }
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp30) {
                c3 = 3;
                throw tmp30;
              }
            }
          });
          function t8() {
            return closure_0(...arguments);
          }
          cResult[15] = first;
          cResult[16] = onRemixed;
          cResult[17] = first1;
          cResult[18] = t8;
          tmp27 = t8;
        }
        const found = stateFromStoresArray.find((id) => id.id === first);
        let str2;
        if (found != null) {
          str2 = found.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        cResult[9] = first;
        cResult[10] = stateFromStoresArray;
        cResult[11] = str2;
        tmp21 = str2;
      }
    }
    const items2 = [project, currentGuildId, ];
    cResult[3] = tmp12;
    cResult[4] = currentGuildId;
    cResult[5] = project;
    cResult[6] = items2;
    tmp14 = items2;
  }
  const fn = function x() {
    const obj = ConjureRemix;
    const prepareConjureRemixResult = obj.prepareConjureRemix(project, currentGuildId);
    closure_9.current = prepareConjureRemixResult;
    return () => prepareConjureRemixResult.dismiss();
  };
  cResult[0] = currentGuildId;
  cResult[1] = project;
  cResult[2] = fn;
  tmp13 = fn;
}) : (function ConjureRemixSheet(project) {
  let BottomSheetTitleHeader;
  let c7;
  let c8;
  let closure_4;
  let closure_6;
  let first;
  let first1;
  let intl2;
  let intl3;
  let items4;
  let obj4;
  let obj5;
  let obj9;
  let title;
  let tmp18;
  let tmp20;
  let tmp7;
  let tmp9;
  project = project.project;
  const currentGuildId = project.currentGuildId;
  let onRemixed = project.onRemixed;
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let c11;
  closure_12 = undefined;
  let obj = first1;
  let tmp = closure_12();
  [first, _slicedToArray] = first1.useState(currentGuildId);
  [first1, closure_6] = first1.useState(false);
  let tmp6 = _slicedToArray(first1.useState(null), 2);
  [tmp7, c7] = tmp6;
  let tmp8 = _slicedToArray(first1.useState(0), 2);
  [tmp9, c8] = tmp8;
  let closure_9 = first1.useRef(null);
  let items = [project, currentGuildId, tmp9];
  const effect = first1.useEffect(() => {
    const obj = ConjureRemix;
    const prepareConjureRemixResult = obj.prepareConjureRemix(project, currentGuildId);
    closure_9.current = prepareConjureRemixResult;
    return () => prepareConjureRemixResult.dismiss();
  }, items);
  let tmp11 = project;
  let obj2 = project(onRemixed[13]);
  const items1 = [c8, c7];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
    const items = [];
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const tmp2 = flattenedGuildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      guild = guild.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(onRemixed[12]);
        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const found = stateFromStoresArray.find((id) => id.id === first);
  let str;
  if (found != null) {
    str = found.name;
  }
  if (str == null) {
    str = "";
  }
  const intl = tmp11(tmp12[14]).intl;
  const stringResult = intl.string(currentGuildId(onRemixed[15])["maL0+X"]);
  c11 = stringResult;
  const items2 = [stringResult, stateFromStoresArray];
  const callback = obj.useCallback(() => {
    let obj3;
    const obj = Sheet_showSimpleActionSheet;
    const obj2 = {
      key: "ConjureRemixDestination",
      stackingBehavior: "stack",
      header: obj3,
      hasIcons: false,
      options: stateFromStoresArray.map((label) => ({
        label: label.name,
        onPress() {
          return closure_2_4(label.id);
        }
      }))
    };
    obj3 = { title };
    const result = obj.showSimpleActionSheet(obj2);
  }, items2);
  const items3 = [first, onRemixed, first1];
  closure_12 = obj.useCallback(first(function*(arg0, value) {
    let c2;
    let closure_0;
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === onRemixed) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            const tmp38 = first1;
            if (!tmp38) {
              if (null != ref.current) {
                closure_6(true);
                guild(null);
                const current = tmp23.current;
                onRemixed = 1;
                c3 = 1;
                const obj4 = { value: current.open(first), done: false };
                return obj4;
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          tmp = value;
          if (tmp.ok) {
            const obj = tmp4(onRemixed[17]);
            obj.hideActionSheet(title);
            closure_129_2(tmp.projectId, tmp.guildId);
            c3 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else {
            closure_129_7(tmp.message);
            if (!tmp.kept) {
              closure_129_8((arg0) => arg0 + 1);
            }
            closure_129_6(false);
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp30) {
        c3 = 3;
        throw tmp30;
      }
    }
  }), items3);
  let obj3 = { header: closure_9(BottomSheetTitleHeader, obj4), children: tmp18(tmp19, obj5) };
  const ActionSheet = tmp11(tmp12[23]).ActionSheet;
  obj4 = { title: intl2.string(currentGuildId(tmp12[15])["9wQTdG"]) };
  BottomSheetTitleHeader = tmp11(tmp12[18]).BottomSheetTitleHeader;
  intl2 = tmp11(tmp12[14]).intl;
  obj5 = { style: tmp.content, children: items4 };
  const TableRowGroup = tmp11(tmp12[20]).TableRowGroup;
  let obj6 = { label: stringResult, trailing: closure_9(tmp11(tmp12[19]).Text, { variant: "text-md/normal", color: "text-muted", children: str }), arrow: true, disabled: tmp20, onPress: callback };
  const TableRow = tmp11(tmp12[21]).TableRow;
  items4 = [, , ];
  tmp20 = first1 || stateFromStoresArray.length < 2;
  const obj7 = { hasIcons: false, children: closure_9(TableRow, obj6) };
  items4[0] = closure_9(TableRowGroup, obj7);
  let tmp17Result = null;
  const tmp14 = currentGuildId;
  tmp18 = stateFromStoresArray;
  if (null != tmp7) {
    const obj8 = { accessibilityRole: "alert", children: closure_9(tmp11(onRemixed[19]).Text, obj9) };
    obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp7 };
    tmp17Result = tmp17(tmp19, obj8);
  }
  items4[1] = tmp17Result;
  const obj10 = {
    variant: "primary",
    text: intl3.string(tmp14(onRemixed[15]).XWgAfc),
    loading: first1,
    onPress() {
      const promise = closure_12();
      promise.catch(() => {

      });
    }
  };
  const Button = tmp11(tmp12[22]).Button;
  intl3 = tmp11(tmp12[14]).intl;
  items4[2] = closure_9(Button, obj10);
  return closure_9(ActionSheet, obj3);
});
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default tmp3;
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";
