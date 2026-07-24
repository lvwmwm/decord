// Module ID: 7823
// Function ID: 61784
// Name: createPremiumGroupInviteEmbed
// Dependencies: [3790, 4130, 689, 7724, 7824, 7825, 1212, 2780, 2]
// Exports: createPremiumGroupInviteEmbed

// Module 7823 (createPremiumGroupInviteEmbed)
import TOTAL_PREMIUM_GROUP_MEMBER_SEATS from "TOTAL_PREMIUM_GROUP_MEMBER_SEATS";

let closure_3;
let closure_4;
({ HELP_CENTER_LINK: closure_3, PremiumGroupInviteState: closure_4 } = TOTAL_PREMIUM_GROUP_MEMBER_SEATS);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx");

export const createPremiumGroupInviteEmbed = function createPremiumGroupInviteEmbed(message, theme, id, channel) {
  let betaPillBackgroundColor;
  let betaPillTextColor;
  let body;
  let bodyTextColor;
  let header;
  let headerTextColor;
  let linkTextColor;
  if (null != message.author) {
    let obj = { headerTextColor: importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: importDefault(689).colors.TEXT_DEFAULT, linkTextColor: importDefault(689).colors.TEXT_LINK, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_NORMAL, betaPillTextColor: importDefault(689).colors.BLACK, betaPillBackgroundColor: importDefault(689).colors.WHITE };
    const tmp10 = require(4130) /* _createForOfIteratorHelperLoose */.createNativeStyleProperties(obj)(theme);
    const backgroundColor = tmp10.backgroundColor;
    ({ headerTextColor, bodyTextColor, linkTextColor, betaPillTextColor, betaPillBackgroundColor } = tmp10);
    const obj4 = require(4130) /* _createForOfIteratorHelperLoose */;
    const author = message.author;
    const assetUriForEmbed = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(7824));
    const obj6 = require(7724) /* frozen */;
    obj = { sender: author, channel, isSender: id === author.id, inviteState: constants.UNKNOWN };
    const premiumGroupInviteEmbedText = require(7825) /* getPremiumGroupInviteEmbedText */.getPremiumGroupInviteEmbedText(obj);
    if (null != premiumGroupInviteEmbedText) {
      ({ header, body } = premiumGroupInviteEmbedText);
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = {};
      const obj1 = { action: "bindOpenUrl", url: closure_3, linkColor: linkTextColor };
      obj.learnMoreLinkOnClick = obj1;
      const obj2 = { headerText: header, headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, headerImageUrl: assetUriForEmbed };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const formatToPartsResult = intl.formatToParts(importDefault(2780)["9VTnfI"], obj);
      obj2.betaPillText = intl2.string(require(1212) /* getSystemLocale */.t.oW0eUd).toUpperCase();
      obj2.betaPillTextColor = betaPillTextColor;
      obj2.betaPillBackgroundColor = betaPillBackgroundColor;
      obj2.bodyText = body;
      obj2.bodyTextColor = bodyTextColor;
      obj2.learnMoreLink = formatToPartsResult;
      return obj2;
    }
    const obj7 = require(7825) /* getPremiumGroupInviteEmbedText */;
  }
};
