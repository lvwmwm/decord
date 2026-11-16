// Module ID: 12822
// Function ID: 12823
// Name: ConjureClarification
// Dependencies: [5019, 5112, 1385, 1072, 1113, 4026, 5808, 12823, 2]
// Exports: clarificationAnswerAttachments, clarificationAnswersPayload, clarificationChannelEntities, clarificationChannelType, clarificationDraftAnswer, clarificationDraftPlaceholder, clarificationEntities, clarificationPickerPlaceholder, entityAnswer, followingClarificationStep, formatClarificationAnswers, isClarificationComplete, isTypedClarificationQuestion, liveClarification, nextClarificationStep, skippedClarificationAnswers, submitClarificationAnswers, toggleClarificationOption, uploadNoteAnswer

// Module 12822 (ConjureClarification)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, optionIds, user;

let items;
let items1;
let items2;
let items3;
let items4;
const f104452 = (answer) => {
  let tmp = null != answer.answer;
  if (tmp) {
    const str = answer.answer.text;
    tmp = "" !== str.trim();
  }
  return tmp;
};
const f104453 = (answer) => {
  const sum = answer.index + 1;
  const str = answer.answer.text;
  return "" + sum + ". " + answer.question.question + " \u2192 " + str.trim();
};
function multiSelectAnswer(options, answeredOptionIdsResult, str, conjureOwnImages) {
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
const ChannelTypes = Constants.ChannelTypes;
let closure_7 = { [ChannelTypes.GUILD_TEXT]: "text", [ChannelTypes.GUILD_VOICE]: "voice", [ChannelTypes.GUILD_ANNOUNCEMENT]: "announcement", [ChannelTypes.GUILD_STAGE_VOICE]: "stage", [ChannelTypes.GUILD_FORUM]: "forum", [ChannelTypes.GUILD_MEDIA]: "media" };
let closure_8 = { channel: "#", role: "@", user: "@", project: "", server: "" };
let obj = { channel: items, role: items1, user: items2, project: items3, server: items4 };
items = [_modDef4026["9+dfPT"], _modDef4026.pGSJqE];
items1 = [_modDef4026["2VkCoD"], _modDef4026.c8YlX8];
items2 = [_modDef4026.GZIAxl, _modDef4026["4bptbQ"]];
items3 = [_modDef4026.twlOb6, _modDef4026.twlOb6];
items4 = [_modDef4026.ZWXDeI, _modDef4026.ZWXDeI];
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
  const tmp4 = _modDef4026;
  return string(tmp2 ? tmp4.yLN1x6 : tmp4["tOC+tn"]);
}
export function isClarificationComplete(questions, arg1) {
  let closure_0 = arg1;
  questions = questions.questions;
  return questions.every((optional) => {
    let tmp2 = true === optional.optional;
    if (!tmp2) {
      let tmp4 = null != tmp;
      if (tmp4) {
        const str = closure_0[optional.id].text;
        tmp4 = "" !== str.trim();
      }
      tmp2 = tmp4;
    }
    return tmp2;
  });
}
export function nextClarificationStep(questions, arg1, arg2) {
  let result;
  questions = questions.questions;
  let num = 1;
  if (1 <= questions.length) {
    while (true) {
      result = (arg2 + num) % questions.length;
      let tmp2 = arg1[questions[result].id];
      let tmp3 = true === questions[result].optional;
      if (!tmp3) {
        let tmp5 = null != tmp2;
        if (tmp5) {
          let str = tmp2.text;
          tmp5 = "" !== str.trim();
        }
        tmp3 = tmp5;
      }
      if (!tmp3) {
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
      while (true) {
        let result = (bound + num) % questions.length;
        let tmp2 = arg1[questions[result].id];
        let tmp3 = true === questions[result].optional;
        if (!tmp3) {
          let tmp5 = null != tmp2;
          if (tmp5) {
            let str = tmp2.text;
            tmp5 = "" !== str.trim();
          }
          tmp3 = tmp5;
        }
        sum = result;
        if (!tmp3) {
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
export function skippedClarificationAnswers(clarification, arg1, bound) {
  const tmp = clarification.questions[bound];
  const id = tmp;
  let optional;
  if (tmp != null) {
    optional = tmp.optional;
  }
  if (true !== optional) {
    return null;
  } else {
    let sum;
    let tmp10;
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(arg1);
    const fromEntriesResult = fromEntries(entries.filter((item) => {
      let tmp;
      [tmp] = item;
      return tmp !== id.id;
    }));
    if (bound < clarification.questions.length - 1) {
      sum = bound + 1;
    } else {
      const questions = clarification.questions;
      let num = 1;
      sum = null;
      if (1 <= questions.length) {
        while (true) {
          let result = (bound + num) % questions.length;
          let tmp4 = fromEntriesResult[questions[result].id];
          let tmp5 = true === questions[result].optional;
          if (!tmp5) {
            let tmp7 = null != tmp4;
            if (tmp7) {
              let str = tmp4.text;
              tmp7 = "" !== str.trim();
            }
            tmp5 = tmp7;
          }
          sum = result;
          if (!tmp5) {
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
    if (null != sum) {
      tmp10 = fromEntriesResult;
    } else {
      const questions1 = clarification.questions;
      const mapped = questions1.map((question, index) => ({ question, index, answer: closure_0[question.id] }));
      const found = mapped.filter(f104452);
      const mapped1 = found.map(f104453);
      tmp10 = null;
    }
    return tmp10;
  }
}
export function formatClarificationAnswers(questions, arg1) {
  let closure_0 = arg1;
  questions = questions.questions;
  const mapped = questions.map((question, index) => ({ question, index, answer: closure_0[question.id] }));
  const found = mapped.filter(f104452);
  const mapped1 = found.map(f104453);
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
export { multiSelectAnswer };
export function uploadNoteAnswer(upload, kind, str) {
  let intl;
  let closure_0 = kind;
  let tmp = null;
  if (true === upload.upload) {
    tmp = null;
    if (true !== upload.multi_select) {
      tmp = null;
      if (null != kind) {
        tmp = kind;
        if ("option" !== kind.kind) {
          tmp = kind;
          if ("image" !== kind.kind) {
            tmp = null;
            if ("multi" === kind.kind) {
              if (null != kind.attachment) {
                const obj2 = { kind: "image", attachment: kind.attachment, text: intl.string(_modDef4026.wTsP5l) };
                intl = intl2.intl;
                tmp = obj2;
              } else {
                const options = upload.options;
                const found = options.find((id) => {
                  optionIds = optionIds.optionIds;
                  return optionIds.includes(id.id);
                });
                let tmp3 = null;
                if (null != found) {
                  obj = { kind: "option", optionId: null, text: null };
                  ({ id: obj.optionId, label: obj.text } = found);
                  tmp3 = obj;
                }
                tmp = tmp3;
              }
            }
          }
        }
      }
    }
  }
  let tmp7 = null;
  if (null != tmp) {
    let tmp13;
    if ("" === str.trim()) {
      kind = undefined;
      if (kind != null) {
        kind = kind.kind;
      }
      let tmp16 = null;
      if ("multi" === kind) {
        tmp16 = tmp;
      }
      tmp13 = tmp16;
    } else if ("option" === tmp.kind) {
      const items = [tmp.optionId];
      tmp13 = multiSelectAnswer(upload, items, str);
    } else {
      tmp13 = multiSelectAnswer(upload, [], str, tmp);
    }
    tmp7 = tmp13;
  }
  return tmp7;
}
export function clarificationChannelType(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = closure_7[arg0];
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
    tmp = f104464(id);
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
        tmp15 = closure_2_7[type];
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
  const f104464 = () => {
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
    tmp = f104464(id);
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
        tmp15 = closure_2_7[type];
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
      const tmp = closure_8;
      const tmp2 = input;
      if (name.startsWith(closure_8[input])) {
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
  const found = mapped.filter(f104452);
  const mapped1 = found.map(f104453);
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
export function clarificationDraftAnswer(entityAnswerResult, uploadNoteAnswerResult, str) {
  if (null != entityAnswerResult) {
    let tmp6 = null;
    if ("" !== entityAnswerResult.text) {
      tmp6 = entityAnswerResult;
    }
    return tmp6;
  } else if (null != uploadNoteAnswerResult) {
    let tmp5 = null;
    if ("" !== uploadNoteAnswerResult.text) {
      tmp5 = uploadNoteAnswerResult;
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
