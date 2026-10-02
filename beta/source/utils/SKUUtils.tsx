// Module ID: 8167
// Function ID: 8168
// Name: SKUUtils
// Dependencies: [32, 1086, 4662, 1127, 5093, 1370, 4424, 2]
// Exports: canUserInstall, getGenreIdFromURLSlug, getGenreText, getGenreURLSlugFromId, getReadablePreorderReleaseDate, getSKUIdFromURL, isThirdPartySKU

// Module 8167 (SKUUtils)
import intl71 from "intl" /* 1127 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import _modDef4424 from "module_4424" /* 4424 */;
import matchPathCompat from "matchPathCompat" /* 4662 */;
import StoreUtils from "StoreUtils" /* 5093 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const GameGenres = Constants.GameGenres;
({ SKUTypes: hasOwnProperty, Routes: metroRequire, SKUProductLines: metroImportDefault } = Constants);
let closure_8 = {};
let closure_9 = {};
let obj = { ALL: -1 };
const merged = Object.assign(GameGenres);
const freezeResult = freeze(obj);
let c10 = freezeResult;
const keys = Object.keys(freezeResult);
const item = keys.forEach((item) => {
  const str = item.toLowerCase();
  const replaced = str.replace(/_/g, "-");
  closure_8[replaced] = freezeResult[item];
  closure_9[freezeResult[item]] = replaced;
});
const items = [["YYYY-MM-DD", "MMMM DD, Y"], ["YYYY-MM", "MMMM Y"], ["MM-DD", "MMMM DD"], ["MM", "MMMM"], ["YYYY", "Y"]];
let result = size.fileFinishedImporting("utils/SKUUtils.tsx");

export const getSKUIdFromURL = function getSKUIdFromURL(pathname) {
  const obj = matchPathCompat;
  const obj2 = { path: metroRequire.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug") };
  const matchPathResult = obj.matchPath(pathname, obj2);
  let skuId = null;
  if (null != matchPathResult) {
    skuId = matchPathResult.params.skuId;
  }
  return skuId;
};
export const getGenreURLSlugFromId = function getGenreURLSlugFromId(arg0) {
  return closure_9[arg0];
};
export const getGenreIdFromURLSlug = function getGenreIdFromURLSlug(arg0) {
  return closure_8[arg0];
};
export const getGenreText = function getGenreText(arg0) {
  const tmp = GameGenres;
  if (GameGenres.ACTION === arg0) {
    const intl70 = intl71.intl;
    return intl70.string(intl71.t["1o2/IM"]);
  } else if (tmp.ACTION_RPG === arg0) {
    const intl69 = intl71.intl;
    return intl69.string(intl71.t.e9Yo4H);
  } else if (tmp.BRAWLER === arg0) {
    const intl68 = intl71.intl;
    return intl68.string(intl71.t.WCkEjT);
  } else if (tmp.HACK_AND_SLASH === arg0) {
    const intl67 = intl71.intl;
    return intl67.string(intl71.t.xQ4VmK);
  } else if (tmp.PLATFORMER === arg0) {
    const intl66 = intl71.intl;
    return intl66.string(intl71.t.WA3189);
  } else if (tmp.STEALTH === arg0) {
    const intl65 = intl71.intl;
    return intl65.string(intl71.t["6UPFdw"]);
  } else if (tmp.SURVIVAL === arg0) {
    const intl64 = intl71.intl;
    return intl64.string(intl71.t.SVPCt9);
  } else if (tmp.ADVENTURE === arg0) {
    const intl63 = intl71.intl;
    return intl63.string(intl71.t["15p8on"]);
  } else if (tmp.ACTION_ADVENTURE === arg0) {
    const intl62 = intl71.intl;
    return intl62.string(intl71.t.AxkUBp);
  } else if (tmp.METROIDVANIA === arg0) {
    const intl61 = intl71.intl;
    return intl61.string(intl71.t.Iwr38m);
  } else if (tmp.OPEN_WORLD === arg0) {
    const intl60 = intl71.intl;
    return intl60.string(intl71.t["2HRHJO"]);
  } else if (tmp.PSYCHOLOGICAL_HORROR === arg0) {
    const intl59 = intl71.intl;
    return intl59.string(intl71.t["/IwK3s"]);
  } else if (tmp.SANDBOX === arg0) {
    const intl58 = intl71.intl;
    return intl58.string(intl71.t["2+Vu4Q"]);
  } else if (tmp.SURVIVAL_HORROR === arg0) {
    const intl57 = intl71.intl;
    return intl57.string(intl71.t.CCzRiK);
  } else if (tmp.VISUAL_NOVEL === arg0) {
    const intl56 = intl71.intl;
    return intl56.string(intl71.t.FE7rnk);
  } else if (tmp.DRIVING_RACING === arg0) {
    const intl55 = intl71.intl;
    return intl55.string(intl71.t.Erzgca);
  } else if (tmp.VEHICULAR_COMBAT === arg0) {
    const intl54 = intl71.intl;
    return intl54.string(intl71.t.YQHhog);
  } else if (tmp.MASSIVELY_MULTIPLAYER === arg0) {
    const intl53 = intl71.intl;
    return intl53.string(intl71.t["5CNg1o"]);
  } else if (tmp.MMORPG === arg0) {
    const intl52 = intl71.intl;
    return intl52.string(intl71.t["c4NuO/"]);
  } else if (tmp.ROLE_PLAYING === arg0) {
    const intl51 = intl71.intl;
    return intl51.string(intl71.t.yayVgs);
  } else if (tmp.DUNGEON_CRAWLER === arg0) {
    const intl50 = intl71.intl;
    return intl50.string(intl71.t.qicemc);
  } else if (tmp.ROGUELIKE === arg0) {
    const intl49 = intl71.intl;
    return intl49.string(intl71.t.zWzaCv);
  } else if (tmp.SHOOTER === arg0) {
    const intl48 = intl71.intl;
    return intl48.string(intl71.t["+pk6sd"]);
  } else if (tmp.LIGHT_GUN === arg0) {
    const intl47 = intl71.intl;
    return intl47.string(intl71.t.TDS96y);
  } else if (tmp.SHOOT_EM_UP === arg0) {
    const intl46 = intl71.intl;
    return intl46.string(intl71.t.wltDUE);
  } else if (tmp.FPS === arg0) {
    const intl45 = intl71.intl;
    return intl45.string(intl71.t.olTaq4);
  } else if (tmp.DUAL_JOYSTICK_SHOOTER === arg0) {
    const intl44 = intl71.intl;
    return intl44.string(intl71.t["SN+NS3"]);
  } else if (tmp.SIMULATION === arg0) {
    const intl43 = intl71.intl;
    return intl43.string(intl71.t.sxMPdm);
  } else if (tmp.FLIGHT_SIMULATOR === arg0) {
    const intl42 = intl71.intl;
    return intl42.string(intl71.t["Q7msr+"]);
  } else if (tmp.TRAIN_SIMULATOR === arg0) {
    const intl41 = intl71.intl;
    return intl41.string(intl71.t.ZtECf3);
  } else if (tmp.LIFE_SIMULATOR === arg0) {
    const intl40 = intl71.intl;
    return intl40.string(intl71.t.byt5Fo);
  } else if (tmp.FISHING === arg0) {
    const intl39 = intl71.intl;
    return intl39.string(intl71.t.BKwiwY);
  } else if (tmp.SPORTS === arg0) {
    const intl38 = intl71.intl;
    return intl38.string(intl71.t.O0B7XM);
  } else if (tmp.BASEBALL === arg0) {
    const intl37 = intl71.intl;
    return intl37.string(intl71.t["jPYb/z"]);
  } else if (tmp.BASKETBALL === arg0) {
    const intl36 = intl71.intl;
    return intl36.string(intl71.t["o+D1Bm"]);
  } else if (tmp.BILLIARDS === arg0) {
    const intl35 = intl71.intl;
    return intl35.string(intl71.t.PJ5o4E);
  } else if (tmp.BOWLING === arg0) {
    const intl34 = intl71.intl;
    return intl34.string(intl71.t["82afJw"]);
  } else if (tmp.BOXING === arg0) {
    const intl33 = intl71.intl;
    return intl33.string(intl71.t.DQvfei);
  } else if (tmp.FOOTBALL === arg0) {
    const intl32 = intl71.intl;
    return intl32.string(intl71.t.slOYkj);
  } else if (tmp.GOLF === arg0) {
    const intl31 = intl71.intl;
    return intl31.string(intl71.t.aeQPlG);
  } else if (tmp.HOCKEY === arg0) {
    const intl30 = intl71.intl;
    return intl30.string(intl71.t.g7oe5X);
  } else if (tmp.SKATEBOARDING_SKATING === arg0) {
    const intl29 = intl71.intl;
    return intl29.string(intl71.t.yBDEP0);
  } else if (tmp.SNOWBOARDING_SKIING === arg0) {
    const intl28 = intl71.intl;
    return intl28.string(intl71.t.GVaAci);
  } else if (tmp.SOCCER === arg0) {
    const intl27 = intl71.intl;
    return intl27.string(intl71.t.KPznxl);
  } else if (tmp.TRACK_FIELD === arg0) {
    const intl26 = intl71.intl;
    return intl26.string(intl71.t["hJ62Q/"]);
  } else if (tmp.SURFING_WAKEBOARDING === arg0) {
    const intl25 = intl71.intl;
    return intl25.string(intl71.t.PSh0CV);
  } else if (tmp.WRESTLING === arg0) {
    const intl24 = intl71.intl;
    return intl24.string(intl71.t["3y9hAT"]);
  } else if (tmp.STRATEGY === arg0) {
    const intl23 = intl71.intl;
    return intl23.string(intl71.t.KovTD8);
  } else if (tmp.FOUR_X === arg0) {
    const intl22 = intl71.intl;
    return intl22.string(intl71.t["19h4dX"]);
  } else if (tmp.ARTILLERY === arg0) {
    const intl21 = intl71.intl;
    return intl21.string(intl71.t.sBqLsP);
  } else if (tmp.RTS === arg0) {
    const intl20 = intl71.intl;
    return intl20.string(intl71.t.yS4ddj);
  } else if (tmp.TOWER_DEFENSE === arg0) {
    const intl19 = intl71.intl;
    return intl19.string(intl71.t.SULyIO);
  } else if (tmp.TURN_BASED_STRATEGY === arg0) {
    const intl18 = intl71.intl;
    return intl18.string(intl71.t.VDsbru);
  } else if (tmp.WARGAME === arg0) {
    const intl17 = intl71.intl;
    return intl17.string(intl71.t.YDCIrO);
  } else if (tmp.MOBA === arg0) {
    const intl16 = intl71.intl;
    return intl16.string(intl71.t.i1m1t8);
  } else if (tmp.FIGHTING === arg0) {
    const intl15 = intl71.intl;
    return intl15.string(intl71.t.KepcSI);
  } else if (tmp.PUZZLE === arg0) {
    const intl14 = intl71.intl;
    return intl14.string(intl71.t.rm7Ggs);
  } else if (tmp.CARD_GAME === arg0) {
    const intl13 = intl71.intl;
    return intl13.string(intl71.t.kX85vy);
  } else if (tmp.EDUCATION === arg0) {
    const intl12 = intl71.intl;
    return intl12.string(intl71.t.klIi67);
  } else if (tmp.FITNESS === arg0) {
    const intl11 = intl71.intl;
    return intl11.string(intl71.t.GOaaFb);
  } else if (tmp.GAMBLING === arg0) {
    const intl10 = intl71.intl;
    return intl10.string(intl71.t["X8/Ee9"]);
  } else if (tmp.MUSIC_RHYTHM === arg0) {
    const intl9 = intl71.intl;
    return intl9.string(intl71.t.qPgrgw);
  } else if (tmp.PARTY_MINI_GAME === arg0) {
    const intl8 = intl71.intl;
    return intl8.string(intl71.t.diBclF);
  } else if (tmp.PINBALL === arg0) {
    const intl7 = intl71.intl;
    return intl7.string(intl71.t["1+ottx"]);
  } else if (tmp.TRIVIA_BOARD_GAME === arg0) {
    const intl6 = intl71.intl;
    return intl6.string(intl71.t.aLlxjC);
  } else if (tmp.TACTICAL === arg0) {
    const intl5 = intl71.intl;
    return intl5.string(intl71.t.LRPgbt);
  } else if (tmp.INDIE === arg0) {
    const intl4 = intl71.intl;
    return intl4.string(intl71.t.hz9Xvj);
  } else if (tmp.ARCADE === arg0) {
    const intl3 = intl71.intl;
    return intl3.string(intl71.t.Sbxowr);
  } else if (tmp.POINT_AND_CLICK === arg0) {
    const intl2 = intl71.intl;
    return intl2.string(intl71.t.vcerEn);
  } else {
    const intl = intl71.intl;
    return intl.string(intl71.t["9b4eUr"]);
  }
};
export const canUserInstall = function canUserInstall(type) {
  const nativePlatformTypeToSKUOperatingSystem = StoreUtils.nativePlatformTypeToSKUOperatingSystem;
  StoreUtils;
  const obj = PlatformUtils;
  const result = nativePlatformTypeToSKUOperatingSystem(obj.getPlatform());
  let hasItem = type.type === hasOwnProperty.DURABLE_PRIMARY && null != result;
  if (hasItem) {
    const supportedOperatingSystems = type.supportedOperatingSystems;
    hasItem = supportedOperatingSystems.includes(result);
  }
  return hasItem;
};
export const getReadablePreorderReleaseDate = function getReadablePreorderReleaseDate(arg0) {
  let preorderApproximateReleaseDate;
  let preorderReleaseAt;
  let tmp3;
  let tmp4;
  ({ preorderReleaseAt, preorderApproximateReleaseDate } = arg0);
  if (null != preorderReleaseAt) {
    return preorderReleaseAt.format("MMMM DD");
  } else if (null == preorderApproximateReleaseDate) {
    return null;
  } else {
    let num = 0;
    if (0 < items.length) {
      [tmp3, tmp4] = items[num];
      _slicedToArray(items[num], 2);
      const obj = _modDef4424(preorderApproximateReleaseDate, tmp3, true);
      while (!obj.isValid()) {
        num = num + 1;
      }
      return obj.format(tmp4);
    }
    return preorderApproximateReleaseDate;
  }
};
export const isThirdPartySKU = function isThirdPartySKU(arg0) {
  return arg0 === metroImportDefault.SOCIAL_LAYER_GAME_ITEM;
};
