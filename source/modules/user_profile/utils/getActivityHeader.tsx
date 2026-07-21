// Module ID: 11924
// Function ID: 92254
// Name: getActivityHeader
// Dependencies: []
// Exports: default

// Module 11924 (getActivityHeader)
const _module = require(dependencyMap[0]);
({ ActivityTypes: closure_3, PlatformTypes: closure_4 } = _module);
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_profile/utils/getActivityHeader.tsx");

export default function getActivityHeader(session_id) {
  const tmp = importDefault(dependencyMap[1])(session_id.session_id);
  const tmp2 = importDefault(dependencyMap[2])(session_id);
  if (null != tmp2) {
    const icon = tmp2.icon;
  }
  let name;
  if (null != tmp2) {
    name = tmp2.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  if (session_id.type === constants.PLAYING) {
    let type;
    if (null != tmp2) {
      type = tmp2.type;
    }
    if (type === constants2.XBOX) {
      let obj = {};
      const intl21 = require(dependencyMap[3]).intl;
      obj = {};
      const intl22 = require(dependencyMap[3]).intl;
      obj.platform = intl22.string(require(dependencyMap[3]).t.Nfvo72);
      obj.text = intl21.formatToPlainString(require(dependencyMap[3]).t.A17aM8, obj);
      obj.platformIcon = icon;
      obj.platformLabel = str;
      return obj;
    }
  }
  if (session_id.type === constants.PLAYING) {
    let type1;
    if (null != tmp2) {
      type1 = tmp2.type;
    }
    if (type1 === constants2.PLAYSTATION) {
      const obj1 = {};
      const intl19 = require(dependencyMap[3]).intl;
      const obj2 = {};
      const intl20 = require(dependencyMap[3]).intl;
      obj2.platform = intl20.string(require(dependencyMap[3]).t.fFl4jo);
      obj1.text = intl19.formatToPlainString(require(dependencyMap[3]).t.A17aM8, obj2);
      obj1.platformIcon = icon;
      obj1.platformLabel = str;
      return obj1;
    }
  }
  if (session_id.type === constants.PLAYING) {
    let type2;
    if (null != tmp2) {
      type2 = tmp2.type;
    }
    if (type2 === constants2.META_QUEST_OR_HORIZON) {
      const obj3 = {};
      const intl17 = require(dependencyMap[3]).intl;
      const obj4 = {};
      const intl18 = require(dependencyMap[3]).intl;
      const string2 = intl18.string;
      const t2 = require(dependencyMap[3]).t;
      if (tmp64) {
        let string2Result = string2(t2.BrHQaq);
      } else {
        string2Result = string2(t2.p6vL0e);
      }
      obj4.platform = string2Result;
      obj3.text = intl17.formatToPlainString(require(dependencyMap[3]).t.A17aM8, obj4);
      obj3.platformIcon = icon;
      obj3.platformLabel = str;
      return obj3;
    }
  }
  if (session_id.type === constants.WATCHING) {
    let type3;
    if (null != tmp2) {
      type3 = tmp2.type;
    }
    if (type3 === constants2.META_QUEST_OR_HORIZON) {
      const obj5 = {};
      const intl15 = require(dependencyMap[3]).intl;
      const obj6 = {};
      const intl16 = require(dependencyMap[3]).intl;
      const string = intl16.string;
      const t = require(dependencyMap[3]).t;
      if (tmp57) {
        let stringResult = string(t.BrHQaq);
      } else {
        stringResult = string(t.p6vL0e);
      }
      obj6.platform = stringResult;
      obj5.text = intl15.formatToPlainString(require(dependencyMap[3]).t.ENbTKQ, obj6);
      obj5.platformIcon = icon;
      obj5.platformLabel = str;
      return obj5;
    }
  }
  if (session_id.type === constants.STREAMING) {
    let type4;
    if (null != tmp2) {
      type4 = tmp2.type;
    }
    if (type4 === constants2.TWITCH) {
      const obj7 = {};
      const intl13 = require(dependencyMap[3]).intl;
      const obj8 = {};
      const intl14 = require(dependencyMap[3]).intl;
      obj8.name = intl14.string(require(dependencyMap[3]).t.q4pBG3);
      obj7.text = intl13.formatToPlainString(require(dependencyMap[3]).t.4CQq9Q, obj8);
      obj7.platformIcon = icon;
      obj7.platformLabel = str;
      return obj7;
    }
  }
  if (session_id.type === constants.STREAMING) {
    let type5;
    if (null != tmp2) {
      type5 = tmp2.type;
    }
    if (type5 === constants2.YOUTUBE) {
      const obj9 = {};
      const intl11 = require(dependencyMap[3]).intl;
      const obj10 = {};
      const intl12 = require(dependencyMap[3]).intl;
      obj10.name = intl12.string(require(dependencyMap[3]).t.aS6cK4);
      obj9.text = intl11.formatToPlainString(require(dependencyMap[3]).t.4CQq9Q, obj10);
      obj9.platformIcon = icon;
      obj9.platformLabel = str;
      return obj9;
    }
  }
  if (null != tmp) {
    type = session_id.type;
    if (constants.PLAYING === type) {
      let Dzgz4u = require(dependencyMap[3]).t.A17aM8;
    } else if (constants.WATCHING === type) {
      Dzgz4u = require(dependencyMap[3]).t.ENbTKQ;
    } else if (constants.LISTENING === type) {
      Dzgz4u = require(dependencyMap[3]).t.EcHzWI;
    } else if (constants.COMPETING === type) {
      Dzgz4u = require(dependencyMap[3]).t.ikpHeS;
    } else if (constants.STREAMING === type) {
      Dzgz4u = require(dependencyMap[3]).t.Dzgz4u;
    }
    if (undefined !== Dzgz4u) {
      const obj11 = {};
      const intl10 = require(dependencyMap[3]).intl;
      const obj12 = { platform: tmp74 };
      obj11.text = intl10.formatToPlainString(Dzgz4u, obj12);
      obj11.platformIcon = icon;
      obj11.platformLabel = str;
      return obj11;
    }
    const tmp74 = importDefault(dependencyMap[5])(tmp, session_id);
  }
  if (session_id.type === constants.PLAYING) {
    const obj13 = {};
    const intl9 = require(dependencyMap[3]).intl;
    obj13.text = intl9.string(require(dependencyMap[3]).t.BMTj28);
    obj13.platformIcon = icon;
    obj13.platformLabel = str;
    obj = obj13;
  } else if (session_id.type === constants.STREAMING) {
    const obj14 = {};
    const intl8 = require(dependencyMap[3]).intl;
    obj14.text = intl8.string(require(dependencyMap[3]).t.Jpkr/q);
    obj14.platformIcon = icon;
    obj14.platformLabel = str;
    obj = obj14;
  } else {
    if (obj29.isStageActivity(session_id)) {
      const obj15 = {};
      const intl7 = require(dependencyMap[3]).intl;
      const obj16 = { name: session_id.name };
      obj15.text = intl7.formatToPlainString(require(dependencyMap[3]).t.pW3Ip3, obj16);
      obj = obj15;
    } else {
      if (session_id.type === constants.LISTENING) {
        if (null != session_id.details) {
          const obj17 = {};
          const intl6 = require(dependencyMap[3]).intl;
          const obj18 = { name: session_id.name };
          obj17.text = intl6.formatToPlainString(require(dependencyMap[3]).t.b+lA5+, obj18);
          obj17.platformIcon = icon;
          obj17.platformLabel = str;
          obj = obj17;
        }
      }
      if (session_id.type === constants.LISTENING) {
        const obj19 = {};
        const intl5 = require(dependencyMap[3]).intl;
        obj19.text = intl5.string(require(dependencyMap[3]).t.dBISa6);
        obj19.platformIcon = icon;
        obj19.platformLabel = str;
        obj = obj19;
      } else {
        if (session_id.type === constants.WATCHING) {
          if (null != session_id.details) {
            const obj20 = {};
            const intl4 = require(dependencyMap[3]).intl;
            const obj21 = { name: session_id.name };
            obj20.text = intl4.formatToPlainString(require(dependencyMap[3]).t.mqdfDc, obj21);
            obj20.platformIcon = icon;
            obj20.platformLabel = str;
            obj = obj20;
          }
        }
        if (session_id.type === constants.WATCHING) {
          const obj22 = {};
          const intl3 = require(dependencyMap[3]).intl;
          obj22.text = intl3.string(require(dependencyMap[3]).t.GpNXjC);
          obj22.platformIcon = icon;
          obj22.platformLabel = str;
          obj = obj22;
        } else {
          if (session_id.type === constants.COMPETING) {
            if (null != session_id.details) {
              const obj23 = {};
              const intl2 = require(dependencyMap[3]).intl;
              const obj24 = { name: session_id.name };
              obj23.text = intl2.formatToPlainString(require(dependencyMap[3]).t.oHF7Ch, obj24);
              obj23.platformIcon = icon;
              obj23.platformLabel = str;
              obj = obj23;
            }
          }
          if (session_id.type === constants.COMPETING) {
            const obj25 = {};
            const intl = require(dependencyMap[3]).intl;
            obj25.text = intl.string(require(dependencyMap[3]).t.OzCsIA);
            obj25.platformIcon = icon;
            obj25.platformLabel = str;
            obj = obj25;
          } else {
            obj = { text: undefined, platformIcon: icon, platformLabel: str };
          }
        }
      }
    }
    const obj29 = require(dependencyMap[6]);
  }
  return obj;
};
