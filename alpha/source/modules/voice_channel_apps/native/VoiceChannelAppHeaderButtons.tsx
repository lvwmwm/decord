// Module ID: 18276
// Function ID: 18277
// Name: VoiceChannelAppHeaderButtons
// Dependencies: [19, 21, 558, 576, 18277, 16885, 8452, 1128, 3918, 18280, 18200, 11406, 2]

// Module 18276 (VoiceChannelAppHeaderButtons)
import _modDef3918 from "module_3918" /* 3918 */;
import AssetRegistryDefault from "AssetRegistry" /* 11406 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 18200 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 18280 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelAppHeaderButtons(arg0) {
  let channel;
  let id;
  let inCall;
  let intl2;
  let items;
  let obj = id(576);
  const cResult = obj.c(14);
  ({ channel, inCall } = arg0);
  const obj2 = id(18277);
  const voiceChannelAppAvailable = obj2.useVoiceChannelAppAvailable(channel, inCall);
  const obj3 = id(18277);
  const voiceChannelAppOpen = obj3.useVoiceChannelAppOpen(channel, inCall);
  const obj4 = id(18277);
  const voiceChannelAppVisible = obj4.useVoiceChannelAppVisible(channel);
  id = channel.id;
  if (voiceChannelAppAvailable) {
    let tmp10;
    let tmp12;
    const tmp8Result = importDefault(voiceChannelAppVisible ? 16885 : 8452);
    if (cResult[0] !== voiceChannelAppVisible) {
      let ZtYyOx;
      const intl = tmp(1128).intl;
      const string = intl.string;
      if (voiceChannelAppVisible) {
        ZtYyOx = tmp(1128).t["3jrUBj"];
      } else {
        ZtYyOx = tmp8(3918).ZtYyOx;
      }
      const stringResult = string(ZtYyOx);
      cResult[0] = voiceChannelAppVisible;
      cResult[1] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[1];
    }
    if (cResult[2] !== id) {
      const fn = function b() {
        const obj = VoiceChannelAppActionCreators;
        return obj.toggleVoiceChannelAppSurface(id);
      };
      cResult[2] = id;
      cResult[3] = fn;
      tmp12 = fn;
    } else {
      tmp12 = cResult[3];
    }
    if (cResult[4] === tmp8Result) {
      if (cResult[5] === tmp10) {
        let tmp13;
        if (cResult[6] === tmp12) {
          tmp13 = cResult[7];
        }
        if (cResult[8] === id) {
          let tmp16;
          if (cResult[9] === voiceChannelAppOpen) {
            tmp16 = cResult[10];
          }
          if (cResult[11] === tmp13) {
            let tmp20;
            if (cResult[12] === tmp16) {
              tmp20 = cResult[13];
            }
            return tmp20;
          }
          const obj5 = { children: items };
          items = [tmp13, tmp16];
          const tmp23 = closure_5(closure_4, obj5);
          cResult[11] = tmp13;
          cResult[12] = tmp16;
          cResult[13] = tmp23;
          tmp20 = tmp23;
        }
        let tmp17 = null;
        if (voiceChannelAppOpen) {
          const obj6 = {
            icon: AssetRegistryDefault,
            accessibilityLabel: intl2.string(_modDef3918["D+wwh8"]),
            onPress() {
                      const obj = VoiceChannelAppActionCreators;
                      return obj.closeVoiceChannelApp(id);
                    }
          };
          const tmp8Result2 = VoicePanelIconButtonDefault;
          intl2 = tmp(1128).intl;
          tmp17 = closure_3(tmp8Result2, obj6);
        }
        cResult[8] = id;
        cResult[9] = voiceChannelAppOpen;
        cResult[10] = tmp17;
        tmp16 = tmp17;
      }
    }
    const obj7 = { icon: tmp8Result, accessibilityLabel: tmp10, onPress: tmp12 };
    const tmp15 = closure_3(VoicePanelIconButtonDefault, obj7);
    cResult[4] = tmp8Result;
    cResult[5] = tmp10;
    cResult[6] = tmp12;
    cResult[7] = tmp15;
    tmp13 = tmp15;
  } else {
    return null;
  }
}) : (function VoiceChannelAppHeaderButtons(arg0) {
  let ZtYyOx;
  let channel;
  let inCall;
  let intl2;
  let string;
  ({ channel, inCall } = arg0);
  let id;
  let obj = id(18277);
  const voiceChannelAppAvailable = obj.useVoiceChannelAppAvailable(channel, inCall);
  const obj2 = id(18277);
  const voiceChannelAppOpen = obj2.useVoiceChannelAppOpen(channel, inCall);
  const obj3 = id(18277);
  const voiceChannelAppVisible = obj3.useVoiceChannelAppVisible(channel);
  id = channel.id;
  let tmp7Result = null;
  if (voiceChannelAppAvailable) {
    const obj4 = {
      icon: importDefault(voiceChannelAppVisible ? 16885 : 8452),
      accessibilityLabel: string(ZtYyOx),
      onPress() {
          const obj = VoiceChannelAppActionCreators;
          return obj.toggleVoiceChannelAppSurface(id);
        }
    };
    const tmp11 = VoicePanelIconButtonDefault;
    const intl = tmp(1128).intl;
    string = intl.string;
    const tmp7 = closure_5;
    const tmp8 = closure_4;
    if (voiceChannelAppVisible) {
      ZtYyOx = tmp(1128).t["3jrUBj"];
    } else {
      ZtYyOx = tmp10(3918).ZtYyOx;
    }
    const items = [closure_3(tmp11, obj4), ];
    let tmp9Result = null;
    if (voiceChannelAppOpen) {
      const obj5 = {
        icon: AssetRegistryDefault,
        accessibilityLabel: intl2.string(_modDef3918["D+wwh8"]),
        onPress() {
              const obj = VoiceChannelAppActionCreators;
              return obj.closeVoiceChannelApp(id);
            }
      };
      const tmp10Result = VoicePanelIconButtonDefault;
      intl2 = tmp(1128).intl;
      tmp9Result = tmp9(tmp10Result, obj5);
    }
    const obj6 = { children: items };
    items[1] = tmp9Result;
    tmp7Result = tmp7(tmp8, obj6);
  }
  return tmp7Result;
});
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppHeaderButtons.tsx");

export default tmp4;
