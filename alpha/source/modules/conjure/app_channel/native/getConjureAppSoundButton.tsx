// Module ID: 13785
// Function ID: 13786
// Name: getConjureAppSoundButton
// Dependencies: [1113, 4089, 6915, 10919, 10560, 2]
// Exports: default

// Module 13785 (getConjureAppSoundButton)
import _modDef4089 from "module_4089" /* 4089 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10560 */;
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
  const tmp3 = _modDef4089;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(6915).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(10919).VoiceXIcon;
  }
  return obj;
};
