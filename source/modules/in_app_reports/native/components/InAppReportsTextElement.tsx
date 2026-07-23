// Module ID: 7619
// Function ID: 61060
// Name: TextElement
// Dependencies: [31, 27, 33, 4130, 4562, 4126, 2]
// Exports: default

// Module 7619 (TextElement)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, body: { marginBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextElement.tsx");

export default function TextElement(element) {
  let body;
  let header;
  const data = element.element.data;
  ({ header, body } = data);
  const tmp = callback2();
  let obj = importAll(4562);
  let tmp2 = null;
  if (data.is_localized) {
    if (null != header) {
      obj = { style: tmp.container };
      let tmp6 = null != header;
      if (tmp6) {
        obj = { style: tmp.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: header };
        tmp6 = callback(require(4126) /* Text */.Text, obj);
      }
      const items = [tmp6, ];
      let tmp10 = null != body;
      if (tmp10) {
        const obj1 = { style: tmp.body, variant: "text-md/medium", children: ref.current(body) };
        tmp10 = callback(require(4126) /* Text */.Text, obj1);
      }
      items[1] = tmp10;
      obj.children = items;
      let tmp4Result = closure_6(View, obj);
      const tmp4 = closure_6;
      const tmp5 = View;
    } else {
      tmp4Result = null;
    }
    tmp2 = tmp4Result;
  }
  return tmp2;
};
