// Module ID: 10739
// Function ID: 10740
// Name: getActivityStatusText
// Dependencies: [5757, 10740, 7876, 10737, 10741, 1114, 10742, 10743, 8906, 2]
// Exports: default

// Module 10739 (getActivityStatusText)
import intl9 from "intl" /* 1114 */;
import ActivityTypes from "ActivityTypes" /* 5757 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7876 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 8906 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10737 */;
import StatusDisplayTypes from "StatusDisplayTypes" /* 10740 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10742 */;
import StageChannelRichPresenceUtils from "StageChannelRichPresenceUtils" /* 10743 */;
import size from "module_2" /* 2 */;

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
  let obj10;
  let obj12;
  let obj14;
  let obj16;
  let obj6;
  let obj8;
  let tmp16;
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
  let tmp13 = tmp2;
  if (type === ActivityTypes.ActivityTypes.STREAMING) {
    let tmp14 = tmp5;
    if (tmp5 == null) {
      tmp14 = tmp2;
    }
    tmp13 = tmp14;
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
      tmp16 = tmp13;
      const tmp19 = status_display_type2 === StatusDisplayTypes.StatusDisplayTypes.DETAILS && null != tmp5;
      if (tmp19) {
        tmp16 = tmp5;
      }
    } else {
      tmp16 = tmp8;
    }
  } else {
    tmp16 = tmp2;
  }
  if (!isEmbeddedActivityDefault(name)) {
    const tmp11Result = conjurePresenceActivity;
    if (!tmp11Result.isConjurePresenceActivity(name)) {
      let obj17;
      let type1;
      if (name != null) {
        type1 = name.type;
      }
      if (type1 === ActivityTypes.ActivityTypes.PLAYING) {
        if (null != tmp16) {
          const obj = { text: tmp16, tooltip: intl8.formatToPlainString(intl9.t.lFApmz, obj2) };
          intl8 = tmp11(1114).intl;
          return obj;
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
            const obj3 = { text: joined, tooltip: intl7.formatToPlainString(intl9.t.Vnuxue, obj4) };
            intl7 = tmp11(1114).intl;
            return obj3;
          }
        }
      }
      const tmp11Result2 = StageChannelRichPresenceUtils;
      if (tmp11Result2.isStageActivity(name)) {
        if (null != tmp2) {
          const obj5 = { text: tmp2, tooltip: intl6.formatToPlainString(intl9.t.pW3Ip3, obj6) };
          intl6 = tmp11(1114).intl;
          obj17 = obj5;
          obj6 = { name: tmp2 };
        }
        return obj17;
      }
      let type2;
      if (name != null) {
        type2 = name.type;
      }
      if (type2 === ActivityTypes.ActivityTypes.LISTENING) {
        if (null != tmp16) {
          const obj7 = { text: tmp16, tooltip: intl5.formatToPlainString(intl9.t.Vnuxue, obj8) };
          intl5 = tmp11(1114).intl;
          obj17 = obj7;
          obj8 = { name: tmp16 };
        }
      }
      if (isCrunchyrollActivityDefault(name)) {
        if (flag) {
          if (null != tmp5) {
            const obj9 = { text: tmp5, tooltip: intl4.formatToPlainString(intl9.t.pW3Ip3, obj10) };
            intl4 = tmp11(1114).intl;
            obj17 = obj9;
            obj10 = { name: tmp5 };
          }
        }
      }
      let type3;
      if (name != null) {
        type3 = name.type;
      }
      if (type3 === ActivityTypes.ActivityTypes.WATCHING) {
        if (null != tmp16) {
          const obj11 = { text: tmp16, tooltip: intl3.formatToPlainString(intl9.t.pW3Ip3, obj12) };
          intl3 = tmp11(1114).intl;
          obj17 = obj11;
          obj12 = { name: tmp16 };
        }
      }
      let type4;
      if (name != null) {
        type4 = name.type;
      }
      if (type4 === ActivityTypes.ActivityTypes.COMPETING) {
        if (null != tmp16) {
          const obj13 = { text: tmp16, tooltip: intl2.formatToPlainString(intl9.t.QQ2wVE, obj14) };
          intl2 = tmp11(1114).intl;
          obj17 = obj13;
          obj14 = { name: tmp16 };
        }
      }
      let type5;
      if (name != null) {
        type5 = name.type;
      }
      if (type5 === ActivityTypes.ActivityTypes.STREAMING) {
        if (null != tmp16) {
          const obj15 = { text: tmp16, tooltip: intl.formatToPlainString(intl9.t["0wJXSh"], obj16) };
          intl = tmp11(1114).intl;
          obj17 = obj15;
          obj16 = { name: tmp16 };
        }
      }
      obj17 = {};
    }
  }
  const text = tmp20(10741)(tmp2);
  return { text, tooltip: text };
};
