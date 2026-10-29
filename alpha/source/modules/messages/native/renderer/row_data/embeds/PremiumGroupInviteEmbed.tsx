// Module ID: 8473
// Function ID: 8474
// Name: PremiumGroupInviteEmbed
// Dependencies: [2064, 5005, 587, 8331, 8474, 8475, 1125, 3284, 2]
// Exports: createPremiumGroupInviteEmbed

// Module 8473 (PremiumGroupInviteEmbed)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import createStyles from "createStyles" /* 5005 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8331 */;
import AssetRegistryDefault from "AssetRegistry" /* 8474 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 8475 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 2064 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ HELP_CENTER_LINK: c3, PremiumGroupInviteState: closure_4 } = PremiumGroupConstants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx");

export function createPremiumGroupInviteEmbed(message, theme, id, channel) {
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
      const intl = tmp6(1125).intl;
      const obj = { learnMoreLinkOnClick: obj4 };
      obj4 = { action: "bindOpenUrl", url, linkColor: linkTextColor };
      const obj7 = { headerText: header, headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, headerImageUrl: assetUriForEmbed, betaPillText: str.toUpperCase(), betaPillTextColor, betaPillBackgroundColor, bodyText: body, bodyTextColor, learnMoreLink: formatToPartsResult };
      formatToPartsResult = intl.formatToParts(tmp9(3284)["9VTnfI"], obj);
      const intl2 = tmp6(1125).intl;
      str = intl2.string(intl3.t.oW0eUd);
      return obj7;
    }
  }
}
