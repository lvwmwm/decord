// Module ID: 15371
// Function ID: 117038
// Name: YouAvatar
// Dependencies: []
// Exports: default

// Module 15371 (YouAvatar)
function YouAvatar(arg0) {
  const callback = React.useCallback(() => {
    const result = callback(closure_2[10]).trackYouTabAvatarPress();
    const obj = callback(closure_2[10]);
    const result1 = callback(closure_2[11]).showYouAccountActionSheet();
  }, []);
  let obj = arg1(dependencyMap[12]);
  const isAndroidResult = obj.isAndroid();
  obj = {};
  const merged = Object.assign(arg0);
  obj["onPress"] = callback;
  obj["importantForAccessibility"] = "no-hide-descendants";
  obj["accessibilityElementsHidden"] = isAndroidResult;
  obj["accessible"] = !isAndroidResult && undefined;
  return closure_13(importDefault(dependencyMap[13]), obj);
}
function YouScreenWidgetsBoardContainer(containerBackground) {
  let activeSection;
  let containerBorderColor;
  let gameWidgets;
  let isRefreshEnabled;
  let userId;
  containerBackground = containerBackground.containerBackground;
  ({ userId, gameWidgets, activeSection, isRefreshEnabled, containerBorderColor } = containerBackground);
  const tmp = importDefault(dependencyMap[14])();
  const items = [tmp.card, ];
  if (isRefreshEnabled) {
    let obj = { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 };
    items[1] = obj;
    let tmp2 = items;
  } else {
    obj = { backgroundColor: containerBackground };
    items[1] = obj;
    tmp2 = items;
  }
  obj = { style: tmp.profileContent, children: callback2(importDefault(dependencyMap[15]), obj1) };
  const obj1 = { userId, gameWidgets, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: tmp2 };
  return callback2(closure_6, obj);
}
function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  const arg1 = navigateToProfileCustomization;
  let dependencyMap;
  let callback;
  let obj = arg1(dependencyMap[16]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const importDefault = trackUserProfileAction;
  const ref = React.useRef(null);
  let obj1 = arg1(dependencyMap[17]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj1.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const tmp = importDefault(dependencyMap[14])();
  arg1(dependencyMap[19]);
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    if (!tmp4) {
      let items = [arg1(dependencyMap[18]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK];
    }
    const tmp10 = callback(tmp6(items), 2);
    dependencyMap = tmp11;
    const tmp14 = tmp10[0] === arg1(dependencyMap[18]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
    callback = tmp14;
    const items1 = [navigateToProfileCustomization, trackUserProfileAction, tmp14, tmp10[1]];
    obj = {};
    callback = React.useCallback(() => {
      trackUserProfileAction({ action: "EDIT_PROFILE" });
      const result = navigateToProfileCustomization(tmp11[10]).trackYouTabEditProfilePress();
      navigateToProfileCustomization();
      if (tmp14) {
        tmp11(constants.TAKE_ACTION);
      }
    }, items1);
    obj = { style: tmp.primaryButtons };
    obj1 = { ref, variant: "primary" };
    const obj2 = { size: "sm", color: importDefault(dependencyMap[23]).colors.WHITE };
    obj1.icon = callback2(arg1(dependencyMap[22]).PencilIcon, obj2);
    const intl = arg1(dependencyMap[24]).intl;
    obj1.text = intl.string(arg1(dependencyMap[24]).t.AAjhgi);
    obj1.onPress = callback;
    obj1.grow = true;
    obj.secondaryButton = callback2(arg1(dependencyMap[21]).Button, obj1);
    const items2 = [callback2(importDefault(dependencyMap[20]), obj), ];
    const obj3 = { targetRef: ref, visible: tmp14, markAsDismissed: tmp10[1] };
    items2[1] = callback2(importDefault(dependencyMap[25]), obj3);
    obj.children = items2;
    return callback3(closure_14, obj);
  }
  items = [];
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const useIsContentShown = arg1(dependencyMap[3]).useIsContentShown;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const UserProfileSections = arg1(dependencyMap[6]).UserProfileSections;
const UserProfileThemeTypes = arg1(dependencyMap[7]).UserProfileThemeTypes;
const ContentDismissActionType = arg1(dependencyMap[8]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[59]).fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default function YouScreenUserProfileContent(user) {
  let activeProfileTabSectionIndex;
  let avatarBackground;
  let fillHeight;
  let handleTabChange;
  let measureFill;
  let navigateToProfileCustomization;
  let pagerRef;
  let secondaryColor;
  let statusBackground;
  let style;
  let theme;
  user = user.user;
  const arg1 = user;
  const navigateToFriends = user.navigateToFriends;
  const importDefault = navigateToFriends;
  const navigateToPremium = user.navigateToPremium;
  const dependencyMap = navigateToPremium;
  const navigateToShop = user.navigateToShop;
  let callback = navigateToShop;
  const initialTab = user.initialTab;
  const React = initialTab;
  let flag = user.animateAvatar;
  ({ style, navigateToProfileCustomization } = user);
  if (flag === undefined) {
    flag = true;
  }
  let tmp;
  let navigation;
  let useIsContentShown;
  let closure_8;
  let closure_9;
  let UserProfileSections;
  let UserProfileThemeTypes;
  let ContentDismissActionType;
  let containerBorderColor;
  let enabled;
  let tmp14;
  let YouAvatar;
  let YouScreenWidgetsBoardContainer;
  let EditSection;
  let tmp17;
  let boardTabIndex;
  let wishlistTabIndex;
  let first1;
  let closure_23;
  let handlePageContentSize;
  let activeProfileTabSection;
  let setActiveProfileTabSection;
  let restoreActiveIndex;
  let tmp25;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  let closure_33;
  tmp = importDefault(dependencyMap[14])();
  let obj = arg1(dependencyMap[26]);
  navigation = obj.useNavigation();
  let obj1 = arg1(dependencyMap[16]);
  const trackUserProfileAction = obj1.useUserProfileAnalyticsContext().trackUserProfileAction;
  useIsContentShown = trackUserProfileAction;
  const tmp3 = importDefault(dependencyMap[27])(user.id);
  closure_8 = tmp3;
  let obj2 = arg1(dependencyMap[28]);
  const customStatusActivity = obj2.useCustomStatusActivity();
  closure_9 = customStatusActivity;
  let obj3 = arg1(dependencyMap[30]);
  const items = [closure_8];
  const stateFromStores = obj3.useStateFromStores(items, () => tmp3.getStatus());
  const tmp7 = importDefault(dependencyMap[31])("YouScreenUserProfileContent");
  UserProfileSections = tmp7;
  const tmp8 = importDefault(dependencyMap[32])({ user, displayProfile: tmp3 });
  const primaryColor = tmp8.primaryColor;
  UserProfileThemeTypes = tmp9;
  ({ theme, secondaryColor } = tmp8);
  let obj4 = arg1(dependencyMap[33]);
  const userProfileColors = obj4.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  ContentDismissActionType = containerBackground;
  containerBorderColor = userProfileColors.containerBorderColor;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const items1 = [trackUserProfileAction];
  const tmp5 = importDefault(dependencyMap[29])(tmp3);
  callback = React.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = user(navigateToPremium[11]).showYouAccountActionSheet();
  }, items1);
  let obj5 = arg1(dependencyMap[34]);
  enabled = obj5.useVirtualCurrencyMobileEnabled().enabled;
  const tmp13 = callback(React.useState(null), 2);
  const first = tmp13[0];
  tmp14 = tmp13[1];
  let obj7 = arg1(dependencyMap[35]);
  const shouldShowExpiringTrialOfferCard = obj7.useShouldShowExpiringTrialOfferCard();
  YouAvatar = shouldShowExpiringTrialOfferCard;
  let obj8 = arg1(dependencyMap[30]);
  const items2 = [closure_9];
  const stateFromStores1 = obj8.useStateFromStores(items2, () => customStatusActivity.getFirstWishlistId(user.id));
  YouScreenWidgetsBoardContainer = stateFromStores1;
  let obj9 = arg1(dependencyMap[36]);
  const gameWidgets = obj9.useGameWidgets(user.id);
  EditSection = gameWidgets;
  tmp17 = gameWidgets.length > 0;
  let obj10 = arg1(dependencyMap[37]);
  const profileTabIndices = obj10.useProfileTabIndices(tmp17, true);
  boardTabIndex = profileTabIndices.boardTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp19 = callback(React.useState(0), 2);
  first1 = tmp19[0];
  closure_23 = tmp19[1];
  const callback1 = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj11 = arg1(dependencyMap[38]);
  const pageHeights = obj11.usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const callback2 = React.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
  }, items3);
  const ref = React.useRef(null);
  const profileSectionTabs = arg1(dependencyMap[37]).useProfileSectionTabs({ initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, onTabChange: callback2 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  tmp25 = activeProfileTabSection === UserProfileSections.WISHLIST;
  const items4 = [customStatusActivity, tmp14];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback3 = React.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = navigateToFriends(navigateToPremium[39])();
    }
    tmp14(tmp2);
  }, items4);
  const items5 = [callback3];
  const effect = React.useEffect(() => {
    setImmediate(() => {
      callback();
    });
  }, items5);
  let labelResult;
  if (null != first) {
    labelResult = first.label();
  }
  const items6 = [containerBackground, containerBorderColor, tmp7, tmp, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp3, navigateToFriends];
  callback4 = React.useCallback(() => {
    const items = [tmp.card, ];
    if (tmp7) {
      let obj = { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 };
      items[1] = obj;
      let tmp2 = items;
      const tmp3 = containerBackground;
    } else {
      obj = { backgroundColor: containerBackground };
      items[1] = obj;
      tmp2 = items;
    }
    obj = { style: items1 };
    const items1 = [tmp.cards, tmp.profileContent];
    const obj1 = { navigateToPremium, style: tmp2 };
    const items2 = [containerBorderColor(navigateToFriends(navigateToPremium[40]), obj1), , , , , , , , , ];
    let tmp7 = !shouldShowExpiringTrialOfferCard;
    if (tmp7) {
      const obj2 = { navigateToPremium, navigateToShop, hasCustomProfileTheme: navigateToFriends };
      tmp7 = containerBorderColor(navigateToFriends(navigateToPremium[41]), obj2);
    }
    items2[1] = tmp7;
    let tmp14 = enabled;
    if (enabled) {
      const obj3 = { style: tmp2 };
      tmp14 = containerBorderColor(navigateToFriends(navigateToPremium[42]), obj3);
    }
    items2[2] = tmp14;
    const obj4 = { user, currentUser: user, style: tmp2 };
    items2[3] = containerBorderColor(navigateToFriends(navigateToPremium[43]), obj4);
    const obj5 = { userId: user.id, displayProfile: tmp3 };
    let tmp20;
    if (!tmp7) {
      tmp20 = tmp2;
    }
    obj5.style = tmp20;
    items2[4] = containerBorderColor(navigateToFriends(navigateToPremium[44]), obj5);
    let tmp21 = tmp7;
    if (tmp7) {
      tmp21 = containerBorderColor(navigateToFriends(navigateToPremium[45]), {});
    }
    items2[5] = tmp21;
    const obj6 = { userId: user.id };
    let tmp26;
    if (!tmp7) {
      tmp26 = tmp2;
    }
    obj6.style = tmp26;
    items2[6] = containerBorderColor(user(navigateToPremium[46]).UserProfileAccountConnectionsCard, obj6);
    const obj7 = { userId: user.id };
    let tmp28;
    if (!tmp7) {
      tmp28 = tmp2;
    }
    obj7.style = tmp28;
    items2[7] = containerBorderColor(user(navigateToPremium[46]).UserProfileApplicationRoleConnectionsCard, obj7);
    const obj8 = { userId: user.id, navigateToFriends, style: tmp2 };
    items2[8] = containerBorderColor(navigateToFriends(navigateToPremium[47]), obj8);
    const obj9 = { userId: user.id };
    let tmp31;
    const tmp18 = containerBorderColor;
    const tmp19 = navigateToFriends(navigateToPremium[44]);
    const tmp25 = containerBorderColor;
    const tmp27 = containerBorderColor;
    const tmp29 = containerBorderColor;
    const tmp5 = tmp14;
    const tmp6 = navigation;
    if (!tmp7) {
      tmp31 = tmp2;
    }
    obj9.style = tmp31;
    items2[9] = tmp29(navigateToFriends(navigateToPremium[48]), obj9);
    obj.children = items2;
    return tmp5(tmp6, obj);
  }, items6);
  const items7 = [tmp.profileContent, stateFromStores1, first1, tmp25, user.id];
  callback5 = React.useCallback(() => {
    let obj = { style: tmp.profileContent };
    if (null == stateFromStores1) {
      let tmp3Result = containerBorderColor(user(navigateToPremium[49]).WishlistEmptyState, {});
      const tmp14 = navigateToPremium;
    } else {
      obj = { wishlistId: stateFromStores1 };
      let tmp9;
      if (first1 > 0) {
        tmp9 = first1;
      }
      obj.containerWidth = tmp9;
      obj.isVisible = tmp25;
      tmp3Result = containerBorderColor(navigateToFriends(navigateToPremium[49]), obj);
      const tmp3 = containerBorderColor;
      const tmp6 = navigateToFriends(navigateToPremium[49]);
    }
    const items = [tmp3Result, ];
    obj = { userId: user.id, wishlistId: stateFromStores1 };
    let tmp17;
    if (first1 > 0) {
      tmp17 = first1;
    }
    obj.containerWidth = tmp17;
    items[1] = containerBorderColor(navigateToFriends(navigateToPremium[50]), obj);
    obj.children = items;
    return tmp14(navigation, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp17, boardTabIndex, wishlistTabIndex, user.id, gameWidgets, activeProfileTabSection, tmp7, containerBackground, containerBorderColor];
  const memo = React.useMemo(() => {
    let obj = { id: "main" };
    const intl = user(navigateToPremium[24]).intl;
    obj.label = intl.string(user(navigateToPremium[24]).t.LXw470);
    obj = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return callback(0, arg0, arg1);
      },
      children: callback4()
    };
    obj.page = containerBorderColor(tmp, obj);
    const items = [obj];
    if (tmp17) {
      obj = { id: "board" };
      const intl2 = user(navigateToPremium[24]).intl;
      obj.label = intl2.string(user(navigateToPremium[24]).t.laViwx);
      const obj1 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return callback(closure_20, arg0, arg1);
          }
      };
      const obj2 = { userId: user.id, gameWidgets, activeSection: activeProfileTabSection, isRefreshEnabled: user, containerBackground, containerBorderColor };
      obj1.children = containerBorderColor(stateFromStores1, obj2);
      obj.page = containerBorderColor(user, obj1, boardTabIndex);
      items.push(obj);
    }
    const obj3 = { id: "wishlist" };
    const intl3 = user(navigateToPremium[24]).intl;
    obj3.label = intl3.string(user(navigateToPremium[24]).t.7lZ31J);
    obj3.page = containerBorderColor(tmp, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return callback(closure_21, arg0, arg1);
      },
      children: callback5()
    }, wishlistTabIndex);
    items.push(obj3);
    return items;
  }, items8);
  const obj13 = arg1(dependencyMap[37]);
  obj = { pageWidth: first1, defaultIndex: activeProfileTabSectionIndex, itemSpacing: importDefault(dependencyMap[23]).space.PX_24, items: memo, onPageChange: handleTabChange };
  segmentedControlState = arg1(dependencyMap[51]).useSegmentedControlState(obj);
  const obj14 = arg1(dependencyMap[51]);
  const pagerFillHeight = arg1(dependencyMap[38]).usePagerFillHeight();
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = React.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const obj16 = arg1(dependencyMap[38]);
  const pagesHeightStyle = arg1(dependencyMap[38]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  closure_33 = React.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = React.useEffect(() => {
    closure_33.current = segmentedControlState.setActiveIndex;
  }, items10);
  const obj17 = arg1(dependencyMap[38]);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const focusEffect = arg1(dependencyMap[26]).useFocusEffect(React.useCallback(() => {
    if (undefined !== initialTab) {
      let num = 0;
      if (initialTab === tmp7.WISHLIST) {
        num = wishlistTabIndex;
      }
      const navigateToFriends = num;
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        if (closure_4 === constants.WISHLIST) {
          let MAIN = constants.WISHLIST;
        } else {
          MAIN = constants.MAIN;
        }
        closure_26(MAIN);
        ref.current(num, false, true);
        store.setParams({ initialTab: undefined });
      }, 80);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_0);
      }
      if (!store.isFocused()) {
        const parent = store.getParent();
        if (tmp5) {
          const obj = { initialTab: constants.MAIN };
          store.setParams(obj);
        }
        const tmp5 = null != parent && parent.isFocused();
      }
    };
  }, items11));
  obj = { style };
  obj1 = {};
  obj2 = { style: items12 };
  const items12 = [tmp.profileContentWrapper, { paddingTop: 0 }];
  obj3 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const items13 = [containerBorderColor(YouAvatar, obj3), , , ];
  obj4 = { ref, customStatusActivity, hasCustomProfileTheme: tmp9, style: items14, emojiOnlyStyle: tmp.emojiOnlyCustomStatusBubble, editEnabled: true };
  const items14 = [, ];
  ({ customStatusBubble: arr16[0], customStatusBubbleInset: arr16[1] } = tmp);
  obj4.placeholderText = labelResult;
  obj4.prompt = first;
  items13[1] = containerBorderColor(importDefault(dependencyMap[54]), obj4);
  obj5 = { style: items15 };
  const items15 = [, ];
  ({ primaryInfo: arr17[0], profileContent: arr17[1] } = tmp);
  const obj6 = { user };
  let pronouns;
  const obj18 = arg1(dependencyMap[26]);
  const tmp38 = containerBorderColor;
  const tmp39 = containerBorderColor;
  const tmp40 = tmp14;
  const tmp41 = navigation;
  const tmp42 = tmp14;
  const tmp43 = navigation;
  const tmp44 = containerBorderColor;
  if (null != tmp3) {
    pronouns = tmp3.pronouns;
  }
  obj6.pronouns = pronouns;
  obj6.badges = tmp5;
  obj6.badgeContainerBackground = containerBackground;
  obj6.onPressDisplayName = callback;
  const intl = arg1(dependencyMap[24]).intl;
  obj7 = {};
  const tmp45 = importDefault(dependencyMap[55]);
  obj7.status = arg1(dependencyMap[56]).getStatusLabel(stateFromStores);
  const obj27 = arg1(dependencyMap[56]);
  const intl2 = arg1(dependencyMap[24]).intl;
  obj6.displayNameAccessibilityHint = "" + intl.formatToPlainString(arg1(dependencyMap[24]).t.er+FRD, obj7) + ", " + intl2.string(arg1(dependencyMap[24]).t.C6COaT);
  obj6.themeType = UserProfileThemeTypes.YOU_SCREEN;
  obj6.showChevron = true;
  const items16 = [tmp44(tmp45, obj6), containerBorderColor(EditSection, { navigateToProfileCustomization })];
  obj5.children = items16;
  items13[2] = tmp42(tmp43, obj5);
  obj8 = { style: { flex: 1 }, onLayout: callback1 };
  obj9 = { style: tmp.profileTablist };
  obj10 = { state: segmentedControlState };
  let str;
  if (null != primaryColor) {
    str = "gradient-background";
  }
  obj10.variant = str;
  obj9.children = containerBorderColor(arg1(dependencyMap[57]).Tabs, obj10);
  const items17 = [containerBorderColor(navigation, obj9), ];
  obj11 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: containerBorderColor(arg1(dependencyMap[58]).SegmentedControlPages, { state: segmentedControlState }) };
  items17[1] = containerBorderColor(importDefault(dependencyMap[52]).View, obj11);
  obj8.children = items17;
  items13[3] = tmp14(navigation, obj8);
  obj2.children = items13;
  obj1.children = tmp40(tmp41, obj2);
  obj.children = tmp39(arg1(dependencyMap[53]).LayerScope, obj1);
  return tmp38(importDefault(dependencyMap[52]).View, obj);
};
