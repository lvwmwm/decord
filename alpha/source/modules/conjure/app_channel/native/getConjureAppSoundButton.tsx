// Module ID: 13754
// Function ID: 13755
// Name: getConjureAppSoundButton
// Dependencies: [1112, 4091, 6914, 10861, 10502, 2]
// Exports: default

// Module 13754 (getConjureAppSoundButton)
import _modDef4091 from "module_4091" /* 4091 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10502 */;
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
  const tmp3 = _modDef4091;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(6914).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(10861).VoiceXIcon;
  }
  return obj;
};
