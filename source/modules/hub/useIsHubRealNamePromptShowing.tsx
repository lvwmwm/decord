// Module ID: 11708
// Function ID: 90847
// Name: useIsHubRealNamePromptShowing
// Dependencies: [31, 11709, 1917, 1838, 1849, 653, 11710, 566, 11711, 2]
// Exports: default

// Module 11708 (useIsHubRealNamePromptShowing)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";
import { GuildPrompts } from "GuildPrompts";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default function useIsHubRealNamePromptShowing(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct, closure_7, closure_5];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    const guild = outer1_6.getGuild(closure_0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_8.HUB);
    }
    if (true !== hasItem) {
      return null;
    } else if (true === outer1_4.hasViewedPrompt(outer1_9.REAL_NAME_PROMPT, guild.id)) {
      return null;
    } else {
      const currentUser = outer1_7.getCurrentUser();
      if (null == currentUser) {
        return null;
      } else {
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        const member = outer1_5.getMember(guild.id, id);
        let nick;
        if (null != member) {
          nick = member.nick;
        }
        return null == nick;
      }
    }
  });
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      if (!stateFromStores) {
        stateFromStores(outer1_2[8]).viewPrompt(outer1_9.REAL_NAME_PROMPT, closure_0);
        const obj = stateFromStores(outer1_2[8]);
      }
    }
  }, items1);
  return true === stateFromStores;
};
