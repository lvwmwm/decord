// Module ID: 11725
// Function ID: 91025
// Name: SkipHeaderButton
// Dependencies: [31, 33, 4130, 689, 1212, 9122, 2]
// Exports: default

// Module 11725 (SkipHeaderButton)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.button = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.insideNavigatorButton = { paddingRight: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default function SkipHeaderButton(label) {
  const tmp = _createForOfIteratorHelperLoose();
  label = label.label;
  if (null == label) {
    const intl = require(1212) /* getSystemLocale */.intl;
    label = intl.string(require(1212) /* getSystemLocale */.t["5Wxrcd"]);
  }
  const obj = {};
  const merged = Object.assign(label);
  const items = [tmp.button, ];
  let prop;
  if (label.insideNavigator) {
    prop = tmp.insideNavigatorButton;
  }
  items[1] = prop;
  obj["labelStyle"] = items;
  obj["label"] = label;
  obj["accessibilityLabel"] = label;
  return jsx(require(9122) /* GenericHeaderTitle */.HeaderTextButton, {});
};
