// Module ID: 13650
// Function ID: 13651
// Name: RarityBadge
// Dependencies: [32, 19, 17, 6061, 21, 5009, 575, 6062, 8023, 6429, 5619, 1114, 9506, 2]
// Exports: default

// Module 13650 (RarityBadge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6062 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6429 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
({ CHECKPOINT_NITRO_GRADIENT_COLORS: metroRequire, CHECKPOINT_NITRO_BADGE_GRADIENT_ID: metroImportDefault, CHECKPOINT_RARITY_TO_COLOR: metroImportAll, CHECKPOINT_RARITY_TO_LABEL_MESSAGE: c9 } = CheckpointConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { badge: obj2, badgeShape: { position: "absolute", top: 0, left: 0 }, badgeContent: obj3, badgeLabel: obj4, badgeHidden: { opacity: 0 } };
obj2 = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
let closure_12 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/RarityBadge.tsx");

export default function RarityBadge(rarity) {
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
      const Defs = tmp3(8023).Defs;
      obj4 = { id: metroImportDefault, x1: "0", y1: "0", x2: "1", y2: "0", children: items1 };
      LinearGradient = tmp3(8023).LinearGradient;
      const obj5 = { offset: "0", stopColor: metroRequire[0] };
      items1 = [authStore(inlineStyles.Stop, obj5), ];
      const obj6 = { offset: "1", stopColor: metroRequire[1] };
      items1[1] = authStore(inlineStyles.Stop, obj6);
      tmp11 = authStore(Defs, obj3);
    }
    items2 = [tmp11, ];
    const obj7 = { points: tmp3Result.getChamferedRectPoints(size.width, size.height, 6), fill: metroImportAll[rarity] };
    const Polygon = tmp3(8023).Polygon;
    tmp3Result = CheckpointCustomizationUtils;
    items2[1] = authStore(Polygon, obj7);
    tmp5Result = tmp5(tmp10, size1);
  }
  items3 = [tmp5Result, ];
  const obj8 = { style: tmp.badgeContent, children: items4 };
  const obj9 = { variant: "experimental/mono-md/bold", style: tmp.badgeLabel, children: intl.string(React4[rarity]) };
  const Text = tmp3(5619).Text;
  intl = tmp3(1114).intl;
  items4 = [authStore(Text, obj9), ];
  const tmp17 = authStore;
  if (tmp17Result) {
    const obj10 = { size: "xxs", color: nativeDefault.colors.BLACK };
    const NitroWheelIcon = tmp3(9506).NitroWheelIcon;
    tmp17Result = tmp17(NitroWheelIcon, obj10);
  }
  items4[1] = tmp17Result;
  items3[1] = unpackModuleId(View, obj8);
  return unpackModuleId(View, obj);
};
