// Module ID: 5459
// Function ID: 46645
// Name: findLinks
// Dependencies: [31, 27, 33, 4130, 5460, 4528, 4126, 477, 2]
// Exports: TextWithIOSLinkWorkaround

// Module 5459 (findLinks)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function findLinks(children) {
  const Children = React.Children;
  const found = Children.toArray(children).filter(React.isValidElement);
  return found.flatMap((type) => {
    let tmp = type.type === outer1_0(outer1_1[4]).I18nLinkComponent;
    if (!tmp) {
      tmp = "link" === type.props.accessibilityRole;
    }
    if (tmp) {
      const items = [type];
      return items;
    } else {
      const props = type.props;
      if (null != props.children) {
        let items1 = outer1_7(props.children);
      } else {
        items1 = [];
      }
      return items1;
    }
  });
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ column: { flexDirection: "column", flexShrink: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/a11y/native/TextWithIOSLinkWorkaround.tsx");

export const TextWithIOSLinkWorkaround = function TextWithIOSLinkWorkaround(children) {
  children = children.children;
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  obj = require(4528) /* SCREEN_READER_ENABLED_GETTER */;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  obj = {};
  const merged1 = Object.assign(merged);
  obj["children"] = children;
  const tmp6 = callback(require(4126) /* Text */.Text, obj);
  const tmp3 = callback3();
  if (obj3.isIOS()) {
    if (isScreenReaderEnabled) {
      const obj1 = { style: tmp3.column };
      const items = [tmp6, findLinks(children)];
      obj1.children = items;
      return callback2(View, obj1);
    }
  }
  return tmp6;
};
