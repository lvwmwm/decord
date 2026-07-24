// Module ID: 12348
// Function ID: 96168
// Name: createSafetySystemNotificationEmbed
// Dependencies: [27, 653, 3712, 7632, 4600, 7588, 7724, 1212, 2]
// Exports: createSafetySystemNotificationEmbed

// Module 12348 (createSafetySystemNotificationEmbed)
import { Image } from "get ActivityIndicator";
import { MessageEmbedTypes } from "ME";

const result = require("t").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx");

export const createSafetySystemNotificationEmbed = function createSafetySystemNotificationEmbed(message) {
  if (null != message) {
    if (null != message.embeds) {
      const first = message.embeds[0];
      let fields;
      if (null != first) {
        fields = first.fields;
      }
      if (null != fields) {
        const first1 = message.embeds[0];
        let type;
        if (null != first1) {
          type = first1.type;
        }
        if (type === MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION) {
          let obj = require(7588) /* parseMessageEmbedForProps */;
          const parseMessageForPropsResult = obj.parseMessageForProps(message);
          if (null != parseMessageForPropsResult) {
            let tmp9;
            let tmp10;
            if (null != parseMessageForPropsResult.ctas) {
              let mapCtaToNativeDataResult;
              if (null != parseMessageForPropsResult.ctas[0]) {
                mapCtaToNativeDataResult = require(7588) /* parseMessageEmbedForProps */.mapCtaToNativeData(parseMessageForPropsResult.ctas[0], parseMessageForPropsResult.learn_more_link, parseMessageForPropsResult.classification_id);
                const obj2 = require(7588) /* parseMessageEmbedForProps */;
              }
              let mapCtaToNativeDataResult1;
              if (null != parseMessageForPropsResult.ctas[1]) {
                mapCtaToNativeDataResult1 = require(7588) /* parseMessageEmbedForProps */.mapCtaToNativeData(parseMessageForPropsResult.ctas[1], parseMessageForPropsResult.learn_more_link, parseMessageForPropsResult.classification_id);
                const obj3 = require(7588) /* parseMessageEmbedForProps */;
              }
              tmp10 = mapCtaToNativeDataResult1;
              tmp9 = mapCtaToNativeDataResult;
            }
            obj = {};
            const header = parseMessageForPropsResult.header;
            let str = "";
            let str2 = "";
            if (null != header) {
              str2 = header;
            }
            obj.titleText = str2;
            if ("danger" === parseMessageForPropsResult.icon) {
              let tmp22 = 7632;
            } else {
              tmp22 = 4600;
            }
            obj.titleIcon = require(7724) /* frozen */.getAssetUriForEmbed(Image.resolveAssetSource(importDefault(tmp22)));
            const intl = require(1212) /* getSystemLocale */.intl;
            obj = {};
            const timestamp = parseMessageForPropsResult.timestamp;
            let num8 = 0;
            if (null != timestamp) {
              num8 = timestamp;
            }
            const obj5 = require(7724) /* frozen */;
            const tmp20 = importDefault;
            const obj7 = importDefault(3712)();
            obj.daysAgo = obj7.diff(importDefault(3712).unix(num8), "days");
            obj.subtitleText = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.eevFb6, obj);
            const body = parseMessageForPropsResult.body;
            if (null != body) {
              str = body;
            }
            obj.descriptionText = str;
            let text;
            if (null != tmp9) {
              text = tmp9.text;
            }
            obj.primaryCtaText = text;
            let type1;
            if (null != tmp9) {
              type1 = tmp9.type;
            }
            obj.primaryCtaType = type1;
            let key;
            if (null != tmp9) {
              key = tmp9.key;
            }
            obj.primaryCtaKey = key;
            let text1;
            if (null != tmp10) {
              text1 = tmp10.text;
            }
            obj.secondaryCtaText = text1;
            let type2;
            if (null != tmp10) {
              type2 = tmp10.type;
            }
            obj.secondaryCtaType = type2;
            let key1;
            if (null != tmp10) {
              key1 = tmp10.key;
            }
            obj.secondaryCtaKey = key1;
            obj.footerTheme = parseMessageForPropsResult.theme;
            return obj;
          }
        }
      }
    }
  }
};
