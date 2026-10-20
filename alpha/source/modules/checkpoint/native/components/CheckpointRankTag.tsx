// Module ID: 12808
// Function ID: 12809
// Name: CheckpointRankTag
// Dependencies: [32, 19, 17, 5973, 21, 4945, 587, 558, 576, 7910, 6319, 5195, 2]

// Module 12808 (CheckpointRankTag)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5195 */;
import CheckpointConstants from "CheckpointConstants" /* 5973 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6319 */;
import inlineStyles from "inlineStyles" /* 7910 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointRankTag(arg0) {
  let Polygon;
  let chamferCorner;
  let closure_129_0;
  let first;
  let items;
  let items1;
  let items2;
  let obj5;
  let rank;
  let style;
  let tmpResult;
  const tmp2 = dependencyMap;
  const obj = react2;
  const cResult = obj.c(16);
  ({ rank, chamferCorner, style } = arg0);
  let str = "top-right";
  if (undefined !== chamferCorner) {
    str = chamferCorner;
  }
  const tmp4 = closure_9();
  [size, closure_129_0] = _slicedToArray(react.useState(null), 2);
  const tmp5 = _slicedToArray(react.useState(null), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(nativeEvent) {
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
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === style) {
    let tmp8;
    if (cResult[2] === (null == size && tmp4.hidden)) {
      tmp8 = cResult[3];
    }
    if (cResult[4] === str) {
      if (cResult[5] === size) {
        if (cResult[6] === tmp4.shape) {
          let tmp9;
          if (cResult[7] === tmp4.shapeChamferBottomRight) {
            tmp9 = cResult[8];
          }
          if (cResult[9] === rank) {
            let tmp15;
            if (cResult[10] === tmp4.text) {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp8) {
              if (cResult[13] === tmp9) {
                let tmp18;
                if (cResult[14] === tmp15) {
                  tmp18 = cResult[15];
                }
                return tmp18;
              }
            }
            const obj3 = { style: tmp8, onLayout: first, children: items };
            items = [tmp9, tmp15];
            const tmp21 = metroImportAll(View, obj3);
            cResult[12] = tmp8;
            cResult[13] = tmp9;
            cResult[14] = tmp15;
            cResult[15] = tmp21;
            tmp18 = tmp21;
          }
          const obj4 = { variant: "experimental/mono-md/bold", style: tmp4.text, children: items1 };
          items1 = ["#", rank];
          const tmp17 = metroImportAll(Text_Text.Text, obj4);
          cResult[9] = rank;
          cResult[10] = tmp4.text;
          cResult[11] = tmp17;
          tmp15 = tmp17;
        }
      }
    }
    let tmp11Result = null != size;
    if (tmp11Result) {
      let size1 = { width: null, height: null, style: items2, pointerEvents: "none", children: metroImportDefault(Polygon, obj5) };
      ({ width: obj2.width, height: obj2.height } = size);
      items2 = [tmp4.shape, ];
      let shapeChamferBottomRight = "bottom-right" === str;
      const tmp13 = inlineStylesDefault;
      if (shapeChamferBottomRight) {
        shapeChamferBottomRight = tmp4.shapeChamferBottomRight;
      }
      items2[1] = shapeChamferBottomRight;
      obj5 = { points: tmpResult.getChamferedRectPoints(size.width, size.height, 5.5), fill: CHECKPOINT_PRIMARY };
      Polygon = tmp(7910).Polygon;
      tmpResult = CheckpointCustomizationUtils;
      tmp11Result = tmp11(tmp13, size1);
    }
    cResult[4] = str;
    cResult[5] = size;
    cResult[6] = tmp4.shape;
    cResult[7] = tmp4.shapeChamferBottomRight;
    cResult[8] = tmp11Result;
    tmp9 = tmp11Result;
  }
  const items3 = [style, null == size && tmp4.hidden];
  cResult[1] = style;
  cResult[2] = null == size && tmp4.hidden;
  cResult[3] = items3;
  tmp8 = items3;
}) : (function CheckpointRankTag(chamferCorner) {
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
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRankTag.tsx");

export default tmp3;
