// Module ID: 12445
// Function ID: 12446
// Name: UserProfileApplicationWidgetCard
// Dependencies: [19, 17, 2186, 502, 21, 5140, 575, 12446, 12447, 12538, 12539, 12540, 12541, 504, 12448, 7391, 7544, 9397, 9421, 12542, 7388, 12545, 12378, 12248, 5842, 8984, 7436, 12546, 12562, 5751, 1113, 7043, 11215, 2]
// Exports: default

// Module 12445 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 575 */;
import _mod12448 from "module_12448" /* 12448 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { appIcon: size, header: obj2, editingHeader: obj3, refresh: obj4, divider: obj5, stillSyncing: obj6 };
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_4 };
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, zIndex: 1 };
obj4 = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
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
  let isEditing;
  let isLoading;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let layout;
  let layout2;
  let locale;
  let obj6;
  let obj9;
  let pending;
  let refresh;
  let rendererProps;
  let resolutionContext;
  let surfaceConfigs;
  let tmp26Result;
  let widget;
  userId = userId.userId;
  ({ widget, cardStyle, rendererProps, isEditing } = userId);
  if (isEditing === undefined) {
    isEditing = false;
  }
  dependencyMap = undefined;
  let token;
  const footer = userId.footer;
  let tmp = closure_10();
  let obj = userId(504);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = token.useMemo(() => {
    const obj = _mod12448;
    return obj.createCompactNumberFormat(stateFromStores);
  }, items1);
  const items2 = [AuthenticationStore];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj3 = userId(7391);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let str;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  let canonicalGameId;
  const useGame = userId(7544).useGame;
  userId(7544);
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = useGame(canonicalGameId).data;
  let id;
  const tmp11 = stateFromStores(9397);
  if (data != null) {
    id = data.id;
  }
  const obj4 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(9421).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp11Result = tmp11(obj4);
  dependencyMap = tmp11Result;
  let tmp14 = rendererProps;
  if (rendererProps == null) {
    tmp14 = tmp10(12542)(userId, widget.applicationId);
  }
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = tmp14);
  const tmp15 = stateFromStores(7388)(getOrFetchApplication);
  token = tmp15.token;
  ({ fetched, canStartAuthorization } = tmp15);
  const tmp16 = stateFromStores(12545)(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = stateFromStores(12378)(widget.applicationId));
  stateFromStores(12378)(widget.applicationId);
  const tmp18 = surfaceConfigs[userId(undefined, 12248).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp19 = surfaceConfigs[userId(undefined, 12248).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp20 = null;
  if (null != iconURL) {
    const obj5 = { source: obj6, style: tmp.appIcon };
    obj6 = { uri: iconURL };
    tmp20 = closure_8(tmp10(5842), obj5);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp22 = null != token;
        if (tmp22) {
          const _Array = Array;
          const arr = Array.from(userId(8984).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
          let someResult = arr.some((item) => {
            const scopes = token.scopes;
            return scopes.includes(item);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8984).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8984).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp22 = someResult;
        }
        if (fetched) {
          let tmp26Result2;
          if (canStartAuthorization) {
            tmp26Result2 = null;
          }
          return tmp26Result2;
        }
        const obj7 = { style: cardStyle, title: str, titleLeadingIcon: tmp20, trailingAction: tmp26Result, children: closure_9(closure_5, obj9) };
        tmp26Result = undefined;
        const tmp10Result = stateFromStores(7436);
        if (isEditing) {
          const obj8 = { widget };
          tmp26Result = tmp26(tmp10(12546), obj8);
        }
        obj9 = { style: tmp.stillSyncing, children: items3 };
        const obj10 = { size: "xs", color: stateFromStores(575).colors.TEXT_MUTED };
        const HourglassIcon = tmp2(12562).HourglassIcon;
        items3 = [closure_8(HourglassIcon, obj10), ];
        const obj11 = { variant: "body-sm/medium", color: "text-muted", children: intl.string(userId(1113).t.z5K4Uv) };
        const Text = tmp2(5751).Text;
        intl = tmp2(1113).intl;
        items3[1] = closure_8(Text, obj11);
        tmp26Result2 = tmp26(tmp10Result, obj7);
      }
    }
  }
  const tmp2Result2 = userId(12448);
  const result = tmp2Result2.bindResolveFieldValue(resolutionContext);
  const obj12 = {
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
    accessibilityLabel: str,
    children: items4
  };
  items4 = [tmp20, closure_8(userId(5751).Text, { variant: "body-sm/medium", color: "text-strong", lineClamp: 1, children: str })];
  const tmp34 = closure_9(closure_4, obj12);
  let tmp32Result = tmp34;
  if (isEditing) {
    const obj13 = { style: tmp.editingHeader, children: items5 };
    items5 = [tmp34, ];
    const obj14 = { widget };
    items5[1] = closure_8(stateFromStores(12546), obj14);
    tmp32Result = tmp32(closure_5, obj13);
  }
  if (tmp18 != null) {
    layout = tmp18.layout;
  }
  let tmp33Result = null;
  if (null != tmp18) {
    if (userId(12446).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj15 = { header: tmp32Result, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp33Result = tmp33(tmp10(12447), obj15);
    } else {
      tmp33Result = null;
      if (userId(12446).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj16 = { header: tmp32Result, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
        tmp33Result = tmp33(tmp10(12538), obj16);
      }
    }
  }
  if (tmp19 != null) {
    layout2 = tmp19.layout;
  }
  let tmp33Result2 = null;
  if (null != tmp19) {
    if (userId(12446).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj17 = { bottomConfig: tmp19, resolveFieldValue: result, numberFormat: memo };
      tmp33Result2 = tmp33(tmp10(12539), obj17);
    } else if (userId(12446).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj18 = { bottomConfig: tmp19, resolveFieldValue: result };
      tmp33Result2 = tmp33(tmp10(12540), obj18);
    } else {
      tmp33Result2 = null;
      if (userId(12446).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj19 = { bottomConfig: tmp19, resolveFieldValue: result };
        tmp33Result2 = tmp33(tmp10(12541), obj19);
      }
    }
  }
  let tmp32Result4 = null;
  if (null != tmp33Result) {
    tmp32Result4 = null;
    if (null != tmp33Result2) {
      const obj20 = { style: cardStyle, children: items6 };
      items6 = [tmp33Result, , , , ];
      const obj21 = { style: tmp.divider };
      const tmp10Result2 = stateFromStores(7436);
      items6[1] = closure_8(closure_5, obj21);
      items6[2] = tmp33Result2;
      let tmp32Result3 = null;
      if (true === tmp16) {
        tmp32Result3 = null;
        if (null == rendererProps) {
          const obj22 = { accessibilityRole: "button", accessibilityLabel: intl2.string(userId(1113).t.wzzjk9), hitSlop: 8, disabled: pending, onPress: refresh, style: tmp.refresh, children: items7 };
          const PressableOpacity = tmp2(7043).PressableOpacity;
          intl2 = tmp2(1113).intl;
          const obj23 = { size: "xs", color: stateFromStores(575).colors.TEXT_MUTED };
          const RetryIcon = tmp2(11215).RetryIcon;
          items7 = [closure_8(RetryIcon, obj23), ];
          const obj24 = { variant: "body-xs/medium", color: "text-muted", children: intl3.string(userId(1113).t.wzzjk9) };
          const Text2 = tmp2(5751).Text;
          intl3 = tmp2(1113).intl;
          items7[1] = closure_8(Text2, obj24);
          tmp32Result3 = tmp32(PressableOpacity, obj22);
        }
      }
      items6[3] = tmp32Result3;
      items6[4] = footer;
      tmp32Result4 = tmp32(tmp10Result2, obj20);
    }
  }
  return tmp32Result4;
};
