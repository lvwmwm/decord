// Module ID: 12706
// Function ID: 98975
// Name: NUFVoiceChannelsTemplate
// Dependencies: [31, 33, 12707, 1212, 12708, 12696, 1820, 4944, 2]
// Exports: default

// Module 12706 (NUFVoiceChannelsTemplate)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("NUFActionSheetTemplate").fileFinishedImporting("modules/nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx");

export default function NUFVoiceChannelsTemplate(channel) {
  channel = channel.channel;
  let obj = {};
  const intl = channel(1212).intl;
  obj.title = intl.string(channel(1212).t.w5HAll);
  const intl2 = channel(1212).intl;
  obj.description = intl2.string(channel(1212).t.Ww4hhq);
  obj.imageSrc = importDefault(12708);
  const intl3 = channel(1212).intl;
  obj.CTALabel = intl3.string(channel(1212).t.eIi3Om);
  obj.onCTAPress = function onCTAPress() {
    const result = outer1_1(outer1_3[5]).handleVoiceChannelsOnboard();
    const obj = outer1_1(outer1_3[5]);
    const result1 = outer1_2(outer1_3[6]).dismissGlobalKeyboard();
    const obj2 = outer1_2(outer1_3[6]);
    const voiceChannel = outer1_1(outer1_3[7]).selectVoiceChannel(channel.id);
  };
  return jsx(importDefault(12707), {});
};
