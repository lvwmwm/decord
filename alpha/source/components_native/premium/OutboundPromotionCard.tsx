// Module ID: 15443
// Function ID: 15444
// Name: OutboundPromotionCard
// Dependencies: [32, 19, 17, 1072, 21, 5014, 575, 6778, 5272, 7321, 1113, 5624, 5754, 5253, 9667, 15444, 5959, 15445, 1994, 9668, 5717, 5634, 5258, 2]
// Exports: default

// Module 15443 (OutboundPromotionCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5272 */;
import Text_Text from "Text/Text" /* 5624 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5754 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import LegacyTokens from "LegacyTokens" /* 6778 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7321 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
function TermsAndConditionsActionSheet(termsAndConditions) {
  let BottomSheetTitleHeader;
  let Text;
  let intl;
  let obj2;
  let obj3;
  let obj4;
  termsAndConditions = termsAndConditions.termsAndConditions;
  const obj = { header: metroRequire(BottomSheetTitleHeader, obj2), children: metroRequire(Text, obj3) };
  const tmp = closure_8();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { title: intl.string(intl4.t.PdKWVT) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl4.intl;
  obj3 = { style: tmp.termsAndConditionsText, variant: "text-sm/medium", children: obj4.parse(termsAndConditions, false, { allowLinks: true }) };
  Text = Text_Text.Text;
  obj4 = MarkupUtilsDefault;
  return metroRequire(BottomSheet, obj);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING = Constants.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, mainContainer: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, textContainer: { flexDirection: "row", flexShrink: 1, alignItems: "center" }, imageContainer: size, image: { width: 28, height: 28, resizeMode: "contain" }, title: { lineHeight: 20 }, subText: { lineHeight: 18 }, claimButton: { paddingHorizontal: 12 }, moreDetails: { marginLeft: 40 }, termsAndConditionsText: { paddingHorizontal: 16, paddingTop: 16 }, buttonContainer: { flexGrow: 1, flexDirection: "row", marginLeft: 4, justifyContent: "flex-end" } };
obj2 = { flex: 1, flexDirection: "column", paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: 8 };
createStyles = createStyles.createStyles;
size = { width: 32, height: 32, marginRight: 8, borderRadius: nativeDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: LegacyTokens.DARK_BLACK_500_LIGHT_PRIMARY_100 };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("components_native/premium/OutboundPromotionCard.tsx");

export default function OutboundPromotionCard(outboundPromotion) {
  let Text;
  let closure_3;
  let first;
  let formatToPlainStringResult;
  let intl3;
  let items1;
  let items2;
  let items3;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj7;
  let obj9;
  let stringResult;
  outboundPromotion = outboundPromotion.outboundPromotion;
  const code = outboundPromotion.code;
  first = undefined;
  _slicedToArray = undefined;
  let tmp = closure_8();
  const tmp2 = code;
  const tmp4 = code(first[13])();
  let obj = outboundPromotion(first[14]);
  const promotionImageURL = obj.getPromotionImageURL(outboundPromotion.id, tmp4);
  const tmp8 = code(first[15])(outboundPromotion, null != code);
  const intl = outboundPromotion(first[10]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = outboundPromotion(first[10]).t;
  if (null != code) {
    let obj2 = { endDate: tmp8 };
    formatToPlainStringResult = formatToPlainString(t.VaD05h, obj2);
  } else {
    let obj3 = { endDate: tmp8 };
    formatToPlainStringResult = formatToPlainString(t["/XWgfG"], obj3);
  }
  const intl2 = tmp5(tmp3[10]).intl;
  const string = intl2.string;
  const t2 = tmp5(tmp3[10]).t;
  if (null != code) {
    stringResult = string(t2["2cHUti"]);
  } else {
    stringResult = string(t2.O13yhz);
  }
  [first, _slicedToArray] = react.useState(false);
  const items = [first, code, outboundPromotion];
  const layoutEffect = react.useLayoutEffect(() => {
    const tmp = first;
    if (tmp) {
      let obj = actions_AlertActionCreatorsDefault;
      const obj2 = {
        importer() {
            const promise = outboundPromotion(first[18])(first[17], first.paths);
            return promise.then((result) => {
              let closure_0 = result.default;
              return (arg0) => {
                let obj = {
                  onCancel() {
                    const obj = code(closure_2_2[16]);
                    obj.close();
                    closure_1_3(false);
                  },
                  onClaim: closure_3_1(first[19]).addClaimedOutboundPromotionCode,
                  code,
                  outboundPromotion
                };
                const merged = Object.assign(arg0);
                return closure_3_6(closure_0, obj);
              };
            });
          },
        isDismissable: false
      };
      obj.openLazy(obj2);
    }
  }, items);
  const obj4 = { style: tmp.card, children: items3 };
  const obj5 = { style: tmp.mainContainer, children: items1 };
  const obj6 = { style: tmp.imageContainer, children: closure_6(tmp2(first[20]), obj7) };
  obj7 = { style: tmp.image, source: { uri: promotionImageURL } };
  items1 = [closure_6(View, obj6), , ];
  const obj8 = { style: tmp.textContainer, children: closure_7(View, obj9) };
  obj9 = { children: items2 };
  items2 = [, ];
  const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: outboundPromotion.outboundTitle };
  items2[0] = closure_6(outboundPromotion(first[11]).Text, obj10);
  const obj11 = { style: tmp.subText, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult };
  items2[1] = closure_6(outboundPromotion(first[11]).Text, obj11);
  items1[1] = closure_6(View, obj8);
  const obj12 = { style: tmp.buttonContainer, children: closure_6(View, obj13) };
  obj13 = { style: tmp.claimButton, children: closure_6(outboundPromotion(first[21]).Button, obj14) };
  obj14 = {
    size: "sm",
    shrink: true,
    text: stringResult,
    onPress() {
      return closure_3(true);
    }
  };
  items1[2] = closure_6(View, obj12);
  items3 = [closure_7(View, obj5), ];
  const obj15 = { children: closure_6(Text, obj16) };
  obj16 = { style: tmp.moreDetails, variant: "text-sm/medium", children: intl3.format(outboundPromotion(first[10]).t.sCm3Zb, obj17) };
  Text = tmp5(tmp3[11]).Text;
  intl3 = tmp5(tmp3[10]).intl;
  obj17 = {
    onClick: function showTermsAndConditions() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = ActionSheetActionCreatorsDefault;
      const obj3 = { termsAndConditions: outboundPromotion.outboundTermsAndConditions };
      obj2.openLazy(() => Promise.resolve(closure_1_9), "OutboundPromotionTermsAndConditions-" + outboundPromotion.id, obj3);
    }
  };
  items3[1] = closure_6(View, obj15);
  return closure_7(View, obj4);
};
