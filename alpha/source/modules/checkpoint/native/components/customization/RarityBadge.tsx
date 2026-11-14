// Module ID: 14542
// Function ID: 14543
// Name: RarityBadge
// Dependencies: [32, 19, 17, 6377, 21, 5306, 575, 6378, 8263, 6744, 5929, 1113, 9436, 2]
// Exports: default

// Module 14542 (RarityBadge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6378 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import inlineStylesDefault from "inlineStyles" /* 8263 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ CHECKPOINT_RARITY_TO_COLOR: metroRequire, CHECKPOINT_RARITY_TO_LABEL_MESSAGE: metroImportDefault } = CheckpointConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { badge: obj2, badgeShape: { position: "absolute", top: 0, left: 0 }, badgeContent: obj3, badgeLabel: obj4, badgeHidden: { opacity: 0 } };
obj2 = { alignSelf: "flex-start", paddingVertical: nativeDefault.space.PX_4 / 2, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { color: nativeDefault.colors.BLACK, textTransform: "uppercase", fontSize: 14, lineHeight: 18 };
let closure_10 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/RarityBadge.tsx");

export default function RarityBadge(rarity) {
  let Polygon;
  let c0;
  let intl;
  let items1;
  let items2;
  let obj3;
  let tmp3Result;
  rarity = rarity.rarity;
  c0 = undefined;
  const tmp = closure_10();
  const tmp2 = _slicedToArray(react.useState(null), 2);
  [size, c0] = tmp2;
  const items = [tmp.badge, ];
  let badgeHidden = null == size;
  const NITRO = CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
  if (badgeHidden) {
    badgeHidden = tmp.badgeHidden;
  }
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
    children: items1
  };
  items[1] = badgeHidden;
  let tmp7 = null != size;
  if (tmp7) {
    let size1 = { width: null, height: null, style: tmp.badgeShape, pointerEvents: "none", children: metroImportAll(Polygon, obj3) };
    ({ width: obj2.width, height: obj2.height } = size);
    obj3 = { points: tmp3Result.getChamferedRectPoints(size.width, size.height, 6), fill: metroRequire[rarity] };
    const tmp10 = inlineStylesDefault;
    Polygon = tmp3(8263).Polygon;
    tmp3Result = CheckpointCustomizationUtils;
    tmp7 = metroImportAll(tmp10, size1);
  }
  let tmp13Result = rarity === NITRO;
  items1 = [tmp7, ];
  const obj4 = { style: tmp.badgeContent, children: items2 };
  const obj5 = { variant: "mono-md/bold", style: tmp.badgeLabel, children: intl.string(metroImportDefault[rarity]) };
  const Text = tmp3(5929).Text;
  intl = tmp3(1113).intl;
  items2 = [metroImportAll(Text, obj5), ];
  const tmp13 = metroImportAll;
  if (tmp13Result) {
    const obj6 = { size: "xxs", color: nativeDefault.colors.BLACK };
    const NitroWheelIcon = tmp3(9436).NitroWheelIcon;
    tmp13Result = tmp13(NitroWheelIcon, obj6);
  }
  items2[1] = tmp13Result;
  items1[1] = React4(View, obj4);
  return React4(View, obj);
};
