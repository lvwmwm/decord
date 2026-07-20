// Module ID: 14749
// Function ID: 111198
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 14749 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function checkNodeAndIterate(arg0) {
  let direction;
  let item;
  let node;
  let section;
  let selectedGuildId;
  let tmp3;
  let tmp4Result;
  ({ node, section, item, direction, selectedGuildId } = arg0);
  if (null != node) {
    if (node.type === GuildsNodeType.GUILD) {
      if (node.id !== selectedGuildId) {
        let tmp2;
        if (store.getMentionCount(node.id) > 0) {
          tmp2 = node;
        }
        if (null != tmp2) {
          let obj = { node: tmp2 };
          let num5 = 0;
          if (null != section) {
            num5 = section;
          }
          obj.section = num5;
          let num6 = 0;
          if (null != item) {
            num6 = item;
          }
          obj.item = num6;
          return obj;
        }
      }
    }
    let num4 = 0;
    if (1 !== direction) {
      num4 = node.children.length - 1;
    }
    if (num4 >= 0) {
      if (num4 < node.children.length) {
        while (true) {
          tmp3 = num4;
          if (null != section) {
            tmp3 = section;
          }
          obj = { node: node.children[num4], section: tmp3 };
          let tmp5;
          let tmp4 = checkNodeAndIterate;
          if (null != section) {
            tmp5 = num4;
          }
          obj.item = tmp5;
          obj.direction = direction;
          obj.selectedGuildId = selectedGuildId;
          tmp4Result = tmp4(obj);
          if (null != tmp4Result) {
            break;
          } else {
            num4 = num4 + direction;
          }
        }
        let tmp8 = tmp4Result;
        if (node.type === GuildsNodeType.FOLDER) {
          tmp8 = tmp4Result;
          if (!node.expanded) {
            obj = { node, section: tmp3 };
            tmp8 = obj;
          }
        }
        return tmp8;
      }
    }
  }
}
function findFirstOrLastMentionedItem(scrollPosValue, arg1, selectedGuildId) {
  let getSectionItemFromPosition;
  const guildsTree = guildsTree.getGuildsTree();
  const root = guildsTree.root;
  ({ scrollPosValue, getSectionItemFromPosition } = scrollPosValue);
  const item = getSectionItemFromPosition(scrollPosValue.get() + arg4).item;
  let layoutStart;
  if (null != item) {
    layoutStart = item.layoutStart;
  }
  if (null == layoutStart) {
    const scrollPosValue2 = scrollPosValue.scrollPosValue;
    layoutStart = scrollPosValue2.get();
  }
  const scrollPosValue3 = scrollPosValue.scrollPosValue;
  let obj = { borderWidth: false, backgroundColor: false };
  const diff = scrollPosValue3.get() + scrollPosValue.containerSize - arg3 - (closure_12 + closure_13);
  const tmp3 = _createForOfIteratorHelperLoose(scrollPosValue.state.items);
  const iter = tmp3();
  let flag = false;
  let iter2 = iter;
  let flag2 = false;
  if (!iter.done) {
    while (true) {
      let value = iter2.value;
      let flag3 = flag;
      let tmp9 = tmp4;
      let tmp10 = tmp5;
      let tmp11 = tmp6;
      let tmp12 = tmp7;
      let tmp13 = tmp8;
      if (value.layoutStart < layoutStart) {
        let iter6 = tmp3();
        flag = flag3;
        let tmp4 = tmp9;
        let tmp5 = tmp10;
        let tmp6 = tmp11;
        let tmp7 = tmp12;
        let tmp8 = tmp13;
        iter2 = iter6;
        flag2 = flag3;
        if (iter6.done) {
          break;
        }
      } else {
        let tmp32 = arg1;
        let tmp33 = dependencyMap;
        if (value.type === arg1(dependencyMap[10]).FastListItemTypes.ITEM) {
          flag2 = flag;
          if (value.layoutStart > diff) {
            break;
          } else {
            let tmp34 = constants;
            if (value.section < constants.GUILDS) {
              flag3 = flag;
              tmp9 = tmp4;
              tmp10 = tmp5;
              tmp11 = tmp6;
              tmp12 = tmp7;
              tmp13 = tmp8;
              flag2 = true;
              if (arg1) {
                break;
              }
            } else {
              flag3 = flag;
              tmp9 = tmp4;
              tmp10 = tmp5;
              tmp11 = tmp6;
              tmp12 = tmp7;
              tmp13 = tmp8;
              if (0 !== value.layoutSize) {
                if (-1 === obj.section) {
                  ({ section: obj2.section, item: obj2.item } = value);
                }
                let type = value.type;
                let tmp16 = arg1;
                let tmp17 = dependencyMap;
                if (arg1(dependencyMap[10]).FastListItemTypes.SECTION === type) {
                  let element = guildsTree.getNode(value.recyclerKey);
                  flag3 = flag;
                  tmp9 = element;
                  tmp10 = tmp5;
                  tmp11 = tmp6;
                  tmp12 = tmp7;
                  tmp13 = tmp8;
                  if (null != element) {
                    let tmp39 = GuildsNodeType;
                    flag3 = flag;
                    tmp9 = element;
                    tmp10 = tmp5;
                    tmp11 = tmp6;
                    tmp12 = tmp7;
                    tmp13 = tmp8;
                    if (element.type === GuildsNodeType.FOLDER) {
                      flag3 = flag;
                      tmp9 = element;
                      tmp10 = tmp5;
                      tmp11 = tmp6;
                      tmp12 = tmp7;
                      tmp13 = tmp8;
                      if (!element.expanded) {
                        let tmp19 = _createForOfIteratorHelperLoose;
                        let tmp20 = _createForOfIteratorHelperLoose(element.children);
                        let iter3 = tmp20();
                        let iter4 = iter3;
                        flag3 = flag;
                        tmp9 = element;
                        tmp10 = iter3;
                        tmp11 = tmp20;
                        tmp12 = tmp7;
                        tmp13 = tmp8;
                        if (!iter3.done) {
                          while (true) {
                            value = iter4.value;
                            let tmp21 = GuildsNodeType;
                            if (value.type !== GuildsNodeType.GUILD) {
                              let iter5 = tmp20();
                              iter4 = iter5;
                              flag3 = flag;
                              tmp9 = element;
                              tmp10 = iter5;
                              tmp11 = tmp20;
                              tmp12 = value;
                              tmp13 = tmp8;
                              if (iter5.done) {
                                break;
                              } else {
                                // continue
                              }
                            } else {
                              let tmp22 = store;
                              flag3 = true;
                              tmp9 = element;
                              tmp10 = iter4;
                              tmp11 = tmp20;
                              tmp12 = value;
                              tmp13 = tmp8;
                              if (store.getMentionCount(value.id) > 0) {
                                break;
                              }
                            }
                            break;
                          }
                        }
                      }
                    }
                  }
                } else {
                  let tmp35 = arg1;
                  let tmp36 = dependencyMap;
                  if (arg1(dependencyMap[10]).FastListItemTypes.ITEM === type) {
                    let node = guildsTree.getNode(value.recyclerKey);
                    flag3 = flag;
                    tmp9 = tmp4;
                    tmp10 = tmp5;
                    tmp11 = tmp6;
                    tmp12 = tmp7;
                    tmp13 = node;
                    if (null != node) {
                      let tmp37 = GuildsNodeType;
                      flag3 = flag;
                      tmp9 = tmp4;
                      tmp10 = tmp5;
                      tmp11 = tmp6;
                      tmp12 = tmp7;
                      tmp13 = node;
                      if (node.type === GuildsNodeType.GUILD) {
                        let tmp38 = store;
                        flag3 = flag;
                        tmp9 = tmp4;
                        tmp10 = tmp5;
                        tmp11 = tmp6;
                        tmp12 = tmp7;
                        tmp13 = node;
                        flag2 = true;
                        if (store.getMentionCount(node.id) > 0) {
                          break;
                        }
                      }
                      break;
                    }
                  } else {
                    let type2 = value.type;
                    flag3 = flag;
                    tmp9 = tmp4;
                    tmp10 = tmp5;
                    tmp11 = tmp6;
                    tmp12 = tmp7;
                    tmp13 = tmp8;
                  }
                }
              }
            }
          }
        } else {
          let tmp14 = arg1;
          let tmp15 = dependencyMap;
          flag3 = flag;
          tmp9 = tmp4;
          tmp10 = tmp5;
          tmp11 = tmp6;
          tmp12 = tmp7;
          tmp13 = tmp8;
        }
      }
      break;
    }
  }
  if (flag2) {
    return closure_16;
  } else {
    let tmp23;
    if (!arg1) {
      obj = { node: root, direction: 1, selectedGuildId };
      tmp23 = checkNodeAndIterate(obj);
    }
    if (null != tmp23) {
      if (null == tmp23) {
        return closure_16;
      }
    }
    if (null == tmp23) {
      return closure_17;
    } else {
      const sum = tmp23.section + constants.GUILDS;
      if (sum >= obj.section) {
        if (sum === obj.section) {
          const item2 = tmp23.item;
          let num2 = 0;
          if (null != item2) {
            num2 = item2;
          }
        }
        const obj1 = { node: root, direction: -1, selectedGuildId };
        const tmp27 = checkNodeAndIterate(obj1);
        if (null != tmp27) {
          const obj2 = { beforeItem: undefined };
          const obj3 = { section: tmp27.section + constants.GUILDS, row: tmp27.item, mention: true };
          obj2.afterItem = obj3;
          let tmp28 = obj2;
        } else {
          tmp28 = closure_16;
        }
        return tmp28;
      }
      const obj4 = {};
      const obj5 = { section: sum, row: tmp23.item, mention: true };
      obj4.beforeItem = obj5;
      obj4.afterItem = undefined;
      return obj4;
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const GuildsNodeType = arg1(dependencyMap[5]).GuildsNodeType;
const tmp2 = arg1(dependencyMap[6]);
({ FastListRenderSections: closure_10, useGuildWrapperSize: closure_11 } = tmp2);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_MARGIN: closure_13 } = arg1(dependencyMap[7]));
const jsx = arg1(dependencyMap[8]).jsx;
const tmp3 = arg1(dependencyMap[7]);
let closure_15 = arg1(dependencyMap[9]).createStyles({ wrapper: { width: tmp2.GUILD_LIST_WIDTH } });
let closure_16 = { beforeItem: undefined, afterItem: undefined };
let closure_17 = { beforeItem: {}, afterItem: undefined };
let closure_18 = { code: "function GuildsBarUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}" };
let closure_19 = { code: "function GuildsBarUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}" };
const obj2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo(function GuildsBarUnreadBars(fastList) {
  let afterItem;
  let beforeItem;
  fastList = fastList.fastList;
  const arg1 = fastList;
  const top = importDefault(dependencyMap[11])().top;
  const importDefault = top;
  const result = callback2() / 2;
  const dependencyMap = result;
  const tmp2 = callback(importAllResult.useState(() => {
    const guildId = paddingEnd.getGuildId();
    let tmp5 = null;
    if (null != guildId) {
      tmp5 = guildId;
    }
    return closure_23(fastList, paddingStart.getPrivateChannelMentionCount() > 0, tmp5, top, result);
  }), 2);
  let callback = tmp2[1];
  const items = [fastList, top, result];
  ({ beforeItem, afterItem } = tmp2[0]);
  const memo = importAllResult.useMemo(() => top(result[14])(() => {
    const guildId = guildId.getGuildId();
    let tmp5 = null;
    if (null != guildId) {
      tmp5 = guildId;
    }
    closure_0 = closure_23(closure_0, privateChannelMentionCount.getPrivateChannelMentionCount() > 0, tmp5, closure_1, closure_2);
    callback((afterItem) => {
      let tmp = afterItem;
      if (afterItem !== closure_0) {
        if (!callback(closure_2[15])(afterItem.afterItem, closure_0.afterItem)) {
          tmp = closure_0;
        } else {
          tmp = afterItem;
        }
      }
      return tmp;
    });
  }, 100), items);
  const items1 = [memo];
  const effect = importAllResult.useEffect(() => {
    const items = [paddingStart, paddingEnd, closure_8];
    const batchedStoreListener = new fastList(result[16]).BatchedStoreListener(items, memo);
    const fastList = batchedStoreListener;
    batchedStoreListener.attach("guild-mention-bars");
    return () => {
      batchedStoreListener.detach();
    };
  }, items1);
  const scrollPosValue = fastList.scrollPosValue;
  const View = scrollPosValue;
  let obj = arg1(dependencyMap[17]);
  class O {
    constructor() {
      return scrollPosValue.get();
    }
  }
  O.__closure = { scrollPosValue };
  O.__workletHash = 16367582542434;
  O.__initData = closure_18;
  class G {
    constructor(arg0, arg1) {
      if (fastList !== arg1) {
        tmp = fastList;
        tmp2 = closure_2;
        num = 17;
        obj = fastList(closure_2[17]);
        tmp3 = closure_4;
        tmp4 = obj.runOnJS(closure_4)();
      }
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[17]).runOnJS, debouncedUpdate: memo };
  G.__closure = obj;
  G.__workletHash = 13727289405147;
  G.__initData = closure_19;
  const animatedReaction = obj.useAnimatedReaction(O, G);
  const tmp6 = function useUnreadBarWrapperStyles() {
    const tmp = callback();
    const fastList = tmp;
    const top = top(result[11])().top;
    const mobileQuestDockHeight = fastList(result[12]).useMobileQuestDockHeight();
    const result = mobileQuestDockHeight;
    const obj = fastList(result[12]);
    let num = 8;
    if (mobileQuestDockHeight > 0) {
      num = 0;
    }
    const youBarTotalHeight = fastList(result[13]).useYouBarTotalHeight(num);
    let closure_3 = youBarTotalHeight;
    const items = [tmp.wrapper, top, mobileQuestDockHeight, youBarTotalHeight];
    return memo.useMemo(() => {
      let obj = { style: items, paddingStart: top, paddingEnd: mobileQuestDockHeight + 4 + youBarTotalHeight };
      const items = [tmp.wrapper, ];
      obj = { top, bottom: mobileQuestDockHeight + youBarTotalHeight };
      items[1] = obj;
      return obj;
    }, items);
  }();
  const paddingStart = tmp6.paddingStart;
  let closure_6 = paddingStart;
  const paddingEnd = tmp6.paddingEnd;
  let closure_7 = paddingEnd;
  const items2 = [fastList, paddingStart, paddingEnd];
  obj = { "Bool(false)": "flex-end", "Bool(false)": null, "Bool(false)": "absolute", "Bool(false)": 0, style: tmp6.style };
  callback = importAllResult.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["paddingStart"] = paddingStart;
    obj["paddingEnd"] = paddingEnd;
    obj["orientation"] = "visible";
    fastList.scrollToLocation(obj);
  }, items2);
  obj.children = jsx(importDefault(dependencyMap[18]), { beforeItem, afterItem, scrollToLocation: callback, compact: true });
  return <View {...obj} />;
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarUnreadBars.tsx");

export default memoResult;
