// Module ID: 12146
// Function ID: 12147
// Name: UserProfileApplicationWidgetCard
// Dependencies: [19, 17, 2189, 502, 21, 5306, 575, 12147, 12148, 12260, 12261, 12262, 12263, 5944, 504, 12149, 7259, 9533, 10664, 10286, 12264, 7919, 7918, 7937, 8545, 12272, 12273, 12251, 6020, 7307, 5929, 12097, 7961, 1113, 5936, 12277, 7428, 11095, 2]
// Exports: default

// Module 12146 (UserProfileApplicationWidgetCard)
import nativeDefault from "native" /* 575 */;
import _mod12149 from "module_12149" /* 12149 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2189 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let react = react_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { appIcon: size, header: { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_4 }, editingHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, zIndex: 1 }, refresh: { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 }, divider: { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 }, ownerState: { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 }, authorization: { marginTop: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, borderRadius: nativeDefault.radii.md }, authorizationCopy: { flexBasis: 2 * nativeDefault.space.PX_160 * arg0, flexGrow: 100, flexShrink: 1, gap: nativeDefault.space.PX_4 }, authorizationButton: { flexBasis: nativeDefault.space.PX_96 * arg0, flexGrow: 1, flexShrink: 1 }, stillSyncing: { padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md }, syncingCopy: { flexShrink: 1, textAlign: "center" } };
  size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
  ({ flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, zIndex: 1 });
  ({ flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 });
  ({ borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 });
  ({ marginTop: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, borderRadius: nativeDefault.radii.md });
  ({ flexBasis: 2 * nativeDefault.space.PX_160 * arg0, flexGrow: 100, flexShrink: 1, gap: nativeDefault.space.PX_4 });
  ({ flexBasis: nativeDefault.space.PX_96 * arg0, flexGrow: 1, flexShrink: 1 });
  ({ padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  let Button;
  let _undefined;
  let c5;
  let canStartAuthorization;
  let closure_3;
  let fetched;
  let hasAlreadyLinked;
  let hasIdentity;
  let intl;
  let intl5;
  let intl6;
  let isEditing;
  let isLoading;
  let items10;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let layout;
  let layout2;
  let obj25;
  let obj7;
  let pending;
  let refresh;
  let rendererProps;
  let resolutionContext;
  let surfaceConfigs;
  let tmp29Result;
  let token;
  userId = userId.userId;
  const widget = userId.widget;
  ({ rendererProps, isEditing } = userId);
  const cardStyle = userId.cardStyle;
  if (isEditing === undefined) {
    isEditing = false;
  }
  let stateFromStores;
  react = undefined;
  hasAlreadyLinked = undefined;
  c5 = undefined;
  token = undefined;
  let analyticsLocations;
  let trackUserProfileAction;
  let tmp = userId;
  const tmp2 = stateFromStores;
  const footer = userId.footer;
  let obj = userId(stateFromStores[13]);
  const tmp3 = closure_11(obj.useFontScale());
  let obj2 = userId(stateFromStores[14]);
  const items = [token];
  stateFromStores = obj2.useStateFromStores(items, () => token.locale);
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    const obj = _mod12149;
    return obj.createCompactNumberFormat(stateFromStores);
  }, items1);
  const items2 = [analyticsLocations];
  const obj3 = userId(stateFromStores[14]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj4 = userId(stateFromStores[16]);
  const getOrFetchApplication = obj4.useGetOrFetchApplication(widget.applicationId);
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
  const useGame = tmp(tmp2[17]).useGame;
  const tmpResult = tmp(tmp2[17]);
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  const data = useGame(canonicalGameId).data;
  let id;
  const tmp11 = widget(tmp2[18]);
  if (data != null) {
    id = data.id;
  }
  const obj5 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: tmp(tmp2[19]).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp11Result = tmp11(obj5);
  react = tmp11Result;
  let tmp14 = rendererProps;
  if (rendererProps == null) {
    tmp14 = tmp10(tmp2[20])(userId, widget.applicationId);
  }
  ({ surfaceConfigs, isLoading, hasIdentity, resolutionContext } = tmp14);
  const tmp15 = widget(tmp2[21])(getOrFetchApplication);
  ({ fetched, canStartAuthorization, hasAlreadyLinked } = tmp15);
  ({ startAuthorization: c5, token } = tmp15);
  const tmp10Result = widget(tmp2[22]);
  analyticsLocations = tmp10Result(tmp10(tmp2[23]).USER_PROFILE_APPLICATION_WIDGET).analyticsLocations;
  const tmpResult3 = tmp(tmp2[24]);
  trackUserProfileAction = tmpResult3.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp17 = widget(tmp2[25])(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = widget(tmp2[26])(widget.applicationId));
  widget(tmp2[26])(widget.applicationId);
  const tmp19 = surfaceConfigs[tmp(undefined, tmp2[27]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp20 = surfaceConfigs[tmp(undefined, tmp2[27]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp21 = null;
  if (null != iconURL) {
    const obj6 = { source: obj7, style: tmp3.appIcon };
    obj7 = { uri: iconURL };
    tmp21 = trackUserProfileAction(tmp10(tmp2[28]), obj6);
  }
  let tmp23 = null != token;
  if (tmp23) {
    const _Array = Array;
    const arr = Array.from(tmp(tmp2[29]).OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
    let someResult = arr.some((item) => {
      const scopes = token.scopes;
      return scopes.includes(item);
    });
    if (!someResult) {
      let scopes = token.scopes;
      someResult = scopes.includes(tmp(tmp2[29]).OAuth2Scopes.SDK_SOCIAL_LAYER);
    }
    if (!someResult) {
      const scopes2 = token.scopes;
      someResult = scopes2.includes(tmp(tmp2[29]).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
    }
    tmp23 = someResult;
  }
  if (null == rendererProps) {
    if (stateFromStores1) {
      if (!isEditing) {
        if (!isLoading) {
          if (!hasIdentity) {
            if (fetched) {
              if (canStartAuthorization) {
                if (!tmp23) {
                  return null;
                }
              }
            }
          }
        }
      }
    }
  }
  const tmpResult4 = tmp(tmp2[15]);
  const result = tmpResult4.bindResolveFieldValue(resolutionContext);
  const obj8 = { children: items3 };
  items3 = [tmp21, trackUserProfileAction(tmp(tmp2[30]).Text, { variant: "body-sm/medium", color: "text-strong", lineClamp: 1, children: str })];
  const tmp30 = closure_10(closure_9, obj8);
  if (null != tmp11Result) {
    const obj9 = {
      style: tmp3.header,
      onPress() {
          return closure_3();
        },
      accessibilityRole: "button",
      accessibilityLabel: str,
      children: tmp30
    };
    tmp29Result = tmp29(hasAlreadyLinked, obj9);
  } else {
    const obj10 = { style: tmp3.header, children: tmp30 };
    tmp29Result = tmp29(c5, obj10);
  }
  let tmp28Result = tmp29Result;
  if (isEditing) {
    const obj11 = { style: tmp3.editingHeader, children: items4 };
    items4 = [tmp29Result, ];
    const obj12 = { widget };
    items4[1] = trackUserProfileAction(widget(tmp2[31]), obj12);
    tmp28Result = tmp28(c5, obj11);
  }
  if (tmp19 != null) {
    layout = tmp19.layout;
  }
  let tmp29Result3 = null;
  if (null != tmp19) {
    if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj13 = { header: tmp28Result, topConfig: tmp19, resolveFieldValue: result, numberFormat: memo };
      tmp29Result3 = tmp29(tmp10(tmp2[8]), obj13);
    } else {
      tmp29Result3 = null;
      if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj14 = { header: tmp28Result, topConfig: tmp19, resolveFieldValue: result, numberFormat: memo };
        tmp29Result3 = tmp29(tmp10(tmp2[9]), obj14);
      }
    }
  }
  if (tmp20 != null) {
    layout2 = tmp20.layout;
  }
  let tmp29Result4 = null;
  if (null != tmp20) {
    if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj15 = { bottomConfig: tmp20, resolveFieldValue: result, numberFormat: memo };
      tmp29Result4 = tmp29(tmp10(tmp2[10]), obj15);
    } else if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj16 = { bottomConfig: tmp20, resolveFieldValue: result };
      tmp29Result4 = tmp29(tmp10(tmp2[11]), obj16);
    } else {
      tmp29Result4 = null;
      if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj17 = { bottomConfig: tmp20, resolveFieldValue: result };
        tmp29Result4 = tmp29(tmp10(tmp2[12]), obj17);
      }
    }
  }
  let tmp28Result6 = null;
  if (null != tmp29Result3) {
    tmp28Result6 = null;
    if (null != tmp29Result4) {
      const obj18 = { style: cardStyle, children: items5 };
      items5 = [tmp29Result3, , , , , ];
      const obj19 = { style: tmp3.divider };
      const tmp10Result2 = widget(tmp2[32]);
      items5[1] = trackUserProfileAction(c5, obj19);
      items5[2] = tmp29Result4;
      let tmp41 = null;
      if (stateFromStores1) {
        tmp41 = null;
        if (null == rendererProps) {
          let tmp28Result4;
          if (isEditing) {
            if (false === tmp17) {
              if (fetched) {
                const obj20 = { style: tmp3.authorization, children: items7 };
                const obj21 = { style: tmp3.authorizationCopy, children: items6 };
                const Text2 = tmp(tmp2[30]).Text;
                const intl2 = tmp(tmp2[33]).intl;
                const string = intl2.string;
                const t = tmp(tmp2[33]).t;
                const obj22 = { variant: "heading-xs/medium", color: "text-default", children: string(fetched && canStartAuthorization && hasAlreadyLinked && !tmp23 ? t["9WarGY"] : t.UDPRLO) };
                items6 = [trackUserProfileAction(Text2, obj22), ];
                const Text3 = tmp(tmp2[30]).Text;
                const intl3 = tmp(tmp2[33]).intl;
                const string2 = intl3.string;
                const t2 = tmp(tmp2[33]).t;
                const obj23 = { variant: "body-xs/normal", color: "text-subtle", children: string2(fetched && canStartAuthorization && hasAlreadyLinked && !tmp23 ? t2.qgxnKe : t2["OW/2al"]) };
                items6[1] = trackUserProfileAction(Text3, obj23);
                items7 = [closure_10(c5, obj21), ];
                const obj24 = { style: tmp3.authorizationButton, children: trackUserProfileAction(Button, obj25) };
                Button = tmp(tmp2[34]).Button;
                const intl4 = tmp(tmp2[33]).intl;
                const string3 = intl4.string;
                const t3 = tmp(tmp2[33]).t;
                obj25 = {
                  size: "sm",
                  text: string3(fetched && canStartAuthorization && hasAlreadyLinked && !tmp23 ? t3.vD60Pv : t3.S0W8Z5),
                  onPress: function handleConnect() {
                                  let str = "PRESS_APPLICATION_WIDGET_UNLINKED_CONNECT";
                                  const tmp = trackUserProfileAction;
                                  if (hasAlreadyLinked) {
                                    str = "PRESS_APPLICATION_WIDGET_LINKED_RECONNECT";
                                  }
                                  const obj = { action: str, applicationId: widget.applicationId };
                                  tmp(obj);
                                  const obj2 = { analyticsLocations };
                                  _undefined(obj2);
                                }
                };
                items7[1] = trackUserProfileAction(c5, obj24);
                tmp28Result4 = tmp28(tmp40, obj20);
                tmp41 = tmp28Result4;
              }
            }
          }
          tmp28Result4 = null;
          if (!isLoading) {
            tmp28Result4 = null;
            if (!hasIdentity) {
              const obj26 = { style: items8, children: items9 };
              items8 = [, ];
              ({ ownerState: arr7[0], stillSyncing: arr7[1] } = tmp3);
              const obj27 = { size: "xs", color: widget(tmp2[6]).colors.TEXT_MUTED };
              const HourglassIcon = tmp(tmp2[35]).HourglassIcon;
              items9 = [trackUserProfileAction(HourglassIcon, obj27), ];
              const obj28 = { variant: "body-sm/medium", color: "text-muted", style: tmp3.syncingCopy, children: intl.string(tmp(tmp2[33]).t.z5K4Uv) };
              const Text = tmp(tmp2[30]).Text;
              intl = tmp(tmp2[33]).intl;
              items9[1] = trackUserProfileAction(Text, obj28);
              tmp28Result4 = tmp28(tmp40, obj26);
            }
          }
        }
      }
      items5[3] = tmp41;
      let tmp28Result5 = null;
      if (true === tmp17) {
        tmp28Result5 = null;
        if (null == rendererProps) {
          const obj29 = { accessibilityRole: "button", accessibilityLabel: intl5.string(tmp(tmp2[33]).t.wzzjk9), hitSlop: 8, disabled: pending, onPress: refresh, style: tmp3.refresh, children: items10 };
          const PressableOpacity = tmp(tmp2[36]).PressableOpacity;
          intl5 = tmp(tmp2[33]).intl;
          const obj30 = { size: "xs", color: widget(tmp2[6]).colors.TEXT_MUTED };
          const RetryIcon = tmp(tmp2[37]).RetryIcon;
          items10 = [trackUserProfileAction(RetryIcon, obj30), ];
          const obj31 = { variant: "body-xs/medium", color: "text-muted", children: intl6.string(tmp(tmp2[33]).t.wzzjk9) };
          const Text4 = tmp(tmp2[30]).Text;
          intl6 = tmp(tmp2[33]).intl;
          items10[1] = trackUserProfileAction(Text4, obj31);
          tmp28Result5 = tmp28(PressableOpacity, obj29);
        }
      }
      items5[4] = tmp28Result5;
      items5[5] = footer;
      tmp28Result6 = tmp28(tmp10Result2, obj18);
    }
  }
  return tmp28Result6;
};
