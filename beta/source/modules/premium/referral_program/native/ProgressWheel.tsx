// Module ID: 12990
// Function ID: 12991
// Name: ProgressWheel
// Dependencies: [19, 17, 21, 4836, 4531, 576, 12976, 5899, 12991, 7909, 12992, 2]
// Exports: default

// Module 12990 (ProgressWheel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import FastImageDefault from "FastImage" /* 5899 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import useReferralProgramBannerDetails from "useReferralProgramBannerDetails" /* 12976 */;
import AssetRegistryDefault from "AssetRegistry" /* 12991 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = 160;
const strokeDasharray = 2 * Math.PI * 77;
let closure_8 = createStyles.createStyles({ progressCircleContainer: { width: 160, height: 160, alignItems: "center", justifyContent: "center", marginTop: 24 }, progressCircleImage: { position: "absolute", width: 93, height: 93, borderRadius: 46.5 }, glowImage: { position: "absolute", width: 180, height: 180 } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ProgressWheel.tsx");

export default function ProgressWheel(arg0) {
  let altImage;
  let items;
  let items1;
  let nReferralsSent;
  ({ nReferralsSent, altImage } = arg0);
  const tmp = closure_8();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_MOD_STRONG);
  const obj3 = { style: tmp.progressCircleContainer, children: items };
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  let tmp9 = nReferralsSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT;
  const tmp8 = View;
  if (tmp9) {
    const obj4 = { source: AssetRegistryDefault, style: tmp.glowImage };
    const tmp4Result = FastImageDefault;
    tmp9 = React3(tmp4Result, obj4);
  }
  items = [tmp9, , ];
  size = { width: v160, height: v160, children: items1 };
  items1 = [, ];
  const tmp4Result3 = inlineStylesDefault;
  items1[0] = React3(inlineStyles.Circle, { cx: 80, cy: 80, r: 77, stroke: token, strokeWidth: 6, fill: token1 });
  const obj5 = { cx: 80, cy: 80, r: 77, stroke: "#53ac66", strokeWidth: 6, fill: "transparent", strokeDasharray, strokeDashoffset: strokeDasharray * (1 - 33.3 * nReferralsSent / 100), strokeLinecap: "round", rotation: -90, origin: "80, 80" };
  items1[1] = React3(inlineStyles.Circle, obj5);
  items[1] = hasOwnProperty(tmp4Result3, size);
  const tmp13 = React3;
  const tmp4Result4 = FastImageDefault;
  if (altImage == null) {
    altImage = tmp4(12992);
  }
  const obj6 = { source: { uri: altImage }, style: tmp.progressCircleImage };
  items[2] = tmp13(tmp4Result4, obj6);
  return hasOwnProperty(tmp8, obj3);
};
