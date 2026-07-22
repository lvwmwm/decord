// Module ID: 16167
// Function ID: 124588
// Name: getGuildTagPalettePresetColorLabel
// Dependencies: []
// Exports: default

// Module 16167 (getGuildTagPalettePresetColorLabel)
function getGuildTagPalettePresetColorLabel(primary) {
  if (constants.HOT_PINK === primary) {
    const intl26 = require(dependencyMap[1]).intl;
    return intl26.string(require(dependencyMap[1]).t.DfOkjB);
  } else if (constants.LIGHT_PINK === primary) {
    const intl25 = require(dependencyMap[1]).intl;
    return intl25.string(require(dependencyMap[1]).t.833OIT);
  } else if (constants.ORANGE === primary) {
    const intl24 = require(dependencyMap[1]).intl;
    return intl24.string(require(dependencyMap[1]).t.i7TMkd);
  } else if (constants.PEACH === primary) {
    const intl23 = require(dependencyMap[1]).intl;
    return intl23.string(require(dependencyMap[1]).t.uHgff/);
  } else if (constants.GOLD === primary) {
    const intl22 = require(dependencyMap[1]).intl;
    return intl22.string(require(dependencyMap[1]).t.EpIKg1);
  } else if (constants.LIGHT_YELLOW === primary) {
    const intl21 = require(dependencyMap[1]).intl;
    return intl21.string(require(dependencyMap[1]).t.i9+g+g);
  } else if (constants.TEAL === primary) {
    const intl20 = require(dependencyMap[1]).intl;
    return intl20.string(require(dependencyMap[1]).t.m82c+Z);
  } else if (constants.MINT_GREEN === primary) {
    const intl19 = require(dependencyMap[1]).intl;
    return intl19.string(require(dependencyMap[1]).t.xcoOBS);
  } else if (constants.BLUE_TEAL === primary) {
    const intl18 = require(dependencyMap[1]).intl;
    return intl18.string(require(dependencyMap[1]).t.5QmjOP);
  } else if (constants.LIGHT_BLUE === primary) {
    const intl17 = require(dependencyMap[1]).intl;
    return intl17.string(require(dependencyMap[1]).t./MyjZS);
  } else if (constants.PURPLE === primary) {
    const intl16 = require(dependencyMap[1]).intl;
    return intl16.string(require(dependencyMap[1]).t.jp+PMl);
  } else if (constants.LAVENDER === primary) {
    const intl15 = require(dependencyMap[1]).intl;
    return intl15.string(require(dependencyMap[1]).t.aQjtas);
  } else if (constants.VIOLET === primary) {
    const intl14 = require(dependencyMap[1]).intl;
    return intl14.string(require(dependencyMap[1]).t.WSnCYH);
  } else if (constants.MAUVE === primary) {
    const intl13 = require(dependencyMap[1]).intl;
    return intl13.string(require(dependencyMap[1]).t.wh9c5W);
  } else if (constants.DEEP_PURPLE === primary) {
    const intl12 = require(dependencyMap[1]).intl;
    return intl12.string(require(dependencyMap[1]).t.TP5bJs);
  } else if (constants.ORCHID === primary) {
    const intl11 = require(dependencyMap[1]).intl;
    return intl11.string(require(dependencyMap[1]).t.jFf82F);
  } else if (constants.RED === primary) {
    const intl10 = require(dependencyMap[1]).intl;
    return intl10.string(require(dependencyMap[1]).t.yUcPH5);
  } else if (constants.SALMON === primary) {
    const intl9 = require(dependencyMap[1]).intl;
    return intl9.string(require(dependencyMap[1]).t.+HA2GW);
  } else if (constants.BROWN === primary) {
    const intl8 = require(dependencyMap[1]).intl;
    return intl8.string(require(dependencyMap[1]).t.PI13GO);
  } else if (constants.TAN === primary) {
    const intl7 = require(dependencyMap[1]).intl;
    return intl7.string(require(dependencyMap[1]).t.hZU6aR);
  } else if (constants.OLIVE === primary) {
    const intl6 = require(dependencyMap[1]).intl;
    return intl6.string(require(dependencyMap[1]).t.1lKfMQ);
  } else if (constants.GRAY === primary) {
    const intl5 = require(dependencyMap[1]).intl;
    return intl5.string(require(dependencyMap[1]).t.6Gh+v1);
  } else if (constants.BURGUNDY === primary) {
    const intl4 = require(dependencyMap[1]).intl;
    return intl4.string(require(dependencyMap[1]).t.pvqjJg);
  } else if (constants.ROSE === primary) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(require(dependencyMap[1]).t.RMfRP9);
  } else if (constants.DARK_GRAY === primary) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.Ts4j0M);
  } else if (constants.LIGHT_GRAY === primary) {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.ZBQ1JR);
  } else {
    require(dependencyMap[2]).assertNever(primary);
  }
}
let closure_2 = require(dependencyMap[0]).GuildTagPalettePresetColor;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_tag/utils/getGuildTagPalettePresetColorPairLabel.tsx");

export default function getGuildTagPalettePresetColorPairLabel(primary, primary) {
  const intl = require(dependencyMap[1]).intl;
  const obj = { primaryColor: getGuildTagPalettePresetColorLabel(primary), secondaryColor: getGuildTagPalettePresetColorLabel(primary) };
  return intl.formatToPlainString(require(dependencyMap[1]).t.g79C8T, obj);
};
export { getGuildTagPalettePresetColorLabel };
