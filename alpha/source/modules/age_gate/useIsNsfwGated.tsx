// Module ID: 9968
// Function ID: 9969
// Name: useIsNsfwGated
// Dependencies: [6855, 1385, 504, 2]
// Exports: default

// Module 9968 (useIsNsfwGated)
import GuildNSFWAgreeStore from "GuildNSFWAgreeStore" /* 6855 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser;

const result = size.fileFinishedImporting("modules/age_gate/useIsNsfwGated.tsx");

export default function useIsNsfwGated(nsfw) {
  _require = nsfw;
  nsfw = nsfw.nsfw;
  const items = [UserStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items1 = [GuildNSFWAgreeStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildNSFWAgreeStore.didAgree(nsfw.guild_id));
  let tmp3 = !stateFromStores1;
  if (nsfw) {
    if (stateFromStores1) {
      tmp3 = false === stateFromStores;
    }
    nsfw = tmp3;
  }
  return nsfw;
};
