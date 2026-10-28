// Module ID: 15909
// Function ID: 15910
// Name: HexagonCampaignPromoGradient
// Dependencies: [32, 19, 17, 21, 15910, 5003, 587, 558, 576, 5284, 5290, 2]

// Module 15909 (HexagonCampaignPromoGradient)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 5284 */;
import hexagon_campaign_HexagonCampaignPromoGradient from "hexagon_campaign/HexagonCampaignPromoGradient" /* 15910 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4;
let unpackModuleId;
const LinearGradientDefault = tmp4(5290);
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const angleCenter = { x: 0.5, y: 0.5 };
[c9, c10, unpackModuleId, closure_12] = hexagon_campaign_HexagonCampaignPromoGradient.HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS;
_slicedToArray(hexagon_campaign_HexagonCampaignPromoGradient.HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS, 4);
const prop = hexagon_campaign_HexagonCampaignPromoGradient.HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS;
const locations = prop.map((location) => location.location);
let createStyles = createStyles_mod;
let obj = { shade: obj2 };
obj2 = { backgroundColor: nativeDefault.colors[hexagon_campaign_HexagonCampaignPromoGradient.HEXAGON_CAMPAIGN_PROMO_GRADIENT_SHADE_TOKEN] };
createStyles = createStyles.createStyles;
let closure_14 = createStyles(obj);
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignPromoGradient(angle) {
  let items;
  let items1;
  const obj = react2;
  const cResult = obj.c(13);
  angle = angle.angle;
  const tmp3 = closure_14();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors[user.token]);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.colors[user2.token]);
  const obj4 = useToken;
  const token2 = obj4.useToken(nativeDefault.colors[unpackModuleId.token]);
  const obj5 = useToken;
  const token3 = obj5.useToken(nativeDefault.colors[user4.token]);
  if (cResult[0] === token) {
    if (cResult[1] === token3) {
      if (cResult[2] === token1) {
        let tmp9;
        if (cResult[3] === token2) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === angle) {
          let tmp10;
          let tmp16;
          if (cResult[6] === tmp9) {
            tmp10 = cResult[7];
          }
          if (cResult[8] !== tmp3.shade) {
            const obj6 = { style: items, pointerEvents: "none" };
            items = [_false.absoluteFill, tmp3.shade];
            const tmp20 = hasOwnProperty(React3, obj6);
            cResult[8] = tmp3.shade;
            cResult[9] = tmp20;
            tmp16 = tmp20;
          } else {
            tmp16 = cResult[9];
          }
          if (cResult[10] === tmp10) {
            let tmp21;
            if (cResult[11] === tmp16) {
              tmp21 = cResult[12];
            }
            return tmp21;
          }
          const obj7 = { children: items1 };
          items1 = [tmp10, tmp16];
          const tmp24 = metroImportDefault(metroRequire, obj7);
          cResult[10] = tmp10;
          cResult[11] = tmp16;
          cResult[12] = tmp24;
          tmp21 = tmp24;
        }
        const obj8 = { useAngle: true, angle, angleCenter, colors: tmp9, locations, style: _false.absoluteFill, pointerEvents: "none" };
        const tmp15 = hasOwnProperty(LinearGradientDefault, obj8);
        cResult[5] = angle;
        cResult[6] = tmp9;
        cResult[7] = tmp15;
        tmp10 = tmp15;
      }
    }
  }
  const items2 = [token, token1, token2, token3];
  cResult[0] = token;
  cResult[1] = token3;
  cResult[2] = token1;
  cResult[3] = token2;
  cResult[4] = items2;
  tmp9 = items2;
}) : (function HexagonCampaignPromoGradient(angle) {
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
});
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignPromoGradient.tsx");

export default tmp8;
