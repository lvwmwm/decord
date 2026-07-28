// Module ID: 14996
// Function ID: 114178
// Dependencies: [29, 31, 27, 4157, 4843, 33, 4165, 689, 5497, 5517, 4026, 14105, 14096, 14997, 15015, 15017, 15018, 12418, 15019, 1324, 477, 4017, 4016, 5195, 5713, 14, 15001, 15020, 15012, 15011, 15021, 7946, 15022, 15060, 15062, 9225, 8799, 14104, 14998, 15064, 9217, 1212, 10026, 2]

// Module 14996
import module_15011 from "module_15011";
import importAllResult from "useCutoutBackgroundColor";
import { View } from "PX_12";
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
  let obj2 = require(height[12]);
  const sum = youBarTotalHeight + obj2.useMobileQuestDockHeight();
  const tmp2 = sharedValue(height[8]);
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
  const items = [dataKey];
  const effect = listLeft.useEffect(() => {
    if (null != dataKey) {
      if (!obj7.isAndroid()) {
        if (!channels.useReducedMotion) {
          const rootNavigationRef = tmp(height[21]).getRootNavigationRef();
          let tmp4 = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp4) {
            const obj3 = tmp(height[22]);
            const rootNavigationRef1 = tmp(height[21]).getRootNavigationRef();
            let currentRoute;
            if (null != rootNavigationRef1) {
              currentRoute = rootNavigationRef1.getCurrentRoute();
            }
            tmp4 = null != obj3.coerceGuildsRoute(currentRoute);
            const obj4 = tmp(height[21]);
          }
          if (tmp4) {
            const result = tmp(height[23]).DeprecatedLayoutAnimation();
            const obj6 = tmp(height[23]);
          }
          const obj = tmp(height[21]);
        }
      }
      obj7 = tmp(height[20]);
    }
  }, items);
  const layoutEffect = listLeft.useLayoutEffect(() => {
    tmp(height[24]).trackAppUIViewed();
    const obj = tmp(height[24]);
    const reduced = sections.reduce((arg0, arg1) => arg0 + arg1, 0);
    sharedValue(height[25]).recordRender(reduced, channelFavorites.isConnected());
  });
  const items1 = [channelFavorites, height, channels, friendSuggestions, setAddedFriendSuggestions, listItemSuggestedFriendHeight];
  const items2 = [listTop, listLeft, sharedValue];
  const callback = listLeft.useCallback((arg0, row) => {
    if (tmp(height[14]).MessagesDataSections.FavoriteChannels === arg0) {
      let obj = { channelId: channelFavorites[row].channelId, placeholderHeight: height, row };
      return dataKey(sharedValue(height[26]), obj);
    } else if (tmp(height[14]).MessagesDataSections.Channels === arg0) {
      obj = { channelId: channels[row].channelId, placeholderHeight: height, row };
      return dataKey(sharedValue(height[26]), obj);
    } else if (tmp(height[14]).MessagesDataSections.Separator === arg0) {
      return dataKey(sharedValue(height[27]), {});
    } else if (tmp(height[14]).MessagesDataSections.SuggestedFriends === arg0) {
      const obj1 = { suggestedFriend: friendSuggestions[row], onAddFriendSuggestions: setAddedFriendSuggestions };
      const obj2 = { height: listItemSuggestedFriendHeight };
      const merged = Object.assign(obj1);
      return dataKey(sharedValue(height[28]), obj2);
    } else if (tmp(height[14]).MessagesDataSections.Placeholders === arg0) {
      obj = { row, height };
      return dataKey(sharedValue(height[29]), obj);
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
        tmp = dataKey(sharedValue(height[30]), obj);
      }
      return tmp;
    },
    getSize(arg0) {
      let num = 0;
      if (arg0 === callback(height[14]).MessagesDataSections.SuggestedFriends) {
        num = callback(height[30]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
      }
      return num;
    }
  }), items2);
  const items3 = [renderHeader, tmp15];
  const memo1 = listLeft.useMemo(() => ({
    getComponent() {
      if (callback(height[14]).MessagesDataHeader.HappeningNow === outer1_11) {
        let obj = { backgroundColor: null };
        obj = { listRef: outer1_15 };
        obj.children = dataKey(sharedValue(height[32]), obj);
        return dataKey(callback(height[31]).CutoutBackgroundProvider, obj);
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
            return tmp(height[27]).MESSAGES_ITEM_SEPERATOR_HEIGHT;
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
  const obj5 = require(height[17]);
  const externalScrollEventHandler = require(height[37]).useExternalScrollEventHandler({ id: "messages" });
  let obj6 = require(height[37]);
  class Y {
    constructor(arg0) {
      result = closure_1.set(style.contentOffset.y);
      tmp2 = useMemo(style.contentOffset.y, style.contentSize.height, style.layoutMeasurement.height);
      return;
    }
  }
  Y.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  Y.__workletHash = 5461403437592;
  Y.__initData = renderFooter;
  let obj7 = require(height[10]);
  obj = { value: tmp2(sharedValue(height[9]).MESSAGES).analyticsLocations };
  obj = { style: items8 };
  items8 = [tmp.container, style.style];
  obj1 = { backgroundColor: tmp.container.backgroundColor };
  const items9 = [dataKey(sharedValue(height[38]), { height: tmp7.headerSize, scrollPosition: sharedValue }), , ];
  if (tmp9.showFullscreenEmptyState) {
    let tmp30Result = tmp30(tmp31(tmp32[39]), {});
  } else {
    obj2 = { insetEnd: sum };
    const intl = require(tmp32[41]).intl;
    obj2.accessibilityLabel = intl.string(require(tmp32[41]).t.OIgYlQ);
    obj2.estimatedListSize = "windowSize";
    obj2.keyExtractor = callback2;
    obj2.itemSize = callback1;
    obj2.listId = "dm-messages-list";
    obj2.listFooterSize = memo2.getSize;
    obj2.listFooterAlwaysMounted = true;
    obj2.listHeaderSize = memo1.getSize;
    obj2.listHeaderAlwaysMounted = true;
    obj2.placeholderConfig = memo3;
    obj2.ref = ref;
    obj2.renderItem = callback;
    obj2.renderListFooter = memo2.getComponent;
    obj2.renderListHeader = memo1.getComponent;
    obj2.renderSectionHeader = memo.getComponent;
    obj2.scrollIndicatorInsetEnd = youBarTotalHeight1;
    obj2.scrollReporting = "animatedCallbacks";
    obj2.scrollHandlerAnimated = animatedScrollHandler;
    obj2.sections = sections;
    obj2.sectionHeaderSize = memo.getSize;
    tmp30Result = tmp30(tmp31(tmp32[40]), obj2);
    const tmp31Result = tmp31(tmp32[40]);
  }
  items9[1] = tmp30Result;
  items9[2] = dataKey(require(height[42]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  obj1.children = items9;
  obj.children = friendSuggestions(require(height[31]).CutoutBackgroundProvider, obj1);
  obj.children = dataKey(listTop, obj);
  return dataKey(require(height[8]).AnalyticsLocationProvider, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;
