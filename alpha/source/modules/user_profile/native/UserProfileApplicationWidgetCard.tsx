// Module ID: 11906
// Function ID: 11907
// Name: UserProfileApplicationWidgetCard
// Dependencies: [19, 17, 2068, 502, 21, 4971, 587, 11907, 11908, 11999, 12000, 12001, 12002, 558, 576, 504, 11909, 7257, 7406, 9245, 9246, 12003, 7254, 12006, 12007, 11872, 5669, 8827, 12011, 5234, 1128, 7303, 6908, 11790, 2]

// Module 11906 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 587 */;
import _mod11909 from "module_11909" /* 11909 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2068 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
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
  let tmp18;
  let tmp5;
  let tmp6;
  let token;
  let widget;
  let tmp = userId;
  const obj = userId(token[14]);
  const cResult = obj.c(61);
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
  if (getOrFetchApplication != null) {
    class E {
      constructor() {
        return AuthenticationStore.getId() === userId;
      }
    }
  }
  if (undefined == null) {
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
    cResult[10] = tmp19;
    tmp18 = tmp19;
  } else {
    class E {
      constructor() {
        return AuthenticationStore.getId() === userId;
      }
    }
  }
  const tmpResult9 = tmp(token[18]);
  if (tmpResult9.useGame(tmp18).data != null) {
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
    const tmp22 = require("useOpenGameProfileModal")(obj6);
    importDefault = tmp22;
    const tmp23 = rendererProps;
    if (rendererProps == null) {
      class E {
        constructor() {
          return AuthenticationStore.getId() === userId;
        }
      }
    }
    ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = tmp23);
    const tmp24 = require("useStartAuthorize")(getOrFetchApplication);
    token = tmp24.token;
    ({ fetched, canStartAuthorization } = tmp24);
    require("useIsOwnedConjureApplication")(widget.applicationId, stateFromStores1);
    ({ pending, refresh } = require("useApplicationWidgetRefresh")(widget.applicationId));
    require("useApplicationWidgetRefresh")(widget.applicationId);
    surfaceConfigs[tmp(undefined, token[25]).ApplicationWidgetConfigSurface.WIDGET_TOP];
    surfaceConfigs[tmp(undefined, token[25]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
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
      if (cResult[26] === undefined) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      const tmpResult10 = tmp(token[16]);
      const result = tmpResult10.bindResolveFieldValue(resolutionContext);
      if (cResult[36] !== tmp22) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
        cResult[36] = tmp22;
        cResult[37] = tmp33;
      } else {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      if (cResult[38] !== undefined) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
        const obj2 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: undefined };
        cResult[38] = undefined;
        cResult[39] = closure_8(tmp(token[29]).Text, obj2);
        const tmp36 = closure_8(tmp(token[29]).Text, obj2);
      } else {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      if (cResult[40] === undefined) {
        class E {
          constructor() {
            return AuthenticationStore.getId() === userId;
          }
        }
      }
      const obj3 = { style: tmp4.header, onPress: tmp32, disabled: null == tmp22, accessibilityRole: "button", accessibilityLabel: undefined, children: items2 };
      items2 = [tmp29, tmp35];
      cResult[40] = undefined;
      cResult[41] = tmp4.header;
      cResult[42] = tmp32;
      cResult[43] = null == tmp22;
      cResult[44] = tmp35;
      cResult[45] = tmp29;
      cResult[46] = closure_9(closure_4, obj3);
      const tmp40 = closure_9(closure_4, obj3);
    }
    let tmp30 = null;
    if (null != tmp15) {
      class E {
        constructor() {
          return AuthenticationStore.getId() === userId;
        }
      }
      const obj4 = { source: obj5, style: tmp4.appIcon };
      obj5 = { uri: tmp15 };
      tmp30 = closure_8(tmp21(tmp2[26]), obj4);
    }
    cResult[14] = tmp15;
    cResult[15] = tmp4;
    cResult[16] = tmp30;
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
    const obj = _mod11909;
    return obj.createCompactNumberFormat(stateFromStores);
  }, items1);
  const items2 = [AuthenticationStore];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj3 = userId(7257);
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
  const useGame = userId(7406).useGame;
  userId(7406);
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = useGame(canonicalGameId).data;
  let id;
  const tmp11 = stateFromStores(9246);
  if (data != null) {
    id = data.id;
  }
  const obj4 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: userId(9245).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp11Result = tmp11(obj4);
  dependencyMap = tmp11Result;
  let tmp14 = rendererProps;
  if (rendererProps == null) {
    tmp14 = tmp10(12003)(userId, widget.applicationId);
  }
  ({ surfaceConfigs, resolutionContext, isLoading, hasIdentity } = tmp14);
  const tmp15 = stateFromStores(7254)(getOrFetchApplication);
  token = tmp15.token;
  ({ fetched, canStartAuthorization } = tmp15);
  const tmp16 = stateFromStores(12006)(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = stateFromStores(12007)(widget.applicationId));
  stateFromStores(12007)(widget.applicationId);
  const tmp18 = surfaceConfigs[userId(undefined, 11872).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp19 = surfaceConfigs[userId(undefined, 11872).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp20 = null;
  if (null != iconURL) {
    const obj5 = { source: obj6, style: tmp.appIcon };
    obj6 = { uri: iconURL };
    tmp20 = closure_8(tmp10(5669), obj5);
  }
  if (stateFromStores1) {
    if (!isLoading) {
      if (!hasIdentity) {
        let tmp22 = null != token;
        if (tmp22) {
          const _Array = Array;
          const arr = Array.from(userId(8827).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
          let someResult = arr.some((item) => {
            const scopes = token.scopes;
            return scopes.includes(item);
          });
          if (!someResult) {
            let scopes = token.scopes;
            someResult = scopes.includes(tmp2(8827).OAuth2Scopes.SDK_SOCIAL_LAYER);
          }
          if (!someResult) {
            const scopes2 = token.scopes;
            someResult = scopes2.includes(tmp2(8827).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
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
        const obj9 = { size: "xs", color: stateFromStores(587).colors.TEXT_MUTED };
        const tmp10Result = stateFromStores(7303);
        const HourglassIcon = tmp2(12011).HourglassIcon;
        items3 = [closure_8(HourglassIcon, obj9), ];
        const obj10 = { variant: "text-sm/medium", color: "text-muted", children: intl.string(userId(1128).t.z5K4Uv) };
        const Text = tmp2(5234).Text;
        intl = tmp2(1128).intl;
        items3[1] = closure_8(Text, obj10);
        tmp25 = closure_8(tmp10Result, obj7);
      }
    }
  }
  const tmp2Result2 = userId(11909);
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
  items4 = [tmp20, closure_8(userId(5234).Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: str })];
  const tmp33 = closure_9(closure_4, obj11);
  if (tmp18 != null) {
    layout = tmp18.layout;
  }
  let tmp32Result = null;
  if (null != tmp18) {
    if (userId(11907).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj12 = { header: tmp33, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp32Result = tmp32(tmp10(11908), obj12);
    } else {
      tmp32Result = null;
      if (userId(11907).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj13 = { header: tmp33, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
        tmp32Result = tmp32(tmp10(11999), obj13);
      }
    }
  }
  if (tmp19 != null) {
    layout2 = tmp19.layout;
  }
  let tmp32Result2 = null;
  if (null != tmp19) {
    if (userId(11907).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj14 = { bottomConfig: tmp19, resolveFieldValue: result, numberFormat: memo };
      tmp32Result2 = tmp32(tmp10(12000), obj14);
    } else if (userId(11907).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj15 = { bottomConfig: tmp19, resolveFieldValue: result };
      tmp32Result2 = tmp32(tmp10(12001), obj15);
    } else {
      tmp32Result2 = null;
      if (userId(11907).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj16 = { bottomConfig: tmp19, resolveFieldValue: result };
        tmp32Result2 = tmp32(tmp10(12002), obj16);
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
      const tmp10Result2 = stateFromStores(7303);
      items5[1] = closure_8(closure_5, obj18);
      items5[2] = tmp32Result2;
      let tmp31Result = null;
      if (true === tmp16) {
        tmp31Result = null;
        if (null == rendererProps) {
          const obj19 = { accessibilityRole: "button", accessibilityLabel: intl2.string(userId(1128).t.wzzjk9), hitSlop: 8, disabled: pending, onPress: refresh, style: tmp.refresh, children: items6 };
          const PressableOpacity = tmp2(6908).PressableOpacity;
          intl2 = tmp2(1128).intl;
          const obj20 = { size: "xs", color: stateFromStores(587).colors.TEXT_MUTED };
          const RetryIcon = tmp2(11790).RetryIcon;
          items6 = [closure_8(RetryIcon, obj20), ];
          const obj21 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(userId(1128).t.wzzjk9) };
          const Text2 = tmp2(5234).Text;
          intl3 = tmp2(1128).intl;
          items6[1] = closure_8(Text2, obj21);
          tmp31Result = tmp31(PressableOpacity, obj19);
        }
      }
      items5[3] = tmp31Result;
      tmp31Result2 = tmp31(tmp10Result2, obj17);
    }
  }
  return tmp31Result2;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default tmp5;
