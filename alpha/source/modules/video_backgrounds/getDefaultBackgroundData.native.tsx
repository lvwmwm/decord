// Module ID: 6243
// Function ID: 6244
// Name: getDefaultBackgroundData
// Dependencies: [6237, 6244, 1113, 6245, 6246, 6247, 2]
// Exports: default

// Module 6243 (getDefaultBackgroundData)
import intl5 from "intl" /* 1113 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 6237 */;
import _modDef6244 from "module_6244" /* 6244 */;
import _modDef6245 from "module_6245" /* 6245 */;
import _modDef6246 from "module_6246" /* 6246 */;
import _modDef6247 from "module_6247" /* 6247 */;
import size from "module_2" /* 2 */;

const DefaultVideoBackground = VideoBackgroundConstants.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = size.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  const obj = {};
  const OPTION_1 = DefaultVideoBackground.OPTION_1;
  const obj2 = { id: DefaultVideoBackground.OPTION_1, source: _modDef6244, name: intl.string(intl5.t.SHUTBj) };
  intl = intl5.intl;
  obj[OPTION_1] = obj2;
  const OPTION_2 = DefaultVideoBackground.OPTION_2;
  const obj3 = { id: DefaultVideoBackground.OPTION_2, source: _modDef6245, name: intl2.string(intl5.t.UxTcIq) };
  intl2 = intl5.intl;
  obj[OPTION_2] = obj3;
  const OPTION_3 = DefaultVideoBackground.OPTION_3;
  const obj4 = { id: DefaultVideoBackground.OPTION_3, source: _modDef6246, name: intl3.string(intl5.t.HFBsc8) };
  intl3 = intl5.intl;
  obj[OPTION_3] = obj4;
  const OPTION_4 = DefaultVideoBackground.OPTION_4;
  const obj5 = { id: DefaultVideoBackground.OPTION_4, source: _modDef6247, name: intl4.string(intl5.t["/Dl3+Z"]) };
  intl4 = intl5.intl;
  obj[OPTION_4] = obj5;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};
