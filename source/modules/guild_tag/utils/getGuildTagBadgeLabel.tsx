// Module ID: 16329
// Function ID: 127077
// Name: getGuildTagBadgeLabel
// Dependencies: [7721, 1212, 1327, 2]
// Exports: default

// Module 16329 (getGuildTagBadgeLabel)
import { GuildTagBadgeKind } from "items";

const result = require("isDiscordFrontendDevelopment").fileFinishedImporting("modules/guild_tag/utils/getGuildTagBadgeLabel.tsx");

export default function getGuildTagBadgeLabel(arg0) {
  if (GuildTagBadgeKind.SWORD === arg0) {
    const intl41 = require(1212) /* getSystemLocale */.intl;
    return intl41.string(require(1212) /* getSystemLocale */.t["+4RpVO"]);
  } else if (GuildTagBadgeKind.WATER_DROP === arg0) {
    const intl40 = require(1212) /* getSystemLocale */.intl;
    return intl40.string(require(1212) /* getSystemLocale */.t["08tAb0"]);
  } else if (GuildTagBadgeKind.SKULL === arg0) {
    const intl39 = require(1212) /* getSystemLocale */.intl;
    return intl39.string(require(1212) /* getSystemLocale */.t["0opW02"]);
  } else if (GuildTagBadgeKind.TOADSTOOL === arg0) {
    const intl38 = require(1212) /* getSystemLocale */.intl;
    return intl38.string(require(1212) /* getSystemLocale */.t.M90TUl);
  } else if (GuildTagBadgeKind.MOON === arg0) {
    const intl37 = require(1212) /* getSystemLocale */.intl;
    return intl37.string(require(1212) /* getSystemLocale */.t.G8H5XZ);
  } else if (GuildTagBadgeKind.LIGHTNING === arg0) {
    const intl36 = require(1212) /* getSystemLocale */.intl;
    return intl36.string(require(1212) /* getSystemLocale */.t.hcPaJA);
  } else if (GuildTagBadgeKind.LEAF === arg0) {
    const intl35 = require(1212) /* getSystemLocale */.intl;
    return intl35.string(require(1212) /* getSystemLocale */.t.Zg3hHZ);
  } else if (GuildTagBadgeKind.HEART === arg0) {
    const intl34 = require(1212) /* getSystemLocale */.intl;
    return intl34.string(require(1212) /* getSystemLocale */.t.WjcnZD);
  } else if (GuildTagBadgeKind.FIRE === arg0) {
    const intl33 = require(1212) /* getSystemLocale */.intl;
    return intl33.string(require(1212) /* getSystemLocale */.t.OLVr2Z);
  } else if (GuildTagBadgeKind.COMPASS === arg0) {
    const intl32 = require(1212) /* getSystemLocale */.intl;
    return intl32.string(require(1212) /* getSystemLocale */.t.fSU0qj);
  } else if (GuildTagBadgeKind.CROSSHAIRS === arg0) {
    const intl31 = require(1212) /* getSystemLocale */.intl;
    return intl31.string(require(1212) /* getSystemLocale */.t.FImC7X);
  } else if (GuildTagBadgeKind.FLOWER === arg0) {
    const intl30 = require(1212) /* getSystemLocale */.intl;
    return intl30.string(require(1212) /* getSystemLocale */.t.Kswg0Y);
  } else if (GuildTagBadgeKind.FORCE === arg0) {
    const intl29 = require(1212) /* getSystemLocale */.intl;
    return intl29.string(require(1212) /* getSystemLocale */.t.ALJkb2);
  } else if (GuildTagBadgeKind.GEM === arg0) {
    const intl28 = require(1212) /* getSystemLocale */.intl;
    return intl28.string(require(1212) /* getSystemLocale */.t.Xpb5FV);
  } else if (GuildTagBadgeKind.LAVA === arg0) {
    const intl27 = require(1212) /* getSystemLocale */.intl;
    return intl27.string(require(1212) /* getSystemLocale */.t.Q9Mv1c);
  } else if (GuildTagBadgeKind.PSYCHIC === arg0) {
    const intl26 = require(1212) /* getSystemLocale */.intl;
    return intl26.string(require(1212) /* getSystemLocale */.t.qCL3jX);
  } else if (GuildTagBadgeKind.SMOKE === arg0) {
    const intl25 = require(1212) /* getSystemLocale */.intl;
    return intl25.string(require(1212) /* getSystemLocale */.t.HWyuRl);
  } else if (GuildTagBadgeKind.SNOW === arg0) {
    const intl24 = require(1212) /* getSystemLocale */.intl;
    return intl24.string(require(1212) /* getSystemLocale */.t["YTpD+b"]);
  } else if (GuildTagBadgeKind.SOUND === arg0) {
    const intl23 = require(1212) /* getSystemLocale */.intl;
    return intl23.string(require(1212) /* getSystemLocale */.t["8MDV4p"]);
  } else if (GuildTagBadgeKind.SUN === arg0) {
    const intl22 = require(1212) /* getSystemLocale */.intl;
    return intl22.string(require(1212) /* getSystemLocale */.t.q4KKjI);
  } else if (GuildTagBadgeKind.WIND === arg0) {
    const intl21 = require(1212) /* getSystemLocale */.intl;
    return intl21.string(require(1212) /* getSystemLocale */.t.jTxbHc);
  } else if (GuildTagBadgeKind.BUNNY === arg0) {
    const intl20 = require(1212) /* getSystemLocale */.intl;
    return intl20.string(require(1212) /* getSystemLocale */.t.s0jeu5);
  } else if (GuildTagBadgeKind.DOG === arg0) {
    const intl19 = require(1212) /* getSystemLocale */.intl;
    return intl19.string(require(1212) /* getSystemLocale */.t.teQDPB);
  } else if (GuildTagBadgeKind.FROG === arg0) {
    const intl18 = require(1212) /* getSystemLocale */.intl;
    return intl18.string(require(1212) /* getSystemLocale */.t.SAUCGD);
  } else if (GuildTagBadgeKind.GOAT === arg0) {
    const intl17 = require(1212) /* getSystemLocale */.intl;
    return intl17.string(require(1212) /* getSystemLocale */.t.Mpxtar);
  } else if (GuildTagBadgeKind.CAT === arg0) {
    const intl16 = require(1212) /* getSystemLocale */.intl;
    return intl16.string(require(1212) /* getSystemLocale */.t.qCpIw3);
  } else if (GuildTagBadgeKind.DIAMOND === arg0) {
    const intl15 = require(1212) /* getSystemLocale */.intl;
    return intl15.string(require(1212) /* getSystemLocale */.t["zE/nMU"]);
  } else if (GuildTagBadgeKind.CROWN === arg0) {
    const intl14 = require(1212) /* getSystemLocale */.intl;
    return intl14.string(require(1212) /* getSystemLocale */.t.Rp2AbV);
  } else if (GuildTagBadgeKind.TROPHY === arg0) {
    const intl13 = require(1212) /* getSystemLocale */.intl;
    return intl13.string(require(1212) /* getSystemLocale */.t.Jw25U0);
  } else if (GuildTagBadgeKind.MONEY_BAG === arg0) {
    const intl12 = require(1212) /* getSystemLocale */.intl;
    return intl12.string(require(1212) /* getSystemLocale */.t.s2U0Nw);
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === arg0) {
    const intl11 = require(1212) /* getSystemLocale */.intl;
    return intl11.string(require(1212) /* getSystemLocale */.t.AWIIQw);
  } else if (GuildTagBadgeKind.CLOVER === arg0) {
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t.ZzsbQp);
  } else if (GuildTagBadgeKind.BLOSSOM === arg0) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t.uGSJSU);
  } else if (GuildTagBadgeKind.POTTED_PLANT === arg0) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t.BGZKO9);
  } else if (GuildTagBadgeKind.MAPLE === arg0) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.Rqq6To);
  } else if (GuildTagBadgeKind.WILTED_FLOWER === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.o1OjGD);
  } else if (GuildTagBadgeKind.BUTTERFLY === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t["76qj8a"]);
  } else if (GuildTagBadgeKind.SNAIL === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.mFQo1S);
  } else if (GuildTagBadgeKind.CATERPILLAR === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.fTwuEi);
  } else if (GuildTagBadgeKind.SPIDER === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.TzZYZM);
  } else if (GuildTagBadgeKind.BEE === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["6euAa8"]);
  } else {
    require(1327) /* isDiscordFrontendDevelopment */.assertNever(arg0);
  }
};
