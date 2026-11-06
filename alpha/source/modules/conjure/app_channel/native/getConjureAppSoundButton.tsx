// Module ID: 14598
// Function ID: 14599
// Name: getConjureAppSoundButton
// Dependencies: [1113, 4024, 8765, 12125, 11076, 2]
// Exports: default

// Module 14598 (getConjureAppSoundButton)
import _modDef4024 from "module_4024" /* 4024 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11076 */;
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
  const tmp3 = _modDef4024;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(8765).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(12125).VoiceXIcon;
  }
  return obj;
};
