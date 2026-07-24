// Module ID: 15915
// Function ID: 122946
// Name: VoicePanelNsfwAlert
// Dependencies: [31, 1391, 1838, 33, 4475, 4475, 1212, 5048, 4944, 2]
// Exports: default

// Module 15915 (VoicePanelNsfwAlert)
import "result";
import { isGuildNSFW } from "isGuildOwner";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx");

export default function VoicePanelNsfwAlert(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  let obj = guildId(4475);
  const dependencyMap = obj.useDismissModalCallback();
  const tmp = isGuildNSFW(guild.getGuild(guildId));
  obj = {};
  const intl = guildId(1212).intl;
  const string = intl.string;
  const t = guildId(1212).t;
  if (tmp) {
    let stringResult = string(t.xi46lg);
  } else {
    stringResult = string(t.ZmwvDc);
  }
  obj.title = stringResult;
  const intl2 = guildId(1212).intl;
  const string2 = intl2.string;
  const t2 = guildId(1212).t;
  if (tmp) {
    let string2Result = string2(t2.ZtuRts);
  } else {
    string2Result = string2(t2.E4Cd5I);
  }
  obj.content = string2Result;
  obj = {};
  const obj1 = {
    variant: "primary",
    onPress() {
      channelId(5048).nsfwAgree(guildId);
      const obj = channelId(5048);
      const voiceChannel = channelId(4944).selectVoiceChannel(channelId);
      dependencyMap();
    }
  };
  const intl3 = guildId(1212).intl;
  obj1.text = intl3.string(guildId(1212).t.wVq7uo);
  const items = [callback(guildId(4475).AlertActionButton, obj1, "confirm"), ];
  const obj2 = {
    variant: "secondary",
    onPress() {
      channelId(5048).nsfwReturnToSafety(guildId);
      dependencyMap();
    }
  };
  const intl4 = guildId(1212).intl;
  obj2.text = intl4.string(guildId(1212).t["/g10LC"]);
  items[1] = callback(guildId(4475).AlertActionButton, obj2, "add-profile-picture");
  obj.children = items;
  obj.actions = callback2(guildId(4475).AlertActions, obj);
  return callback(guildId(4475).AlertModal, obj);
};
export const VOICE_PANEL_NSFW_KEY = "voice-panel-nsfw";
