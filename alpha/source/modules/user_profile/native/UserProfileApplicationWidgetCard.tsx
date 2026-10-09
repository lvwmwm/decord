// Module ID: 13192
// Function ID: 13193
// Name: UserProfileApplicationWidgetCard
// Dependencies: [19, 17, 2128, 502, 21, 5091, 587, 13193, 13194, 13286, 13287, 13288, 13289, 558, 576, 504, 13195, 6854, 7002, 8859, 8860, 13290, 6851, 12288, 13296, 13278, 6163, 8441, 13186, 13077, 5087, 1126, 6897, 6191, 12573, 2]

// Module 13192 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 587 */;
import _mod13195 from "module_13195" /* 13195 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileApplicationWidgetCard(userId) {
  let canStartAuthorization;
  let cardStyle;
  let closure_1;
  let fetched;
  let hasIdentity;
  let isLoading;
  let items2;
  let locale;
  let obj5;
  let obj6;
  let pending;
  let refresh;
  let rendererProps;
  let resolutionContext;
  let surfaceConfigs;
  let tmp11;
  let tmp13;
  let tmp5;
  let tmp6;
  let token;
  let widget;
  let tmp = userId;
  const obj = userId(token[14]);
  const cResult = obj.c(67);
  userId = userId.userId;
  ({ widget, cardStyle, rendererProps } = userId);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function u() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(token[15]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    const tmpResult6 = tmp(token[16]);
    const compactNumberFormat = tmpResult6.createCompactNumberFormat(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = compactNumberFormat;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AuthenticationStore];
    cResult[4] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== userId) {
    class E {
      constructor() {
        return AuthenticationStore.getId() === userId;
      }
    }
    cResult[5] = userId;
    cResult[6] = E;
    tmp13 = E;
  } else {
    class E {
      constructor() {
        return AuthenticationStore.getId() === userId;
      }
    }
  }
  const tmpResult7 = tmp(token[15]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp11, tmp13);
  const tmpResult8 = tmp(token[17]);
  const getOrFetchApplication = tmpResult8.useGetOrFetchApplication(widget.applicationId);
  if (cResult[7] !== getOrFetchApplication) {
    class E {
      constructor() {
        return AuthenticationStore.getId() === userId;
      }
    }
    let iconURL;
    if (getOrFetchApplication != null) {
      class E {
        constructor() {
          return AuthenticationStore.getId() === userId;
        }
      }
      iconURL = getOrFetchApplication.getIconURL(16);
    }
    cResult[7] = getOrFetchApplication;
    cResult[8] = iconURL;
  } else {
    class E {
      constructor() {
        return AuthenticationStore.getId() === userId;
      }
    }
  }
  if (cResult[9] !== getOrFetchApplication) {
    class E {
      constructor() {
        return AuthenticationStore.getId() === userId;
      }
    }
    if (getOrFetchApplication != null) {
      class E {
        constructor() {
          return AuthenticationStore.getId() === userId;
        }
      }
    }
    cResult[9] = getOrFetchApplication;
    cResult[10] = undefined;
  } else {
    class E {
      constructor() {
        return AuthenticationStore.getId() === userId;
      }
    }
  }
  const tmpResult9 = tmp(token[18]);
  if (tmpResult9.useGame(tmp17).data != null) {
    class E {
      constructor() {
        return AuthenticationStore.getId() === userId;
      }
    }
  }
  if (cResult[11] === undefined) {
    class E {
      constructor() {
        return AuthenticationStore.getId() === userId;
      }
    }
    const tmp21 = require("useOpenGameProfileModal")(obj6);
    importDefault = tmp21;
    const tmp22 = rendererProps;
    if (rendererProps == null) {
      class E {
        constructor() {
          return AuthenticationStore.getId() === userId;
        }
      }
    }
    ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = tmp22);
    const tmp23 = require("useStartAuthorize")(getOrFetchApplication);
    token = tmp23.token;
    ({ fetched, canStartAuthorization } = tmp23);
    require("useIsOwnedConjureApplication")(widget.applicationId, stateFromStores1);
    ({ pending, refresh } = require("useApplicationWidgetRefresh")(widget.applicationId));
    require("useApplicationWidgetRefresh")(widget.applicationId);
    surfaceConfigs[tmp(undefined, token[25]).ApplicationWidgetConfigSurface.WIDGET_TOP];
    const tmp27 = surfaceConfigs[tmp(undefined, token[25]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
    if (cResult[14] === tmp15) {
      class E {
        constructor() {
          return AuthenticationStore.getId() === userId;
        }
      }
      if (stateFromStores1) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      if (cResult[28] === tmp27) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      const tmpResult10 = tmp(token[16]);
      const result = tmpResult10.bindResolveFieldValue(resolutionContext);
      const header = tmp4.header;
      if (cResult[38] !== tmp21) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
        cResult[38] = tmp21;
        cResult[39] = tmp32;
      } else {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      if (cResult[40] !== widget) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
        const widgetTitle = obj12.getWidgetTitle(widget);
        cResult[40] = widget;
        cResult[41] = widgetTitle;
      } else {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      if (cResult[42] !== widget) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
        const widgetTitle1 = obj13.getWidgetTitle(widget);
        cResult[42] = widget;
        cResult[43] = widgetTitle1;
      } else {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      if (cResult[44] !== tmp36) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
        const obj2 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: tmp36 };
        cResult[44] = tmp36;
        cResult[45] = closure_8(tmp(token[30]).Text, obj2);
        const tmp39 = closure_8(tmp(token[30]).Text, obj2);
      } else {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      if (cResult[46] === tmp4.header) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      const obj3 = { style: header, onPress: tmp31, disabled: null == tmp21, accessibilityRole: "button", accessibilityLabel: tmp34, children: items2 };
      items2 = [tmp28, tmp38];
      cResult[46] = tmp4.header;
      cResult[47] = tmp31;
      cResult[48] = null == tmp21;
      cResult[49] = tmp34;
      cResult[50] = tmp38;
      cResult[51] = tmp28;
      cResult[52] = closure_9(closure_4, obj3);
      const tmp43 = closure_9(closure_4, obj3);
    }
    let tmp29 = null;
    if (null != tmp15) {
      class E {
        constructor() {
          return AuthenticationStore.getId() === userId;
        }
      }
      const obj4 = { source: obj5, style: tmp4.appIcon };
      obj5 = { uri: tmp15 };
      tmp29 = closure_8(tmp20(tmp2[26]), obj4);
    }
    cResult[14] = tmp15;
    cResult[15] = tmp4;
    cResult[16] = tmp29;
  }
  obj6 = { location: "UserProfileApplicationWidgetCard", applicationId: undefined, source: tmp(token[19]).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  cResult[11] = undefined;
  cResult[12] = userId;
  cResult[13] = obj6;
}) : (function UserProfileApplicationWidgetCard(userId) {
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
  let tmp2Result5;
  let tmp2Result7;
  let tmp2Result8;
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
    const obj = _mod13195;
    return obj.createCompactNumberFormat(stateFromStores);
  }, items1);
  const items2 = [AuthenticationStore];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj3 = userId(6854);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(widget.applicationId);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(16);
  }
  let canonicalGameId;
  const useGame = userId(7002).useGame;
  userId(7002);
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = useGame(canonicalGameId).data;
  let id;
  const tmp11 = stateFromStores(8860);
  if (data != null) {
    id = data.id;
  }
  const obj4 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(8859).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp11Result = tmp11(obj4);
  dependencyMap = tmp11Result;
  let tmp14 = rendererProps;
  if (rendererProps == null) {
    tmp14 = tmp10(13290)(userId, widget.applicationId);
  }
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = tmp14);
  const tmp15 = stateFromStores(6851)(getOrFetchApplication);
  token = tmp15.token;
  ({ fetched, canStartAuthorization } = tmp15);
  const tmp16 = stateFromStores(12288)(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = stateFromStores(13296)(widget.applicationId));
  stateFromStores(13296)(widget.applicationId);
  const tmp18 = surfaceConfigs[userId(undefined, 13278).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp19 = surfaceConfigs[userId(undefined, 13278).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp20 = null;
  if (null != iconURL) {
    const obj5 = { source: obj6, style: tmp.appIcon };
    obj6 = { uri: iconURL };
    tmp20 = closure_8(tmp10(6163), obj5);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp22 = null != token;
        if (tmp22) {
          const _Array = Array;
          const arr = Array.from(userId(8441).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
          let someResult = arr.some((item) => {
            const scopes = token.scopes;
            return scopes.includes(item);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8441).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8441).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
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
        const obj7 = { style: cardStyle, title: tmp2Result5.getWidgetTitle(widget), titleLeadingIcon: tmp20, children: closure_9(closure_5, obj8) };
        const tmp10Result = stateFromStores(6897);
        obj8 = { style: tmp.stillSyncing, children: items3 };
        tmp2Result5 = userId(13186);
        const obj9 = { size: "xs", color: stateFromStores(587).colors.TEXT_MUTED };
        const HourglassIcon = tmp2(13077).HourglassIcon;
        items3 = [closure_8(HourglassIcon, obj9), ];
        const obj10 = { variant: "text-sm/medium", color: "text-muted", children: intl.string(userId(1126).t.z5K4Uv) };
        const Text = tmp2(5087).Text;
        intl = tmp2(1126).intl;
        items3[1] = closure_8(Text, obj10);
        tmp25 = closure_8(tmp10Result, obj7);
      }
    }
  }
  const tmp2Result6 = userId(13195);
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
  tmp2Result7 = userId(13186);
  const obj12 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: tmp2Result8.getWidgetTitle(widget) };
  const Text2 = tmp2(5087).Text;
  tmp2Result8 = userId(13186);
  items4[1] = closure_8(Text2, obj12);
  const tmp33 = closure_9(closure_4, obj11);
  if (tmp18 != null) {
    layout = tmp18.layout;
  }
  let tmp32Result = null;
  if (null != tmp18) {
    if (userId(13193).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj13 = { header: tmp33, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp32Result = tmp32(tmp10(13194), obj13);
    } else {
      tmp32Result = null;
      if (userId(13193).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj14 = { header: tmp33, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
        tmp32Result = tmp32(tmp10(13286), obj14);
      }
    }
  }
  if (tmp19 != null) {
    layout2 = tmp19.layout;
  }
  let tmp32Result2 = null;
  if (null != tmp19) {
    if (userId(13193).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj15 = { bottomConfig: tmp19, resolveFieldValue: result, numberFormat: memo };
      tmp32Result2 = tmp32(tmp10(13287), obj15);
    } else if (userId(13193).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj16 = { bottomConfig: tmp19, resolveFieldValue: result };
      tmp32Result2 = tmp32(tmp10(13288), obj16);
    } else {
      tmp32Result2 = null;
      if (userId(13193).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj17 = { bottomConfig: tmp19, resolveFieldValue: result };
        tmp32Result2 = tmp32(tmp10(13289), obj17);
      }
    }
  }
  let tmp31Result2 = null;
  if (null != tmp32Result) {
    tmp31Result2 = null;
    if (null != tmp32Result2) {
      const obj18 = { style: cardStyle, children: items5 };
      items5 = [tmp32Result, , , ];
      const obj19 = { style: tmp.divider };
      const tmp10Result2 = stateFromStores(6897);
      items5[1] = closure_8(closure_5, obj19);
      items5[2] = tmp32Result2;
      let tmp31Result = null;
      if (true === tmp16) {
        tmp31Result = null;
        if (null == rendererProps) {
          const obj20 = { accessibilityRole: "button", accessibilityLabel: intl2.string(userId(1126).t.wzzjk9), hitSlop: 8, disabled: pending, onPress: refresh, style: tmp.refresh, children: items6 };
          const PressableOpacity = tmp2(6191).PressableOpacity;
          intl2 = tmp2(1126).intl;
          const obj21 = { size: "xs", color: stateFromStores(587).colors.TEXT_MUTED };
          const RetryIcon = tmp2(12573).RetryIcon;
          items6 = [closure_8(RetryIcon, obj21), ];
          const obj22 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(userId(1126).t.wzzjk9) };
          const Text3 = tmp2(5087).Text;
          intl3 = tmp2(1126).intl;
          items6[1] = closure_8(Text3, obj22);
          tmp31Result = tmp31(PressableOpacity, obj20);
        }
      }
      items5[3] = tmp31Result;
      tmp31Result2 = tmp31(tmp10Result2, obj18);
    }
  }
  return tmp31Result2;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default tmp5;
