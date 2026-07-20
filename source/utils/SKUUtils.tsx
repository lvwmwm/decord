// Module ID: 8619
// Function ID: 68302
// Name: GameGenres
// Dependencies: []
// Exports: canUserInstall, getGenreIdFromURLSlug, getGenreText, getGenreURLSlugFromId, getReadablePreorderReleaseDate, getSKUIdFromURL, isThirdPartySKU

// Module 8619 (GameGenres)
let closure_3 = importDefault(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const GameGenres = tmp2.GameGenres;
({ SKUTypes: closure_5, Routes: closure_6, SKUProductLines: closure_7 } = tmp2);
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
const items = [[0.872, 0.705], [null, null], [true, true], ["<string:3573412790>", "<string:2167488456>"], [null, null]];
const result = arg1(dependencyMap[7]).fileFinishedImporting("utils/SKUUtils.tsx");

export const getSKUIdFromURL = function getSKUIdFromURL(pathname) {
  let obj = arg1(dependencyMap[2]);
  obj = { path: closure_6.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug") };
  const matchPathResult = obj.matchPath(pathname, obj);
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
  if (GameGenres.ACTION === arg0) {
    const intl70 = arg1(dependencyMap[3]).intl;
    return intl70.string(arg1(dependencyMap[3]).t.1o2/IM);
  } else if (GameGenres.ACTION_RPG === arg0) {
    const intl69 = arg1(dependencyMap[3]).intl;
    return intl69.string(arg1(dependencyMap[3]).t.e9Yo4H);
  } else if (GameGenres.BRAWLER === arg0) {
    const intl68 = arg1(dependencyMap[3]).intl;
    return intl68.string(arg1(dependencyMap[3]).t.WCkEjT);
  } else if (GameGenres.HACK_AND_SLASH === arg0) {
    const intl67 = arg1(dependencyMap[3]).intl;
    return intl67.string(arg1(dependencyMap[3]).t.xQ4VmK);
  } else if (GameGenres.PLATFORMER === arg0) {
    const intl66 = arg1(dependencyMap[3]).intl;
    return intl66.string(arg1(dependencyMap[3]).t.WA3189);
  } else if (GameGenres.STEALTH === arg0) {
    const intl65 = arg1(dependencyMap[3]).intl;
    return intl65.string(arg1(dependencyMap[3]).t.6UPFdw);
  } else if (GameGenres.SURVIVAL === arg0) {
    const intl64 = arg1(dependencyMap[3]).intl;
    return intl64.string(arg1(dependencyMap[3]).t.SVPCt9);
  } else if (GameGenres.ADVENTURE === arg0) {
    const intl63 = arg1(dependencyMap[3]).intl;
    return intl63.string(arg1(dependencyMap[3]).t.15p8on);
  } else if (GameGenres.ACTION_ADVENTURE === arg0) {
    const intl62 = arg1(dependencyMap[3]).intl;
    return intl62.string(arg1(dependencyMap[3]).t.AxkUBp);
  } else if (GameGenres.METROIDVANIA === arg0) {
    const intl61 = arg1(dependencyMap[3]).intl;
    return intl61.string(arg1(dependencyMap[3]).t.Iwr38m);
  } else if (GameGenres.OPEN_WORLD === arg0) {
    const intl60 = arg1(dependencyMap[3]).intl;
    return intl60.string(arg1(dependencyMap[3]).t.2HRHJO);
  } else if (GameGenres.PSYCHOLOGICAL_HORROR === arg0) {
    const intl59 = arg1(dependencyMap[3]).intl;
    return intl59.string(arg1(dependencyMap[3]).t./IwK3s);
  } else if (GameGenres.SANDBOX === arg0) {
    const intl58 = arg1(dependencyMap[3]).intl;
    return intl58.string(arg1(dependencyMap[3]).t.2+Vu4Q);
  } else if (GameGenres.SURVIVAL_HORROR === arg0) {
    const intl57 = arg1(dependencyMap[3]).intl;
    return intl57.string(arg1(dependencyMap[3]).t.CCzRiK);
  } else if (GameGenres.VISUAL_NOVEL === arg0) {
    const intl56 = arg1(dependencyMap[3]).intl;
    return intl56.string(arg1(dependencyMap[3]).t.FE7rnk);
  } else if (GameGenres.DRIVING_RACING === arg0) {
    const intl55 = arg1(dependencyMap[3]).intl;
    return intl55.string(arg1(dependencyMap[3]).t.Erzgca);
  } else if (GameGenres.VEHICULAR_COMBAT === arg0) {
    const intl54 = arg1(dependencyMap[3]).intl;
    return intl54.string(arg1(dependencyMap[3]).t.YQHhog);
  } else if (GameGenres.MASSIVELY_MULTIPLAYER === arg0) {
    const intl53 = arg1(dependencyMap[3]).intl;
    return intl53.string(arg1(dependencyMap[3]).t.5CNg1o);
  } else if (GameGenres.MMORPG === arg0) {
    const intl52 = arg1(dependencyMap[3]).intl;
    return intl52.string(arg1(dependencyMap[3]).t.c4NuO/);
  } else if (GameGenres.ROLE_PLAYING === arg0) {
    const intl51 = arg1(dependencyMap[3]).intl;
    return intl51.string(arg1(dependencyMap[3]).t.yayVgs);
  } else if (GameGenres.DUNGEON_CRAWLER === arg0) {
    const intl50 = arg1(dependencyMap[3]).intl;
    return intl50.string(arg1(dependencyMap[3]).t.qicemc);
  } else if (GameGenres.ROGUELIKE === arg0) {
    const intl49 = arg1(dependencyMap[3]).intl;
    return intl49.string(arg1(dependencyMap[3]).t.zWzaCv);
  } else if (GameGenres.SHOOTER === arg0) {
    const intl48 = arg1(dependencyMap[3]).intl;
    return intl48.string(arg1(dependencyMap[3]).t.+pk6sd);
  } else if (GameGenres.LIGHT_GUN === arg0) {
    const intl47 = arg1(dependencyMap[3]).intl;
    return intl47.string(arg1(dependencyMap[3]).t.TDS96y);
  } else if (GameGenres.SHOOT_EM_UP === arg0) {
    const intl46 = arg1(dependencyMap[3]).intl;
    return intl46.string(arg1(dependencyMap[3]).t.wltDUE);
  } else if (GameGenres.FPS === arg0) {
    const intl45 = arg1(dependencyMap[3]).intl;
    return intl45.string(arg1(dependencyMap[3]).t.olTaq4);
  } else if (GameGenres.DUAL_JOYSTICK_SHOOTER === arg0) {
    const intl44 = arg1(dependencyMap[3]).intl;
    return intl44.string(arg1(dependencyMap[3]).t.SN+NS3);
  } else if (GameGenres.SIMULATION === arg0) {
    const intl43 = arg1(dependencyMap[3]).intl;
    return intl43.string(arg1(dependencyMap[3]).t.sxMPdm);
  } else if (GameGenres.FLIGHT_SIMULATOR === arg0) {
    const intl42 = arg1(dependencyMap[3]).intl;
    return intl42.string(arg1(dependencyMap[3]).t.Q7msr+);
  } else if (GameGenres.TRAIN_SIMULATOR === arg0) {
    const intl41 = arg1(dependencyMap[3]).intl;
    return intl41.string(arg1(dependencyMap[3]).t.ZtECf3);
  } else if (GameGenres.LIFE_SIMULATOR === arg0) {
    const intl40 = arg1(dependencyMap[3]).intl;
    return intl40.string(arg1(dependencyMap[3]).t.byt5Fo);
  } else if (GameGenres.FISHING === arg0) {
    const intl39 = arg1(dependencyMap[3]).intl;
    return intl39.string(arg1(dependencyMap[3]).t.BKwiwY);
  } else if (GameGenres.SPORTS === arg0) {
    const intl38 = arg1(dependencyMap[3]).intl;
    return intl38.string(arg1(dependencyMap[3]).t.O0B7XM);
  } else if (GameGenres.BASEBALL === arg0) {
    const intl37 = arg1(dependencyMap[3]).intl;
    return intl37.string(arg1(dependencyMap[3]).t.jPYb/z);
  } else if (GameGenres.BASKETBALL === arg0) {
    const intl36 = arg1(dependencyMap[3]).intl;
    return intl36.string(arg1(dependencyMap[3]).t.o+D1Bm);
  } else if (GameGenres.BILLIARDS === arg0) {
    const intl35 = arg1(dependencyMap[3]).intl;
    return intl35.string(arg1(dependencyMap[3]).t.PJ5o4E);
  } else if (GameGenres.BOWLING === arg0) {
    const intl34 = arg1(dependencyMap[3]).intl;
    return intl34.string(arg1(dependencyMap[3]).t.82afJw);
  } else if (GameGenres.BOXING === arg0) {
    const intl33 = arg1(dependencyMap[3]).intl;
    return intl33.string(arg1(dependencyMap[3]).t.DQvfei);
  } else if (GameGenres.FOOTBALL === arg0) {
    const intl32 = arg1(dependencyMap[3]).intl;
    return intl32.string(arg1(dependencyMap[3]).t.slOYkj);
  } else if (GameGenres.GOLF === arg0) {
    const intl31 = arg1(dependencyMap[3]).intl;
    return intl31.string(arg1(dependencyMap[3]).t.aeQPlG);
  } else if (GameGenres.HOCKEY === arg0) {
    const intl30 = arg1(dependencyMap[3]).intl;
    return intl30.string(arg1(dependencyMap[3]).t.g7oe5X);
  } else if (GameGenres.SKATEBOARDING_SKATING === arg0) {
    const intl29 = arg1(dependencyMap[3]).intl;
    return intl29.string(arg1(dependencyMap[3]).t.yBDEP0);
  } else if (GameGenres.SNOWBOARDING_SKIING === arg0) {
    const intl28 = arg1(dependencyMap[3]).intl;
    return intl28.string(arg1(dependencyMap[3]).t.GVaAci);
  } else if (GameGenres.SOCCER === arg0) {
    const intl27 = arg1(dependencyMap[3]).intl;
    return intl27.string(arg1(dependencyMap[3]).t.KPznxl);
  } else if (GameGenres.TRACK_FIELD === arg0) {
    const intl26 = arg1(dependencyMap[3]).intl;
    return intl26.string(arg1(dependencyMap[3]).t.hJ62Q/);
  } else if (GameGenres.SURFING_WAKEBOARDING === arg0) {
    const intl25 = arg1(dependencyMap[3]).intl;
    return intl25.string(arg1(dependencyMap[3]).t.PSh0CV);
  } else if (GameGenres.WRESTLING === arg0) {
    const intl24 = arg1(dependencyMap[3]).intl;
    return intl24.string(arg1(dependencyMap[3]).t.3y9hAT);
  } else if (GameGenres.STRATEGY === arg0) {
    const intl23 = arg1(dependencyMap[3]).intl;
    return intl23.string(arg1(dependencyMap[3]).t.KovTD8);
  } else if (GameGenres.FOUR_X === arg0) {
    const intl22 = arg1(dependencyMap[3]).intl;
    return intl22.string(arg1(dependencyMap[3]).t.19h4dX);
  } else if (GameGenres.ARTILLERY === arg0) {
    const intl21 = arg1(dependencyMap[3]).intl;
    return intl21.string(arg1(dependencyMap[3]).t.sBqLsP);
  } else if (GameGenres.RTS === arg0) {
    const intl20 = arg1(dependencyMap[3]).intl;
    return intl20.string(arg1(dependencyMap[3]).t.yS4ddj);
  } else if (GameGenres.TOWER_DEFENSE === arg0) {
    const intl19 = arg1(dependencyMap[3]).intl;
    return intl19.string(arg1(dependencyMap[3]).t.SULyIO);
  } else if (GameGenres.TURN_BASED_STRATEGY === arg0) {
    const intl18 = arg1(dependencyMap[3]).intl;
    return intl18.string(arg1(dependencyMap[3]).t.VDsbru);
  } else if (GameGenres.WARGAME === arg0) {
    const intl17 = arg1(dependencyMap[3]).intl;
    return intl17.string(arg1(dependencyMap[3]).t.YDCIrO);
  } else if (GameGenres.MOBA === arg0) {
    const intl16 = arg1(dependencyMap[3]).intl;
    return intl16.string(arg1(dependencyMap[3]).t.i1m1t8);
  } else if (GameGenres.FIGHTING === arg0) {
    const intl15 = arg1(dependencyMap[3]).intl;
    return intl15.string(arg1(dependencyMap[3]).t.KepcSI);
  } else if (GameGenres.PUZZLE === arg0) {
    const intl14 = arg1(dependencyMap[3]).intl;
    return intl14.string(arg1(dependencyMap[3]).t.rm7Ggs);
  } else if (GameGenres.CARD_GAME === arg0) {
    const intl13 = arg1(dependencyMap[3]).intl;
    return intl13.string(arg1(dependencyMap[3]).t.kX85vy);
  } else if (GameGenres.EDUCATION === arg0) {
    const intl12 = arg1(dependencyMap[3]).intl;
    return intl12.string(arg1(dependencyMap[3]).t.klIi67);
  } else if (GameGenres.FITNESS === arg0) {
    const intl11 = arg1(dependencyMap[3]).intl;
    return intl11.string(arg1(dependencyMap[3]).t.GOaaFb);
  } else if (GameGenres.GAMBLING === arg0) {
    const intl10 = arg1(dependencyMap[3]).intl;
    return intl10.string(arg1(dependencyMap[3]).t.X8/Ee9);
  } else if (GameGenres.MUSIC_RHYTHM === arg0) {
    const intl9 = arg1(dependencyMap[3]).intl;
    return intl9.string(arg1(dependencyMap[3]).t.qPgrgw);
  } else if (GameGenres.PARTY_MINI_GAME === arg0) {
    const intl8 = arg1(dependencyMap[3]).intl;
    return intl8.string(arg1(dependencyMap[3]).t.diBclF);
  } else if (GameGenres.PINBALL === arg0) {
    const intl7 = arg1(dependencyMap[3]).intl;
    return intl7.string(arg1(dependencyMap[3]).t.1+ottx);
  } else if (GameGenres.TRIVIA_BOARD_GAME === arg0) {
    const intl6 = arg1(dependencyMap[3]).intl;
    return intl6.string(arg1(dependencyMap[3]).t.aLlxjC);
  } else if (GameGenres.TACTICAL === arg0) {
    const intl5 = arg1(dependencyMap[3]).intl;
    return intl5.string(arg1(dependencyMap[3]).t.LRPgbt);
  } else if (GameGenres.INDIE === arg0) {
    const intl4 = arg1(dependencyMap[3]).intl;
    return intl4.string(arg1(dependencyMap[3]).t.hz9Xvj);
  } else if (GameGenres.ARCADE === arg0) {
    const intl3 = arg1(dependencyMap[3]).intl;
    return intl3.string(arg1(dependencyMap[3]).t.Sbxowr);
  } else if (GameGenres.POINT_AND_CLICK === arg0) {
    const intl2 = arg1(dependencyMap[3]).intl;
    return intl2.string(arg1(dependencyMap[3]).t.vcerEn);
  } else {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.9b4eUr);
  }
};
export const canUserInstall = function canUserInstall(type) {
  const obj = arg1(dependencyMap[4]);
  const result = obj.nativePlatformTypeToSKUOperatingSystem(arg1(dependencyMap[5]).getPlatform());
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
      const obj = importDefault(dependencyMap[6])(preorderApproximateReleaseDate, tmp4, true);
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
