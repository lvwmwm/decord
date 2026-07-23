// Module ID: 9613
// Function ID: 74882
// Name: generateListData
// Dependencies: [31, 27, 33, 4130, 689, 4466, 1212, 4126, 4660, 2]
// Exports: default, doesStickerPackHavePopoutInformation

// Module 9613 (generateListData)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
let require = arg1;
function generateListData(stickerPack) {
  const items = [];
  let obj = require(4466) /* getStickerPackPreviewSticker */;
  if (obj.isStickerPackAnimated(stickerPack)) {
    obj = { key: "animated" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.description = intl.string(require(1212) /* getSystemLocale */.t.W11rMa);
    items.push(obj);
  }
  return items;
}
({ View: closure_2, FlatList: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, width: "90%", marginHorizontal: "5%", padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, shadowColor: require("_createForOfIteratorHelperLoose").colors.BLACK, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.25, shadowRadius: 5 };
_createForOfIteratorHelperLoose.informationContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerContainer = { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 };
_createForOfIteratorHelperLoose.informationHeader = { lineHeight: 20 };
_createForOfIteratorHelperLoose.informationContentContainer = { flexDirection: "row" };
_createForOfIteratorHelperLoose.informationContent = { lineHeight: 20 };
_createForOfIteratorHelperLoose.informationContentDescription = { flex: 1, marginLeft: 5 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/stickers/native/StickerPackInformationPopout.tsx");

export default function StickerPackInformationPopout(stickerPack) {
  let onClose;
  let style;
  stickerPack = stickerPack.stickerPack;
  ({ onClose, style } = stickerPack);
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = { style: items };
  items = [tmp.informationContainer, style];
  obj = { style: tmp.headerContainer };
  obj = { style: tmp.informationHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.XDm6yN, { stickerPackName: stickerPack.name });
  let items1 = [callback(require(4126) /* Text */.Text, obj), ];
  const obj2 = { onPress: onClose, accessibilityRole: "button" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  const obj3 = { variant: "text-md/bold", color: "text-brand" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl3.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj2.children = callback(require(4126) /* Text */.Text, obj3);
  items1[1] = callback(require(4660) /* PressableBase */.PressableOpacity, obj2);
  obj.children = items1;
  const items2 = [callback2(closure_2, obj), ];
  const obj1 = { stickerPackName: stickerPack.name };
  const tmp2 = generateListData(stickerPack);
  items2[1] = callback(closure_3, {
    data: generateListData(stickerPack),
    renderItem(item) {
      let obj = { style: tmp.informationContentContainer };
      obj = { style: tmp.informationContent, variant: "text-md/medium", color: "text-default", children: "\u2022" };
      const items = [outer1_4(tmp(outer1_1[7]).Text, obj), ];
      obj = { style: null, variant: "text-md/medium", color: "text-default" };
      const items1 = [, ];
      ({ informationContent: arr2[0], informationContentDescription: arr2[1] } = tmp);
      obj.style = items1;
      obj.children = item.item.description;
      items[1] = outer1_4(tmp(outer1_1[7]).Text, obj);
      obj.children = items;
      return outer1_5(outer1_2, obj);
    }
  });
  obj.children = items2;
  return callback2(closure_2, obj);
};
export const doesStickerPackHavePopoutInformation = function doesStickerPackHavePopoutInformation(stickerPack) {
  return generateListData(stickerPack).length > 0;
};
