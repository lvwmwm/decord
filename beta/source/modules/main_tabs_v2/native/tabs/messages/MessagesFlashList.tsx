// Module ID: 15733
// Function ID: 15734
// Name: MessagesFlashList
// Dependencies: [32, 19, 21, 15689, 15663, 15728, 15729, 15675, 15673, 15678, 15690, 15727, 15730, 8179, 2]

// Module 15733 (MessagesFlashList)
import Fragment from "Fragment" /* 21 */;
import MessagesItemChannel from "MessagesItemChannel" /* 15663 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 15673 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 15675 */;
import useMessagesData from "useMessagesData" /* 15678 */;
import MessagesItemHappeningNowDefault from "MessagesItemHappeningNow" /* 15690 */;
import MessagesItemEmptyStateDefault from "MessagesItemEmptyState" /* 15727 */;
import MessagesItemSeparatorDefault from "MessagesItemSeparator" /* 15728 */;
import MessagesItemSuggestedFriendsHeaderDefault from "MessagesItemSuggestedFriendsHeader" /* 15729 */;
import MessagesItemAddFriendsWidgetDefault from "MessagesItemAddFriendsWidget" /* 15730 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let item;

const jsx = Fragment.jsx;
const memoResult = react.memo(react.forwardRef(function MessagesFlashList(listItemHeight, ref) {
  let accessibilityLabel;
  let data;
  let handleScrollAnimated;
  let insetEnd;
  ({ data, insetEnd } = listItemHeight);
  listItemHeight = listItemHeight.listItemHeight;
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
  ({ accessibilityLabel, handleScrollAnimated } = listItemHeight);
  ref = listRefHappeningNow.useRef(null);
  let tmp2 = listItemHeight(listItemSuggestedFriendHeight[3])(data, { listItemHeight });
  const data2 = tmp2.listData;
  const friendsHeaderIndex = tmp2.friendsHeaderIndex;
  const extraData = tmp2.friendsHeaderOffset;
  const listHeaderHeight = tmp2.listHeaderHeight;
  let items = [listHeaderHeight];
  const imperativeHandle = listRefHappeningNow.useImperativeHandle(ref, () => {
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
  const items1 = [listItemHeight, scrollPosition, extraData, listTop, listLeft, listItemSuggestedFriendHeight, friendSuggestions, setAddedFriendSuggestions];
  const renderItem = listRefHappeningNow.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("favorite" !== kind) {
      if ("channel" !== kind) {
        if ("separator" === kind) {
          return jsx(MessagesItemSeparatorDefault, {});
        } else if ("friendsHeader" === kind) {
          return jsx(MessagesItemSuggestedFriendsHeaderDefault, { scrollPosition, stickyAt: extraData, stickyTop: listTop, stickyLeft: listLeft });
        } else if ("suggestedFriend" === kind) {
          return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendFlash, { height: listItemSuggestedFriendHeight, suggestedFriend: friendSuggestions[item.row], onAddFriendSuggestions: setAddedFriendSuggestions });
        } else if ("placeholder" === kind) {
          return jsx(MessagesItemPlaceholderDefault, { row: item.row, height: listItemHeight });
        }
      }
    }
    return jsx(MessagesItemChannel.MessagesItemChannelFlash, { channelId: item.channelId, placeholderHeight: listItemHeight, row: item.row });
  }, items1);
  const items2 = [friendSuggestions];
  const getItemType = listRefHappeningNow.useCallback((kind) => kind.kind, []);
  const items3 = [renderHeader, listRefHappeningNow];
  const keyExtractor = listRefHappeningNow.useCallback((kind) => {
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
  }, items2);
  const items4 = [renderFooter];
  const ListHeaderComponent = listRefHappeningNow.useMemo(() => {
    const tmp = renderHeader;
    if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
      return jsx(MessagesItemHappeningNowDefault, { listRef: listRefHappeningNow });
    } else if (useMessagesData.MessagesDataHeader.EmptyState === tmp) {
      return jsx(MessagesItemEmptyStateDefault, {});
    } else {
      return null;
    }
  }, items3);
  const ListFooterComponent = listRefHappeningNow.useMemo(() => {
    let tmp = null;
    if (renderFooter) {
      tmp = jsx(MessagesItemAddFriendsWidgetDefault, {});
    }
    return tmp;
  }, items4);
  const tmp9 = listLeft(listRefHappeningNow.useState(null), 2);
  const first = tmp9[0];
  let closure_18 = tmp9[1];
  const items5 = [data2];
  const onCommitLayoutEffect = listRefHappeningNow.useCallback(() => closure_18(data2), items5);
  const items6 = [first, data2, friendsHeaderIndex];
  const items7 = [insetEnd];
  const stickyHeaderIndices = listRefHappeningNow.useMemo(() => {
    let tmp;
    if (first === data2) {
      if (null != friendsHeaderIndex) {
        const items = [tmp2];
        tmp = items;
      }
    }
    return tmp;
  }, items6);
  const items8 = [scrollIndicatorInsetBottom];
  const contentContainerStyle = listRefHappeningNow.useMemo(() => ({ paddingBottom: insetEnd }), items7);
  const scrollIndicatorInsets = listRefHappeningNow.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items8);
  return listTop(insetEnd(listItemSuggestedFriendHeight[13]).AnimatedFlashList, { ref, accessibilityLabel, contentContainerStyle, data: data2, extraData, getItemType, keyExtractor, ListFooterComponent, ListHeaderComponent, onCommitLayoutEffect, onLoad: onCommitLayoutEffect, onScroll, renderItem, scrollIndicatorInsets, stickyHeaderIndices });
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFlashList.tsx");

export default memoResult;
