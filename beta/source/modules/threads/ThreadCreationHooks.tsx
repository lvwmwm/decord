// Module ID: 9449
// Function ID: 9450
// Name: ThreadCreationHooks
// Dependencies: [32, 5, 19, 7581, 502, 2045, 5139, 5010, 7960, 1118, 1078, 4783, 558, 7545, 7955, 7550, 568, 1119, 9450, 11, 1275, 8056, 9451, 7957, 1389, 5379, 9453, 8046, 4970, 7735, 5142, 577, 4642, 1095, 8032, 9536, 2]
// Exports: createThread

// Module 9449 (ThreadCreationHooks)
import HTTPUtils from "HTTPUtils" /* 1275 */;
import ThreadHooks from "ThreadHooks" /* 7545 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7735 */;
import MessageParserDefault from "MessageParser" /* 7955 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ForumActivePostStore from "ForumActivePostStore" /* 7581 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import DraftStore from "DraftStore" /* 5139 */;
import MessageStore from "MessageStore" /* 5010 */;

const require = globalThis.__r;

require = fn;
function getIsPrivate(threadSettingsDraft, privateThreadMode) {
  let tmp = privateThreadMode === obj.PrivateOnly;
  if (!tmp) {
    let flag = threadSettingsDraft.isPrivate;
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
}
function getDefaultThreadName(stateFromStores, parentMessageId) {
  let message = null;
  if (null != parentMessageId) {
    message = MessageStore.getMessage(stateFromStores.id, parentMessageId);
  }
  let contentMessage;
  if (message != null) {
    contentMessage = message.getContentMessage();
  }
  let str;
  if (contentMessage != null) {
    const embeds = contentMessage.embeds;
    if (embeds != null) {
      const first = embeds[0];
      if (first != null) {
        str = first.rawTitle;
      }
    }
  }
  if (str == null) {
    str = "";
  }
  let str2;
  if (message != null) {
    const poll = message.poll;
    if (poll != null) {
      const question = poll.question;
      if (question != null) {
        str2 = question.text;
      }
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  if ("" !== str) {
    let text = str;
    if (str.length > 40) {
      text = `${str.substring(0, 40)}...`;
    }
    return text;
  } else if ("" !== str2) {
    let text1 = str2;
    if (str2.length > 80) {
      text1 = `${str2.substring(0, 80)}...`;
    }
    return text1;
  } else {
    let str3;
    if (contentMessage != null) {
      str3 = contentMessage.content;
    }
    if (str3 == null) {
      str3 = "";
    }
    const tmp17 = importDefault;
    const str4 = MessageParserDefault.unparse(str3, stateFromStores.id, true);
    const tmp17Result = tmp17(7550);
    let str7 = tmp17(7550)(str4.split("\n")[0], true).replace(/^[ #-]+/, "");
    const items = [];
    const match = str7.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
    while (null != match) {
      if (null == match.index) {
        break;
      } else {
        let arr = items.push(str7.substring(0, match.index));
        let arr3 = items.push(match[0]);
        str7 = str7.substring(match.index + match[0].length);
        continue;
      }
    }
    items.push(str7);
    const first1 = items[0];
    let num4 = 1;
    let tmp12 = first1;
    let arr2 = first1;
    if (1 < items.length) {
      const sum = tmp12 + items[num4];
      arr2 = tmp12;
      while (sum.length <= 40) {
        num4 = num4 + 1;
        tmp12 = sum;
        arr2 = sum;
        if (num4 >= items.length) {
          break;
        }
      }
    }
    let text2 = arr2;
    if (arr2.length > 40) {
      text2 = `${arr2.substring(0, 40)}...`;
    }
    return text2;
  }
}
function buildMessageActivity(activity) {
  let session_id = activity.activity.session_id;
  if (null == session_id) {
    session_id = AuthenticationStore.getSessionId();
  }
  let tmp2 = null;
  if (null != session_id) {
    obj = { type: activity.type, session_id, target_user_id: activity.targetUserId, party_id: null };
    const party = activity.activity.party;
    let id;
    if (party != null) {
      id = party.id;
    }
    obj.party_id = id;
    tmp2 = obj;
  }
  return tmp2;
}
function sendMessage(id, arg1, items, arg3, fn) {
  if (null != fn) {
    if (null != arg3) {
      if (arg3.length > 0) {
        fn(id, arg3, arg1, items);
      }
    }
  }
  if (null != items) {
    if (items.length > 0) {
      const obj4 = MessageActionCreatorsDefault;
      id = id.id;
      const obj3 = { location: MessageSendLocation.THREAD_CREATION };
      let sendStickersResult = obj4.sendStickers(id, items, MessageParserDefault.parse(id, arg1), obj3);
    }
    return sendStickersResult;
  }
  obj = MessageActionCreatorsDefault;
  sendStickersResult = obj.sendMessage(id.id, MessageParserDefault.parse(id, arg1), undefined, { location: MessageSendLocation.THREAD_CREATION });
}
function createThread_() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_29 = async function _createThread_(arg0, arg1, arg2, arg3) {
  let forumLikeChannel = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  c10 = 0;
  c11 = 0;
  c9 = 0;
  return (async (arg0, value, arg2, arg3) => {
    closure_7 = tmp3;
    closure_6 = tmp6;
    closure_134_0 = forumLikeChannel;
    closure_134_1 = closure_1;
    closure_134_2 = closure_2;
    closure_134_4 = forumLikeChannel.isForumLikeChannel();
    await body();
    if (1 === tmp9) {
      c9 = 0;
      closure_134_8 = closure_8;
      body = closure_134_8.body;
      let code;
      if (body != null) {
        code = body.code;
      }
      if (code === closure_135_15.TOO_MANY_THREADS) {
        const intl9 = closure_135_0(closure_135_2[17]).intl;
        const string2 = intl9.string;
        const t2 = closure_135_0(closure_135_2[17]).t;
        if (closure_134_4) {
          let string2Result = string2(t2.vWNFkx);
        } else {
          string2Result = string2(t2["1KEdvB"]);
        }
        let obj7 = { title: string2Result, body: null };
        const intl10 = closure_135_0(closure_135_2[17]).intl;
        const string3 = intl10.string;
        let KGaiEK = closure_135_0(closure_135_2[17]).t;
        if (closure_134_4) {
          KGaiEK = KGaiEK.KGaiEK;
          let string3Result = string3(KGaiEK);
        } else {
          string3Result = string3(KGaiEK.P0wT5S);
        }
        obj7.body = string3Result;
        obj7 = closure_135_1(closure_135_2[30]).show(obj7);
        closure_135_1(closure_135_2[30]);
      } else {
        const body7 = closure_134_8.body;
        let code1;
        if (body7 != null) {
          code1 = body7.code;
        }
        if (code1 === closure_135_15.TOO_MANY_ANNOUNCEMENT_THREADS) {
          const obj8 = { title: null, body: null };
          const intl7 = closure_135_0(closure_135_2[17]).intl;
          obj8.title = intl7.string(closure_135_0(closure_135_2[17]).t["1KEdvB"]);
          const intl8 = closure_135_0(closure_135_2[17]).intl;
          obj8.body = intl8.string(closure_135_0(closure_135_2[17]).t.jDMxz2);
          closure_135_1(closure_135_2[30]).show(obj8);
          closure_135_1(closure_135_2[30]);
        } else {
          const body8 = closure_134_8.body;
          let code2;
          if (body8 != null) {
            code2 = body8.code;
          }
          if (code2 === closure_135_15.SLOWMODE_RATE_LIMITED) {
            const retry_after = closure_134_8.body.retry_after;
            c4 = retry_after;
            if (retry_after == null) {
              c4 = 0;
            }
            closure_134_5 = c4;
            if (closure_134_5 > 0) {
              closure_135_1(closure_135_2[31]).dispatch({ type: "SLOWMODE_SET_COOLDOWN", channelId: closure_134_0.id, slowmodeType: closure_135_12.CreateThread, cooldownMs: closure_134_5 * closure_135_1(closure_135_2[33]).Millis.SECOND });
              closure_135_1(closure_135_2[31]);
              { type: "SLOWMODE_SET_COOLDOWN", channelId: closure_134_0.id, slowmodeType: closure_135_12.CreateThread, cooldownMs: closure_134_5 * closure_135_1(closure_135_2[33]).Millis.SECOND };
            }
          } else if (429 === closure_134_8.status) {
            const intl5 = closure_135_0(closure_135_2[17]).intl;
            const string = intl5.string;
            const t = closure_135_0(closure_135_2[17]).t;
            if (closure_134_4) {
              let stringResult = string(t.vWNFkx);
            } else {
              stringResult = string(t["1KEdvB"]);
            }
            const obj13 = { title: stringResult, body: null };
            const intl6 = closure_135_0(closure_135_2[17]).intl;
            obj13.body = intl6.string(closure_135_0(closure_135_2[17]).t.Whhv4w);
            closure_135_1(closure_135_2[30]).show(obj13);
            closure_135_1(closure_135_2[30]);
          } else {
            const body9 = closure_134_8.body;
            let code3;
            if (body9 != null) {
              code3 = body9.code;
            }
            if (closure_135_13.has(code3)) {
              throw tmp47;
            } else {
              const body2 = tmp47.body;
              let code4;
              if (body2 != null) {
                code4 = body2.code;
              }
              if (code4 === closure_135_15.INVALID_FORM_BODY) {
                const body3 = closure_134_8.body;
                let name;
                if (body3 != null) {
                  const errors = body3.errors;
                  if (errors != null) {
                    name = errors.name;
                  }
                }
                if (null != name) {
                  throw closure_134_8;
                }
              }
              const body4 = closure_134_8.body;
              let code5;
              if (body4 != null) {
                code5 = body4.code;
              }
              if (closure_135_14.has(code5)) {
                if (null == closure_134_2) {
                  new Promise((arg0, fn) => {
                    closure_0 = arg0;
                    closure_1 = fn;
                    if (null == closure_1_8.body) {
                      fn();
                    }
                    const result = andDeleteMostRecentUserCreatedThreadId.addConditionalChangeListener(() => {
                      andDeleteMostRecentUserCreatedThreadId = andDeleteMostRecentUserCreatedThreadId.getAndDeleteMostRecentUserCreatedThreadId();
                      if (null != andDeleteMostRecentUserCreatedThreadId) {
                        const channel2 = channel.getChannel(andDeleteMostRecentUserCreatedThreadId);
                        closure_1(closure_1_2[31]).wait(() => {
                          if (null == closure_0) {
                            closure_1();
                          } else {
                            closure_0(tmp);
                          }
                        });
                        return false;
                      }
                    });
                  });
                  c11 = 3;
                } else {
                  const body10 = closure_134_8.body;
                  let code6;
                  if (body10 != null) {
                    code6 = body10.code;
                  }
                  if (code6 !== closure_135_15.EXPLICIT_CONTENT) {
                    const obj15 = { file: closure_134_2, guildId: closure_134_0.getGuildId(), analyticsLocations: null, code: null, reason: null };
                    analyticsLocations = closure_134_1;
                    if (closure_134_1 == null) {
                      analyticsLocations = [];
                    }
                    obj15.analyticsLocations = analyticsLocations;
                    const body5 = closure_134_8.body;
                    let code7;
                    if (body5 != null) {
                      code7 = body5.code;
                    }
                    obj15.code = code7;
                    const body6 = closure_134_8.body;
                    let reason;
                    if (body6 != null) {
                      reason = body6.reason;
                    }
                    obj15.reason = reason;
                    let result = closure_135_0(closure_135_2[26]).handleUploadMessageAttachmentsErrors(obj15);
                    closure_135_0(closure_135_2[26]);
                  }
                }
                closure_134_6 = closure_135_0(closure_135_2[34]).createNonce();
                let tmp89 = null != closure_134_8.body.attachments;
                if (tmp89) {
                  tmp89 = closure_134_8.body.attachments.length > 0;
                }
                if (tmp89) {
                  closure_135_1(closure_135_2[31]).dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: closure_134_6, channelId: closure_134_0.id, attachments: closure_134_8.body.attachments });
                  closure_135_1(closure_135_2[35])(closure_134_0.id, closure_134_6);
                  closure_135_1(closure_135_2[31]);
                }
                closure_135_0(closure_135_2[34]);
              } else {
                const obj19 = { title: null, body: null };
                const intl3 = closure_135_0(closure_135_2[17]).intl;
                obj19.title = intl3.string(closure_135_0(closure_135_2[17]).t.j2d6Km);
                const intl4 = closure_135_0(closure_135_2[17]).intl;
                obj19.body = intl4.string(closure_135_0(closure_135_2[17]).t.fEptJP);
                closure_135_1(closure_135_2[30]).show(obj19);
                closure_135_1(closure_135_2[30]);
              }
            }
          }
        }
        new Promise((arg0, fn) => {
          closure_0 = arg0;
          if (null == body.body) {
            fn();
          }
          const result = closure_1_8.addConditionalChangeListener(() => {
            const channel = closure_2_8.getChannel(body.body.id);
            if (null != channel) {
              closure_2_1(closure_2_2[31]).wait(() => {
                channel(channel);
              });
              return false;
            }
          });
        });
        c10 = 2;
        c11 = 1;
      }
    } else if (2 === tmp9) {
      if (arg0 === 1) {
        c11 = 3;
        throw value;
      } else if (arg0 === 2) {
        c11 = 3;
        return { value, done: true };
      } else {
        closure_134_7 = value;
        c9 = 2;
        c10 = 5;
        c11 = 1;
        return { value: closure_135_1(closure_135_2[29]).fetchMessages({ channelId: closure_134_7.id, limit: closure_135_20 }), done: false };
      }
    } else if (3 === tmp9) {
      if (arg0 === 1) {
        c11 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_134_3 = value;
        if (null == value.body) {
          const obj24 = { title: null, body: null };
          const intl = closure_135_0(closure_135_2[17]).intl;
          obj24.title = intl.string(closure_135_0(closure_135_2[17]).t.j2d6Km);
          const intl2 = closure_135_0(closure_135_2[17]).intl;
          obj24.body = intl2.string(closure_135_0(closure_135_2[17]).t.fEptJP);
          closure_135_1(closure_135_2[30]).show(obj24);
          closure_135_1(closure_135_2[30]);
        } else {
          closure_135_1(closure_135_2[31]).dispatch({ type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: closure_135_12.CreateThread, channelId: closure_134_0.id });
          closure_135_1(closure_135_2[31]);
          closure_135_1(closure_135_2[31]).dispatch({ type: "THREAD_CREATE_LOCAL", channelId: closure_134_3.body.id });
          const AccessibilityAnnouncer = closure_135_0(closure_135_2[32]).AccessibilityAnnouncer;
          const intl11 = closure_135_0(closure_135_2[17]).intl;
          const t3 = closure_135_0(closure_135_2[17]).t;
          if (closure_134_4) {
            let XkUoBb = t3.zDAG2N;
          } else {
            XkUoBb = t3.XkUoBb;
          }
          AccessibilityAnnouncer.announce(intl11.string(XkUoBb));
          closure_135_1(closure_135_2[31]);
        }
        c9 = 0;
      }
    } else {
      if (4 === tmp9) {
        c9 = 0;
        c11 = 3;
      } else if (arg0 === 1) {
        c11 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c9 = 0;
      }
      c9 = 0;
      c11 = 3;
      return { value, done: true };
    }
    return value;
  })();
};
const DraftType = fn(5139).DraftType;
const SlowmodeType = fn(7960).SlowmodeType;
const ThreadConstants = fn(1118);
({ FORUM_POST_CREATION_AUTOMOD_ERRORS: map1, FORUM_POST_CREATION_UPLOAD_ERRORS: closure_14 } = ThreadConstants);
const Constants = fn(1078);
({ AbortCodes: closure_15, AnalyticEvents: closure_16, ChannelTypes: closure_17, Endpoints: closure_18, LoggingInviteTypes: closure_19, MAX_MESSAGES_PER_CHANNEL: closure_20, MessageFlags: closure_21 } = Constants);
const MessageSendLocation = fn(4783).MessageSendLocation;
const PrivateThreadMode = { Disabled: 1, [1]: "Disabled", Enabled: 2, [2]: "Enabled", PrivateOnly: 3, [3]: "PrivateOnly" };
fn(558);
let ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  obj = ThreadHooks;
  const canStartPublicThread = obj.useCanStartPublicThread(arg0);
  if (!obj2.useCanStartPrivateThread(arg0)) {
    return tmp2.Disabled;
  }
}) : ((arg0) => {
  obj = ThreadHooks;
  const canStartPublicThread = obj.useCanStartPublicThread(arg0);
  if (!obj2.useCanStartPrivateThread(arg0)) {
    return tmp2.Disabled;
  }
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannel) => {
  const cResult = require("c").c(9);
  parentChannel = parentChannel.parentChannel;
  _require = parentChannel;
  const parentMessageId = parentChannel.parentMessageId;
  threadSettings = parentChannel.threadSettings;
  const privateThreadMode = parentChannel.privateThreadMode;
  const _location = parentChannel.location;
  const onThreadCreated = parentChannel.onThreadCreated;
  const useDefaultThreadName = parentChannel.useDefaultThreadName;
  const uploadHandler = parentChannel.uploadHandler;
  if (cResult[0] === _location) {
    if (cResult[1] === onThreadCreated) {
      if (cResult[2] === parentChannel) {
        if (cResult[3] === parentMessageId) {
          if (cResult[4] === privateThreadMode) {
            if (cResult[5] === threadSettings) {
              if (cResult[6] === uploadHandler) {
                if (cResult[7] === useDefaultThreadName) {
                  let tmp2 = cResult[8];
                }
                return tmp2;
              }
            }
          }
        }
      }
    }
  }
  _require = _location((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let name = arg2;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, value, arg2) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const auto_archive_duration = tmp3;
              closure_4 = tmp2;
              closure_132_0 = closure_0;
              closure_132_1 = closure_1;
              closure_132_2 = name;
              closure_132_3 = undefined;
              closure_132_4 = undefined;
              let autoArchiveDuration;
              let channel2;
              let draft2;
              closure_132_8 = undefined;
              closure_132_9 = undefined;
              closure_132_3 = getIsPrivate(name, c3);
              name = name.name;
              c3 = name;
              if (name == null) {
                c3 = "";
              }
              closure_132_4 = c3;
              if ("" === c3) {
                if (c6) {
                  let stringResult = getDefaultThreadName(closure_0, closure_1);
                  if ("" === stringResult) {
                    const intl = closure_0(threadSettings[17]).intl;
                    stringResult = intl.string(closure_0(threadSettings[17]).t["7Xm5QI"]);
                  }
                  closure_132_4 = stringResult;
                }
              }
              autoArchiveDuration = closure_0(threadSettings[18]).getAutoArchiveDuration(closure_0);
              const obj4 = closure_0(threadSettings[18]);
              channel2 = channel.getChannel(parentMessageId(threadSettings[19]).castMessageIdAsChannelId(closure_1));
              draft2 = draft.getDraft(closure_0.id, DraftType.FirstThreadMessage);
              c6 = 1;
              c7 = 1;
              const obj7 = {
                value: createThread_(closure_0, [], undefined, () => {
                          if (null != closure_1) {
                            let result = closure_3_18.CHANNEL_MESSAGE_THREADS(closure_0.id, tmp);
                            let tmp3 = closure_0;
                          } else {
                            tmp3 = closure_0;
                            result = closure_3_18.CHANNEL_THREADS(closure_0.id);
                          }
                          const HTTP = closure_0(threadSettings[20]).HTTP;
                          const request = { url: result, body: null, rejectWithError: null };
                          const body = { name, type: null, auto_archive_duration: null, location: null };
                          if (closure_1_3) {
                            let PRIVATE_THREAD = constants.PRIVATE_THREAD;
                          } else {
                            PRIVATE_THREAD = tmp3.type === constants.GUILD_ANNOUNCEMENT ? tmp9.ANNOUNCEMENT_THREAD : tmp9.PUBLIC_THREAD;
                          }
                          body.type = PRIVATE_THREAD;
                          body.auto_archive_duration = auto_archive_duration;
                          body.location = location;
                          request.body = body;
                          request.rejectWithError = closure_0(threadSettings[20]).rejectWithMigratedError();
                          return HTTP.post(request);
                        }),
                done: false
              };
              return obj7;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_132_8 = value;
            if (closure_132_8 !== channel2) {
              closure_132_9 = draft2.trim();
              parentMessageId(threadSettings[21]).clearDraft(closure_0.id, DraftType.ThreadSettings);
              const obj9 = parentMessageId(threadSettings[21]);
              parentMessageId(threadSettings[21]).clearDraft(closure_0.id, DraftType.FirstThreadMessage);
              let tmp10 = "" !== closure_132_9;
              if (tmp10) {
                tmp10 = closure_132_9 !== closure_132_0.trim();
              }
              if (tmp10) {
                parentMessageId(threadSettings[21]).saveDraft(closure_132_8.id, draft2, DraftType.ChannelMessage);
                obj = parentMessageId(threadSettings[21]);
              }
              if (auto_archive_duration != null) {
                tmp20(closure_132_8);
              }
              sendMessage(closure_132_8, closure_132_0, closure_132_1, closure_132_2, c7);
              const obj10 = parentMessageId(threadSettings[21]);
            }
            parentMessageId(threadSettings[22]).clearAll(closure_0.id, DraftType.FirstThreadMessage);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp61) {
          c7 = tmp;
          throw tmp61;
        }
      }
    })();
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[0] = _location;
  cResult[1] = onThreadCreated;
  cResult[2] = parentChannel;
  cResult[3] = parentMessageId;
  cResult[4] = privateThreadMode;
  cResult[5] = threadSettings;
  cResult[6] = uploadHandler;
  cResult[7] = useDefaultThreadName;
  cResult[8] = fn;
  tmp2 = fn;
}) : ((parentChannel) => {
  parentChannel = parentChannel.parentChannel;
  const parentMessageId = parentChannel.parentMessageId;
  const threadSettings = parentChannel.threadSettings;
  const privateThreadMode = parentChannel.privateThreadMode;
  const _location = parentChannel.location;
  const onThreadCreated = parentChannel.onThreadCreated;
  const useDefaultThreadName = parentChannel.useDefaultThreadName;
  const uploadHandler = parentChannel.uploadHandler;
  closure_0 = _location((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let name = arg2;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, value, arg2) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const auto_archive_duration = tmp3;
              closure_4 = tmp2;
              closure_132_0 = closure_0;
              closure_132_1 = closure_1;
              closure_132_2 = name;
              closure_132_3 = undefined;
              closure_132_4 = undefined;
              let autoArchiveDuration;
              let channel2;
              let draft2;
              closure_132_8 = undefined;
              closure_132_9 = undefined;
              closure_132_3 = getIsPrivate(name, c3);
              name = name.name;
              c3 = name;
              if (name == null) {
                c3 = "";
              }
              closure_132_4 = c3;
              if ("" === c3) {
                if (c6) {
                  let stringResult = getDefaultThreadName(closure_0, closure_1);
                  if ("" === stringResult) {
                    const intl = closure_0(threadSettings[17]).intl;
                    stringResult = intl.string(closure_0(threadSettings[17]).t["7Xm5QI"]);
                  }
                  closure_132_4 = stringResult;
                }
              }
              autoArchiveDuration = closure_0(threadSettings[18]).getAutoArchiveDuration(closure_0);
              const obj4 = closure_0(threadSettings[18]);
              channel2 = channel.getChannel(parentMessageId(threadSettings[19]).castMessageIdAsChannelId(closure_1));
              draft2 = draft.getDraft(closure_0.id, DraftType.FirstThreadMessage);
              c6 = 1;
              c7 = 1;
              const obj7 = {
                value: createThread_(closure_0, [], undefined, () => {
                          if (null != closure_1) {
                            let result = closure_3_18.CHANNEL_MESSAGE_THREADS(closure_0.id, tmp);
                            let tmp3 = closure_0;
                          } else {
                            tmp3 = closure_0;
                            result = closure_3_18.CHANNEL_THREADS(closure_0.id);
                          }
                          const HTTP = closure_0(threadSettings[20]).HTTP;
                          const request = { url: result, body: null, rejectWithError: null };
                          const body = { name, type: null, auto_archive_duration: null, location: null };
                          if (closure_1_3) {
                            let PRIVATE_THREAD = constants.PRIVATE_THREAD;
                          } else {
                            PRIVATE_THREAD = tmp3.type === constants.GUILD_ANNOUNCEMENT ? tmp9.ANNOUNCEMENT_THREAD : tmp9.PUBLIC_THREAD;
                          }
                          body.type = PRIVATE_THREAD;
                          body.auto_archive_duration = auto_archive_duration;
                          body.location = location;
                          request.body = body;
                          request.rejectWithError = closure_0(threadSettings[20]).rejectWithMigratedError();
                          return HTTP.post(request);
                        }),
                done: false
              };
              return obj7;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_132_8 = value;
            if (closure_132_8 !== channel2) {
              closure_132_9 = draft2.trim();
              parentMessageId(threadSettings[21]).clearDraft(closure_0.id, DraftType.ThreadSettings);
              const obj9 = parentMessageId(threadSettings[21]);
              parentMessageId(threadSettings[21]).clearDraft(closure_0.id, DraftType.FirstThreadMessage);
              let tmp10 = "" !== closure_132_9;
              if (tmp10) {
                tmp10 = closure_132_9 !== closure_132_0.trim();
              }
              if (tmp10) {
                parentMessageId(threadSettings[21]).saveDraft(closure_132_8.id, draft2, DraftType.ChannelMessage);
                obj = parentMessageId(threadSettings[21]);
              }
              if (auto_archive_duration != null) {
                tmp20(closure_132_8);
              }
              sendMessage(closure_132_8, closure_132_0, closure_132_1, closure_132_2, c7);
              const obj10 = parentMessageId(threadSettings[21]);
            }
            parentMessageId(threadSettings[22]).clearAll(closure_0.id, DraftType.FirstThreadMessage);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp61) {
          c7 = tmp;
          throw tmp61;
        }
      }
    })();
  });
  const items = [parentChannel, parentMessageId, threadSettings, onThreadCreated, privateThreadMode, _location, useDefaultThreadName, uploadHandler];
  return onThreadCreated.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadCreationHooks.tsx");

export { PrivateThreadMode };
export const usePrivateThreadMode = tmp4;
export { getIsPrivate };
export { getDefaultThreadName };
export const useCreateThreadCommon = tmp5;
export const createThread = function createThread(arg0, name, PUBLIC_THREAD, autoArchiveDuration, _location) {
  const id = arg0;
  const type = PUBLIC_THREAD;
  const auto_archive_duration = autoArchiveDuration;
  return createThread_(arg0, [], undefined, () => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: collapsedCategories.CHANNEL_THREADS(id.id), body: null, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const body = { name, type, auto_archive_duration, location: _location };
    request.body = body;
    return HTTP.post(request);
  });
};
export const useCreateForumPostCommon = ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannel) => {
  const cResult = require("c").c(10);
  parentChannel = parentChannel.parentChannel;
  _require = parentChannel;
  let name = parentChannel.name;
  appliedTags = parentChannel.appliedTags;
  let analyticsLocations = parentChannel.analyticsLocations;
  const onThreadCreated = parentChannel.onThreadCreated;
  const upload = parentChannel.upload;
  const activityAction = parentChannel.activityAction;
  let applicationId = parentChannel.applicationId;
  let voiceChatEnabled = parentChannel.voiceChatEnabled;
  if (cResult[0] === activityAction) {
    if (cResult[1] === analyticsLocations) {
      if (cResult[2] === applicationId) {
        if (cResult[3] === appliedTags) {
          if (cResult[4] === name) {
            if (cResult[5] === onThreadCreated) {
              if (cResult[6] === parentChannel) {
                if (cResult[7] === upload) {
                  if (cResult[8] === voiceChatEnabled) {
                    let tmp2 = cResult[9];
                  }
                  return tmp2;
                }
              }
            }
          }
        }
      }
    }
  }
  _require = onThreadCreated((arg0, name, applied_tags) => {
    closure_0 = arg0;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, value, arg2) {
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === voiceChatEnabled) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_4 = tmp5;
              let uploaderFile;
              closure_132_1 = undefined;
              closure_132_2 = undefined;
              closure_132_3 = undefined;
              closure_132_4 = undefined;
              closure_132_5 = undefined;
              let file;
              let code;
              let reason;
              closure_132_9 = undefined;
              let num7 = 0;
              let tmp41 = closure_0;
              if (tmp112[0]) {
                num7 = closure_0(appliedTags[24]).addFlag(0, constants3.SUPPRESS_NOTIFICATIONS);
                tmp41 = tmp113;
                const obj6 = closure_0(appliedTags[24]);
              }
              const tmp108 = name;
              tmp112 = analyticsLocations(name(appliedTags[23])(closure_0), 2);
              const autoArchiveDuration = closure_0(appliedTags[18]).getAutoArchiveDuration(closure_0, null);
              closure_132_1 = closure_2_18.CHANNEL_THREADS(closure_0.id) + "?use_nested_fields=true";
              const obj5 = { name, auto_archive_duration: autoArchiveDuration, applied_tags, message: null };
              const obj8 = { content: tmp41, sticker_ids: tmp108, flags: null };
              let tmp50;
              if (0 !== num7) {
                tmp50 = num7;
              }
              obj8.flags = tmp50;
              obj5.message = obj8;
              closure_132_2 = obj5;
              let tmp52 = null;
              if (null != closure_6) {
                tmp52 = buildMessageActivity(tmp51);
              }
              let tmp54 = null != tmp52;
              if (tmp54) {
                tmp54 = null != tmp51;
              }
              if (tmp54) {
                obj5.message.application_id = tmp51.activity.application_id;
                obj5.message.activity = tmp52;
              }
              if (null != applied_tags) {
                if (arr2.length > 0) {
                  applicationId = 1;
                  voiceChatEnabled = 3;
                  c9 = 1;
                  const obj9 = { value: tmp3(arr2), done: false };
                  return obj9;
                }
              }
              createThread_(closure_0, analyticsLocations, uploaderFile, () => {
                const HTTP = closure_0(body[20]).HTTP;
                const request = { url, body, rejectWithError: closure_0(body[20]).rejectWithMigratedError() };
                return HTTP.post(request);
              });
              voiceChatEnabled = 2;
              c9 = 1;
              const obj7 = closure_0(appliedTags[18]);
            }
          } else if (1 === tmp8) {
            applicationId = 0;
            closure_132_4 = closure_6;
            closure_132_5 = closure_132_4;
            file = closure_132_5.file;
            code = closure_132_5.code;
            reason = closure_132_5.reason;
            const obj10 = { file, guildId: closure_0.getGuildId(), analyticsLocations: null, code: null, reason: null };
            if (analyticsLocations == null) {
              analyticsLocations = [];
            }
            obj10.analyticsLocations = analyticsLocations;
            obj10.code = code;
            obj10.reason = reason;
            const result = closure_0(appliedTags[26]).handleUploadMessageAttachmentsErrors(obj10);
            throw closure_132_4;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              closure_132_9 = value;
              name(appliedTags[21]).clearDraft(closure_0.id, DraftType.ThreadSettings);
              const obj13 = name(appliedTags[21]);
              name(appliedTags[21]).clearDraft(closure_0.id, DraftType.FirstThreadMessage);
              const obj14 = name(appliedTags[21]);
              name(appliedTags[22]).clearAll(closure_0.id, DraftType.FirstThreadMessage);
              const obj15 = name(appliedTags[22]);
              const obj12 = { guildId: closure_0.guild_id, channelId: closure_0.id, postId: closure_132_9.id, applicationId, voiceChatEnabled };
              const result1 = closure_0(appliedTags[27]).trackForumPostCreated(obj12);
              if (null != closure_132_2.message.application_id) {
                const obj17 = { location: constants4.THREAD_CREATION, invite_type: constants2.APPLICATION, application_id: closure_132_2.message.application_id, guild_id: closure_0.getGuildId(), channel_id: closure_132_9.id, message_id: closure_132_9.id };
                name(appliedTags[28]).trackWithMetadata(constants.INVITE_SENT, obj17);
                const obj18 = name(appliedTags[28]);
              }
              if (closure_4 != null) {
                tmp14(closure_132_9);
              }
              c9 = 3;
              const obj19 = { value: closure_132_9, done: true };
              return obj19;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_132_3 = value;
            uploaderFile = closure_132_3.uploaderFile;
            const files = closure_132_3.files;
            closure_132_2.message.attachments = files.map((item, index) => closure_1_0(body[25]).getAttachmentPayload(item, index));
            applicationId = 0;
          }
          applicationId = 0;
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp63) {
          closure_6 = tmp63;
          if (tmp4 === applicationId) {
            c9 = tmp2;
            throw tmp63;
          } else {
            voiceChatEnabled = tmp;
          }
        }
      }
    })();
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[0] = activityAction;
  cResult[1] = analyticsLocations;
  cResult[2] = applicationId;
  cResult[3] = appliedTags;
  cResult[4] = name;
  cResult[5] = onThreadCreated;
  cResult[6] = parentChannel;
  cResult[7] = upload;
  cResult[8] = voiceChatEnabled;
  cResult[9] = fn;
  tmp2 = fn;
}) : ((parentChannel) => {
  parentChannel = parentChannel.parentChannel;
  let name = parentChannel.name;
  const appliedTags = parentChannel.appliedTags;
  let analyticsLocations = parentChannel.analyticsLocations;
  const onThreadCreated = parentChannel.onThreadCreated;
  const upload = parentChannel.upload;
  const activityAction = parentChannel.activityAction;
  let applicationId = parentChannel.applicationId;
  let voiceChatEnabled = parentChannel.voiceChatEnabled;
  closure_0 = onThreadCreated((arg0, name, applied_tags) => {
    closure_0 = arg0;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, value, arg2) {
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === voiceChatEnabled) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_4 = tmp5;
              let uploaderFile;
              closure_132_1 = undefined;
              closure_132_2 = undefined;
              closure_132_3 = undefined;
              closure_132_4 = undefined;
              let file;
              let code;
              let reason;
              closure_132_8 = undefined;
              let num7 = 0;
              let tmp41 = closure_0;
              if (tmp112[0]) {
                num7 = closure_0(appliedTags[24]).addFlag(0, constants3.SUPPRESS_NOTIFICATIONS);
                tmp41 = tmp113;
                const obj6 = closure_0(appliedTags[24]);
              }
              const tmp108 = name;
              tmp112 = analyticsLocations(name(appliedTags[23])(closure_0), 2);
              const autoArchiveDuration = closure_0(appliedTags[18]).getAutoArchiveDuration(closure_0, null);
              closure_132_1 = closure_2_18.CHANNEL_THREADS(closure_0.id) + "?use_nested_fields=true";
              const obj5 = { name, auto_archive_duration: autoArchiveDuration, applied_tags, message: null };
              const obj8 = { content: tmp41, sticker_ids: tmp108, flags: null };
              let tmp50;
              if (0 !== num7) {
                tmp50 = num7;
              }
              obj8.flags = tmp50;
              obj5.message = obj8;
              closure_132_2 = obj5;
              let tmp52 = null;
              if (null != closure_6) {
                tmp52 = buildMessageActivity(tmp51);
              }
              let tmp54 = null != tmp52;
              if (tmp54) {
                tmp54 = null != tmp51;
              }
              if (tmp54) {
                obj5.message.application_id = tmp51.activity.application_id;
                obj5.message.activity = tmp52;
              }
              if (null != applied_tags) {
                if (arr2.length > 0) {
                  applicationId = 1;
                  voiceChatEnabled = 3;
                  c9 = 1;
                  const obj9 = { value: tmp3(arr2), done: false };
                  return obj9;
                }
              }
              createThread_(closure_0, analyticsLocations, uploaderFile, () => {
                const HTTP = closure_0(body[20]).HTTP;
                const request = { url, body, rejectWithError: closure_0(body[20]).rejectWithMigratedError() };
                return HTTP.post(request);
              });
              voiceChatEnabled = 2;
              c9 = 1;
              const obj7 = closure_0(appliedTags[18]);
            }
          } else if (1 === tmp8) {
            applicationId = 0;
            closure_132_9 = closure_6;
            closure_132_4 = closure_132_9;
            file = closure_132_4.file;
            code = closure_132_4.code;
            reason = closure_132_4.reason;
            const obj10 = { file, guildId: closure_0.getGuildId(), analyticsLocations: null, code: null, reason: null };
            if (analyticsLocations == null) {
              analyticsLocations = [];
            }
            obj10.analyticsLocations = analyticsLocations;
            obj10.code = code;
            obj10.reason = reason;
            const result = closure_0(appliedTags[26]).handleUploadMessageAttachmentsErrors(obj10);
            throw closure_132_9;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              closure_132_8 = value;
              name(appliedTags[21]).clearDraft(closure_0.id, DraftType.ThreadSettings);
              const obj13 = name(appliedTags[21]);
              name(appliedTags[21]).clearDraft(closure_0.id, DraftType.FirstThreadMessage);
              const obj14 = name(appliedTags[21]);
              name(appliedTags[22]).clearAll(closure_0.id, DraftType.FirstThreadMessage);
              const obj15 = name(appliedTags[22]);
              const obj12 = { guildId: closure_0.guild_id, channelId: closure_0.id, postId: closure_132_8.id, applicationId, voiceChatEnabled };
              const result1 = closure_0(appliedTags[27]).trackForumPostCreated(obj12);
              if (null != closure_132_2.message.application_id) {
                const obj17 = { location: constants4.THREAD_CREATION, invite_type: constants2.APPLICATION, application_id: closure_132_2.message.application_id, guild_id: closure_0.getGuildId(), channel_id: closure_132_8.id, message_id: closure_132_8.id };
                name(appliedTags[28]).trackWithMetadata(constants.INVITE_SENT, obj17);
                const obj18 = name(appliedTags[28]);
              }
              if (closure_4 != null) {
                tmp14(closure_132_8);
              }
              c9 = 3;
              const obj19 = { value: closure_132_8, done: true };
              return obj19;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_132_3 = value;
            uploaderFile = closure_132_3.uploaderFile;
            const files = closure_132_3.files;
            closure_132_2.message.attachments = files.map((item, index) => closure_1_0(body[25]).getAttachmentPayload(item, index));
            applicationId = 0;
          }
          applicationId = 0;
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp63) {
          closure_6 = tmp63;
          if (tmp4 === applicationId) {
            c9 = tmp2;
            throw tmp63;
          } else {
            voiceChatEnabled = tmp;
          }
        }
      }
    })();
  });
  const items = [parentChannel, name, appliedTags, onThreadCreated, analyticsLocations, upload, activityAction, voiceChatEnabled, applicationId];
  return upload.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
});
