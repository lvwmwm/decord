// Module ID: 15991
// Function ID: 15992
// Name: GuildsBarUnreadBars
// Dependencies: [32, 19, 17, 7050, 4655, 5750, 15918, 14627, 21, 4836, 6493, 1613, 14620, 14629, 551, 558, 504, 4566, 15992, 2]

// Module 15991 (GuildsBarUnreadBars)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import debounceDefault from "debounce" /* 551 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import SortedGuildStore2 from "SortedGuildStore" /* 5750 */;
import FastList from "FastList" /* 6493 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import GuildsBarConstants from "GuildsBarConstants" /* 15918 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const SortedGuildStore = SortedGuildStore2;
let _require, dependencyMap;

let GUILD_LIST_WIDTH;
let c10;
let closure_12;
let map1;
let unpackModuleId;
function checkNodeAndIterate(arg0) {
  let direction;
  let item;
  let node;
  let section;
  let selectedGuildId;
  let tmp4;
  let tmp5Result;
  let tmp6;
  ({ node, section, item, direction, selectedGuildId } = arg0);
  if (null != node) {
    if (node.type === GuildsNodeType.GUILD) {
      if (node.id !== selectedGuildId) {
        let tmp2;
        if (GuildReadStateStore.getMentionCount(node.id) > 0) {
          tmp2 = node;
        }
        if (null != tmp2) {
          const obj2 = { node: tmp2, section, item };
          if (section == null) {
            section = 0;
          }
          if (item == null) {
            item = 0;
          }
          return obj2;
        }
      }
    }
    let num4 = 0;
    if (1 !== direction) {
      num4 = node.children.length - 1;
    }
    if (0 <= num4) {
      if (num4 < node.children.length) {
        while (true) {
          tmp4 = num4;
          if (null != section) {
            tmp4 = section;
          }
          let obj = { node: node.children[num4], section: tmp4, item: tmp6, direction, selectedGuildId };
          tmp6 = undefined;
          let tmp5 = checkNodeAndIterate;
          if (null != section) {
            tmp6 = num4;
          }
          tmp5Result = tmp5(obj);
          if (null != tmp5Result) {
            break;
          } else {
            let sum = num4 + direction;
            if (sum >= 0) {
              num4 = sum;
            }
          }
        }
        let tmp10 = tmp5Result;
        if (node.type === GuildsNodeType.FOLDER) {
          tmp10 = tmp5Result;
          if (!node.expanded) {
            tmp10 = { node, section: tmp4 };
            const obj3 = { node, section: tmp4 };
          }
        }
        return tmp10;
      }
    }
  }
}
function findFirstOrLastMentionedItem(scrollPosValue, arg1, selectedGuildId, arg3, arg4) {
  let getSectionItemFromPosition;
  let item2;
  let obj5;
  let obj7;
  let section;
  const guildsTree = SortedGuildStore.getGuildsTree();
  const root = guildsTree.root;
  ({ scrollPosValue, getSectionItemFromPosition } = scrollPosValue);
  const item = getSectionItemFromPosition(scrollPosValue.get() + arg4).item;
  let layoutStart;
  if (item != null) {
    layoutStart = item.layoutStart;
  }
  if (layoutStart == null) {
    const scrollPosValue2 = scrollPosValue.scrollPosValue;
    layoutStart = scrollPosValue2.get();
  }
  const scrollPosValue3 = scrollPosValue.scrollPosValue;
  section = -1;
  item2 = -1;
  let flag = false;
  const items = scrollPosValue.state.items;
  const diff = scrollPosValue3.get() + scrollPosValue.containerSize - arg3 - (closure_12 + map1);
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (nextResult.layoutStart >= layoutStart) {
      let tmp41 = require;
      if (tmp4.type === FastList.FastListItemTypes.ITEM) {
        if (tmp4.layoutStart > diff) {
          iter.return();
          break;
        } else if (tmp4.section < constants.GUILDS) {
          if (arg1) {
            flag = true;
            iter.return();
            break;
          }
          break;
        } else {
          if (0 !== tmp4.layoutSize) {
            if (-1 === section) {
              ({ section, item: item2 } = tmp4);
            }
            let type = tmp4.type;
            if (tmp41(6493).FastListItemTypes.SECTION === type) {
              let node = guildsTree.getNode(tmp4.recyclerKey);
              let element = node;
              if (null != node) {
                if (element.type === GuildsNodeType.FOLDER) {
                  if (!element.expanded) {
                    let children = element.children;
                    for (const item10094 of children) {
                      if (item10094.type === GuildsNodeType.GUILD) {
                        if (GuildReadStateStore.getMentionCount(tmp24.id) > 0) {
                          flag = true;
                          obj2.return();
                          break;
                        }
                      }
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
              }
              continue;
            } else {
              if (tmp41(6493).FastListItemTypes.ITEM === type) {
                let node1 = guildsTree.getNode(tmp4.recyclerKey);
                let tmp12 = node1;
                if (null != node1) {
                  if (tmp12.type === GuildsNodeType.GUILD) {
                    if (GuildReadStateStore.getMentionCount(tmp12.id) > 0) {
                      flag = true;
                      iter.return();
                      break;
                    }
                    break;
                  }
                }
                continue;
              } else {
                let type2 = tmp4.type;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        if (flag) {
          return closure_17;
        } else {
          let tmp32;
          if (!arg1) {
            let obj = { node: root, direction: 1, selectedGuildId };
            tmp32 = checkNodeAndIterate(obj);
          }
          if (null != tmp32) {
            if (null == tmp32) {
              return closure_17;
            }
          }
          if (null == tmp32) {
            return closure_18;
          } else {
            let sum = tmp32.section + constants.GUILDS;
            if (sum >= section) {
              let tmp37;
              if (sum === section) {
                let num = tmp32.item;
                if (num == null) {
                  num = 0;
                }
              }
              let obj3 = { node: root, direction: -1, selectedGuildId };
              let tmp36 = checkNodeAndIterate(obj3);
              if (null != tmp36) {
                let obj4 = { beforeItem: "Array", afterItem: obj5 };
                obj5 = { section: tmp36.section + tmp50.GUILDS, row: tmp36.item, mention: true };
                tmp37 = obj4;
              } else {
                tmp37 = closure_17;
              }
              return tmp37;
            }
            let obj6 = { beforeItem: obj7, afterItem: "a" };
            obj7 = { section: sum, row: tmp32.item, mention: true };
            return obj6;
          }
        }
      }
    }
    continue;
  }
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
({ FastListRenderSections: c10, useGuildWrapperSize: unpackModuleId, GUILD_LIST_WIDTH } = GuildsBarConstants);
({ YOU_BAR_HEIGHT: closure_12, YOU_BAR_MARGIN: map1 } = YouBarConstants);
const jsx = Fragment.jsx;
let obj = { wrapper: { position: "absolute", top: 0, left: 0, bottom: 0, width: GUILD_LIST_WIDTH } };
let closure_15 = createStyles.createStyles(obj);
let closure_17 = { beforeItem: "Array", afterItem: "channel" };
let closure_18 = { beforeItem: { section: 0, row: 0, mention: true }, afterItem: "a" };
const __initData = { code: "function GuildsBarUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}" };
const __initData2 = { code: "function GuildsBarUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}" };
const memoResult = react.memo(function GuildsBarUnreadBars(fastList) {
  let afterItem;
  let beforeItem;
  let c2;
  let c3;
  let tmp5;
  fastList = fastList.fastList;
  let top;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let memo;
  let paddingStart;
  let paddingEnd;
  let tmp = top;
  let tmp2 = dependencyMap;
  top = top(1613)().top;
  const result = closure_11() / 2;
  dependencyMap = result;
  let obj = memo;
  let tmp4 = _slicedToArray(memo.useState(() => {
    const tmp3 = GuildReadStateStore.getPrivateChannelMentionCount() > 0;
    let guildId = SelectedGuildStore.getGuildId();
    const tmp = findFirstOrLastMentionedItem;
    const tmp2 = fastList;
    if (guildId == null) {
      guildId = null;
    }
    return tmp(tmp2, tmp3, guildId, top, c2);
  }), 2);
  [tmp5, c3] = tmp4;
  let items = [fastList, top, result];
  ({ beforeItem, afterItem } = tmp5);
  memo = memo.useMemo(() => debounceDefault(() => {
    const tmp2 = fastList;
    const tmp = findFirstOrLastMentionedItem;
    const tmp3 = paddingStart.getPrivateChannelMentionCount() > 0;
    let guildId = paddingEnd.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    let closure_0 = tmp(tmp2, tmp3, guildId, top, closure_1_2);
    closure_1_3((afterItem) => {
      let tmp4;
      if (afterItem === afterItem) {
        tmp4 = afterItem;
      } else {
        tmp4 = tmp;
        if (closure_2_1(closure_2_2[15])(afterItem.afterItem, afterItem.afterItem)) {
          tmp4 = tmp;
        }
      }
      return tmp4;
    });
  }, 100), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => {
    const items = [GuildReadStateStore, SelectedGuildStore, SortedGuildStore];
    const batchedStoreListener = new get_initialized.BatchedStoreListener(items, memo);
    batchedStoreListener.attach("guild-mention-bars");
    return () => {
      batchedStoreListener.detach();
    };
  }, items1);
  const scrollPosValue = fastList.scrollPosValue;
  const obj2 = fastList(4566);
  class D {
    constructor() {
      return scrollPosValue.get();
    }
  }
  D.__closure = { scrollPosValue };
  D.__workletHash = 16367582542434;
  D.__initData = __initData;
  class O {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(memo)();
      }
    }
  }
  O.__closure = { runOnJS: fastList(4566).runOnJS, debouncedUpdate: memo };
  O.__workletHash = 13727289405147;
  O.__initData = __initData2;
  ({ runOnJS: fastList(4566).runOnJS, debouncedUpdate: memo });
  const animatedReaction = obj2.useAnimatedReaction(D, O);
  let youBarTotalHeight;
  const tmp9 = closure_15();
  _require = tmp9;
  const top2 = top(1613)().top;
  const obj4 = fastList(14620);
  const mobileQuestDockHeight = obj4.useMobileQuestDockHeight();
  let num = 8;
  const useYouBarTotalHeight = fastList(14629).useYouBarTotalHeight;
  fastList(14629);
  if (mobileQuestDockHeight > 0) {
    num = 0;
  }
  youBarTotalHeight = useYouBarTotalHeight(num);
  const items2 = [tmp9.wrapper, top2, mobileQuestDockHeight, youBarTotalHeight];
  const memo1 = obj.useMemo(() => {
    let items;
    const obj = { style: items, paddingStart: top2, paddingEnd: mobileQuestDockHeight + 4 + youBarTotalHeight };
    items = [wrapper.wrapper, ];
    const rect = { top: top2, bottom: mobileQuestDockHeight + youBarTotalHeight };
    items[1] = rect;
    return obj;
  }, items2);
  paddingStart = memo1.paddingStart;
  paddingEnd = memo1.paddingEnd;
  const items3 = [fastList, paddingStart, paddingEnd];
  const callback = obj.useCallback((arg0) => {
    const scrollToLocation = fastList.scrollToLocation;
    const obj = { paddingStart, paddingEnd, orientation: "visible" };
    const merged = Object.assign(arg0);
    scrollToLocation(obj);
  }, items3);
  return <scrollPosValue style={memo1.style} collapsable={false} pointerEvents="box-none" testID="guilds-bar-unread-bars">{null}</scrollPosValue>;
});
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarUnreadBars.tsx");

export default memoResult;
