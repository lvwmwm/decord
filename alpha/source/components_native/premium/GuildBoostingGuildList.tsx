// Module ID: 13805
// Function ID: 13806
// Name: GuildBoostingGuildList
// Dependencies: [19, 17, 2087, 5963, 1085, 21, 5092, 587, 558, 576, 5031, 7052, 6679, 504, 8029, 6158, 5088, 6156, 9785, 1126, 13774, 8673, 2]

// Module 13805 (GuildBoostingGuildList)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useThemeDefault from "useTheme" /* 5031 */;
import FastImageDefault from "FastImage" /* 6156 */;
import GuildIconDefault from "GuildIcon" /* 6158 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6679 */;
import transitionToGuild from "transitionToGuild" /* 7052 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8029 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 8673 */;
import AssetRegistryDefault from "AssetRegistry" /* 9785 */;
import BoostedGuildTierProgressCircleDefault from "BoostedGuildTierProgressCircle" /* 13774 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import SortedGuildStore from "SortedGuildStore" /* 5963 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
const get_initialized = tmp(504);
const View = react_native.View;
let closure_6 = Constants.NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { guildCard: obj2, guildIcon: { marginRight: 16 }, guildCardDescription: { flex: 1 }, subscriptionInfo: { flexDirection: "row", alignItems: "center" }, premiumGuildImage: { width: 18, height: 12, marginLeft: -5 } };
obj2 = { padding: 12, paddingLeft: 16, borderRadius: nativeDefault.radii.xs, marginBottom: 8, minHeight: 96, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBoostingGuildListItem(guildId) {
  let items1;
  let items2;
  let items3;
  let tmp10;
  let tmp7;
  let tmp8;
  let obj = guildId(576);
  const cResult = obj.c(33);
  guildId = guildId.guildId;
  const tmp4 = closure_9();
  const tmp6 = useThemeDefault();
  if (cResult[0] !== guildId) {
    function handleSelectGuild() {
      const obj = transitionToGuild;
      obj.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
      const obj2 = UserSettingsModalActionCreatorsDefault;
      obj2.close();
    }
    cResult[0] = guildId;
    cResult[1] = handleSelectGuild;
    tmp7 = handleSelectGuild;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    const fn = function b() {
      return GuildStore.getGuild(guildId);
    };
    cResult[3] = guildId;
    cResult[4] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp10);
  let id;
  const tmp5Result = useGuildPowerupsBoostCountDefault;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const total = tmp5Result(id).total;
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[5] === stateFromStores) {
      let tmp14;
      let tmp18;
      let tmp21;
      let tmp25;
      let tmp27;
      if (cResult[6] === tmp4.guildIcon) {
        tmp14 = cResult[7];
      }
      const guildCardDescription = tmp4.guildCardDescription;
      if (cResult[8] !== stateFromStores.name) {
        let obj2 = { variant: "text-md/bold", children: stateFromStores.name };
        const tmp20 = closure_7(guildId(5088).Text, obj2);
        cResult[8] = stateFromStores.name;
        cResult[9] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[9];
      }
      const subscriptionInfo = tmp4.subscriptionInfo;
      if (cResult[10] !== tmp4.premiumGuildImage) {
        const obj3 = { source: AssetRegistryDefault, style: tmp4.premiumGuildImage, resizeMode: "contain", resizeMethod: "resize" };
        const tmp5Result3 = FastImageDefault;
        const tmp24 = closure_7(tmp5Result3, obj3);
        cResult[10] = tmp4.premiumGuildImage;
        cResult[11] = tmp24;
        tmp21 = tmp24;
      } else {
        tmp21 = cResult[11];
      }
      if (cResult[12] !== total) {
        const intl = tmp(1126).intl;
        const obj4 = { subscriberCount: total };
        const formatResult = intl.format(guildId(1126).t.If4iTS, obj4);
        cResult[12] = total;
        cResult[13] = formatResult;
        tmp25 = formatResult;
      } else {
        tmp25 = cResult[13];
      }
      if (cResult[14] !== tmp25) {
        const obj5 = { variant: "text-xs/medium", children: tmp25 };
        const tmp29 = closure_7(guildId(5088).Text, obj5);
        cResult[14] = tmp25;
        cResult[15] = tmp29;
        tmp27 = tmp29;
      } else {
        tmp27 = cResult[15];
      }
      if (cResult[16] === tmp4.subscriptionInfo) {
        if (cResult[17] === tmp27) {
          let tmp30;
          if (cResult[18] === tmp21) {
            tmp30 = cResult[19];
          }
          if (cResult[20] === tmp4.guildCardDescription) {
            if (cResult[21] === tmp30) {
              let tmp34;
              if (cResult[22] === tmp18) {
                tmp34 = cResult[23];
              }
              if (cResult[24] === stateFromStores) {
                let tmp38;
                if (cResult[25] === tmp6) {
                  tmp38 = cResult[26];
                }
                if (cResult[27] === tmp7) {
                  if (cResult[28] === tmp4.guildCard) {
                    if (cResult[29] === tmp34) {
                      if (cResult[30] === tmp38) {
                        let tmp41;
                        if (cResult[31] === tmp14) {
                          tmp41 = cResult[32];
                        }
                        return tmp41;
                      }
                    }
                  }
                }
                const obj6 = { style: tmp44, activeOpacity: 0.5, accessibilityRole: "button", onPress: tmp7, children: items1 };
                items1 = [tmp14, tmp34, tmp38];
                const tmp43 = closure_8(TouchableHitBoxDefault, obj6);
                cResult[27] = tmp7;
                cResult[28] = tmp4.guildCard;
                cResult[29] = tmp34;
                cResult[30] = tmp38;
                cResult[31] = tmp14;
                cResult[32] = tmp43;
                tmp41 = tmp43;
              }
              const obj7 = { guild: stateFromStores, theme: tmp6 };
              const tmp40 = closure_7(BoostedGuildTierProgressCircleDefault, obj7);
              cResult[24] = stateFromStores;
              cResult[25] = tmp6;
              cResult[26] = tmp40;
              tmp38 = tmp40;
            }
          }
          const obj8 = { style: guildCardDescription, children: items2 };
          items2 = [tmp18, tmp30];
          const tmp37 = closure_8(View, obj8);
          cResult[20] = tmp4.guildCardDescription;
          cResult[21] = tmp30;
          cResult[22] = tmp18;
          cResult[23] = tmp37;
          tmp34 = tmp37;
        }
      }
      const obj9 = { style: subscriptionInfo, children: items3 };
      items3 = [tmp21, tmp27];
      const tmp33 = closure_8(View, obj9);
      cResult[16] = tmp4.subscriptionInfo;
      cResult[17] = tmp27;
      cResult[18] = tmp21;
      cResult[19] = tmp33;
      tmp30 = tmp33;
    }
    const obj10 = { guild: stateFromStores, size: guildId(6158).GuildIconSizes.LARGE, style: tmp4.guildIcon, selected: false };
    const tmp5Result4 = GuildIconDefault;
    const tmp17 = closure_7(tmp5Result4, obj10);
    cResult[5] = stateFromStores;
    cResult[6] = tmp4.guildIcon;
    cResult[7] = tmp17;
    tmp14 = tmp17;
  }
}) : (function GuildBoostingGuildListItem(guildId) {
  let intl;
  let items1;
  let items2;
  let items3;
  let obj9;
  guildId = guildId.guildId;
  const tmp = closure_9();
  const tmp4 = useThemeDefault();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  useGuildPowerupsBoostCountDefault;
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    let obj2 = {
      style: tmp.guildCard,
      activeOpacity: 0.5,
      accessibilityRole: "button",
      onPress: function handleSelectGuild() {
          const obj = transitionToGuild;
          obj.transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
          const obj2 = UserSettingsModalActionCreatorsDefault;
          obj2.close();
        },
      children: items1
    };
    const obj3 = { guild: stateFromStores, size: guildId(6158).GuildIconSizes.LARGE, style: tmp.guildIcon, selected: false };
    const tmp2Result = TouchableHitBoxDefault;
    const tmp2Result3 = GuildIconDefault;
    items1 = [closure_7(tmp2Result3, obj3), , ];
    const obj4 = { style: tmp.guildCardDescription, children: items2 };
    const obj5 = { variant: "text-md/bold", children: stateFromStores.name };
    items2 = [closure_7(guildId(5088).Text, obj5), ];
    const obj6 = { style: tmp.subscriptionInfo, children: items3 };
    const obj7 = { source: AssetRegistryDefault, style: tmp.premiumGuildImage, resizeMode: "contain", resizeMethod: "resize" };
    const tmp2Result4 = FastImageDefault;
    items3 = [closure_7(tmp2Result4, obj7), ];
    const obj8 = { variant: "text-xs/medium", children: intl.format(guildId(1126).t.If4iTS, obj9) };
    const Text = tmp5(5088).Text;
    intl = tmp5(1126).intl;
    obj9 = { subscriberCount: tmp8 };
    items3[1] = closure_7(Text, obj8);
    items2[1] = closure_8(View, obj6);
    items1[1] = closure_8(View, obj4);
    const obj10 = { guild: stateFromStores, theme: tmp4 };
    items1[2] = closure_7(BoostedGuildTierProgressCircleDefault, obj10);
    tmp9 = closure_8(tmp2Result, obj2);
  }
  return tmp9;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBoostingGuildList(arg0) {
  let flattenedGuildIds;
  let guildCount;
  let style;
  let tmp4;
  let tmp5;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(9);
  ({ guildCount, style } = arg0);
  if (undefined === guildCount) {
    guildCount = closure_6;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedGuildStore];
    const fn = function c() {
      return flattenedGuildIds.getFlattenedGuildIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === guildCount) {
    let tmp7;
    if (cResult[3] === stateFromStores) {
      tmp7 = cResult[4];
    }
    if (cResult[6] === style) {
      let tmp10;
      if (cResult[7] === tmp7) {
        tmp10 = cResult[8];
      }
      return tmp10;
    }
    const obj2 = { style, children: tmp7 };
    const tmp13 = metroImportDefault(View, obj2);
    cResult[6] = style;
    cResult[7] = tmp7;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(guildId) {
        const obj = { guildId };
        return closure_1_7(closure_1_10, obj, guildId);
      }
    }
    cResult[5] = S;
    tmp8 = S;
  } else {
    class S {
      constructor(guildId) {
        const obj = { guildId };
        return closure_1_7(closure_1_10, obj, guildId);
      }
    }
  }
  const substr = stateFromStores.slice(0, guildCount);
  const mapped = substr.map(tmp8);
  cResult[2] = guildCount;
  cResult[3] = stateFromStores;
  cResult[4] = mapped;
  tmp7 = mapped;
}) : (function GuildBoostingGuildList(guildCount) {
  let flattenedGuildIds;
  let substr;
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_6;
  }
  const style = guildCount.style;
  let obj = get_initialized;
  const items = [SortedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const obj2 = {
    style,
    children: substr.map((guildId) => {
      const obj = { guildId };
      return closure_1_7(closure_1_10, obj, guildId);
    })
  };
  substr = stateFromStores.slice(0, guildCount);
  return metroImportDefault(View, obj2);
});
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default tmp4;
