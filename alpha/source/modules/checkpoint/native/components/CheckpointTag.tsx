// Module ID: 14392
// Function ID: 14393
// Name: CheckpointTag
// Dependencies: [32, 19, 17, 6314, 21, 5243, 575, 8197, 6681, 5866, 2]
// Exports: default

// Module 14392 (CheckpointTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5866 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6681 */;
import inlineStyles from "inlineStyles" /* 8197 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
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
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointTag.tsx");

export default function CheckpointTag(chamferCorner) {
  let Polygon;
  let c0;
  let items1;
  let items2;
  let obj3;
  let obj4;
  let str = chamferCorner.chamferCorner;
  const children = chamferCorner.children;
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
  const tmp4 = metroImportAll;
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
  const obj5 = { variant: "mono-md/bold", style: tmp.text, children };
  items2[1] = metroImportDefault(Text_Text.Text, obj5);
  return tmp4(tmp5, obj);
};
