// Module ID: 19321
// Function ID: 19322
// Name: VoiceChannelAppHeaderButtons
// Dependencies: [19, 21, 19322, 19262, 17285, 7552, 1113, 4219, 13806, 10329, 2]
// Exports: default

// Module 19321 (VoiceChannelAppHeaderButtons)
import _modDef4219 from "module_4219" /* 4219 */;
import AssetRegistryDefault from "AssetRegistry" /* 10329 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13806 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19262 */;
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
  let obj = id(19322);
  const voiceChannelAppAvailable = obj.useVoiceChannelAppAvailable(channel, inCall);
  const obj2 = id(19322);
  const voiceChannelAppOpen = obj2.useVoiceChannelAppOpen(channel, inCall);
  const obj3 = id(19322);
  const voiceChannelAppVisible = obj3.useVoiceChannelAppVisible(channel);
  id = channel.id;
  let tmp7Result = null;
  if (voiceChannelAppAvailable) {
    const obj4 = {
      icon: importDefault(voiceChannelAppVisible ? 17285 : 7552),
      accessibilityLabel: string(ZtYyOx),
      onPress() {
          const obj = VoiceChannelAppActionCreators;
          return obj.toggleVoiceChannelAppSurface(id);
        }
    };
    const tmp11 = VoicePanelIconButtonDefault;
    const intl = tmp(1113).intl;
    string = intl.string;
    const tmp7 = closure_5;
    const tmp8 = closure_4;
    if (voiceChannelAppVisible) {
      ZtYyOx = tmp(1113).t["3jrUBj"];
    } else {
      ZtYyOx = tmp10(4219).ZtYyOx;
    }
    const items = [closure_3(tmp11, obj4), ];
    let tmp9Result = null;
    if (voiceChannelAppOpen) {
      const obj5 = {
        icon: AssetRegistryDefault,
        accessibilityLabel: intl2.string(_modDef4219["D+wwh8"]),
        onPress() {
              const obj = VoiceChannelAppActionCreators;
              return obj.closeVoiceChannelApp(id);
            }
      };
      const tmp10Result = VoicePanelIconButtonDefault;
      intl2 = tmp(1113).intl;
      tmp9Result = tmp9(tmp10Result, obj5);
    }
    const obj6 = { children: items };
    items[1] = tmp9Result;
    tmp7Result = tmp7(tmp8, obj6);
  }
  return tmp7Result;
};
