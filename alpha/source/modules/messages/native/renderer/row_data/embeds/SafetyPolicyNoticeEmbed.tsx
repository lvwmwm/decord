// Module ID: 15110
// Function ID: 15111
// Name: SafetyPolicyNoticeEmbed
// Dependencies: [17, 1072, 7962, 2044, 1114, 8388, 8019, 2]
// Exports: createSafetyPolicyNoticeEmbed

// Module 15110 (SafetyPolicyNoticeEmbed)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1114 */;
import _modDef2044 from "module_2044" /* 2044 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7962 */;
import AssetRegistryDefault from "AssetRegistry" /* 8019 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8388 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const SafetyHubPolicyNoticeKeys = SafetyHubConstants.SafetyHubPolicyNoticeKeys;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx");

export function createSafetyPolicyNoticeEmbed(message) {
  let diff;
  let eevFb6;
  let formatToPlainString;
  let intl;
  let intl3;
  let intl4;
  let obj2;
  let obj3;
  let obj4;
  if (null != message.embeds) {
    const first = message.embeds[0];
    let fields;
    if (first != null) {
      fields = first.fields;
    }
    if (null != fields) {
      const first1 = message.embeds[0];
      let type;
      if (first1 != null) {
        type = first1.type;
      }
      if (type === MessageEmbedTypes.SAFETY_POLICY_NOTICE) {
        let parsed;
        const first2 = message.embeds[0];
        const fields1 = first2.fields;
        let found;
        if (fields1 != null) {
          found = fields1.find((rawName) => rawName.rawName === constants.CLASSIFICATION_ID);
        }
        let rawValue;
        if (found != null) {
          rawValue = found.rawValue;
        }
        const fields2 = first2.fields;
        let found1;
        if (fields2 != null) {
          found1 = fields2.find((rawName) => rawName.rawName === constants.INCIDENT_TIMESTAMP);
        }
        if (null != found1) {
          if (null != found1.rawValue) {
            const _parseFloat = parseFloat;
            parsed = parseFloat(found1.rawValue);
          }
        }
        if (null != rawValue) {
          if (null != parsed) {
            const obj = { titleText: intl.string(intl5.t["4CxGXi"]), titleIcon: obj2.getAssetUriForEmbed(Image.resolveAssetSource(AssetRegistryDefault)), subtitleText: formatToPlainString(eevFb6, obj3), descriptionText: intl3.string(intl5.t["5CLb0A"]), ctaText: intl4.string(intl5.t.zKnzwm), classificationId: rawValue };
            intl = intl5.intl;
            obj2 = renderer_EmbedUtils;
            const intl2 = intl5.intl;
            formatToPlainString = intl2.formatToPlainString;
            obj3 = { daysAgo: diff(obj4.unix(parsed), "days") };
            eevFb6 = intl5.t.eevFb6;
            diff = _modDef2044().diff;
            _modDef2044();
            obj4 = _modDef2044;
            intl3 = intl5.intl;
            intl4 = intl5.intl;
            return obj;
          }
        }
      }
    }
  }
}
