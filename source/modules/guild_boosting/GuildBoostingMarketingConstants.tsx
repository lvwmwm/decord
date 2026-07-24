// Module ID: 11626
// Function ID: 90393
// Name: BoostedGuildTiers
// Dependencies: [653, 1851, 4022, 1212, 2]

// Module 11626 (BoostedGuildTiers)
import ME from "ME";
import { BoostedGuildFeatures } from "GuildFeatures";

const BoostedGuildTiers = ME.BoostedGuildTiers;
let closure_3 = ME.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
let obj = { tier: BoostedGuildTiers.TIER_1 };
obj = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.EMOJI,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji });
  }
};
const items = [obj, , , ];
obj = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.SOUNDBOARD,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["v+MIfo"], { numSoundboardSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.soundboardSounds });
  },
  isNew: true
};
items[1] = obj;
items[2] = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PbAyub);
  }
};
const obj1 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PbAyub);
  }
};
items[3] = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.AUDIO,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["WH+OeI"]);
  }
};
obj.perks = items;
const items1 = [obj, , ];
const obj3 = { tier: BoostedGuildTiers.TIER_2 };
const obj2 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.AUDIO,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["WH+OeI"]);
  }
};
const items2 = [
  {
    perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.STREAM,
    getCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.y4ft4D);
    }
  },
,
,

];
const obj4 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.STREAM,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.y4ft4D);
  }
};
items2[1] = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.uploadSizeLimit = intl2.string(require(1212) /* getSystemLocale */.t.M6qV8j);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.aFRl53, obj);
  }
};
const obj5 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.uploadSizeLimit = intl2.string(require(1212) /* getSystemLocale */.t.M6qV8j);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.aFRl53, obj);
  }
};
items2[2] = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.CUSTOM_ROLE_ICON,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["6PV6Qc"]);
  }
};
const obj6 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.CUSTOM_ROLE_ICON,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["6PV6Qc"]);
  }
};
items2[3] = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.CUSTOMIZATION,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1a5rjl"]);
  }
};
obj3.perks = items2;
items1[1] = obj3;
const obj8 = { tier: BoostedGuildTiers.TIER_3 };
const obj7 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.CUSTOMIZATION,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1a5rjl"]);
  }
};
const items3 = [
  {
    perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.VANITY,
    getCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.adNGjW);
    }
  },
,
,
,

];
const obj9 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.VANITY,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.adNGjW);
  }
};
items3[1] = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.uploadSizeLimit = intl2.string(require(1212) /* getSystemLocale */.t.yMOW8D);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.aFRl53, obj);
  }
};
const obj10 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.uploadSizeLimit = intl2.string(require(1212) /* getSystemLocale */.t.yMOW8D);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.aFRl53, obj);
  }
};
items3[2] = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.AUDIO,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Tsljqo);
  }
};
const obj11 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.AUDIO,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Tsljqo);
  }
};
items3[3] = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.nRKlmC);
  }
};
const obj12 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.nRKlmC);
  }
};
items3[4] = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.STAGE_VIDEO,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.hsZ88d, { numStageSeats: closure_3 });
  }
};
obj8.perks = items3;
items1[2] = obj8;
const obj13 = {
  perkIcon: require("_createForOfIteratorHelperLoose").PerkIcons.STAGE_VIDEO,
  getCopy() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.hsZ88d, { numStageSeats: closure_3 });
  }
};
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_boosting/GuildBoostingMarketingConstants.tsx");

export const TIER_CARDS = items1;
