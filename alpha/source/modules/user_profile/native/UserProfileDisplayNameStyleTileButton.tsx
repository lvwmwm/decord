// Module ID: 14911
// Function ID: 14912
// Name: UserProfileDisplayNameStyleTileButton
// Dependencies: [19, 17, 5081, 8284, 21, 5092, 587, 558, 576, 8290, 504, 2041, 1126, 14912, 10263, 10262, 6188, 6184, 2]

// Module 14911 (UserProfileDisplayNameStyleTileButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8290 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10262 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { button: obj2, previewContainer: { flex: 1, minWidth: 0 } };
obj2 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileDisplayNameStyleTileButton(user) {
  let displayName;
  let displayNameStyles;
  let first;
  let items2;
  let useReducedMotion;
  let tmp = user;
  let obj = user(576);
  const cResult = obj.c(26);
  user = user.user;
  const onPress = user.onPress;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === user.globalName) {
    let tmp7;
    let tmp10;
    let tmp9;
    let tmp14;
    let tmp16;
    let tmp18;
    let tmp19;
    if (cResult[2] === user.username) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
    ({ displayName, displayNameStyles } = stateFromStoresObject);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [AccessibilityStore];
      const fn2 = function v() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[4] = items1;
      cResult[5] = fn2;
      tmp10 = fn2;
      tmp9 = items1;
    } else {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const tmpResult3 = tmp(504);
    const stateFromStores = tmpResult3.useStateFromStores(tmp9, tmp10);
    const GifAutoPlay = tmp(2041).GifAutoPlay;
    const _Symbol2 = Symbol;
    const setting = GifAutoPlay.useSetting();
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.lsjENp);
      cResult[6] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] !== displayNameStyles) {
      const tmpResult4 = tmp(14912);
      const displayNameStyleAccessibleValue = tmpResult4.getDisplayNameStyleAccessibleValue(displayNameStyles);
      cResult[7] = displayNameStyles;
      cResult[8] = displayNameStyleAccessibleValue;
      tmp16 = displayNameStyleAccessibleValue;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] !== tmp16) {
      let obj2 = { text: tmp16 };
      cResult[9] = tmp16;
      cResult[10] = obj2;
      tmp18 = obj2;
    } else {
      tmp18 = cResult[10];
    }
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t["4lAcxv"]);
      cResult[11] = stringResult1;
      tmp19 = stringResult1;
    } else {
      tmp19 = cResult[11];
    }
    if (!stateFromStores) {
      let STATIC;
      if (setting) {
        STATIC = tmp(10263).EffectDisplayType.ANIMATED;
      }
      if (cResult[12] === displayName) {
        if (cResult[13] === displayNameStyles) {
          if (cResult[14] === STATIC) {
            let tmp21;
            if (cResult[15] === user.id) {
              tmp21 = cResult[16];
            }
            if (cResult[17] === tmp4.previewContainer) {
              let tmp25;
              let tmp29;
              if (cResult[18] === tmp21) {
                tmp25 = cResult[19];
              }
              const _Symbol4 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp31 = closure_6(tmp(6188).TableRowArrow, {});
                cResult[20] = tmp31;
                tmp29 = tmp31;
              } else {
                tmp29 = cResult[20];
              }
              if (cResult[21] === onPress) {
                if (cResult[22] === tmp4.button) {
                  if (cResult[23] === tmp25) {
                    let tmp32;
                    if (cResult[24] === tmp18) {
                      tmp32 = cResult[25];
                    }
                    return tmp32;
                  }
                }
              }
              const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp14, accessibilityValue: tmp18, accessibilityHint: tmp19, onPress, style: tmp4.button, children: items2 };
              items2 = [tmp25, tmp29];
              const tmp34 = closure_7(tmp(6184).PressableHighlight, obj3);
              cResult[21] = onPress;
              cResult[22] = tmp4.button;
              cResult[23] = tmp25;
              cResult[24] = tmp18;
              cResult[25] = tmp34;
              tmp32 = tmp34;
            }
            const obj4 = { style: tmp4.previewContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp21 };
            const tmp28 = closure_6(View, obj4);
            cResult[17] = tmp4.previewContainer;
            cResult[18] = tmp21;
            cResult[19] = tmp28;
            tmp25 = tmp28;
          }
        }
      }
      const obj5 = { userId: user.id, userName: displayName, pendingDisplayNameStyles: displayNameStyles, ignoreDisabledStylesSetting: true, effectDisplayType: STATIC, variant: "heading-xl/semibold", defaultColor: "text-muted", lineClamp: 1 };
      const tmp24 = closure_6(UsernameWithEffectsDefault, obj5);
      cResult[12] = displayName;
      cResult[13] = displayNameStyles;
      cResult[14] = STATIC;
      cResult[15] = user.id;
      cResult[16] = tmp24;
      tmp21 = tmp24;
    }
    STATIC = tmp(10263).EffectDisplayType.STATIC;
  }
  const fn = function p() {
    const displayNameStyles = UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles;
    const pendingGlobalName = UserProfileSettingsStore.getPendingChanges().pendingGlobalName;
    const obj = ProfileCustomizationUtils;
    const obj2 = { pendingValue: pendingGlobalName, userValue: user.globalName };
    let displayName = obj.getProfilePreviewValue(obj2);
    const tmp = user;
    if (displayName == null) {
      displayName = tmp.username;
    }
    return { displayName, displayNameStyles };
  };
  cResult[1] = user.globalName;
  cResult[2] = user.username;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function UserProfileDisplayNameStyleTileButton(user) {
  let displayName;
  let displayNameStyles;
  let intl;
  let intl2;
  let obj4;
  let obj5;
  let useReducedMotion;
  user = user.user;
  const onPress = user.onPress;
  let tmp = closure_8();
  let obj = user(504);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const displayNameStyles = UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles;
    const pendingGlobalName = UserProfileSettingsStore.getPendingChanges().pendingGlobalName;
    const obj = ProfileCustomizationUtils;
    const obj2 = { pendingValue: pendingGlobalName, userValue: user.globalName };
    let displayName = obj.getProfilePreviewValue(obj2);
    const tmp = user;
    if (displayName == null) {
      displayName = tmp.username;
    }
    return { displayName, displayNameStyles };
  });
  ({ displayNameStyles, displayName } = stateFromStoresObject);
  let obj2 = user(504);
  const items1 = [AccessibilityStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const GifAutoPlay = user(2041).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const obj3 = { accessibilityRole: "button", accessibilityLabel: intl.string(user(1126).t.lsjENp), accessibilityValue: obj4, accessibilityHint: intl2.string(user(1126).t["4lAcxv"]), onPress, style: tmp.button, children: null };
  const PressableHighlight = user(6184).PressableHighlight;
  intl = user(1126).intl;
  obj4 = { text: obj5.getDisplayNameStyleAccessibleValue(displayNameStyles) };
  obj5 = user(14912);
  intl2 = user(1126).intl;
  const obj6 = { style: tmp.previewContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj7 = { userId: user.id, userName: displayName, pendingDisplayNameStyles: displayNameStyles, ignoreDisabledStylesSetting: true, effectDisplayType: null, variant: "heading-xl/semibold", defaultColor: "text-muted", lineClamp: 1 };
  const tmp7 = closure_7;
  const tmp9 = View;
  if (!stateFromStores) {
    let STATIC;
    if (setting) {
      STATIC = tmp2(10263).EffectDisplayType.ANIMATED;
    }
    obj7.effectDisplayType = STATIC;
    obj6.children = closure_6(tmp10, obj7);
    const items2 = [closure_6(tmp9, obj6), closure_6(user(6188).TableRowArrow, {})];
    obj3.children = items2;
    return tmp7(PressableHighlight, obj3);
  }
  STATIC = tmp2(10263).EffectDisplayType.STATIC;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStyleTileButton.tsx");

export default tmp4;
