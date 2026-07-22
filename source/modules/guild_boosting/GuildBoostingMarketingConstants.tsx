// Module ID: 11589
// Function ID: 90106
// Name: BoostedGuildTiers
// Dependencies: []

// Module 11589 (BoostedGuildTiers)
const _module = require(dependencyMap[0]);
const BoostedGuildTiers = _module.BoostedGuildTiers;
let closure_3 = _module.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
const BoostedGuildFeatures = require(dependencyMap[1]).BoostedGuildFeatures;
let obj = { tier: BoostedGuildTiers.TIER_1 };
obj = {
  perkIcon: require(dependencyMap[2]).PerkIcons.EMOJI,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.formatToPlainString(require(dependencyMap[3]).t.Tlz0x1, { numEmojiSlots: BoostedGuildFeatures[closure_2.TIER_1].limits.emoji });
  }
};
const items = [obj, , , ];
obj = {
  perkIcon: require(dependencyMap[2]).PerkIcons.SOUNDBOARD,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.formatToPlainString(require(dependencyMap[3]).t.v+MIfo, { numSoundboardSlots: BoostedGuildFeatures[closure_2.TIER_1].limits.soundboardSounds });
  },
  isNew: true
};
items[1] = obj;
items[2] = {
  perkIcon: require(dependencyMap[2]).PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.PbAyub);
  }
};
const obj1 = {
  perkIcon: require(dependencyMap[2]).PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.PbAyub);
  }
};
items[3] = {
  perkIcon: require(dependencyMap[2]).PerkIcons.AUDIO,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.WH+OeI);
  }
};
obj.perks = items;
const items1 = [obj, , ];
const obj3 = { tier: BoostedGuildTiers.TIER_2 };
const obj2 = {
  perkIcon: require(dependencyMap[2]).PerkIcons.AUDIO,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.WH+OeI);
  }
};
const items2 = [
  {
    perkIcon: require(dependencyMap[2]).PerkIcons.STREAM,
    getCopy() {
      const intl = require(dependencyMap[3]).intl;
      return intl.string(require(dependencyMap[3]).t.y4ft4D);
    }
  },
,
,

];
const obj4 = {
  perkIcon: require(dependencyMap[2]).PerkIcons.STREAM,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.y4ft4D);
  }
};
items2[1] = {
  perkIcon: require(dependencyMap[2]).PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    const obj = {};
    const intl2 = require(dependencyMap[3]).intl;
    obj.uploadSizeLimit = intl2.string(require(dependencyMap[3]).t.M6qV8j);
    return intl.formatToPlainString(require(dependencyMap[3]).t.aFRl53, obj);
  }
};
const obj5 = {
  perkIcon: require(dependencyMap[2]).PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    const obj = {};
    const intl2 = require(dependencyMap[3]).intl;
    obj.uploadSizeLimit = intl2.string(require(dependencyMap[3]).t.M6qV8j);
    return intl.formatToPlainString(require(dependencyMap[3]).t.aFRl53, obj);
  }
};
items2[2] = {
  perkIcon: require(dependencyMap[2]).PerkIcons.CUSTOM_ROLE_ICON,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.6PV6Qc);
  }
};
const obj6 = {
  perkIcon: require(dependencyMap[2]).PerkIcons.CUSTOM_ROLE_ICON,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.6PV6Qc);
  }
};
items2[3] = {
  perkIcon: require(dependencyMap[2]).PerkIcons.CUSTOMIZATION,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.1a5rjl);
  }
};
obj3.perks = items2;
items1[1] = obj3;
const obj8 = { tier: BoostedGuildTiers.TIER_3 };
const obj7 = {
  perkIcon: require(dependencyMap[2]).PerkIcons.CUSTOMIZATION,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.1a5rjl);
  }
};
const items3 = [
  {
    perkIcon: require(dependencyMap[2]).PerkIcons.VANITY,
    getCopy() {
      const intl = require(dependencyMap[3]).intl;
      return intl.string(require(dependencyMap[3]).t.adNGjW);
    }
  },
,
,
,

];
const obj9 = {
  perkIcon: require(dependencyMap[2]).PerkIcons.VANITY,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.adNGjW);
  }
};
items3[1] = {
  perkIcon: require(dependencyMap[2]).PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    const obj = {};
    const intl2 = require(dependencyMap[3]).intl;
    obj.uploadSizeLimit = intl2.string(require(dependencyMap[3]).t.yMOW8D);
    return intl.formatToPlainString(require(dependencyMap[3]).t.aFRl53, obj);
  }
};
const obj10 = {
  perkIcon: require(dependencyMap[2]).PerkIcons.UPLOAD,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    const obj = {};
    const intl2 = require(dependencyMap[3]).intl;
    obj.uploadSizeLimit = intl2.string(require(dependencyMap[3]).t.yMOW8D);
    return intl.formatToPlainString(require(dependencyMap[3]).t.aFRl53, obj);
  }
};
items3[2] = {
  perkIcon: require(dependencyMap[2]).PerkIcons.AUDIO,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.Tsljqo);
  }
};
const obj11 = {
  perkIcon: require(dependencyMap[2]).PerkIcons.AUDIO,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.Tsljqo);
  }
};
items3[3] = {
  perkIcon: require(dependencyMap[2]).PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.nRKlmC);
  }
};
const obj12 = {
  perkIcon: require(dependencyMap[2]).PerkIcons.ANIMATED,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.nRKlmC);
  }
};
items3[4] = {
  perkIcon: require(dependencyMap[2]).PerkIcons.STAGE_VIDEO,
  getCopy() {
    const intl = require(dependencyMap[3]).intl;
    return intl.formatToPlainString(require(dependencyMap[3]).t.hsZ88d, { numStageSeats: closure_3 });
  }
};
obj8.perks = items3;
items1[2] = obj8;
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/guild_boosting/GuildBoostingMarketingConstants.tsx");

export const TIER_CARDS = items1;
