// Module ID: 14438
// Function ID: 14439
// Name: useIsHubRealNamePromptShowing
// Dependencies: [19, 14439, 5053, 5012, 1385, 1072, 14440, 504, 14441, 2]
// Exports: default

// Module 14438 (useIsHubRealNamePromptShowing)
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 14440 */;
import GuildPromptsActionCreatorsDefault from "GuildPromptsActionCreators" /* 14441 */;
import react from "react" /* 19 */;
import GuildPromptsStore from "GuildPromptsStore" /* 14439 */;
import GuildMemberStore from "GuildMemberStore" /* 5053 */;
import GuildStore from "GuildStore" /* 5012 */;
import UserStore from "UserStore" /* 1385 */;
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
