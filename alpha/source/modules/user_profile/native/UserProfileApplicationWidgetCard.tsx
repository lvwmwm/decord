// Module ID: 14615
// Function ID: 14616
// Name: UserProfileApplicationWidgetCard
// Dependencies: [19, 17, 2189, 502, 21, 5043, 575, 14616, 14617, 14666, 14667, 14668, 14669, 5649, 504, 14618, 7515, 8720, 8746, 8755, 14670, 7512, 6379, 6380, 6381, 13596, 14676, 14657, 14680, 5781, 7559, 14585, 7556, 5634, 1112, 5641, 14681, 6152, 10686, 2]
// Exports: default

// Module 14615 (UserProfileApplicationWidgetCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod14618 from "module_14618" /* 14618 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2189 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { editingHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, zIndex: 1 }, refresh: { flexDirection: "row", alignItems: "center", alignSelf: "flex-end", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_12 }, divider: { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 }, ownerState: { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 }, authorization: { marginTop: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, borderRadius: nativeDefault.radii.md }, authorizationCopy: { flexBasis: 2 * nativeDefault.space.PX_160 * arg0, flexGrow: 100, flexShrink: 1, gap: nativeDefault.space.PX_4 }, authorizationButton: { flexBasis: nativeDefault.space.PX_96 * arg0, flexGrow: 1, flexShrink: 1 }, stillSyncing: { padding: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md }, syncingCopy: { flexShrink: 1, textAlign: "center" } };
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
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetCard.tsx");

export default function UserProfileApplicationWidgetCard(userId) {
  let Button;
  let _undefined;
  let c4;
  let canStartAuthorization;
  let fetched;
  let hasAlreadyLinked;
  let hasIdentity;
  let intl;
  let intl5;
  let intl6;
  let isEditing;
  let isLoading;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let layout;
  let layout2;
  let obj20;
  let pending;
  let refresh;
  let rendererProps;
  let resolutionContext;
  let surfaceConfigs;
  let token;
  userId = userId.userId;
  const widget = userId.widget;
  ({ rendererProps, isEditing } = userId);
  const cardStyle = userId.cardStyle;
  if (isEditing === undefined) {
    isEditing = false;
  }
  let stateFromStores;
  hasAlreadyLinked = undefined;
  c4 = undefined;
  token = undefined;
  let analyticsLocations;
  let trackUserProfileAction;
  let tmp = userId;
  const tmp2 = stateFromStores;
  const footer = userId.footer;
  let obj = userId(stateFromStores[13]);
  const tmp3 = closure_9(obj.useFontScale());
  let obj2 = userId(stateFromStores[14]);
  const items = [token];
  stateFromStores = obj2.useStateFromStores(items, () => token.locale);
  const items1 = [stateFromStores];
  const memo = hasAlreadyLinked.useMemo(() => {
    const obj = _mod14618;
    return obj.createCompactNumberFormat(stateFromStores);
  }, items1);
  const items2 = [analyticsLocations];
  const obj3 = userId(stateFromStores[14]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => AuthenticationStore.getId() === userId);
  const obj4 = userId(stateFromStores[16]);
  const getOrFetchApplication = obj4.useGetOrFetchApplication(widget.applicationId);
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
  const tmp10 = widget(tmp2[18]);
  if (data != null) {
    id = data.id;
  }
  let tmp13 = rendererProps;
  const obj5 = { location: "UserProfileApplicationWidgetCard", applicationId: id, source: tmp(tmp2[19]).GameProfileSources.UserProfileApplicationWidget, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp10Result = tmp10(obj5);
  if (rendererProps == null) {
    tmp13 = tmp9(tmp2[20])(userId, widget.applicationId);
  }
  ({ surfaceConfigs, isLoading, hasIdentity, resolutionContext } = tmp13);
  const tmp14 = widget(tmp2[21])(getOrFetchApplication);
  ({ fetched, canStartAuthorization, hasAlreadyLinked } = tmp14);
  ({ startAuthorization: c4, token } = tmp14);
  const tmp9Result = widget(tmp2[22]);
  analyticsLocations = tmp9Result(tmp9(tmp2[23]).USER_PROFILE_APPLICATION_WIDGET).analyticsLocations;
  const tmpResult3 = tmp(tmp2[24]);
  trackUserProfileAction = tmpResult3.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp16 = widget(tmp2[25])(widget.applicationId, stateFromStores1);
  ({ pending, refresh } = widget(tmp2[26])(widget.applicationId));
  widget(tmp2[26])(widget.applicationId);
  const tmp18 = surfaceConfigs[tmp(undefined, tmp2[27]).ApplicationWidgetConfigSurface.WIDGET_TOP];
  const tmp19 = surfaceConfigs[tmp(undefined, tmp2[27]).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  let tmp22 = null != token;
  const tmp21 = trackUserProfileAction(widget(tmp2[28]), { application: getOrFetchApplication });
  if (tmp22) {
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
    tmp22 = someResult;
  }
  if (null == rendererProps) {
    if (stateFromStores1) {
      if (!isEditing) {
        if (!isLoading) {
          if (!hasIdentity) {
            if (fetched) {
              if (canStartAuthorization) {
                if (!tmp22) {
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
  const tmp20Result = trackUserProfileAction(widget(tmp2[30]), { title: str, leadingIcon: tmp21, onPress: tmp10Result });
  let tmp28 = tmp20Result;
  if (isEditing) {
    const obj6 = { style: tmp3.editingHeader, children: items3 };
    items3 = [tmp20Result, ];
    const obj7 = { widget };
    items3[1] = trackUserProfileAction(widget(tmp2[31]), obj7);
    tmp28 = closure_8(c4, obj6);
  }
  if (tmp18 != null) {
    layout = tmp18.layout;
  }
  let tmp20Result3 = null;
  if (null != tmp18) {
    if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_TOP_HERO === layout) {
      const obj8 = { header: tmp28, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
      tmp20Result3 = tmp20(tmp9(tmp2[8]), obj8);
    } else {
      tmp20Result3 = null;
      if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_TOP_CONTAINED === layout) {
        const obj9 = { header: tmp28, topConfig: tmp18, resolveFieldValue: result, numberFormat: memo };
        tmp20Result3 = tmp20(tmp9(tmp2[9]), obj9);
      }
    }
  }
  if (tmp19 != null) {
    layout2 = tmp19.layout;
  }
  let tmp20Result4 = null;
  if (null != tmp19) {
    if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_STATS === layout2) {
      const obj10 = { bottomConfig: tmp19, resolveFieldValue: result, numberFormat: memo };
      tmp20Result4 = tmp20(tmp9(tmp2[10]), obj10);
    } else if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_PROGRESS === layout2) {
      const obj11 = { bottomConfig: tmp19, resolveFieldValue: result };
      tmp20Result4 = tmp20(tmp9(tmp2[11]), obj11);
    } else {
      tmp20Result4 = null;
      if (tmp(tmp2[7]).ApplicationWidgetLayoutName.WIDGET_BOTTOM_COLLECTION === layout2) {
        const obj12 = { bottomConfig: tmp19, resolveFieldValue: result };
        tmp20Result4 = tmp20(tmp9(tmp2[12]), obj12);
      }
    }
  }
  let tmp34Result4 = null;
  if (null != tmp20Result3) {
    tmp34Result4 = null;
    if (null != tmp20Result4) {
      const obj13 = { style: cardStyle, children: items4 };
      items4 = [tmp20Result3, , , , , ];
      const obj14 = { style: tmp3.divider };
      const tmp9Result2 = widget(tmp2[32]);
      items4[1] = trackUserProfileAction(c4, obj14);
      items4[2] = tmp20Result4;
      let tmp37 = null;
      if (stateFromStores1) {
        tmp37 = null;
        if (null == rendererProps) {
          let tmp34Result;
          if (isEditing) {
            if (false === tmp16) {
              if (fetched) {
                const obj15 = { style: tmp3.authorization, children: items6 };
                const obj16 = { style: tmp3.authorizationCopy, children: items5 };
                const Text2 = tmp(tmp2[33]).Text;
                const intl2 = tmp(tmp2[34]).intl;
                const string = intl2.string;
                const t = tmp(tmp2[34]).t;
                const obj17 = { variant: "heading-xs/medium", color: "text-default", children: string(fetched && canStartAuthorization && hasAlreadyLinked && !tmp22 ? t["9WarGY"] : t.UDPRLO) };
                items5 = [trackUserProfileAction(Text2, obj17), ];
                const Text3 = tmp(tmp2[33]).Text;
                const intl3 = tmp(tmp2[34]).intl;
                const string2 = intl3.string;
                const t2 = tmp(tmp2[34]).t;
                const obj18 = { variant: "body-xs/normal", color: "text-subtle", children: string2(fetched && canStartAuthorization && hasAlreadyLinked && !tmp22 ? t2.qgxnKe : t2["OW/2al"]) };
                items5[1] = trackUserProfileAction(Text3, obj18);
                items6 = [closure_8(c4, obj16), ];
                const obj19 = { style: tmp3.authorizationButton, children: trackUserProfileAction(Button, obj20) };
                Button = tmp(tmp2[35]).Button;
                const intl4 = tmp(tmp2[34]).intl;
                const string3 = intl4.string;
                const t3 = tmp(tmp2[34]).t;
                obj20 = {
                  size: "sm",
                  text: string3(fetched && canStartAuthorization && hasAlreadyLinked && !tmp22 ? t3.vD60Pv : t3.S0W8Z5),
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
                items6[1] = trackUserProfileAction(c4, obj19);
                tmp34Result = tmp34(tmp36, obj15);
                tmp37 = tmp34Result;
              }
            }
          }
          tmp34Result = null;
          if (!isLoading) {
            tmp34Result = null;
            if (!hasIdentity) {
              const obj21 = { style: items7, children: items8 };
              items7 = [, ];
              ({ ownerState: arr6[0], stillSyncing: arr6[1] } = tmp3);
              const obj22 = { size: "xs", color: widget(tmp2[6]).colors.TEXT_MUTED };
              const HourglassIcon = tmp(tmp2[36]).HourglassIcon;
              items8 = [trackUserProfileAction(HourglassIcon, obj22), ];
              const obj23 = { variant: "body-sm/medium", color: "text-muted", style: tmp3.syncingCopy, children: intl.string(tmp(tmp2[34]).t.z5K4Uv) };
              const Text = tmp(tmp2[33]).Text;
              intl = tmp(tmp2[34]).intl;
              items8[1] = trackUserProfileAction(Text, obj23);
              tmp34Result = tmp34(tmp36, obj21);
            }
          }
        }
      }
      items4[3] = tmp37;
      let tmp34Result3 = null;
      if (true === tmp16) {
        tmp34Result3 = null;
        if (null == rendererProps) {
          const obj24 = { accessibilityRole: "button", accessibilityLabel: intl5.string(tmp(tmp2[34]).t.wzzjk9), hitSlop: 8, disabled: pending, onPress: refresh, style: tmp3.refresh, children: items9 };
          const PressableOpacity = tmp(tmp2[37]).PressableOpacity;
          intl5 = tmp(tmp2[34]).intl;
          const obj25 = { size: "xs", color: widget(tmp2[6]).colors.TEXT_MUTED };
          const RetryIcon = tmp(tmp2[38]).RetryIcon;
          items9 = [trackUserProfileAction(RetryIcon, obj25), ];
          const obj26 = { variant: "body-xs/medium", color: "text-muted", children: intl6.string(tmp(tmp2[34]).t.wzzjk9) };
          const Text4 = tmp(tmp2[33]).Text;
          intl6 = tmp(tmp2[34]).intl;
          items9[1] = trackUserProfileAction(Text4, obj26);
          tmp34Result3 = tmp34(PressableOpacity, obj24);
        }
      }
      items4[4] = tmp34Result3;
      items4[5] = footer;
      tmp34Result4 = tmp34(tmp9Result2, obj13);
    }
  }
  return tmp34Result4;
};
