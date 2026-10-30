// Module ID: 19182
// Function ID: 19183
// Name: VoiceChannelAppHeaderButtons
// Dependencies: [19, 21, 19183, 19094, 17733, 8600, 1114, 3963, 14346, 11846, 2]
// Exports: default

// Module 19182 (VoiceChannelAppHeaderButtons)
import _modDef3963 from "module_3963" /* 3963 */;
import AssetRegistryDefault from "AssetRegistry" /* 11846 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14346 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19094 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppHeaderButtons.tsx");

export default function VoiceChannelAppHeaderButtons(arg0) {
  let ZtYyOx;
  let channel;
  let inCall;
  let intl2;
  let string;
  ({ channel, inCall } = arg0);
  let id;
  let obj = id(19183);
  const voiceChannelAppAvailable = obj.useVoiceChannelAppAvailable(channel, inCall);
  const obj2 = id(19183);
  const voiceChannelAppOpen = obj2.useVoiceChannelAppOpen(channel, inCall);
  const obj3 = id(19183);
  const voiceChannelAppVisible = obj3.useVoiceChannelAppVisible(channel);
  id = channel.id;
  let tmp7Result = null;
  if (voiceChannelAppAvailable) {
    const obj4 = {
      icon: importDefault(voiceChannelAppVisible ? 17733 : 8600),
      accessibilityLabel: string(ZtYyOx),
      onPress() {
          const obj = VoiceChannelAppActionCreators;
          return obj.toggleVoiceChannelAppSurface(id);
        }
    };
    const tmp11 = VoicePanelIconButtonDefault;
    const intl = tmp(1114).intl;
    string = intl.string;
    const tmp7 = closure_5;
    const tmp8 = closure_4;
    if (voiceChannelAppVisible) {
      ZtYyOx = tmp(1114).t["3jrUBj"];
    } else {
      ZtYyOx = tmp10(3963).ZtYyOx;
    }
    const items = [closure_3(tmp11, obj4), ];
    let tmp9Result = null;
    if (voiceChannelAppOpen) {
      const obj5 = {
        icon: AssetRegistryDefault,
        accessibilityLabel: intl2.string(_modDef3963["D+wwh8"]),
        onPress() {
              const obj = VoiceChannelAppActionCreators;
              return obj.closeVoiceChannelApp(id);
            }
      };
      const tmp10Result = VoicePanelIconButtonDefault;
      intl2 = tmp(1114).intl;
      tmp9Result = tmp9(tmp10Result, obj5);
    }
    const obj6 = { children: items };
    items[1] = tmp9Result;
    tmp7Result = tmp7(tmp8, obj6);
  }
  return tmp7Result;
};
