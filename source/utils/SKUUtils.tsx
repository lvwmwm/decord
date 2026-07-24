// Module ID: 8673
// Function ID: 68599
// Name: GameGenres
// Dependencies: [57, 653, 3952, 1212, 4369, 477, 3712, 2]
// Exports: canUserInstall, getGenreIdFromURLSlug, getGenreText, getGenreURLSlugFromId, getReadablePreorderReleaseDate, getSKUIdFromURL, isThirdPartySKU

// Module 8673 (GameGenres)
import _slicedToArray from "_slicedToArray";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
const GameGenres = ME.GameGenres;
({ SKUTypes: closure_5, Routes: closure_6, SKUProductLines: closure_7 } = ME);
let closure_8 = {};
let closure_9 = {};
const merged = Object.assign(GameGenres);
const frozen = Object.freeze({ ALL: -1 });
const keys = Object.keys(frozen);
const item = keys.forEach((str) => {
  const replaced = str.toLowerCase().replace(/_/g, "-");
  closure_8[replaced] = frozen[str];
  closure_9[frozen[str]] = replaced;
});
const items = [["YYYY-MM-DD", "MMMM DD, Y"], ["YYYY-MM", "MMMM Y"], ["MM-DD", "MMMM DD"], ["MM", "MMMM"], ["YYYY", "Y"]];
let result = require("matchPath").fileFinishedImporting("utils/SKUUtils.tsx");

export const getSKUIdFromURL = function getSKUIdFromURL(pathname) {
  let obj = require(3952) /* matchPath */;
  obj = { path: closure_6.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug") };
  const matchPathResult = obj.matchPath(pathname, obj);
  let skuId = null;
  if (null != matchPathResult) {
    skuId = matchPathResult.params.skuId;
  }
  return skuId;
};
export const getGenreURLSlugFromId = function getGenreURLSlugFromId(arg0) {
  return table2[arg0];
};
export const getGenreIdFromURLSlug = function getGenreIdFromURLSlug(arg0) {
  return table[arg0];
};
export const getGenreText = function getGenreText(arg0) {
  if (GameGenres.ACTION === arg0) {
    const intl70 = require(1212) /* getSystemLocale */.intl;
    return intl70.string(require(1212) /* getSystemLocale */.t["1o2/IM"]);
  } else if (GameGenres.ACTION_RPG === arg0) {
    const intl69 = require(1212) /* getSystemLocale */.intl;
    return intl69.string(require(1212) /* getSystemLocale */.t.e9Yo4H);
  } else if (GameGenres.BRAWLER === arg0) {
    const intl68 = require(1212) /* getSystemLocale */.intl;
    return intl68.string(require(1212) /* getSystemLocale */.t.WCkEjT);
  } else if (GameGenres.HACK_AND_SLASH === arg0) {
    const intl67 = require(1212) /* getSystemLocale */.intl;
    return intl67.string(require(1212) /* getSystemLocale */.t.xQ4VmK);
  } else if (GameGenres.PLATFORMER === arg0) {
    const intl66 = require(1212) /* getSystemLocale */.intl;
    return intl66.string(require(1212) /* getSystemLocale */.t.WA3189);
  } else if (GameGenres.STEALTH === arg0) {
    const intl65 = require(1212) /* getSystemLocale */.intl;
    return intl65.string(require(1212) /* getSystemLocale */.t["6UPFdw"]);
  } else if (GameGenres.SURVIVAL === arg0) {
    const intl64 = require(1212) /* getSystemLocale */.intl;
    return intl64.string(require(1212) /* getSystemLocale */.t.SVPCt9);
  } else if (GameGenres.ADVENTURE === arg0) {
    const intl63 = require(1212) /* getSystemLocale */.intl;
    return intl63.string(require(1212) /* getSystemLocale */.t["15p8on"]);
  } else if (GameGenres.ACTION_ADVENTURE === arg0) {
    const intl62 = require(1212) /* getSystemLocale */.intl;
    return intl62.string(require(1212) /* getSystemLocale */.t.AxkUBp);
  } else if (GameGenres.METROIDVANIA === arg0) {
    const intl61 = require(1212) /* getSystemLocale */.intl;
    return intl61.string(require(1212) /* getSystemLocale */.t.Iwr38m);
  } else if (GameGenres.OPEN_WORLD === arg0) {
    const intl60 = require(1212) /* getSystemLocale */.intl;
    return intl60.string(require(1212) /* getSystemLocale */.t["2HRHJO"]);
  } else if (GameGenres.PSYCHOLOGICAL_HORROR === arg0) {
    const intl59 = require(1212) /* getSystemLocale */.intl;
    return intl59.string(require(1212) /* getSystemLocale */.t["/IwK3s"]);
  } else if (GameGenres.SANDBOX === arg0) {
    const intl58 = require(1212) /* getSystemLocale */.intl;
    return intl58.string(require(1212) /* getSystemLocale */.t["2+Vu4Q"]);
  } else if (GameGenres.SURVIVAL_HORROR === arg0) {
    const intl57 = require(1212) /* getSystemLocale */.intl;
    return intl57.string(require(1212) /* getSystemLocale */.t.CCzRiK);
  } else if (GameGenres.VISUAL_NOVEL === arg0) {
    const intl56 = require(1212) /* getSystemLocale */.intl;
    return intl56.string(require(1212) /* getSystemLocale */.t.FE7rnk);
  } else if (GameGenres.DRIVING_RACING === arg0) {
    const intl55 = require(1212) /* getSystemLocale */.intl;
    return intl55.string(require(1212) /* getSystemLocale */.t.Erzgca);
  } else if (GameGenres.VEHICULAR_COMBAT === arg0) {
    const intl54 = require(1212) /* getSystemLocale */.intl;
    return intl54.string(require(1212) /* getSystemLocale */.t.YQHhog);
  } else if (GameGenres.MASSIVELY_MULTIPLAYER === arg0) {
    const intl53 = require(1212) /* getSystemLocale */.intl;
    return intl53.string(require(1212) /* getSystemLocale */.t["5CNg1o"]);
  } else if (GameGenres.MMORPG === arg0) {
    const intl52 = require(1212) /* getSystemLocale */.intl;
    return intl52.string(require(1212) /* getSystemLocale */.t["c4NuO/"]);
  } else if (GameGenres.ROLE_PLAYING === arg0) {
    const intl51 = require(1212) /* getSystemLocale */.intl;
    return intl51.string(require(1212) /* getSystemLocale */.t.yayVgs);
  } else if (GameGenres.DUNGEON_CRAWLER === arg0) {
    const intl50 = require(1212) /* getSystemLocale */.intl;
    return intl50.string(require(1212) /* getSystemLocale */.t.qicemc);
  } else if (GameGenres.ROGUELIKE === arg0) {
    const intl49 = require(1212) /* getSystemLocale */.intl;
    return intl49.string(require(1212) /* getSystemLocale */.t.zWzaCv);
  } else if (GameGenres.SHOOTER === arg0) {
    const intl48 = require(1212) /* getSystemLocale */.intl;
    return intl48.string(require(1212) /* getSystemLocale */.t["+pk6sd"]);
  } else if (GameGenres.LIGHT_GUN === arg0) {
    const intl47 = require(1212) /* getSystemLocale */.intl;
    return intl47.string(require(1212) /* getSystemLocale */.t.TDS96y);
  } else if (GameGenres.SHOOT_EM_UP === arg0) {
    const intl46 = require(1212) /* getSystemLocale */.intl;
    return intl46.string(require(1212) /* getSystemLocale */.t.wltDUE);
  } else if (GameGenres.FPS === arg0) {
    const intl45 = require(1212) /* getSystemLocale */.intl;
    return intl45.string(require(1212) /* getSystemLocale */.t.olTaq4);
  } else if (GameGenres.DUAL_JOYSTICK_SHOOTER === arg0) {
    const intl44 = require(1212) /* getSystemLocale */.intl;
    return intl44.string(require(1212) /* getSystemLocale */.t["SN+NS3"]);
  } else if (GameGenres.SIMULATION === arg0) {
    const intl43 = require(1212) /* getSystemLocale */.intl;
    return intl43.string(require(1212) /* getSystemLocale */.t.sxMPdm);
  } else if (GameGenres.FLIGHT_SIMULATOR === arg0) {
    const intl42 = require(1212) /* getSystemLocale */.intl;
    return intl42.string(require(1212) /* getSystemLocale */.t["Q7msr+"]);
  } else if (GameGenres.TRAIN_SIMULATOR === arg0) {
    const intl41 = require(1212) /* getSystemLocale */.intl;
    return intl41.string(require(1212) /* getSystemLocale */.t.ZtECf3);
  } else if (GameGenres.LIFE_SIMULATOR === arg0) {
    const intl40 = require(1212) /* getSystemLocale */.intl;
    return intl40.string(require(1212) /* getSystemLocale */.t.byt5Fo);
  } else if (GameGenres.FISHING === arg0) {
    const intl39 = require(1212) /* getSystemLocale */.intl;
    return intl39.string(require(1212) /* getSystemLocale */.t.BKwiwY);
  } else if (GameGenres.SPORTS === arg0) {
    const intl38 = require(1212) /* getSystemLocale */.intl;
    return intl38.string(require(1212) /* getSystemLocale */.t.O0B7XM);
  } else if (GameGenres.BASEBALL === arg0) {
    const intl37 = require(1212) /* getSystemLocale */.intl;
    return intl37.string(require(1212) /* getSystemLocale */.t["jPYb/z"]);
  } else if (GameGenres.BASKETBALL === arg0) {
    const intl36 = require(1212) /* getSystemLocale */.intl;
    return intl36.string(require(1212) /* getSystemLocale */.t["o+D1Bm"]);
  } else if (GameGenres.BILLIARDS === arg0) {
    const intl35 = require(1212) /* getSystemLocale */.intl;
    return intl35.string(require(1212) /* getSystemLocale */.t.PJ5o4E);
  } else if (GameGenres.BOWLING === arg0) {
    const intl34 = require(1212) /* getSystemLocale */.intl;
    return intl34.string(require(1212) /* getSystemLocale */.t["82afJw"]);
  } else if (GameGenres.BOXING === arg0) {
    const intl33 = require(1212) /* getSystemLocale */.intl;
    return intl33.string(require(1212) /* getSystemLocale */.t.DQvfei);
  } else if (GameGenres.FOOTBALL === arg0) {
    const intl32 = require(1212) /* getSystemLocale */.intl;
    return intl32.string(require(1212) /* getSystemLocale */.t.slOYkj);
  } else if (GameGenres.GOLF === arg0) {
    const intl31 = require(1212) /* getSystemLocale */.intl;
    return intl31.string(require(1212) /* getSystemLocale */.t.aeQPlG);
  } else if (GameGenres.HOCKEY === arg0) {
    const intl30 = require(1212) /* getSystemLocale */.intl;
    return intl30.string(require(1212) /* getSystemLocale */.t.g7oe5X);
  } else if (GameGenres.SKATEBOARDING_SKATING === arg0) {
    const intl29 = require(1212) /* getSystemLocale */.intl;
    return intl29.string(require(1212) /* getSystemLocale */.t.yBDEP0);
  } else if (GameGenres.SNOWBOARDING_SKIING === arg0) {
    const intl28 = require(1212) /* getSystemLocale */.intl;
    return intl28.string(require(1212) /* getSystemLocale */.t.GVaAci);
  } else if (GameGenres.SOCCER === arg0) {
    const intl27 = require(1212) /* getSystemLocale */.intl;
    return intl27.string(require(1212) /* getSystemLocale */.t.KPznxl);
  } else if (GameGenres.TRACK_FIELD === arg0) {
    const intl26 = require(1212) /* getSystemLocale */.intl;
    return intl26.string(require(1212) /* getSystemLocale */.t["hJ62Q/"]);
  } else if (GameGenres.SURFING_WAKEBOARDING === arg0) {
    const intl25 = require(1212) /* getSystemLocale */.intl;
    return intl25.string(require(1212) /* getSystemLocale */.t.PSh0CV);
  } else if (GameGenres.WRESTLING === arg0) {
    const intl24 = require(1212) /* getSystemLocale */.intl;
    return intl24.string(require(1212) /* getSystemLocale */.t["3y9hAT"]);
  } else if (GameGenres.STRATEGY === arg0) {
    const intl23 = require(1212) /* getSystemLocale */.intl;
    return intl23.string(require(1212) /* getSystemLocale */.t.KovTD8);
  } else if (GameGenres.FOUR_X === arg0) {
    const intl22 = require(1212) /* getSystemLocale */.intl;
    return intl22.string(require(1212) /* getSystemLocale */.t["19h4dX"]);
  } else if (GameGenres.ARTILLERY === arg0) {
    const intl21 = require(1212) /* getSystemLocale */.intl;
    return intl21.string(require(1212) /* getSystemLocale */.t.sBqLsP);
  } else if (GameGenres.RTS === arg0) {
    const intl20 = require(1212) /* getSystemLocale */.intl;
    return intl20.string(require(1212) /* getSystemLocale */.t.yS4ddj);
  } else if (GameGenres.TOWER_DEFENSE === arg0) {
    const intl19 = require(1212) /* getSystemLocale */.intl;
    return intl19.string(require(1212) /* getSystemLocale */.t.SULyIO);
  } else if (GameGenres.TURN_BASED_STRATEGY === arg0) {
    const intl18 = require(1212) /* getSystemLocale */.intl;
    return intl18.string(require(1212) /* getSystemLocale */.t.VDsbru);
  } else if (GameGenres.WARGAME === arg0) {
    const intl17 = require(1212) /* getSystemLocale */.intl;
    return intl17.string(require(1212) /* getSystemLocale */.t.YDCIrO);
  } else if (GameGenres.MOBA === arg0) {
    const intl16 = require(1212) /* getSystemLocale */.intl;
    return intl16.string(require(1212) /* getSystemLocale */.t.i1m1t8);
  } else if (GameGenres.FIGHTING === arg0) {
    const intl15 = require(1212) /* getSystemLocale */.intl;
    return intl15.string(require(1212) /* getSystemLocale */.t.KepcSI);
  } else if (GameGenres.PUZZLE === arg0) {
    const intl14 = require(1212) /* getSystemLocale */.intl;
    return intl14.string(require(1212) /* getSystemLocale */.t.rm7Ggs);
  } else if (GameGenres.CARD_GAME === arg0) {
    const intl13 = require(1212) /* getSystemLocale */.intl;
    return intl13.string(require(1212) /* getSystemLocale */.t.kX85vy);
  } else if (GameGenres.EDUCATION === arg0) {
    const intl12 = require(1212) /* getSystemLocale */.intl;
    return intl12.string(require(1212) /* getSystemLocale */.t.klIi67);
  } else if (GameGenres.FITNESS === arg0) {
    const intl11 = require(1212) /* getSystemLocale */.intl;
    return intl11.string(require(1212) /* getSystemLocale */.t.GOaaFb);
  } else if (GameGenres.GAMBLING === arg0) {
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t["X8/Ee9"]);
  } else if (GameGenres.MUSIC_RHYTHM === arg0) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t.qPgrgw);
  } else if (GameGenres.PARTY_MINI_GAME === arg0) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t.diBclF);
  } else if (GameGenres.PINBALL === arg0) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t["1+ottx"]);
  } else if (GameGenres.TRIVIA_BOARD_GAME === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.aLlxjC);
  } else if (GameGenres.TACTICAL === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.LRPgbt);
  } else if (GameGenres.INDIE === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.hz9Xvj);
  } else if (GameGenres.ARCADE === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.Sbxowr);
  } else if (GameGenres.POINT_AND_CLICK === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.vcerEn);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["9b4eUr"]);
  }
};
export const canUserInstall = function canUserInstall(type) {
  const obj = require(4369) /* _httpGetWithCountryCodeQuery */;
  const result = obj.nativePlatformTypeToSKUOperatingSystem(require(477) /* set */.getPlatform());
  let hasItem = type.type === constants.DURABLE_PRIMARY;
  if (hasItem) {
    hasItem = null != result;
  }
  if (hasItem) {
    const supportedOperatingSystems = type.supportedOperatingSystems;
    hasItem = supportedOperatingSystems.includes(result);
  }
  return hasItem;
};
export const getReadablePreorderReleaseDate = function getReadablePreorderReleaseDate(arg0) {
  let preorderApproximateReleaseDate;
  let preorderReleaseAt;
  let tmp4;
  let tmp5;
  ({ preorderReleaseAt, preorderApproximateReleaseDate } = arg0);
  if (null != preorderReleaseAt) {
    return preorderReleaseAt.format("MMMM DD");
  } else if (null == preorderApproximateReleaseDate) {
    return null;
  } else {
    let num = 0;
    if (0 < items.length) {
      [tmp4, tmp5] = callback(items[num], 2);
      const obj = importDefault(3712)(preorderApproximateReleaseDate, tmp4, true);
      while (!obj.isValid()) {
        num = num + 1;
        let tmp8 = items;
      }
      return obj.format(tmp5);
    }
    return preorderApproximateReleaseDate;
  }
};
export const isThirdPartySKU = function isThirdPartySKU(arg0) {
  return arg0 === constants2.SOCIAL_LAYER_GAME_ITEM;
};
