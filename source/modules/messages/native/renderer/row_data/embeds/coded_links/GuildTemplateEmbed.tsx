// Module ID: 12179
// Function ID: 93648
// Name: createGuildTemplateEmbed
// Dependencies: []
// Exports: createGuildTemplateEmbed

// Module 12179 (createGuildTemplateEmbed)
const Image = require(dependencyMap[0]).Image;
let closure_4 = importDefault(dependencyMap[1]);
const GuildTemplateStates = require(dependencyMap[2]).GuildTemplateStates;
const InviteTypes = require(dependencyMap[3]).InviteTypes;
const _module = require(dependencyMap[12]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx");

export const createGuildTemplateEmbed = function createGuildTemplateEmbed(code, arg1) {
  let baseColors;
  let colors;
  ({ colors, baseColors } = importDefault(dependencyMap[4])(arg1));
  const guildTemplate = guildTemplate.getGuildTemplate(code);
  if (null == guildTemplate) {
    return null;
  } else if (guildTemplate.state === GuildTemplateStates.RESOLVING) {
    let obj = {};
    const intl3 = require(dependencyMap[5]).intl;
    obj.headerText = intl3.string(require(dependencyMap[5]).t.Xj87Yf).toUpperCase();
    ({ resolvingGradientEnd: obj4.resolvingGradientEnd, resolvingGradientStart: obj4.resolvingGradientStart } = colors);
    obj.type = InviteTypes.GUILD;
    const merged = Object.assign(baseColors);
    return obj;
  } else if (guildTemplate.state === GuildTemplateStates.EXPIRED) {
    obj = {};
    const merged1 = Object.assign(baseColors);
    const intl = require(dependencyMap[5]).intl;
    obj["headerText"] = intl.string(require(dependencyMap[5]).t.C7ZRNw).toUpperCase();
    let obj1 = require(dependencyMap[6]);
    obj["titleColor"] = obj1.processColorOrThrow(importDefault(dependencyMap[7]).unsafe_rawColors.RED_400);
    const intl2 = require(dependencyMap[5]).intl;
    obj["titleText"] = intl2.string(require(dependencyMap[5]).t.A6MwXE);
    const str = intl.string(require(dependencyMap[5]).t.C7ZRNw);
    if (obj3.isThemeDark(arg1)) {
      let tmp10Result = tmp10(tmp11[9]);
    } else {
      tmp10Result = tmp10(tmp11[10]);
    }
    obj["thumbnailUrl"] = Image.resolveAssetSource(tmp10Result).uri;
    obj["thumbnailBackgroundColor"] = colors.thumbnailBackgroundColor;
    obj["type"] = InviteTypes.GUILD;
    return obj;
  } else {
    const intl4 = require(dependencyMap[5]).intl;
    obj = { usageCount: guildTemplate.usageCount.toString() };
    obj1 = {};
    const merged2 = Object.assign(baseColors);
    const intl5 = require(dependencyMap[5]).intl;
    const formatToPlainStringResult = intl4.formatToPlainString(require(dependencyMap[5]).t.L8Awgh, obj);
    const str9 = guildTemplate.usageCount;
    obj1["headerText"] = intl5.string(require(dependencyMap[5]).t.kAvFkO).toUpperCase();
    obj1["headerColor"] = colors.headerColor;
    obj1["titleText"] = guildTemplate.name;
    obj1["titleColor"] = colors.titleColor;
    obj1["subtitle"] = formatToPlainStringResult;
    obj1["subtitleColor"] = colors.subtitleColor;
    obj1["thumbnailUrl"] = Image.resolveAssetSource(importDefault(dependencyMap[11])).uri;
    obj1["acceptLabelColor"] = colors.acceptLabelGreenColor;
    obj1["acceptLabelBackgroundColor"] = colors.acceptLabelGreenBackgroundColor;
    const intl6 = require(dependencyMap[5]).intl;
    obj1["acceptLabelText"] = intl6.string(require(dependencyMap[5]).t.a3Gl+e);
    obj1["embedCanBeTapped"] = true;
    obj1["type"] = InviteTypes.GUILD;
    return obj1;
  }
  const tmp = importDefault(dependencyMap[4])(arg1);
};
