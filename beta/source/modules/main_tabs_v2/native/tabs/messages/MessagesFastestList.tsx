// Module ID: 15734
// Function ID: 15735
// Name: MessagesFastestList
// Dependencies: [19, 21, 4836, 576, 15678, 15663, 15728, 15675, 15673, 15729, 15690, 15727, 15730, 6485, 6483, 6476, 2]

// Module 15734 (MessagesFastestList)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import FastestListPropsPlaceholder from "FastestListPropsPlaceholder" /* 6483 */;
import FastestListItemTypeDefault from "FastestListItemType" /* 6485 */;
import MessagesItemChannel from "MessagesItemChannel" /* 15663 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 15673 */;
import useMessagesData from "useMessagesData" /* 15678 */;
import MessagesItemSeparator from "MessagesItemSeparator" /* 15728 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const MessagesItemSeparatorDefault = MessagesItemSeparator;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles(() => {
  const obj = { placeholder: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
  ({ backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  return obj;
});
const memoResult = react.memo(react.forwardRef(function MessagesFastestList(listItemSizes, ref) {
  let accessibilityLabel;
  let data;
  let handleScrollAnimated;
  let insetEnd;
  let listItemHeight;
  let scrollIndicatorInsetBottom;
  ({ data, listItemHeight } = listItemSizes);
  listItemSizes = listItemSizes.listItemSizes;
  const listItemSuggestedFriendHeight = listItemSizes.listItemSuggestedFriendHeight;
  const listLeft = listItemSizes.listLeft;
  const listRefHappeningNow = listItemSizes.listRefHappeningNow;
  const listTop = listItemSizes.listTop;
  const scrollPosition = listItemSizes.scrollPosition;
  ({ accessibilityLabel, handleScrollAnimated, insetEnd, scrollIndicatorInsetBottom } = listItemSizes);
  let tmp = listTop();
  let closure_7 = tmp;
  const channels = data.channels;
  const channelFavorites = data.channelFavorites;
  const friendSuggestions = data.friendSuggestions;
  const renderHeader = data.renderHeader;
  const renderFooter = data.renderFooter;
  const setAddedFriendSuggestions = data.setAddedFriendSuggestions;
  const sections = data.sections;
  ref = listLeft.useRef(null);
  const imperativeHandle = listLeft.useImperativeHandle(ref, () => {
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
      const MessagesItemSuggestedFriendFast = tmp(15675).MessagesItemSuggestedFriendFast;
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
        if (arg0 === listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataSections.SuggestedFriends) {
          const obj = { scrollPosition, stickyAt, stickyTop, stickyLeft };
          tmp2 = listRefHappeningNow(listItemSizes(tmp[9]), obj);
        }
        return tmp2;
      },
      getSize(arg0) {
        let num = 0;
        const tmp = listItemHeight;
        const tmp2 = listItemSuggestedFriendHeight;
        if (arg0 === listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataSections.SuggestedFriends) {
          num = tmp(tmp2[9]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
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
        if (listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataHeader.HappeningNow === renderHeader) {
          const obj = { listRef };
          return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[10]), obj);
        } else if (tmp2(listItemSuggestedFriendHeight[4]).MessagesDataHeader.EmptyState === tmp) {
          return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[11]), {});
        } else {
          return null;
        }
      },
      getSize() {
        const tmp = renderHeader;
        if (listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataHeader.HappeningNow === renderHeader) {
          const tmp2Result = listItemHeight(listItemSuggestedFriendHeight[10]);
          return tmp2Result.getMessagesItemHappeningNowHeight();
        } else if (listItemHeight(listItemSuggestedFriendHeight[4]).MessagesDataHeader.EmptyState === tmp) {
          return listItemHeight(listItemSuggestedFriendHeight[11]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
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
        tmp = listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[12]), {});
      }
      return tmp;
    },
    getSize() {
      let num = 0;
      if (renderFooter) {
        num = listItemHeight(listItemSuggestedFriendHeight[12]).MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
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
          } else if (tmp5(15678).MessagesDataSections.Channels === arg1) {
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
  let obj = { insetEnd, accessibilityLabel, estimatedListSize: "windowSize", keyExtractor: callback2, itemSize: callback1, listId: "dm-messages-list", listFooterSize: memo2.getSize, listFooterAlwaysMounted: true, listHeaderSize: memo1.getSize, listHeaderAlwaysMounted: true, placeholderConfig: memo3, ref, renderItem: callback, renderListFooter: memo2.getComponent, renderListHeader: memo1.getComponent, renderSectionHeader: memo.getComponent, scrollIndicatorInsetEnd: scrollIndicatorInsetBottom, scrollReporting: "animatedCallbacks", scrollHandlerAnimated: handleScrollAnimated, sections, sectionHeaderSize: memo.getSize };
  return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[15]), obj);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFastestList.tsx");

export default memoResult;
