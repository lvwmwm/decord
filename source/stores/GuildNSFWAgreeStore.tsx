// Module ID: 4518
// Function ID: 4519
// Name: initialize
// Dependencies: [595, 589, 4517, 709, 2]

// Module 4518 (initialize)
import { Store } from "initialize";

const require = arg1;
const GuildNSFWAgreeStore = "GuildNSFWAgreeStore";
let closure_3 = {};
class GuildNSFWAgreeStore extends Store {
}
const prototype = GuildNSFWAgreeStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = require(595) /* Storage */.Storage;
  let value = Storage.get(GuildNSFWAgreeStore);
  if (value == null) {
    value = closure_3;
  }
  closure_3 = value;
};
prototype["didAgree"] = function didAgree(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    const result = require(4517) /* shouldShowAgeGateForVoiceChannel */.shouldAgeVerifyForAgeGate();
    let tmp5 = !result;
    if (!result) {
      tmp5 = table[arg0] || false;
      const tmp7 = table[arg0] || false;
    }
    tmp = tmp5;
    const obj = require(4517) /* shouldShowAgeGateForVoiceChannel */;
  }
  return tmp;
};
GuildNSFWAgreeStore.displayName = "GuildNSFWAgreeStore";
const guildNSFWAgreeStore = new GuildNSFWAgreeStore(require("dispatcher"), {
  GUILD_NSFW_AGREE: function handleGuildNSFWAgree(guildId) {
    closure_3[guildId.guildId] = true;
    const Storage = require(595) /* Storage */.Storage;
    const result = Storage.set(GuildNSFWAgreeStore, closure_3);
  }
});
let result = require("shouldShowAgeGateForVoiceChannel").fileFinishedImporting("stores/GuildNSFWAgreeStore.tsx");

export default guildNSFWAgreeStore;
