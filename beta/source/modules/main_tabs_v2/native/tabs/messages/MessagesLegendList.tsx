// Module ID: 15688
// Function ID: 15689
// Name: MessagesLegendList
// Dependencies: [19, 21, 15689, 15663, 15728, 15729, 15675, 15673, 15678, 15690, 15727, 15730, 15732, 2]

// Module 15688 (MessagesLegendList)
import Fragment from "Fragment" /* 21 */;
import MessagesItemChannel from "MessagesItemChannel" /* 15663 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 15673 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 15675 */;
import useMessagesData from "useMessagesData" /* 15678 */;
import MessagesItemHappeningNowDefault from "MessagesItemHappeningNow" /* 15690 */;
import MessagesItemEmptyStateDefault from "MessagesItemEmptyState" /* 15727 */;
import MessagesItemSeparator from "MessagesItemSeparator" /* 15728 */;
import MessagesItemSuggestedFriendsHeader from "MessagesItemSuggestedFriendsHeader" /* 15729 */;
import MessagesItemAddFriendsWidgetDefault from "MessagesItemAddFriendsWidget" /* 15730 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MessagesItemSeparatorDefault = MessagesItemSeparator;
const MessagesItemSuggestedFriendsHeaderDefault = MessagesItemSuggestedFriendsHeader;
let item;

const jsx = Fragment.jsx;
const memoResult = react.memo(react.forwardRef(function MessagesLegendList(listItemHeight, ref) {
  let accessibilityLabel;
  let data;
  let handleScrollAnimated;
  let insetEnd;
  let recycleItems;
  ({ data, insetEnd } = listItemHeight);
  const estimatedItemSize = listItemHeight.listItemHeight;
  const listItemSuggestedFriendHeight = listItemHeight.listItemSuggestedFriendHeight;
  const listLeft = listItemHeight.listLeft;
  const listRefHappeningNow = listItemHeight.listRefHappeningNow;
  const listTop = listItemHeight.listTop;
  const scrollIndicatorInsetBottom = listItemHeight.scrollIndicatorInsetBottom;
  const scrollPosition = listItemHeight.scrollPosition;
  const friendSuggestions = data.friendSuggestions;
  const renderHeader = data.renderHeader;
  const renderFooter = data.renderFooter;
  const setAddedFriendSuggestions = data.setAddedFriendSuggestions;
  ({ accessibilityLabel, handleScrollAnimated, recycleItems } = listItemHeight);
  ref = listLeft.useRef(null);
  let tmp2 = estimatedItemSize(listItemSuggestedFriendHeight[2])(data, { listItemHeight: estimatedItemSize });
  const friendsHeaderIndex = tmp2.friendsHeaderIndex;
  const friendsHeaderOffset = tmp2.friendsHeaderOffset;
  const estimatedHeaderSize = tmp2.listHeaderHeight;
  let items = [estimatedHeaderSize];
  const data2 = tmp2.listData;
  const imperativeHandle = listLeft.useImperativeHandle(ref, () => {
    let offset;
    let obj = {
      scrollToTop() {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        const current = ref.current;
        if (current != null) {
          const obj = { offset, animated: flag };
          current.scrollToOffset(obj);
        }
      }
    };
    return obj;
  }, items);
  const items1 = [estimatedItemSize, scrollPosition, friendsHeaderOffset, listTop, listLeft, listItemSuggestedFriendHeight, friendSuggestions, setAddedFriendSuggestions];
  const renderItem = listLeft.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("favorite" !== kind) {
      if ("channel" !== kind) {
        if ("separator" === kind) {
          return jsx(MessagesItemSeparatorDefault, {});
        } else if ("friendsHeader" === kind) {
          return jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt: friendsHeaderOffset, stickyTop: listTop, stickyLeft: listLeft });
        } else if ("suggestedFriend" === kind) {
          return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendLegend, { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions });
        } else if ("placeholder" === kind) {
          return jsx(MessagesItemPlaceholderDefault, { row: item.row, height: estimatedItemSize });
        }
      }
    }
    return jsx(MessagesItemChannel.MessagesItemChannelLegend, { channelId: item.channelId, placeholderHeight: estimatedItemSize, row: item.row });
  }, items1);
  const items2 = [estimatedItemSize, listItemSuggestedFriendHeight];
  const getItemType = listLeft.useCallback((kind) => kind.kind, []);
  const items3 = [friendSuggestions];
  const getFixedItemSize = listLeft.useCallback((kind) => {
    kind = kind.kind;
    if ("favorite" !== kind) {
      if ("channel" !== kind) {
        if ("placeholder" !== kind) {
          if ("separator" === kind) {
            return MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
          } else if ("friendsHeader" === kind) {
            return MessagesItemSuggestedFriendsHeader.MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
          } else if ("suggestedFriend" === kind) {
            return listItemSuggestedFriendHeight;
          }
        }
      }
    }
    return estimatedItemSize;
  }, items2);
  const items4 = [renderHeader, listRefHappeningNow];
  const keyExtractor = listLeft.useCallback((kind) => {
    kind = kind.kind;
    if ("favorite" === kind) {
      const _HermesInternal4 = HermesInternal;
      return "fav:" + kind.channelId;
    } else if ("channel" === kind) {
      const _HermesInternal3 = HermesInternal;
      return "ch:" + kind.channelId;
    } else if ("separator" === kind) {
      return "separator";
    } else if ("friendsHeader" === kind) {
      return "friendsHeader";
    } else if ("suggestedFriend" === kind) {
      let id;
      if (friendSuggestions[kind.row] != null) {
        id = tmp3.user.id;
      }
      if (id == null) {
        id = kind.row;
      }
      const _HermesInternal2 = HermesInternal;
      return "sf:" + id;
    } else if ("placeholder" === kind) {
      const _HermesInternal = HermesInternal;
      return "placeholder:" + kind.row;
    }
  }, items3);
  const items5 = [renderFooter];
  const ListHeaderComponent = listLeft.useMemo(() => {
    const tmp = renderHeader;
    if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
      return jsx(MessagesItemHappeningNowDefault, { listRef: listRefHappeningNow });
    } else if (useMessagesData.MessagesDataHeader.EmptyState === tmp) {
      return jsx(MessagesItemEmptyStateDefault, {});
    } else {
      return null;
    }
  }, items4);
  const items6 = [friendsHeaderIndex];
  const ListFooterComponent = listLeft.useMemo(() => {
    let tmp = null;
    if (renderFooter) {
      tmp = jsx(MessagesItemAddFriendsWidgetDefault, {});
    }
    return tmp;
  }, items5);
  const items7 = [insetEnd];
  const stickyHeaderIndices = listLeft.useMemo(() => {
    let tmp2;
    if (null != friendsHeaderIndex) {
      const items = [tmp];
      tmp2 = items;
    }
    return tmp2;
  }, items6);
  const items8 = [scrollIndicatorInsetBottom];
  const contentContainerStyle = listLeft.useMemo(() => ({ paddingBottom: insetEnd }), items7);
  const scrollIndicatorInsets = listLeft.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items8);
  return listRefHappeningNow(insetEnd(listItemSuggestedFriendHeight[12]).AnimatedLegendList, { ref, accessibilityLabel, contentContainerStyle, data: data2, estimatedHeaderSize, estimatedItemSize, getFixedItemSize, getItemType, keyExtractor, ListFooterComponent, ListHeaderComponent, onScroll, recycleItems, renderItem, scrollIndicatorInsets, stickyHeaderIndices });
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesLegendList.tsx");

export default memoResult;
