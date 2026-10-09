// Module ID: 15962
// Function ID: 15963
// Name: RarityBadge
// Dependencies: [32, 19, 17, 5434, 21, 5091, 587, 558, 576, 5435, 7559, 15924, 1126, 5087, 9016, 2]

// Module 15962 (RarityBadge)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 5435 */;
import inlineStyles from "inlineStyles" /* 7559 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15924 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CheckpointConstants from "CheckpointConstants" /* 5434 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
const View = react_native.View;
({ CHECKPOINT_NITRO_GRADIENT_COLORS: metroRequire, CHECKPOINT_NITRO_BADGE_GRADIENT_ID: metroImportDefault, CHECKPOINT_RARITY_COLORS: metroImportAll, CHECKPOINT_RARITY_LABEL_MESSAGES: c9 } = CheckpointConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { badge: obj2, badgeShape: { position: "absolute", top: 0, left: 0 }, badgeContent: obj3, badgeLabel: obj4, badgeHidden: { opacity: 0 } };
obj2 = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
let closure_12 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function RarityBadge(rarity) {
  let LinearGradient;
  let badgeContent;
  let badgeLabel;
  let closure_129_0;
  let items;
  let items1;
  let items2;
  let items3;
  let obj8;
  let tmpResult;
  const tmp2 = dependencyMap;
  const obj = react2;
  const cResult = obj.c(24);
  rarity = rarity.rarity;
  const tmp4 = closure_12();
  [size, closure_129_0] = _slicedToArray(react.useState(null), 2);
  let badgeHidden = null == size;
  const tmp5 = _slicedToArray(react.useState(null), 2);
  const NITRO = CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
  if (badgeHidden) {
    badgeHidden = tmp4.badgeHidden;
  }
  if (cResult[0] === tmp4.badge) {
    let tmp6;
    let tmp8;
    if (cResult[1] === badgeHidden) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function f(nativeEvent) {
        let closure_129_0;
        let closure_129_1;
        ({ width: closure_129_0, height: closure_129_1 } = nativeEvent.nativeEvent.layout);
        closure_1_0((arg0) => {
          let height;
          size = arg0;
          let width;
          if (arg0 != null) {
            width = size.width;
          }
          if (width !== closure_1_0) {
            const size1 = { width: tmp2, height };
            size = size1;
          } else {
            height = undefined;
            if (size != null) {
              height = size.height;
            }
          }
          return size;
        });
      };
      cResult[3] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === rarity === NITRO) {
      if (cResult[5] === rarity) {
        if (cResult[6] === size) {
          let tmp10;
          let tmp21;
          if (cResult[7] === tmp4.badgeShape) {
            tmp10 = cResult[8];
          }
          ({ badgeContent, badgeLabel } = tmp4);
          if (cResult[9] !== rarity) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(React4[rarity]);
            cResult[9] = rarity;
            cResult[10] = stringResult;
            tmp21 = stringResult;
          } else {
            tmp21 = cResult[10];
          }
          if (cResult[11] === tmp4.badgeLabel) {
            let tmp24;
            let tmp27;
            if (cResult[12] === tmp21) {
              tmp24 = cResult[13];
            }
            if (cResult[14] !== (rarity === NITRO)) {
              let tmp28 = tmp9;
              if (tmp28) {
                const obj3 = { size: "xxs", color: nativeDefault.colors.BLACK };
                const NitroWheelIcon = tmp(9016).NitroWheelIcon;
                tmp28 = authStore(NitroWheelIcon, obj3);
              }
              cResult[14] = rarity === NITRO;
              cResult[15] = tmp28;
              tmp27 = tmp28;
            } else {
              tmp27 = cResult[15];
            }
            if (cResult[16] === tmp4.badgeContent) {
              if (cResult[17] === tmp24) {
                let tmp31;
                if (cResult[18] === tmp27) {
                  tmp31 = cResult[19];
                }
                if (cResult[20] === tmp31) {
                  if (cResult[21] === tmp6) {
                    let tmp35;
                    if (cResult[22] === tmp10) {
                      tmp35 = cResult[23];
                    }
                    return tmp35;
                  }
                }
                const obj4 = { style: tmp6, onLayout: tmp8, children: items };
                items = [tmp10, tmp31];
                const tmp38 = unpackModuleId(View, obj4);
                cResult[20] = tmp31;
                cResult[21] = tmp6;
                cResult[22] = tmp10;
                cResult[23] = tmp38;
                tmp35 = tmp38;
              }
            }
            const obj5 = { style: badgeContent, children: items1 };
            items1 = [tmp24, tmp27];
            const tmp34 = unpackModuleId(View, obj5);
            cResult[16] = tmp4.badgeContent;
            cResult[17] = tmp24;
            cResult[18] = tmp27;
            cResult[19] = tmp34;
            tmp31 = tmp34;
          }
          const obj6 = { variant: "experimental/mono-md/bold", style: badgeLabel, children: tmp21 };
          const tmp26 = authStore(Text_Text.Text, obj6);
          cResult[11] = tmp4.badgeLabel;
          cResult[12] = tmp21;
          cResult[13] = tmp26;
          tmp24 = tmp26;
        }
      }
    }
    let tmp12Result = null != size;
    if (tmp12Result) {
      let size1 = { width: null, height: null, style: tmp4.badgeShape, pointerEvents: "none", children: items3 };
      ({ width: obj2.width, height: obj2.height } = size);
      let tmp15 = tmp9;
      const tmp14 = inlineStylesDefault;
      if (rarity === NITRO) {
        const obj7 = { children: unpackModuleId(LinearGradient, obj8) };
        const Defs = tmp(7559).Defs;
        obj8 = { id: metroImportDefault, x1: "0", y1: "0", x2: "1", y2: "0", children: items2 };
        LinearGradient = tmp(7559).LinearGradient;
        const obj9 = { offset: "0", stopColor: metroRequire[0] };
        items2 = [authStore(tmp(7559).Stop, obj9), ];
        const obj10 = { offset: "1", stopColor: metroRequire[1] };
        items2[1] = authStore(inlineStyles.Stop, obj10);
        tmp15 = authStore(Defs, obj7);
      }
      items3 = [tmp15, ];
      const obj11 = { points: tmpResult.getChamferedRectPoints(size.width, size.height, 6), fill: metroImportAll[rarity] };
      const Polygon = tmp(7559).Polygon;
      tmpResult = CheckpointCustomizationUtils;
      items3[1] = authStore(Polygon, obj11);
      tmp12Result = tmp12(tmp14, size1);
    }
    cResult[4] = rarity === NITRO;
    cResult[5] = rarity;
    cResult[6] = size;
    cResult[7] = tmp4.badgeShape;
    cResult[8] = tmp12Result;
    tmp10 = tmp12Result;
  }
  const items4 = [tmp4.badge, badgeHidden];
  cResult[0] = tmp4.badge;
  cResult[1] = badgeHidden;
  cResult[2] = items4;
  tmp6 = items4;
}) : (function RarityBadge(rarity) {
  let LinearGradient;
  let c0;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj4;
  let tmp3Result;
  rarity = rarity.rarity;
  c0 = undefined;
  const tmp = closure_12();
  const tmp2 = _slicedToArray(react.useState(null), 2);
  [size, c0] = tmp2;
  const items = [tmp.badge, ];
  let badgeHidden = null == size;
  const NITRO = CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
  if (badgeHidden) {
    badgeHidden = tmp.badgeHidden;
  }
  let tmp17Result = rarity === NITRO;
  const obj = {
    style: items,
    onLayout(nativeEvent) {
      let closure_129_0;
      let closure_129_1;
      ({ width: closure_129_0, height: closure_129_1 } = nativeEvent.nativeEvent.layout);
      _undefined((arg0) => {
        let height;
        size = arg0;
        let width;
        if (arg0 != null) {
          width = size.width;
        }
        if (width !== closure_1_0) {
          const size1 = { width: tmp2, height };
          size = size1;
        } else {
          height = undefined;
          if (size != null) {
            height = size.height;
          }
        }
        return size;
      });
    },
    children: items3
  };
  items[1] = badgeHidden;
  let tmp5Result = null != size;
  if (tmp5Result) {
    let size1 = { width: null, height: null, style: tmp.badgeShape, pointerEvents: "none", children: items2 };
    ({ width: obj2.width, height: obj2.height } = size);
    let tmp11 = tmp17Result;
    const tmp10 = inlineStylesDefault;
    if (tmp17Result) {
      const obj3 = { children: unpackModuleId(LinearGradient, obj4) };
      const Defs = tmp3(7559).Defs;
      obj4 = { id: metroImportDefault, x1: "0", y1: "0", x2: "1", y2: "0", children: items1 };
      LinearGradient = tmp3(7559).LinearGradient;
      const obj5 = { offset: "0", stopColor: metroRequire[0] };
      items1 = [authStore(inlineStyles.Stop, obj5), ];
      const obj6 = { offset: "1", stopColor: metroRequire[1] };
      items1[1] = authStore(inlineStyles.Stop, obj6);
      tmp11 = authStore(Defs, obj3);
    }
    items2 = [tmp11, ];
    const obj7 = { points: tmp3Result.getChamferedRectPoints(size.width, size.height, 6), fill: metroImportAll[rarity] };
    const Polygon = tmp3(7559).Polygon;
    tmp3Result = CheckpointCustomizationUtils;
    items2[1] = authStore(Polygon, obj7);
    tmp5Result = tmp5(tmp10, size1);
  }
  items3 = [tmp5Result, ];
  const obj8 = { style: tmp.badgeContent, children: items4 };
  const obj9 = { variant: "experimental/mono-md/bold", style: tmp.badgeLabel, children: intl.string(React4[rarity]) };
  const Text = tmp3(5087).Text;
  intl = tmp3(1126).intl;
  items4 = [authStore(Text, obj9), ];
  const tmp17 = authStore;
  if (tmp17Result) {
    const obj10 = { size: "xxs", color: nativeDefault.colors.BLACK };
    const NitroWheelIcon = tmp3(9016).NitroWheelIcon;
    tmp17Result = tmp17(NitroWheelIcon, obj10);
  }
  items4[1] = tmp17Result;
  items3[1] = unpackModuleId(View, obj8);
  return unpackModuleId(View, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/RarityBadge.tsx");

export default tmp5;
