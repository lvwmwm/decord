// Module ID: 16439
// Function ID: 16440
// Name: MessagesFastestList
// Dependencies: [19, 21, 4758, 580, 558, 568, 16384, 16369, 16433, 16381, 16379, 16434, 16394, 16432, 16435, 7311, 7309, 7302, 2]

// Module 16439 (MessagesFastestList)
import nativeDefault from "native" /* 580 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 7309 */;
import FastestListItemTypeDefault from "FastestListItemType" /* 7311 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 16379 */;
import useMessagesData from "useMessagesData" /* 16384 */;
import MessagesItemHappeningNowDefault from "MessagesItemHappeningNow" /* 16394 */;
import MessagesItemEmptyStateDefault from "MessagesItemEmptyState" /* 16432 */;
import MessagesItemSeparatorDefault from "MessagesItemSeparator" /* 16433 */;
import MessagesItemSuggestedFriendsHeaderDefault from "MessagesItemSuggestedFriendsHeader" /* 16434 */;
import MessagesItemAddFriendsWidget from "MessagesItemAddFriendsWidget" /* 16435 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_5 = createStyles.createStyles(() => {
  const obj = { placeholder: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFastestList.tsx");

export default noop.memo(noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((listLeft, ref) => {
  const cResult = listItemHeight(listLeft[5]).c(58);
  ({ accessibilityLabel, data, handleScrollAnimated, insetEnd, listItemHeight } = listLeft);
  ({ listItemSizes, listItemSuggestedFriendHeight } = listLeft);
  listLeft = listLeft.listLeft;
  const listRefHappeningNow = listLeft.listRefHappeningNow;
  const listTop = listLeft.listTop;
  ({ scrollIndicatorInsetBottom, scrollPosition } = listLeft);
  scrollPosition();
  const channels = data.channels;
  const channelFavorites = data.channelFavorites;
  const friendSuggestions = data.friendSuggestions;
  const renderHeader = data.renderHeader;
  const renderFooter = data.renderFooter;
  ({ sections, setAddedFriendSuggestions } = data);
  ref = listRefHappeningNow.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      return {
        scrollToTop(arg0) {
          const current = ref.current;
          if (current != null) {
            const obj = { section: 0, item: 0, animated: tmp };
            current.scrollToLocation(obj);
          }
        }
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const imperativeHandle = listRefHappeningNow.useImperativeHandle(ref, tmp4, tmp5);
  if (cResult[2] === channelFavorites) {
    if (cResult[3] === channels) {
      if (cResult[4] === friendSuggestions) {
        if (cResult[5] === listItemHeight) {
          if (cResult[6] === listItemSuggestedFriendHeight) {
            if (cResult[9] === listLeft) {
              if (cResult[10] === listTop) {
                if (cResult[11] === scrollPosition) {
                  let tmp8 = cResult[12];
                }
                const _Symbol = Symbol;
                class L {
                  constructor(arg0, arg1, arg2) {
                    tmp = closure_2;
                    tmp2 = null;
                    if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                      tmp3 = arg2;
                      tmp4 = jsx;
                      tmp5 = closure_1;
                      obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                      tmp6 = scrollPosition;
                      obj.scrollPosition = scrollPosition;
                      obj.stickyAt = arg2;
                      tmp7 = listTop;
                      obj.stickyTop = listTop;
                      tmp8 = listLeft;
                      obj.stickyLeft = listLeft;
                      tmp2 = jsx(closure_1(tmp[11]), obj);
                    }
                    return tmp2;
                  }
                }
                if (tmp9 === Symbol.for("react.memo_cache_sentinel")) {
                  class N {
                    constructor(arg0) {
                      tmp = listItemHeight;
                      tmp2 = listLeft;
                      num = 0;
                      if (listLeft === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                        num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                      }
                      return num;
                    }
                  }
                  class L {
                    constructor(arg0, arg1, arg2) {
                      tmp = closure_2;
                      tmp2 = null;
                      if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                        tmp3 = arg2;
                        tmp4 = jsx;
                        tmp5 = closure_1;
                        obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                        tmp6 = scrollPosition;
                        obj.scrollPosition = scrollPosition;
                        obj.stickyAt = arg2;
                        tmp7 = listTop;
                        obj.stickyTop = listTop;
                        tmp8 = listLeft;
                        obj.stickyLeft = listLeft;
                        tmp2 = jsx(closure_1(tmp[11]), obj);
                      }
                      return tmp2;
                    }
                  }
                } else {
                  class N {
                    constructor(arg0) {
                      tmp = listItemHeight;
                      tmp2 = listLeft;
                      num = 0;
                      if (listLeft === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                        num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                      }
                      return num;
                    }
                  }
                }
                if (cResult[14] !== tmp8) {
                  class N {
                    constructor(arg0) {
                      tmp = listItemHeight;
                      tmp2 = listLeft;
                      num = 0;
                      if (listLeft === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                        num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                      }
                      return num;
                    }
                  }
                  tmp12[0] = tmp8;
                  class L {
                    constructor(arg0, arg1, arg2) {
                      tmp = closure_2;
                      tmp2 = null;
                      if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                        tmp3 = arg2;
                        tmp4 = jsx;
                        tmp5 = closure_1;
                        obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                        tmp6 = scrollPosition;
                        obj.scrollPosition = scrollPosition;
                        obj.stickyAt = arg2;
                        tmp7 = listTop;
                        obj.stickyTop = listTop;
                        tmp8 = listLeft;
                        obj.stickyLeft = listLeft;
                        tmp2 = jsx(closure_1(tmp[11]), obj);
                      }
                      return tmp2;
                    }
                  }
                  cResult[14] = tmp8;
                  class X {
                    constructor() {
                      tmp3 = closure_2;
                      tmp = renderHeader;
                      tmp2 = closure_0;
                      if (closure_0(closure_2[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                        tmp7 = jsx;
                        tmp8 = closure_1;
                        obj = { listRef: null };
                        tmp9 = listRefHappeningNow;
                        obj.listRef = listRefHappeningNow;
                        return jsx(closure_1(tmp3[12]), obj);
                      } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
                        tmp5 = jsx;
                        tmp6 = closure_1;
                        return jsx(closure_1(tmp3[13]), {});
                      } else {
                        tmp4 = null;
                        return null;
                      }
                    }
                  }
                } else {
                  class N {
                    constructor(arg0) {
                      tmp = listItemHeight;
                      tmp2 = listLeft;
                      num = 0;
                      if (listLeft === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                        num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                      }
                      return num;
                    }
                  }
                }
                if (cResult[16] === listRefHappeningNow) {
                  class N {
                    constructor(arg0) {
                      tmp = listItemHeight;
                      tmp2 = listLeft;
                      num = 0;
                      if (listLeft === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                        num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                      }
                      return num;
                    }
                  }
                  if (cResult[19] !== renderHeader) {
                    class B {
                      constructor() {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        tmp = renderHeader;
                        if (closure_0(closure_2[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                          tmp2Result = tmp2(tmp3[12]);
                          return tmp2Result.getMessagesItemHappeningNowHeight();
                        } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
                          return tmp2(tmp3[13]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                        } else {
                          num = 0;
                          return 0;
                        }
                      }
                    }
                    class L {
                      constructor(arg0, arg1, arg2) {
                        tmp = closure_2;
                        tmp2 = null;
                        if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                          tmp3 = arg2;
                          tmp4 = jsx;
                          tmp5 = closure_1;
                          obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                          tmp6 = scrollPosition;
                          obj.scrollPosition = scrollPosition;
                          obj.stickyAt = arg2;
                          tmp7 = listTop;
                          obj.stickyTop = listTop;
                          tmp8 = listLeft;
                          obj.stickyLeft = listLeft;
                          tmp2 = jsx(closure_1(tmp[11]), obj);
                        }
                        return tmp2;
                      }
                    }
                    cResult[20] = B;
                  } else {
                    class B {
                      constructor() {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        tmp = renderHeader;
                        if (closure_0(closure_2[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                          tmp2Result = tmp2(tmp3[12]);
                          return tmp2Result.getMessagesItemHappeningNowHeight();
                        } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
                          return tmp2(tmp3[13]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                        } else {
                          num = 0;
                          return 0;
                        }
                      }
                    }
                  }
                  class L {
                    constructor(arg0, arg1, arg2) {
                      tmp = closure_2;
                      tmp2 = null;
                      if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                        tmp3 = arg2;
                        tmp4 = jsx;
                        tmp5 = closure_1;
                        obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                        tmp6 = scrollPosition;
                        obj.scrollPosition = scrollPosition;
                        obj.stickyAt = arg2;
                        tmp7 = listTop;
                        obj.stickyTop = listTop;
                        tmp8 = listLeft;
                        obj.stickyLeft = listLeft;
                        tmp2 = jsx(closure_1(tmp[11]), obj);
                      }
                      return tmp2;
                    }
                  }
                  let obj3 = { getComponent: tmp13, getSize: tmp14 };
                  class X {
                    constructor() {
                      tmp3 = closure_2;
                      tmp = renderHeader;
                      tmp2 = closure_0;
                      if (closure_0(closure_2[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                        tmp7 = jsx;
                        tmp8 = closure_1;
                        obj = { listRef: null };
                        tmp9 = listRefHappeningNow;
                        obj.listRef = listRefHappeningNow;
                        return jsx(closure_1(tmp3[12]), obj);
                      } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
                        tmp5 = jsx;
                        tmp6 = closure_1;
                        return jsx(closure_1(tmp3[13]), {});
                      } else {
                        tmp4 = null;
                        return null;
                      }
                    }
                  }
                  cResult[21] = tmp13;
                  cResult[22] = tmp14;
                  cResult[23] = obj3;
                }
                class X {
                  constructor() {
                    tmp3 = closure_2;
                    tmp = renderHeader;
                    tmp2 = closure_0;
                    if (closure_0(closure_2[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                      tmp7 = jsx;
                      tmp8 = closure_1;
                      obj = { listRef: null };
                      tmp9 = listRefHappeningNow;
                      obj.listRef = listRefHappeningNow;
                      return jsx(closure_1(tmp3[12]), obj);
                    } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
                      tmp5 = jsx;
                      tmp6 = closure_1;
                      return jsx(closure_1(tmp3[13]), {});
                    } else {
                      tmp4 = null;
                      return null;
                    }
                  }
                }
                cResult[16] = listRefHappeningNow;
                cResult[17] = renderHeader;
                cResult[18] = X;
              }
            }
            class L {
              constructor(arg0, arg1, arg2) {
                tmp = closure_2;
                tmp2 = null;
                if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                  tmp3 = arg2;
                  tmp4 = jsx;
                  tmp5 = closure_1;
                  obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                  tmp6 = scrollPosition;
                  obj.scrollPosition = scrollPosition;
                  obj.stickyAt = arg2;
                  tmp7 = listTop;
                  obj.stickyTop = listTop;
                  tmp8 = listLeft;
                  obj.stickyLeft = listLeft;
                  tmp2 = jsx(closure_1(tmp[11]), obj);
                }
                return tmp2;
              }
            }
            cResult[9] = listLeft;
            cResult[11] = scrollPosition;
            cResult[12] = L;
            tmp8 = L;
          }
        }
      }
    }
  }
  const fn2 = function u(arg0, row) {
    if (useMessagesData.MessagesDataSections.FavoriteChannels === arg0) {
      const obj2 = { channelId: channelFavorites[row].channelId, placeholderHeight: listItemHeight, row };
      return jsx(tmp(16369).MessagesItemChannelFast, { channelId: channelFavorites[row].channelId, placeholderHeight: listItemHeight, row });
    } else if (tmp(16384).MessagesDataSections.Channels === arg0) {
      const obj3 = { channelId: channels[row].channelId, placeholderHeight: listItemHeight, row };
      return jsx(tmp(16369).MessagesItemChannelFast, { channelId: channels[row].channelId, placeholderHeight: listItemHeight, row });
    } else if (tmp(16384).MessagesDataSections.Separator === arg0) {
      return jsx(MessagesItemSeparatorDefault, {});
    } else if (tmp(16384).MessagesDataSections.SuggestedFriends === arg0) {
      const obj4 = { suggestedFriend: friendSuggestions[row], onAddFriendSuggestions: setAddedFriendSuggestions };
      const obj5 = { height: listItemSuggestedFriendHeight };
      const merged = Object.assign(obj4);
      return jsx(tmp(16381).MessagesItemSuggestedFriendFast, { height: listItemSuggestedFriendHeight });
    } else if (tmp(16384).MessagesDataSections.Placeholders === arg0) {
      const obj = { row, height: listItemHeight };
      return jsx(MessagesItemPlaceholderDefault, { row, height: listItemHeight });
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
      throw error;
    }
  };
  cResult[2] = channelFavorites;
  cResult[3] = channels;
  cResult[4] = friendSuggestions;
  cResult[5] = listItemHeight;
  cResult[6] = listItemSuggestedFriendHeight;
  cResult[7] = setAddedFriendSuggestions;
  cResult[8] = fn2;
}) : ((listItemSizes, ref) => {
  ({ data, listItemHeight } = listItemSizes);
  listItemSizes = listItemSizes.listItemSizes;
  const listItemSuggestedFriendHeight = listItemSizes.listItemSuggestedFriendHeight;
  const listLeft = listItemSizes.listLeft;
  const listRefHappeningNow = listItemSizes.listRefHappeningNow;
  const listTop = listItemSizes.listTop;
  const scrollPosition = listItemSizes.scrollPosition;
  ({ accessibilityLabel, handleScrollAnimated, insetEnd, scrollIndicatorInsetBottom } = listItemSizes);
  let tmp = listTop();
  closure_7 = tmp;
  const channels = data.channels;
  const channelFavorites = data.channelFavorites;
  const friendSuggestions = data.friendSuggestions;
  const renderHeader = data.renderHeader;
  const renderFooter = data.renderFooter;
  const setAddedFriendSuggestions = data.setAddedFriendSuggestions;
  ref = listLeft.useRef(null);
  const imperativeHandle = listLeft.useImperativeHandle(ref, () => ({
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      const current = ref.current;
      if (current != null) {
        const obj = { section: 0, item: 0, animated: flag };
        current.scrollToLocation(obj);
      }
    }
  }), []);
  const items = [channelFavorites, listItemHeight, channels, friendSuggestions, setAddedFriendSuggestions, listItemSuggestedFriendHeight];
  const items1 = [listTop, listLeft, scrollPosition];
  const callback = listLeft.useCallback((arg0, row) => {
    if (useMessagesData.MessagesDataSections.FavoriteChannels === arg0) {
      const obj2 = { channelId: channelFavorites[row].channelId, placeholderHeight: listItemHeight, row };
      return jsx(tmp(16369).MessagesItemChannelFast, { channelId: channelFavorites[row].channelId, placeholderHeight: listItemHeight, row });
    } else if (tmp(16384).MessagesDataSections.Channels === arg0) {
      const obj3 = { channelId: channels[row].channelId, placeholderHeight: listItemHeight, row };
      return jsx(tmp(16369).MessagesItemChannelFast, { channelId: channels[row].channelId, placeholderHeight: listItemHeight, row });
    } else if (tmp(16384).MessagesDataSections.Separator === arg0) {
      return jsx(MessagesItemSeparatorDefault, {});
    } else if (tmp(16384).MessagesDataSections.SuggestedFriends === arg0) {
      const obj4 = { suggestedFriend: friendSuggestions[row], onAddFriendSuggestions: setAddedFriendSuggestions };
      const obj5 = { height: listItemSuggestedFriendHeight };
      const merged = Object.assign(obj4);
      return jsx(tmp(16381).MessagesItemSuggestedFriendFast, { height: listItemSuggestedFriendHeight });
    } else if (tmp(16384).MessagesDataSections.Placeholders === arg0) {
      const obj = { row, height: listItemHeight };
      return jsx(MessagesItemPlaceholderDefault, { row, height: listItemHeight });
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
      throw error;
    }
  }, items);
  const memo = listLeft.useMemo(() => ({
    getComponent(arg0, arg1, stickyAt) {
      let tmp2 = null;
      if (arg0 === listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataSections.SuggestedFriends) {
        const obj = { scrollPosition, stickyAt, stickyTop, stickyLeft };
        tmp2 = listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[11]), obj);
      }
      return tmp2;
    },
    getSize(arg0) {
      let num = 0;
      if (arg0 === listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataSections.SuggestedFriends) {
        num = listItemHeight(listItemSuggestedFriendHeight[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
      }
      return num;
    }
  }), items1);
  const items2 = [renderHeader, listRefHappeningNow];
  const memo1 = listLeft.useMemo(() => ({
    getComponent() {
      if (listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataHeader.HappeningNow === renderHeader) {
        const obj = { listRef };
        return listRefHappeningNow(listItemSizes(tmp3[12]), obj);
      } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
        return listRefHappeningNow(listItemSizes(tmp3[13]), {});
      } else {
        return null;
      }
      tmp = renderHeader;
      tmp2 = listItemHeight;
    },
    getSize() {
      if (listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataHeader.HappeningNow === renderHeader) {
        return tmp2(tmp3[12]).getMessagesItemHappeningNowHeight();
      } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
        return tmp2(tmp3[13]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      } else {
        return 0;
      }
      tmp = renderHeader;
    }
  }), items2);
  const items3 = [renderFooter];
  const memo2 = listLeft.useMemo(() => ({
    getComponent() {
      let tmp = null;
      if (renderFooter) {
        tmp = listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[14]), {});
      }
      return tmp;
    },
    getSize() {
      let num = 0;
      if (renderFooter) {
        num = listItemHeight(listItemSuggestedFriendHeight[14]).MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
      }
      return num;
    }
  }), items3);
  const items4 = [listItemHeight, listItemSuggestedFriendHeight];
  const items5 = [channels, channelFavorites];
  const callback1 = listLeft.useCallback((arg0) => {
    if (useMessagesData.MessagesDataSections.FavoriteChannels !== arg0) {
      if (tmp(16384).MessagesDataSections.Channels !== arg0) {
        if (tmp(16384).MessagesDataSections.Placeholders !== arg0) {
          if (tmp(16384).MessagesDataSections.SuggestedFriends === arg0) {
            return listItemSuggestedFriendHeight;
          } else if (tmp(16384).MessagesDataSections.Separator === arg0) {
            return tmp(16433).MESSAGES_ITEM_SEPERATOR_HEIGHT;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
            throw error;
          }
        }
      }
    }
    return listItemHeight;
  }, items4);
  const items6 = [tmp, listItemSizes];
  const callback2 = listLeft.useCallback((arg0, arg1, arg2) => {
    if (FastestListItemTypeDefault.SECTION_HEADER !== arg0) {
      if (tmp(7311).SECTION_FOOTER !== arg0) {
        if (tmp(7311).ITEM === arg0) {
          if (useMessagesData.MessagesDataSections.FavoriteChannels === arg1) {
            return channelFavorites[arg2].channelId;
          } else if (tmp5(16384).MessagesDataSections.Channels === arg1) {
            return channels[arg2].channelId;
          }
          tmp5 = require;
        }
      }
    }
  }, items5);
  const memo3 = listLeft.useMemo(() => {
    const obj = { listHeader: { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_7.placeholder.backgroundColor, shape: "rect", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 }, sectionItem: null };
    const obj2 = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_7.placeholder.backgroundColor, shape: "rect", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
    obj.sectionItem = { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM, colorHex: closure_7.placeholder.backgroundColor, labelPadding: nativeDefault.space.PX_4, labelSize: listItemSizes.label, labelSecondarySize: listItemSizes.labelSecondary, padding: nativeDefault.space.PX_16, shape: "circle", shapeSize: listItemSizes.avatar };
    return obj;
  }, items6);
  return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[17]), { insetEnd, accessibilityLabel, estimatedListSize: "windowSize", keyExtractor: callback2, itemSize: callback1, listId: "dm-messages-list", listFooterSize: memo2.getSize, listFooterAlwaysMounted: true, listHeaderSize: memo1.getSize, listHeaderAlwaysMounted: true, placeholderConfig: memo3, ref, renderItem: callback, renderListFooter: memo2.getComponent, renderListHeader: memo1.getComponent, renderSectionHeader: memo.getComponent, scrollIndicatorInsetEnd: scrollIndicatorInsetBottom, scrollReporting: "animatedCallbacks", scrollHandlerAnimated: handleScrollAnimated, sections: data.sections, sectionHeaderSize: memo.getSize });
})));
