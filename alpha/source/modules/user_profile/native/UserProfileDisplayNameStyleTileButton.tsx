// Module ID: 14852
// Function ID: 14853
// Name: UserProfileDisplayNameStyleTileButton
// Dependencies: [19, 17, 5080, 8268, 21, 5091, 587, 558, 576, 504, 2041, 1126, 14853, 10232, 10231, 6195, 6191, 2]

// Module 14852 (UserProfileDisplayNameStyleTileButton)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import Pressables from "Pressables" /* 6191 */;
import TableRowArrow from "TableRowArrow" /* 6195 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10231 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 14853 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8268 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileDisplayNameStyleTileButton(arg0) {
  let items2;
  let onPress;
  let tmp10;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp5;
  let tmp6;
  let tmp9;
  let tryItOutChanges;
  let useReducedMotion;
  let user;
  const obj = react2;
  const cResult = obj.c(24);
  ({ user, onPress } = arg0);
  const tmp4 = closure_8();
  let username = user.globalName;
  if (username == null) {
    username = user.username;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function b() {
      return tryItOutChanges.getTryItOutChanges().tryItOutDisplayNameStyles;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class N {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[2] = items1;
    cResult[3] = N;
    tmp10 = N;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = get_initialized;
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  const GifAutoPlay = tmp(2041).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl3.t.lsjENp);
    class N {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[4] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const tmpResult4 = UserProfileEditingAccessibilityUtils;
    const displayNameStyleAccessibleValue = tmpResult4.getDisplayNameStyleAccessibleValue(stateFromStores);
    class N {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[6] = displayNameStyleAccessibleValue;
    tmp16 = displayNameStyleAccessibleValue;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== tmp16) {
    const obj2 = { text: tmp16 };
    class N {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[8] = obj2;
    tmp18 = obj2;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl3.t["4lAcxv"]);
    class N {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[9] = stringResult1;
    tmp19 = stringResult1;
  } else {
    tmp19 = cResult[9];
  }
  if (!stateFromStores1) {
    let STATIC;
    if (setting) {
      STATIC = tmp(10232).EffectDisplayType.ANIMATED;
    }
    if (cResult[10] === username) {
      if (cResult[11] === stateFromStores) {
        if (cResult[12] === STATIC) {
          let tmp21;
          if (cResult[13] === user.id) {
            tmp21 = cResult[14];
          }
          if (cResult[15] === tmp4.previewContainer) {
            let tmp24;
            if (cResult[16] === tmp21) {
              tmp24 = cResult[17];
            }
            const _Symbol = Symbol;
            class N {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            if (cResult[19] === onPress) {
              if (cResult[20] === tmp4.button) {
                if (cResult[21] === tmp24) {
                  let tmp29;
                  if (cResult[22] === tmp18) {
                    tmp29 = cResult[23];
                  }
                  return tmp29;
                }
              }
            }
            const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp14, accessibilityValue: tmp18, accessibilityHint: tmp19, onPress, style: tmp4.button, children: items2 };
            items2 = [tmp24, tmp28];
            const tmp31 = metroImportDefault(Pressables.PressableHighlight, obj3);
            cResult[19] = onPress;
            cResult[20] = tmp4.button;
            cResult[21] = tmp24;
            cResult[22] = tmp18;
            cResult[23] = tmp31;
            tmp29 = tmp31;
          }
          class N {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          const obj4 = { style: tmp4.previewContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp21 };
          const tmp26 = metroRequire(View, obj4);
          cResult[15] = tmp4.previewContainer;
          cResult[16] = tmp21;
          cResult[17] = tmp26;
          tmp24 = tmp26;
        }
      }
    }
    class N {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    const obj5 = { userId: user.id, userName: username, pendingDisplayNameStyles: stateFromStores, ignoreDisabledStylesSetting: true, effectDisplayType: STATIC, variant: "heading-xl/semibold", defaultColor: "text-muted", lineClamp: 1 };
    const tmp23 = metroRequire(UsernameWithEffectsDefault, obj5);
    cResult[10] = username;
    cResult[11] = stateFromStores;
    cResult[12] = STATIC;
    cResult[13] = user.id;
    cResult[14] = tmp23;
    tmp21 = tmp23;
  }
  STATIC = tmp(10232).EffectDisplayType.STATIC;
}) : (function UserProfileDisplayNameStyleTileButton(user) {
  let intl;
  let intl2;
  let obj4;
  let obj5;
  let tryItOutChanges;
  let useReducedMotion;
  user = user.user;
  const onPress = user.onPress;
  const tmp = closure_8();
  let username = user.globalName;
  if (username == null) {
    username = user.username;
  }
  const items = [UserProfileSettingsStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => tryItOutChanges.getTryItOutChanges().tryItOutDisplayNameStyles);
  const items1 = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const obj3 = { accessibilityRole: "button", accessibilityLabel: intl.string(intl3.t.lsjENp), accessibilityValue: obj4, accessibilityHint: intl2.string(intl3.t["4lAcxv"]), onPress, style: tmp.button, children: null };
  const PressableHighlight = Pressables.PressableHighlight;
  intl = intl3.intl;
  obj4 = { text: obj5.getDisplayNameStyleAccessibleValue(stateFromStores) };
  obj5 = UserProfileEditingAccessibilityUtils;
  intl2 = intl3.intl;
  const obj6 = { style: tmp.previewContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj7 = { userId: user.id, userName: username, pendingDisplayNameStyles: stateFromStores, ignoreDisabledStylesSetting: true, effectDisplayType: null, variant: "heading-xl/semibold", defaultColor: "text-muted", lineClamp: 1 };
  const tmp7 = metroImportDefault;
  const tmp9 = View;
  if (!stateFromStores1) {
    let STATIC;
    if (setting) {
      STATIC = tmp2(10232).EffectDisplayType.ANIMATED;
    }
    obj7.effectDisplayType = STATIC;
    obj6.children = metroRequire(tmp10, obj7);
    const items2 = [metroRequire(tmp9, obj6), metroRequire(TableRowArrow.TableRowArrow, {})];
    obj3.children = items2;
    return tmp7(PressableHighlight, obj3);
  }
  STATIC = tmp2(10232).EffectDisplayType.STATIC;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStyleTileButton.tsx");

export default tmp4;
