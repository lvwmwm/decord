// Module ID: 14766
// Function ID: 111305
// Dependencies: []

// Module 14766
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_11 = arg1(dependencyMap[6]).createStyles(() => {
  let obj = {};
  obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.PANEL_BG };
  obj.container = obj;
  obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
  obj.placeholder = obj;
  return obj;
});
let closure_12 = { code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function Messages(style) {
  const tmp = callback2();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[10]);
  const sharedValue = obj.useSharedValue(0);
  const importDefault = sharedValue;
  let obj1 = arg1(dependencyMap[11]);
  const youBarTotalHeight = obj1.useYouBarTotalHeight();
  const tmp2 = importDefault(dependencyMap[8]);
  const sum = youBarTotalHeight + arg1(dependencyMap[12]).useMobileQuestDockHeight();
  const obj3 = arg1(dependencyMap[12]);
  const youBarTotalHeight1 = arg1(dependencyMap[11]).useYouBarTotalHeight(-16);
  const tmp7 = importDefault(dependencyMap[13])();
  const listItemSizes = tmp7.listItemSizes;
  const height = listItemSizes.height;
  const dependencyMap = height;
  const tmp8 = callback(listItemSizes, closure_3);
  closure_3 = tmp8;
  const listItemSuggestedFriendHeight = tmp7.listItemSuggestedFriendHeight;
  let callback = listItemSuggestedFriendHeight;
  const listLeft = tmp7.listLeft;
  const listTop = tmp7.listTop;
  const View = listTop;
  const tmp9 = importDefault(dependencyMap[14])();
  const channels = tmp9.channels;
  let closure_7 = channels;
  const channelFavorites = tmp9.channelFavorites;
  let closure_8 = channelFavorites;
  const dataKey = tmp9.dataKey;
  const friendSuggestions = tmp9.friendSuggestions;
  const renderHeader = tmp9.renderHeader;
  let callback2 = renderHeader;
  const renderFooter = tmp9.renderFooter;
  let closure_12 = renderFooter;
  const sections = tmp9.sections;
  const setAddedFriendSuggestions = tmp9.setAddedFriendSuggestions;
  const ref = listLeft.useRef(null);
  const ref1 = importAllResult.useRef(null);
  importDefault(dependencyMap[15])({ listRef: ref, listRefHappeningNow: ref1 });
  importDefault(dependencyMap[16])();
  const obj4 = arg1(dependencyMap[11]);
  const commonTriggerPoint = arg1(dependencyMap[17]).useCommonTriggerPoint(arg1(dependencyMap[18]).DmGdmListRenderTriggerPoint);
  const tmp15 = importDefault(dependencyMap[19])("Messages");
  const obj5 = arg1(dependencyMap[17]);
  const isClientThemeOrCustomThemeActive = arg1(dependencyMap[20]).useIsClientThemeOrCustomThemeActive();
  const items = [dataKey];
  const effect = importAllResult.useEffect(() => {
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
      const obj7 = tmp(height[21]);
    }
  }, items);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    tmp(height[25]).trackAppUIViewed();
    const obj = tmp(height[25]);
    const reduced = sections.reduce((arg0, arg1) => arg0 + arg1, 0);
    sharedValue(height[26]).recordRender(reduced, channelFavorites.isConnected());
  });
  const items1 = [channelFavorites, isClientThemeOrCustomThemeActive, height, channels, friendSuggestions, setAddedFriendSuggestions, listItemSuggestedFriendHeight];
  const items2 = [listTop, listLeft, sharedValue];
  callback = importAllResult.useCallback((arg0, row) => {
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
  const memo = importAllResult.useMemo(() => ({
    getComponent(arg0, arg1, stickyAt) {
      let tmp = null;
      if (arg0 === callback(closure_2[14]).MessagesDataSections.SuggestedFriends) {
        const obj = { scrollPosition: callback2, stickyAt, stickyTop: closure_6, stickyLeft: closure_5 };
        tmp = callback3(callback2(closure_2[31]), obj);
      }
      return tmp;
    },
    getSize(arg0) {
      let num = 0;
      if (arg0 === callback(closure_2[14]).MessagesDataSections.SuggestedFriends) {
        num = callback(closure_2[31]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
      }
      return num;
    }
  }), items2);
  const items3 = [renderHeader, tmp15];
  const memo1 = importAllResult.useMemo(() => ({
    getComponent() {
      if (callback(closure_2[14]).MessagesDataHeader.HappeningNow === closure_11) {
        const obj = { listRef: closure_15 };
        return callback3(callback2(closure_2[32]), obj);
      } else if (callback(closure_2[14]).MessagesDataHeader.EmptyState === tmp) {
        return callback3(callback2(closure_2[33]), {});
      } else {
        return null;
      }
      const tmp = closure_11;
    },
    getSize() {
      if (callback(closure_2[14]).MessagesDataHeader.HappeningNow === closure_11) {
        return callback(closure_2[32]).getMessagesItemHappeningNowHeight(closure_16);
      } else if (callback(closure_2[14]).MessagesDataHeader.EmptyState === tmp) {
        return callback(closure_2[33]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      } else {
        return 0;
      }
      const tmp = closure_11;
    }
  }), items3);
  const items4 = [renderFooter];
  const memo2 = importAllResult.useMemo(() => ({
    getComponent() {
      let tmp = null;
      if (closure_12) {
        tmp = callback3(callback2(closure_2[34]), {});
      }
      return tmp;
    },
    getSize() {
      let num = 0;
      if (closure_12) {
        num = callback(closure_2[34]).MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
      }
      return num;
    }
  }), items4);
  const items5 = [height, listItemSuggestedFriendHeight];
  const items6 = [channels, channelFavorites];
  const callback1 = importAllResult.useCallback((arg0) => {
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
  callback2 = importAllResult.useCallback((arg0, arg1, arg2) => {
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
  const memo3 = importAllResult.useMemo(() => {
    let obj = {};
    obj = { type: tmp(height[36]).FastestListPropsPlaceholderType.SHAPE, colorHex: tmp.placeholder.backgroundColor, shape: "rect", borderRadius: sharedValue(height[7]).radii.lg, paddingHorizontal: sharedValue(height[7]).space.PX_8, paddingVertical: sharedValue(height[7]).space.PX_4 };
    obj.listHeader = obj;
    obj = { type: tmp(height[36]).FastestListPropsPlaceholderType.FEED_ITEM, colorHex: tmp.placeholder.backgroundColor, labelPadding: sharedValue(height[7]).space.PX_4, labelSize: tmp8.label, labelSecondarySize: tmp8.labelSecondary, padding: sharedValue(height[7]).space.PX_16, shape: "circle", shapeSize: tmp8.avatar };
    obj.sectionItem = obj;
    return obj;
  }, items7);
  const obj6 = arg1(dependencyMap[20]);
  const externalScrollEventHandler = arg1(dependencyMap[37]).useExternalScrollEventHandler({ id: "messages" });
  const obj7 = arg1(dependencyMap[37]);
  const fn = function j(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn.__workletHash = 5461403437592;
  fn.__initData = closure_12;
  const obj8 = arg1(dependencyMap[10]);
  obj = { value: tmp2(importDefault(dependencyMap[9]).MESSAGES).analyticsLocations };
  obj = { style: items8 };
  const items8 = [tmp.container, style.style];
  const items9 = [dataKey(importDefault(dependencyMap[38]), { height: tmp7.headerSize, scrollPosition: sharedValue }), , ];
  if (tmp9.showFullscreenEmptyState) {
    let tmp31Result = tmp31(tmp32(tmp33[39]), {});
  } else {
    obj1 = { insetEnd: sum };
    const intl = arg1(tmp33[41]).intl;
    obj1.accessibilityLabel = intl.string(arg1(tmp33[41]).t.OIgYlQ);
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
  items9[2] = dataKey(arg1(dependencyMap[42]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  obj.children = items9;
  obj.children = friendSuggestions(View, obj);
  return dataKey(arg1(dependencyMap[8]).AnalyticsLocationProvider, obj);
});
const result = arg1(dependencyMap[43]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;
