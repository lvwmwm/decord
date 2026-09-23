// Module ID: 8392
// Function ID: 8393
// Name: PremiumGroupInviteEmbed
// Dependencies: [4495, 4827, 576, 8290, 8393, 8394, 1115, 3196, 2]
// Exports: createPremiumGroupInviteEmbed

// Module 8392 (PremiumGroupInviteEmbed)
import nativeDefault from "native" /* 576 */;
import createStyles from "createStyles" /* 4827 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8290 */;
import _modDef8393 from "module_8393" /* 8393 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 8394 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4495 */;
import size from "module_2" /* 2 */;

({ HELP_CENTER_LINK: c3, PremiumGroupInviteState: closure_4 } = PremiumGroupConstants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx");

export const createPremiumGroupInviteEmbed = function createPremiumGroupInviteEmbed(message, theme, id, channel) {
  if (null != message.author) {
    const obj2 = { headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, linkTextColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, betaPillTextColor: nativeDefault.colors.BLACK, betaPillBackgroundColor: nativeDefault.colors.WHITE };
    const tmp8 = importDefault;
    ({ backgroundColor, headerTextColor, bodyTextColor, linkTextColor, betaPillTextColor, betaPillBackgroundColor } = createStyles.createNativeStyleProperties(obj2)(theme));
    const tmp9 = createStyles.createNativeStyleProperties(obj2)(theme);
    const author = message.author;
    const assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8393);
    const obj3 = { sender: author, channel, isSender: id === author.id, inviteState: constants.UNKNOWN };
    const premiumGroupInviteEmbedText = PremiumGroupUtils.getPremiumGroupInviteEmbedText(obj3);
    if (null != premiumGroupInviteEmbedText) {
      ({ header, body } = premiumGroupInviteEmbedText);
      const intl = tmp6(1115).intl;
      const obj = { learnMoreLinkOnClick: null };
      const obj5 = { action: "bindOpenUrl", url, linkColor: linkTextColor };
      obj.learnMoreLinkOnClick = obj5;
      const obj8 = { headerText: header, headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, headerImageUrl: assetUriForEmbed, betaPillText: null, betaPillTextColor: null, betaPillBackgroundColor: null, bodyText: null, bodyTextColor: null, learnMoreLink: null };
      const intl2 = tmp6(1115).intl;
      const formatToPartsResult = intl.formatToParts(tmp8(3196)["9VTnfI"], obj);
      obj8.betaPillText = intl2.string(tmp6(1115).t.oW0eUd).toUpperCase();
      obj8.betaPillTextColor = betaPillTextColor;
      obj8.betaPillBackgroundColor = betaPillBackgroundColor;
      obj8.bodyText = body;
      obj8.bodyTextColor = bodyTextColor;
      obj8.learnMoreLink = formatToPartsResult;
      return obj8;
    }
  }
};
