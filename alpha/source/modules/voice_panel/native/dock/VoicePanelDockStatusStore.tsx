// Module ID: 19630
// Function ID: 19631
// Name: VoicePanelDockStatusStore
// Dependencies: [1385, 1254, 5057, 12, 2]
// Exports: initDockStatus, releaseDockStatus, setDockHasStreamers, setDockSpeakingIds, showVoiceMoment, useDockHasStreamers, useDockSubject

// Module 19630 (VoicePanelDockStatusStore)
import _slicedToArray from "_slicedToArray" /* 5057 */;
import UserStore from "UserStore" /* 1385 */;
import module_1254 from "module_1254" /* 1254 */;
import module_12_mod from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

function endMoment() {
  let moment;
  let speakerUserId;
  c4 = null;
  const state = closure_7.getState();
  ({ moment, speakerUserId } = state);
  closure_8.cancel();
  const obj = closure_7;
  if (null != moment) {
    if (closure_5.includes(moment.userId)) {
      closure_8(moment.userId);
    }
    if (null != c6) {
      closure_8(c6);
    }
    obj.setState({ moment: null });
  }
  if (null != speakerUserId) {
    if (closure_5.includes(speakerUserId)) {
      closure_8(speakerUserId);
    }
  }
  closure_8(c6);
}
let closure_3 = { joined: 3000, left: 1500, streaming: 3000 };
let c4 = null;
let closure_5 = [];
let c6 = null;
let closure_7 = module_1254.createWithEqualityFn(() => ({ channelId: null, moment: null, speakerUserId: null, hasStreamers: false }));
let module_12 = module_12_mod;
let closure_8 = module_12.throttle((speakerUserId) => {
  const hasItem = null == speakerUserId || closure_5.includes(speakerUserId);
  if (hasItem) {
    const obj = { speakerUserId };
    closure_7.setState(obj);
  }
}, 1500);
module_12 = module_12_mod;
let closure_9 = module_12.debounce(() => {
  closure_8.cancel();
  closure_7.setState({ speakerUserId: null });
}, 1500);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockStatusStore.tsx");

export function useDockSubject(arg0) {
  let closure_0 = arg0;
  return closure_7((channelId) => {
    let tmp = null;
    if (channelId.channelId === closure_0) {
      let moment;
      if (null != channelId.moment) {
        moment = channelId.moment;
      } else {
        moment = null;
        if (null != channelId.speakerUserId) {
          moment = { kind: "speaker", userId: channelId.speakerUserId };
          const obj = { kind: "speaker", userId: channelId.speakerUserId };
        }
      }
      tmp = moment;
    }
    return tmp;
  }, _slicedToArray.shallow);
}
export function useDockHasStreamers(arg0) {
  let closure_0 = arg0;
  return closure_7((channelId) => channelId.channelId === closure_0 && channelId.hasStreamers);
}
export function setDockHasStreamers(arg0, hasStreamers) {
  const obj = closure_7;
  if (closure_7.getState().channelId === arg0) {
    const obj2 = { hasStreamers };
    obj.setState(obj2);
  }
}
export function setDockSpeakingIds(arg0, arr) {
  if (closure_7.getState().channelId === arg0) {
    closure_5 = arr;
    let atResult = arr.at(-1);
    if (atResult == null) {
      atResult = null;
    }
    if (atResult !== c6) {
      c6 = atResult;
      if (null == atResult) {
        closure_8.cancel();
        closure_9();
      } else {
        closure_9.cancel();
        closure_8(atResult);
      }
    }
  }
}
export function showVoiceMoment(arg0, userId, kind) {
  let obj3;
  let timeout;
  if (closure_7.getState().channelId === arg0) {
    if (null != UserStore.getUser(userId)) {
      const moment = obj.getState().moment;
      kind = undefined;
      if (moment != null) {
        kind = moment.kind;
      }
      const tmp3 = kind === kind && moment.userId === userId;
      if (!tmp3) {
        const obj2 = { moment: obj3 };
        obj3 = { userId, kind };
        closure_7.setState(obj2);
        if (null != timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          timeout = null;
        }
        const _setTimeout = setTimeout;
        timeout = setTimeout(endMoment, closure_3[kind]);
      }
    }
  }
}
export function initDockStatus(channelId) {
  if (null != c4) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c4);
    c4 = null;
  }
  closure_8.cancel();
  closure_9.cancel();
  closure_5 = [];
  c6 = null;
  const obj = { channelId, moment: null, speakerUserId: null, hasStreamers: false };
  closure_7.setState(obj);
}
export function releaseDockStatus(arg0) {
  const obj = closure_7;
  if (closure_7.getState().channelId === arg0) {
    if (null != c4) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c4);
      c4 = null;
    }
    closure_8.cancel();
    closure_9.cancel();
    closure_5 = [];
    c6 = null;
    obj.setState({ channelId: null, moment: null, speakerUserId: null, hasStreamers: false });
  }
}
