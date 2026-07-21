// Module ID: 12368
// Function ID: 94591
// Name: TermsAndConditionsActionSheet
// Dependencies: []
// Exports: default

// Module 12368 (TermsAndConditionsActionSheet)
function TermsAndConditionsActionSheet(termsAndConditions) {
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj.title = intl.string(arg1(dependencyMap[10]).t.PdKWVT);
  obj.header = callback2(arg1(dependencyMap[9]).BottomSheetTitleHeader, obj);
  obj = { style: callback4().termsAndConditionsText, variant: "text-sm/medium" };
  const tmp = callback4();
  obj.children = importDefault(dependencyMap[12]).parse(termsAndConditions.termsAndConditions, false, { allowLinks: true });
  obj.children = callback2(arg1(dependencyMap[11]).Text, obj);
  return callback2(arg1(dependencyMap[8]).BottomSheet, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingHorizontal: arg1(dependencyMap[3]).USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.card = obj;
obj.mainContainer = {};
obj.textContainer = { 1364605794: "24c4788690396bae9cc4c1af395a6a87", 1398890993: "BicycleIcon", 306464658: "png" };
const tmp3 = arg1(dependencyMap[4]);
obj.imageContainer = { borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: arg1(dependencyMap[7]).DARK_BLACK_500_LIGHT_PRIMARY_100 };
obj.image = {};
obj.title = { lineHeight: 20 };
obj.subText = { lineHeight: 18 };
obj.claimButton = { paddingHorizontal: 12 };
obj.moreDetails = { marginLeft: 40 };
obj.termsAndConditionsText = {};
obj.buttonContainer = {};
let closure_9 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: arg1(dependencyMap[7]).DARK_BLACK_500_LIGHT_PRIMARY_100 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("components_native/premium/OutboundPromotionCard.tsx");

export default function OutboundPromotionCard(outboundPromotion) {
  outboundPromotion = outboundPromotion.outboundPromotion;
  const arg1 = outboundPromotion;
  const code = outboundPromotion.code;
  const importDefault = code;
  let dependencyMap;
  let callback;
  const tmp = callback4();
  let obj = arg1(dependencyMap[14]);
  const promotionImageURL = obj.getPromotionImageURL(outboundPromotion.id, importDefault(dependencyMap[13])());
  const tmp5 = importDefault(dependencyMap[15])(outboundPromotion, null != code);
  const intl = arg1(dependencyMap[10]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = arg1(dependencyMap[10]).t;
  if (null != code) {
    obj = { endDate: tmp5 };
    let formatToPlainStringResult = formatToPlainString(t.VaD05h, obj);
  } else {
    obj = { endDate: tmp5 };
    formatToPlainStringResult = formatToPlainString(t./XWgfG, obj);
  }
  const intl2 = arg1(dependencyMap[10]).intl;
  const string = intl2.string;
  const t2 = arg1(dependencyMap[10]).t;
  if (null != code) {
    let stringResult = string(t2.2cHUti);
  } else {
    stringResult = string(t2.O13yhz);
  }
  const tmp8 = callback(React.useState(false), 2);
  const first = tmp8[0];
  dependencyMap = first;
  callback = tmp8[1];
  const items = [first, code, outboundPromotion];
  const layoutEffect = React.useLayoutEffect(() => {
    if (first) {
      let obj = code(first[16]);
      obj = {
        importer() {
            return callback(paths[18])(paths[17], paths.paths).then((arg0) => {
              let closure_0 = arg0.default;
              return (arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj["onCancel"] = function onCancel() { ... };
                obj["onClaim"] = callback(closure_2[19]).addClaimedOutboundPromotionCode;
                obj["code"] = callback;
                obj["outboundPromotion"] = closure_0;
                return callback2(closure_0, obj);
              };
            });
          }
      };
      obj.openLazy(obj);
    }
  }, items);
  const obj1 = { style: tmp.card };
  const obj2 = { style: tmp.mainContainer };
  const tmp2 = importDefault(dependencyMap[13])();
  const items1 = [callback2(closure_5, { style: tmp.imageContainer, children: callback2(closure_6, obj4) }), , ];
  const obj5 = { style: tmp.textContainer };
  const obj6 = {};
  const items2 = [callback2(arg1(dependencyMap[11]).Text, { style: tmp.title, children: outboundPromotion.outboundTitle }), ];
  const obj8 = { style: tmp.subText, children: formatToPlainStringResult };
  items2[1] = callback2(arg1(dependencyMap[11]).Text, obj8);
  obj6.children = items2;
  obj5.children = callback3(closure_5, obj6);
  items1[1] = callback2(closure_5, obj5);
  const obj9 = { style: tmp.buttonContainer };
  const obj3 = { style: tmp.imageContainer, children: callback2(closure_6, obj4) };
  const obj7 = { style: tmp.title, children: outboundPromotion.outboundTitle };
  const obj11 = {
    0: "errExpectingATEXT",
    0: "j",
    text: stringResult,
    onPress() {
      return callback(true);
    }
  };
  obj9.children = callback2(closure_5, { style: tmp.claimButton, children: callback2(arg1(dependencyMap[20]).Button, obj11) });
  items1[2] = callback2(closure_5, obj9);
  obj2.children = items1;
  const items3 = [callback3(closure_5, obj2), ];
  const obj12 = {};
  const obj13 = { style: tmp.moreDetails, variant: "text-sm/medium" };
  const intl3 = arg1(dependencyMap[10]).intl;
  obj13.children = intl3.format(arg1(dependencyMap[10]).t.sCm3Zb, {
    onClick() {
      let obj = code(first[22]);
      obj.hideActionSheet();
      obj = { termsAndConditions: outboundPromotion.outboundTermsAndConditions };
      code(first[22]).openLazy(() => Promise.resolve(closure_10), "OutboundPromotionTermsAndConditions-" + outboundPromotion.id, obj);
    }
  });
  obj12.children = callback2(arg1(dependencyMap[21]).TextWithIOSLinkWorkaround, obj13);
  items3[1] = callback2(closure_5, obj12);
  obj1.children = items3;
  return callback3(closure_5, obj1);
};
