// Module ID: 14658
// Function ID: 14659
// Name: getConjureAppSoundButton
// Dependencies: [1113, 4028, 8750, 12125, 11070, 2]
// Exports: default

// Module 14658 (getConjureAppSoundButton)
import _modDef4028 from "module_4028" /* 4028 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11070 */;
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
  const tmp3 = _modDef4028;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(8750).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(12125).VoiceXIcon;
  }
  return obj;
};
