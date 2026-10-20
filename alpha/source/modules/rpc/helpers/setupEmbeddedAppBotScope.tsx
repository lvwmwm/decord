// Module ID: 11350
// Function ID: 11351
// Name: setupEmbeddedAppBotScope
// Dependencies: [4860, 9189, 8747, 6778, 2]
// Exports: default

// Module 11350 (setupEmbeddedAppBotScope)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6778 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8747 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 4860 */;
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
