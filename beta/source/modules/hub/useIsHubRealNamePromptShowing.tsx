// Module ID: 12188
// Function ID: 12189
// Name: useIsHubRealNamePromptShowing
// Dependencies: [19, 12189, 2111, 2073, 1378, 1086, 12190, 558, 576, 504, 12191, 2]

// Module 12188 (useIsHubRealNamePromptShowing)
import Constants from "Constants" /* 1086 */;
import Constants2 from "Constants" /* 12190 */;
import GuildPromptsActionCreatorsDefault from "GuildPromptsActionCreators" /* 12191 */;
import react from "react" /* 19 */;
import GuildPromptsStore from "GuildPromptsStore" /* 12189 */;
import GuildMemberStore from "GuildMemberStore" /* 2111 */;
import GuildStore from "GuildStore" /* 2073 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const GuildPrompts = Constants2.GuildPrompts;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, , , ];
    items[1] = GuildPromptsStore;
    items[2] = UserStore;
    items[3] = GuildMemberStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function _() {
      const guild = GuildStore.getGuild(closure_0);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.HUB);
      }
      if (true !== hasItem) {
        return null;
      } else if (true === GuildPromptsStore.hasViewedPrompt(GuildPrompts.REAL_NAME_PROMPT, guild.id)) {
        return null;
      } else {
        const currentUser = UserStore.getCurrentUser();
        if (null == currentUser) {
          return null;
        } else {
          let id1;
          const getMember = GuildMemberStore.getMember;
          const id = guild.id;
          if (currentUser != null) {
            id1 = currentUser.id;
          }
          const member = getMember(id, id1);
          let nick;
          if (member != null) {
            nick = member.nick;
          }
          return null == nick;
        }
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  if (cResult[3] === arg0) {
    let tmp11;
    let tmp12;
    if (cResult[4] === stateFromStores) {
      tmp11 = cResult[5];
      tmp12 = cResult[6];
    }
    const effect = react.useEffect(tmp11, tmp12);
    return true === stateFromStores;
  }
  class E {
    constructor() {
      let tmp2 = null != closure_0;
      const tmp = closure_0;
      if (tmp2) {
        tmp2 = null != stateFromStores;
      }
      if (tmp2) {
        const tmp4 = stateFromStores;
        if (!tmp4) {
          const obj = GuildPromptsActionCreatorsDefault;
          obj.viewPrompt(GuildPrompts.REAL_NAME_PROMPT, tmp);
        }
      }
    }
  }
  const items1 = [stateFromStores, arg0];
  cResult[3] = arg0;
  cResult[4] = stateFromStores;
  cResult[5] = E;
  cResult[6] = items1;
  tmp12 = items1;
  tmp11 = E;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildStore, GuildPromptsStore, UserStore, GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (true !== hasItem) {
      return null;
    } else if (true === GuildPromptsStore.hasViewedPrompt(GuildPrompts.REAL_NAME_PROMPT, guild.id)) {
      return null;
    } else {
      const currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        return null;
      } else {
        let id1;
        const getMember = GuildMemberStore.getMember;
        const id = guild.id;
        if (currentUser != null) {
          id1 = currentUser.id;
        }
        const member = getMember(id, id1);
        let nick;
        if (member != null) {
          nick = member.nick;
        }
        return null == nick;
      }
    }
  });
  const items1 = [stateFromStores, arg0];
  const effect = react.useEffect(() => {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      const tmp4 = stateFromStores;
      if (!tmp4) {
        const obj = GuildPromptsActionCreatorsDefault;
        obj.viewPrompt(GuildPrompts.REAL_NAME_PROMPT, tmp);
      }
    }
  }, items1);
  return true === stateFromStores;
});
const result = size.fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default tmp2;
