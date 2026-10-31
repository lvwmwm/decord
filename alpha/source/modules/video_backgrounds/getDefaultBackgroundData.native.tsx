// Module ID: 5933
// Function ID: 5934
// Name: getDefaultBackgroundData
// Dependencies: [5927, 5934, 1113, 5935, 5936, 5937, 2]
// Exports: default

// Module 5933 (getDefaultBackgroundData)
import intl5 from "intl" /* 1113 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 5927 */;
import _modDef5934 from "module_5934" /* 5934 */;
import _modDef5935 from "module_5935" /* 5935 */;
import _modDef5936 from "module_5936" /* 5936 */;
import _modDef5937 from "module_5937" /* 5937 */;
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
  const obj2 = { id: DefaultVideoBackground.OPTION_1, source: _modDef5934, name: intl.string(intl5.t.SHUTBj) };
  intl = intl5.intl;
  obj[OPTION_1] = obj2;
  const OPTION_2 = DefaultVideoBackground.OPTION_2;
  const obj3 = { id: DefaultVideoBackground.OPTION_2, source: _modDef5935, name: intl2.string(intl5.t.UxTcIq) };
  intl2 = intl5.intl;
  obj[OPTION_2] = obj3;
  const OPTION_3 = DefaultVideoBackground.OPTION_3;
  const obj4 = { id: DefaultVideoBackground.OPTION_3, source: _modDef5936, name: intl3.string(intl5.t.HFBsc8) };
  intl3 = intl5.intl;
  obj[OPTION_3] = obj4;
  const OPTION_4 = DefaultVideoBackground.OPTION_4;
  const obj5 = { id: DefaultVideoBackground.OPTION_4, source: _modDef5937, name: intl4.string(intl5.t["/Dl3+Z"]) };
  intl4 = intl5.intl;
  obj[OPTION_4] = obj5;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};
