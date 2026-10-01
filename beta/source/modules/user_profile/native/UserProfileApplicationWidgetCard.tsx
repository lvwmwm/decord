// Module ID: 8387
// Function ID: 8388
// Name: UserProfileApplicationWidgetCard
// Dependencies: [19, 17, 2112, 502, 21, 4836, 576, 8388, 8389, 8481, 8482, 8483, 8484, 504, 8390, 6589, 6727, 8128, 8139, 8485, 6586, 8494, 12452, 8473, 7787, 6628, 7038, 12456, 4832, 1115, 5435, 9640, 2]
// Exports: default

// Module 8387 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 576 */;
import _mod8390 from "module_8390" /* 8390 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { appIcon: size, header: obj2, refresh: obj3, divider: obj4, stillSyncing: obj5 };
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj3 = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
obj4 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  let canStartAuthorization;
  let cardStyle;
  let closure_2;
  let fetched;
  let hasIdentity;
  let intl;
  let intl2;
  let intl3;
  let isLoading;
  let items3;
  let items4;
  let items5;
  let items6;
  let layout;
  let layout2;
  let locale;
  let obj6;
  let obj8;
  let pending;
  let refresh;
  let resolutionContext;
  let surfaceConfigs;
  let tmp2Result5;
  let tmp2Result7;
  let tmp2Result8;
  let widget;
  userId = userId.userId;
  ({ widget, cardStyle } = userId);
  dependencyMap = undefined;
  let token;
  let tmp = closure_11();
  let obj = userId(504);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = token.useMemo(() => {
    const obj = _mod8390;
    return obj.createCompactNumberFormat(stateFromStores);
  }, items1);
  const items2 = [AuthenticationStore];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj3 = userId(6589);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let canonicalGameId;
  const useGame = userId(6727).useGame;
  userId(6727);
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = useGame(canonicalGameId).data;
  let id;
  const tmp11 = stateFromStores(8128);
  if (data != null) {
    id = data.id;
  }
  const obj4 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(8139).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp11Result = tmp11(obj4);
  dependencyMap = tmp11Result;
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = stateFromStores(8485)(userId, widget.applicationId));
  stateFromStores(8485)(userId, widget.applicationId);
  const tmp15 = stateFromStores(6586)(getOrFetchApplication);
  token = tmp15.token;
  ({ fetched, canStartAuthorization } = tmp15);
  const tmp16 = stateFromStores(8494)(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = stateFromStores(12452)(widget.applicationId));
  stateFromStores(12452)(widget.applicationId);
  const tmp18 = surfaceConfigs[userId(undefined, 8473).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp19 = surfaceConfigs[userId(undefined, 8473).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp20 = null;
  if (null != iconURL) {
    const obj5 = { source: obj6, style: tmp.appIcon };
    obj6 = { uri: iconURL };
    tmp20 = closure_9(closure_4, obj5);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp23 = null != token;
        if (tmp23) {
          const _Array = Array;
          const arr = Array.from(userId(7787).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
          let someResult = arr.some((item) => {
            const scopes = token.scopes;
            return scopes.includes(item);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(7787).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(7787).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp23 = someResult;
        }
        if (fetched) {
          let tmp26;
          if (canStartAuthorization) {
            tmp26 = null;
          }
          return tmp26;
        }
        const obj7 = { style: cardStyle, title: tmp2Result5.getWidgetTitle(widget), titleLeadingIcon: tmp20, children: closure_10(closure_6, obj8) };
        const tmp10Result = stateFromStores(6628);
        obj8 = { style: tmp.stillSyncing, children: items3 };
        tmp2Result5 = userId(7038);
        const obj9 = { size: "xs", color: stateFromStores(576).colors.TEXT_MUTED };
        const HourglassIcon = tmp2(12456).HourglassIcon;
        items3 = [closure_9(HourglassIcon, obj9), ];
        const obj10 = { variant: "text-sm/medium", color: "text-muted", children: intl.string(userId(1115).t.z5K4Uv) };
        const Text = tmp2(4832).Text;
        intl = tmp2(1115).intl;
        items3[1] = closure_9(Text, obj10);
        tmp26 = closure_9(tmp10Result, obj7);
      }
    }
  }
  const tmp2Result6 = userId(8390);
  const result = tmp2Result6.bindResolveFieldValue(resolutionContext);
  const obj11 = {
    style: tmp.header,
    onPress() {
      let tmp;
      if (closure_2 != null) {
        tmp = closure_2();
      }
      return tmp;
    },
    disabled: null == tmp11Result,
    accessibilityRole: "button",
    accessibilityLabel: tmp2Result7.getWidgetTitle(widget),
    children: items4
  };
  items4 = [tmp20, ];
  tmp2Result7 = userId(7038);
  const obj12 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: tmp2Result8.getWidgetTitle(widget) };
  const Text2 = tmp2(4832).Text;
  tmp2Result8 = userId(7038);
  items4[1] = closure_9(Text2, obj12);
  const tmp34 = closure_10(closure_5, obj11);
  if (tmp18 != null) {
    layout = tmp18.layout;
  }
  let tmp33Result = null;
  if (null != tmp18) {
    if (userId(8388).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj13 = { header: tmp34, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp33Result = tmp33(tmp10(8389), obj13);
    } else {
      tmp33Result = null;
      if (userId(8388).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj14 = { header: tmp34, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
        tmp33Result = tmp33(tmp10(8481), obj14);
      }
    }
  }
  if (tmp19 != null) {
    layout2 = tmp19.layout;
  }
  let tmp33Result2 = null;
  if (null != tmp19) {
    if (userId(8388).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj15 = { bottomConfig: tmp19, resolveFieldValue: result, numberFormat: memo };
      tmp33Result2 = tmp33(tmp10(8482), obj15);
    } else if (userId(8388).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj16 = { bottomConfig: tmp19, resolveFieldValue: result };
      tmp33Result2 = tmp33(tmp10(8483), obj16);
    } else {
      tmp33Result2 = null;
      if (userId(8388).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj17 = { bottomConfig: tmp19, resolveFieldValue: result };
        tmp33Result2 = tmp33(tmp10(8484), obj17);
      }
    }
  }
  let tmp32Result2 = null;
  if (null != tmp33Result) {
    tmp32Result2 = null;
    if (null != tmp33Result2) {
      const obj18 = { style: cardStyle, children: items5 };
      items5 = [tmp33Result, , , ];
      const obj19 = { style: tmp.divider };
      const tmp10Result2 = stateFromStores(6628);
      items5[1] = closure_9(closure_6, obj19);
      items5[2] = tmp33Result2;
      let tmp32Result = null;
      if (true === tmp16) {
        const obj20 = { accessibilityRole: "button", accessibilityLabel: intl2.string(userId(1115).t.wzzjk9), hitSlop: 8, disabled: pending, onPress: refresh, style: tmp.refresh, children: items6 };
        const PressableOpacity = tmp2(5435).PressableOpacity;
        intl2 = tmp2(1115).intl;
        const obj21 = { size: "xs", color: stateFromStores(576).colors.TEXT_MUTED };
        const RetryIcon = tmp2(9640).RetryIcon;
        items6 = [closure_9(RetryIcon, obj21), ];
        const obj22 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(userId(1115).t.wzzjk9) };
        const Text3 = tmp2(4832).Text;
        intl3 = tmp2(1115).intl;
        items6[1] = closure_9(Text3, obj22);
        tmp32Result = tmp32(PressableOpacity, obj20);
      }
      items5[3] = tmp32Result;
      tmp32Result2 = tmp32(tmp10Result2, obj18);
    }
  }
  return tmp32Result2;
};
