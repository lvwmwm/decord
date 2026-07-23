// Module ID: 14893
// Function ID: 113550
// Dependencies: [29, 31, 27, 4122, 4808, 33, 4130, 689, 5464, 5484, 3991, 13999, 13990, 14894, 14913, 14915, 14916, 12382, 14917, 1324, 8831, 477, 3982, 3981, 5162, 6707, 14, 14898, 14918, 14910, 14909, 14919, 14920, 14958, 14960, 9252, 8828, 13998, 14895, 14962, 9244, 1212, 10025, 2]

// Module 14893
import getMessagesItemSuggestedFriendHeight from "getMessagesItemSuggestedFriendHeight";
import importAllResult from "sum";
import { View } from "getMessagesItemChannelSizes";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import jsxProd from "MESSAGES_ITEM_EMPTY_STATE_HEIGHT";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
let require = arg1;
let closure_3 = ["height"];
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { flex: 1, backgroundColor: importDefault(689).colors.PANEL_BG };
  obj.container = obj;
  obj = { backgroundColor: importDefault(689).colors.BORDER_SUBTLE };
  obj.placeholder = obj;
  return obj;
});
let closure_12 = { code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const memoResult = importAllResult.memo(function Messages(style) {
  let tmp = renderHeader();
  const require = tmp;
  let obj = require(height[10]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = require(height[11]);
  const youBarTotalHeight = obj1.useYouBarTotalHeight();
  const tmp2 = sharedValue(height[8]);
  const sum = youBarTotalHeight + require(height[12]).useMobileQuestDockHeight();
  let obj3 = require(height[12]);
  const youBarTotalHeight1 = require(height[11]).useYouBarTotalHeight(-16);
  const tmp7 = sharedValue(height[13])();
  const listItemSizes = tmp7.listItemSizes;
  height = listItemSizes.height;
  const tmp8 = listItemSuggestedFriendHeight(listItemSizes, closure_3);
  closure_3 = tmp8;
  listItemSuggestedFriendHeight = tmp7.listItemSuggestedFriendHeight;
  const listLeft = tmp7.listLeft;
  const listTop = tmp7.listTop;
  const tmp9 = sharedValue(height[14])();
  const channels = tmp9.channels;
  const channelFavorites = tmp9.channelFavorites;
  const dataKey = tmp9.dataKey;
  const friendSuggestions = tmp9.friendSuggestions;
  renderHeader = tmp9.renderHeader;
  const renderFooter = tmp9.renderFooter;
  const sections = tmp9.sections;
  const setAddedFriendSuggestions = tmp9.setAddedFriendSuggestions;
  const ref = listLeft.useRef(null);
  const ref1 = listLeft.useRef(null);
  sharedValue(height[15])({ listRef: ref, listRefHappeningNow: ref1 });
  sharedValue(height[16])();
  let obj4 = require(height[11]);
  const commonTriggerPoint = require(height[17]).useCommonTriggerPoint(require(height[18]).DmGdmListRenderTriggerPoint);
  const tmp15 = sharedValue(height[19])("Messages");
  let closure_16 = tmp15;
  const obj5 = require(height[17]);
  const isClientThemeOrCustomThemeActive = require(height[20]).useIsClientThemeOrCustomThemeActive();
  const items = [dataKey];
  const effect = listLeft.useEffect(() => {
    if (null != dataKey) {
      if (!obj7.isAndroid()) {
        if (!channels.useReducedMotion) {
          const rootNavigationRef = tmp(height[22]).getRootNavigationRef();
          let tmp4 = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp4) {
            const obj3 = tmp(height[23]);
            const rootNavigationRef1 = tmp(height[22]).getRootNavigationRef();
            let currentRoute;
            if (null != rootNavigationRef1) {
              currentRoute = rootNavigationRef1.getCurrentRoute();
            }
            tmp4 = null != obj3.coerceGuildsRoute(currentRoute);
            const obj4 = tmp(height[22]);
          }
          if (tmp4) {
            const result = tmp(height[24]).DeprecatedLayoutAnimation();
            const obj6 = tmp(height[24]);
          }
          const obj = tmp(height[22]);
        }
      }
      obj7 = tmp(height[21]);
    }
  }, items);
  const layoutEffect = listLeft.useLayoutEffect(() => {
    tmp(height[25]).trackAppUIViewed();
    const obj = tmp(height[25]);
    const reduced = sections.reduce((arg0, arg1) => arg0 + arg1, 0);
    sharedValue(height[26]).recordRender(reduced, channelFavorites.isConnected());
  });
  const items1 = [channelFavorites, isClientThemeOrCustomThemeActive, height, channels, friendSuggestions, setAddedFriendSuggestions, listItemSuggestedFriendHeight];
  const items2 = [listTop, listLeft, sharedValue];
  const callback = listLeft.useCallback((arg0, row) => {
    if (tmp(height[14]).MessagesDataSections.FavoriteChannels === arg0) {
      let obj = { channelId: channelFavorites[row].channelId, isGradientTheme: isClientThemeOrCustomThemeActive, placeholderHeight: height, row };
      return dataKey(sharedValue(height[27]), obj);
    } else if (tmp(height[14]).MessagesDataSections.Channels === arg0) {
      obj = { channelId: channels[row].channelId, isGradientTheme: isClientThemeOrCustomThemeActive, placeholderHeight: height, row };
      return dataKey(sharedValue(height[27]), obj);
    } else if (tmp(height[14]).MessagesDataSections.Separator === arg0) {
      return dataKey(sharedValue(height[28]), {});
    } else if (tmp(height[14]).MessagesDataSections.SuggestedFriends === arg0) {
      const obj1 = { suggestedFriend: friendSuggestions[row], onAddFriendSuggestions: setAddedFriendSuggestions };
      const obj2 = { height: listItemSuggestedFriendHeight };
      const merged = Object.assign(obj1);
      return dataKey(sharedValue(height[29]), obj2);
    } else if (tmp(height[14]).MessagesDataSections.Placeholders === arg0) {
      obj = { row, height };
      return dataKey(sharedValue(height[30]), obj);
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
      throw error;
    }
  }, items1);
  const memo = listLeft.useMemo(() => ({
    getComponent(arg0, arg1, stickyAt) {
      let tmp = null;
      if (arg0 === callback(height[14]).MessagesDataSections.SuggestedFriends) {
        const obj = { scrollPosition: outer1_1, stickyAt, stickyTop: outer1_6, stickyLeft: outer1_5 };
        tmp = dataKey(sharedValue(height[31]), obj);
      }
      return tmp;
    },
    getSize(arg0) {
      let num = 0;
      if (arg0 === callback(height[14]).MessagesDataSections.SuggestedFriends) {
        num = callback(height[31]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
      }
      return num;
    }
  }), items2);
  const items3 = [renderHeader, tmp15];
  const memo1 = listLeft.useMemo(() => ({
    getComponent() {
      if (callback(height[14]).MessagesDataHeader.HappeningNow === outer1_11) {
        const obj = { listRef: outer1_15 };
        return dataKey(sharedValue(height[32]), obj);
      } else if (callback(height[14]).MessagesDataHeader.EmptyState === tmp) {
        return dataKey(sharedValue(height[33]), {});
      } else {
        return null;
      }
      tmp = outer1_11;
    },
    getSize() {
      if (callback(height[14]).MessagesDataHeader.HappeningNow === outer1_11) {
        return callback(height[32]).getMessagesItemHappeningNowHeight(outer1_16);
      } else if (callback(height[14]).MessagesDataHeader.EmptyState === tmp) {
        return callback(height[33]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      } else {
        return 0;
      }
      tmp = outer1_11;
    }
  }), items3);
  const items4 = [renderFooter];
  const memo2 = listLeft.useMemo(() => ({
    getComponent() {
      let tmp = null;
      if (outer1_12) {
        tmp = dataKey(sharedValue(height[34]), {});
      }
      return tmp;
    },
    getSize() {
      let num = 0;
      if (outer1_12) {
        num = callback(height[34]).MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
      }
      return num;
    }
  }), items4);
  const items5 = [height, listItemSuggestedFriendHeight];
  const items6 = [channels, channelFavorites];
  const callback1 = listLeft.useCallback((arg0) => {
    if (tmp(height[14]).MessagesDataSections.FavoriteChannels !== arg0) {
      if (tmp(height[14]).MessagesDataSections.Channels !== arg0) {
        if (tmp(height[14]).MessagesDataSections.Placeholders !== arg0) {
          if (tmp(height[14]).MessagesDataSections.SuggestedFriends === arg0) {
            return listItemSuggestedFriendHeight;
          } else if (tmp(height[14]).MessagesDataSections.Separator === arg0) {
            return tmp(height[28]).MESSAGES_ITEM_SEPERATOR_HEIGHT;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
            throw error;
          }
        }
      }
    }
    return height;
  }, items5);
  const items7 = [tmp, tmp8];
  const callback2 = listLeft.useCallback((arg0, arg1, arg2) => {
    if (sharedValue(height[35]).SECTION_HEADER !== arg0) {
      if (sharedValue(height[35]).SECTION_FOOTER !== arg0) {
        if (sharedValue(height[35]).ITEM === arg0) {
          if (tmp(height[14]).MessagesDataSections.FavoriteChannels === arg1) {
            return channelFavorites[arg2].channelId;
          } else if (tmp(height[14]).MessagesDataSections.Channels === arg1) {
            return channels[arg2].channelId;
          }
        }
      }
    }
  }, items6);
  const memo3 = listLeft.useMemo(() => {
    let obj = {};
    obj = { type: tmp(height[36]).FastestListPropsPlaceholderType.SHAPE, colorHex: tmp.placeholder.backgroundColor, shape: "rect", borderRadius: sharedValue(height[7]).radii.lg, paddingHorizontal: sharedValue(height[7]).space.PX_8, paddingVertical: sharedValue(height[7]).space.PX_4 };
    obj.listHeader = obj;
    obj = { type: tmp(height[36]).FastestListPropsPlaceholderType.FEED_ITEM, colorHex: tmp.placeholder.backgroundColor, labelPadding: sharedValue(height[7]).space.PX_4, labelSize: tmp8.label, labelSecondarySize: tmp8.labelSecondary, padding: sharedValue(height[7]).space.PX_16, shape: "circle", shapeSize: tmp8.avatar };
    obj.sectionItem = obj;
    return obj;
  }, items7);
  let obj6 = require(height[20]);
  const externalScrollEventHandler = require(height[37]).useExternalScrollEventHandler({ id: "messages" });
  let obj7 = require(height[37]);
  const fn = function j(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn.__workletHash = 5461403437592;
  fn.__initData = renderFooter;
  const obj8 = require(height[10]);
  obj = { value: tmp2(sharedValue(height[9]).MESSAGES).analyticsLocations };
  obj = { style: items8 };
  items8 = [tmp.container, style.style];
  const items9 = [dataKey(sharedValue(height[38]), { height: tmp7.headerSize, scrollPosition: sharedValue }), , ];
  if (tmp9.showFullscreenEmptyState) {
    let tmp31Result = tmp31(tmp32(tmp33[39]), {});
  } else {
    obj1 = { insetEnd: sum };
    const intl = require(tmp33[41]).intl;
    obj1.accessibilityLabel = intl.string(require(tmp33[41]).t.OIgYlQ);
    obj1.estimatedListSize = "windowSize";
    obj1.keyExtractor = callback2;
    obj1.itemSize = callback1;
    obj1.listId = "dm-messages-list";
    obj1.listFooterSize = memo2.getSize;
    obj1.listFooterAlwaysMounted = true;
    obj1.listHeaderSize = memo1.getSize;
    obj1.listHeaderAlwaysMounted = true;
    obj1.placeholderConfig = memo3;
    obj1.ref = ref;
    obj1.renderItem = callback;
    obj1.renderListFooter = memo2.getComponent;
    obj1.renderListHeader = memo1.getComponent;
    obj1.renderSectionHeader = memo.getComponent;
    obj1.scrollIndicatorInsetEnd = youBarTotalHeight1;
    obj1.scrollReporting = "animatedCallbacks";
    obj1.scrollHandlerAnimated = animatedScrollHandler;
    obj1.sections = sections;
    obj1.sectionHeaderSize = memo.getSize;
    tmp31Result = tmp31(tmp32(tmp33[40]), obj1);
    const tmp32Result = tmp32(tmp33[40]);
  }
  items9[1] = tmp31Result;
  items9[2] = dataKey(require(height[42]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  obj.children = items9;
  obj.children = friendSuggestions(listTop, obj);
  return dataKey(require(height[8]).AnalyticsLocationProvider, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;
