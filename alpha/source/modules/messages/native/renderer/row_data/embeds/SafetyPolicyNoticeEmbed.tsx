// Module ID: 15147
// Function ID: 15148
// Name: SafetyPolicyNoticeEmbed
// Dependencies: [17, 1072, 7970, 1113, 8396, 8027, 15148, 15149, 2]
// Exports: createSafetyPolicyNoticeEmbed

// Module 15147 (SafetyPolicyNoticeEmbed)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7970 */;
import AssetRegistryDefault from "AssetRegistry" /* 8027 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8396 */;
import SafetyWarningAgeUtils from "SafetyWarningAgeUtils" /* 15148 */;
import SafetyWarningAgeTextExperiment from "SafetyWarningAgeTextExperiment" /* 15149 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const SafetyHubPolicyNoticeKeys = SafetyHubConstants.SafetyHubPolicyNoticeKeys;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx");

export function createSafetyPolicyNoticeEmbed(message) {
  let daysAgo;
  let formatSafetyWarningAge;
  let intl;
  let intl2;
  let intl3;
  let obj2;
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
            const obj = { titleText: intl.string(intl4.t["4CxGXi"]), titleIcon: obj2.getAssetUriForEmbed(Image.resolveAssetSource(AssetRegistryDefault)), subtitleText: formatSafetyWarningAge(daysAgo, obj4.getIsSafetyWarningAgeTextEnabled("safety_warning_system_message")), descriptionText: intl2.string(intl4.t["5CLb0A"]), ctaText: intl3.string(intl4.t.zKnzwm), classificationId: rawValue };
            intl = intl4.intl;
            obj2 = renderer_EmbedUtils;
            formatSafetyWarningAge = SafetyWarningAgeUtils.formatSafetyWarningAge;
            SafetyWarningAgeUtils;
            const obj3 = SafetyWarningAgeUtils;
            daysAgo = obj3.getDaysAgo(parsed);
            obj4 = SafetyWarningAgeTextExperiment;
            intl2 = intl4.intl;
            intl3 = intl4.intl;
            return obj;
          }
        }
      }
    }
  }
}
