// Module ID: 10347
// Function ID: 10348
// Name: getActivityStatusText
// Dependencies: [1074, 10348, 7158, 10349, 1115, 10350, 8817, 7792, 2]
// Exports: default

// Module 10347 (getActivityStatusText)
import Constants from "Constants" /* 1074 */;
import intl9 from "intl" /* 1115 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7158 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 7792 */;
import StageChannelRichPresenceUtils from "StageChannelRichPresenceUtils" /* 8817 */;
import StatusDisplayTypes from "StatusDisplayTypes" /* 10348 */;
import getChannelCopyForEmbeddedActivityDefault from "getChannelCopyForEmbeddedActivity" /* 10349 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10350 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activity_status/getActivityStatusText.tsx");

export default function getActivityStatusText(name) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj7;
  let obj9;
  let tmp17;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  let tmp2 = null;
  if ("" !== name) {
    let name1;
    if (name != null) {
      name1 = name.name;
    }
    tmp2 = name1;
  }
  let details;
  if (name != null) {
    details = name.details;
  }
  let tmp5 = null;
  if ("" !== details) {
    let details1;
    if (name != null) {
      details1 = name.details;
    }
    tmp5 = details1;
  }
  let state;
  if (name != null) {
    state = name.state;
  }
  let tmp8 = null;
  if ("" !== state) {
    let state1;
    if (name != null) {
      state1 = name.state;
    }
    tmp8 = state1;
  }
  let type;
  if (name != null) {
    type = name.type;
  }
  let tmp12 = tmp2;
  if (type === ActivityTypes.STREAMING) {
    let tmp13 = tmp5;
    if (tmp5 == null) {
      tmp13 = tmp2;
    }
    tmp12 = tmp13;
  }
  let status_display_type;
  if (name != null) {
    status_display_type = name.status_display_type;
  }
  if (status_display_type !== StatusDisplayTypes.StatusDisplayTypes.NAME) {
    let status_display_type1;
    if (name != null) {
      status_display_type1 = name.status_display_type;
    }
    if (status_display_type1 !== StatusDisplayTypes.StatusDisplayTypes.STATE) {
      let status_display_type2;
      if (name != null) {
        status_display_type2 = name.status_display_type;
      }
      tmp17 = tmp12;
      const tmp20 = status_display_type2 === StatusDisplayTypes.StatusDisplayTypes.DETAILS && null != tmp5;
      if (tmp20) {
        tmp17 = tmp5;
      }
    } else {
      tmp17 = tmp8;
    }
  } else {
    tmp17 = tmp2;
  }
  if (isEmbeddedActivityDefault(name)) {
    const tmp28 = getChannelCopyForEmbeddedActivityDefault(tmp2);
    return { text: tmp28, tooltip: tmp28 };
  } else {
    let obj18;
    let type1;
    if (name != null) {
      type1 = name.type;
    }
    if (type1 === ActivityTypes.PLAYING) {
      if (null != tmp17) {
        const obj2 = { text: tmp17, tooltip: intl8.formatToPlainString(intl9.t.lFApmz, obj3) };
        intl8 = tmp15(1115).intl;
        return obj2;
      }
    }
    if (isListeningOnSpotifyDefault(name)) {
      if (flag) {
        if (null != tmp8) {
          const parts = tmp8.split("; ");
          let joined;
          if (parts != null) {
            joined = parts.join(", ");
          }
          const obj4 = { text: joined, tooltip: intl7.formatToPlainString(intl9.t.Vnuxue, obj5) };
          intl7 = tmp15(1115).intl;
          return obj4;
        }
      }
    }
    const tmp15Result = StageChannelRichPresenceUtils;
    if (tmp15Result.isStageActivity(name)) {
      if (null != tmp2) {
        const obj6 = { text: tmp2, tooltip: intl6.formatToPlainString(intl9.t.pW3Ip3, obj7) };
        intl6 = tmp15(1115).intl;
        obj18 = obj6;
        obj7 = { name: tmp2 };
      }
      return obj18;
    }
    let type2;
    if (name != null) {
      type2 = name.type;
    }
    if (type2 === ActivityTypes.LISTENING) {
      if (null != tmp17) {
        const obj8 = { text: tmp17, tooltip: intl5.formatToPlainString(intl9.t.Vnuxue, obj9) };
        intl5 = tmp15(1115).intl;
        obj18 = obj8;
        obj9 = { name: tmp17 };
      }
    }
    if (isCrunchyrollActivityDefault(name)) {
      if (flag) {
        if (null != tmp5) {
          const obj10 = { text: tmp5, tooltip: intl4.formatToPlainString(intl9.t.pW3Ip3, obj11) };
          intl4 = tmp15(1115).intl;
          obj18 = obj10;
          obj11 = { name: tmp5 };
        }
      }
    }
    let type3;
    if (name != null) {
      type3 = name.type;
    }
    if (type3 === ActivityTypes.WATCHING) {
      if (null != tmp17) {
        const obj12 = { text: tmp17, tooltip: intl3.formatToPlainString(intl9.t.pW3Ip3, obj13) };
        intl3 = tmp15(1115).intl;
        obj18 = obj12;
        obj13 = { name: tmp17 };
      }
    }
    let type4;
    if (name != null) {
      type4 = name.type;
    }
    if (type4 === ActivityTypes.COMPETING) {
      if (null != tmp17) {
        const obj14 = { text: tmp17, tooltip: intl2.formatToPlainString(intl9.t.QQ2wVE, obj15) };
        intl2 = tmp15(1115).intl;
        obj18 = obj14;
        obj15 = { name: tmp17 };
      }
    }
    let type5;
    if (name != null) {
      type5 = name.type;
    }
    if (type5 === ActivityTypes.STREAMING) {
      if (null != tmp17) {
        const obj16 = { text: tmp17, tooltip: intl.formatToPlainString(intl9.t["0wJXSh"], obj17) };
        intl = tmp15(1115).intl;
        obj18 = obj16;
        obj17 = { name: tmp17 };
      }
    }
    obj18 = {};
  }
};
