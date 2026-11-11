// Module ID: 15038
// Function ID: 15039
// Name: getConjureAppSoundButton
// Dependencies: [1113, 4079, 7368, 12928, 12653, 2]
// Exports: default

// Module 15038 (getConjureAppSoundButton)
import _modDef4079 from "module_4079" /* 4079 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 12653 */;
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
  const tmp3 = _modDef4079;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(7368).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(12928).VoiceXIcon;
  }
  return obj;
};
