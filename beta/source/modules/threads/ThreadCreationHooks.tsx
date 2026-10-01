// Module ID: 8606
// Function ID: 8607
// Name: ThreadCreationHooks
// Dependencies: [32, 5, 19, 6723, 502, 2045, 5200, 5056, 7100, 1114, 1074, 4829, 6687, 7095, 6692, 1115, 8607, 11, 1271, 7196, 8608, 7097, 1385, 5441, 8610, 7186, 5016, 6876, 5203, 573, 4685, 1091, 7172, 8697, 2]
// Exports: createThread, useCreateForumPostCommon, useCreateThreadCommon, usePrivateThreadMode

// Module 8606 (ThreadCreationHooks)
import HTTPUtils from "HTTPUtils" /* 1271 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import DraftStore2 from "DraftStore" /* 5200 */;
import ThreadHooks from "ThreadHooks" /* 6687 */;
import MessageParserDefault from "MessageParser" /* 7095 */;
import SlowmodeStore from "SlowmodeStore" /* 7100 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ForumActivePostStore from "ForumActivePostStore" /* 6723 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MessageStore from "MessageStore" /* 5056 */;
import ThreadConstants from "ThreadConstants" /* 1114 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let andDeleteMostRecentUserCreatedThreadId, c3, c4, files, getChannel;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let map1;
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
    const unparse = MessageParserDefault.unparse;
    MessageParserDefault;
    const tmp17 = importDefault;
    if (contentMessage != null) {
      str3 = contentMessage.content;
    }
    if (str3 == null) {
      str3 = "";
    }
    const str4 = unparse(str3, stateFromStores.id, true);
    const tmp17Result = tmp17(6692);
    const str6 = tmp17Result(str4.split("\n")[0], true);
    let str7 = str6.replace(/^[ #-]+/, "");
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
function createThread_() {
  return obj(...arguments);
}
let obj = function _createThread_() {
  obj = _asyncToGenerator(async (arg0, arg1, file, arg3) => {
    let closure_8;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_3 = arg3;
    let c10 = 0;
    let c11 = 0;
    let c9 = 0;
    return (async function(arg0, value, arg2, arg3) {
      let code5;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl6;
      let intl7;
      let intl8;
      let reason;
      let string3Result;
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let body;
          let closure_4;
          c11 = 2;
          const tmp4 = c10;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              return { value, done: true };
            } else {
              body = undefined;
              analyticsLocations = undefined;
              self = undefined;
              value = undefined;
              closure_4 = closure_0.isForumLikeChannel();
              c9 = 1;
              c10 = 3;
              c11 = 1;
              const obj4 = { value: body(), done: false };
              return obj4;
            }
          } else {
            if (1 === tmp4) {
              c9 = 0;
              body = tmp164.body;
              self = body == null;
              let code;
              if (!self) {
                code = body.code;
              }
              if (code === closure_135_15.TOO_MANY_THREADS) {
                let string2Result;
                self = closure_135_1(closure_135_2[28]);
                const show4 = self.show;
                const intl9 = closure_135_0(closure_135_2[15]).intl;
                const string2 = intl9.string;
                const t2 = closure_135_0(closure_135_2[15]).t;
                if (closure_4) {
                  string2Result = string2(t2.vWNFkx);
                } else {
                  string2Result = string2(t2["1KEdvB"]);
                }
                const obj5 = { title: string2Result, body: string3Result };
                const intl10 = closure_135_0(closure_135_2[15]).intl;
                const string3 = intl10.string;
                const t3 = closure_135_0(closure_135_2[15]).t;
                if (closure_4) {
                  string3Result = string3(t3.KGaiEK);
                } else {
                  string3Result = string3(t3.P0wT5S);
                }
                show4(obj5);
              } else {
                const body6 = tmp164.body;
                self = body6 == null;
                let code1;
                if (!self) {
                  code1 = body6.code;
                }
                if (code1 === closure_135_15.TOO_MANY_ANNOUNCEMENT_THREADS) {
                  self = closure_135_1(closure_135_2[28]);
                  const show3 = self.show;
                  const obj6 = { title: intl7.string(closure_135_0(closure_135_2[15]).t["1KEdvB"]), body: intl8.string(closure_135_0(closure_135_2[15]).t.jDMxz2) };
                  intl7 = closure_135_0(closure_135_2[15]).intl;
                  intl8 = closure_135_0(closure_135_2[15]).intl;
                  show3(obj6);
                } else {
                  const body7 = tmp164.body;
                  self = body7 == null;
                  let code2;
                  if (!self) {
                    code2 = body7.code;
                  }
                  if (code2 === closure_135_15.SLOWMODE_RATE_LIMITED) {
                    const retry_after = tmp164.body.retry_after;
                    c4 = retry_after;
                    if (retry_after == null) {
                      c4 = 0;
                    }
                    analyticsLocations = c4;
                    if (analyticsLocations > 0) {
                      self = closure_135_1(closure_135_2[29]);
                      const dispatch = self.dispatch;
                      const obj7 = { type: "SLOWMODE_SET_COOLDOWN", channelId: closure_0.id, slowmodeType: closure_135_12.CreateThread, cooldownMs: analyticsLocations * closure_135_1(closure_135_2[31]).Millis.SECOND };
                      dispatch(obj7);
                    }
                  } else if (429 === tmp164.status) {
                    let stringResult;
                    self = closure_135_1(closure_135_2[28]);
                    const show2 = self.show;
                    const intl5 = closure_135_0(closure_135_2[15]).intl;
                    const string = intl5.string;
                    const t = closure_135_0(closure_135_2[15]).t;
                    if (closure_4) {
                      stringResult = string(t.vWNFkx);
                    } else {
                      stringResult = string(t["1KEdvB"]);
                    }
                    const obj8 = { title: stringResult, body: intl6.string(closure_135_0(closure_135_2[15]).t.Whhv4w) };
                    intl6 = closure_135_0(closure_135_2[15]).intl;
                    show2(obj8);
                  } else {
                    self = closure_135_13;
                    const body8 = tmp164.body;
                    let code3;
                    const has = closure_135_13.has;
                    if (body8 != null) {
                      code3 = body8.code;
                    }
                    if (has(code3)) {
                      throw tmp164;
                    } else {
                      const body2 = tmp41.body;
                      self = undefined;
                      if (body2 != null) {
                        self = body2.code;
                      }
                      if (self === closure_135_15.INVALID_FORM_BODY) {
                        self = tmp164.body;
                        let name;
                        if (self != null) {
                          self = self.errors;
                          if (self != null) {
                            name = self.name;
                          }
                        }
                        if (null != name) {
                          throw tmp164;
                        }
                      }
                      self = closure_135_14.has;
                      const body3 = tmp164.body;
                      let code4;
                      if (body3 != null) {
                        code4 = body3.code;
                      }
                      if (self(code4)) {
                        if (null != file) {
                          const body9 = tmp164.body;
                          self = undefined;
                          if (body9 != null) {
                            self = body9.code;
                          }
                          if (self === closure_135_15.EXPLICIT_CONTENT) {
                            const obj9 = closure_135_0(closure_135_2[32]);
                            self = obj9.createNonce();
                            const tmp82 = null != tmp164.body.attachments && tmp164.body.attachments.length > 0;
                            if (tmp82) {
                              const obj11 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: self, channelId: closure_0.id, attachments: tmp164.body.attachments };
                              const obj10 = closure_135_1(closure_135_2[29]);
                              obj10.dispatch(obj11);
                              closure_135_1(closure_135_2[33])(closure_0.id, self);
                            }
                          } else {
                            self = closure_135_0(closure_135_2[24]).handleUploadMessageAttachmentsErrors;
                            const obj12 = { file, guildId: closure_0.getGuildId(), analyticsLocations, code: code5, reason };
                            closure_135_0(closure_135_2[24]);
                            analyticsLocations = closure_1;
                            if (closure_1 == null) {
                              analyticsLocations = [];
                            }
                            const body4 = tmp164.body;
                            code5 = undefined;
                            if (body4 != null) {
                              code5 = body4.code;
                            }
                            const body5 = tmp164.body;
                            reason = undefined;
                            if (body5 != null) {
                              reason = body5.reason;
                            }
                            self(obj12);
                          }
                        }
                        self = this;
                        const self2 = this;
                        c11 = 3;
                        const obj13 = {
                          value: new Promise((arg0, fn) => {
                                              closure_0 = arg0;
                                              closure_1 = fn;
                                              if (null == closure_1_8.body) {
                                                const tmp = fn();
                                              }
                                              const result = self.addConditionalChangeListener(() => {
                                                andDeleteMostRecentUserCreatedThreadId = andDeleteMostRecentUserCreatedThreadId.getAndDeleteMostRecentUserCreatedThreadId();
                                                if (null != andDeleteMostRecentUserCreatedThreadId) {
                                                  const channel2 = channel.getChannel(andDeleteMostRecentUserCreatedThreadId);
                                                  obj = closure_1(closure_1_2[29]);
                                                  obj.wait(() => {
                                                    if (null == closure_0) {
                                                      closure_1();
                                                    } else {
                                                      closure_0(tmp);
                                                    }
                                                  });
                                                  return false;
                                                }
                                              });
                                            }),
                          done: true
                        };
                        return obj13;
                      } else {
                        self = closure_135_1(closure_135_2[28]).show;
                        const obj14 = { title: intl3.string(closure_135_0(closure_135_2[15]).t.j2d6Km), body: intl4.string(closure_135_0(closure_135_2[15]).t.fEptJP) };
                        closure_135_1(closure_135_2[28]);
                        intl3 = closure_135_0(closure_135_2[15]).intl;
                        intl4 = closure_135_0(closure_135_2[15]).intl;
                        self(obj14);
                      }
                    }
                  }
                }
              }
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c11 = 3;
                return { value, done: true };
              } else {
                c9 = 2;
                self = closure_135_1(closure_135_2[27]);
                c10 = 5;
                c11 = 1;
                const obj16 = { channelId: value.id, limit: closure_135_20 };
                const obj17 = { value: self.fetchMessages(obj16), done: false };
                return obj17;
              }
            } else if (3 === tmp4) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c11 = 3;
                return { value, done: true };
              } else {
                body = value;
                if (null == value.body) {
                  self = closure_135_1(closure_135_2[28]);
                  const show = self.show;
                  const obj19 = { title: intl.string(closure_135_0(closure_135_2[15]).t.j2d6Km), body: intl2.string(closure_135_0(closure_135_2[15]).t.fEptJP) };
                  intl = closure_135_0(closure_135_2[15]).intl;
                  intl2 = closure_135_0(closure_135_2[15]).intl;
                  show(obj19);
                } else {
                  let XkUoBb;
                  const obj21 = { type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: closure_135_12.CreateThread, channelId: closure_0.id };
                  const obj20 = closure_135_1(closure_135_2[29]);
                  obj20.dispatch(obj21);
                  const obj23 = { type: "THREAD_CREATE_LOCAL", channelId: body.body.id };
                  const obj22 = closure_135_1(closure_135_2[29]);
                  obj22.dispatch(obj23);
                  self = closure_135_0(closure_135_2[30]).AccessibilityAnnouncer;
                  const announce = self.announce;
                  const intl11 = closure_135_0(closure_135_2[15]).intl;
                  const string4 = intl11.string;
                  const t4 = closure_135_0(closure_135_2[15]).t;
                  if (closure_4) {
                    XkUoBb = t4.zDAG2N;
                  } else {
                    XkUoBb = t4.XkUoBb;
                  }
                  announce(string4(XkUoBb));
                }
                c9 = 0;
              }
            } else {
              if (4 === tmp4) {
                c9 = 0;
              } else if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c11 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c9 = 0;
              }
              c11 = 3;
              return { value, done: true };
            }
            self = Promise;
            const self3 = this;
            const self4 = this;
            c10 = 2;
            c11 = 1;
            const obj25 = {
              value: new Promise((arg0, fn) => {
                      closure_0 = arg0;
                      if (null == body.body) {
                        fn();
                      }
                      const result = closure_1_8.addConditionalChangeListener(() => {
                        const channel = closure_2_8.getChannel(body.body.id);
                        if (null != channel) {
                          obj = closure_2_1(file[29]);
                          obj.wait(() => {
                            channel(channel);
                          });
                          return false;
                        }
                      });
                    }),
              done: false
            };
            return obj25;
          }
        } catch (tmp164) {
          if (0 === c9) {
            c11 = 3;
            throw tmp164;
          } else if (1 === tmp166) {
            c10 = 1;
          } else {
            c10 = 4;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const DraftType = DraftStore2.DraftType;
const SlowmodeType = SlowmodeStore.SlowmodeType;
({ FORUM_POST_CREATION_AUTOMOD_ERRORS: map1, FORUM_POST_CREATION_UPLOAD_ERRORS: closure_14 } = ThreadConstants);
({ AbortCodes: closure_15, AnalyticEvents: closure_16, ChannelTypes: closure_17, Endpoints: closure_18, LoggingInviteTypes: closure_19, MAX_MESSAGES_PER_CHANNEL: closure_20, MessageFlags: closure_21 } = Constants);
const MessageSendLocation = MessageConstants.MessageSendLocation;
obj = { Disabled: 1, [1]: "Disabled", Enabled: 2, [2]: "Enabled", PrivateOnly: 3, [3]: "PrivateOnly" };
let result = size.fileFinishedImporting("modules/threads/ThreadCreationHooks.tsx");

export const PrivateThreadMode = obj;
export const usePrivateThreadMode = function usePrivateThreadMode(parentChannel) {
  let Disabled;
  obj = ThreadHooks;
  const canStartPublicThread = obj.useCanStartPublicThread(parentChannel);
  const obj2 = ThreadHooks;
  if (obj2.useCanStartPrivateThread(parentChannel)) {
    Disabled = canStartPublicThread ? tmp2.Enabled : tmp2.PrivateOnly;
  } else {
    Disabled = tmp2.Disabled;
  }
  return Disabled;
};
export { getIsPrivate };
export { getDefaultThreadName };
export const useCreateThreadCommon = function useCreateThreadCommon(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const parentMessageId = parentChannel.parentMessageId;
  const threadSettings = parentChannel.threadSettings;
  const privateThreadMode = parentChannel.privateThreadMode;
  let _location = parentChannel.location;
  const onThreadCreated = parentChannel.onThreadCreated;
  const useDefaultThreadName = parentChannel.useDefaultThreadName;
  const uploadHandler = parentChannel.uploadHandler;
  const useCallback = onThreadCreated.useCallback;
  let closure_0 = _location((arg0, arg1, arg2) => {
    let closure_4;
    let closure_5;
    closure_0 = arg0;
    let closure_1 = arg1;
    let name = arg2;
    let c6 = 0;
    let c7 = 0;
    return (function*(arg0, value, arg2) {
      const sendMessage2 = function sendMessage(id, arg1, items1, arg3, c7) {
        if (null != c7) {
          if (null != arg3) {
            if (arg3.length > 0) {
              c7(id, arg3, arg1, items1);
            }
          }
        }
        if (null != items1) {
          let sendStickersResult;
          if (items1.length > 0) {
            const id2 = id.id;
            const sendStickers = closure_1_1(name[27]).sendStickers;
            const obj2 = { location: constants.THREAD_CREATION };
            const tmp6 = closure_1_1(name[27]);
            const obj3 = closure_1_1(name[13]);
            sendStickersResult = sendStickers(id2, items1, obj3.parse(id, arg1), obj2);
          }
          return sendStickersResult;
        }
        id = id.id;
        const sendMessage = closure_1_1(name[27]).sendMessage;
        closure_1_1(name[27]);
        obj = closure_1_1(name[13]);
        const obj4 = { location: constants.THREAD_CREATION };
        sendStickersResult = sendMessage(id, obj.parse(id, arg1), undefined, obj4);
      };
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let autoArchiveDuration;
          let closure_6;
          let draft2;
          let closure_9;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              _location = tmp;
              let stringResult;
              autoArchiveDuration = undefined;
              closure_6 = undefined;
              draft2 = undefined;
              id = undefined;
              closure_9 = undefined;
              let closure_3 = closure_2_24(name, c3);
              name = name.name;
              c3 = name;
              if (name == null) {
                c3 = "";
              }
              stringResult = c3;
              if ("" === c3) {
                const tmp39 = c6;
                if (tmp39) {
                  stringResult = closure_2_25(user, closure_1);
                  if ("" === stringResult) {
                    const intl = user(threadSettings[15]).intl;
                    stringResult = intl.string(user(threadSettings[15]).t["7Xm5QI"]);
                  }
                }
              }
              let obj4 = user(threadSettings[16]);
              autoArchiveDuration = obj4.getAutoArchiveDuration(user);
              getChannel = getChannel.getChannel;
              const obj5 = parentMessageId(threadSettings[17]);
              closure_6 = getChannel(obj5.castMessageIdAsChannelId(closure_1));
              draft2 = draft.getDraft(user.id, closure_2_10.FirstThreadMessage);
              c6 = 1;
              c7 = 1;
              const obj7 = {
                value: closure_2_26(user, [], undefined, () => {
                          let PRIVATE_THREAD;
                          let result;
                          let tmp3;
                          let tmp7Result;
                          if (null != closure_2_1) {
                            result = closure_3_18.CHANNEL_MESSAGE_THREADS(user.id, tmp);
                            tmp3 = user;
                          } else {
                            tmp3 = user;
                            result = closure_3_18.CHANNEL_THREADS(user.id);
                          }
                          const HTTP = closure_0(closure_2[18]).HTTP;
                          const request = { url: result, body: obj, rejectWithError: tmp7Result.rejectWithMigratedError() };
                          const post = HTTP.post;
                          obj = { name, type: PRIVATE_THREAD, auto_archive_duration, location: _location };
                          const tmp7 = closure_0;
                          const tmp8 = closure_2;
                          if (closure_1_3) {
                            PRIVATE_THREAD = constants.PRIVATE_THREAD;
                          } else {
                            PRIVATE_THREAD = tmp3.type === constants.GUILD_ANNOUNCEMENT ? tmp9.ANNOUNCEMENT_THREAD : tmp9.PUBLIC_THREAD;
                          }
                          tmp7Result = tmp7(tmp8[18]);
                          return post(request);
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
            return { value, done: true };
          } else {
            id = value;
            if (id !== closure_6) {
              closure_9 = draft2.trim();
              const obj9 = parentMessageId(threadSettings[19]);
              obj9.clearDraft(user.id, closure_2_10.ThreadSettings);
              const obj10 = parentMessageId(threadSettings[19]);
              obj10.clearDraft(user.id, closure_2_10.FirstThreadMessage);
              let tmp9 = "" !== closure_9;
              if (tmp9) {
                let tmp6 = _location;
                let tmp7 = closure_9;
                let tmp8 = user;
                tmp9 = closure_9 !== user.trim();
              }
              if (tmp9) {
                obj = parentMessageId(threadSettings[19]);
                obj.saveDraft(id.id, draft2, closure_2_10.ChannelMessage);
              }
              if (autoArchiveDuration != null) {
                tmp19(id);
              }
              sendMessage2(id, user, closure_1, name, c7);
            }
            let obj2 = parentMessageId(threadSettings[20]);
            obj2.clearAll(user.id, closure_2_10.FirstThreadMessage);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp59) {
          c7 = 3;
          throw tmp59;
        }
      }
    })();
  });
  const items = [parentChannel, parentMessageId, threadSettings, onThreadCreated, privateThreadMode, _location, useDefaultThreadName, uploadHandler];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
};
export const createThread = function createThread(channel, name, PUBLIC_THREAD, autoArchiveDuration, _location) {
  const type = PUBLIC_THREAD;
  const auto_archive_duration = autoArchiveDuration;
  return createThread_(channel, [], undefined, () => {
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: authStore4.CHANNEL_THREADS(channel.id), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { name, type, auto_archive_duration, location: _location };
    obj3 = HTTPUtils;
    return post(request);
  });
};
export const useCreateForumPostCommon = function useCreateForumPostCommon(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  let name = parentChannel.name;
  const appliedTags = parentChannel.appliedTags;
  let analyticsLocations = parentChannel.analyticsLocations;
  const onThreadCreated = parentChannel.onThreadCreated;
  const upload = parentChannel.upload;
  const activityAction = parentChannel.activityAction;
  let applicationId = parentChannel.applicationId;
  const voiceChatEnabled = parentChannel.voiceChatEnabled;
  const useCallback = upload.useCallback;
  let closure_0 = onThreadCreated((arg0, name, applied_tags) => {
    let closure_5;
    closure_0 = arg0;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, value, arg2) {
      let body;
      let obj7;
      let sessionId;
      let tmp47;
      let url;
      function buildMessageActivity(activity) {
        let id;
        let session_id = activity.activity.session_id;
        if (null == session_id) {
          session_id = sessionId.getSessionId();
        }
        let tmp2 = null;
        if (null != session_id) {
          const party = activity.activity.party;
          obj = { type: activity.type, session_id, target_user_id: activity.targetUserId, party_id: id };
          id = undefined;
          if (party != null) {
            id = party.id;
          }
          tmp2 = obj;
        }
        return tmp2;
      }
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let uploaderFile;
          let obj4;
          let file;
          let code;
          let reason;
          c9 = 2;
          if (0 === user) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              uploaderFile = undefined;
              name = undefined;
              obj4 = undefined;
              analyticsLocations = undefined;
              files = undefined;
              file = undefined;
              code = undefined;
              reason = undefined;
              user = undefined;
              let num7 = 0;
              let tmp38 = closure_0;
              const tmp101 = name;
              const tmp105 = closure_2_3(closure_2_1(appliedTags[21])(closure_0), 2);
              if (tmp105[0]) {
                const obj5 = closure_0(appliedTags[22]);
                num7 = obj5.addFlag(0, constants3.SUPPRESS_NOTIFICATIONS);
                tmp38 = tmp106;
              }
              const obj6 = closure_0(appliedTags[16]);
              const autoArchiveDuration = obj6.getAutoArchiveDuration(closure_0, null);
              name = closure_2_18.CHANNEL_THREADS(closure_0.id) + "?use_nested_fields=true";
              obj4 = { name, auto_archive_duration: autoArchiveDuration, applied_tags, message: obj7 };
              obj7 = { content: tmp38, sticker_ids: tmp101, flags: tmp47 };
              tmp47 = undefined;
              if (0 !== num7) {
                tmp47 = num7;
              }
              files = null;
              if (null != activity) {
                files = buildMessageActivity(tmp48);
              }
              const tmp49 = null != files && null != tmp48;
              if (tmp49) {
                obj4.message.application_id = activity.activity.application_id;
                obj4.message.activity = files;
              }
              if (null != applied_tags) {
                if (applied_tags.length > 0) {
                  applicationId = 1;
                  user = 3;
                  c9 = 1;
                  const obj8 = { value: tmp(applied_tags), done: false };
                  return obj8;
                }
              }
            }
          } else if (1 === user) {
            applicationId = 0;
            let closure_9 = activity;
            files = closure_9;
            file = files.file;
            code = files.code;
            reason = files.reason;
            files = closure_0(appliedTags[24]);
            const handleUploadMessageAttachmentsErrors = files.handleUploadMessageAttachmentsErrors;
            const obj9 = { file, guildId: closure_0.getGuildId(), analyticsLocations, code, reason };
            if (analyticsLocations == null) {
              analyticsLocations = [];
            }
            const result = handleUploadMessageAttachmentsErrors(obj9);
            throw closure_9;
          } else if (2 === user) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              user = value;
              const obj13 = closure_2_1(appliedTags[19]);
              obj13.clearDraft(closure_0.id, closure_2_10.ThreadSettings);
              const obj14 = closure_2_1(appliedTags[19]);
              obj14.clearDraft(closure_0.id, closure_2_10.FirstThreadMessage);
              const obj15 = closure_2_1(appliedTags[20]);
              obj15.clearAll(closure_0.id, closure_2_10.FirstThreadMessage);
              files = closure_0(appliedTags[25]);
              const obj11 = { guildId: closure_0.guild_id, channelId: closure_0.id, postId: user.id, applicationId, voiceChatEnabled: user };
              const result1 = files.trackForumPostCreated(obj11);
              if (null != obj4.message.application_id) {
                files = closure_2_1(appliedTags[26]);
                const trackWithMetadata = files.trackWithMetadata;
                const INVITE_SENT = constants.INVITE_SENT;
                const obj12 = { location: constants4.THREAD_CREATION, invite_type: constants2.APPLICATION, application_id: obj4.message.application_id, guild_id: closure_0.getGuildId(), channel_id: user.id, message_id: user.id };
                trackWithMetadata(INVITE_SENT, obj12);
              }
              if (files != null) {
                tmp11(user);
              }
              c9 = 3;
              return { value: user, done: true };
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            applicationId = 0;
            c9 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            analyticsLocations = value;
            uploaderFile = analyticsLocations.uploaderFile;
            files = analyticsLocations.files;
            obj4.message.attachments = files.map((item, index) => {
              obj = closure_1_0(body[23]);
              return obj.getAttachmentPayload(item, index);
            });
            applicationId = 0;
          }
          files = closure_2_26(closure_0, analyticsLocations, uploaderFile, () => {
            let obj2;
            const HTTP = closure_0(body[18]).HTTP;
            const request = { url, body, rejectWithError: obj2.rejectWithMigratedError() };
            const post = HTTP.post;
            obj2 = closure_0(body[18]);
            return post(request);
          });
          user = 2;
          c9 = 1;
          return { value: files, done: false };
        } catch (tmp57) {
          activity = tmp57;
          if (0 === applicationId) {
            c9 = 3;
            throw tmp57;
          } else {
            user = 1;
          }
        }
      }
    })();
  });
  const items = [parentChannel, name, appliedTags, onThreadCreated, analyticsLocations, upload, activityAction, voiceChatEnabled, applicationId];
  return useCallback(function() {
    return closure_0(...arguments);
  }, items);
};
