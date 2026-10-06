// Module ID: 7729
// Function ID: 7730
// Name: PremiumGroupInviteEmbed
// Dependencies: [4548, 4896, 587, 7616, 7730, 7731, 1126, 3233, 2]
// Exports: createPremiumGroupInviteEmbed

// Module 7729 (PremiumGroupInviteEmbed)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import createStyles from "createStyles" /* 4896 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7616 */;
import AssetRegistryDefault from "AssetRegistry" /* 7730 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 7731 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4548 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ HELP_CENTER_LINK: c3, PremiumGroupInviteState: closure_4 } = PremiumGroupConstants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx");

export const createPremiumGroupInviteEmbed = function createPremiumGroupInviteEmbed(message, theme, id, channel) {
  let backgroundColor;
  let betaPillBackgroundColor;
  let betaPillTextColor;
  let body;
  let bodyTextColor;
  let formatToPartsResult;
  let header;
  let headerTextColor;
  let linkTextColor;
  let obj4;
  let str;
  if (null != message.author) {
    const obj2 = { headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, linkTextColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, betaPillTextColor: nativeDefault.colors.BLACK, betaPillBackgroundColor: nativeDefault.colors.WHITE };
    const createNativeStyleProperties = createStyles.createNativeStyleProperties;
    createStyles;
    ({ backgroundColor, headerTextColor, bodyTextColor, linkTextColor, betaPillTextColor, betaPillBackgroundColor } = createNativeStyleProperties(obj2)(theme));
    createNativeStyleProperties(obj2)(theme);
    const author = message.author;
    const obj5 = renderer_EmbedUtils;
    const assetUriForEmbed = obj5.getAssetUriForEmbed(AssetRegistryDefault);
    id = author.id;
    const obj3 = { sender: author, channel, isSender: id === id, inviteState: constants.UNKNOWN };
    const obj6 = PremiumGroupUtils;
    const premiumGroupInviteEmbedText = obj6.getPremiumGroupInviteEmbedText(obj3);
    const tmp9 = importDefault;
    if (null != premiumGroupInviteEmbedText) {
      ({ header, body } = premiumGroupInviteEmbedText);
      const intl = tmp6(1126).intl;
      const obj = { learnMoreLinkOnClick: obj4 };
      obj4 = { action: "bindOpenUrl", url, linkColor: linkTextColor };
      const obj7 = { headerText: header, headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, headerImageUrl: assetUriForEmbed, betaPillText: str.toUpperCase(), betaPillTextColor, betaPillBackgroundColor, bodyText: body, bodyTextColor, learnMoreLink: formatToPartsResult };
      formatToPartsResult = intl.formatToParts(tmp9(3233)["9VTnfI"], obj);
      const intl2 = tmp6(1126).intl;
      str = intl2.string(intl3.t.oW0eUd);
      return obj7;
    }
  }
};
