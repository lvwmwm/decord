// Module ID: 14068
// Function ID: 108186
// Name: MobileQuestPreviewContainer
// Dependencies: [27, 33, 4130, 689, 4126, 2]
// Exports: default

// Module 14068 (MobileQuestPreviewContainer)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let obj = {};
obj = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = obj;
obj.title = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx");

export default function MobileQuestPreviewContainer(title) {
  title = title.title;
  const tmp = callback2();
  let obj = { style: tmp.container };
  let tmp4 = null != title;
  if (tmp4) {
    obj = { variant: "text-lg/semibold", color: "text-default", style: tmp.title, children: title };
    tmp4 = callback(require(4126) /* Text */.Text, obj);
  }
  const items = [tmp4, title.children];
  obj.children = items;
  return closure_4(View, obj);
};
