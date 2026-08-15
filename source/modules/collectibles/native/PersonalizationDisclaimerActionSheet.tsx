// Module ID: 14973
// Function ID: 14974
// Name: PersonalizationDisclaimerActionSheet
// Dependencies: [19, 676, 21, 4661, 712, 4090, 1993, 6950, 4734, 1236, 6687, 4745, 6693, 4342, 2]
// Exports: default

// Module 14973 (PersonalizationDisclaimerActionSheet)
import noop from "noop";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, header: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: require("Themes").space.PX_8, alignSelf: "center", textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingVertical: require("Themes").space.PX_8, alignSelf: "center", textAlign: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default function PersonalizationDisclaimerActionSheet() {
  const tmp = createCacheKey();
  const callback = React.useCallback(() => {
    const obj = callback(4090);
    obj.openURL(callback(1993).getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
  }, []);
  let obj = { contentStyles: tmp.container, children: null };
  obj = { variant: "heading-md/medium", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.header, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl.string(require(1236) /* getSystemLocale */.t.euks4U);
  const items = [callback(require(4734) /* Text */.Text, obj), ];
  obj = { children: null };
  const obj1 = { size: "lg", text: null, onPress: null, icon: null, iconPosition: "end" };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl2.string(require(1236) /* getSystemLocale */.t.hvVgAZ);
  obj1[2] = callback;
  const obj2 = { color: null };
  obj2[0] = importDefault(712).colors.WHITE;
  obj1[3] = callback(require(6693) /* LinkExternalSmallIcon */.LinkExternalSmallIcon, obj2);
  const items1 = [callback(require(4745) /* Button */.Button, obj1), ];
  const obj3 = { variant: "tertiary", size: "lg", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj3[2] = intl3.string(require(1236) /* getSystemLocale */.t.WAI6xu);
  obj3[3] = function onPress() {
    return callback(4342).hideActionSheet();
  };
  items1[1] = callback(require(4745) /* Button */.Button, obj3);
  obj[0] = items1;
  items[1] = callback2(require(6687) /* ButtonGroup */.ButtonGroup, obj);
  obj[1] = items;
  return callback2(require(6950) /* Background */.BottomSheet, obj);
};
