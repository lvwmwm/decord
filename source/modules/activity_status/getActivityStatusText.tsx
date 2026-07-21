// Module ID: 9070
// Function ID: 71138
// Name: getActivityStatusText
// Dependencies: []
// Exports: default

// Module 9070 (getActivityStatusText)
const ActivityTypes = require(dependencyMap[0]).ActivityTypes;
const _module = require(dependencyMap[8]);
const result = _module.fileFinishedImporting("modules/activity_status/getActivityStatusText.tsx");

export default function getActivityStatusText(name) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  name = undefined;
  if (null != name) {
    name = name.name;
  }
  let tmp2 = null;
  if ("" !== name) {
    let name1;
    if (null != name) {
      name1 = name.name;
    }
    tmp2 = name1;
  }
  let details;
  if (null != name) {
    details = name.details;
  }
  let tmp5 = null;
  if ("" !== details) {
    let details1;
    if (null != name) {
      details1 = name.details;
    }
    tmp5 = details1;
  }
  let state;
  if (null != name) {
    state = name.state;
  }
  let tmp8 = null;
  if ("" !== state) {
    let state1;
    if (null != name) {
      state1 = name.state;
    }
    tmp8 = state1;
  }
  let type;
  if (null != name) {
    type = name.type;
  }
  let tmp11 = tmp2;
  if (type === ActivityTypes.STREAMING) {
    tmp11 = tmp2;
    if (null != tmp5) {
      tmp11 = tmp5;
    }
  }
  let status_display_type;
  if (null != name) {
    status_display_type = name.status_display_type;
  }
  if (status_display_type !== require(dependencyMap[1]).StatusDisplayTypes.NAME) {
    let status_display_type1;
    if (null != name) {
      status_display_type1 = name.status_display_type;
    }
    if (status_display_type1 !== require(dependencyMap[1]).StatusDisplayTypes.STATE) {
      let status_display_type2;
      if (null != name) {
        status_display_type2 = name.status_display_type;
      }
      let tmp13 = tmp11;
      if (tmp20) {
        tmp13 = tmp5;
      }
      const tmp20 = status_display_type2 === require(dependencyMap[1]).StatusDisplayTypes.DETAILS && null != tmp5;
    } else {
      tmp13 = tmp8;
    }
  } else {
    tmp13 = tmp2;
  }
  if (importDefault(dependencyMap[2])(name)) {
    const tmp56 = importDefault(dependencyMap[3])(tmp2);
    let obj = { text: tmp56, tooltip: tmp56 };
    return obj;
  } else {
    let type1;
    if (null != name) {
      type1 = name.type;
    }
    if (type1 === ActivityTypes.PLAYING) {
      if (null != tmp13) {
        obj = { text: tmp13 };
        const intl8 = require(dependencyMap[4]).intl;
        const obj1 = { game: tmp13 };
        obj.tooltip = intl8.formatToPlainString(require(dependencyMap[4]).t.lFApmz, obj1);
        return obj;
      }
    }
    if (importDefault(dependencyMap[5])(name)) {
      if (flag) {
        if (null != tmp8) {
          const parts = tmp8.split("; ");
          let joined;
          if (null != parts) {
            joined = parts.join(", ");
          }
          const obj2 = { text: joined };
          const intl7 = require(dependencyMap[4]).intl;
          const obj3 = { name: joined };
          obj2.tooltip = intl7.formatToPlainString(require(dependencyMap[4]).t.Vnuxue, obj3);
          return obj2;
        }
      }
    }
    obj = require(dependencyMap[6]);
    if (obj.isStageActivity(name)) {
      if (null != tmp2) {
        const obj4 = { text: tmp2 };
        const intl6 = require(dependencyMap[4]).intl;
        const obj5 = { name: tmp2 };
        obj4.tooltip = intl6.formatToPlainString(require(dependencyMap[4]).t.pW3Ip3, obj5);
        let obj16 = obj4;
      }
      return obj16;
    }
    let type2;
    if (null != name) {
      type2 = name.type;
    }
    if (type2 === ActivityTypes.LISTENING) {
      if (null != tmp13) {
        const obj6 = { text: tmp13 };
        const intl5 = require(dependencyMap[4]).intl;
        const obj7 = { name: tmp13 };
        obj6.tooltip = intl5.formatToPlainString(require(dependencyMap[4]).t.Vnuxue, obj7);
        obj16 = obj6;
      }
    }
    if (importDefault(dependencyMap[7])(name)) {
      if (flag) {
        if (null != tmp5) {
          const obj8 = { text: tmp5 };
          const intl4 = require(dependencyMap[4]).intl;
          const obj9 = { name: tmp5 };
          obj8.tooltip = intl4.formatToPlainString(require(dependencyMap[4]).t.pW3Ip3, obj9);
          obj16 = obj8;
        }
      }
    }
    let type3;
    if (null != name) {
      type3 = name.type;
    }
    if (type3 === ActivityTypes.WATCHING) {
      if (null != tmp13) {
        const obj10 = { text: tmp13 };
        const intl3 = require(dependencyMap[4]).intl;
        const obj11 = { name: tmp13 };
        obj10.tooltip = intl3.formatToPlainString(require(dependencyMap[4]).t.pW3Ip3, obj11);
        obj16 = obj10;
      }
    }
    let type4;
    if (null != name) {
      type4 = name.type;
    }
    if (type4 === ActivityTypes.COMPETING) {
      if (null != tmp13) {
        const obj12 = { text: tmp13 };
        const intl2 = require(dependencyMap[4]).intl;
        const obj13 = { name: tmp13 };
        obj12.tooltip = intl2.formatToPlainString(require(dependencyMap[4]).t.QQ2wVE, obj13);
        obj16 = obj12;
      }
    }
    let type5;
    if (null != name) {
      type5 = name.type;
    }
    if (type5 === ActivityTypes.STREAMING) {
      if (null != tmp13) {
        const obj14 = { text: tmp13 };
        const intl = require(dependencyMap[4]).intl;
        const obj15 = { name: tmp13 };
        obj14.tooltip = intl.formatToPlainString(require(dependencyMap[4]).t.0wJXSh, obj15);
        obj16 = obj14;
      }
    }
    obj16 = {};
  }
};
