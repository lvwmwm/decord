// Module ID: 6246
// Function ID: 6247
// Name: CheckpointCharacterTraits
// Dependencies: [6247, 6245, 6202, 6248, 6450, 6309, 6481, 6280, 6510, 6539, 6249, 2]
// Exports: getCharacterFromTraits, getCharacterLayerOrdering, getOutfitColorOptionIds, getOutfitDefaultOptionId, getTraitOptionRarity, isTraitNoneOptionId, isTraitSelectionLocked

// Module 6246 (CheckpointCharacterTraits)
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6202 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6245 */;
import CheckpointTrait from "CheckpointTrait" /* 6247 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 6248 */;
import CheckpointCharacterBase from "CheckpointCharacterBase" /* 6249 */;
import CheckpointCharacterShoes from "CheckpointCharacterShoes" /* 6280 */;
import CheckpointCharacterOutfit from "CheckpointCharacterOutfit" /* 6309 */;
import CheckpointCharacterFace from "CheckpointCharacterFace" /* 6450 */;
import CheckpointCharacterHat from "CheckpointCharacterHat" /* 6481 */;
import CheckpointCharacterWearable from "CheckpointCharacterWearable" /* 6510 */;
import CheckpointCharacterAura from "CheckpointCharacterAura" /* 6539 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f89664 = (item) => typeof item === "number";
const f896652 = (arg0) => set1.has(arg0);
function getVisibleTraitRarities(item, c4) {
  let c0;
  let tmp = null;
  if (null != c4) {
    let tmp3 = _require;
    if (require("CheckpointTrait").CheckpointTrait.FACE === item) {
      const voice = c4.voice;
      let prop;
      if (voice != null) {
        prop = voice.totalVoiceMinutesPercentile;
      }
      if (prop == null) {
        prop = null;
      }
      tmp = prop;
    } else if (tmp3(6247).CheckpointTrait.OUTFIT === item) {
      const messages = c4.messages;
      let prop1;
      if (messages != null) {
        prop1 = messages.numMessagesSentPercentile;
      }
      if (prop1 == null) {
        prop1 = null;
      }
      tmp = prop1;
    } else if (tmp3(6247).CheckpointTrait.HAT === item) {
      const guilds = c4.guilds;
      let prop2;
      if (guilds != null) {
        const first = guilds.guilds[0];
        if (first != null) {
          prop2 = first.numDaysInteractedPercentile;
        }
      }
      if (prop2 == null) {
        prop2 = null;
      }
      tmp = prop2;
    } else if (tmp3(6247).CheckpointTrait.SHOES === item) {
      const emojis = c4.emojis;
      let prop3;
      if (emojis != null) {
        prop3 = emojis.numEmojisSentPercentile;
      }
      if (prop3 == null) {
        prop3 = null;
      }
      tmp = prop3;
    } else if (tmp3(6247).CheckpointTrait.WEARABLE === item) {
      const games2 = c4.games;
      let prop4;
      if (games2 != null) {
        prop4 = games2.totalGamesPlayedPercentile;
      }
      if (prop4 == null) {
        prop4 = null;
      }
      tmp = prop4;
    } else if (tmp3(6247).CheckpointTrait.AURA === item) {
      const games = c4.games;
      let prop5;
      if (games != null) {
        prop5 = games.totalDaysPlayedPercentile;
      }
      if (prop5 == null) {
        prop5 = null;
      }
      tmp = prop5;
    } else if (tmp3(6247).CheckpointTrait.BASE === item) {
      tmp = null;
    }
  }
  _require = tmp;
  const values = Object.values(require("CheckpointTraitRarity").CheckpointTraitRarity);
  set = new Set(values.filter((item) => {
    if (item !== CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT) {
      if (item !== CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
        const tmp3 = CheckpointTraitConfig.CHECKPOINT_RARITY_TO_MIN_PERCENTILE[item];
        return null != tmp3 && null != c0 && c0 >= tmp3;
      }
    }
    return true;
  }));
  return set;
}
let set = new Set(Object.values(CheckpointTraitRarity.CheckpointTraitRarity));
const set1 = new Set(Object.values(CheckpointTrait.CheckpointTrait));
const f89665 = f896652;
let obj = {};
obj[CheckpointTrait.CheckpointTrait.FACE] = CheckpointTraitConfig.CHECKPOINT_FACE_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointTraitConfig.CHECKPOINT_OUTFIT_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.HAT] = CheckpointTraitConfig.CHECKPOINT_HAT_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointTraitConfig.CHECKPOINT_SHOES_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointTraitConfig.CHECKPOINT_WEARABLE_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.AURA] = CheckpointTraitConfig.CHECKPOINT_AURA_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.BASE] = CheckpointTraitConfig.CHECKPOINT_BASE_OPTION_TO_RARITY;
const obj2 = {};
obj2[CheckpointTrait.CheckpointTrait.FACE] = CheckpointCharacterAssets.CHARACTER_FACE_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointCharacterAssets.CHARACTER_OUTFIT_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.HAT] = CheckpointCharacterAssets.CHARACTER_HAT_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointCharacterAssets.CHARACTER_SHOES_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointCharacterAssets.CHARACTER_WEARABLE_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.AURA] = CheckpointCharacterAssets.CHARACTER_AURA_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.BASE] = CheckpointCharacterAssets.CHARACTER_BASE_OPTION_TO_ASSETS;
const obj3 = {};
const FACE = CheckpointTrait.CheckpointTrait.FACE;
let values = Object.values(CheckpointCharacterFace.CheckpointCharacterFace);
obj3[FACE] = values.filter(f89664);
const OUTFIT = CheckpointTrait.CheckpointTrait.OUTFIT;
const values8 = Object.values(CheckpointCharacterOutfit.CheckpointCharacterOutfit);
obj3[OUTFIT] = values8.filter(f89664);
const HAT = CheckpointTrait.CheckpointTrait.HAT;
const values9 = Object.values(CheckpointCharacterHat.CheckpointCharacterHat);
obj3[HAT] = values9.filter(f89664);
const SHOES = CheckpointTrait.CheckpointTrait.SHOES;
const values10 = Object.values(CheckpointCharacterShoes.CheckpointCharacterShoes);
obj3[SHOES] = values10.filter(f89664);
const WEARABLE = CheckpointTrait.CheckpointTrait.WEARABLE;
const values11 = Object.values(CheckpointCharacterWearable.CheckpointCharacterWearable);
obj3[WEARABLE] = values11.filter(f89664);
const AURA = CheckpointTrait.CheckpointTrait.AURA;
const values12 = Object.values(CheckpointCharacterAura.CheckpointCharacterAura);
obj3[AURA] = values12.filter(f89664);
const BASE = CheckpointTrait.CheckpointTrait.BASE;
const values13 = Object.values(CheckpointCharacterBase.CheckpointCharacterBase);
obj3[BASE] = values13.filter(f89664);
const obj4 = {};
obj4[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE;
obj4[CheckpointTrait.CheckpointTrait.HAT] = CheckpointCharacterHat.CheckpointCharacterHat.NONE;
obj4[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointCharacterShoes.CheckpointCharacterShoes.NONE;
obj4[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointCharacterWearable.CheckpointCharacterWearable.NONE;
obj4[CheckpointTrait.CheckpointTrait.AURA] = CheckpointCharacterAura.CheckpointCharacterAura.NONE;
let items = [CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE, CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT];
const obj5 = {};
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_MONOCHROME] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_VIOLET] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_PASTEL] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_SUNSET] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_HAZE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_MOSS] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_CHRONO] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_UMBER] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_FLAMES] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_STRIPES] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_SMILEY] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_VINTAGE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_PLAID] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_SWAMP] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_GLAMP] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_AMBER] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_BLOCKED] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_FADED] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_CHECKERED] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_LINED] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_ONYX] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_STEEL] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DENIM] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_BLUSH] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_SIREN] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_SERPENT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_RAVEN] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_VAMP] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_STARDUST] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_MARTIAN] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_SOLAR] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_COSMIC] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_CONFETTI] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_CARNIVAL] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_SUNRISE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_NIGHTFALL] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_BLACKOUT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_CAUTION] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_BUBBLEGUM] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_TOXIC] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_SHADOW] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DUSK] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_WILDWOOD] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_WINTER] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_AERO] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_VIPER] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_ULTRAVIOLET] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_SANDSTORM] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_IRON] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_RUST] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_PETAL] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_GLACIER] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_SAPPHIRE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_AMETHYST] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_FROST] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_CITRINE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
let closure_8 = {};
const values14 = Object.values(CheckpointCharacterOutfit.CheckpointCharacterOutfit);
const found = values14.filter(f89664);
const item = found.forEach((item) => {
  if (null != obj5[item]) {
    let items = closure_8[tmp];
    const tmp2 = closure_8;
    if (items == null) {
      items = [];
    }
    items.push(item);
    tmp2[obj5[item]] = items;
  }
});
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCharacterTraits.tsx");

export { getVisibleTraitRarities };
export function getCharacterLayerOrdering(wearable) {
  const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = CheckpointTraitConfig.CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
  const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(wearable);
  const tmp2 = CheckpointTraitConfig;
  const arr = hasItem ? tmp2.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : tmp2.CHECKPOINT_LAYER_DEFAULT_ORDERING;
  return arr.filter(f89665);
}
export const CHECKPOINT_TRAIT_TO_OPTION_ASSETS = obj2;
export const CHECKPOINT_TRAIT_TO_OPTION_IDS = obj3;
export const TRAIT_TO_NONE_OPTION_ID = obj4;
export function isTraitNoneOptionId(trait, optionId) {
  return obj4[trait] === optionId;
}
export const OUTFIT_DEFAULT_OPTION_IDS = items;
export const OUTFIT_VARIANT_TO_DEFAULT = obj5;
export function getOutfitDefaultOptionId(character) {
  return obj5[character];
}
export function getTraitOptionRarity(item10034, item100342) {
  let tmp2;
  if (null != obj[item10034][item10034]) {
    if (typeof f89665 === "function") {
      if (closure_131_0.has(obj[item10034][item10034])) {
        tmp2 = tmp;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp2;
}
export function isTraitSelectionLocked(item, arg1, savedCharacter) {
  let hasNitro;
  let stats;
  savedCharacter = savedCharacter.savedCharacter;
  let tmp;
  ({ stats, hasNitro } = savedCharacter);
  if (savedCharacter != null) {
    tmp = savedCharacter[item];
  }
  if (tmp === arg1) {
    return false;
  } else {
    let tmp8;
    let tmp4;
    if (null != obj[item][arg1]) {
      if (typeof f89665 === "function") {
        if (closure_131_0.has(obj[item][arg1])) {
          tmp4 = tmp11;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    if (null == tmp4) {
      tmp8 = obj4[item] !== arg1;
    } else if (tmp4 === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
      tmp8 = !hasNitro;
    } else {
      obj = getVisibleTraitRarities(item, stats);
      tmp8 = !obj.has(tmp4);
    }
    return tmp8;
  }
}
export function getOutfitColorOptionIds(NONE) {
  let items1;
  if (null != obj5[NONE]) {
    let items = closure_8[tmp];
    if (items == null) {
      items = [];
    }
    items1 = items;
  } else {
    items1 = [];
  }
  return items1;
}
export function getCharacterFromTraits(traits) {
  let CHILL;
  let NONE;
  let NONE2;
  let NONE3;
  let NONE4;
  let NONE5;
  let ICY = traits[CheckpointTrait.CheckpointTrait.BASE];
  if (ICY == null) {
    ICY = tmp(6249).CheckpointCharacterBase.ICY;
  }
  obj = { base: ICY, shoes: NONE, outfit: NONE2, face: CHILL, hat: NONE3, wearable: NONE4, aura: NONE5 };
  NONE = traits[tmp(undefined, 6247).CheckpointTrait.SHOES];
  if (NONE == null) {
    NONE = tmp(6280).CheckpointCharacterShoes.NONE;
  }
  NONE2 = traits[tmp(undefined, 6247).CheckpointTrait.OUTFIT];
  if (NONE2 == null) {
    NONE2 = tmp(6309).CheckpointCharacterOutfit.NONE;
  }
  CHILL = traits[tmp(undefined, 6247).CheckpointTrait.FACE];
  if (CHILL == null) {
    CHILL = tmp(6450).CheckpointCharacterFace.CHILL;
  }
  NONE3 = traits[tmp(undefined, 6247).CheckpointTrait.HAT];
  if (NONE3 == null) {
    NONE3 = tmp(6481).CheckpointCharacterHat.NONE;
  }
  NONE4 = traits[tmp(undefined, 6247).CheckpointTrait.WEARABLE];
  if (NONE4 == null) {
    NONE4 = tmp(6510).CheckpointCharacterWearable.NONE;
  }
  NONE5 = traits[tmp(undefined, 6247).CheckpointTrait.AURA];
  if (NONE5 == null) {
    NONE5 = tmp(6539).CheckpointCharacterAura.NONE;
  }
  return obj;
}
