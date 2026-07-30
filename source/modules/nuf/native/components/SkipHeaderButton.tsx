// Module ID: 11783
// Function ID: 11784
// Name: SkipHeaderButton
// Dependencies: [19, 21, 4189, 712, 1236, 9114, 2]
// Exports: default

// Module 11783 (SkipHeaderButton)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { button: null, insideNavigatorButton: null };
createCacheKey = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingRight: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default function SkipHeaderButton(label) {
  const tmp = createCacheKey();
  label = label.label;
  if (label == null) {
    const intl = require(1236) /* getSystemLocale */.intl;
    label = intl.string(require(1236) /* getSystemLocale */.t["5Wxrcd"]);
  }
  const obj = {};
  const merged = Object.assign(label);
  const items = [tmp.button, ];
  let prop;
  if (label.insideNavigator) {
    prop = tmp.insideNavigatorButton;
  }
  items[1] = prop;
  obj.labelStyle = items;
  obj.label = label;
  obj.accessibilityLabel = label;
  return jsx(require(9114) /* GenericHeaderTitle */.HeaderTextButton, {});
};
