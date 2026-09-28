// Module ID: 10347
// Function ID: 10348
// Name: getActivityStatusText
// Dependencies: [1074, 10348, 7158, 10349, 1115, 10350, 8817, 7792, 2]
// Exports: default

// Module 10347 (getActivityStatusText)
import Constants from "Constants" /* 1074 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7158 */;
import StatusDisplayTypes from "StatusDisplayTypes" /* 10348 */;
import size from "module_2" /* 2 */;

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activity_status/getActivityStatusText.tsx");

export default function getActivityStatusText(name) {
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
    if (status_display_type1 !== tmp15(10348).StatusDisplayTypes.STATE) {
      let status_display_type2;
      if (name != null) {
        status_display_type2 = name.status_display_type;
      }
      let tmp17 = tmp12;
      if (tmp20) {
        tmp17 = tmp5;
      }
      tmp20 = status_display_type2 === tmp15(10348).StatusDisplayTypes.DETAILS && null != tmp5;
    } else {
      tmp17 = tmp8;
    }
  } else {
    tmp17 = tmp2;
  }
  if (isEmbeddedActivityDefault(name)) {
    const tmp28 = tmp21(10349)(tmp2);
    const obj = { text: tmp28, tooltip: tmp28 };
    return obj;
  } else {
    let type1;
    if (name != null) {
      type1 = name.type;
    }
    if (type1 === tmp11.PLAYING) {
      if (null != tmp17) {
        const obj2 = { text: tmp17, tooltip: null };
        const intl8 = tmp15(1115).intl;
        const obj3 = { game: tmp17 };
        obj2.tooltip = intl8.formatToPlainString(tmp15(1115).t.lFApmz, obj3);
        return obj2;
      }
    }
    if (tmp21(10350)(name)) {
      if (flag) {
        if (null != tmp8) {
          const parts = tmp8.split("; ");
          let joined;
          if (parts != null) {
            joined = parts.join(", ");
          }
          const obj4 = { text: joined, tooltip: null };
          const intl7 = tmp15(1115).intl;
          const obj5 = { name: joined };
          obj4.tooltip = intl7.formatToPlainString(tmp15(1115).t.Vnuxue, obj5);
          return obj4;
        }
      }
    }
    if (tmp15Result.isStageActivity(name)) {
      if (null != tmp2) {
        const obj6 = { text: tmp2, tooltip: null };
        const intl6 = tmp15(1115).intl;
        const obj7 = { name: tmp2 };
        obj6.tooltip = intl6.formatToPlainString(tmp15(1115).t.pW3Ip3, obj7);
        let obj18 = obj6;
      }
      return obj18;
    }
    let type2;
    if (name != null) {
      type2 = name.type;
    }
    if (type2 === tmp11.LISTENING) {
      if (null != tmp17) {
        const obj8 = { text: tmp17, tooltip: null };
        const intl5 = tmp15(1115).intl;
        const obj9 = { name: tmp17 };
        obj8.tooltip = intl5.formatToPlainString(tmp15(1115).t.Vnuxue, obj9);
        obj18 = obj8;
      }
    }
    if (tmp21(7792)(name)) {
      if (flag) {
        if (null != tmp5) {
          const obj10 = { text: tmp5, tooltip: null };
          const intl4 = tmp15(1115).intl;
          const obj11 = { name: tmp5 };
          obj10.tooltip = intl4.formatToPlainString(tmp15(1115).t.pW3Ip3, obj11);
          obj18 = obj10;
        }
      }
    }
    let type3;
    if (name != null) {
      type3 = name.type;
    }
    if (type3 === tmp11.WATCHING) {
      if (null != tmp17) {
        const obj12 = { text: tmp17, tooltip: null };
        const intl3 = tmp15(1115).intl;
        const obj13 = { name: tmp17 };
        obj12.tooltip = intl3.formatToPlainString(tmp15(1115).t.pW3Ip3, obj13);
        obj18 = obj12;
      }
    }
    let type4;
    if (name != null) {
      type4 = name.type;
    }
    if (type4 === tmp11.COMPETING) {
      if (null != tmp17) {
        const obj14 = { text: tmp17, tooltip: null };
        const intl2 = tmp15(1115).intl;
        const obj15 = { name: tmp17 };
        obj14.tooltip = intl2.formatToPlainString(tmp15(1115).t.QQ2wVE, obj15);
        obj18 = obj14;
      }
    }
    let type5;
    if (name != null) {
      type5 = name.type;
    }
    if (type5 === tmp11.STREAMING) {
      if (null != tmp17) {
        const obj16 = { text: tmp17, tooltip: null };
        const intl = tmp15(1115).intl;
        const obj17 = { name: tmp17 };
        obj16.tooltip = intl.formatToPlainString(tmp15(1115).t["0wJXSh"], obj17);
        obj18 = obj16;
      }
    }
    obj18 = {};
    tmp15Result = tmp15(8817);
  }
};
