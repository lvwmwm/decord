// Module ID: 9272
// Function ID: 9273
// Name: PressableNavigatorBackIcon
// Dependencies: [109, 19, 17, 2064, 6084, 2115, 21, 5091, 1200, 587, 558, 576, 504, 4779, 4897, 1126, 6163, 9273, 9274, 9276, 6191, 2]

// Module 9272 (PressableNavigatorBackIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import FastImageDefault from "FastImage" /* 6163 */;
import AssetRegistryDefault from "AssetRegistry" /* 9273 */;
import MaskedBadgeDefault from "MaskedBadge" /* 9274 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9276 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6084 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, currentlySelectedChannelId, importDefault, totalMentionCount;

let c10;
let unpackModuleId;
let closure_3 = ["navigation", "onPress", "badgeCutoutColor", "ref"];
const View = react_native.View;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles(() => {
  let rect;
  const obj = { maskWrapper: rect, maskStroke: { backgroundColor: nativeDefault.colors.PANEL_BG }, actionButtonPressable: { padding: 8, zIndex: 100, borderRadius: 20 }, actionButtonIcon: { tintColor: nativeDefault.colors.ICON_SUBTLE } };
  rect = { position: "absolute", minWidth: native.BADGE_SIZE, height: native.BADGE_SIZE, top: 10, left: 8, flexShrink: 0, flexGrow: 1, zIndex: 100 };
  ({ backgroundColor: nativeDefault.colors.PANEL_BG });
  ({ tintColor: nativeDefault.colors.ICON_SUBTLE });
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PressableNavigatorBackIcon(navigation) {
  let PressableOpacity;
  let badgeCutoutColor;
  let closure_0;
  let closure_1;
  let items1;
  let obj11;
  let obj6;
  let obj8;
  let ref;
  let tmp13;
  let tmp14;
  let tmp19;
  let tmp4;
  let tmp7;
  let tmp8;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(32);
  if (cResult[0] !== navigation) {
    navigation = navigation.navigation;
    _require = navigation;
    const onPress = navigation.onPress;
    importDefault = onPress;
    ({ badgeCutoutColor, ref } = navigation);
    const tmp11 = _objectWithoutProperties(navigation, closure_3);
    cResult[0] = navigation;
    cResult[1] = badgeCutoutColor;
    cResult[2] = navigation;
    cResult[3] = onPress;
    cResult[4] = tmp11;
    cResult[5] = ref;
    tmp8 = ref;
    tmp7 = tmp11;
    tmp4 = badgeCutoutColor;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  const tmp12 = closure_12();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildReadStateStore, SelectedChannelStore, ChannelStore];
    const fn = function f() {
      const obj = totalMentionCount;
      totalMentionCount = totalMentionCount.getTotalMentionCount();
      currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
      if (null == currentlySelectedChannelId) {
        return totalMentionCount;
      } else {
        channel = channel.getChannel(currentlySelectedChannelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        return totalMentionCount - obj.getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId);
      }
    };
    cResult[6] = items;
    cResult[7] = fn;
    tmp14 = fn;
    tmp13 = items;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp14);
  if (stateFromStores >= 10) {
    if (stateFromStores < 100) {
      let tmp21;
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { minWidth: tmp(1200).BADGE_SIZE + 8 };
        cResult[8] = obj2;
        tmp21 = obj2;
      } else {
        tmp21 = cResult[8];
      }
      tmp19 = tmp21;
    } else {
      let tmp20;
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { minWidth: tmp(1200).BADGE_SIZE + 12 };
        cResult[9] = obj3;
        tmp20 = obj3;
      } else {
        tmp20 = cResult[9];
      }
      tmp19 = tmp20;
    }
  }
  const tmpResult3 = tmp(4779);
  let backgroundColor = tmpResult3.useToken(tmp4);
  const useGradientValue = tmp(4897).useGradientValue;
  tmp(4897);
  if (backgroundColor == null) {
    backgroundColor = useGradientValue(tmp(4897).GradientPercentage.START);
  }
  if (backgroundColor == null) {
    backgroundColor = tmp12.maskStroke.backgroundColor;
  }
  if (cResult[10] === tmp5) {
    let tmp23;
    let tmp24;
    let tmp26;
    if (cResult[11] === tmp6) {
      tmp23 = cResult[12];
    }
    if (cResult[13] !== stateFromStores) {
      let formatToPlainStringResult;
      if (stateFromStores > 0) {
        const intl2 = tmp(1126).intl;
        const obj4 = { mentionCount: stateFromStores };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.vxFYaM, obj4);
      } else {
        const intl = tmp(1126).intl;
        formatToPlainStringResult = intl.string(tmp(1126).t["13/7kX"]);
      }
      cResult[13] = stateFromStores;
      cResult[14] = formatToPlainStringResult;
      tmp24 = formatToPlainStringResult;
    } else {
      tmp24 = cResult[14];
    }
    if (cResult[15] !== tmp12.actionButtonIcon.tintColor) {
      const obj5 = { source: AssetRegistryDefault, style: obj6 };
      obj6 = { tintColor: tmp12.actionButtonIcon.tintColor };
      const tmp29 = FastImageDefault;
      const tmp30 = closure_10(tmp29, obj5);
      cResult[15] = tmp12.actionButtonIcon.tintColor;
      cResult[16] = tmp30;
      tmp26 = tmp30;
    } else {
      tmp26 = cResult[16];
    }
    if (cResult[17] === stateFromStores) {
      if (cResult[18] === backgroundColor) {
        if (cResult[19] === tmp12.maskWrapper) {
          let tmp31;
          if (cResult[20] === tmp19) {
            tmp31 = cResult[21];
          }
          if (cResult[22] === tmp26) {
            let tmp36;
            if (cResult[23] === tmp31) {
              tmp36 = cResult[24];
            }
            if (cResult[25] === tmp23) {
              if (cResult[26] === tmp7) {
                if (cResult[27] === tmp8) {
                  if (cResult[28] === tmp12.actionButtonPressable) {
                    if (cResult[29] === tmp24) {
                      let tmp40;
                      if (cResult[30] === tmp36) {
                        tmp40 = cResult[31];
                      }
                      return tmp40;
                    }
                  }
                }
              }
            }
            const obj7 = { children: closure_10(PressableOpacity, obj8) };
            obj8 = { ref: tmp8, accessibilityRole: "button", accessibilityLabel: tmp24, onPress: tmp23, style: tmp12.actionButtonPressable, children: tmp36 };
            const tmp43 = PressableNavigatorButtonWrapperDefault;
            PressableOpacity = tmp(6191).PressableOpacity;
            const merged = Object.assign(tmp7);
            const tmp47 = closure_10(tmp43, obj7);
            cResult[25] = tmp23;
            cResult[26] = tmp7;
            cResult[27] = tmp8;
            cResult[28] = tmp12.actionButtonPressable;
            class T {
              constructor() {
                if (null == closure_1) {
                  const obj = closure_0;
                  if (closure_0 != null) {
                    obj.goBack();
                  }
                } else {
                  tmp();
                }
              }
            }
            cResult[29] = tmp24;
            cResult[30] = tmp36;
            cResult[31] = tmp47;
            tmp40 = tmp47;
          }
          const obj9 = { children: items1 };
          items1 = [tmp26, tmp31];
          const tmp39 = closure_11(View, obj9);
          cResult[22] = tmp26;
          cResult[23] = tmp31;
          cResult[24] = tmp39;
          tmp36 = tmp39;
        }
      }
    }
    let tmp32 = null;
    if (stateFromStores > 0) {
      const obj10 = { style: tmp12.maskWrapper, children: closure_10(MaskedBadgeDefault, obj11) };
      obj11 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: tmp19 };
      tmp32 = closure_10(View, obj10);
    }
    cResult[17] = stateFromStores;
    cResult[18] = backgroundColor;
    cResult[19] = tmp12.maskWrapper;
    cResult[20] = tmp19;
    cResult[21] = tmp32;
    tmp31 = tmp32;
  }
  class T {
    constructor() {
      if (null == closure_1) {
        const obj = closure_0;
        if (closure_0 != null) {
          obj.goBack();
        }
      } else {
        tmp();
      }
    }
  }
  cResult[10] = tmp5;
  cResult[11] = tmp6;
  cResult[12] = T;
  tmp23 = T;
}) : (function PressableNavigatorBackIcon(navigation) {
  let badgeCutoutColor;
  let formatToPlainStringResult;
  let items3;
  let obj8;
  let ref;
  let tmp15;
  navigation = navigation.navigation;
  const onPress = navigation.onPress;
  ({ badgeCutoutColor, ref } = navigation);
  const merged = Object.assign(navigation, Object.assign({ navigation: 0, onPress: 0, badgeCutoutColor: 0, ref: 0 }));
  let stateFromStores;
  const tmp2 = closure_12();
  let obj = navigation(stateFromStores[12]);
  const items = [GuildReadStateStore, SelectedChannelStore, ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const obj = totalMentionCount;
    totalMentionCount = totalMentionCount.getTotalMentionCount();
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    if (null == currentlySelectedChannelId) {
      return totalMentionCount;
    } else {
      channel = channel.getChannel(currentlySelectedChannelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      return totalMentionCount - obj.getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId);
    }
  });
  let obj2 = react;
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    if (stateFromStores >= 10) {
      let obj;
      if (tmp < 100) {
        obj = { minWidth: native.BADGE_SIZE + 8 };
        const obj2 = { minWidth: native.BADGE_SIZE + 8 };
      } else {
        obj = { minWidth: native.BADGE_SIZE + 12 };
      }
      return obj;
    }
  }, items1);
  const obj3 = navigation(stateFromStores[13]);
  const token = obj3.useToken(badgeCutoutColor);
  const useGradientValue = navigation(stateFromStores[14]).useGradientValue;
  let backgroundColor = token;
  navigation(stateFromStores[14]);
  if (token == null) {
    backgroundColor = useGradientValue(navigation(stateFromStores[14]).GradientPercentage.START);
  }
  if (backgroundColor == null) {
    backgroundColor = tmp2.maskStroke.backgroundColor;
  }
  const items2 = [navigation, onPress];
  const callback = obj2.useCallback(() => {
    if (null == onPress) {
      const obj = navigation;
      if (navigation != null) {
        obj.goBack();
      }
    } else {
      tmp();
    }
  }, items2);
  const obj4 = { ref, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: callback, style: tmp2.actionButtonPressable, children: tmp15(View, { children: items3 }) };
  const tmp12 = onPress(stateFromStores[19]);
  const PressableOpacity = tmp3(tmp4[20]).PressableOpacity;
  const merged1 = Object.assign(merged);
  if (stateFromStores > 0) {
    const intl2 = tmp3(tmp4[15]).intl;
    const obj5 = { mentionCount: stateFromStores };
    formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[15]).t.vxFYaM, obj5);
  } else {
    const intl = tmp3(tmp4[15]).intl;
    formatToPlainStringResult = intl.string(tmp3(tmp4[15]).t["13/7kX"]);
  }
  const obj6 = { source: onPress(stateFromStores[17]), style: { tintColor: tmp2.actionButtonIcon.tintColor } };
  const tmp11Result = onPress(stateFromStores[16]);
  items3 = [closure_10(tmp11Result, obj6), ];
  let tmp10Result = null;
  tmp15 = closure_11;
  if (stateFromStores > 0) {
    const obj7 = { style: tmp2.maskWrapper, children: closure_10(onPress(stateFromStores[18]), obj8) };
    obj8 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: memo };
    tmp10Result = tmp10(tmp16, obj7);
  }
  items3[1] = tmp10Result;
  const obj9 = { children: closure_10(PressableOpacity, obj4) };
  return closure_10(tmp12, obj9);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx");

export const PressableNavigatorBackIcon = tmp3;
