// Module ID: 14876
// Function ID: 112034
// Name: useGuildPowerupsCoachmark
// Dependencies: []
// Exports: default

// Module 14876 (useGuildPowerupsCoachmark)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET: closure_6, GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET: closure_7, GuildPowerupType: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticsPages: closure_9, AnalyticsSections: closure_10 } = arg1(dependencyMap[4]));
const ContentDismissActionType = arg1(dependencyMap[5]).ContentDismissActionType;
const ThemeTypes = arg1(dependencyMap[6]).ThemeTypes;
const jsx = arg1(dependencyMap[7]).jsx;
const tmp3 = arg1(dependencyMap[4]);
let closure_14 = arg1(dependencyMap[8]).createStyles((arg0) => {
  let obj = {};
  obj = { height: 120, width: 260 - 2 * importDefault(dependencyMap[9]).space.PX_16, borderRadius: importDefault(dependencyMap[9]).radii.md };
  obj.coachmarkImage = obj;
  obj.coachmarkCover = { resizeMode: "cover" };
  obj = {};
  let str = "#0000003D";
  if (arg0 === ThemeTypes.LIGHT) {
    str = "#0000001A";
  }
  obj.backgroundColor = str;
  obj.boostGemBackground = obj;
  return obj;
});
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsCoachmark.tsx");

export default function useGuildPowerupsCoachmark(targetRef, arg1, type) {
  const importDefault = type;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_5];
  const items1 = [arg1];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = tmp4.getGuild(arg1);
    let name;
    if (null != guild) {
      name = guild.name;
    }
    return name;
  }, items1);
  const dependencyMap = stateFromStores;
  const tmp2 = callback(importDefault(dependencyMap[11])());
  const React = tmp2;
  const items2 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items2, () => stateFromStores1.useReducedMotion);
  closure_4 = stateFromStores1;
  const tmp4 = importDefault(dependencyMap[13])(arg1);
  closure_5 = tmp4;
  type = undefined;
  if (null != type) {
    type = type.type;
  }
  let powerup;
  if (type === arg1(dependencyMap[14]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK) {
    powerup = type.powerup;
  }
  let num = 0;
  if (null != powerup) {
    num = powerup.cost - importDefault(dependencyMap[12])(arg1).available;
  }
  obj = { page: constants.GUILD_CHANNEL, section: constants2.GUILD_HEADER };
  const tmp7 = importDefault(dependencyMap[15])(arg1, powerup, num, "boost_to_unlock_coachmark", obj);
  const items3 = [num, tmp4, arg1, stateFromStores, tmp7, type, tmp2, stateFromStores1];
  const memo = React.useMemo((arg0, arg1, self) => {
    function handleButtonPress() {
      if (null != guildPowerupBannerImage) {
        guildPowerupBannerImage.markAsDismissed(constants2.TAKE_ACTION);
        const obj = { guildId: powerups };
        guildPowerupBannerImage(found1[16])(obj);
      }
    }
    function handleDismiss() {
      if (null != guildPowerupBannerImage) {
        guildPowerupBannerImage.markAsDismissed(constants2.USER_DISMISS);
      }
    }
    let obj = { "Bool(true)": "F8Wf0e", "Bool(true)": "Err", "Bool(true)": "isArrayBuffer", "Bool(true)": "ON" };
    let str = "";
    obj.onDismiss = function onDismiss() {

    };
    if (null == self) {
      return obj;
    } else {
      const type = self.type;
      if (arg1(stateFromStores[14]).GuildPowerupNotificationPopoutType.LEVEL_REACHED === type) {
        obj = {};
        const merged = Object.assign(obj);
        obj["visible"] = true;
        obj["renderImgComponent"] = function renderImgComponent() {
          return callback(guildPowerupBannerImage(found1[17]), { style: powerup.boostGemBackground });
        };
        const intl24 = arg1(stateFromStores[18]).intl;
        obj = { perkName: self.powerup.title };
        obj["title"] = intl24.formatToPlainString(self(stateFromStores[19]).Zg/m9K, obj);
        const intl25 = arg1(stateFromStores[18]).intl;
        const obj1 = { perkName: self.powerup.title };
        obj["description"] = intl25.formatToPlainString(self(stateFromStores[19]).1EGXSK, obj1);
        const intl26 = arg1(stateFromStores[18]).intl;
        obj["buttonLabel"] = intl26.string(arg1(stateFromStores[18]).t.RzWDqY);
        obj["buttonVariant"] = "primary";
        obj["onButtonPress"] = handleButtonPress;
        obj["onDismiss"] = handleDismiss;
        return obj;
      } else if (arg1(stateFromStores[14]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE === type) {
        const obj2 = {};
        const merged1 = Object.assign(obj);
        obj2["visible"] = true;
        obj2["renderImgComponent"] = function renderImgComponent() {
          return callback(guildPowerupBannerImage(found1[17]), { style: powerup.boostGemBackground });
        };
        const intl21 = arg1(stateFromStores[18]).intl;
        obj2["title"] = intl21.string(self(stateFromStores[19]).QpQBPQ);
        const intl22 = arg1(stateFromStores[18]).intl;
        obj2["description"] = intl22.string(self(stateFromStores[19]).6hn0xF);
        const intl23 = arg1(stateFromStores[18]).intl;
        obj2["buttonLabel"] = intl23.string(arg1(stateFromStores[18]).t.RzWDqY);
        obj2["buttonVariant"] = "primary";
        obj2["onButtonPress"] = handleButtonPress;
        obj2["onDismiss"] = handleDismiss;
        return obj2;
      } else {
        let merged8 = stateFromStores;
        if (arg1(stateFromStores[14]).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE === type) {
          const powerups = self.powerups;
          arg1 = powerups;
          if (0 === powerups.length) {
            return obj;
          } else {
            if (powerups.length >= 3) {
              const intl18 = arg1(stateFromStores[18]).intl;
              let obj3 = { perk: powerups[0].title, perk2: powerups[1].title, perk3: powerups[2].title };
              let formatToPlainStringResult = intl18.formatToPlainString(self(stateFromStores[19]).6Sv+3M, obj3);
            } else if (2 === powerups.length) {
              const intl17 = arg1(stateFromStores[18]).intl;
              const obj4 = {};
              const _HermesInternal = HermesInternal;
              obj4.perks = `` + powerups[0].title + " & " + powerups[1].title;
              formatToPlainStringResult = intl17.formatToPlainString(self(stateFromStores[19]).wcQOqC, obj4);
            } else {
              const intl16 = arg1(stateFromStores[18]).intl;
              const obj5 = { perk: powerups[0].title };
              formatToPlainStringResult = intl16.formatToPlainString(self(stateFromStores[19]).ZF8NT6, obj5);
            }
            const obj6 = {};
            const merged2 = Object.assign(obj);
            obj6["visible"] = true;
            obj6["renderImgComponent"] = function renderImgComponent() {
              const obj = {};
              if (powerups.length > 1) {
                let str = guildPowerupBannerImage(found1[21]);
              } else {
                const guildPowerupBannerImage = powerups(found1[22]).getGuildPowerupBannerImage(powerups[0], closure_4, true);
                str = "";
                if (null != guildPowerupBannerImage) {
                  str = guildPowerupBannerImage;
                }
                const obj2 = powerups(found1[22]);
              }
              obj.imageUrl = str;
              obj.isAnimated = 1 === powerups.length;
              const items = [, ];
              ({ coachmarkImage: arr[0], coachmarkCover: arr[1] } = powerup);
              obj.style = items;
              return closure_13(guildPowerupBannerImage(found1[20]), obj);
            };
            const intl19 = arg1(stateFromStores[18]).intl;
            const obj7 = {};
            if (null != stateFromStores) {
              str = stateFromStores;
            }
            obj7.guildName = str;
            obj6["title"] = intl19.formatToPlainString(self(stateFromStores[19]).LmpChE, obj7);
            obj6["description"] = formatToPlainStringResult;
            const intl20 = arg1(stateFromStores[18]).intl;
            obj6["buttonLabel"] = intl20.string(arg1(stateFromStores[18]).t.RzWDqY);
            obj6["buttonVariant"] = "primary";
            obj6["onButtonPress"] = handleButtonPress;
            obj6["onDismiss"] = handleDismiss;
            return obj6;
          }
        } else {
          merged8 = arg1;
          merged8 = stateFromStores;
          if (arg1(stateFromStores[14]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE === type) {
            const powerups1 = self.powerups;
            const found = powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_TAG_SKU_ID);
            if (null != found) {
              obj3 = arg1(stateFromStores[22]);
              const guildPowerupBannerImage = obj3.getGuildPowerupBannerImage(found, stateFromStores1, true);
              self = guildPowerupBannerImage;
              if (null != guildPowerupBannerImage) {
                const obj8 = {};
                const merged3 = Object.assign(obj);
                obj8["visible"] = true;
                obj8["renderImgComponent"] = function renderImgComponent() {
                  return callback(guildPowerupBannerImage(found1[20]), { imageUrl: guildPowerupBannerImage, isAnimated: !closure_4, style: powerup.coachmarkImage });
                };
                const intl13 = arg1(stateFromStores[18]).intl;
                obj8["title"] = intl13.string(self(stateFromStores[19]).GcEkAP);
                const intl14 = arg1(stateFromStores[18]).intl;
                obj8["description"] = intl14.string(self(stateFromStores[19]).yo0g7X);
                const intl15 = arg1(stateFromStores[18]).intl;
                obj8["buttonLabel"] = intl15.string(arg1(stateFromStores[18]).t.RzWDqY);
                obj8["buttonVariant"] = "primary";
                obj8["onButtonPress"] = handleButtonPress;
                obj8["onDismiss"] = handleDismiss;
                return obj8;
              }
            }
            const found1 = powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_GUILD_THEME_SKU_ID);
            const stateFromStores = found1;
            if (null != found1) {
              const obj9 = {};
              const merged4 = Object.assign(obj);
              obj9["visible"] = true;
              obj9["renderImgComponent"] = function renderImgComponent() {
                const obj = {};
                const tmp = closure_13;
                const tmp2 = guildPowerupBannerImage(found1[20]);
                let guildPowerupBannerImage = powerups(found1[22]).getGuildPowerupBannerImage(found1, closure_4, true);
                if (null == guildPowerupBannerImage) {
                  guildPowerupBannerImage = guildPowerupBannerImage(found1[24]);
                }
                obj.imageUrl = guildPowerupBannerImage;
                obj.isAnimated = !closure_4;
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
              const intl12 = arg1(stateFromStores[18]).intl;
              obj9["buttonLabel"] = intl12.string(arg1(stateFromStores[18]).t.RzWDqY);
              obj9["buttonVariant"] = "primary";
              obj9["onButtonPress"] = handleButtonPress;
              obj9["onDismiss"] = handleDismiss;
              return obj9;
            } else if (null != powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).VANITY_URL_POWERUP_SKU_ID)) {
              const obj10 = {};
              const merged5 = Object.assign(obj);
              obj10["visible"] = true;
              obj10["renderImgComponent"] = function renderImgComponent() {
                const obj = { imageUrl: guildPowerupBannerImage(found1[25]), style: powerup.coachmarkImage };
                return callback(guildPowerupBannerImage(found1[20]), obj);
              };
              const intl9 = arg1(stateFromStores[18]).intl;
              obj10["title"] = intl9.string(self(stateFromStores[19]).Ygpx4Q);
              const intl10 = arg1(stateFromStores[18]).intl;
              obj10["description"] = intl10.string(self(stateFromStores[19]).mmNkUA);
              const intl11 = arg1(stateFromStores[18]).intl;
              obj10["buttonLabel"] = intl11.string(arg1(stateFromStores[18]).t.RzWDqY);
              obj10["buttonVariant"] = "primary";
              obj10["onButtonPress"] = handleButtonPress;
              obj10["onDismiss"] = handleDismiss;
              return obj10;
            } else if (null != powerups1.find((skuId) => set2.has(skuId.skuId))) {
              const obj11 = {};
              const merged6 = Object.assign(obj);
              obj11["visible"] = true;
              obj11["renderImgComponent"] = function renderImgComponent() {
                const obj = { imageUrl: guildPowerupBannerImage(found1[26]), style: powerup.coachmarkImage };
                return callback(guildPowerupBannerImage(found1[20]), obj);
              };
              const intl6 = arg1(stateFromStores[18]).intl;
              obj11["title"] = intl6.string(self(stateFromStores[19]).kA2c+n);
              const intl7 = arg1(stateFromStores[18]).intl;
              obj11["description"] = intl7.string(self(stateFromStores[19]).TUilLj);
              const intl8 = arg1(stateFromStores[18]).intl;
              obj11["buttonLabel"] = intl8.string(arg1(stateFromStores[18]).t.RzWDqY);
              obj11["buttonVariant"] = "primary";
              obj11["onButtonPress"] = handleButtonPress;
              obj11["onDismiss"] = handleDismiss;
              return obj11;
            } else if (null != powerups1.find((skuId) => set.has(skuId.skuId))) {
              const obj12 = {};
              const merged7 = Object.assign(obj);
              obj12["visible"] = true;
              obj12["renderImgComponent"] = function renderImgComponent() {
                const obj = { imageUrl: guildPowerupBannerImage(found1[27]), style: powerup.coachmarkImage };
                return callback(guildPowerupBannerImage(found1[20]), obj);
              };
              const intl3 = arg1(stateFromStores[18]).intl;
              obj12["title"] = intl3.string(self(stateFromStores[19]).kA2c+n);
              const intl4 = arg1(stateFromStores[18]).intl;
              obj12["description"] = intl4.string(self(stateFromStores[19]).TUilLj);
              const intl5 = arg1(stateFromStores[18]).intl;
              obj12["buttonLabel"] = intl5.string(arg1(stateFromStores[18]).t.RzWDqY);
              obj12["buttonVariant"] = "primary";
              obj12["onButtonPress"] = handleButtonPress;
              obj12["onDismiss"] = handleDismiss;
              return obj12;
            } else {
              merged8 = obj;
              if (null != powerups1.find((skuId) => skuId.skuId === powerups(found1[23]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID)) {
                const obj13 = {};
                merged8 = obj13;
                merged8 = obj;
                merged8 = Object.assign(obj);
                obj13["visible"] = true;
                obj13["renderImgComponent"] = function renderImgComponent() {
                  const obj = { imageUrl: guildPowerupBannerImage(found1[28]), isAnimated: false, style: powerup.coachmarkImage };
                  return callback(guildPowerupBannerImage(found1[20]), obj);
                };
                merged8 = arg1;
                merged8 = stateFromStores;
                const intl27 = arg1(stateFromStores[18]).intl;
                merged8 = self;
                obj13["title"] = intl27.string(self(stateFromStores[19]).rp0Ff1);
                const intl28 = arg1(stateFromStores[18]).intl;
                obj13["description"] = intl28.string(self(stateFromStores[19]).3L/DZq);
                const intl29 = arg1(stateFromStores[18]).intl;
                obj13["buttonLabel"] = intl29.string(arg1(stateFromStores[18]).t.RzWDqY);
                obj13["buttonVariant"] = "primary";
                obj13["onButtonPress"] = handleButtonPress;
                obj13["onDismiss"] = handleDismiss;
                merged8 = obj13;
              }
              return merged8;
            }
          } else {
            merged8 = arg1;
            merged8 = stateFromStores;
            if (arg1(stateFromStores[14]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK === type) {
              const powerup = self.powerup;
              const obj14 = {};
              const merged9 = Object.assign(obj);
              obj14["visible"] = true;
              obj14["offsetY"] = 8;
              obj14["renderImgComponent"] = function renderImgComponent() {
                if (powerup.type === constants.LEVEL) {
                  let obj = { style: powerup.boostGemBackground };
                  let tmp8Result = callback(guildPowerupBannerImage(found1[17]), obj);
                } else {
                  obj = {};
                  const tmp11 = guildPowerupBannerImage(found1[20]);
                  const tmp8 = callback;
                  const guildPowerupBannerImage = powerups(found1[22]).getGuildPowerupBannerImage(powerup, closure_4, true);
                  let str = "";
                  if (null != guildPowerupBannerImage) {
                    str = guildPowerupBannerImage;
                  }
                  obj.imageUrl = str;
                  obj.isAnimated = !closure_4;
                  const items = [, ];
                  ({ coachmarkImage: arr[0], coachmarkCover: arr[1] } = powerup);
                  obj.style = items;
                  tmp8Result = tmp8(tmp11, obj);
                  const obj3 = powerups(found1[22]);
                }
                return tmp8Result;
              };
              const intl = arg1(stateFromStores[18]).intl;
              obj14["title"] = intl.string(self(stateFromStores[19]).n37JhA);
              if (true !== tmp4) {
                if (powerup.type !== constants.LEVEL) {
                  let Yr1ogl = self(stateFromStores[19]).7MZ2tu;
                }
                const obj15 = { boostCount: num, perkName: powerup.title };
                obj14["description"] = tmp14(Yr1ogl, obj15);
                const intl2 = arg1(stateFromStores[18]).intl;
                obj14["buttonLabel"] = intl2.string(arg1(stateFromStores[18]).t.oPAx73);
                obj14["buttonVariant"] = "primary";
                obj14["onButtonPress"] = function onButtonPress() {
                  guildPowerupBannerImage.markAsDismissed(constants2.TAKE_ACTION);
                  set2();
                };
                obj14["onDismiss"] = handleDismiss;
                return obj14;
              }
              Yr1ogl = self(stateFromStores[19]).Yr1ogl;
            } else {
              merged8 = arg1;
              if (arg1(stateFromStores[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE !== type) {
                if (arg1(stateFromStores[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE !== type) {
                  const GAME_SERVER_HOSTING_ENABLED = arg1(stateFromStores[14]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_ENABLED;
                }
              }
              return obj;
            }
          }
        }
      }
    }
  }, items3);
  const obj2 = arg1(dependencyMap[10]);
  const coachmark = arg1(dependencyMap[29]).useCoachmark(targetRef, memo);
};
