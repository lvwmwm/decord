// Module ID: 16470
// Function ID: 16471
// Name: HexagonCampaignPromoGradient
// Dependencies: [32, 19, 17, 21, 16471, 5014, 575, 5596, 5587, 2]
// Exports: default

// Module 16470 (HexagonCampaignPromoGradient)
import nativeDefault from "native" /* 575 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import useToken from "useToken" /* 5596 */;
import HexagonCampaignPromoGradient2 from "HexagonCampaignPromoGradient" /* 16471 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c10;
let c3;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const angleCenter = { x: 0.5, y: 0.5 };
[c9, c10, unpackModuleId, closure_12] = HexagonCampaignPromoGradient2.HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS;
_slicedToArray(HexagonCampaignPromoGradient2.HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS, 4);
const prop = HexagonCampaignPromoGradient2.HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS;
const locations = prop.map((location) => location.location);
let createStyles = createStyles_mod;
let obj = { shade: obj2 };
obj2 = { backgroundColor: nativeDefault.colors[HexagonCampaignPromoGradient2.HEXAGON_CAMPAIGN_PROMO_GRADIENT_SHADE_TOKEN] };
createStyles = createStyles.createStyles;
let closure_14 = createStyles(obj);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignPromoGradient.tsx");

export default function HexagonCampaignPromoGradient(angle) {
  let items;
  let items1;
  let items2;
  angle = angle.angle;
  const tmp = closure_14();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors[user.token]);
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors[user2.token]);
  const obj3 = useToken;
  const token2 = obj3.useToken(nativeDefault.colors[unpackModuleId.token]);
  const obj5 = { children: items1 };
  const obj4 = useToken;
  const token3 = obj4.useToken(nativeDefault.colors[user4.token]);
  const obj6 = { useAngle: true, angle, angleCenter, colors: items, locations, style: _false.absoluteFill, pointerEvents: "none" };
  items = [token, token1, token2, token3];
  items1 = [hasOwnProperty(LinearGradientDefault, obj6), ];
  const obj7 = { style: items2, pointerEvents: "none" };
  items2 = [_false.absoluteFill, tmp.shade];
  items1[1] = hasOwnProperty(React3, obj7);
  return metroImportDefault(metroRequire, obj5);
};
