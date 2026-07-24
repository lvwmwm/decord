// Module ID: 12347
// Function ID: 96164
// Name: createSafetyPolicyNoticeEmbed
// Dependencies: [27, 653, 7589, 3712, 1212, 7724, 7632, 2]
// Exports: createSafetyPolicyNoticeEmbed

// Module 12347 (createSafetyPolicyNoticeEmbed)
import { Image } from "get ActivityIndicator";
import { MessageEmbedTypes } from "ME";
import { SafetyHubPolicyNoticeKeys } from "SafetyHubLinks";

const result = require("SafetyHubLinks").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx");

export const createSafetyPolicyNoticeEmbed = function createSafetyPolicyNoticeEmbed(message) {
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
      if (type === MessageEmbedTypes.SAFETY_POLICY_NOTICE) {
        const first2 = message.embeds[0];
        const fields1 = first2.fields;
        let found;
        if (null != fields1) {
          found = fields1.find((rawName) => rawName.rawName === outer1_5.CLASSIFICATION_ID);
        }
        let tmp5;
        if (null != found) {
          tmp5 = found;
        }
        let rawValue;
        if (null != tmp5) {
          rawValue = tmp5.rawValue;
        }
        let tmp7;
        if (null != rawValue) {
          tmp7 = rawValue;
        }
        const fields2 = first2.fields;
        let found1;
        if (null != fields2) {
          found1 = fields2.find((rawName) => rawName.rawName === outer1_5.INCIDENT_TIMESTAMP);
        }
        let tmp9;
        if (null != found1) {
          tmp9 = found1;
        }
        if (null != tmp9) {
          if (null != tmp9.rawValue) {
            const _parseFloat = parseFloat;
            const parsed = parseFloat(tmp9.rawValue);
          }
        }
        if (null != tmp7) {
          if (null != parsed) {
            let obj = {};
            const intl = require(1212) /* getSystemLocale */.intl;
            obj.titleText = intl.string(require(1212) /* getSystemLocale */.t["4CxGXi"]);
            obj.titleIcon = require(7724) /* frozen */.getAssetUriForEmbed(Image.resolveAssetSource(importDefault(7632)));
            const intl2 = require(1212) /* getSystemLocale */.intl;
            obj = {};
            const obj2 = require(7724) /* frozen */;
            const obj4 = importDefault(3712)();
            obj.daysAgo = obj4.diff(importDefault(3712).unix(parsed), "days");
            obj.subtitleText = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.eevFb6, obj);
            const intl3 = require(1212) /* getSystemLocale */.intl;
            obj.descriptionText = intl3.string(require(1212) /* getSystemLocale */.t["5CLb0A"]);
            const intl4 = require(1212) /* getSystemLocale */.intl;
            obj.ctaText = intl4.string(require(1212) /* getSystemLocale */.t.zKnzwm);
            obj.classificationId = tmp7;
            return obj;
          }
        }
      }
    }
  }
};
