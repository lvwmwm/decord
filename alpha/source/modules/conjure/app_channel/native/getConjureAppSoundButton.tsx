// Module ID: 14313
// Function ID: 14314
// Name: getConjureAppSoundButton
// Dependencies: [1125, 3864, 8631, 11718, 10880, 2]
// Exports: default

// Module 14313 (getConjureAppSoundButton)
import _modDef3864 from "module_3864" /* 3864 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10880 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/conjure/app_channel/native/getConjureAppSoundButton.tsx");

export default function getConjureAppSoundButton(arg0, arg1) {
  let VoiceXIcon;
  let closure_0;
  let closure_1;
  _require = arg0;
  importDefault = arg1;
  const intl = require("intl").intl;
  const string = intl.string;
  const tmp3 = _modDef3864;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(8631).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(11718).VoiceXIcon;
  }
  return obj;
};
