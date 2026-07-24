// Module ID: 12540
// Function ID: 97099
// Name: TermsAndConditionsActionSheet
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 4973, 5187, 5186, 1212, 4126, 4120, 4066, 7428, 12541, 4471, 12542, 1934, 7426, 4543, 4098, 2]
// Exports: default

// Module 12540 (TermsAndConditionsActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function TermsAndConditionsActionSheet(termsAndConditions) {
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.PdKWVT);
  obj.header = callback2(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { style: _createForOfIteratorHelperLoose().termsAndConditionsText, variant: "text-sm/medium" };
  const tmp = _createForOfIteratorHelperLoose();
  obj.children = importDefault(4120).parse(termsAndConditions.termsAndConditions, false, { allowLinks: true });
  obj.children = callback2(require(4126) /* Text */.Text, obj);
  return callback2(require(5187) /* Background */.BottomSheet, obj);
}
({ View: closure_5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, flexDirection: "column", paddingHorizontal: require("ME").USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, marginTop: 8 };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.mainContainer = { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.textContainer = { flexDirection: "row", flexShrink: 1, alignItems: "center" };
let obj1 = { width: 32, height: 32, marginRight: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: require("result").DARK_BLACK_500_LIGHT_PRIMARY_100 };
_createForOfIteratorHelperLoose.imageContainer = obj1;
_createForOfIteratorHelperLoose.image = { width: 28, height: 28, resizeMode: "contain" };
_createForOfIteratorHelperLoose.title = { lineHeight: 20 };
_createForOfIteratorHelperLoose.subText = { lineHeight: 18 };
_createForOfIteratorHelperLoose.claimButton = { paddingHorizontal: 12 };
_createForOfIteratorHelperLoose.moreDetails = { marginLeft: 40 };
_createForOfIteratorHelperLoose.termsAndConditionsText = { paddingHorizontal: 16, paddingTop: 16 };
_createForOfIteratorHelperLoose.buttonContainer = { flexGrow: 1, flexDirection: "row", marginLeft: 4, justifyContent: "flex-end" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/OutboundPromotionCard.tsx");

export default function OutboundPromotionCard(outboundPromotion) {
  outboundPromotion = outboundPromotion.outboundPromotion;
  const code = outboundPromotion.code;
  let first;
  let callback;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = outboundPromotion(first[14]);
  const promotionImageURL = obj.getPromotionImageURL(outboundPromotion.id, code(first[13])());
  const tmp5 = code(first[15])(outboundPromotion, null != code);
  const intl = outboundPromotion(first[10]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = outboundPromotion(first[10]).t;
  if (null != code) {
    obj = { endDate: tmp5 };
    let formatToPlainStringResult = formatToPlainString(t.VaD05h, obj);
  } else {
    obj = { endDate: tmp5 };
    formatToPlainStringResult = formatToPlainString(t["/XWgfG"], obj);
  }
  const intl2 = outboundPromotion(first[10]).intl;
  const string = intl2.string;
  const t2 = outboundPromotion(first[10]).t;
  if (null != code) {
    let stringResult = string(t2["2cHUti"]);
  } else {
    stringResult = string(t2.O13yhz);
  }
  const tmp8 = callback(React.useState(false), 2);
  first = tmp8[0];
  callback = tmp8[1];
  const items = [first, code, outboundPromotion];
  const layoutEffect = React.useLayoutEffect(() => {
    if (first) {
      let obj = code(first[16]);
      obj = {
        importer() {
            return outboundPromotion(first[18])(first[17], first.paths).then((arg0) => {
              let closure_0 = arg0.default;
              return (arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj["onCancel"] = function onCancel() { ... };
                obj["onClaim"] = code(first[19]).addClaimedOutboundPromotionCode;
                obj["code"] = outer3_1;
                obj["outboundPromotion"] = outer3_0;
                return outer4_7(closure_0, obj);
              };
            });
          }
      };
      obj.openLazy(obj);
    }
  }, items);
  const obj1 = { style: tmp.card };
  const obj2 = { style: tmp.mainContainer };
  const tmp2 = code(first[13])();
  const items1 = [callback2(closure_5, { style: tmp.imageContainer, children: callback2(closure_6, obj4) }), , ];
  const obj5 = { style: tmp.textContainer };
  const obj6 = {};
  const obj7 = { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: outboundPromotion.outboundTitle };
  const items2 = [callback2(outboundPromotion(first[11]).Text, obj7), ];
  const obj8 = { style: tmp.subText, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult };
  items2[1] = callback2(outboundPromotion(first[11]).Text, obj8);
  obj6.children = items2;
  obj5.children = callback3(closure_5, obj6);
  items1[1] = callback2(closure_5, obj5);
  const obj9 = { style: tmp.buttonContainer };
  const obj3 = { style: tmp.imageContainer, children: callback2(closure_6, obj4) };
  const obj11 = {
    size: "sm",
    shrink: true,
    text: stringResult,
    onPress() {
      return callback(true);
    }
  };
  obj9.children = callback2(closure_5, { style: tmp.claimButton, children: callback2(outboundPromotion(first[20]).Button, obj11) });
  items1[2] = callback2(closure_5, obj9);
  obj2.children = items1;
  const items3 = [callback3(closure_5, obj2), ];
  const obj12 = {};
  const obj13 = { style: tmp.moreDetails, variant: "text-sm/medium" };
  const intl3 = outboundPromotion(first[10]).intl;
  obj13.children = intl3.format(outboundPromotion(first[10]).t.sCm3Zb, {
    onClick() {
      let obj = code(first[21]);
      obj.hideActionSheet();
      obj = { termsAndConditions: outboundPromotion.outboundTermsAndConditions };
      code(first[21]).openLazy(() => Promise.resolve(outer2_10), "OutboundPromotionTermsAndConditions-" + outboundPromotion.id, obj);
    }
  });
  obj12.children = callback2(outboundPromotion(first[11]).Text, obj13);
  items3[1] = callback2(closure_5, obj12);
  obj1.children = items3;
  return callback3(closure_5, obj1);
};
