// Module ID: 7723
// Function ID: 61427
// Name: createPremiumGroupInviteEmbed
// Dependencies: []
// Exports: createPremiumGroupInviteEmbed

// Module 7723 (createPremiumGroupInviteEmbed)
const _module = require(dependencyMap[0]);
({ HELP_CENTER_LINK: closure_3, PremiumGroupInviteState: closure_4 } = _module);
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx");

export const createPremiumGroupInviteEmbed = function createPremiumGroupInviteEmbed(message, theme, id, channel) {
  let betaPillBackgroundColor;
  let betaPillTextColor;
  let body;
  let bodyTextColor;
  let header;
  let headerTextColor;
  let linkTextColor;
  if (null != message.author) {
    let obj = { headerTextColor: importDefault(dependencyMap[2]).colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: importDefault(dependencyMap[2]).colors.TEXT_DEFAULT, linkTextColor: importDefault(dependencyMap[2]).colors.TEXT_LINK, backgroundColor: importDefault(dependencyMap[2]).colors.BACKGROUND_MOD_NORMAL, betaPillTextColor: importDefault(dependencyMap[2]).colors.BLACK, betaPillBackgroundColor: importDefault(dependencyMap[2]).colors.WHITE };
    const tmp10 = require(dependencyMap[1]).createNativeStyleProperties(obj)(theme);
    const backgroundColor = tmp10.backgroundColor;
    ({ headerTextColor, bodyTextColor, linkTextColor, betaPillTextColor, betaPillBackgroundColor } = tmp10);
    const obj4 = require(dependencyMap[1]);
    const author = message.author;
    const assetUriForEmbed = require(dependencyMap[3]).getAssetUriForEmbed(importDefault(dependencyMap[4]));
    const obj6 = require(dependencyMap[3]);
    obj = { sender: author, channel, isSender: id === author.id, inviteState: constants.UNKNOWN };
    const premiumGroupInviteEmbedText = require(dependencyMap[5]).getPremiumGroupInviteEmbedText(obj);
    if (null != premiumGroupInviteEmbedText) {
      ({ header, body } = premiumGroupInviteEmbedText);
      const intl = require(dependencyMap[6]).intl;
      obj = {};
      const obj1 = { action: "bindOpenUrl", url: closure_3, linkColor: linkTextColor };
      obj.learnMoreLinkOnClick = obj1;
      const obj2 = { headerText: header, headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, headerImageUrl: assetUriForEmbed };
      const intl2 = require(dependencyMap[6]).intl;
      const formatToPartsResult = intl.formatToParts(importDefault(dependencyMap[7]).9VTnfI, obj);
      obj2.betaPillText = intl2.string(require(dependencyMap[6]).t.oW0eUd).toUpperCase();
      obj2.betaPillTextColor = betaPillTextColor;
      obj2.betaPillBackgroundColor = betaPillBackgroundColor;
      obj2.bodyText = body;
      obj2.bodyTextColor = bodyTextColor;
      obj2.learnMoreLink = formatToPartsResult;
      return obj2;
    }
    const obj7 = require(dependencyMap[5]);
  }
};
