// Module ID: 12153
// Function ID: 12154
// Name: ChatInputGuardAutomodUserProfileQuarantine
// Dependencies: [19, 502, 2124, 4695, 21, 558, 576, 4715, 504, 11402, 1126, 12154, 12122, 2]

// Module 12153 (ChatInputGuardAutomodUserProfileQuarantine)
import Fragment from "Fragment" /* 21 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4695 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4715 */;
import GuildAutomodActionActionCreators from "GuildAutomodActionActionCreators" /* 11402 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12122 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set, tmp2, tmp4, tmp5, tmp9;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  let first;
  let tmp7;
  let tmp8;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(17);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, ];
    items[1] = GuildMemberStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class A {
      constructor() {
        if (null == guildId) {
          tmp7 = globalThis;
          _Set = Set;
          self = this;
          self2 = this;
          set = new Set();
          tmp9 = set;
          return set;
        } else {
          tmp2 = closure_4;
          tmp4 = closure_0;
          tmp5 = closure_2;
          id = closure_4.getId();
          obj = closure_0(closure_2[7]);
          tmp6 = closure_5;
          return obj.getAutomodQuarantinedGuildMemberFlags(closure_5.getMember(tmp, id));
        }
      }
    }
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = A;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = A;
  } else {
    class A {
      constructor() {
        if (null == guildId) {
          tmp7 = globalThis;
          _Set = Set;
          self = this;
          self2 = this;
          set = new Set();
          tmp9 = set;
          return set;
        } else {
          tmp2 = closure_4;
          tmp4 = closure_0;
          tmp5 = closure_2;
          id = closure_4.getId();
          obj = closure_0(closure_2[7]);
          tmp6 = closure_5;
          return obj.getAutomodQuarantinedGuildMemberFlags(closure_5.getMember(tmp, id));
        }
      }
    }
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== guildId) {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
    cResult[4] = guildId;
    cResult[5] = R;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
    const automodReason = obj3.getAutomodReason(stateFromStores);
    cResult[6] = stateFromStores;
    cResult[7] = automodReason;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
  }
  if (cResult[8] !== tmp11) {
    let stringResult;
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
    if (tmp11 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
      class R {
        constructor() {
          obj = closure_0(closure_2[9]);
          result = obj.openAutomodProfileQuarantineAlert(guildId);
          return;
        }
      }
      stringResult = obj5.string(tmp(1126).t.Viksoo);
    } else {
      class R {
        constructor() {
          obj = closure_0(closure_2[9]);
          result = obj.openAutomodProfileQuarantineAlert(guildId);
          return;
        }
      }
      stringResult = obj4.string(tmp(1126).t["/PGQf0"]);
    }
    cResult[8] = tmp11;
    cResult[9] = stringResult;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
  }
  if (cResult[10] !== tmp11) {
    let stringResult1;
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
    if (tmp11 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
      class R {
        constructor() {
          obj = closure_0(closure_2[9]);
          result = obj.openAutomodProfileQuarantineAlert(guildId);
          return;
        }
      }
      stringResult1 = obj7.string(tmp(1126).t.ml72ZU);
    } else {
      class R {
        constructor() {
          obj = closure_0(closure_2[9]);
          result = obj.openAutomodProfileQuarantineAlert(guildId);
          return;
        }
      }
      stringResult1 = obj6.string(tmp(1126).t["8HW7r9"]);
    }
    cResult[10] = tmp11;
    cResult[11] = stringResult1;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
    const tmp18 = jsx(tmp(12154).ChatXIcon, {});
    cResult[12] = tmp18;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
  }
  if (cResult[13] === tmp13) {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
  }
  cResult[13] = tmp13;
  cResult[14] = tmp10;
  cResult[15] = tmp15;
  cResult[16] = jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: tmp10, actionLabel: tmp13, icon: tmp17, message: tmp15 });
  jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: tmp10, actionLabel: tmp13, icon: tmp17, message: tmp15 });
}) : (function ChatInputGuardAutomodUserProfileQuarantine(guildId) {
  let stringResult;
  let stringResult1;
  guildId = guildId.guildId;
  const tmp = guildId;
  let obj = guildId(504);
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, function() {
    if (null == guildId) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      return set;
    } else {
      const id = AuthenticationStore.getId();
      const obj = AutomodPermissionUtils;
      return obj.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, id));
    }
  }, items1);
  const callback = react.useCallback(() => {
    const obj = GuildAutomodActionActionCreators;
    const result = obj.openAutomodProfileQuarantineAlert(guildId);
  }, items2);
  const obj2 = guildId(4715);
  const automodReason = obj2.getAutomodReason(stateFromStores);
  const tmp6 = GuildMemberFlags;
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = tmp(1126).intl;
    stringResult = intl2.string(tmp(1126).t.Viksoo);
  } else {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t["/PGQf0"]);
  }
  if (automodReason === tmp6.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = tmp(1126).intl;
    stringResult1 = intl4.string(tmp(1126).t.ml72ZU);
  } else {
    const intl3 = tmp(1126).intl;
    stringResult1 = intl3.string(tmp(1126).t["8HW7r9"]);
  }
  ChatInputGuardDefault;
  return <tmp9 type="simple-action" actionOnPress={callback} actionLabel={stringResult} icon={null} message={stringResult1} />;
}));
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default memoResult;
