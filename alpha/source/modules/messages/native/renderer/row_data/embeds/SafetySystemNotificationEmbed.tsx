// Module ID: 15150
// Function ID: 15151
// Name: SafetySystemNotificationEmbed
// Dependencies: [17, 1072, 8027, 8611, 7969, 8396, 15148, 15149, 2]
// Exports: createSafetySystemNotificationEmbed

// Module 15150 (SafetySystemNotificationEmbed)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import SafetyHubUtils from "SafetyHubUtils" /* 7969 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8396 */;
import SafetyWarningAgeUtils from "SafetyWarningAgeUtils" /* 15148 */;
import SafetyWarningAgeTextExperiment from "SafetyWarningAgeTextExperiment" /* 15149 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx");

export function createSafetySystemNotificationEmbed(message) {
  let daysAgo;
  let formatSafetyWarningAge;
  let key;
  let key1;
  let str4;
  let text;
  let text1;
  let tmp6Result10;
  let tmp6Result7;
  let type1;
  let type2;
  if (null != message) {
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
        if (type === MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION) {
          const obj = SafetyHubUtils;
          const parseMessageForPropsResult = obj.parseMessageForProps(message);
          if (null != parseMessageForPropsResult) {
            let tmp9;
            let tmp10;
            if (null != parseMessageForPropsResult.ctas) {
              let mapCtaToNativeDataResult;
              if (null != parseMessageForPropsResult.ctas[0]) {
                const tmp6Result = SafetyHubUtils;
                mapCtaToNativeDataResult = tmp6Result.mapCtaToNativeData(parseMessageForPropsResult.ctas[0], parseMessageForPropsResult.learn_more_link, parseMessageForPropsResult.classification_id);
              }
              let mapCtaToNativeDataResult1;
              if (null != parseMessageForPropsResult.ctas[1]) {
                const tmp6Result6 = SafetyHubUtils;
                mapCtaToNativeDataResult1 = tmp6Result6.mapCtaToNativeData(parseMessageForPropsResult.ctas[1], parseMessageForPropsResult.learn_more_link, parseMessageForPropsResult.classification_id);
              }
              tmp9 = mapCtaToNativeDataResult1;
              tmp10 = mapCtaToNativeDataResult;
            }
            let str = parseMessageForPropsResult.header;
            if (str == null) {
              str = "";
            }
            const obj2 = { titleText: str, titleIcon: tmp6Result7.getAssetUriForEmbed(Image.resolveAssetSource(importDefault("danger" === parseMessageForPropsResult.icon ? 8027 : 8611))), subtitleText: formatSafetyWarningAge(daysAgo, tmp6Result10.getIsSafetyWarningAgeTextEnabled("safety_warning_system_message")), descriptionText: str4, primaryCtaText: text, primaryCtaType: type1, primaryCtaKey: key, secondaryCtaText: text1, secondaryCtaType: type2, secondaryCtaKey: key1, footerTheme: parseMessageForPropsResult.theme };
            tmp6Result7 = renderer_EmbedUtils;
            formatSafetyWarningAge = SafetyWarningAgeUtils.formatSafetyWarningAge;
            SafetyWarningAgeUtils;
            let num = parseMessageForPropsResult.timestamp;
            const getDaysAgo = SafetyWarningAgeUtils.getDaysAgo;
            SafetyWarningAgeUtils;
            if (num == null) {
              num = 0;
            }
            daysAgo = getDaysAgo(num);
            str4 = parseMessageForPropsResult.body;
            tmp6Result10 = SafetyWarningAgeTextExperiment;
            if (str4 == null) {
              str4 = "";
            }
            text = undefined;
            if (tmp10 != null) {
              text = tmp10.text;
            }
            type1 = undefined;
            if (tmp10 != null) {
              type1 = tmp10.type;
            }
            key = undefined;
            if (tmp10 != null) {
              key = tmp10.key;
            }
            text1 = undefined;
            if (tmp9 != null) {
              text1 = tmp9.text;
            }
            type2 = undefined;
            if (tmp9 != null) {
              type2 = tmp9.type;
            }
            key1 = undefined;
            if (tmp9 != null) {
              key1 = tmp9.key;
            }
            return obj2;
          }
        }
      }
    }
  }
}
