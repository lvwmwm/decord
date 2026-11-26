// Module ID: 10219
// Function ID: 10220
// Name: setupEmbeddedAppBotScope
// Dependencies: [4955, 7648, 5781, 6991, 2]
// Exports: default

// Module 10219 (setupEmbeddedAppBotScope)
import OAuth2Scopes from "OAuth2Scopes" /* 5781 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6991 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 4955 */;
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
