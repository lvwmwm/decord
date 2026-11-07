// Module ID: 14631
// Function ID: 14632
// Name: getConjureAppSoundButton
// Dependencies: [1113, 4026, 8744, 12116, 11061, 2]
// Exports: default

// Module 14631 (getConjureAppSoundButton)
import _modDef4026 from "module_4026" /* 4026 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11061 */;
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
  const tmp3 = _modDef4026;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(8744).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(12116).VoiceXIcon;
  }
  return obj;
};
