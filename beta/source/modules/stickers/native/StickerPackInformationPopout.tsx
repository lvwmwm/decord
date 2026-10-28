// Module ID: 10196
// Function ID: 10197
// Name: StickerPackInformationPopout
// Dependencies: [19, 17, 21, 5003, 587, 6520, 1128, 558, 576, 5266, 6940, 2]
// Exports: doesStickerPackHavePopoutInformation

// Module 10196 (StickerPackInformationPopout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1128 */;
import Text_Text from "Text/Text" /* 5266 */;
import StickersUtils from "StickersUtils" /* 6520 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { informationContainer: obj2, headerContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }, informationHeader: { lineHeight: 20 }, informationContentContainer: { flexDirection: "row" }, informationContent: { lineHeight: 20 }, informationContentDescription: { flex: 1, marginLeft: 5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: nativeDefault.radii.xs, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function StickerPackInformationPopout(arg0) {
  let closure_0;
  let headerContainer;
  let informationHeader;
  let intl;
  let intl4;
  let items1;
  let items2;
  let onClose;
  let stickerPack;
  let style;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(30);
  ({ stickerPack, onClose, style } = arg0);
  const tmp4 = closure_5();
  _require = tmp4;
  if (cResult[0] === onClose) {
    if (cResult[1] === stickerPack) {
      if (cResult[2] === style) {
        if (cResult[3] === tmp4.headerContainer) {
          if (cResult[4] === tmp4.informationContainer) {
            if (cResult[5] === tmp4.informationContent) {
              if (cResult[6] === tmp4.informationContentContainer) {
                if (cResult[7] === tmp4.informationContentDescription) {
                  if (cResult[8] === tmp4.informationHeader) {
                    tmp5 = cResult[9];
                  }
                  return tmp5;
                }
              }
            }
          }
        }
      }
    }
  }
  let items = [];
  const tmpResult = require("StickersUtils");
  if (tmpResult.isStickerPackAnimated(stickerPack)) {
    let obj2 = { key: "animated", description: intl.string(require("intl").t.W11rMa) };
    const push = items.push;
    intl = tmp(1128).intl;
    push(obj2);
  }
  if (cResult[10] === tmp4.informationContent) {
    if (cResult[11] === tmp4.informationContentContainer) {
      let tmp7;
      if (cResult[12] === tmp4.informationContentDescription) {
        tmp7 = cResult[13];
      }
      if (cResult[14] === style) {
        let tmp8;
        let tmp9;
        if (cResult[15] === tmp4.informationContainer) {
          tmp8 = cResult[16];
        }
        ({ headerContainer, informationHeader } = tmp4);
        if (cResult[17] !== stickerPack.name) {
          const intl2 = tmp(1128).intl;
          let obj3 = { stickerPackName: stickerPack.name };
          const formatResult = intl2.format(require("intl").t.XDm6yN, obj3);
          cResult[17] = stickerPack.name;
          cResult[18] = formatResult;
          tmp9 = formatResult;
        } else {
          tmp9 = cResult[18];
        }
        if (cResult[19] === tmp4.informationHeader) {
          let tmp11;
          let tmp15;
          let tmp17;
          let tmp20;
          if (cResult[20] === tmp9) {
            tmp11 = cResult[21];
          }
          const _Symbol = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1128).intl;
            const stringResult = intl3.string(require("intl").t.cpT0Cq);
            cResult[22] = stringResult;
            tmp15 = stringResult;
          } else {
            tmp15 = cResult[22];
          }
          const _Symbol2 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-md/bold", color: "text-brand", children: intl4.string(require("intl").t.cpT0Cq) };
            const Text = tmp(5266).Text;
            intl4 = tmp(1128).intl;
            const tmp19 = closure_3(Text, obj4);
            cResult[23] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[23];
          }
          if (cResult[24] !== onClose) {
            const obj5 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: tmp15, children: tmp17 };
            const tmp22 = closure_3(require("Pressables").PressableOpacity, obj5);
            cResult[24] = onClose;
            cResult[25] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[25];
          }
          if (cResult[26] === tmp4.headerContainer) {
            if (cResult[27] === tmp20) {
              let tmp23;
              if (cResult[28] === tmp11) {
                tmp23 = cResult[29];
              }
              const obj6 = { style: tmp8, children: items1 };
              items1 = [tmp23, items.map(tmp7)];
              const tmp29 = closure_4(View, obj6);
              cResult[0] = onClose;
              cResult[1] = stickerPack;
              cResult[2] = style;
              cResult[3] = tmp4.headerContainer;
              cResult[4] = tmp4.informationContainer;
              cResult[5] = tmp4.informationContent;
              cResult[6] = tmp4.informationContentContainer;
              cResult[7] = tmp4.informationContentDescription;
              cResult[8] = tmp4.informationHeader;
              cResult[9] = tmp29;
              tmp5 = tmp29;
            }
          }
          const obj7 = { style: headerContainer, children: items2 };
          items2 = [tmp11, tmp20];
          const tmp26 = closure_4(View, obj7);
          cResult[26] = tmp4.headerContainer;
          cResult[27] = tmp20;
          cResult[28] = tmp11;
          cResult[29] = tmp26;
          tmp23 = tmp26;
        }
        const obj8 = { style: informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp9 };
        const tmp13 = closure_3(require("Text/Text").Text, obj8);
        cResult[19] = tmp4.informationHeader;
        cResult[20] = tmp9;
        cResult[21] = tmp13;
        tmp11 = tmp13;
      }
      const items3 = [tmp4.informationContainer, style];
      cResult[14] = style;
      cResult[15] = tmp4.informationContainer;
      cResult[16] = items3;
      tmp8 = items3;
    }
  }
  function renderItem(children) {
    let items;
    let items1;
    const obj = { style: closure_0.informationContentContainer, children: items };
    items = [, ];
    const obj2 = { style: closure_0.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
    items[0] = _false(Text_Text.Text, obj2);
    const obj3 = { style: items1, variant: "text-md/medium", color: "text-default", children: children.description };
    items1 = [, ];
    ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = closure_0);
    items[1] = _false(Text_Text.Text, obj3);
    return React3(View, obj, children.key);
  }
  cResult[10] = tmp4.informationContent;
  cResult[11] = tmp4.informationContentContainer;
  cResult[12] = tmp4.informationContentDescription;
  cResult[13] = renderItem;
  tmp7 = renderItem;
}) : (function StickerPackInformationPopout(stickerPack) {
  let Text2;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let obj6;
  let obj8;
  let onClose;
  let style;
  stickerPack = stickerPack.stickerPack;
  ({ onClose, style } = stickerPack);
  const tmp = closure_5();
  _require = tmp;
  let items = [];
  let obj = require("StickersUtils");
  if (obj.isStickerPackAnimated(stickerPack)) {
    let obj2 = { key: "animated", description: intl.string(require("intl").t.W11rMa) };
    const push = items.push;
    intl = tmp2(1128).intl;
    push(obj2);
  }
  let obj3 = { style: items1, children: items3 };
  items1 = [tmp.informationContainer, style];
  const obj4 = { style: tmp.headerContainer, children: items2 };
  const obj5 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.format(require("intl").t.XDm6yN, obj6) };
  const Text = tmp2(5266).Text;
  intl2 = tmp2(1128).intl;
  obj6 = { stickerPackName: stickerPack.name };
  items2 = [closure_3(Text, obj5), ];
  const obj7 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: intl3.string(require("intl").t.cpT0Cq), children: closure_3(Text2, obj8) };
  const PressableOpacity = tmp2(6940).PressableOpacity;
  intl3 = tmp2(1128).intl;
  obj8 = { variant: "text-md/bold", color: "text-brand", children: intl4.string(require("intl").t.cpT0Cq) };
  Text2 = tmp2(5266).Text;
  intl4 = tmp2(1128).intl;
  items2[1] = closure_3(PressableOpacity, obj7);
  items3 = [
    closure_4(View, obj4),
    items.map(function renderItem(children) {
      let items;
      let items1;
      const obj = { style: closure_0.informationContentContainer, children: items };
      items = [, ];
      const obj2 = { style: closure_0.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
      items[0] = _false(Text_Text.Text, obj2);
      const obj3 = { style: items1, variant: "text-md/medium", color: "text-default", children: children.description };
      items1 = [, ];
      ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = closure_0);
      items[1] = _false(Text_Text.Text, obj3);
      return React3(View, obj, children.key);
    })
  ];
  return closure_4(View, obj3);
});
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default tmp4;
export const doesStickerPackHavePopoutInformation = function doesStickerPackHavePopoutInformation(stickerPack) {
  let intl;
  const items = [];
  const obj = StickersUtils;
  if (obj.isStickerPackAnimated(stickerPack)) {
    const push = items.push;
    const obj2 = { key: "animated", description: intl.string(intl5.t.W11rMa) };
    intl = tmp(1128).intl;
    push(obj2);
  }
  return items.length > 0;
};
