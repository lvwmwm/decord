// Module ID: 16284
// Function ID: 126761
// Name: getGuildTagPalettePresetColorLabel
// Dependencies: [7632, 1212, 1327, 2]
// Exports: default

// Module 16284 (getGuildTagPalettePresetColorLabel)
import { GuildTagPalettePresetColor as closure_2 } from "items";

function getGuildTagPalettePresetColorLabel(primary) {
  if (constants.HOT_PINK === primary) {
    const intl26 = require(1212) /* getSystemLocale */.intl;
    return intl26.string(require(1212) /* getSystemLocale */.t.DfOkjB);
  } else if (constants.LIGHT_PINK === primary) {
    const intl25 = require(1212) /* getSystemLocale */.intl;
    return intl25.string(require(1212) /* getSystemLocale */.t["833OIT"]);
  } else if (constants.ORANGE === primary) {
    const intl24 = require(1212) /* getSystemLocale */.intl;
    return intl24.string(require(1212) /* getSystemLocale */.t.i7TMkd);
  } else if (constants.PEACH === primary) {
    const intl23 = require(1212) /* getSystemLocale */.intl;
    return intl23.string(require(1212) /* getSystemLocale */.t["uHgff/"]);
  } else if (constants.GOLD === primary) {
    const intl22 = require(1212) /* getSystemLocale */.intl;
    return intl22.string(require(1212) /* getSystemLocale */.t.EpIKg1);
  } else if (constants.LIGHT_YELLOW === primary) {
    const intl21 = require(1212) /* getSystemLocale */.intl;
    return intl21.string(require(1212) /* getSystemLocale */.t["i9+g+g"]);
  } else if (constants.TEAL === primary) {
    const intl20 = require(1212) /* getSystemLocale */.intl;
    return intl20.string(require(1212) /* getSystemLocale */.t["m82c+Z"]);
  } else if (constants.MINT_GREEN === primary) {
    const intl19 = require(1212) /* getSystemLocale */.intl;
    return intl19.string(require(1212) /* getSystemLocale */.t.xcoOBS);
  } else if (constants.BLUE_TEAL === primary) {
    const intl18 = require(1212) /* getSystemLocale */.intl;
    return intl18.string(require(1212) /* getSystemLocale */.t["5QmjOP"]);
  } else if (constants.LIGHT_BLUE === primary) {
    const intl17 = require(1212) /* getSystemLocale */.intl;
    return intl17.string(require(1212) /* getSystemLocale */.t["/MyjZS"]);
  } else if (constants.PURPLE === primary) {
    const intl16 = require(1212) /* getSystemLocale */.intl;
    return intl16.string(require(1212) /* getSystemLocale */.t["jp+PMl"]);
  } else if (constants.LAVENDER === primary) {
    const intl15 = require(1212) /* getSystemLocale */.intl;
    return intl15.string(require(1212) /* getSystemLocale */.t.aQjtas);
  } else if (constants.VIOLET === primary) {
    const intl14 = require(1212) /* getSystemLocale */.intl;
    return intl14.string(require(1212) /* getSystemLocale */.t.WSnCYH);
  } else if (constants.MAUVE === primary) {
    const intl13 = require(1212) /* getSystemLocale */.intl;
    return intl13.string(require(1212) /* getSystemLocale */.t.wh9c5W);
  } else if (constants.DEEP_PURPLE === primary) {
    const intl12 = require(1212) /* getSystemLocale */.intl;
    return intl12.string(require(1212) /* getSystemLocale */.t.TP5bJs);
  } else if (constants.ORCHID === primary) {
    const intl11 = require(1212) /* getSystemLocale */.intl;
    return intl11.string(require(1212) /* getSystemLocale */.t.jFf82F);
  } else if (constants.RED === primary) {
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t.yUcPH5);
  } else if (constants.SALMON === primary) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t["+HA2GW"]);
  } else if (constants.BROWN === primary) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t.PI13GO);
  } else if (constants.TAN === primary) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.hZU6aR);
  } else if (constants.OLIVE === primary) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t["1lKfMQ"]);
  } else if (constants.GRAY === primary) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t["6Gh+v1"]);
  } else if (constants.BURGUNDY === primary) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.pvqjJg);
  } else if (constants.ROSE === primary) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.RMfRP9);
  } else if (constants.DARK_GRAY === primary) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.Ts4j0M);
  } else if (constants.LIGHT_GRAY === primary) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ZBQ1JR);
  } else {
    require(1327) /* isDiscordFrontendDevelopment */.assertNever(primary);
  }
}
const result = require("isDiscordFrontendDevelopment").fileFinishedImporting("modules/guild_tag/utils/getGuildTagPalettePresetColorPairLabel.tsx");

export default function getGuildTagPalettePresetColorPairLabel(primary, primary) {
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj = { primaryColor: getGuildTagPalettePresetColorLabel(primary), secondaryColor: getGuildTagPalettePresetColorLabel(primary) };
  return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.g79C8T, obj);
};
export { getGuildTagPalettePresetColorLabel };
