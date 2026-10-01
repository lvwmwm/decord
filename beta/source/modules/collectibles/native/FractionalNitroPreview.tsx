// Module ID: 12712
// Function ID: 12713
// Name: FractionalNitroPreview
// Dependencies: [19, 17, 1074, 1374, 21, 4836, 576, 1115, 5442, 4488, 5293, 5899, 12713, 12714, 6554, 4832, 2]
// Exports: FractionalNitroPreview

// Module 12712 (FractionalNitroPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import FastImageDefault from "FastImage" /* 5899 */;
import CheckmarkSmallIcon2 from "CheckmarkSmallIcon" /* 6554 */;
import _modDef12713 from "module_12713" /* 12713 */;
import NitroIconDefault from "NitroIcon" /* 12714 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const VerticalGradient = Constants.VerticalGradient;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, gradient: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, headerImage: { width: 211, height: 157, resizeMode: "cover" }, nitroIconContainer: { alignSelf: "flex-start" }, benefits: obj3, benefitRow: obj4 };
obj2 = { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, overflow: "hidden", alignSelf: "center", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_8 };
obj4 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  let IDAfOy;
  let benefitRow;
  let formatToPlainString;
  let intl3;
  let items1;
  let obj2;
  let obj3;
  let obj7;
  const tmp = closure_8();
  _require = tmp;
  const intl = require("intl").intl;
  let items = [intl.string(require("intl").t.E1NP2x), , , , ];
  const intl2 = require("intl").intl;
  items[1] = intl2.string(require("intl").t.kpMomJ);
  let obj = { legacyCopy: intl3.string(require("intl").t.xT1Vfn), rolloutCopy: formatToPlainString(IDAfOy, obj2) };
  const getNitroFileUploadRolloutCopy = require("NitroFileUploadExperiments").getNitroFileUploadRolloutCopy;
  require("NitroFileUploadExperiments");
  intl3 = require("intl").intl;
  const intl4 = require("intl").intl;
  formatToPlainString = intl4.formatToPlainString;
  obj2 = { maxFileSize: obj3.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false }) };
  IDAfOy = require("intl").t.IDAfOy;
  obj3 = require("PremiumUtils");
  items[2] = getNitroFileUploadRolloutCopy(obj);
  const intl5 = require("intl").intl;
  items[3] = intl5.string(require("intl").t.myyAEr);
  const intl6 = require("intl").intl;
  items[4] = intl6.string(require("intl").t.zTk8Ul);
  const obj4 = { style: tmp.container, children: items1 };
  items1 = [, , , ];
  const obj5 = { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  items1[0] = closure_6(LinearGradientDefault, obj5);
  const obj6 = { source: obj7, style: tmp.headerImage };
  obj7 = { uri: _modDef12713 };
  const tmp3 = FastImageDefault;
  items1[1] = closure_6(tmp3, obj6);
  const obj8 = { style: tmp.nitroIconContainer, children: closure_6(NitroIconDefault, {}) };
  items1[2] = closure_6(View, obj8);
  const obj9 = {
    style: tmp.benefits,
    children: items.map((children, index) => {
      let items;
      const obj = { style: benefitRow.benefitRow, children: items };
      const obj2 = { color: nativeDefault.colors.WHITE };
      const CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      items = [metroRequire(CheckmarkSmallIcon, obj2), ];
      const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", children };
      items[1] = metroRequire(Text_Text.Text, obj3);
      return metroImportDefault(View, obj, index);
    })
  };
  items1[3] = closure_6(View, obj9);
  return closure_7(View, obj4);
};
