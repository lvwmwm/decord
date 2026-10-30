// Module ID: 12076
// Function ID: 12077
// Name: UserProfileApplicationWidgetCard
// Dependencies: [19, 17, 2063, 502, 21, 5009, 575, 12077, 12078, 12169, 12170, 12171, 12172, 504, 12079, 7324, 7474, 9296, 9320, 12173, 7321, 12176, 12177, 12045, 5712, 8901, 7370, 12181, 5619, 1114, 6974, 11064, 2]
// Exports: default

// Module 12076 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 575 */;
import _mod12079 from "module_12079" /* 12079 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
let size;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { appIcon: size, header: obj2, refresh: obj3, divider: obj4, stillSyncing: obj5 };
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj3 = { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 };
obj4 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
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
  let rendererProps;
  let resolutionContext;
  let surfaceConfigs;
  let widget;
  userId = userId.userId;
  ({ widget, cardStyle, rendererProps } = userId);
  dependencyMap = undefined;
  let token;
  let tmp = closure_10();
  let obj = userId(504);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores];
  const memo = token.useMemo(() => {
    const obj = _mod12079;
    return obj.createCompactNumberFormat(stateFromStores);
  }, items1);
  const items2 = [AuthenticationStore];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj3 = userId(7324);
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
  const useGame = userId(7474).useGame;
  userId(7474);
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = useGame(canonicalGameId).data;
  let id;
  const tmp11 = stateFromStores(9296);
  if (data != null) {
    id = data.id;
  }
  const obj4 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(9320).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp11Result = tmp11(obj4);
  dependencyMap = tmp11Result;
  let tmp14 = rendererProps;
  if (rendererProps == null) {
    tmp14 = tmp10(12173)(userId, widget.applicationId);
  }
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = tmp14);
  const tmp15 = stateFromStores(7321)(getOrFetchApplication);
  token = tmp15.token;
  ({ fetched, canStartAuthorization } = tmp15);
  const tmp16 = stateFromStores(12176)(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = stateFromStores(12177)(widget.applicationId));
  stateFromStores(12177)(widget.applicationId);
  const tmp18 = surfaceConfigs[userId(undefined, 12045).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp19 = surfaceConfigs[userId(undefined, 12045).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp20 = null;
  if (null != iconURL) {
    const obj5 = { source: obj6, style: tmp.appIcon };
    obj6 = { uri: iconURL };
    tmp20 = closure_8(tmp10(5712), obj5);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp22 = null != token;
        if (tmp22) {
          const _Array = Array;
          const arr = Array.from(userId(8901).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
          let someResult = arr.some((item) => {
            const scopes = token.scopes;
            return scopes.includes(item);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8901).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8901).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
          }
          tmp22 = someResult;
        }
        if (fetched) {
          let tmp25;
          if (canStartAuthorization) {
            tmp25 = null;
          }
          return tmp25;
        }
        const obj7 = { style: cardStyle, title: str, titleLeadingIcon: tmp20, children: closure_9(closure_5, obj8) };
        obj8 = { style: tmp.stillSyncing, children: items3 };
        const obj9 = { size: "xs", color: stateFromStores(575).colors.TEXT_MUTED };
        const tmp10Result = stateFromStores(7370);
        const HourglassIcon = tmp2(12181).HourglassIcon;
        items3 = [closure_8(HourglassIcon, obj9), ];
        const obj10 = { variant: "text-sm/medium", color: "text-muted", children: intl.string(userId(1114).t.z5K4Uv) };
        const Text = tmp2(5619).Text;
        intl = tmp2(1114).intl;
        items3[1] = closure_8(Text, obj10);
        tmp25 = closure_8(tmp10Result, obj7);
      }
    }
  }
  const tmp2Result2 = userId(12079);
  const result = tmp2Result2.bindResolveFieldValue(resolutionContext);
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
    accessibilityLabel: str,
    children: items4
  };
  items4 = [tmp20, closure_8(userId(5619).Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: str })];
  const tmp33 = closure_9(closure_4, obj11);
  if (tmp18 != null) {
    layout = tmp18.layout;
  }
  let tmp32Result = null;
  if (null != tmp18) {
    if (userId(12077).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj12 = { header: tmp33, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp32Result = tmp32(tmp10(12078), obj12);
    } else {
      tmp32Result = null;
      if (userId(12077).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj13 = { header: tmp33, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
        tmp32Result = tmp32(tmp10(12169), obj13);
      }
    }
  }
  if (tmp19 != null) {
    layout2 = tmp19.layout;
  }
  let tmp32Result2 = null;
  if (null != tmp19) {
    if (userId(12077).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj14 = { bottomConfig: tmp19, resolveFieldValue: result, numberFormat: memo };
      tmp32Result2 = tmp32(tmp10(12170), obj14);
    } else if (userId(12077).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj15 = { bottomConfig: tmp19, resolveFieldValue: result };
      tmp32Result2 = tmp32(tmp10(12171), obj15);
    } else {
      tmp32Result2 = null;
      if (userId(12077).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj16 = { bottomConfig: tmp19, resolveFieldValue: result };
        tmp32Result2 = tmp32(tmp10(12172), obj16);
      }
    }
  }
  let tmp31Result2 = null;
  if (null != tmp32Result) {
    tmp31Result2 = null;
    if (null != tmp32Result2) {
      const obj17 = { style: cardStyle, children: items5 };
      items5 = [tmp32Result, , , ];
      const obj18 = { style: tmp.divider };
      const tmp10Result2 = stateFromStores(7370);
      items5[1] = closure_8(closure_5, obj18);
      items5[2] = tmp32Result2;
      let tmp31Result = null;
      if (true === tmp16) {
        tmp31Result = null;
        if (null == rendererProps) {
          const obj19 = { accessibilityRole: "button", accessibilityLabel: intl2.string(userId(1114).t.wzzjk9), hitSlop: 8, disabled: pending, onPress: refresh, style: tmp.refresh, children: items6 };
          const PressableOpacity = tmp2(6974).PressableOpacity;
          intl2 = tmp2(1114).intl;
          const obj20 = { size: "xs", color: stateFromStores(575).colors.TEXT_MUTED };
          const RetryIcon = tmp2(11064).RetryIcon;
          items6 = [closure_8(RetryIcon, obj20), ];
          const obj21 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(userId(1114).t.wzzjk9) };
          const Text2 = tmp2(5619).Text;
          intl3 = tmp2(1114).intl;
          items6[1] = closure_8(Text2, obj21);
          tmp31Result = tmp31(PressableOpacity, obj19);
        }
      }
      items5[3] = tmp31Result;
      tmp31Result2 = tmp31(tmp10Result2, obj17);
    }
  }
  return tmp31Result2;
};
