// Module ID: 9862
// Function ID: 9863
// Name: StickerPackInformationPopout
// Dependencies: [19, 17, 21, 4836, 576, 5198, 1115, 4832, 5435, 2]
// Exports: default, doesStickerPackHavePopoutInformation

// Module 9862 (StickerPackInformationPopout)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import StickersUtils from "StickersUtils" /* 5198 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, FlatList: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { informationContainer: obj2, headerContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }, informationHeader: { lineHeight: 20 }, informationContentContainer: { flexDirection: "row" }, informationContent: { lineHeight: 20 }, informationContentDescription: { flex: 1, marginLeft: 5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: nativeDefault.radii.xs, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default function StickerPackInformationPopout(stickerPack) {
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
  const tmp = closure_6();
  _require = tmp;
  let items = [];
  let obj = require("StickersUtils");
  if (obj.isStickerPackAnimated(stickerPack)) {
    let obj2 = { key: "animated", description: intl.string(require("intl").t.W11rMa) };
    const push = items.push;
    intl = tmp2(1115).intl;
    push(obj2);
  }
  let obj3 = { style: items1, children: items3 };
  items1 = [tmp.informationContainer, style];
  const obj4 = { style: tmp.headerContainer, children: items2 };
  const obj5 = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.format(require("intl").t.XDm6yN, obj6) };
  const Text = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  obj6 = { stickerPackName: stickerPack.name };
  items2 = [closure_4(Text, obj5), ];
  const obj7 = { onPress: onClose, accessibilityRole: "button", accessibilityLabel: intl3.string(require("intl").t.cpT0Cq), children: closure_4(Text2, obj8) };
  const PressableOpacity = tmp2(5435).PressableOpacity;
  intl3 = tmp2(1115).intl;
  obj8 = { variant: "text-md/bold", color: "text-brand", children: intl4.string(require("intl").t.cpT0Cq) };
  Text2 = tmp2(4832).Text;
  intl4 = tmp2(1115).intl;
  items2[1] = closure_4(PressableOpacity, obj7);
  items3 = [closure_5(closure_2, obj4), ];
  const obj9 = {
    data: items,
    renderItem(item) {
      let items;
      let items1;
      item = item.item;
      const obj = { style: closure_0.informationContentContainer, children: items };
      items = [, ];
      const obj2 = { style: closure_0.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
      items[0] = React3(Text_Text.Text, obj2);
      const obj3 = { style: items1, variant: "text-md/medium", color: "text-default", children: item.description };
      items1 = [, ];
      ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = closure_0);
      items[1] = React3(Text_Text.Text, obj3);
      return hasOwnProperty(React2, obj);
    }
  };
  items3[1] = closure_4(closure_3, obj9);
  return closure_5(closure_2, obj3);
};
export const doesStickerPackHavePopoutInformation = function doesStickerPackHavePopoutInformation(stickerPack) {
  let intl;
  const items = [];
  const obj = StickersUtils;
  if (obj.isStickerPackAnimated(stickerPack)) {
    const push = items.push;
    const obj2 = { key: "animated", description: intl.string(intl5.t.W11rMa) };
    intl = tmp(1115).intl;
    push(obj2);
  }
  return items.length > 0;
};
