// Module ID: 15288
// Function ID: 15289
// Name: PremiumTrialOfferActionSheetContent
// Dependencies: [19, 17, 1374, 21, 4836, 576, 11303, 1115, 8724, 5388, 5442, 4488, 15289, 4832, 15291, 5281, 8122, 2]

// Module 15288 (PremiumTrialOfferActionSheetContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl10 from "intl" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import Text_Text from "Text/Text" /* 4832 */;
import FolderIcon from "FolderIcon" /* 5388 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5442 */;
import ChatSmileIcon from "ChatSmileIcon" /* 8724 */;
import UserIcon from "UserIcon" /* 11303 */;
import NitroWumpusFlightRight3dIllustration from "NitroWumpusFlightRight3dIllustration" /* 15289 */;
import PremiumPerksListDefault from "PremiumPerksList" /* 15291 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { contentContainer: obj2, buttonContainer: { marginVertical: 6, width: "100%", height: 48 }, title: { width: "100%", textAlign: "center" }, heroIllustrationContainer: { alignItems: "center", justifyContent: "center", height: 188, width: "100%" } };
obj2 = { paddingHorizontal: 36, paddingTop: 18, paddingBottom: 36, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", display: "flex", flexDirection: "column", gap: 0 };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(function PremiumTrialOfferActionSheetContent(onConfirm) {
  let Button;
  let NitroWheelIcon;
  let PvqncD;
  let displayNameFromSku;
  let formatToPlainString;
  let formatToPlainString2;
  let getNitroFileUploadRolloutCopy;
  let intervalDuration;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl9;
  let items1;
  let obj11;
  let obj12;
  let obj4;
  let obj5;
  let obj6;
  let q8eMc0;
  let trialOffer;
  ({ trialOffer, intervalDuration } = onConfirm);
  onConfirm = onConfirm.onConfirm;
  const tmp = closure_7();
  let subscriptionTrial;
  if (trialOffer != null) {
    subscriptionTrial = trialOffer.subscriptionTrial;
  }
  const obj = { IconComponent: UserIcon.UserIcon, label: intl.string(intl10.t.kpMomJ), description: intl2.string(intl10.t.uVUtPw) };
  intl = intl10.intl;
  intl2 = intl10.intl;
  const items = [obj, , ];
  const obj2 = { IconComponent: ChatSmileIcon.ChatSmileIcon, label: intl3.string(intl10.t["R2IV/Q"]), description: intl4.string(intl10.t["3SUJLd"]) };
  intl3 = intl10.intl;
  intl4 = intl10.intl;
  items[1] = obj2;
  const obj3 = { IconComponent: FolderIcon.FolderIcon, label: intl5.string(intl10.t["u/NJKc"]), description: getNitroFileUploadRolloutCopy(obj4) };
  intl5 = intl10.intl;
  obj4 = { legacyCopy: intl6.string(intl10.t.i1UuMk), rolloutCopy: formatToPlainString(PvqncD, obj5) };
  getNitroFileUploadRolloutCopy = NitroFileUploadExperiments.getNitroFileUploadRolloutCopy;
  NitroFileUploadExperiments;
  intl6 = intl10.intl;
  const intl7 = intl10.intl;
  formatToPlainString = intl7.formatToPlainString;
  obj5 = { maxFileSize: obj6.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2, { useSpace: false }) };
  PvqncD = intl10.t.PvqncD;
  items[2] = obj3;
  const obj7 = { style: tmp.contentContainer, children: items1 };
  items1 = [, , , ];
  obj6 = PremiumUtils;
  const obj8 = { style: tmp.heroIllustrationContainer, children: hasOwnProperty(NitroWumpusFlightRight3dIllustration.NitroWumpusFlightRight3dIllustration, { width: 180, height: 180 }) };
  items1[0] = hasOwnProperty(View, obj8);
  const obj9 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: formatToPlainString2(q8eMc0, { displayName: displayNameFromSku, duration: intervalDuration }) };
  const Text = Text_Text.Text;
  const intl8 = intl10.intl;
  formatToPlainString2 = intl8.formatToPlainString;
  let skuId;
  q8eMc0 = intl10.t.q8eMc0;
  const tmp6 = metroRequire;
  if (subscriptionTrial != null) {
    skuId = subscriptionTrial.skuId;
  }
  displayNameFromSku = null;
  if (null != skuId) {
    let skuId1;
    const getDisplayNameFromSku = PremiumUtils.getDisplayNameFromSku;
    PremiumUtils;
    if (subscriptionTrial != null) {
      skuId1 = subscriptionTrial.skuId;
    }
    displayNameFromSku = getDisplayNameFromSku(skuId1);
  }
  items1[1] = hasOwnProperty(Text, obj9);
  items1[2] = hasOwnProperty(PremiumPerksListDefault, { perks: items });
  const obj10 = { style: tmp.buttonContainer, children: hasOwnProperty(Button, obj11) };
  obj11 = { size: "lg", text: intl9.formatToPlainString(intl10.t.xASjq5, { duration: intervalDuration }), onPress: onConfirm, grow: true, icon: hasOwnProperty(NitroWheelIcon, obj12) };
  Button = tmp3(5281).Button;
  intl9 = tmp3(1115).intl;
  obj12 = { size: "md", color: nativeDefault.unsafe_rawColors.WHITE };
  NitroWheelIcon = tmp3(8122).NitroWheelIcon;
  items1[3] = hasOwnProperty(View, obj10);
  return tmp6(View, obj7);
});
const result = size.fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx");

export default memoResult;
