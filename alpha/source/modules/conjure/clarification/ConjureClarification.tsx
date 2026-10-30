// Module ID: 12549
// Function ID: 12550
// Name: ConjureClarification
// Dependencies: [4858, 4951, 1384, 1072, 1114, 3865, 5647, 12550, 2]
// Exports: clarificationAnswerAttachments, clarificationAnswersPayload, clarificationChannelEntities, clarificationChannelType, clarificationDraftAnswer, clarificationDraftPlaceholder, clarificationEntities, clarificationPickerPlaceholder, entityAnswer, followingClarificationStep, formatClarificationAnswers, isClarificationComplete, isTypedClarificationQuestion, liveClarification, multiSelectAnswer, nextClarificationStep, submitClarificationAnswers, toggleClarificationOption

// Module 12549 (ConjureClarification)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, user;

let items;
let items1;
let items2;
let items3;
let items4;
const f102297 = (answer) => {
  let tmp = null != answer.answer;
  if (tmp) {
    const str = answer.answer.text;
    tmp = "" !== str.trim();
  }
  return tmp;
};
const f102298 = (answer) => {
  const sum = answer.index + 1;
  const str = answer.answer.text;
  return "" + sum + ". " + answer.question.question + " \u2192 " + str.trim();
};
const ChannelTypes = Constants.ChannelTypes;
let closure_6 = { [ChannelTypes.GUILD_TEXT]: "text", [ChannelTypes.GUILD_VOICE]: "voice", [ChannelTypes.GUILD_ANNOUNCEMENT]: "announcement", [ChannelTypes.GUILD_STAGE_VOICE]: "stage", [ChannelTypes.GUILD_FORUM]: "forum", [ChannelTypes.GUILD_MEDIA]: "media" };
let closure_7 = { channel: "#", role: "@", user: "@", project: "", server: "" };
let obj = { channel: items, role: items1, user: items2, project: items3, server: items4 };
items = [_modDef3865["9+dfPT"], _modDef3865.pGSJqE];
items1 = [_modDef3865["2VkCoD"], _modDef3865.c8YlX8];
items2 = [_modDef3865.GZIAxl, _modDef3865["4bptbQ"]];
items3 = [_modDef3865.twlOb6, _modDef3865.twlOb6];
items4 = [_modDef3865.ZWXDeI, _modDef3865.ZWXDeI];
let result = size.fileFinishedImporting("modules/conjure/clarification/ConjureClarification.tsx");

export function liveClarification(memo) {
  let tmp2;
  let diff = memo.length - 1;
  if (0 <= diff) {
    while (true) {
      tmp2 = memo[diff];
      if (null != tmp2.clarification) {
        if (0 !== tmp2.clarification.questions.length) {
          break;
        }
      }
      diff = diff - 1;
    }
    let settled_at = tmp2.clarificationAt;
    if (settled_at == null) {
      settled_at = tmp2.settled_at;
    }
    let sum = diff + 1;
    if (sum < memo.length) {
      while (true) {
        if ("user" === memo[sum].role) {
          if (null == settled_at) {
            break;
          } else if (memo[sum].created_at > settled_at) {
            break;
          }
        }
        sum = sum + 1;
      }
      return null;
    }
    return tmp2.clarification;
  }
  return null;
}
export function isTypedClarificationQuestion(options) {
  return 0 === options.options.length && null == options.input;
}
export function clarificationDraftPlaceholder(options) {
  const intl = intl2.intl;
  let tmp2 = 0 === options.options.length;
  const string = intl.string;
  if (tmp2) {
    tmp2 = null == options.input;
  }
  const tmp4 = _modDef3865;
  return string(tmp2 ? tmp4.yLN1x6 : tmp4["tOC+tn"]);
}
export function isClarificationComplete(questions, arg1) {
  let closure_0 = arg1;
  questions = questions.questions;
  return questions.every((item) => {
    let tmp2 = null != tmp;
    if (tmp2) {
      const str = closure_0[item.id].text;
      tmp2 = "" !== str.trim();
    }
    return tmp2;
  });
}
export function nextClarificationStep(questions, arg1, arg2) {
  questions = questions.questions;
  let num = 1;
  if (1 <= questions.length) {
    const result = (arg2 + num) % questions.length;
    while (null != arg1[questions[result].id]) {
      let str = tmp2.text;
      if ("" === str.trim()) {
        break;
      } else {
        num = num + 1;
      }
    }
    return result;
  }
  return null;
}
export function followingClarificationStep(clarification, arg1, bound) {
  let sum;
  if (bound < clarification.questions.length - 1) {
    sum = bound + 1;
  } else {
    const questions = clarification.questions;
    let num = 1;
    sum = null;
    if (1 <= questions.length) {
      const result = (bound + num) % questions.length;
      sum = result;
      while (null != arg1[questions[result].id]) {
        let str2 = tmp4.text;
        sum = result;
        if ("" === str2.trim()) {
          break;
        } else {
          let sum1 = num + 1;
          num = sum1;
          sum = null;
          if (sum1 > questions.length) {
            break;
          }
        }
      }
    }
  }
  return sum;
}
export function formatClarificationAnswers(questions, arg1) {
  let closure_0 = arg1;
  questions = questions.questions;
  const mapped = questions.map((question, index) => ({ question, index, answer: closure_0[question.id] }));
  const found = mapped.filter(f102297);
  const mapped1 = found.map(f102298);
  return mapped1.join("\n");
}
export function toggleClarificationOption(options, arr, id) {
  let closure_0 = id;
  if (arr.includes(id)) {
    let found = arr.filter((item) => item !== id);
  } else {
    const items = [];
    items[HermesBuiltin.arraySpread(items, arr, 0)] = id;
    found = items;
  }
  options = options.options;
  const found1 = options.filter((id) => found.includes(id.id));
  return found1.map((id) => id.id);
}
export function multiSelectAnswer(options, answeredOptionIdsResult, str, conjureOwnImages) {
  let items;
  let items1;
  let items2;
  let obj2;
  let obj3;
  const trimmed = str.trim();
  options = options.options;
  const found = options.filter((id) => answeredOptionIdsResult.includes(id.id));
  const mapped = found.map((label) => label.label);
  obj = { kind: "multi", optionIds: answeredOptionIdsResult, text: items.join(", ") };
  if ("" === trimmed) {
    obj2 = {};
  } else {
    obj2 = { custom: trimmed };
  }
  const merged = Object.assign(obj2);
  if (null == conjureOwnImages) {
    obj3 = {};
  } else {
    obj3 = { attachment: conjureOwnImages.attachment };
  }
  const merged1 = Object.assign(obj3);
  items = [...mapped];
  if (null == conjureOwnImages) {
    items1 = [];
  } else {
    items1 = [conjureOwnImages.text];
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(items, items1, tmp7);
  if ("" === trimmed) {
    items2 = [];
  } else {
    items2 = [trimmed];
  }
  HermesBuiltin.arraySpread(items, items2, arraySpreadResult);
  return obj;
}
export function clarificationChannelType(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = closure_6[arg0];
  }
  return tmp;
}
export const MAX_CLARIFICATION_ENTITY_PICKS = 10;
export function clarificationEntities(project, items, arg2, arg3) {
  let closure_0 = project;
  let closure_1 = arg2;
  let closure_2 = arg3;
  const substr = items.slice(0, 10);
  return substr.map((id) => {
    let obj6;
    let tmp;
    let closure_0 = id;
    obj = { id, name: tmp };
    tmp = f102308(id);
    if (tmp == null) {
      const found = closure_2.find((id) => id.id === closure_0);
      let name;
      if (found != null) {
        name = found.name;
      }
      tmp = name;
    }
    if (tmp == null) {
      tmp = id;
    }
    if ("channel" === channel) {
      let obj3;
      channel = channel.getChannel(id);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let tmp15;
      if (null != type) {
        tmp15 = closure_2_6[type];
      }
      const obj2 = { kind: channel };
      if (null == tmp15) {
        obj3 = {};
      } else {
        obj3 = { channel_type: tmp15 };
      }
      const merged = Object.assign(obj3);
      obj6 = obj2;
    } else if ("user" === channel) {
      let obj5;
      user = user.getUser(id);
      let username;
      if (user != null) {
        username = user.username;
      }
      const obj4 = { kind: channel };
      if (null == username) {
        obj5 = {};
      } else {
        obj5 = { username };
      }
      const merged1 = Object.assign(obj5);
      obj6 = obj4;
    } else {
      obj6 = { kind: channel };
    }
    const merged2 = Object.assign(obj6);
    return obj;
  });
}
export function clarificationChannelEntities(stateFromStores1, arg1) {
  let closure_0 = stateFromStores1;
  const items = [stateFromStores1.id];
  let channel = "channel";
  const f102308 = () => {
    obj = channel(dependencyMap[6]);
    return obj.computeChannelName(channel, user, RelationshipStore);
  };
  let closure_2 = arg1;
  const substr = items.slice(0, 10);
  return substr.map((id) => {
    let obj6;
    let tmp;
    let closure_0 = id;
    obj = { id, name: tmp };
    tmp = f102308(id);
    if (tmp == null) {
      const found = closure_2.find((id) => id.id === closure_0);
      let name;
      if (found != null) {
        name = found.name;
      }
      tmp = name;
    }
    if (tmp == null) {
      tmp = id;
    }
    if ("channel" === channel) {
      let obj3;
      channel = channel.getChannel(id);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let tmp15;
      if (null != type) {
        tmp15 = closure_2_6[type];
      }
      const obj2 = { kind: channel };
      if (null == tmp15) {
        obj3 = {};
      } else {
        obj3 = { channel_type: tmp15 };
      }
      const merged = Object.assign(obj3);
      obj6 = obj2;
    } else if ("user" === channel) {
      let obj5;
      user = user.getUser(id);
      let username;
      if (user != null) {
        username = user.username;
      }
      const obj4 = { kind: channel };
      if (null == username) {
        obj5 = {};
      } else {
        obj5 = { username };
      }
      const merged1 = Object.assign(obj5);
      obj6 = obj4;
    } else {
      obj6 = { kind: channel };
    }
    const merged2 = Object.assign(obj6);
    return obj;
  });
}
export function entityAnswer(input, c10, str, guildId) {
  let items;
  let items1;
  let obj2;
  let obj3;
  let closure_0 = input;
  const trimmed = str.trim();
  obj = { kind: "entities", entities: c10, text: items.join(", ") };
  if (null == guildId) {
    obj2 = {};
  } else {
    obj2 = { guildId };
  }
  const merged = Object.assign(obj2);
  if ("" === trimmed) {
    obj3 = {};
  } else {
    obj3 = { custom: trimmed };
  }
  const merged1 = Object.assign(obj3);
  items = [
    ...c10.map((name) => {
      let name2;
      name = name.name;
      const tmp = closure_7;
      const tmp2 = input;
      if (name.startsWith(closure_7[input])) {
        name2 = name.name;
      } else {
        const _HermesInternal = HermesInternal;
        name2 = "" + tmp[tmp2] + name.name;
      }
      return name2;
    })
  ];
  if ("" === trimmed) {
    items1 = [];
  } else {
    items1 = [trimmed];
  }
  HermesBuiltin.arraySpread(items, items1, tmp6);
  return obj;
}
export function clarificationPickerPlaceholder(input, arg1) {
  const intl = intl2.intl;
  let num = 0;
  const string = intl.string;
  const tmp = obj[input];
  if (arg1) {
    num = 1;
  }
  return string(tmp[num]);
}
export function clarificationAnswerAttachments(questions, arg1) {
  let closure_0 = arg1;
  questions = questions.questions;
  return questions.flatMap((item) => {
    if (null != closure_0[item.id]) {
      const str = closure_0[item.id].text;
      if ("" !== str.trim()) {
        if ("image" === closure_0[item.id].kind) {
          const items = [closure_0[item.id].attachment];
          let items1 = items;
        } else {
          items1 = [];
        }
      }
      return [];
    }
  });
}
export function clarificationAnswersPayload(questions, arg1) {
  let closure_0 = arg1;
  questions = questions.questions;
  const flatMapResult = questions.flatMap((id) => {
    if (null != closure_0[id.id]) {
      const str9 = closure_0[id.id].text;
      if ("" !== str9.trim()) {
        let tmp2;
        let custom;
        let guildId;
        let attachment;
        if ("option" === closure_0[id.id].kind) {
          const items = [closure_0[id.id].optionId];
          tmp2 = items;
        } else {
          tmp2 = "multi" === tmp.kind ? tmp.optionIds : [];
        }
        if ("custom" === closure_0[id.id].kind) {
          const str5 = closure_0[id.id].text;
          custom = str5.trim();
        } else if ("multi" === closure_0[id.id].kind) {
          custom = tmp.custom;
        }
        const arr2 = "entities" === closure_0[id.id].kind ? closure_0[id.id].entities : [];
        if ("entities" === closure_0[id.id].kind) {
          if (arr2.length > 0) {
            guildId = tmp.guildId;
          }
        }
        if ("image" === closure_0[id.id].kind) {
          attachment = tmp.attachment;
        }
        obj = { question_id: id.id, option_ids: tmp2 };
        if (null != custom) {
          let obj9;
          let obj4;
          let obj6;
          let obj8;
          if ("" !== custom) {
            obj9 = { custom };
            const obj2 = { custom };
          }
          const merged = Object.assign(obj9);
          if (null != attachment) {
            obj4 = { attachment_id: attachment.id };
            const obj3 = { attachment_id: attachment.id };
          } else {
            obj4 = {};
          }
          const merged1 = Object.assign(obj4);
          if (arr2.length > 0) {
            obj6 = { entities: arr2 };
            const obj5 = { entities: arr2 };
          } else {
            obj6 = {};
          }
          const merged2 = Object.assign(obj6);
          if (null != guildId) {
            obj8 = { guild_id: guildId };
            const obj7 = { guild_id: guildId };
          } else {
            obj8 = {};
          }
          const merged3 = Object.assign(obj8);
          const items1 = [obj];
          return items1;
        }
        obj9 = {};
      }
    }
    return [];
  });
  let tmp = null;
  if (flatMapResult.length > 0) {
    tmp = { clarification_id: questions.id, answers: flatMapResult };
    obj = { clarification_id: questions.id, answers: flatMapResult };
  }
  return tmp;
}
export function submitClarificationAnswers(projectId, clarification, arg2, first1, onSubmit) {
  let closure_1 = arg2;
  dependencyMap = onSubmit;
  _require = arg2;
  let questions = clarification.questions;
  const mapped = questions.map((question, index) => ({ question, index, answer: closure_0[question.id] }));
  const found = mapped.filter(f102297);
  const mapped1 = found.map(f102298);
  const joined = mapped1.join("\n");
  if ("" !== joined) {
    let tmp2 = projectId;
    const tmp3 = first1;
    let tmp4 = _require;
    let tmp5 = dependencyMap;
    let obj2 = require("conjureClarificationLinks");
    obj2.sendAfterLinkingApps(projectId, clarification, arg2, first1, () => {
      clarification = closure_1;
      const questions = clarification.questions;
      const tmp = onSubmit;
      let tmp2 = joined;
      const flatMapResult = questions.flatMap((id) => {
        if (null != closure_0[id.id]) {
          const str9 = closure_0[id.id].text;
          if ("" !== str9.trim()) {
            let tmp2;
            let custom;
            let guildId;
            let attachment;
            if ("option" === closure_0[id.id].kind) {
              const items = [closure_0[id.id].optionId];
              tmp2 = items;
            } else {
              tmp2 = "multi" === tmp.kind ? tmp.optionIds : [];
            }
            if ("custom" === closure_0[id.id].kind) {
              const str5 = closure_0[id.id].text;
              custom = str5.trim();
            } else if ("multi" === closure_0[id.id].kind) {
              custom = tmp.custom;
            }
            const arr2 = "entities" === closure_0[id.id].kind ? closure_0[id.id].entities : [];
            if ("entities" === closure_0[id.id].kind) {
              if (arr2.length > 0) {
                guildId = tmp.guildId;
              }
            }
            if ("image" === closure_0[id.id].kind) {
              attachment = tmp.attachment;
            }
            obj = { question_id: id.id, option_ids: tmp2 };
            if (null != custom) {
              let obj9;
              let obj4;
              let obj6;
              let obj8;
              if ("" !== custom) {
                obj9 = { custom };
                const obj2 = { custom };
              }
              const merged = Object.assign(obj9);
              if (null != attachment) {
                obj4 = { attachment_id: attachment.id };
                const obj3 = { attachment_id: attachment.id };
              } else {
                obj4 = {};
              }
              const merged1 = Object.assign(obj4);
              if (arr2.length > 0) {
                obj6 = { entities: arr2 };
                const obj5 = { entities: arr2 };
              } else {
                obj6 = {};
              }
              const merged2 = Object.assign(obj6);
              if (null != guildId) {
                obj8 = { guild_id: guildId };
                const obj7 = { guild_id: guildId };
              } else {
                obj8 = {};
              }
              const merged3 = Object.assign(obj8);
              const items1 = [obj];
              return items1;
            }
            obj9 = {};
          }
        }
        return [];
      });
      let tmp5 = null;
      const tmp4 = closure_1;
      if (flatMapResult.length > 0) {
        obj = { clarification_id: tmp3.id, answers: flatMapResult };
        tmp5 = obj;
      }
      clarification = tmp4;
      const questions2 = tmp3.questions;
      return tmp(tmp2, tmp5, questions2.flatMap((item) => {
        if (null != closure_0[item.id]) {
          const str = closure_0[item.id].text;
          if ("" !== str.trim()) {
            if ("image" === closure_0[item.id].kind) {
              const items = [closure_0[item.id].attachment];
              let items1 = items;
            } else {
              items1 = [];
            }
          }
          return [];
        }
      }));
    });
  }
}
export function clarificationDraftAnswer(entityAnswerResult, multiSelectAnswerResult, str) {
  if (null != entityAnswerResult) {
    let tmp6 = null;
    if ("" !== entityAnswerResult.text) {
      tmp6 = entityAnswerResult;
    }
    return tmp6;
  } else if (null != multiSelectAnswerResult) {
    let tmp5 = null;
    if ("" !== multiSelectAnswerResult.text) {
      tmp5 = multiSelectAnswerResult;
    }
    return tmp5;
  } else {
    const trimmed = str.trim();
    let tmp4 = null;
    if ("" !== trimmed) {
      tmp4 = { kind: "custom", text: trimmed };
      obj = { kind: "custom", text: trimmed };
    }
    return tmp4;
  }
}
