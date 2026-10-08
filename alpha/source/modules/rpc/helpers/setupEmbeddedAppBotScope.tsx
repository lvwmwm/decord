// Module ID: 11139
// Function ID: 11140
// Name: setupEmbeddedAppBotScope
// Dependencies: [2124, 11140, 8433, 6102, 2]
// Exports: default

// Module 11139 (setupEmbeddedAppBotScope)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6102 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8433 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 2124 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c3, importDefault;

let GuildMemberStore = GuildMemberStore_mod;
const result = size.fileFinishedImporting("modules/rpc/helpers/setupEmbeddedAppBotScope.tsx");

export default function setupEmbeddedAppBotScope(context) {
  let closure_1;
  let id;
  function handleMemberChange() {
    if (null != closure_1) {
      if (null != id) {
        if (null != GuildMemberStore.getMember(closure_1, id)) {
          c3 = false;
          const scopes2 = context.authorization.scopes;
          scopes2.add(OAuth2Scopes.OAuth2Scopes.BOT);
        } else {
          const scopes = context.authorization.scopes;
          scopes.delete(OAuth2Scopes.OAuth2Scopes.BOT);
          const tmp7 = c3;
          if (!tmp7) {
            c3 = true;
            const obj = GuildActionCreatorsDefault;
            const membersById = obj.requestMembersById(tmp, tmp14);
          }
        }
      }
    }
  }
  const tmp = require("getGuildIdForEmbeddedSurface")(context.context.surface);
  importDefault = tmp;
  const bot = context.application.bot;
  id = undefined;
  if (bot != null) {
    id = bot.id;
  }
  if (null != tmp) {
    if (null != id) {
      GuildMemberStore = false;
      GuildMemberStore.addChangeListener(handleMemberChange);
      const signal = context.abortController.signal;
      const listener = signal.addEventListener("abort", () => {
        GuildMemberStore.removeChangeListener(handleMemberChange);
      });
      handleMemberChange();
    }
  }
};
