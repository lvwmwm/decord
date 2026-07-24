// Module ID: 7588
// Function ID: 60485
// Name: parseMessageEmbedForProps
// Dependencies: [1194, 7589, 653, 3712, 4317, 1212, 7590, 566, 2]
// Exports: capitalizeText, getAppealSignalDisplayText, getClassificationExpiration, getClassificationRelativeIncidentTime, getRequestReviewErrorFromCode, getSpoilerFlagsForAttachment, isCurrentUserSuspended, isFlaggedContentEmpty, isGuildClassification, mapCtaToNativeData, parseMessageForProps, useIsSuspendedUser

// Module 7588 (parseMessageEmbedForProps)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import SafetyHubLinks from "SafetyHubLinks";
import ME from "ME";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function parseMessageEmbedForProps(fields) {
  if (null != fields.fields) {
    fields = fields.fields;
    const reduced = fields.reduce((arg0, rawName) => {
      arg0[rawName.rawName] = rawName.rawValue;
      return arg0;
    }, {});
    const obj = {};
    let str = "";
    let str2 = "";
    if (null != reduced[constants3.HEADER]) {
      str2 = tmp3;
    }
    obj.header = str2;
    obj.icon = reduced[constants3.ICON_TYPE];
    let tmp7 = str;
    if (null != reduced[constants3.BODY]) {
      tmp7 = tmp6;
    }
    obj.body = tmp7;
    if (null != reduced[constants3.CTAS]) {
      str = tmp9;
    }
    const parts = str.split(",");
    obj.ctas = parts.filter((arg0) => "" !== arg0);
    let num = 0;
    if (null != reduced[constants3.TIMESTAMP]) {
      num = tmp12;
    }
    obj.timestamp = parseFloat(num);
    obj.theme = reduced[constants3.THEME];
    obj.learn_more_link = reduced[constants3.LEARN_MORE_LINK];
    obj.classification_id = reduced[constants3.CLASSIFICATION_ID];
    return obj;
  }
}
({ AppealIngestionSignal: closure_4, SafetySystemNotificationCtaType: closure_5, SafetySystemNotificationEmbedKeys: closure_6 } = SafetyHubLinks);
({ AbortCodes: closure_7, MessageAttachmentFlags: closure_8 } = ME);
const result = require("ME").fileFinishedImporting("modules/safety_hub/SafetyHubUtils.tsx");

export const getClassificationRelativeIncidentTime = function getClassificationRelativeIncidentTime(timestamp) {
  return importDefault(3712)().to(importDefault(3712)(timestamp));
};
export const getSpoilerFlagsForAttachment = function getSpoilerFlagsForAttachment(filename) {
  if (obj.isImageFile(filename.filename)) {
    let num = constants5.IS_SPOILER;
  } else {
    num = 0;
    const obj2 = require(4317) /* urlMatchesFileExtension */;
  }
  return num;
};
export const parseMessageForProps = function parseMessageForProps(message) {
  return parseMessageEmbedForProps(message.embeds[0]);
};
export { parseMessageEmbedForProps };
export const mapCtaToNativeData = function mapCtaToNativeData(arg0, learn_more_link, classification_id) {
  if (constants2.LEARN_MORE_LINK === arg0) {
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.text = intl2.string(require(1212) /* getSystemLocale */.t["8/GdRB"]);
    obj.type = constants2.LEARN_MORE_LINK;
    let str2 = "";
    if (null != learn_more_link) {
      str2 = learn_more_link;
    }
    obj.key = str2;
    return obj;
  } else if (constants2.POLICY_VIOLATION_DETAIL === arg0) {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.text = intl.string(require(1212) /* getSystemLocale */.t.QsqdXC);
    obj.type = constants2.POLICY_VIOLATION_DETAIL;
    let str = "";
    if (null != classification_id) {
      str = classification_id;
    }
    obj.key = str;
    return obj;
  }
};
export const isFlaggedContentEmpty = function isFlaggedContentEmpty(first) {
  let tmp = first.type !== require(7590) /* ContentIdType */.ContentIdType.MESSAGE;
  if (!tmp) {
    let tmp2 = "" === first.content;
    if (tmp2) {
      tmp2 = 0 === first.attachments.length;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const getAppealSignalDisplayText = function getAppealSignalDisplayText(signal) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj[constants.DIDNT_VIOLATE_POLICY] = intl.string(require(1212) /* getSystemLocale */.t.mZffAi);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj[constants.TOO_STRICT_UNFAIR] = intl2.string(require(1212) /* getSystemLocale */.t.wgZVAn);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj[constants.DONT_AGREE_PENALTY] = intl3.string(require(1212) /* getSystemLocale */.t.eu8G4k);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj[constants.SOMETHING_ELSE] = intl4.string(require(1212) /* getSystemLocale */.t.XU3s6r);
  return obj[signal];
};
export const capitalizeText = function capitalizeText(description) {
  let str = "";
  if (null != description) {
    str = "";
    if (0 !== description.length) {
      if (1 === description.length) {
        let formatted = description.toUpperCase();
      } else {
        const formatted1 = description.charAt(0).toUpperCase();
        const _HermesInternal = HermesInternal;
        formatted = "" + formatted1 + description.slice(1);
        const str2 = description.charAt(0);
      }
    }
  }
  return str;
};
export const isGuildClassification = function isGuildClassification(stateFromStores) {
  return null != stateFromStores && null != stateFromStores.guild_metadata;
};
export const getRequestReviewErrorFromCode = function getRequestReviewErrorFromCode(arg0) {
  if (arg0 === constants4.DSA_APPEAL_REQUEST_DEFLECTION) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["0qyXXH"]);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.aPmsx3);
  }
  return stringResult;
};
export const getClassificationExpiration = function getClassificationExpiration(classification) {
  const max_expiration_time = classification.max_expiration_time;
  if (null == max_expiration_time) {
    return null;
  } else {
    const _Date = Date;
    const date = new Date(tmp);
    return date;
  }
};
export const useIsSuspendedUser = function useIsSuspendedUser() {
  const items = [_isNativeReflectConstruct];
  return null != require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getSuspendedUserToken());
};
export const isCurrentUserSuspended = function isCurrentUserSuspended() {
  return null != suspendedUserToken.getSuspendedUserToken();
};
