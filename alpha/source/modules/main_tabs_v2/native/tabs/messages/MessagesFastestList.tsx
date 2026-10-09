// Module ID: 16444
// Function ID: 16445
// Name: MessagesFastestList
// Dependencies: [19, 21, 5091, 587, 558, 576, 16390, 16375, 16438, 16387, 16385, 16439, 16400, 16437, 16440, 6751, 6749, 6742, 2]

// Module 16444 (MessagesFastestList)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 6749 */;
import FastestListItemTypeDefault from "FastestListItemType" /* 6751 */;
import MessagesItemChannel from "MessagesItemChannel" /* 16375 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 16385 */;
import useMessagesData from "useMessagesData" /* 16390 */;
import MessagesItemHappeningNow from "MessagesItemHappeningNow" /* 16400 */;
import MessagesItemEmptyState from "MessagesItemEmptyState" /* 16437 */;
import MessagesItemSeparator from "MessagesItemSeparator" /* 16438 */;
import MessagesItemSuggestedFriendsHeaderDefault from "MessagesItemSuggestedFriendsHeader" /* 16439 */;
import MessagesItemAddFriendsWidget from "MessagesItemAddFriendsWidget" /* 16440 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MessagesItemHappeningNowDefault = MessagesItemHappeningNow;
const MessagesItemEmptyStateDefault = MessagesItemEmptyState;
const MessagesItemSeparatorDefault = MessagesItemSeparator;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles(() => {
  const obj = { placeholder: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
  ({ backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  return obj;
});
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesFastestList(listLeft) {
  let accessibilityLabel;
  let data;
  let handleScrollAnimated;
  let insetEnd;
  let listItemHeight;
  let listItemSizes;
  let listItemSuggestedFriendHeight;
  let ref1;
  let scrollIndicatorInsetBottom;
  let scrollPosition;
  let sections;
  let setAddedFriendSuggestions;
  let tmp4;
  let tmp5;
  let obj = listItemHeight(listLeft[5]);
  const cResult = obj.c(58);
  ({ accessibilityLabel, data, handleScrollAnimated, insetEnd, listItemHeight } = listLeft);
  ({ listItemSizes, listItemSuggestedFriendHeight } = listLeft);
  listLeft = listLeft.listLeft;
  const listRefHappeningNow = listLeft.listRefHappeningNow;
  const listTop = listLeft.listTop;
  ({ scrollIndicatorInsetBottom, scrollPosition } = listLeft);
  const ref = listLeft.ref;
  let tmp2 = scrollPosition();
  const channels = data.channels;
  const channelFavorites = data.channelFavorites;
  const friendSuggestions = data.friendSuggestions;
  const renderHeader = data.renderHeader;
  const renderFooter = data.renderFooter;
  ({ sections, setAddedFriendSuggestions } = data);
  listRefHappeningNow.useRef(null);
  const obj2 = listRefHappeningNow;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      let ref;
      let obj = {
        scrollToTop(arg0) {
          const current = ref.current;
          const tmp = undefined !== arg0 && arg0;
          if (current != null) {
            const obj = { section: 0, item: 0, animated: tmp };
            current.scrollToLocation(obj);
          }
        }
      };
      return obj;
    };
    const items = [];
    let num = 0;
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const imperativeHandle = obj2.useImperativeHandle(ref, tmp4, tmp5);
  if (cResult[2] === channelFavorites) {
    if (cResult[3] === channels) {
      if (cResult[4] === friendSuggestions) {
        if (cResult[5] === listItemHeight) {
          if (cResult[6] === listItemSuggestedFriendHeight) {
            if (cResult[9] === listLeft) {
              if (cResult[10] === listTop) {
                let tmp8;
                if (cResult[11] === scrollPosition) {
                  tmp8 = cResult[12];
                }
                const _Symbol = Symbol;
                class G {
                  constructor(arg0, arg1, stickyAt) {
                    let tmp2 = null;
                    if (arg0 === useMessagesData.MessagesDataSections.SuggestedFriends) {
                      tmp2 = jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt, stickyTop: listTop, stickyLeft: listLeft });
                    }
                    return tmp2;
                  }
                }
                if (tmp9 === Symbol.for("react.memo_cache_sentinel")) {
                  class N {
                    constructor(arg0) {
                      let num = 0;
                      const tmp = listItemHeight;
                      const tmp2 = listLeft;
                      if (arg0 === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                        num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                      }
                      return num;
                    }
                  }
                  class G {
                    constructor(arg0, arg1, stickyAt) {
                      let tmp2 = null;
                      if (arg0 === useMessagesData.MessagesDataSections.SuggestedFriends) {
                        tmp2 = jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt, stickyTop: listTop, stickyLeft: listLeft });
                      }
                      return tmp2;
                    }
                  }
                } else {
                  class N {
                    constructor(arg0) {
                      let num = 0;
                      const tmp = listItemHeight;
                      const tmp2 = listLeft;
                      if (arg0 === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                        num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                      }
                      return num;
                    }
                  }
                }
                if (cResult[14] !== tmp8) {
                  class N {
                    constructor(arg0) {
                      let num = 0;
                      const tmp = listItemHeight;
                      const tmp2 = listLeft;
                      if (arg0 === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                        num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                      }
                      return num;
                    }
                  }
                  tmp12[0] = tmp8;
                  class G {
                    constructor(arg0, arg1, stickyAt) {
                      let tmp2 = null;
                      if (arg0 === useMessagesData.MessagesDataSections.SuggestedFriends) {
                        tmp2 = jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt, stickyTop: listTop, stickyLeft: listLeft });
                      }
                      return tmp2;
                    }
                  }
                  cResult[14] = tmp8;
                  class X {
                    constructor() {
                      const tmp = renderHeader;
                      if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
                        return jsx(MessagesItemHappeningNowDefault, { listRef: listRefHappeningNow });
                      } else if (useMessagesData.MessagesDataHeader.EmptyState === tmp) {
                        return jsx(MessagesItemEmptyStateDefault, {});
                      } else {
                        return null;
                      }
                    }
                  }
                } else {
                  class N {
                    constructor(arg0) {
                      let num = 0;
                      const tmp = listItemHeight;
                      const tmp2 = listLeft;
                      if (arg0 === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                        num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                      }
                      return num;
                    }
                  }
                }
                if (cResult[16] === listRefHappeningNow) {
                  class N {
                    constructor(arg0) {
                      let num = 0;
                      const tmp = listItemHeight;
                      const tmp2 = listLeft;
                      if (arg0 === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                        num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                      }
                      return num;
                    }
                  }
                  if (cResult[19] !== renderHeader) {
                    class B {
                      constructor() {
                        const tmp = renderHeader;
                        if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
                          const tmp2Result = MessagesItemHappeningNow;
                          return tmp2Result.getMessagesItemHappeningNowHeight();
                        } else if (useMessagesData.MessagesDataHeader.EmptyState === tmp) {
                          return MessagesItemEmptyState.MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                        } else {
                          return 0;
                        }
                      }
                    }
                    class G {
                      constructor(arg0, arg1, stickyAt) {
                        let tmp2 = null;
                        if (arg0 === useMessagesData.MessagesDataSections.SuggestedFriends) {
                          tmp2 = jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt, stickyTop: listTop, stickyLeft: listLeft });
                        }
                        return tmp2;
                      }
                    }
                    cResult[20] = B;
                  } else {
                    class B {
                      constructor() {
                        const tmp = renderHeader;
                        if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
                          const tmp2Result = MessagesItemHappeningNow;
                          return tmp2Result.getMessagesItemHappeningNowHeight();
                        } else if (useMessagesData.MessagesDataHeader.EmptyState === tmp) {
                          return MessagesItemEmptyState.MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                        } else {
                          return 0;
                        }
                      }
                    }
                  }
                  class G {
                    constructor(arg0, arg1, stickyAt) {
                      let tmp2 = null;
                      if (arg0 === useMessagesData.MessagesDataSections.SuggestedFriends) {
                        tmp2 = jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt, stickyTop: listTop, stickyLeft: listLeft });
                      }
                      return tmp2;
                    }
                  }
                  const obj3 = { getComponent: tmp13, getSize: tmp14 };
                  class X {
                    constructor() {
                      const tmp = renderHeader;
                      if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
                        return jsx(MessagesItemHappeningNowDefault, { listRef: listRefHappeningNow });
                      } else if (useMessagesData.MessagesDataHeader.EmptyState === tmp) {
                        return jsx(MessagesItemEmptyStateDefault, {});
                      } else {
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
                    const tmp = renderHeader;
                    if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
                      return jsx(MessagesItemHappeningNowDefault, { listRef: listRefHappeningNow });
                    } else if (useMessagesData.MessagesDataHeader.EmptyState === tmp) {
                      return jsx(MessagesItemEmptyStateDefault, {});
                    } else {
                      return null;
                    }
                  }
                }
                cResult[16] = listRefHappeningNow;
                cResult[17] = renderHeader;
                cResult[18] = X;
              }
            }
            class G {
              constructor(arg0, arg1, stickyAt) {
                let tmp2 = null;
                if (arg0 === useMessagesData.MessagesDataSections.SuggestedFriends) {
                  tmp2 = jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt, stickyTop: listTop, stickyLeft: listLeft });
                }
                return tmp2;
              }
            }
            cResult[9] = listLeft;
            cResult[11] = scrollPosition;
            cResult[12] = G;
            tmp8 = G;
          }
        }
      }
    }
  }
  class S {
    constructor(arg0, row) {
      if (useMessagesData.MessagesDataSections.FavoriteChannels === arg0) {
        return jsx(MessagesItemChannel.MessagesItemChannelFast, { channelId: channelFavorites[row].channelId, placeholderHeight: listItemHeight, row });
      } else if (useMessagesData.MessagesDataSections.Channels === arg0) {
        return jsx(MessagesItemChannel.MessagesItemChannelFast, { channelId: channels[row].channelId, placeholderHeight: listItemHeight, row });
      } else if (useMessagesData.MessagesDataSections.Separator === arg0) {
        return jsx(MessagesItemSeparatorDefault, {});
      } else if (useMessagesData.MessagesDataSections.SuggestedFriends === arg0) {
        const obj4 = { suggestedFriend: friendSuggestions[row], onAddFriendSuggestions: setAddedFriendSuggestions };
        const MessagesItemSuggestedFriendFast = tmp(16387).MessagesItemSuggestedFriendFast;
        const merged = Object.assign(obj4);
        return <MessagesItemSuggestedFriendFast height={listItemSuggestedFriendHeight} />;
      } else if (useMessagesData.MessagesDataSections.Placeholders === arg0) {
        return jsx(MessagesItemPlaceholderDefault, { row, height: listItemHeight });
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
        throw error;
      }
    }
  }
  cResult[2] = channelFavorites;
  cResult[3] = channels;
  cResult[4] = friendSuggestions;
  cResult[5] = listItemHeight;
  cResult[6] = listItemSuggestedFriendHeight;
  cResult[7] = setAddedFriendSuggestions;
  cResult[8] = S;
}) : (function MessagesFastestList(listItemSizes) {
  let accessibilityLabel;
  let data;
  let handleScrollAnimated;
  let insetEnd;
  let listItemHeight;
  let ref;
  let scrollIndicatorInsetBottom;
  ({ data, listItemHeight } = listItemSizes);
  listItemSizes = listItemSizes.listItemSizes;
  const listItemSuggestedFriendHeight = listItemSizes.listItemSuggestedFriendHeight;
  const listLeft = listItemSizes.listLeft;
  const listRefHappeningNow = listItemSizes.listRefHappeningNow;
  const listTop = listItemSizes.listTop;
  const scrollPosition = listItemSizes.scrollPosition;
  ({ accessibilityLabel, handleScrollAnimated, insetEnd, scrollIndicatorInsetBottom, ref } = listItemSizes);
  let tmp = listTop();
  let closure_7 = tmp;
  const channels = data.channels;
  const channelFavorites = data.channelFavorites;
  const friendSuggestions = data.friendSuggestions;
  const renderHeader = data.renderHeader;
  const renderFooter = data.renderFooter;
  const setAddedFriendSuggestions = data.setAddedFriendSuggestions;
  const sections = data.sections;
  const ref1 = listLeft.useRef(null);
  const imperativeHandle = listLeft.useImperativeHandle(ref, () => {
    let ref;
    let obj = {
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
    };
    return obj;
  }, []);
  const items = [channelFavorites, listItemHeight, channels, friendSuggestions, setAddedFriendSuggestions, listItemSuggestedFriendHeight];
  const items1 = [listTop, listLeft, scrollPosition];
  const callback = listLeft.useCallback(function(arg0, row) {
    if (useMessagesData.MessagesDataSections.FavoriteChannels === arg0) {
      return jsx(MessagesItemChannel.MessagesItemChannelFast, { channelId: channelFavorites[row].channelId, placeholderHeight: listItemHeight, row });
    } else if (useMessagesData.MessagesDataSections.Channels === arg0) {
      return jsx(MessagesItemChannel.MessagesItemChannelFast, { channelId: channels[row].channelId, placeholderHeight: listItemHeight, row });
    } else if (useMessagesData.MessagesDataSections.Separator === arg0) {
      return jsx(MessagesItemSeparatorDefault, {});
    } else if (useMessagesData.MessagesDataSections.SuggestedFriends === arg0) {
      const obj4 = { suggestedFriend: friendSuggestions[row], onAddFriendSuggestions: setAddedFriendSuggestions };
      const MessagesItemSuggestedFriendFast = tmp(16387).MessagesItemSuggestedFriendFast;
      const merged = Object.assign(obj4);
      return <MessagesItemSuggestedFriendFast height={listItemSuggestedFriendHeight} />;
    } else if (useMessagesData.MessagesDataSections.Placeholders === arg0) {
      return jsx(MessagesItemPlaceholderDefault, { row, height: listItemHeight });
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
      throw error;
    }
  }, items);
  const memo = listLeft.useMemo(() => {
    let stickyLeft;
    let stickyTop;
    let obj = {
      getComponent(arg0, arg1, stickyAt) {
        let tmp2 = null;
        const tmp = listItemSuggestedFriendHeight;
        if (arg0 === listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataSections.SuggestedFriends) {
          const obj = { scrollPosition, stickyAt, stickyTop, stickyLeft };
          tmp2 = listRefHappeningNow(listItemSizes(tmp[11]), obj);
        }
        return tmp2;
      },
      getSize(arg0) {
        let num = 0;
        const tmp = listItemHeight;
        const tmp2 = listItemSuggestedFriendHeight;
        if (arg0 === listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataSections.SuggestedFriends) {
          num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
        }
        return num;
      }
    };
    return obj;
  }, items1);
  const items2 = [renderHeader, listRefHappeningNow];
  const memo1 = listLeft.useMemo(() => {
    let listRef;
    let obj = {
      getComponent() {
        const tmp = renderHeader;
        const tmp2 = listItemHeight;
        if (listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataHeader.HappeningNow === renderHeader) {
          const obj = { listRef };
          return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[12]), obj);
        } else if (tmp2(listItemSuggestedFriendHeight[6]).MessagesDataHeader.EmptyState === tmp) {
          return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[13]), {});
        } else {
          return null;
        }
      },
      getSize() {
        const tmp = renderHeader;
        if (listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataHeader.HappeningNow === renderHeader) {
          const tmp2Result = listItemHeight(listItemSuggestedFriendHeight[12]);
          return tmp2Result.getMessagesItemHappeningNowHeight();
        } else if (listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataHeader.EmptyState === tmp) {
          return listItemHeight(listItemSuggestedFriendHeight[13]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
        } else {
          return 0;
        }
      }
    };
    return obj;
  }, items2);
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
  const callback1 = listLeft.useCallback(function(arg0) {
    if (useMessagesData.MessagesDataSections.FavoriteChannels !== arg0) {
      if (useMessagesData.MessagesDataSections.Channels !== arg0) {
        if (useMessagesData.MessagesDataSections.Placeholders !== arg0) {
          if (useMessagesData.MessagesDataSections.SuggestedFriends === arg0) {
            return listItemSuggestedFriendHeight;
          } else if (useMessagesData.MessagesDataSections.Separator === arg0) {
            return MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
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
      if (FastestListItemTypeDefault.SECTION_FOOTER !== arg0) {
        if (FastestListItemTypeDefault.ITEM === arg0) {
          const tmp5 = require;
          if (useMessagesData.MessagesDataSections.FavoriteChannels === arg1) {
            return channelFavorites[arg2].channelId;
          } else if (tmp5(16390).MessagesDataSections.Channels === arg1) {
            return channels[arg2].channelId;
          }
        }
      }
    }
  }, items5);
  const memo3 = listLeft.useMemo(() => {
    const obj = { listHeader: { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_7.placeholder.backgroundColor, shape: "rect", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 }, sectionItem: { type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM, colorHex: closure_7.placeholder.backgroundColor, labelPadding: nativeDefault.space.PX_4, labelSize: listItemSizes.label, labelSecondarySize: listItemSizes.labelSecondary, padding: nativeDefault.space.PX_16, shape: "circle", shapeSize: listItemSizes.avatar } };
    ({ type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE, colorHex: closure_7.placeholder.backgroundColor, shape: "rect", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 });
    ({ type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM, colorHex: closure_7.placeholder.backgroundColor, labelPadding: nativeDefault.space.PX_4, labelSize: listItemSizes.label, labelSecondarySize: listItemSizes.labelSecondary, padding: nativeDefault.space.PX_16, shape: "circle", shapeSize: listItemSizes.avatar });
    return obj;
  }, items6);
  let obj = { insetEnd, accessibilityLabel, estimatedListSize: "windowSize", keyExtractor: callback2, itemSize: callback1, listId: "dm-messages-list", listFooterSize: memo2.getSize, listFooterAlwaysMounted: true, listHeaderSize: memo1.getSize, listHeaderAlwaysMounted: true, placeholderConfig: memo3, ref: ref1, renderItem: callback, renderListFooter: memo2.getComponent, renderListHeader: memo1.getComponent, renderSectionHeader: memo.getComponent, scrollIndicatorInsetEnd: scrollIndicatorInsetBottom, scrollReporting: "animatedCallbacks", scrollHandlerAnimated: handleScrollAnimated, sections, sectionHeaderSize: memo.getSize };
  return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[17]), obj);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFastestList.tsx");

export default memoResult;
