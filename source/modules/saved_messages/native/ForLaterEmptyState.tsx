// Module ID: 9963
// Function ID: 76999
// Name: ForLaterEmptyState
// Dependencies: [27, 33, 4130, 9964, 4126, 1212, 9569, 2]
// Exports: ForLaterEmptyState

// Module 9963 (ForLaterEmptyState)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
({ View: closure_3, Image: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ scrollView: { flex: 1 }, pageContainer: { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 32, paddingVertical: 16 }, container: { alignItems: "center", maxWidth: 311 }, image: { width: 140, height: 130 }, textContainer: { marginTop: 24, gap: 8 }, text: { textAlign: "center" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/saved_messages/native/ForLaterEmptyState.tsx");

export const ForLaterEmptyState = function ForLaterEmptyState(type) {
  type = type.type;
  const tmp = callback2();
  let obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer };
  obj = { style: tmp.container };
  obj = { source: importDefault(9964), style: tmp.image };
  const items = [callback(closure_4, obj), ];
  const obj1 = { style: tmp.textContainer };
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text };
  const intl = require(1212) /* getSystemLocale */.intl;
  if (type === require(9569) /* savedMessageDataToClient */.SavedMessageSortTypes.REMINDER) {
    let erEf2g = require(1212) /* getSystemLocale */.t.AE4yja;
  } else {
    erEf2g = require(1212) /* getSystemLocale */.t.erEf2g;
  }
  obj2.children = intl.string(erEf2g);
  const items1 = [callback(require(4126) /* Text */.Text, obj2), ];
  const obj3 = { variant: "text-sm/medium", color: "text-default", style: tmp.text };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  if (type === require(9569) /* savedMessageDataToClient */.SavedMessageSortTypes.REMINDER) {
    w1o_75 = require(1212) /* getSystemLocale */.t.iBFuNE;
  } else {
    w1o_75 = require(1212) /* getSystemLocale */.t["w1o+75"];
  }
  obj3.children = intl2.string(w1o_75);
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items1;
  items[1] = closure_7(closure_3, obj1);
  obj.children = items;
  obj.children = closure_7(closure_3, obj);
  return callback(closure_5, obj);
};
