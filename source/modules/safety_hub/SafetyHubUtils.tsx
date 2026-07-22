// Module ID: 7537
// Function ID: 60340
// Name: parseMessageEmbedForProps
// Dependencies: []
// Exports: capitalizeText, getAppealSignalDisplayText, getClassificationExpiration, getClassificationRelativeIncidentTime, getRequestReviewErrorFromCode, getSpoilerFlagsForAttachment, isCurrentUserSuspended, isFlaggedContentEmpty, isGuildClassification, mapCtaToNativeData, parseMessageForProps, useIsSuspendedUser

// Module 7537 (parseMessageEmbedForProps)
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
    if (null != reduced[closure_6.HEADER]) {
      str2 = tmp3;
    }
    obj.header = str2;
    obj.icon = reduced[closure_6.ICON_TYPE];
    let tmp7 = str;
    if (null != reduced[closure_6.BODY]) {
      tmp7 = tmp6;
    }
    obj.body = tmp7;
    if (null != reduced[closure_6.CTAS]) {
      str = tmp9;
    }
    const parts = str.split(",");
    obj.ctas = parts.filter((arg0) => "" !== arg0);
    let num = 0;
    if (null != reduced[closure_6.TIMESTAMP]) {
      num = tmp12;
    }
    obj.timestamp = parseFloat(num);
    obj.theme = reduced[closure_6.THEME];
    obj.learn_more_link = reduced[closure_6.LEARN_MORE_LINK];
    obj.classification_id = reduced[closure_6.CLASSIFICATION_ID];
    return obj;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
({ AppealIngestionSignal: closure_4, SafetySystemNotificationCtaType: closure_5, SafetySystemNotificationEmbedKeys: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ AbortCodes: closure_7, MessageAttachmentFlags: closure_8 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/safety_hub/SafetyHubUtils.tsx");

export const getClassificationRelativeIncidentTime = function getClassificationRelativeIncidentTime(timestamp) {
  return importDefault(dependencyMap[3])().to(importDefault(dependencyMap[3])(timestamp));
};
export const getSpoilerFlagsForAttachment = function getSpoilerFlagsForAttachment(filename) {
  if (obj.isImageFile(filename.filename)) {
    let num = constants4.IS_SPOILER;
  } else {
    num = 0;
    const obj2 = arg1(dependencyMap[4]);
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
    const intl2 = learn_more_link(dependencyMap[5]).intl;
    obj.text = intl2.string(learn_more_link(dependencyMap[5]).t.8/GdRB);
    obj.type = constants2.LEARN_MORE_LINK;
    let str2 = "";
    if (null != learn_more_link) {
      str2 = learn_more_link;
    }
    obj.key = str2;
    return obj;
  } else if (constants2.POLICY_VIOLATION_DETAIL === arg0) {
    obj = {};
    const intl = learn_more_link(dependencyMap[5]).intl;
    obj.text = intl.string(learn_more_link(dependencyMap[5]).t.QsqdXC);
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
  let tmp = first.type !== arg1(dependencyMap[6]).ContentIdType.MESSAGE;
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
  const intl = arg1(dependencyMap[5]).intl;
  obj[constants.DIDNT_VIOLATE_POLICY] = intl.string(arg1(dependencyMap[5]).t.mZffAi);
  const intl2 = arg1(dependencyMap[5]).intl;
  obj[constants.TOO_STRICT_UNFAIR] = intl2.string(arg1(dependencyMap[5]).t.wgZVAn);
  const intl3 = arg1(dependencyMap[5]).intl;
  obj[constants.DONT_AGREE_PENALTY] = intl3.string(arg1(dependencyMap[5]).t.eu8G4k);
  const intl4 = arg1(dependencyMap[5]).intl;
  obj[constants.SOMETHING_ELSE] = intl4.string(arg1(dependencyMap[5]).t.XU3s6r);
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
  if (arg0 === constants3.DSA_APPEAL_REQUEST_DEFLECTION) {
    const intl2 = arg1(dependencyMap[5]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[5]).t.0qyXXH);
  } else {
    const intl = arg1(dependencyMap[5]).intl;
    stringResult = intl.string(arg1(dependencyMap[5]).t.aPmsx3);
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
  const items = [closure_3];
  return null != arg1(dependencyMap[7]).useStateFromStores(items, () => suspendedUserToken.getSuspendedUserToken());
};
export const isCurrentUserSuspended = function isCurrentUserSuspended() {
  return null != suspendedUserToken.getSuspendedUserToken();
};
