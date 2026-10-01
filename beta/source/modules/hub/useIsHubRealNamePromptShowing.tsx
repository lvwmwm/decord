// Module ID: 12146
// Function ID: 12147
// Name: useIsHubRealNamePromptShowing
// Dependencies: [19, 12147, 2108, 2067, 1372, 1074, 12148, 504, 12149, 2]
// Exports: default

// Module 12146 (useIsHubRealNamePromptShowing)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 12148 */;
import GuildPromptsActionCreatorsDefault from "GuildPromptsActionCreators" /* 12149 */;
import react from "react" /* 19 */;
import GuildPromptsStore from "GuildPromptsStore" /* 12147 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const GuildPrompts = Constants2.GuildPrompts;
const result = size.fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default function useIsHubRealNamePromptShowing(arg0) {
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
};
