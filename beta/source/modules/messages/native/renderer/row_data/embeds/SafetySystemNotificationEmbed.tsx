// Module ID: 13589
// Function ID: 13590
// Name: SafetySystemNotificationEmbed
// Dependencies: [17, 1078, 4384, 8904, 5281, 8727, 8241, 1119, 2]
// Exports: createSafetySystemNotificationEmbed

// Module 13589 (SafetySystemNotificationEmbed)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1078 */;
import _modDef4384 from "module_4384" /* 4384 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8727 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx");

export const createSafetySystemNotificationEmbed = function createSafetySystemNotificationEmbed(message) {
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
          const parseMessageForPropsResult = SafetyHubUtils.parseMessageForProps(message);
          if (null != parseMessageForPropsResult) {
            let tmp9;
            let tmp10;
            if (null != parseMessageForPropsResult.ctas) {
              let mapCtaToNativeDataResult;
              if (null != parseMessageForPropsResult.ctas[0]) {
                mapCtaToNativeDataResult = tmp6(8727).mapCtaToNativeData(parseMessageForPropsResult.ctas[0], parseMessageForPropsResult.learn_more_link, parseMessageForPropsResult.classification_id);
                const tmp6Result = tmp6(8727);
              }
              let mapCtaToNativeDataResult1;
              if (null != parseMessageForPropsResult.ctas[1]) {
                mapCtaToNativeDataResult1 = tmp6(8727).mapCtaToNativeData(parseMessageForPropsResult.ctas[1], parseMessageForPropsResult.learn_more_link, parseMessageForPropsResult.classification_id);
                const tmp6Result3 = tmp6(8727);
              }
              tmp9 = mapCtaToNativeDataResult1;
              tmp10 = mapCtaToNativeDataResult;
            }
            let str = parseMessageForPropsResult.header;
            if (str == null) {
              str = "";
            }
            const obj2 = { titleText: str, titleIcon: tmp6(8241).getAssetUriForEmbed(Image.resolveAssetSource(importDefault("danger" === parseMessageForPropsResult.icon ? 8904 : 5281))), subtitleText: null, descriptionText: null, primaryCtaText: null, primaryCtaType: null, primaryCtaKey: null, secondaryCtaText: null, secondaryCtaType: null, secondaryCtaKey: null, footerTheme: null };
            const intl = tmp6(1119).intl;
            let num = parseMessageForPropsResult.timestamp;
            if (num == null) {
              num = 0;
            }
            const obj3 = { daysAgo: null };
            const tmp6Result4 = tmp6(8241);
            const obj7 = _modDef4384();
            obj3.daysAgo = obj7.diff(_modDef4384.unix(num), "days");
            obj2.subtitleText = intl.formatToPlainString(tmp6(1119).t.eevFb6, obj3);
            let str4 = parseMessageForPropsResult.body;
            if (str4 == null) {
              str4 = "";
            }
            obj2.descriptionText = str4;
            let text;
            if (tmp10 != null) {
              text = tmp10.text;
            }
            obj2.primaryCtaText = text;
            let type1;
            if (tmp10 != null) {
              type1 = tmp10.type;
            }
            obj2.primaryCtaType = type1;
            let key;
            if (tmp10 != null) {
              key = tmp10.key;
            }
            obj2.primaryCtaKey = key;
            let text1;
            if (tmp9 != null) {
              text1 = tmp9.text;
            }
            obj2.secondaryCtaText = text1;
            let type2;
            if (tmp9 != null) {
              type2 = tmp9.type;
            }
            obj2.secondaryCtaType = type2;
            let key1;
            if (tmp9 != null) {
              key1 = tmp9.key;
            }
            obj2.secondaryCtaKey = key1;
            obj2.footerTheme = parseMessageForPropsResult.theme;
            return obj2;
          }
        }
      }
    }
  }
};
