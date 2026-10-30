// Module ID: 12626
// Function ID: 12627
// Name: useConjurePatchNotesComposer
// Dependencies: [5, 32, 19, 4939, 5014, 504, 7413, 9754, 12627, 10931, 7817, 7629, 2]
// Exports: default

// Module 12626 (useConjurePatchNotesComposer)
import GuildChannelStore2 from "GuildChannelStore" /* 4939 */;
import MessageConstants from "MessageConstants" /* 5014 */;
import ConjureUtils from "ConjureUtils" /* 7413 */;
import ConjurePatchNotesChannel from "ConjurePatchNotesChannel" /* 12627 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;
let c3, c4, c5, channel;

let closure_7 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePatchNotesComposer.tsx");

export default function useConjurePatchNotesComposer(projectId) {
  let c11;
  let c14;
  let tmp14;
  let tmp18;
  projectId = projectId.projectId;
  let guildId = projectId.guildId;
  const applicationId = projectId.applicationId;
  let publishedRevision = projectId.publishedRevision;
  const applyDraft = projectId.applyDraft;
  c11 = undefined;
  c14 = undefined;
  let ref;
  let c18;
  let tmp = projectId;
  let tmp2 = applicationId;
  let obj = projectId(applicationId[5]);
  const items = [ref];
  const items1 = [guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const arr = GuildChannelStore.getChannels(guildId)[closure_7];
    found = arr.filter((channel) => {
      channel = channel.channel;
      const isGuildVocalResult = channel.isGuildVocal();
      const tmp2 = !isGuildVocalResult && !channel.isThread() && !channel.isForumLikeChannel();
      return tmp2;
    });
    return found.map((channel) => channel.channel);
  }, items1);
  let obj2 = projectId(applicationId[5]);
  const items2 = [ref];
  const items3 = [guildId, applicationId];
  const stateFromStores = obj2.useStateFromStores(items2, () => {
    const obj = ConjureUtils;
    return obj.findConjureChannelId(guildId, applicationId);
  }, items3);
  const tmp4 = guildId(applicationId[7])();
  let obj3 = projectId(applicationId[8]);
  const diff = tmp4 - obj3.formatPlaySuffix(projectId(applicationId[8]).PLAY_LINE_CHANNEL_PLACEHOLDER).length;
  ref = stateFromStores.useRef(diff);
  ref.current = diff;
  const ref1 = stateFromStores.useRef(applyDraft);
  ref1.current = applyDraft;
  const tmp9 = stateFromStoresArray(stateFromStores.useState(() => {
    const obj = ConjurePatchNotesChannel;
    const result = obj.lastPatchNotesChannel(applicationId);
    let tmp2 = null;
    if (null != result) {
      tmp2 = null;
      if (stateFromStoresArray.some((id) => id.id === result)) {
        tmp2 = result;
      }
    }
    return tmp2;
  }), 2);
  const first = tmp9[0];
  let closure_9 = tmp9[1];
  const tmp11 = stateFromStoresArray(stateFromStores.useState(true), 2);
  let closure_10 = tmp11[1];
  const first1 = tmp11[0];
  [tmp14, c11] = stateFromStoresArray(stateFromStores.useState(false), 2);
  const tmp13 = stateFromStoresArray(stateFromStores.useState(false), 2);
  const tmp15 = stateFromStoresArray(stateFromStores.useState(undefined), 2);
  const first2 = tmp15[0];
  let closure_13 = tmp15[1];
  [tmp18, c14] = stateFromStoresArray(stateFromStores.useState(false), 2);
  const tmp17 = stateFromStoresArray(stateFromStores.useState(false), 2);
  let closure_15 = stateFromStores.useRef(false);
  ref = stateFromStores.useRef(null != first);
  const items4 = [stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let current = null == stateFromStores;
    const tmp = stateFromStores;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      closure_9(tmp);
    }
  }, items4);
  const items5 = [projectId];
  const effect1 = stateFromStores.useEffect(() => {
    function loadDraft() {
      return obj(...arguments);
    }
    let obj = function _loadDraft() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj3;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c2;
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                closure_0 = undefined;
                c2 = 1;
                c3 = 2;
                c4 = 1;
                const obj5 = { value: obj3.draftPatchNotes(closure_0), done: false };
                obj3 = closure_2_0(applicationId[9]);
                return obj5;
              }
            } else if (1 === c3) {
              c2 = 0;
              if (closure_129_0.cancelled) {
                c4 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                closure_1_10(false);
                closure_1_11(true);
                c4 = 3;
                const obj6 = { value: undefined, done: true };
                return obj6;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              c2 = 0;
              if (!closure_129_0.cancelled) {
                closure_1_10(false);
                closure_1_13(closure_0.source_sha);
                if (true !== closure_0.ok) {
                  closure_1_11(true);
                } else {
                  const current = null == closure_0.notes || "" === closure_0.notes || ref3.current;
                  if (!current) {
                    const notes = closure_0.notes;
                    ref2.current(notes.slice(0, ref.current));
                  }
                }
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp38) {
            if (0 === c2) {
              c4 = 3;
              throw tmp38;
            } else {
              c3 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let closure_0 = { cancelled: false };
    const tmp = loadDraft();
    return () => {
      closure_0.cancelled = true;
    };
  }, items5);
  const callback = stateFromStores.useCallback(() => {
    closure_15.current = true;
  }, []);
  let found = null;
  const callback1 = stateFromStores.useCallback((arg0) => {
    ref.current = true;
    closure_9(arg0);
  }, []);
  const tmp6 = stateFromStores;
  if (null != first) {
    found = stateFromStoresArray.find((id) => id.id === first);
  }
  if (found == null) {
    found = null;
  }
  let formatPlaySuffixResult = null;
  if (null != stateFromStores) {
    let _HermesInternal = HermesInternal;
    const tmpResult = tmp(tmp2[8]);
    formatPlaySuffixResult = tmpResult.formatPlaySuffix("<#" + stateFromStores + ">");
  }
  c18 = formatPlaySuffixResult;
  const useCallback = tmp6.useCallback;
  let closure_0 = publishedRevision(function*(arg0, value) {
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_2;
        let id;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            guildId = tmp4;
            closure_0 = undefined;
            id = undefined;
            if (null != user) {
              if ("" !== closure_0) {
                closure_1_14(true);
                publishedRevision = 1;
                let combined = tmp47;
                const parse = guildId(applicationId[10]).parse;
                const tmp51 = guildId;
                const tmp53 = guildId(applicationId[10]);
                const tmp54 = user;
                if (null != closure_1_18) {
                  const _HermesInternal = HermesInternal;
                  combined = "" + tmp47 + tmp55;
                }
                const parsed = parse(tmp54, combined);
                const tmp51Result = tmp51(applicationId[11]);
                const obj4 = { location: constants.CONJURE_PATCH_NOTES };
                c4 = 2;
                c5 = 1;
                const obj5 = { value: tmp51Result.sendMessage(user.id, parsed, false, obj4), done: false };
                return obj5;
              }
            }
            c5 = 3;
            return { value: false, done: true };
          }
        } else if (1 === c4) {
          publishedRevision = 0;
          closure_1_14(false);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          publishedRevision = 0;
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          let ok;
          if (closure_0 != null) {
            ok = closure_0.ok;
          }
          if (false === ok) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("send failed");
            throw error;
          } else {
            const obj9 = closure_0(applicationId[8]);
            const result = obj9.rememberPatchNotesChannel(closure_2, user.id);
            id = undefined;
            if (closure_0 != null) {
              const body = closure_0.body;
              if (body != null) {
                id = body.id;
              }
            }
            if (null != id) {
              const obj7 = { publishedRevision, guildId, channelId: user.id, messageId: id };
              const obj = closure_0(applicationId[9]);
              obj.recordPatchNotesSent(closure_0, obj7, first2);
            }
            publishedRevision = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        }
      } catch (tmp32) {
        if (0 === publishedRevision) {
          c5 = 3;
          throw tmp32;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const items6 = [found, formatPlaySuffixResult, applicationId, projectId, publishedRevision, guildId, first2];
  let obj4 = {
    channels: stateFromStoresArray,
    selectedChannel: found,
    pickChannel: callback1,
    maxNotesLength: diff,
    drafting: first1,
    draftFailed: tmp14,
    sending: tmp18,
    markEdited: callback,
    send: useCallback(function(arg0) {
      return closure_0(...arguments);
    }, items6)
  };
  return obj4;
};
