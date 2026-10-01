// Module ID: 15804
// Function ID: 15805
// Name: useGuildPowerupsCoachmark
// Dependencies: [19, 4825, 2067, 4724, 1074, 2042, 1085, 21, 4836, 576, 504, 4767, 4743, 12009, 11991, 15805, 11975, 12017, 1115, 2519, 12019, 15806, 12016, 4727, 15802, 15807, 15808, 12047, 15809, 10589, 2]
// Exports: default

// Module 15804 (useGuildPowerupsCoachmark)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import useGetGuildPowerupBannerImage from "useGetGuildPowerupBannerImage" /* 12016 */;
import GuildPowerupsBoostGemDefault from "GuildPowerupsBoostGem" /* 12017 */;
import GuildPowerupsImageDefault from "GuildPowerupsImage" /* 12019 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp2;
const _modDef15802 = tmp2(15802);
const _modDef15806 = tmp2(15806);
let react = react_mod;
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
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx");

export default function useGuildPowerupsCoachmark(targetRef, arg1, type) {
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
  if (type === tmp(tmp2[14]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK) {
    powerup = type.powerup;
  }
  let num = 0;
  if (null != powerup) {
    num = powerup.cost - available;
  }
  let obj3 = { page: constants2.GUILD_CHANNEL, section: constants3.GUILD_HEADER };
  const tmp10 = tmp4(tmp2[15])(arg1, powerup, num, "boost_to_unlock_coachmark", obj3);
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
          guildPowerupBannerImage(stateFromStores[16])(obj2);
        }
      }
      function handleDismiss() {
        const obj = guildPowerupBannerImage;
        if (null != guildPowerupBannerImage) {
          obj.markAsDismissed(constants2.USER_DISMISS);
        }
      }
      type = tmp.type;
      const tmp51 = stateFromStores;
      if (closure_0(stateFromStores[14]).GuildPowerupNotificationPopoutType.LEVEL_REACHED === type) {
        let obj2 = {
          visible: true,
          renderImgComponent() {
                return jsx(guildPowerupBannerImage(stateFromStores[17]), { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 });
              },
          title: intl25.formatToPlainString(type(tmp51[19])["Zg/m9K"], obj3),
          description: intl26.formatToPlainString(type(tmp51[19])["1EGXSK"], obj4),
          buttonLabel: intl27.string(closure_0(tmp51[18]).t.RzWDqY),
          buttonVariant: "primary",
          onButtonPress: handleButtonPress,
          onDismiss: handleDismiss
        };
        const merged = Object.assign(obj);
        intl25 = tmp50(tmp51[18]).intl;
        obj3 = { perkName: tmp.powerup.title };
        intl26 = tmp50(tmp51[18]).intl;
        obj4 = { perkName: tmp.powerup.title };
        intl27 = tmp50(tmp51[18]).intl;
        return obj2;
      } else if (closure_0(tmp51[14]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE === type) {
        const obj5 = {
          visible: true,
          renderImgComponent() {
                return jsx(guildPowerupBannerImage(stateFromStores[17]), { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 });
              },
          title: intl22.string(type(tmp51[19]).QpQBPQ),
          description: intl23.string(type(tmp51[19])["6hn0xF"]),
          buttonLabel: intl24.string(closure_0(tmp51[18]).t.RzWDqY),
          buttonVariant: "primary",
          onButtonPress: handleButtonPress,
          onDismiss: handleDismiss
        };
        const merged1 = Object.assign(obj);
        intl22 = tmp50(tmp51[18]).intl;
        intl23 = tmp50(tmp51[18]).intl;
        intl24 = tmp50(tmp51[18]).intl;
        return obj5;
      } else if (closure_0(tmp51[14]).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE === type) {
        const powerups = tmp.powerups;
        if (0 === powerups.length) {
          return obj;
        } else {
          let formatToPlainStringResult;
          let tmp34;
          if (powerups.length >= 3) {
            const intl19 = tmp50(tmp51[18]).intl;
            const obj6 = { perk: powerups[0].title, perk2: powerups[1].title, perk3: powerups[2].title };
            formatToPlainStringResult = intl19.formatToPlainString(type(tmp51[19])["6Sv+3M"], obj6);
            tmp34 = type;
          } else if (2 === powerups.length) {
            const intl18 = tmp50(tmp51[18]).intl;
            const formatToPlainString = intl18.formatToPlainString;
            const _HermesInternal = HermesInternal;
            const obj7 = { perks: "" + powerups[0].title + " & " + powerups[1].title };
            const wcQOqC = type(tmp51[19]).wcQOqC;
            formatToPlainStringResult = formatToPlainString(wcQOqC, obj7);
            tmp34 = type;
          } else {
            const intl17 = tmp50(tmp51[18]).intl;
            tmp34 = type;
            const obj8 = { perk: powerups[0].title };
            formatToPlainStringResult = intl17.formatToPlainString(type(tmp51[19]).ZF8NT6, obj8);
          }
          const obj9 = {
            visible: true,
            renderImgComponent() {
                    let items;
                    let str;
                    const tmp = jsx;
                    const tmp4 = GuildPowerupsImageDefault;
                    if (powerups.length > 1) {
                      str = _modDef15806;
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
            buttonLabel: intl21.string(closure_0(tmp51[18]).t.RzWDqY),
            buttonVariant: "primary",
            onButtonPress: handleButtonPress,
            onDismiss: handleDismiss
          };
          const merged2 = Object.assign(obj);
          const intl20 = tmp50(tmp51[18]).intl;
          formatToPlainString2 = intl20.formatToPlainString;
          let str10 = found1;
          LmpChE = tmp34(tmp51[19]).LmpChE;
          if (found1 == null) {
            str10 = "";
          }
          obj10 = { guildName: str10 };
          intl21 = tmp50(tmp51[18]).intl;
          return obj9;
        }
      } else if (closure_0(tmp51[14]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE === type) {
        const powerups1 = tmp.powerups;
        const found = powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_TAG_SKU_ID);
        if (null != found) {
          const tmp50Result = closure_0(tmp51[22]);
          guildPowerupBannerImage = tmp50Result.getGuildPowerupBannerImage(found, stateFromStores1, true);
          if (null != guildPowerupBannerImage) {
            const obj11 = {
              visible: true,
              renderImgComponent() {
                        return jsx(GuildPowerupsImageDefault, { imageUrl: guildPowerupBannerImage, isAnimated: !stateFromStores1, style: powerup.coachmarkImage });
                      },
              title: intl14.string(type(tmp51[19]).GcEkAP),
              description: intl15.string(type(tmp51[19]).yo0g7X),
              buttonLabel: intl16.string(closure_0(tmp51[18]).t.RzWDqY),
              buttonVariant: "primary",
              onButtonPress: handleButtonPress,
              onDismiss: handleDismiss
            };
            const merged3 = Object.assign(obj);
            intl14 = tmp50(tmp51[18]).intl;
            intl15 = tmp50(tmp51[18]).intl;
            intl16 = tmp50(tmp51[18]).intl;
            return obj11;
          }
        }
        found1 = powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
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
                      guildPowerupBannerImage = _modDef15802;
                    }
                    const obj2 = { imageUrl: guildPowerupBannerImage, isAnimated: !tmp5, style: items };
                    items = [, ];
                    ({ coachmarkImage: arr[0], coachmarkCover: arr[1] } = closure_3);
                    return tmp(tmp4, obj2);
                  },
            title: found1.title,
            description: str5,
            buttonLabel: intl13.string(closure_0(tmp51[18]).t.RzWDqY),
            buttonVariant: "primary",
            onButtonPress: handleButtonPress,
            onDismiss: handleDismiss
          };
          const merged4 = Object.assign(obj);
          str5 = "";
          if (typeof found1.description === "string") {
            str5 = found1.description;
          }
          intl13 = tmp50(tmp51[18]).intl;
          return obj12;
        } else if (null != powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).VANITY_URL_POWERUP_SKU_ID)) {
          const obj13 = {
            visible: true,
            renderImgComponent() {
                    guildPowerupBannerImage(stateFromStores[20]);
                    return <tmp imageUrl={guildPowerupBannerImage(stateFromStores[25])} style={powerup.coachmarkImage} />;
                  },
            title: intl10.string(type(tmp51[19]).Ygpx4Q),
            description: intl11.string(type(tmp51[19]).mmNkUA),
            buttonLabel: intl12.string(closure_0(tmp51[18]).t.RzWDqY),
            buttonVariant: "primary",
            onButtonPress: handleButtonPress,
            onDismiss: handleDismiss
          };
          const merged5 = Object.assign(obj);
          intl10 = tmp50(tmp51[18]).intl;
          intl11 = tmp50(tmp51[18]).intl;
          intl12 = tmp50(tmp51[18]).intl;
          return obj13;
        } else if (null != powerups1.find((skuId) => set2.has(skuId.skuId))) {
          const obj14 = {
            visible: true,
            renderImgComponent() {
                    guildPowerupBannerImage(stateFromStores[20]);
                    return <tmp imageUrl={guildPowerupBannerImage(stateFromStores[26])} style={powerup.coachmarkImage} />;
                  },
            title: intl7.string(type(tmp51[19])["kA2c+n"]),
            description: intl8.string(type(tmp51[19]).TUilLj),
            buttonLabel: intl9.string(closure_0(tmp51[18]).t.RzWDqY),
            buttonVariant: "primary",
            onButtonPress: handleButtonPress,
            onDismiss: handleDismiss
          };
          const merged6 = Object.assign(obj);
          intl7 = tmp50(tmp51[18]).intl;
          intl8 = tmp50(tmp51[18]).intl;
          intl9 = tmp50(tmp51[18]).intl;
          return obj14;
        } else if (null != powerups1.find((skuId) => num.has(skuId.skuId))) {
          const obj15 = {
            visible: true,
            renderImgComponent() {
                    guildPowerupBannerImage(stateFromStores[20]);
                    return <tmp imageUrl={guildPowerupBannerImage(stateFromStores[27])} style={powerup.coachmarkImage} />;
                  },
            title: intl4.string(type(tmp51[19])["kA2c+n"]),
            description: intl5.string(type(tmp51[19]).TUilLj),
            buttonLabel: intl6.string(closure_0(tmp51[18]).t.RzWDqY),
            buttonVariant: "primary",
            onButtonPress: handleButtonPress,
            onDismiss: handleDismiss
          };
          let tmp14 = obj15;
          const merged7 = Object.assign(obj);
          intl4 = tmp50(tmp51[18]).intl;
          intl5 = tmp50(tmp51[18]).intl;
          intl6 = tmp50(tmp51[18]).intl;
          return obj15;
        } else {
          let tmp52 = obj;
          if (null != powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID)) {
            const obj16 = {
              visible: true,
              renderImgComponent() {
                        guildPowerupBannerImage(stateFromStores[20]);
                        return <tmp imageUrl={guildPowerupBannerImage(stateFromStores[28])} isAnimated={false} style={powerup.coachmarkImage} />;
                      },
              title: intl28.string(type(tmp51[19]).rp0Ff1),
              description: intl29.string(type(tmp51[19])["3L/DZq"]),
              buttonLabel: intl30.string(closure_0(tmp51[18]).t.RzWDqY),
              buttonVariant: "primary",
              onButtonPress: handleButtonPress,
              onDismiss: handleDismiss
            };
            const merged8 = Object.assign(obj);
            intl28 = tmp50(tmp51[18]).intl;
            intl29 = tmp50(tmp51[18]).intl;
            intl30 = tmp50(tmp51[18]).intl;
            tmp52 = obj16;
          }
          return tmp52;
        }
      } else if (closure_0(tmp51[14]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK === type) {
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
          title: intl.string(type(tmp51[19]).n37JhA)
        };
        let tmp2 = obj17;
        const merged9 = Object.assign(obj);
        num = 8;
        intl = tmp50(tmp51[18]).intl;
        let tmp5 = type;
        const intl2 = tmp50(tmp51[18]).intl;
        if (true !== closure_5) {
          let Yr1ogl;
          if (powerup.type !== constants.LEVEL) {
            Yr1ogl = tmp5(tmp51[19])["7MZ2tu"];
          }
          let tmp9 = num;
          const obj18 = { boostCount: num, perkName: powerup.title };
          obj17.description = tmp6(Yr1ogl, obj18);
          const intl3 = tmp50(tmp51[18]).intl;
          obj17.buttonLabel = intl3.string(closure_0(tmp51[18]).t.oPAx73);
          let str = "primary";
          obj17.buttonVariant = "primary";
          obj17.onButtonPress = function onButtonPress() {
            guildPowerupBannerImage.markAsDismissed(constants2.TAKE_ACTION);
            set2();
          };
          obj17.onDismiss = handleDismiss;
          return obj17;
        }
        Yr1ogl = tmp5(tmp51[19]).Yr1ogl;
      } else {
        if (closure_0(tmp51[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE !== type) {
          if (closure_0(tmp51[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE !== type) {
            const GAME_SERVER_HOSTING_ENABLED = tmp50(tmp51[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_ENABLED;
          }
        }
        return obj;
      }
    }
  }, items3);
  const tmpResult = tmp(tmp2[29]);
  const coachmark = tmpResult.useCoachmark(targetRef, memo);
};
