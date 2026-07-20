// Module ID: 12195
// Function ID: 93712
// Name: createSafetyPolicyNoticeEmbed
// Dependencies: []
// Exports: createSafetyPolicyNoticeEmbed

// Module 12195 (createSafetyPolicyNoticeEmbed)
const Image = require(dependencyMap[0]).Image;
const MessageEmbedTypes = require(dependencyMap[1]).MessageEmbedTypes;
const SafetyHubPolicyNoticeKeys = require(dependencyMap[2]).SafetyHubPolicyNoticeKeys;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx");

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
          found = fields1.find((rawName) => rawName.rawName === constants.CLASSIFICATION_ID);
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
          found1 = fields2.find((rawName) => rawName.rawName === constants.INCIDENT_TIMESTAMP);
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
            const intl = require(dependencyMap[4]).intl;
            obj.titleText = intl.string(require(dependencyMap[4]).t.4CxGXi);
            obj.titleIcon = require(dependencyMap[5]).getAssetUriForEmbed(Image.resolveAssetSource(importDefault(dependencyMap[6])));
            const intl2 = require(dependencyMap[4]).intl;
            obj = {};
            const obj2 = require(dependencyMap[5]);
            const obj4 = importDefault(dependencyMap[3])();
            obj.daysAgo = obj4.diff(importDefault(dependencyMap[3]).unix(parsed), "days");
            obj.subtitleText = intl2.formatToPlainString(require(dependencyMap[4]).t.eevFb6, obj);
            const intl3 = require(dependencyMap[4]).intl;
            obj.descriptionText = intl3.string(require(dependencyMap[4]).t.5CLb0A);
            const intl4 = require(dependencyMap[4]).intl;
            obj.ctaText = intl4.string(require(dependencyMap[4]).t.zKnzwm);
            obj.classificationId = tmp7;
            return obj;
          }
        }
      }
    }
  }
};
