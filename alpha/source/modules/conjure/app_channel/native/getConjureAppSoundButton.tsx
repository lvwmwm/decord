// Module ID: 13803
// Function ID: 13804
// Name: getConjureAppSoundButton
// Dependencies: [1113, 4121, 6945, 10941, 10582, 2]
// Exports: default

// Module 13803 (getConjureAppSoundButton)
import _modDef4121 from "module_4121" /* 4121 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10582 */;
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
  const tmp3 = _modDef4121;
  let obj = {
    label: string(arg1 ? tmp3.bd0Ufh : tmp3.dxBzpe),
    IconComponent: VoiceXIcon,
    onPress() {
      const obj = FramesActionCreatorsDefault;
      return obj.setFrameUserMuted(closure_0, !closure_1);
    }
  };
  if (arg1) {
    VoiceXIcon = tmp(6945).VoiceNormalIcon;
  } else {
    VoiceXIcon = tmp(10941).VoiceXIcon;
  }
  return obj;
};
