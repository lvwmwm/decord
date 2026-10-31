// Module ID: 13645
// Function ID: 13646
// Name: CheckpointRankTag
// Dependencies: [32, 19, 17, 6066, 21, 5014, 575, 8031, 6434, 5624, 2]
// Exports: default

// Module 13645 (CheckpointRankTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6434 */;
import inlineStyles from "inlineStyles" /* 8031 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let items;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { hidden: { opacity: 0 }, text: obj2, shape: { position: "absolute", top: 0, left: 0 }, shapeChamferBottomRight: obj3 };
obj2 = { color: nativeDefault.colors.BLACK, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, fontSize: 14, lineHeight: 18 };
obj3 = { transform: items };
items = [{ scaleY: -1 }];
let closure_9 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRankTag.tsx");

export default function CheckpointRankTag(chamferCorner) {
  let Polygon;
  let c0;
  let items1;
  let items2;
  let items3;
  let obj3;
  let obj4;
  let str = chamferCorner.chamferCorner;
  const rank = chamferCorner.rank;
  if (str === undefined) {
    str = "top-right";
  }
  c0 = undefined;
  const style = chamferCorner.style;
  const tmp = closure_9();
  const tmp2 = _slicedToArray(react.useState(null), 2);
  [size, c0] = tmp2;
  const items = [style, ];
  let hidden = null == size;
  const callback = react.useCallback((nativeEvent) => {
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
  }, []);
  const tmp5 = View;
  if (hidden) {
    hidden = tmp.hidden;
  }
  const obj = { style: items, onLayout: callback, children: items2 };
  items[1] = hidden;
  let tmp7Result = null != size;
  if (tmp7Result) {
    let size1 = { width: null, height: null, style: items1, pointerEvents: "none", children: metroImportDefault(Polygon, obj3) };
    ({ width: obj2.width, height: obj2.height } = size);
    items1 = [tmp.shape, ];
    let shapeChamferBottomRight = "bottom-right" === str;
    const tmp10 = inlineStylesDefault;
    if (shapeChamferBottomRight) {
      shapeChamferBottomRight = tmp.shapeChamferBottomRight;
    }
    items1[1] = shapeChamferBottomRight;
    obj3 = { points: obj4.getChamferedRectPoints(size.width, size.height, 5.5), fill: CHECKPOINT_PRIMARY };
    Polygon = inlineStyles.Polygon;
    obj4 = CheckpointCustomizationUtils;
    tmp7Result = tmp7(tmp10, size1);
  }
  items2 = [tmp7Result, ];
  const obj5 = { variant: "experimental/mono-md/bold", style: tmp.text, children: items3 };
  items3 = ["#", rank];
  items2[1] = metroImportAll(Text_Text.Text, obj5);
  return metroImportAll(tmp5, obj);
};
