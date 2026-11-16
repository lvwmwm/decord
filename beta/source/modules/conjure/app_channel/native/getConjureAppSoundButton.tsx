// Module ID: 15148
// Function ID: 15149
// Name: getConjureAppSoundButton
// Dependencies: [1113, 4131, 7432, 13018, 12743, 2]
// Exports: default

// Module 15148 (getConjureAppSoundButton)
import _modDef4131 from "module_4131" /* 4131 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 12743 */;
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
  const tmp3 = _modDef4131;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(7432).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(13018).VoiceXIcon;
  }
  return obj;
};
