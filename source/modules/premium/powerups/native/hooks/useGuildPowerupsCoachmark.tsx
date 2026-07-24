// Module ID: 15050
// Function ID: 114600
// Name: useGuildPowerupsCoachmark
// Dependencies: [31, 4122, 1838, 4018, 653, 1345, 482, 33, 4130, 689, 566, 4066, 4037, 11575, 11557, 15051, 11542, 11583, 1212, 2230, 11585, 15052, 11582, 4021, 15048, 15053, 15054, 11611, 15055, 8608, 2]
// Exports: default

// Module 15050 (useGuildPowerupsCoachmark)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { ThemeTypes } from "sum";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET: closure_6, GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET: closure_7, GuildPowerupType: closure_8 } = BoostedGuildTiers);
({ AnalyticsPages: closure_9, AnalyticsSections: closure_10 } = ME);
let closure_14 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { height: 120, width: 260 - 2 * importDefault(689).space.PX_16, borderRadius: importDefault(689).radii.md };
  obj.coachmarkImage = obj;
  obj.coachmarkCover = { resizeMode: "cover" };
  obj = { width: 50, height: 50 };
  let str = "#0000003D";
  if (arg0 === ThemeTypes.LIGHT) {
    str = "#0000001A";
  }
  obj.backgroundColor = str;
  obj.boostGemBackground = obj;
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx");

export default function useGuildPowerupsCoachmark(targetRef, arg1, type) {
  const _require = arg1;
  const importDefault = type;
  let obj = _require(stateFromStores[10]);
  let items = [closure_5];
  const items1 = [arg1];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = tmp4.getGuild(closure_0);
    let name;
    if (null != guild) {
      name = guild.name;
    }
    return name;
  }, items1);
  let tmp2 = callback(importDefault(stateFromStores[11])());
  const React = tmp2;
  const items2 = [stateFromStores1];
  stateFromStores1 = _require(stateFromStores[10]).useStateFromStores(items2, () => stateFromStores1.useReducedMotion);
  const tmp4 = importDefault(stateFromStores[13])(arg1);
  closure_5 = tmp4;
  type = undefined;
  if (null != type) {
    type = type.type;
  }
  let powerup;
  if (type === _require(stateFromStores[14]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK) {
    powerup = type.powerup;
  }
  let num = 0;
  if (null != powerup) {
    num = powerup.cost - importDefault(stateFromStores[12])(arg1).available;
  }
  obj = { page: constants.GUILD_CHANNEL, section: constants2.GUILD_HEADER };
  const tmp7 = importDefault(stateFromStores[15])(arg1, powerup, num, "boost_to_unlock_coachmark", obj);
  let closure_7 = tmp7;
  const items3 = [num, tmp4, arg1, stateFromStores, tmp7, type, tmp2, stateFromStores1];
  const memo = React.useMemo(() => {
    function handleButtonPress() {
      if (null != guildPowerupBannerImage) {
        guildPowerupBannerImage.markAsDismissed(outer2_11.TAKE_ACTION);
        const obj = { guildId: powerups };
        guildPowerupBannerImage(stateFromStores[16])(obj);
      }
    }
    function handleDismiss() {
      if (null != guildPowerupBannerImage) {
        guildPowerupBannerImage.markAsDismissed(outer2_11.USER_DISMISS);
      }
    }
    let obj = { title: "", description: "", position: "bottom", visible: false };
    let str = "";
    obj.onDismiss = function onDismiss() {

    };
    if (null == guildPowerupBannerImage) {
      return obj;
    } else {
      const type = guildPowerupBannerImage.type;
      if (callback(stateFromStores[14]).GuildPowerupNotificationPopoutType.LEVEL_REACHED === type) {
        obj = {};
        const merged = Object.assign(obj);
        obj["visible"] = true;
        obj["renderImgComponent"] = function renderImgComponent() {
          const obj = { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 };
          return outer2_13(guildPowerupBannerImage(stateFromStores[17]), obj);
        };
        const intl24 = callback(stateFromStores[18]).intl;
        obj = { perkName: guildPowerupBannerImage.powerup.title };
        obj["title"] = intl24.formatToPlainString(type(stateFromStores[19])["Zg/m9K"], obj);
        const intl25 = callback(stateFromStores[18]).intl;
        const obj1 = { perkName: guildPowerupBannerImage.powerup.title };
        obj["description"] = intl25.formatToPlainString(type(stateFromStores[19])["1EGXSK"], obj1);
        const intl26 = callback(stateFromStores[18]).intl;
        obj["buttonLabel"] = intl26.string(callback(stateFromStores[18]).t.RzWDqY);
        obj["buttonVariant"] = "primary";
        obj["onButtonPress"] = handleButtonPress;
        obj["onDismiss"] = handleDismiss;
        return obj;
      } else if (callback(stateFromStores[14]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE === type) {
        let obj2 = {};
        const merged1 = Object.assign(obj);
        obj2["visible"] = true;
        obj2["renderImgComponent"] = function renderImgComponent() {
          const obj = { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 };
          return outer2_13(guildPowerupBannerImage(stateFromStores[17]), obj);
        };
        const intl21 = callback(stateFromStores[18]).intl;
        obj2["title"] = intl21.string(type(stateFromStores[19]).QpQBPQ);
        const intl22 = callback(stateFromStores[18]).intl;
        obj2["description"] = intl22.string(type(stateFromStores[19])["6hn0xF"]);
        const intl23 = callback(stateFromStores[18]).intl;
        obj2["buttonLabel"] = intl23.string(callback(stateFromStores[18]).t.RzWDqY);
        obj2["buttonVariant"] = "primary";
        obj2["onButtonPress"] = handleButtonPress;
        obj2["onDismiss"] = handleDismiss;
        return obj2;
      } else {
        let merged8 = stateFromStores;
        if (callback(stateFromStores[14]).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE === type) {
          const powerups = guildPowerupBannerImage.powerups;
          if (0 === powerups.length) {
            return obj;
          } else {
            if (powerups.length >= 3) {
              const intl18 = callback(stateFromStores[18]).intl;
              let obj3 = { perk: powerups[0].title, perk2: powerups[1].title, perk3: powerups[2].title };
              let formatToPlainStringResult = intl18.formatToPlainString(type(stateFromStores[19])["6Sv+3M"], obj3);
            } else if (2 === powerups.length) {
              const intl17 = callback(stateFromStores[18]).intl;
              const obj4 = {};
              const _HermesInternal = HermesInternal;
              obj4.perks = `` + powerups[0].title + " & " + powerups[1].title;
              formatToPlainStringResult = intl17.formatToPlainString(type(stateFromStores[19]).wcQOqC, obj4);
            } else {
              const intl16 = callback(stateFromStores[18]).intl;
              const obj5 = { perk: powerups[0].title };
              formatToPlainStringResult = intl16.formatToPlainString(type(stateFromStores[19]).ZF8NT6, obj5);
            }
            const obj6 = {};
            const merged2 = Object.assign(obj);
            obj6["visible"] = true;
            obj6["renderImgComponent"] = function renderImgComponent() {
              const obj = {};
              if (powerups.length > 1) {
                let str = guildPowerupBannerImage(stateFromStores[21]);
              } else {
                guildPowerupBannerImage = powerups(stateFromStores[22]).getGuildPowerupBannerImage(powerups[0], outer1_4, true);
                str = "";
                if (null != guildPowerupBannerImage) {
                  str = guildPowerupBannerImage;
                }
                const obj2 = powerups(stateFromStores[22]);
              }
              obj.imageUrl = str;
              obj.isAnimated = 1 === powerups.length;
              const items = [, ];
              ({ coachmarkImage: arr[0], coachmarkCover: arr[1] } = powerup);
              obj.style = items;
              return outer2_13(guildPowerupBannerImage(stateFromStores[20]), obj);
            };
            const intl19 = callback(stateFromStores[18]).intl;
            const obj7 = {};
            if (null != found1) {
              str = found1;
            }
            obj7.guildName = str;
            obj6["title"] = intl19.formatToPlainString(type(stateFromStores[19]).LmpChE, obj7);
            obj6["description"] = formatToPlainStringResult;
            const intl20 = callback(stateFromStores[18]).intl;
            obj6["buttonLabel"] = intl20.string(callback(stateFromStores[18]).t.RzWDqY);
            obj6["buttonVariant"] = "primary";
            obj6["onButtonPress"] = handleButtonPress;
            obj6["onDismiss"] = handleDismiss;
            return obj6;
          }
        } else {
          merged8 = callback;
          merged8 = stateFromStores;
          if (callback(stateFromStores[14]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE === type) {
            const powerups1 = guildPowerupBannerImage.powerups;
            const found = powerups1.find((skuId) => skuId.skuId === powerups(stateFromStores[23]).GUILD_POWERUP_TAG_SKU_ID);
            if (null != found) {
              obj3 = callback(stateFromStores[22]);
              guildPowerupBannerImage = obj3.getGuildPowerupBannerImage(found, stateFromStores1, true);
              if (null != guildPowerupBannerImage) {
                const obj8 = {};
                const merged3 = Object.assign(obj);
                obj8["visible"] = true;
                obj8["renderImgComponent"] = function renderImgComponent() {
                  return outer2_13(guildPowerupBannerImage(stateFromStores[20]), { imageUrl: guildPowerupBannerImage, isAnimated: !outer1_4, style: powerup.coachmarkImage });
                };
                const intl13 = callback(stateFromStores[18]).intl;
                obj8["title"] = intl13.string(type(stateFromStores[19]).GcEkAP);
                const intl14 = callback(stateFromStores[18]).intl;
                obj8["description"] = intl14.string(type(stateFromStores[19]).yo0g7X);
                const intl15 = callback(stateFromStores[18]).intl;
                obj8["buttonLabel"] = intl15.string(callback(stateFromStores[18]).t.RzWDqY);
                obj8["buttonVariant"] = "primary";
                obj8["onButtonPress"] = handleButtonPress;
                obj8["onDismiss"] = handleDismiss;
                return obj8;
              }
            }
            found1 = powerups1.find((skuId) => skuId.skuId === powerups(stateFromStores[23]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
            if (null != found1) {
              const obj9 = {};
              const merged4 = Object.assign(obj);
              obj9["visible"] = true;
              obj9["renderImgComponent"] = function renderImgComponent() {
                const obj = {};
                const tmp = outer2_13;
                const tmp2 = guildPowerupBannerImage(stateFromStores[20]);
                guildPowerupBannerImage = powerups(stateFromStores[22]).getGuildPowerupBannerImage(found1, outer1_4, true);
                if (null == guildPowerupBannerImage) {
                  guildPowerupBannerImage = guildPowerupBannerImage(stateFromStores[24]);
                }
                obj.imageUrl = guildPowerupBannerImage;
                obj.isAnimated = !outer1_4;
                const items = [, ];
                ({ coachmarkImage: arr[0], coachmarkCover: arr[1] } = powerup);
                obj.style = items;
                return tmp(tmp2, obj);
              };
              obj9["title"] = found1.title;
              let description = str;
              if ("string" === typeof found1.description) {
                description = found1.description;
              }
              obj9["description"] = description;
              const intl12 = callback(stateFromStores[18]).intl;
              obj9["buttonLabel"] = intl12.string(callback(stateFromStores[18]).t.RzWDqY);
              obj9["buttonVariant"] = "primary";
              obj9["onButtonPress"] = handleButtonPress;
              obj9["onDismiss"] = handleDismiss;
              return obj9;
            } else if (null != powerups1.find((skuId) => skuId.skuId === powerups(stateFromStores[23]).VANITY_URL_POWERUP_SKU_ID)) {
              const obj10 = {};
              const merged5 = Object.assign(obj);
              obj10["visible"] = true;
              obj10["renderImgComponent"] = function renderImgComponent() {
                const obj = { imageUrl: guildPowerupBannerImage(stateFromStores[25]), style: powerup.coachmarkImage };
                return outer2_13(guildPowerupBannerImage(stateFromStores[20]), obj);
              };
              const intl9 = callback(stateFromStores[18]).intl;
              obj10["title"] = intl9.string(type(stateFromStores[19]).Ygpx4Q);
              const intl10 = callback(stateFromStores[18]).intl;
              obj10["description"] = intl10.string(type(stateFromStores[19]).mmNkUA);
              const intl11 = callback(stateFromStores[18]).intl;
              obj10["buttonLabel"] = intl11.string(callback(stateFromStores[18]).t.RzWDqY);
              obj10["buttonVariant"] = "primary";
              obj10["onButtonPress"] = handleButtonPress;
              obj10["onDismiss"] = handleDismiss;
              return obj10;
            } else if (null != powerups1.find((skuId) => set.has(skuId.skuId))) {
              const obj11 = {};
              const merged6 = Object.assign(obj);
              obj11["visible"] = true;
              obj11["renderImgComponent"] = function renderImgComponent() {
                const obj = { imageUrl: guildPowerupBannerImage(stateFromStores[26]), style: powerup.coachmarkImage };
                return outer2_13(guildPowerupBannerImage(stateFromStores[20]), obj);
              };
              const intl6 = callback(stateFromStores[18]).intl;
              obj11["title"] = intl6.string(type(stateFromStores[19])["kA2c+n"]);
              const intl7 = callback(stateFromStores[18]).intl;
              obj11["description"] = intl7.string(type(stateFromStores[19]).TUilLj);
              const intl8 = callback(stateFromStores[18]).intl;
              obj11["buttonLabel"] = intl8.string(callback(stateFromStores[18]).t.RzWDqY);
              obj11["buttonVariant"] = "primary";
              obj11["onButtonPress"] = handleButtonPress;
              obj11["onDismiss"] = handleDismiss;
              return obj11;
            } else if (null != powerups1.find((skuId) => num.has(skuId.skuId))) {
              const obj12 = {};
              const merged7 = Object.assign(obj);
              obj12["visible"] = true;
              obj12["renderImgComponent"] = function renderImgComponent() {
                const obj = { imageUrl: guildPowerupBannerImage(stateFromStores[27]), style: powerup.coachmarkImage };
                return outer2_13(guildPowerupBannerImage(stateFromStores[20]), obj);
              };
              const intl3 = callback(stateFromStores[18]).intl;
              obj12["title"] = intl3.string(type(stateFromStores[19])["kA2c+n"]);
              const intl4 = callback(stateFromStores[18]).intl;
              obj12["description"] = intl4.string(type(stateFromStores[19]).TUilLj);
              const intl5 = callback(stateFromStores[18]).intl;
              obj12["buttonLabel"] = intl5.string(callback(stateFromStores[18]).t.RzWDqY);
              obj12["buttonVariant"] = "primary";
              obj12["onButtonPress"] = handleButtonPress;
              obj12["onDismiss"] = handleDismiss;
              return obj12;
            } else {
              merged8 = obj;
              if (null != powerups1.find((skuId) => skuId.skuId === powerups(stateFromStores[23]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID)) {
                const obj13 = {};
                merged8 = obj13;
                merged8 = obj;
                merged8 = Object.assign(obj);
                obj13["visible"] = true;
                obj13["renderImgComponent"] = function renderImgComponent() {
                  const obj = { imageUrl: guildPowerupBannerImage(stateFromStores[28]), isAnimated: false, style: powerup.coachmarkImage };
                  return outer2_13(guildPowerupBannerImage(stateFromStores[20]), obj);
                };
                merged8 = callback;
                merged8 = stateFromStores;
                const intl27 = callback(stateFromStores[18]).intl;
                merged8 = type;
                obj13["title"] = intl27.string(type(stateFromStores[19]).rp0Ff1);
                const intl28 = callback(stateFromStores[18]).intl;
                obj13["description"] = intl28.string(type(stateFromStores[19])["3L/DZq"]);
                const intl29 = callback(stateFromStores[18]).intl;
                obj13["buttonLabel"] = intl29.string(callback(stateFromStores[18]).t.RzWDqY);
                obj13["buttonVariant"] = "primary";
                obj13["onButtonPress"] = handleButtonPress;
                obj13["onDismiss"] = handleDismiss;
                merged8 = obj13;
              }
              return merged8;
            }
          } else {
            merged8 = callback;
            merged8 = stateFromStores;
            if (callback(stateFromStores[14]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK === type) {
              const powerup = guildPowerupBannerImage.powerup;
              const obj14 = {};
              const merged9 = Object.assign(obj);
              obj14["visible"] = true;
              obj14["offsetY"] = 8;
              obj14["renderImgComponent"] = function renderImgComponent() {
                if (powerup.type === outer2_8.LEVEL) {
                  let obj = { style: powerup.boostGemBackground, gemWidth: 30, gemHeight: 30 };
                  let tmp8Result = outer2_13(guildPowerupBannerImage(stateFromStores[17]), obj);
                } else {
                  obj = {};
                  const tmp11 = guildPowerupBannerImage(stateFromStores[20]);
                  const tmp8 = outer2_13;
                  guildPowerupBannerImage = powerups(stateFromStores[22]).getGuildPowerupBannerImage(powerup, outer1_4, true);
                  let str = "";
                  if (null != guildPowerupBannerImage) {
                    str = guildPowerupBannerImage;
                  }
                  obj.imageUrl = str;
                  obj.isAnimated = !outer1_4;
                  const items = [, ];
                  ({ coachmarkImage: arr[0], coachmarkCover: arr[1] } = powerup);
                  obj.style = items;
                  tmp8Result = tmp8(tmp11, obj);
                  const obj3 = powerups(stateFromStores[22]);
                }
                return tmp8Result;
              };
              const intl = callback(stateFromStores[18]).intl;
              obj14["title"] = intl.string(type(stateFromStores[19]).n37JhA);
              if (true !== closure_5) {
                if (powerup.type !== outer1_8.LEVEL) {
                  let Yr1ogl = type(stateFromStores[19])["7MZ2tu"];
                }
                const obj15 = { boostCount: num, perkName: powerup.title };
                obj14["description"] = tmp14(Yr1ogl, obj15);
                const intl2 = callback(stateFromStores[18]).intl;
                obj14["buttonLabel"] = intl2.string(callback(stateFromStores[18]).t.oPAx73);
                obj14["buttonVariant"] = "primary";
                obj14["onButtonPress"] = function onButtonPress() {
                  guildPowerupBannerImage.markAsDismissed(outer2_11.TAKE_ACTION);
                  outer1_7();
                };
                obj14["onDismiss"] = handleDismiss;
                return obj14;
              }
              Yr1ogl = type(stateFromStores[19]).Yr1ogl;
            } else {
              merged8 = callback;
              if (callback(stateFromStores[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE !== type) {
                if (callback(stateFromStores[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE !== type) {
                  const GAME_SERVER_HOSTING_ENABLED = callback(stateFromStores[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_ENABLED;
                }
              }
              return obj;
            }
          }
        }
      }
    }
  }, items3);
  let obj2 = _require(stateFromStores[10]);
  const coachmark = _require(stateFromStores[29]).useCoachmark(targetRef, memo);
};
