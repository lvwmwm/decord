// Module ID: 8480
// Function ID: 67435
// Name: EditGuildEventStepHeader
// Dependencies: [31, 27, 33, 4130, 4126, 2]
// Exports: default

// Module 8480 (EditGuildEventStepHeader)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 8, marginBottom: 8 }, headerSubtitle: { textAlign: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx");

export default function EditGuildEventStepHeader(subtitle) {
  subtitle = subtitle.subtitle;
  const tmp = callback2();
  let obj = { style: tmp.header };
  obj = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: subtitle.title };
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  let tmp4 = null;
  if (null != subtitle) {
    tmp4 = null;
    if ("" !== subtitle) {
      obj = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
      tmp4 = callback(require(4126) /* Text */.Text, obj);
    }
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_4(View, obj);
};
