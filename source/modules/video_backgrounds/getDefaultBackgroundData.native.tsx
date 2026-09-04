// Module ID: 9030
// Function ID: 9031
// Name: DefaultVideoBackground
// Dependencies: [6927, 9031, 1233, 9032, 9033, 9034, 2]
// Exports: default

// Module 9030 (DefaultVideoBackground)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import VideoFilterType from "VideoFilterType" /* 6927 */;
import metadataDefault from "metadata" /* 9031 */;
import metadataDefault2 from "metadata" /* 9032 */;
import metadataDefault3 from "metadata" /* 9033 */;
import metadataDefault4 from "metadata" /* 9034 */;

const DefaultVideoBackground = VideoFilterType.DefaultVideoBackground;
let closure_4 = { id: DefaultVideoBackground.OPTION_1, source: "", name: "" };
const result = set.fileFinishedImporting("modules/video_backgrounds/getDefaultBackgroundData.native.tsx");

export default function getDefaultBackgroundData() {
  let obj = {};
  obj = { id: DefaultVideoBackground.OPTION_1, source: metadataDefault, name: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.SHUTBj);
  obj[DefaultVideoBackground.OPTION_1] = obj;
  obj = { id: DefaultVideoBackground.OPTION_2, source: metadataDefault2, name: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.UxTcIq);
  obj[DefaultVideoBackground.OPTION_2] = obj;
  obj1 = { id: DefaultVideoBackground.OPTION_3, source: metadataDefault3, name: null };
  const intl3 = getSystemLocale.intl;
  obj1[2] = intl3.string(getSystemLocale.t.HFBsc8);
  obj[DefaultVideoBackground.OPTION_3] = obj1;
  const obj2 = { id: DefaultVideoBackground.OPTION_4, source: metadataDefault4, name: null };
  const intl4 = getSystemLocale.intl;
  obj2[2] = intl4.string(getSystemLocale.t["/Dl3+Z"]);
  obj[DefaultVideoBackground.OPTION_4] = obj2;
  obj[DefaultVideoBackground.OPTION_7] = closure_4;
  obj[DefaultVideoBackground.OPTION_8] = closure_4;
  obj[DefaultVideoBackground.OPTION_9] = closure_4;
  obj[DefaultVideoBackground.OPTION_10] = closure_4;
  return obj;
};
