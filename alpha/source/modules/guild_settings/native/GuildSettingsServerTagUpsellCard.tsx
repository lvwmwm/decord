// Module ID: 19132
// Function ID: 19133
// Name: GuildSettingsServerTagUpsellCard
// Dependencies: [19, 17, 5182, 1084, 21, 4972, 587, 558, 576, 5186, 504, 13458, 13428, 5259, 13461, 1125, 5235, 5978, 17691, 5245, 5038, 2]

// Module 19132 (GuildSettingsServerTagUpsellCard)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import Powerups from "Powerups" /* 5186 */;
import LinearGradientDefault from "LinearGradient" /* 5259 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 13428 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 13458 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5182 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
({ View: closure_4, StyleSheet } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const colors = ["rgba(88, 101, 242, 0.3)", "rgba(22, 26, 138, 0.3)"];
const colors2 = ["rgba(151, 151, 159, 0.04)", "rgba(151, 151, 159, 0.04)"];
let c13 = "#29292D";
let obj = { card: obj2, imageContainer: { height: 104, justifyContent: "center" }, textBlock: { alignItems: "center" }, centerText: { textAlign: "center" }, body: { maxWidth: 320 }, backgroundLayer: StyleSheet.absoluteFillObject, powerupImage: { width: "92%" } };
obj2 = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: "#29292D", overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_20, paddingBottom: nativeDefault.space.PX_24 };
let closure_14 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsServerTagUpsellCard(guildId) {
  let centerText;
  let first;
  let items5;
  let textBlock;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(48);
  guildId = guildId.guildId;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
      let tmp2;
      if (stateForGuild != null) {
        tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
      }
      return tmp2;
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  const tmp11 = useGetGuildPowerupBannerImageDefault(stateFromStores, true);
  if (cResult[4] !== guildId) {
    class E {
      constructor() {
        const tmp = guildId;
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const obj = GuildPowerupsActionCreators;
          const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
        }
      }
    }
    const items2 = [guildId];
    cResult[4] = guildId;
    cResult[5] = E;
    cResult[6] = items2;
    tmp13 = items2;
    tmp12 = E;
  } else {
    class E {
      constructor() {
        const tmp = guildId;
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const obj = GuildPowerupsActionCreators;
          const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
        }
      }
    }
    tmp13 = cResult[6];
  }
  const effect = react.useEffect(tmp12, tmp13);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const tmp = guildId;
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const obj = GuildPowerupsActionCreators;
          const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
        }
      }
    }
    const items3 = ["rgba(41, 41, 45, 0)", c13];
    const items4 = [0, 0.7];
    const point = { x: 0.5, y: 0 };
    const point1 = { x: 0.5, y: 1 };
    cResult[7] = point1;
    cResult[8] = items3;
    cResult[9] = items4;
    cResult[10] = point;
    tmp18 = point;
    tmp17 = items4;
    tmp16 = items3;
    tmp15 = point1;
  } else {
    class E {
      constructor() {
        const tmp = guildId;
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const obj = GuildPowerupsActionCreators;
          const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
        }
      }
    }
    tmp16 = cResult[8];
    tmp17 = cResult[9];
    tmp18 = cResult[10];
  }
  if (cResult[11] !== tmp4.backgroundLayer) {
    class E {
      constructor() {
        const tmp = guildId;
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const obj = GuildPowerupsActionCreators;
          const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
        }
      }
    }
    const obj2 = { style: tmp4.backgroundLayer, colors: tmp16, locations: tmp17, start: tmp18, end: tmp15, pointerEvents: "none" };
    const obj3 = { style: tmp4.backgroundLayer, colors, start, end, pointerEvents: "none" };
    const tmp22 = closure_7(LinearGradientDefault, obj2);
    const obj4 = { style: tmp4.backgroundLayer, colors: colors2, start, end, pointerEvents: "none" };
    const tmp26 = closure_7(LinearGradientDefault, obj3);
    cResult[11] = tmp4.backgroundLayer;
    cResult[12] = tmp22;
    cResult[13] = tmp26;
    cResult[14] = closure_7(LinearGradientDefault, obj4);
    const tmp28 = closure_7(LinearGradientDefault, obj4);
  } else {
    class E {
      constructor() {
        const tmp = guildId;
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const obj = GuildPowerupsActionCreators;
          const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
        }
      }
    }
  }
  if (cResult[15] === tmp11) {
    class E {
      constructor() {
        const tmp = guildId;
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const obj = GuildPowerupsActionCreators;
          const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
        }
      }
    }
    if (cResult[18] === tmp4.imageContainer) {
      let tmp35;
      class E {
        constructor() {
          const tmp = guildId;
          if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
            const obj = GuildPowerupsActionCreators;
            const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
          }
        }
      }
      const _Symbol = Symbol;
      ({ textBlock, centerText } = tmp4);
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            const tmp = guildId;
            if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
              const obj = GuildPowerupsActionCreators;
              const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
          }
        }
        const stringResult = obj10.string(tmp(1125).t["2QmKZ2"]);
        cResult[21] = stringResult;
        tmp35 = stringResult;
      } else {
        class E {
          constructor() {
            const tmp = guildId;
            if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
              const obj = GuildPowerupsActionCreators;
              const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
          }
        }
      }
      if (cResult[22] !== tmp4.centerText) {
        class E {
          constructor() {
            const tmp = guildId;
            if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
              const obj = GuildPowerupsActionCreators;
              const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
          }
        }
        const obj5 = { variant: "heading-xl/semibold", color: "text-strong", style: centerText, children: tmp35 };
        cResult[22] = tmp4.centerText;
        cResult[23] = closure_7(tmp(5235).Text, obj5);
        const tmp38 = closure_7(tmp(5235).Text, obj5);
      } else {
        class E {
          constructor() {
            const tmp = guildId;
            if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
              const obj = GuildPowerupsActionCreators;
              const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
          }
        }
      }
      if (cResult[24] === tmp4.body) {
        let tmp40;
        class E {
          constructor() {
            const tmp = guildId;
            if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
              const obj = GuildPowerupsActionCreators;
              const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              const tmp = guildId;
              if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
                const obj = GuildPowerupsActionCreators;
                const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
              }
            }
          }
          const stringResult1 = obj12.string(tmp(1125).t.Tg0fDm);
          cResult[27] = stringResult1;
          tmp40 = stringResult1;
        } else {
          class E {
            constructor() {
              const tmp = guildId;
              if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
                const obj = GuildPowerupsActionCreators;
                const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
              }
            }
          }
        }
        if (cResult[28] !== tmp39) {
          class E {
            constructor() {
              const tmp = guildId;
              if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
                const obj = GuildPowerupsActionCreators;
                const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
              }
            }
          }
          const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp39, children: tmp40 };
          cResult[28] = tmp39;
          cResult[29] = closure_7(tmp(5235).Text, obj6);
          const tmp43 = closure_7(tmp(5235).Text, obj6);
        } else {
          class E {
            constructor() {
              const tmp = guildId;
              if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
                const obj = GuildPowerupsActionCreators;
                const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
              }
            }
          }
        }
        if (cResult[30] === tmp4.textBlock) {
          class E {
            constructor() {
              const tmp = guildId;
              if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
                const obj = GuildPowerupsActionCreators;
                const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
              }
            }
          }
        }
        const obj7 = { spacing: nativeDefault.space.PX_8, style: textBlock, children: items5 };
        const Stack = tmp(5978).Stack;
        items5 = [tmp37, tmp42];
        cResult[30] = tmp4.textBlock;
        cResult[31] = tmp37;
        cResult[32] = tmp42;
        cResult[33] = closure_8(Stack, obj7);
        const tmp46 = closure_8(Stack, obj7);
      }
      const items6 = [, ];
      ({ centerText: arr6[0], body: arr6[1] } = tmp4);
      cResult[24] = tmp4.body;
      cResult[25] = tmp4.centerText;
      cResult[26] = items6;
    }
    const obj8 = { style: tmp4.imageContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp29 };
    cResult[18] = tmp4.imageContainer;
    cResult[19] = tmp29;
    cResult[20] = closure_7(closure_4, obj8);
    const tmp34 = closure_7(closure_4, obj8);
  }
  let tmp30 = null != tmp11;
  if (tmp30) {
    class E {
      constructor() {
        const tmp = guildId;
        if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
          const obj = GuildPowerupsActionCreators;
          const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
        }
      }
    }
    const obj9 = { imageUrl: tmp11, style: tmp4.powerupImage };
    tmp30 = closure_7(tmp10(13461), obj9);
  }
  cResult[15] = tmp11;
  cResult[16] = tmp4.powerupImage;
  cResult[17] = tmp30;
}) : (function GuildSettingsServerTagUpsellCard(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj3;
  let tmp8Result;
  guildId = guildId.guildId;
  const onUnlockPress = guildId.onUnlockPress;
  let tmp = closure_14();
  let tmp2 = guildId;
  let obj = guildId(504);
  const items = [GuildPowerupsStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
    let tmp2;
    if (stateForGuild != null) {
      tmp2 = stateForGuild.allPowerups[Powerups.GUILD_POWERUP_TAG_SKU_ID];
    }
    return tmp2;
  }, items1);
  const tmp6 = useGetGuildPowerupBannerImageDefault(stateFromStores, true);
  const items2 = [guildId];
  const effect = react.useEffect(() => {
    const tmp = guildId;
    if (GuildPowerupsStore.shouldFetchCatalogForGuild(guildId)) {
      const obj = GuildPowerupsActionCreators;
      const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp);
    }
  }, items2);
  const obj2 = { theme: ThemeTypes.DARK, children: closure_8(closure_4, obj3) };
  obj3 = { style: tmp.card, children: items4 };
  const ThemeContextProvider = guildId(5038).ThemeContextProvider;
  const obj4 = { style: tmp.backgroundLayer, colors: items3, locations: [0, 0.7], start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 }, pointerEvents: "none" };
  items3 = ["rgba(41, 41, 45, 0)", c13];
  items4 = [closure_7(LinearGradientDefault, obj4), , , ];
  const obj5 = { style: tmp.backgroundLayer, colors, start, end, pointerEvents: "none" };
  items4[1] = closure_7(LinearGradientDefault, obj5);
  const obj6 = { style: tmp.backgroundLayer, colors: colors2, start, end, pointerEvents: "none" };
  items4[2] = closure_7(LinearGradientDefault, obj6);
  const obj7 = { spacing: nativeDefault.space.PX_16, children: items5 };
  const Stack = guildId(5978).Stack;
  const obj8 = { style: tmp.imageContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp8Result };
  tmp8Result = null != tmp6;
  if (tmp8Result) {
    const obj9 = { imageUrl: tmp6, style: tmp.powerupImage };
    tmp8Result = tmp8(tmp5(13461), obj9);
  }
  items5 = [closure_7(closure_4, obj8), , ];
  const obj10 = { spacing: nativeDefault.space.PX_8, style: tmp.textBlock, children: items6 };
  const Stack2 = tmp2(5978).Stack;
  const obj11 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp.centerText, children: intl.string(tmp2(1125).t["2QmKZ2"]) };
  const Text = tmp2(5235).Text;
  intl = tmp2(1125).intl;
  items6 = [closure_7(Text, obj11), ];
  const obj12 = { variant: "text-sm/medium", color: "text-subtle", style: items7, children: intl2.string(tmp2(1125).t.Tg0fDm) };
  items7 = [, ];
  ({ centerText: arr8[0], body: arr8[1] } = tmp);
  const Text2 = tmp2(5235).Text;
  intl2 = tmp2(1125).intl;
  items6[1] = closure_7(Text2, obj12);
  items5[1] = closure_8(Stack2, obj10);
  const obj13 = { variant: "primary", size: "lg", text: intl3.string(tmp2(1125).t.kMRDWs), icon: closure_7(tmp2(17691).BoostTier2Icon, { color: "white" }), iconPosition: "start", onPress: onUnlockPress };
  const Button = tmp2(5245).Button;
  intl3 = tmp2(1125).intl;
  items5[2] = closure_7(Button, obj13);
  items4[3] = closure_8(Stack, obj7);
  return closure_7(ThemeContextProvider, obj2);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagUpsellCard.tsx");

export default tmp4;
