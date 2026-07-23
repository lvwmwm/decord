// Module ID: 12354
// Function ID: 96054
// Name: VoicePanelSpoilerAlert
// Dependencies: [31, 33, 4475, 4475, 1212, 5048, 4944, 2]
// Exports: default

// Module 12354 (VoicePanelSpoilerAlert)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx");

export default function VoicePanelSpoilerAlert(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(4475);
  let closure_1 = obj.useDismissModalCallback();
  obj = {};
  const intl = channelId(1212).intl;
  obj.title = intl.string(channelId(1212).t["q38/ae"]);
  const intl2 = channelId(1212).intl;
  obj.content = intl2.string(channelId(1212).t["2fDWXK"]);
  obj = {};
  const obj1 = {
    variant: "primary",
    onPress() {
      callback(outer1_2[5]).spoilerAgree(channelId);
      const obj = callback(outer1_2[5]);
      const voiceChannel = callback(outer1_2[6]).selectVoiceChannel(channelId);
      callback();
    }
  };
  const intl3 = channelId(1212).intl;
  obj1.text = intl3.string(channelId(1212).t.p89ACt);
  const items = [callback(channelId(4475).AlertActionButton, obj1, "confirm"), ];
  const obj2 = {
    variant: "secondary",
    onPress() {
      callback();
    }
  };
  const intl4 = channelId(1212).intl;
  obj2.text = intl4.string(channelId(1212).t["/g10LC"]);
  items[1] = callback(channelId(4475).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = callback2(channelId(4475).AlertActions, obj);
  return callback(channelId(4475).AlertModal, obj);
};
export const VOICE_PANEL_SPOILER_KEY = "voice-panel-spoiler";
