// Module ID: 19234
// Function ID: 19235
// Name: VoiceChannelAppHeaderButtons
// Dependencies: [19, 21, 19235, 19143, 17777, 8608, 1113, 3966, 14384, 11884, 2]
// Exports: default

// Module 19234 (VoiceChannelAppHeaderButtons)
import _modDef3966 from "module_3966" /* 3966 */;
import AssetRegistryDefault from "AssetRegistry" /* 11884 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14384 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19143 */;
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
  let obj = id(19235);
  const voiceChannelAppAvailable = obj.useVoiceChannelAppAvailable(channel, inCall);
  const obj2 = id(19235);
  const voiceChannelAppOpen = obj2.useVoiceChannelAppOpen(channel, inCall);
  const obj3 = id(19235);
  const voiceChannelAppVisible = obj3.useVoiceChannelAppVisible(channel);
  id = channel.id;
  let tmp7Result = null;
  if (voiceChannelAppAvailable) {
    const obj4 = {
      icon: importDefault(voiceChannelAppVisible ? 17777 : 8608),
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
      ZtYyOx = tmp10(3966).ZtYyOx;
    }
    const items = [closure_3(tmp11, obj4), ];
    let tmp9Result = null;
    if (voiceChannelAppOpen) {
      const obj5 = {
        icon: AssetRegistryDefault,
        accessibilityLabel: intl2.string(_modDef3966["D+wwh8"]),
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
