// Module ID: 16514
// Function ID: 16515
// Name: useGuildPowerupsCoachmark
// Dependencies: [19, 5080, 2086, 4969, 1085, 2061, 1096, 21, 5091, 587, 558, 576, 504, 4992, 8011, 12203, 12187, 16515, 12171, 12211, 1126, 2597, 12213, 16516, 12210, 4972, 16512, 16517, 16518, 12243, 16519, 9413, 2]

// Module 16514 (useGuildPowerupsCoachmark)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1096 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import useThemeDefault from "useTheme" /* 4992 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12171 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12203 */;
import useGetGuildPowerupBannerImage from "useGetGuildPowerupBannerImage" /* 12210 */;
import GuildPowerupsBoostGemDefault from "GuildPowerupsBoostGem" /* 12211 */;
import GuildPowerupsImageDefault from "GuildPowerupsImage" /* 12213 */;
import _modDef12243 from "module_12243" /* 12243 */;
import useGuildPowerupsBoostActionDefault from "useGuildPowerupsBoostAction" /* 16515 */;
import _modDef16517 from "module_16517" /* 16517 */;
import _modDef16518 from "module_16518" /* 16518 */;
import _modDef16519 from "module_16519" /* 16519 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 5080 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4969 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5, dependencyMap, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp2;
const _modDef16512 = tmp2(16512);
const _modDef16516 = tmp2(16516);
let react = react_mod;
let AccessibilityStore = AccessibilityStore_mod;
({ GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET: metroRequire, GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET: metroImportDefault, GuildPowerupType: metroImportAll } = GuildPowerupsConstants);
({ AnalyticsPages: c9, AnalyticsSections: c10 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const ThemeTypes = Constants2.ThemeTypes;
const jsx = Fragment.jsx;
let closure_14 = createStyles.createStyles((arg0) => {
  let str;
  const obj = { coachmarkImage: size, coachmarkCover: { resizeMode: "cover" }, boostGemBackground: { width: 50, height: 50, backgroundColor: str } };
  size = { height: 120, width: 260 - 2 * nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md };
  str = "#0000003D";
  if (arg0 === ThemeTypes.LIGHT) {
    str = "#0000001A";
  }
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupsCoachmark(arg0, guildId, type) {
  let closure_2;
  let closure_4;
  let first;
  let imageUrl;
  let length;
  let tmp11;
  let tmp12;
  let tmp18;
  let tmp22;
  let tmp6;
  let tmp7;
  let type2;
  _require = guildId;
  importDefault = type;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(144);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = GuildStore;
    let items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function y() {
      const guild = GuildStore.getGuild(guildId);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      return name;
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmp10 = closure_14(useThemeDefault());
  dependencyMap = tmp10;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp13 = AccessibilityStore;
    const items2 = [AccessibilityStore];
    class S {
      constructor() {
        return closure_4.useReducedMotion;
      }
    }
    cResult[4] = items2;
    cResult[5] = S;
    tmp12 = S;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, tmp12);
  const available = tmp9(8011)(guildId).available;
  const tmp15 = useHasAllocateBoostPermissionDefault(guildId);
  let type1;
  if (type != null) {
    type1 = type.type;
  }
  let powerup;
  if (type1 === tmp(12187).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK) {
    powerup = type.powerup;
  }
  let num7 = 0;
  if (null != powerup) {
    num7 = powerup.cost - available;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { page: constants2.GUILD_CHANNEL, section: constants3.GUILD_HEADER };
    class S {
      constructor() {
        return closure_4.useReducedMotion;
      }
    }
    cResult[6] = obj2;
    tmp18 = obj2;
  } else {
    tmp18 = cResult[6];
  }
  const tmp20 = useGuildPowerupsBoostActionDefault(guildId, powerup, num7, "boost_to_unlock_coachmark", tmp18);
  AccessibilityStore = tmp20;
  if (cResult[7] === num7) {
    if (cResult[8] === tmp15) {
      if (cResult[9] === guildId) {
        if (cResult[10] === stateFromStores) {
          if (cResult[11] === tmp20) {
            if (cResult[12] === type) {
              if (cResult[13] === tmp10) {
                tmp(9413);
                class S {
                  constructor() {
                    return closure_4.useReducedMotion;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = {
      title: "",
      description: "",
      position: "bottom",
      visible: false,
      onDismiss() {

        }
    };
    class S {
      constructor() {
        return closure_4.useReducedMotion;
      }
    }
    tmp22 = obj3;
  } else {
    tmp22 = cResult[16];
  }
  const tmp23 = tmp22;
  if (null != type) {
    if (cResult[17] === guildId) {
      if (cResult[20] !== type) {
        function handleDismiss() {
          const obj = type;
          if (null != type) {
            obj.markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[20] = type;
        class S {
          constructor() {
            return closure_4.useReducedMotion;
          }
        }
        cResult[21] = handleDismiss;
      }
      type = type.type;
      class S {
        constructor() {
          return closure_4.useReducedMotion;
        }
      }
    }
    function handleButtonPress() {
      const obj = type;
      if (null != type) {
        obj.markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj2 = { guildId };
        openGuildPowerupsModalDefault(obj2);
      }
    }
    class S {
      constructor() {
        return closure_4.useReducedMotion;
      }
    }
    cResult[18] = type;
    cResult[19] = handleButtonPress;
  }
  cResult[7] = num7;
  cResult[8] = tmp15;
  cResult[9] = guildId;
  cResult[10] = stateFromStores;
  cResult[11] = tmp20;
  cResult[12] = type;
  cResult[13] = tmp10;
  cResult[14] = stateFromStores1;
  cResult[15] = tmp23;
}) : (function useGuildPowerupsCoachmark(arg0, arg1, type) {
  let closure_0;
  let closure_3;
  let stateFromStores;
  let stateFromStores1;
  _require = arg1;
  importDefault = type;
  let tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("get initialized");
  let items = [closure_5];
  const items1 = [arg1];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  }, items1);
  let tmp4 = importDefault;
  let tmp5 = closure_14(require("useTheme")());
  react = tmp5;
  let obj2 = require("get initialized");
  const items2 = [stateFromStores1];
  stateFromStores1 = obj2.useStateFromStores(items2, () => stateFromStores1.useReducedMotion);
  const available = require("useGuildPowerupsBoostCount")(arg1).available;
  const tmp7 = require("useHasAllocateBoostPermission")(arg1);
  closure_5 = tmp7;
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let powerup;
  if (type === tmp(tmp2[16]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK) {
    powerup = type.powerup;
  }
  let num = 0;
  if (null != powerup) {
    num = powerup.cost - available;
  }
  let obj3 = { page: constants2.GUILD_CHANNEL, section: constants3.GUILD_HEADER };
  const tmp10 = tmp4(tmp2[17])(arg1, powerup, num, "boost_to_unlock_coachmark", obj3);
  let closure_7 = tmp10;
  const items3 = [num, tmp7, arg1, stateFromStores, tmp10, type, tmp5, stateFromStores1];
  const memo = react.useMemo(() => {
    let LmpChE;
    let formatToPlainString2;
    let found1;
    let guildPowerupBannerImage;
    let intl;
    let intl10;
    let intl11;
    let intl12;
    let intl13;
    let intl14;
    let intl15;
    let intl16;
    let intl21;
    let intl22;
    let intl23;
    let intl24;
    let intl25;
    let intl26;
    let intl27;
    let intl28;
    let intl29;
    let intl30;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let obj10;
    let obj3;
    let obj4;
    let str5;
    let obj = {
      title: "",
      description: "",
      position: "bottom",
      visible: false,
      onDismiss() {

      }
    };
    let tmp = guildPowerupBannerImage;
    if (null == guildPowerupBannerImage) {
      return obj;
    } else {
      function handleButtonPress() {
        const obj = guildPowerupBannerImage;
        if (null != guildPowerupBannerImage) {
          obj.markAsDismissed(constants2.TAKE_ACTION);
          const obj2 = { guildId: powerups };
          guildPowerupBannerImage(stateFromStores[18])(obj2);
        }
      }
      function handleDismiss() {
        const obj = guildPowerupBannerImage;
        if (null != guildPowerupBannerImage) {
          obj.markAsDismissed(constants2.USER_DISMISS);
        }
      }
      type = tmp.type;
      const tmp52 = stateFromStores;
      if (closure_0(stateFromStores[16]).GuildPowerupNotificationPopoutType.LEVEL_REACHED === type) {
        let obj2 = {
          visible: true,
          renderImgComponent() {
                return jsx(guildPowerupBannerImage(stateFromStores[19]), { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 });
              },
          title: intl25.formatToPlainString(type(tmp52[21])["Zg/m9K"], obj3),
          description: intl26.formatToPlainString(type(tmp52[21])["1EGXSK"], obj4),
          buttonLabel: intl27.string(closure_0(tmp52[20]).t.RzWDqY),
          buttonVariant: "primary",
          onButtonPress: handleButtonPress,
          onDismiss: handleDismiss
        };
        const merged = Object.assign(obj);
        intl25 = tmp51(tmp52[20]).intl;
        obj3 = { perkName: tmp.powerup.title };
        intl26 = tmp51(tmp52[20]).intl;
        obj4 = { perkName: tmp.powerup.title };
        intl27 = tmp51(tmp52[20]).intl;
        return obj2;
      } else if (closure_0(tmp52[16]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE === type) {
        const obj5 = {
          visible: true,
          renderImgComponent() {
                return jsx(guildPowerupBannerImage(stateFromStores[19]), { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 });
              },
          title: intl22.string(type(tmp52[21]).QpQBPQ),
          description: intl23.string(type(tmp52[21])["6hn0xF"]),
          buttonLabel: intl24.string(closure_0(tmp52[20]).t.RzWDqY),
          buttonVariant: "primary",
          onButtonPress: handleButtonPress,
          onDismiss: handleDismiss
        };
        const merged1 = Object.assign(obj);
        intl22 = tmp51(tmp52[20]).intl;
        intl23 = tmp51(tmp52[20]).intl;
        intl24 = tmp51(tmp52[20]).intl;
        return obj5;
      } else if (closure_0(tmp52[16]).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE === type) {
        const powerups = tmp.powerups;
        if (0 === powerups.length) {
          return obj;
        } else {
          let formatToPlainStringResult;
          let tmp35;
          if (powerups.length >= 3) {
            const intl19 = tmp51(tmp52[20]).intl;
            const obj6 = { perk: powerups[0].title, perk2: powerups[1].title, perk3: powerups[2].title };
            formatToPlainStringResult = intl19.formatToPlainString(type(tmp52[21])["6Sv+3M"], obj6);
            tmp35 = type;
          } else if (2 === powerups.length) {
            const intl18 = tmp51(tmp52[20]).intl;
            const formatToPlainString = intl18.formatToPlainString;
            const _HermesInternal = HermesInternal;
            const obj7 = { perks: "" + powerups[0].title + " & " + powerups[1].title };
            const wcQOqC = type(tmp52[21]).wcQOqC;
            formatToPlainStringResult = formatToPlainString(wcQOqC, obj7);
            tmp35 = type;
          } else {
            const intl17 = tmp51(tmp52[20]).intl;
            tmp35 = type;
            const obj8 = { perk: powerups[0].title };
            formatToPlainStringResult = intl17.formatToPlainString(type(tmp52[21]).ZF8NT6, obj8);
          }
          const obj9 = {
            visible: true,
            renderImgComponent() {
                    let items;
                    let str;
                    const tmp = jsx;
                    const tmp4 = GuildPowerupsImageDefault;
                    if (powerups.length > 1) {
                      str = _modDef16516;
                    } else {
                      const obj = useGetGuildPowerupBannerImage;
                      str = obj.getGuildPowerupBannerImage(arr[0], stateFromStores1, true);
                      if (str == null) {
                        str = "";
                      }
                    }
                    const obj2 = { imageUrl: str, isAnimated: 1 === powerups.length, style: items };
                    items = [, ];
                    ({ coachmarkImage: arr2[0], coachmarkCover: arr2[1] } = closure_3);
                    return tmp(tmp4, obj2);
                  },
            title: formatToPlainString2(LmpChE, obj10),
            description: formatToPlainStringResult,
            buttonLabel: intl21.string(closure_0(tmp52[20]).t.RzWDqY),
            buttonVariant: "primary",
            onButtonPress: handleButtonPress,
            onDismiss: handleDismiss
          };
          const merged2 = Object.assign(obj);
          const intl20 = tmp51(tmp52[20]).intl;
          formatToPlainString2 = intl20.formatToPlainString;
          let str10 = found1;
          LmpChE = tmp35(tmp52[21]).LmpChE;
          if (found1 == null) {
            str10 = "";
          }
          obj10 = { guildName: str10 };
          intl21 = tmp51(tmp52[20]).intl;
          return obj9;
        }
      } else if (closure_0(tmp52[16]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE === type) {
        let tmp18;
        const powerups1 = tmp.powerups;
        const found = powerups1.find((skuId) => skuId.skuId === powerups(found1[25]).GUILD_POWERUP_TAG_SKU_ID);
        if (null != found) {
          const tmp51Result = closure_0(tmp52[24]);
          guildPowerupBannerImage = tmp51Result.getGuildPowerupBannerImage(found, stateFromStores1, true);
          if (null != guildPowerupBannerImage) {
            const obj11 = {
              visible: true,
              renderImgComponent() {
                        return jsx(GuildPowerupsImageDefault, { imageUrl: guildPowerupBannerImage, isAnimated: !stateFromStores1, style: powerup.coachmarkImage });
                      },
              title: intl14.string(type(tmp52[21]).GcEkAP),
              description: intl15.string(type(tmp52[21]).yo0g7X),
              buttonLabel: intl16.string(closure_0(tmp52[20]).t.RzWDqY),
              buttonVariant: "primary",
              onButtonPress: handleButtonPress,
              onDismiss: handleDismiss
            };
            const merged3 = Object.assign(obj);
            intl14 = tmp51(tmp52[20]).intl;
            intl15 = tmp51(tmp52[20]).intl;
            intl16 = tmp51(tmp52[20]).intl;
            return obj11;
          }
        }
        found1 = powerups1.find((skuId) => skuId.skuId === powerups(found1[25]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
        if (null != found1) {
          const obj12 = {
            visible: true,
            renderImgComponent() {
                    let items;
                    const tmp4 = GuildPowerupsImageDefault;
                    const obj = useGetGuildPowerupBannerImage;
                    guildPowerupBannerImage = obj.getGuildPowerupBannerImage(found1, stateFromStores1, true);
                    const tmp = jsx;
                    const tmp5 = stateFromStores1;
                    if (guildPowerupBannerImage == null) {
                      guildPowerupBannerImage = _modDef16512;
                    }
                    const obj2 = { imageUrl: guildPowerupBannerImage, isAnimated: !tmp5, style: items };
                    items = [, ];
                    ({ coachmarkImage: arr[0], coachmarkCover: arr[1] } = closure_3);
                    return tmp(tmp4, obj2);
                  },
            title: found1.title,
            description: str5,
            buttonLabel: intl13.string(closure_0(tmp52[20]).t.RzWDqY),
            buttonVariant: "primary",
            onButtonPress: handleButtonPress,
            onDismiss: handleDismiss
          };
          const merged4 = Object.assign(obj);
          str5 = "";
          if (typeof found1.description === "string") {
            str5 = found1.description;
          }
          intl13 = tmp51(tmp52[20]).intl;
          tmp18 = obj12;
        } else if (null != powerups1.find((skuId) => skuId.skuId === powerups(found1[25]).VANITY_URL_POWERUP_SKU_ID)) {
          const obj13 = {
            visible: true,
            renderImgComponent() {
                    guildPowerupBannerImage(stateFromStores[22]);
                    return <tmp imageUrl={guildPowerupBannerImage(stateFromStores[27])} style={powerup.coachmarkImage} />;
                  },
            title: intl10.string(type(tmp52[21]).Ygpx4Q),
            description: intl11.string(type(tmp52[21]).mmNkUA),
            buttonLabel: intl12.string(closure_0(tmp52[20]).t.RzWDqY),
            buttonVariant: "primary",
            onButtonPress: handleButtonPress,
            onDismiss: handleDismiss
          };
          const merged5 = Object.assign(obj);
          intl10 = tmp51(tmp52[20]).intl;
          intl11 = tmp51(tmp52[20]).intl;
          intl12 = tmp51(tmp52[20]).intl;
          tmp18 = obj13;
        } else if (null != powerups1.find((skuId) => set2.has(skuId.skuId))) {
          const obj14 = {
            visible: true,
            renderImgComponent() {
                    guildPowerupBannerImage(stateFromStores[22]);
                    return <tmp imageUrl={guildPowerupBannerImage(stateFromStores[28])} style={powerup.coachmarkImage} />;
                  },
            title: intl7.string(type(tmp52[21])["kA2c+n"]),
            description: intl8.string(type(tmp52[21]).TUilLj),
            buttonLabel: intl9.string(closure_0(tmp52[20]).t.RzWDqY),
            buttonVariant: "primary",
            onButtonPress: handleButtonPress,
            onDismiss: handleDismiss
          };
          const merged6 = Object.assign(obj);
          intl7 = tmp51(tmp52[20]).intl;
          intl8 = tmp51(tmp52[20]).intl;
          intl9 = tmp51(tmp52[20]).intl;
          tmp18 = obj14;
        } else if (null != powerups1.find((skuId) => num.has(skuId.skuId))) {
          const obj15 = {
            visible: true,
            renderImgComponent() {
                    guildPowerupBannerImage(stateFromStores[22]);
                    return <tmp imageUrl={guildPowerupBannerImage(stateFromStores[29])} style={powerup.coachmarkImage} />;
                  },
            title: intl4.string(type(tmp52[21])["kA2c+n"]),
            description: intl5.string(type(tmp52[21]).TUilLj),
            buttonLabel: intl6.string(closure_0(tmp52[20]).t.RzWDqY),
            buttonVariant: "primary",
            onButtonPress: handleButtonPress,
            onDismiss: handleDismiss
          };
          let tmp14 = obj15;
          const merged7 = Object.assign(obj);
          intl4 = tmp51(tmp52[20]).intl;
          intl5 = tmp51(tmp52[20]).intl;
          intl6 = tmp51(tmp52[20]).intl;
          tmp18 = obj15;
        } else {
          tmp18 = obj;
          if (null != powerups1.find((skuId) => skuId.skuId === powerups(found1[25]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID)) {
            const obj16 = {
              visible: true,
              renderImgComponent() {
                        guildPowerupBannerImage(stateFromStores[22]);
                        return <tmp imageUrl={guildPowerupBannerImage(stateFromStores[30])} isAnimated={false} style={powerup.coachmarkImage} />;
                      },
              title: intl28.string(type(tmp52[21]).rp0Ff1),
              description: intl29.string(type(tmp52[21])["3L/DZq"]),
              buttonLabel: intl30.string(closure_0(tmp52[20]).t.RzWDqY),
              buttonVariant: "primary",
              onButtonPress: handleButtonPress,
              onDismiss: handleDismiss
            };
            const merged8 = Object.assign(obj);
            intl28 = tmp51(tmp52[20]).intl;
            intl29 = tmp51(tmp52[20]).intl;
            intl30 = tmp51(tmp52[20]).intl;
            tmp18 = obj16;
          }
        }
        return tmp18;
      } else if (closure_0(tmp52[16]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK === type) {
        const powerup = tmp.powerup;
        const obj17 = {
          visible: true,
          offsetY: 8,
          renderImgComponent() {
                let items;
                let tmp9Result;
                if (powerup.type === metroImportAll.LEVEL) {
                  tmp9Result = jsx(GuildPowerupsBoostGemDefault, { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 });
                } else {
                  const tmp12 = GuildPowerupsImageDefault;
                  const obj3 = useGetGuildPowerupBannerImage;
                  let str = obj3.getGuildPowerupBannerImage(tmp, stateFromStores1, true);
                  const tmp14 = stateFromStores1;
                  const tmp9 = jsx;
                  if (str == null) {
                    str = "";
                  }
                  const obj = { imageUrl: str, isAnimated: !tmp14, style: items };
                  items = [powerup.coachmarkImage, powerup.coachmarkCover];
                  tmp9Result = tmp9(tmp12, obj);
                }
                return tmp9Result;
              },
          title: intl.string(type(tmp52[21]).n37JhA)
        };
        let tmp2 = obj17;
        const merged9 = Object.assign(obj);
        num = 8;
        intl = tmp51(tmp52[20]).intl;
        let tmp5 = type;
        const intl2 = tmp51(tmp52[20]).intl;
        if (true !== closure_5) {
          let Yr1ogl;
          if (powerup.type !== constants.LEVEL) {
            Yr1ogl = tmp5(tmp52[21])["7MZ2tu"];
          }
          let tmp9 = num;
          const obj18 = { boostCount: num, perkName: powerup.title };
          obj17.description = tmp6(Yr1ogl, obj18);
          const intl3 = tmp51(tmp52[20]).intl;
          obj17.buttonLabel = intl3.string(closure_0(tmp52[20]).t.oPAx73);
          let str = "primary";
          obj17.buttonVariant = "primary";
          obj17.onButtonPress = function onButtonPress() {
            guildPowerupBannerImage.markAsDismissed(constants2.TAKE_ACTION);
            set2();
          };
          obj17.onDismiss = handleDismiss;
          return obj17;
        }
        Yr1ogl = tmp5(tmp52[21]).Yr1ogl;
      } else {
        if (closure_0(tmp52[16]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE !== type) {
          if (closure_0(tmp52[16]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE !== type) {
            const GAME_SERVER_HOSTING_ENABLED = tmp51(tmp52[16]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_ENABLED;
          }
        }
        return obj;
      }
    }
  }, items3);
  const tmpResult = tmp(tmp2[31]);
  const coachmark = tmpResult.useCoachmark(arg0, memo);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx");

export default tmp4;
