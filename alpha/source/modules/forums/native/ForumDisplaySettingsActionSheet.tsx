// Module ID: 12544
// Function ID: 12545
// Name: ForumDisplaySettingsActionSheet
// Dependencies: [32, 19, 2063, 11693, 21, 1126, 2073, 2074, 2075, 558, 576, 504, 7876, 5392, 6828, 8538, 6264, 6265, 6298, 5373, 587, 6885, 2]

// Module 12544 (ForumDisplaySettingsActionSheet)
import Tracking from "Tracking" /* 7876 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import ForumChannelStore from "ForumChannelStore" /* 11693 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_6;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useForumChannelStoreApi: metroRequire, useForumChannelStore: metroImportDefault } = ForumChannelStore);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumDisplaySettingsActionSheet(channelId) {
  let Stack;
  let closure_4;
  let first;
  let first1;
  let first2;
  let intl10;
  let intl11;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj3;
  let obj5;
  let obj6;
  let sortOrder;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp6;
  let obj = channelId(sortOrder[10]);
  const cResult = obj.c(40);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first1];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function b() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = channelId(sortOrder[11]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp7 = first2(channelId);
  sortOrder = tmp7.sortOrder;
  const layoutType = tmp7.layoutType;
  const tagSetting = tmp7.tagSetting;
  const tmp8 = closure_6();
  react = tmp8;
  const tmp9 = layoutType(react.useState(sortOrder), 2);
  first1 = tmp9[0];
  closure_6 = tmp9[1];
  const tmp11 = layoutType(react.useState(layoutType), 2);
  first2 = tmp11[0];
  let closure_8 = tmp11[1];
  const tmp13 = layoutType(react.useState(tagSetting), 2);
  const first3 = tmp13[0];
  let closure_10 = tmp13[1];
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    function handleSortOrderChange(arg0) {
      closure_6(arg0);
    }
    cResult[3] = handleSortOrderChange;
    tmp18 = handleSortOrderChange;
  } else {
    tmp18 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    function handleLayoutTypeChange(arg0) {
      closure_8(arg0);
    }
    cResult[4] = handleLayoutTypeChange;
    tmp19 = handleLayoutTypeChange;
  } else {
    tmp19 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    function handleTagSettingChange(arg0) {
      closure_10(arg0);
    }
    cResult[5] = handleTagSettingChange;
    tmp20 = handleTagSettingChange;
  } else {
    tmp20 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === channelId) {
      if (cResult[8] === layoutType) {
        if (cResult[9] === first2) {
          if (cResult[10] === first1) {
            if (cResult[11] === first3) {
              if (cResult[12] === sortOrder) {
                let tmp21;
                if (cResult[13] === tmp8) {
                  tmp21 = cResult[14];
                }
                const tmpResult2 = channelId(sortOrder[13]);
                const unmountEffect = tmpResult2.useUnmountEffect(tmp21);
                if (cResult[15] !== stateFromStores) {
                  class Y {
                    constructor() {
                      if (null != stateFromStores) {
                        const current = ref.current;
                        if (current != null) {
                          current.setValue(stateFromStores.getDefaultSortOrder());
                        }
                        const current2 = ref1.current;
                        if (current2 != null) {
                          current2.setValue(stateFromStores.getDefaultLayout());
                        }
                        const current3 = ref2.current;
                        if (current3 != null) {
                          current3.setValue(stateFromStores.getDefaultTagSetting());
                        }
                      }
                    }
                  }
                  cResult[15] = stateFromStores;
                  cResult[16] = Y;
                } else {
                  class Y {
                    constructor() {
                      if (null != stateFromStores) {
                        const current = ref.current;
                        if (current != null) {
                          current.setValue(stateFromStores.getDefaultSortOrder());
                        }
                        const current2 = ref1.current;
                        if (current2 != null) {
                          current2.setValue(stateFromStores.getDefaultLayout());
                        }
                        const current3 = ref2.current;
                        if (current3 != null) {
                          current3.setValue(stateFromStores.getDefaultTagSetting());
                        }
                      }
                    }
                  }
                }
                if (null == stateFromStores) {
                  class Y {
                    constructor() {
                      if (null != stateFromStores) {
                        const current = ref.current;
                        if (current != null) {
                          current.setValue(stateFromStores.getDefaultSortOrder());
                        }
                        const current2 = ref1.current;
                        if (current2 != null) {
                          current2.setValue(stateFromStores.getDefaultLayout());
                        }
                        const current3 = ref2.current;
                        if (current3 != null) {
                          current3.setValue(stateFromStores.getDefaultTagSetting());
                        }
                      }
                    }
                  }
                } else {
                  let tmp25;
                  let tmp27;
                  let tmp33;
                  let tmp32;
                  let tmp31;
                  class Y {
                    constructor() {
                      if (null != stateFromStores) {
                        const current = ref.current;
                        if (current != null) {
                          current.setValue(stateFromStores.getDefaultSortOrder());
                        }
                        const current2 = ref1.current;
                        if (current2 != null) {
                          current2.setValue(stateFromStores.getDefaultLayout());
                        }
                        const current3 = ref2.current;
                        if (current3 != null) {
                          current3.setValue(stateFromStores.getDefaultTagSetting());
                        }
                      }
                    }
                  }
                  if (tmp24) {
                    class Y {
                      constructor() {
                        if (null != stateFromStores) {
                          const current = ref.current;
                          if (current != null) {
                            current.setValue(stateFromStores.getDefaultSortOrder());
                          }
                          const current2 = ref1.current;
                          if (current2 != null) {
                            current2.setValue(stateFromStores.getDefaultLayout());
                          }
                          const current3 = ref2.current;
                          if (current3 != null) {
                            current3.setValue(stateFromStores.getDefaultTagSetting());
                          }
                        }
                      }
                    }
                  }
                  const _Symbol = Symbol;
                  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                    class Y {
                      constructor() {
                        if (null != stateFromStores) {
                          const current = ref.current;
                          if (current != null) {
                            current.setValue(stateFromStores.getDefaultSortOrder());
                          }
                          const current2 = ref1.current;
                          if (current2 != null) {
                            current2.setValue(stateFromStores.getDefaultLayout());
                          }
                          const current3 = ref2.current;
                          if (current3 != null) {
                            current3.setValue(stateFromStores.getDefaultTagSetting());
                          }
                        }
                      }
                    }
                    const stringResult = obj5.string(channelId(sortOrder[5]).t.xyYt8A);
                    cResult[17] = stringResult;
                    tmp25 = stringResult;
                  } else {
                    class Y {
                      constructor() {
                        if (null != stateFromStores) {
                          const current = ref.current;
                          if (current != null) {
                            current.setValue(stateFromStores.getDefaultSortOrder());
                          }
                          const current2 = ref1.current;
                          if (current2 != null) {
                            current2.setValue(stateFromStores.getDefaultLayout());
                          }
                          const current3 = ref2.current;
                          if (current3 != null) {
                            current3.setValue(stateFromStores.getDefaultTagSetting());
                          }
                        }
                      }
                    }
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                    class Y {
                      constructor() {
                        if (null != stateFromStores) {
                          const current = ref.current;
                          if (current != null) {
                            current.setValue(stateFromStores.getDefaultSortOrder());
                          }
                          const current2 = ref1.current;
                          if (current2 != null) {
                            current2.setValue(stateFromStores.getDefaultLayout());
                          }
                          const current3 = ref2.current;
                          if (current3 != null) {
                            current3.setValue(stateFromStores.getDefaultTagSetting());
                          }
                        }
                      }
                    }
                    const stringResult1 = obj6.string(channelId(sortOrder[5]).t.yBZMsQ);
                    cResult[18] = stringResult1;
                    tmp27 = stringResult1;
                  } else {
                    class Y {
                      constructor() {
                        if (null != stateFromStores) {
                          const current = ref.current;
                          if (current != null) {
                            current.setValue(stateFromStores.getDefaultSortOrder());
                          }
                          const current2 = ref1.current;
                          if (current2 != null) {
                            current2.setValue(stateFromStores.getDefaultLayout());
                          }
                          const current3 = ref2.current;
                          if (current3 != null) {
                            current3.setValue(stateFromStores.getDefaultTagSetting());
                          }
                        }
                      }
                    }
                  }
                  if (cResult[19] !== tmp23) {
                    class Y {
                      constructor() {
                        if (null != stateFromStores) {
                          const current = ref.current;
                          if (current != null) {
                            current.setValue(stateFromStores.getDefaultSortOrder());
                          }
                          const current2 = ref1.current;
                          if (current2 != null) {
                            current2.setValue(stateFromStores.getDefaultLayout());
                          }
                          const current3 = ref2.current;
                          if (current3 != null) {
                            current3.setValue(stateFromStores.getDefaultTagSetting());
                          }
                        }
                      }
                    }
                    const obj2 = { title: tmp25, leading: closure_8(tmp(tmp2[15]).ActionSheetHeaderPressableText, obj3) };
                    const BottomSheetTitleHeader = tmp(tmp2[14]).BottomSheetTitleHeader;
                    obj3 = { onPress: tmp23, label: tmp27 };
                    cResult[19] = tmp23;
                    cResult[20] = closure_8(BottomSheetTitleHeader, obj2);
                    const tmp30 = closure_8(BottomSheetTitleHeader, obj2);
                  } else {
                    class Y {
                      constructor() {
                        if (null != stateFromStores) {
                          const current = ref.current;
                          if (current != null) {
                            current.setValue(stateFromStores.getDefaultSortOrder());
                          }
                          const current2 = ref1.current;
                          if (current2 != null) {
                            current2.setValue(stateFromStores.getDefaultLayout());
                          }
                          const current3 = ref2.current;
                          if (current3 != null) {
                            current3.setValue(stateFromStores.getDefaultTagSetting());
                          }
                        }
                      }
                    }
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    class Y {
                      constructor() {
                        if (null != stateFromStores) {
                          const current = ref.current;
                          if (current != null) {
                            current.setValue(stateFromStores.getDefaultSortOrder());
                          }
                          const current2 = ref1.current;
                          if (current2 != null) {
                            current2.setValue(stateFromStores.getDefaultLayout());
                          }
                          const current3 = ref2.current;
                          if (current3 != null) {
                            current3.setValue(stateFromStores.getDefaultTagSetting());
                          }
                        }
                      }
                    }
                    const stringResult2 = obj9.string(channelId(sortOrder[5]).t.f8wNDl);
                    const intl = tmp(tmp2[5]).intl;
                    const stringResult3 = intl.string(channelId(sortOrder[5]).t.f8wNDl);
                    const obj4 = { label: intl2.string(tmp(tmp2[5]).t.jOPmcI), value: tmp(tmp2[6]).ThreadSortOrder.LATEST_ACTIVITY };
                    intl2 = tmp(tmp2[5]).intl;
                    const items1 = [obj4, ];
                    const obj7 = { label: intl3.string(channelId(sortOrder[5]).t.UIltXd), value: channelId(sortOrder[6]).ThreadSortOrder.CREATION_DATE };
                    intl3 = tmp(tmp2[5]).intl;
                    items1[1] = obj7;
                    const mapped = items1.map((label) => {
                      const value = label.value;
                      return closure_8(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
                    });
                    cResult[21] = stringResult2;
                    cResult[22] = stringResult3;
                    cResult[23] = mapped;
                    tmp33 = mapped;
                    tmp32 = stringResult3;
                    tmp31 = stringResult2;
                  } else {
                    class Y {
                      constructor() {
                        if (null != stateFromStores) {
                          const current = ref.current;
                          if (current != null) {
                            current.setValue(stateFromStores.getDefaultSortOrder());
                          }
                          const current2 = ref1.current;
                          if (current2 != null) {
                            current2.setValue(stateFromStores.getDefaultLayout());
                          }
                          const current3 = ref2.current;
                          if (current3 != null) {
                            current3.setValue(stateFromStores.getDefaultTagSetting());
                          }
                        }
                      }
                    }
                    tmp32 = cResult[22];
                    tmp33 = cResult[23];
                  }
                  if (cResult[24] === sortOrder) {
                    class Y {
                      constructor() {
                        if (null != stateFromStores) {
                          const current = ref.current;
                          if (current != null) {
                            current.setValue(stateFromStores.getDefaultSortOrder());
                          }
                          const current2 = ref1.current;
                          if (current2 != null) {
                            current2.setValue(stateFromStores.getDefaultLayout());
                          }
                          const current3 = ref2.current;
                          if (current3 != null) {
                            current3.setValue(stateFromStores.getDefaultTagSetting());
                          }
                        }
                      }
                    }
                    if (cResult[27] === stateFromStores) {
                      class Y {
                        constructor() {
                          if (null != stateFromStores) {
                            const current = ref.current;
                            if (current != null) {
                              current.setValue(stateFromStores.getDefaultSortOrder());
                            }
                            const current2 = ref1.current;
                            if (current2 != null) {
                              current2.setValue(stateFromStores.getDefaultLayout());
                            }
                            const current3 = ref2.current;
                            if (current3 != null) {
                              current3.setValue(stateFromStores.getDefaultTagSetting());
                            }
                          }
                        }
                      }
                      if (cResult[30] === tmp24) {
                        class Y {
                          constructor() {
                            if (null != stateFromStores) {
                              const current = ref.current;
                              if (current != null) {
                                current.setValue(stateFromStores.getDefaultSortOrder());
                              }
                              const current2 = ref1.current;
                              if (current2 != null) {
                                current2.setValue(stateFromStores.getDefaultLayout());
                              }
                              const current3 = ref2.current;
                              if (current3 != null) {
                                current3.setValue(stateFromStores.getDefaultTagSetting());
                              }
                            }
                          }
                        }
                        if (cResult[33] === tmp37) {
                          class Y {
                            constructor() {
                              if (null != stateFromStores) {
                                const current = ref.current;
                                if (current != null) {
                                  current.setValue(stateFromStores.getDefaultSortOrder());
                                }
                                const current2 = ref1.current;
                                if (current2 != null) {
                                  current2.setValue(stateFromStores.getDefaultLayout());
                                }
                                const current3 = ref2.current;
                                if (current3 != null) {
                                  current3.setValue(stateFromStores.getDefaultTagSetting());
                                }
                              }
                            }
                          }
                        }
                        const obj8 = { children: first3(Stack, obj10) };
                        const BottomSheetScrollView = tmp(tmp2[18]).BottomSheetScrollView;
                        obj10 = { direction: "vertical", spacing: stateFromStores(sortOrder[20]).space.PX_16, children: items2 };
                        Stack = tmp(tmp2[19]).Stack;
                        items2 = [tmp37, tmp40, tmp42];
                        cResult[33] = tmp37;
                        cResult[34] = tmp40;
                        cResult[35] = tmp42;
                        cResult[36] = closure_8(BottomSheetScrollView, obj8);
                        const tmp48 = closure_8(BottomSheetScrollView, obj8);
                      }
                      let tmp43 = null;
                      if (tmp24) {
                        class Y {
                          constructor() {
                            if (null != stateFromStores) {
                              const current = ref.current;
                              if (current != null) {
                                current.setValue(stateFromStores.getDefaultSortOrder());
                              }
                              const current2 = ref1.current;
                              if (current2 != null) {
                                current2.setValue(stateFromStores.getDefaultLayout());
                              }
                              const current3 = ref2.current;
                              if (current3 != null) {
                                current3.setValue(stateFromStores.getDefaultTagSetting());
                              }
                            }
                          }
                        }
                        const obj11 = {
                          groupRef: ref2,
                          hasIcons: false,
                          defaultValue: tagSetting,
                          onChange: tmp20,
                          title: intl8.string(channelId(sortOrder[5]).t.Paxaug),
                          accessibilityLabel: intl9.string(channelId(sortOrder[5]).t.f8wNDl),
                          children: items3.map((label) => {
                                                  const value = label.value;
                                                  return closure_8(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
                                                })
                        };
                        const TableRadioGroup2 = tmp(tmp2[17]).TableRadioGroup;
                        intl8 = tmp(tmp2[5]).intl;
                        intl9 = tmp(tmp2[5]).intl;
                        const obj12 = { label: intl10.string(channelId(sortOrder[5]).t.rQ0ctQ), value: channelId(sortOrder[8]).ThreadSearchTagSetting.MATCH_SOME };
                        intl10 = tmp(tmp2[5]).intl;
                        items3 = [obj12, ];
                        const obj13 = { label: intl11.string(channelId(sortOrder[5]).t.FCXUu0), value: channelId(sortOrder[8]).ThreadSearchTagSetting.MATCH_ALL };
                        intl11 = tmp(tmp2[5]).intl;
                        items3[1] = obj13;
                        tmp43 = closure_8(TableRadioGroup2, obj11);
                      }
                      cResult[30] = tmp24;
                      cResult[31] = tagSetting;
                      cResult[32] = tmp43;
                    }
                    let tmp41 = null;
                    if (stateFromStores.isForumChannel()) {
                      class Y {
                        constructor() {
                          if (null != stateFromStores) {
                            const current = ref.current;
                            if (current != null) {
                              current.setValue(stateFromStores.getDefaultSortOrder());
                            }
                            const current2 = ref1.current;
                            if (current2 != null) {
                              current2.setValue(stateFromStores.getDefaultLayout());
                            }
                            const current3 = ref2.current;
                            if (current3 != null) {
                              current3.setValue(stateFromStores.getDefaultTagSetting());
                            }
                          }
                        }
                      }
                      if (!stateFromStores.isGameInvitesChannel()) {
                        class Y {
                          constructor() {
                            if (null != stateFromStores) {
                              const current = ref.current;
                              if (current != null) {
                                current.setValue(stateFromStores.getDefaultSortOrder());
                              }
                              const current2 = ref1.current;
                              if (current2 != null) {
                                current2.setValue(stateFromStores.getDefaultLayout());
                              }
                              const current3 = ref2.current;
                              if (current3 != null) {
                                current3.setValue(stateFromStores.getDefaultTagSetting());
                              }
                            }
                          }
                        }
                        const obj14 = {
                          groupRef: ref1,
                          hasIcons: false,
                          defaultValue: layoutType,
                          onChange: tmp19,
                          title: intl4.string(channelId(sortOrder[5]).t.mFMDSq),
                          accessibilityLabel: intl5.string(channelId(sortOrder[5]).t.h850Ss),
                          children: items4.map((label) => {
                                                  const value = label.value;
                                                  return closure_8(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
                                                })
                        };
                        const TableRadioGroup = tmp(tmp2[17]).TableRadioGroup;
                        intl4 = tmp(tmp2[5]).intl;
                        intl5 = tmp(tmp2[5]).intl;
                        const obj15 = { label: intl6.string(channelId(sortOrder[5]).t["NJFr+g"]), value: channelId(sortOrder[7]).ForumLayout.LIST };
                        intl6 = tmp(tmp2[5]).intl;
                        items4 = [obj15, ];
                        const obj16 = { label: intl7.string(channelId(sortOrder[5]).t.wKeggb), value: channelId(sortOrder[7]).ForumLayout.GRID };
                        intl7 = tmp(tmp2[5]).intl;
                        items4[1] = obj16;
                        tmp41 = closure_8(TableRadioGroup, obj14);
                      }
                    }
                    cResult[27] = stateFromStores;
                    cResult[28] = layoutType;
                    cResult[29] = tmp41;
                  }
                  const obj17 = { groupRef: ref, hasIcons: false, defaultValue: sortOrder, onChange: tmp18, title: tmp31, accessibilityLabel: tmp32, children: tmp33 };
                  cResult[24] = sortOrder;
                  cResult[25] = tmp33;
                  cResult[26] = closure_8(channelId(sortOrder[17]).TableRadioGroup, obj17);
                  const tmp39 = closure_8(channelId(sortOrder[17]).TableRadioGroup, obj17);
                }
              }
            }
          }
        }
      }
    }
  }
  class X {
    constructor() {
      if (null != stateFromStores) {
        if (sortOrder !== first1) {
          const obj5 = { guildId: null, channelId: null, sortOrder: first1 };
          ({ guild_id: obj2.guildId, id: obj2.channelId } = stateFromStores);
          const obj = Tracking;
          const result = obj.trackForumSortOrderUpdated(obj5);
        }
        if (layoutType !== first2) {
          const obj6 = { guildId: null, channelId: null, forumLayout: first2 };
          ({ guild_id: obj4.guildId, id: obj4.channelId } = stateFromStores);
          const obj3 = Tracking;
          const result1 = obj3.trackForumLayoutUpdated(obj6);
        }
        const state = closure_4.getState();
        state.setLayoutType(channelId, first2);
        const state1 = closure_4.getState();
        state1.setSortOrder(channelId, first1);
        const state2 = closure_4.getState();
        state2.setTagSetting(channelId, first3);
      }
    }
  }
  cResult[6] = stateFromStores;
  cResult[7] = channelId;
  cResult[8] = layoutType;
  cResult[9] = first2;
  cResult[10] = first1;
  cResult[11] = first3;
  cResult[12] = sortOrder;
  cResult[13] = tmp8;
  cResult[14] = X;
  tmp21 = X;
}) : (function ForumDisplaySettingsActionSheet(channelId) {
  let ActionSheetHeaderPressableText;
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c10;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let closure_4;
  let forumLayout;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj16;
  let obj4;
  let obj5;
  channelId = channelId.channelId;
  let sortOrder;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  let obj = channelId(sortOrder[11]);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp3 = c7(channelId);
  sortOrder = tmp3.sortOrder;
  const layoutType = tmp3.layoutType;
  const tagSetting = tmp3.tagSetting;
  react = c6();
  [c5, c6] = layoutType(react.useState(sortOrder), 2);
  layoutType(react.useState(sortOrder), 2);
  [c7, c8] = layoutType(react.useState(layoutType), 2);
  const tmp5 = layoutType(react.useState(layoutType), 2);
  [c9, c10] = layoutType(react.useState(tagSetting), 2);
  const tmp6 = layoutType(react.useState(tagSetting), 2);
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  let obj3 = channelId(sortOrder[13]);
  const unmountEffect = obj3.useUnmountEffect(() => {
    if (null != stateFromStores) {
      if (sortOrder !== sortOrder) {
        const obj5 = { guildId: null, channelId: null, sortOrder };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = stateFromStores);
        const obj = Tracking;
        const result = obj.trackForumSortOrderUpdated(obj5);
      }
      if (layoutType !== forumLayout) {
        const obj6 = { guildId: null, channelId: null, forumLayout };
        ({ guild_id: obj4.guildId, id: obj4.channelId } = stateFromStores);
        const obj3 = Tracking;
        const result1 = obj3.trackForumLayoutUpdated(obj6);
      }
      const state = closure_4.getState();
      state.setLayoutType(channelId, forumLayout);
      const state1 = closure_4.getState();
      state1.setSortOrder(channelId, sortOrder);
      const state2 = closure_4.getState();
      state2.setTagSetting(channelId, c9);
    }
  });
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp12 = null != stateFromStores.availableTags && stateFromStores.availableTags.length > 0;
    const obj2 = { scrollable: true, header: c8(BottomSheetTitleHeader, obj4), children: c8(BottomSheetScrollView, obj16) };
    const ActionSheet = tmp(tmp2[21]).ActionSheet;
    obj4 = { title: intl.string(tmp(tmp2[5]).t.xyYt8A), leading: c8(ActionSheetHeaderPressableText, obj5) };
    BottomSheetTitleHeader = tmp(tmp2[14]).BottomSheetTitleHeader;
    intl = tmp(tmp2[5]).intl;
    obj5 = { onPress: tmp11, label: intl2.string(tmp(tmp2[5]).t.yBZMsQ) };
    ActionSheetHeaderPressableText = tmp(tmp2[15]).ActionSheetHeaderPressableText;
    intl2 = tmp(tmp2[5]).intl;
    BottomSheetScrollView = tmp(tmp2[18]).BottomSheetScrollView;
    let obj6 = { direction: "vertical", spacing: stateFromStores(tmp2[20]).space.PX_16, children: items2 };
    const Stack = tmp(tmp2[19]).Stack;
    const obj7 = {
      groupRef: ref,
      hasIcons: false,
      defaultValue: sortOrder,
      onChange: function handleSortOrderChange(arg0) {
          _undefined(arg0);
        },
      title: intl3.string(channelId(sortOrder[5]).t.f8wNDl),
      accessibilityLabel: intl4.string(channelId(sortOrder[5]).t.f8wNDl),
      children: items1.map((label) => {
          const value = label.value;
          return _undefined2(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
        })
    };
    const TableRadioGroup = tmp(tmp2[17]).TableRadioGroup;
    intl3 = tmp(tmp2[5]).intl;
    intl4 = tmp(tmp2[5]).intl;
    const obj8 = { label: intl5.string(channelId(sortOrder[5]).t.jOPmcI), value: channelId(sortOrder[6]).ThreadSortOrder.LATEST_ACTIVITY };
    intl5 = tmp(tmp2[5]).intl;
    items1 = [obj8, ];
    const obj9 = { label: intl6.string(channelId(sortOrder[5]).t.UIltXd), value: channelId(sortOrder[6]).ThreadSortOrder.CREATION_DATE };
    intl6 = tmp(tmp2[5]).intl;
    items1[1] = obj9;
    items2 = [c8(TableRadioGroup, obj7), , ];
    let tmp13Result = null;
    const tmp14 = c9;
    if (stateFromStores.isForumChannel()) {
      tmp13Result = null;
      if (!stateFromStores.isGameInvitesChannel()) {
        const obj10 = {
          groupRef: ref1,
          hasIcons: false,
          defaultValue: layoutType,
          onChange: function handleLayoutTypeChange(arg0) {
                  _undefined2(arg0);
                },
          title: intl7.string(channelId(sortOrder[5]).t.mFMDSq),
          accessibilityLabel: intl8.string(channelId(sortOrder[5]).t.h850Ss),
          children: items3.map((label) => {
                  const value = label.value;
                  return _undefined2(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
                })
        };
        const TableRadioGroup2 = tmp(tmp2[17]).TableRadioGroup;
        intl7 = tmp(tmp2[5]).intl;
        intl8 = tmp(tmp2[5]).intl;
        const obj11 = { label: intl9.string(channelId(sortOrder[5]).t["NJFr+g"]), value: channelId(sortOrder[7]).ForumLayout.LIST };
        intl9 = tmp(tmp2[5]).intl;
        items3 = [obj11, ];
        const obj12 = { label: intl10.string(channelId(sortOrder[5]).t.wKeggb), value: channelId(sortOrder[7]).ForumLayout.GRID };
        intl10 = tmp(tmp2[5]).intl;
        items3[1] = obj12;
        tmp13Result = tmp13(TableRadioGroup2, obj10);
      }
    }
    items2[1] = tmp13Result;
    let tmp13Result2 = null;
    if (tmp12) {
      const obj13 = {
        groupRef: ref2,
        hasIcons: false,
        defaultValue: tagSetting,
        onChange: function handleTagSettingChange(arg0) {
              _undefined3(arg0);
            },
        title: intl11.string(channelId(sortOrder[5]).t.Paxaug),
        accessibilityLabel: intl12.string(channelId(sortOrder[5]).t.f8wNDl),
        children: items4.map((label) => {
              const value = label.value;
              return _undefined2(channelId(sortOrder[16]).TableRadioRow, { label: label.label, value }, value);
            })
      };
      const TableRadioGroup3 = tmp(tmp2[17]).TableRadioGroup;
      intl11 = tmp(tmp2[5]).intl;
      intl12 = tmp(tmp2[5]).intl;
      const obj14 = { label: intl13.string(channelId(sortOrder[5]).t.rQ0ctQ), value: channelId(sortOrder[8]).ThreadSearchTagSetting.MATCH_SOME };
      intl13 = tmp(tmp2[5]).intl;
      items4 = [obj14, ];
      const obj15 = { label: intl14.string(channelId(sortOrder[5]).t.FCXUu0), value: channelId(sortOrder[8]).ThreadSearchTagSetting.MATCH_ALL };
      intl14 = tmp(tmp2[5]).intl;
      items4[1] = obj15;
      tmp13Result2 = tmp13(TableRadioGroup3, obj13);
    }
    items2[2] = tmp13Result2;
    obj16 = { children: tmp14(Stack, obj6) };
    return c8(ActionSheet, obj2);
  }
});
let result = size.fileFinishedImporting("modules/forums/native/ForumDisplaySettingsActionSheet.tsx");

export default tmp4;
