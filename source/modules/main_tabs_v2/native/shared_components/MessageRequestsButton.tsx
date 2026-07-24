// Module ID: 14943
// Function ID: 113903
// Name: useMessageRequestCounts
// Dependencies: [31, 27, 5602, 5603, 33, 4130, 566, 14944, 4543, 1212, 7533, 10132, 11800, 2]
// Exports: default

// Module 14943 (useMessageRequestCounts)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function useMessageRequestCounts() {
  const obj = {};
  const items = [_isNativeReflectConstruct];
  obj.requestCount = require(566) /* initialize */.useStateFromStores(items, () => outer1_5.getMessageRequestsCount());
  const obj2 = require(566) /* initialize */;
  const items1 = [closure_6];
  obj.spamCount = require(566) /* initialize */.useStateFromStores(items1, () => outer1_6.getSpamChannelsCount());
  return obj;
}
function MessageRequestAnimation(color) {
  const ref = React.useRef(null);
  const requestCount = useMessageRequestCounts().requestCount;
  const items = [requestCount];
  const effect = React.useEffect(() => {
    if (requestCount > 0) {
      let tmp3 = null == ref;
      if (!tmp3) {
        const current = ref.current;
        tmp3 = null == current;
        const obj = current;
      }
      if (!tmp3) {
        obj.play();
      }
    }
  }, items);
  return callback(ref(14944).MessageRequestLottie, { ref, color: color.color, size: "sm", autoPlay: true });
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ buttonContainer: { position: "relative" } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx");

export default function MessageRequestsButton(alternateVariant) {
  let flag = alternateVariant.alternateVariant;
  if (flag === undefined) {
    flag = false;
  }
  let obj = Object.create(null);
  obj.alternateVariant = 0;
  const merged = Object.assign(alternateVariant, obj);
  const tmp4 = useMessageRequestCounts();
  let str = tmp4.requestCount;
  if (0 === str) {
    if (0 === tmp4.spamCount) {
      return null;
    }
  }
  if (flag) {
    str = undefined;
    if (str > 0) {
      str = str.toString();
    }
    obj = { style: tmp3.buttonContainer, collapsable: false };
    if (null != str) {
      const obj1 = { icon: callback(MessageRequestAnimation, {}), variant: "secondary", text: str, size: "sm" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj1.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.e7GWjQ);
      const merged1 = Object.assign(merged);
      let tmp26 = callback(require(4543) /* Button */.Button, obj1);
    } else {
      const obj2 = { variant: "secondary", size: "sm", icon: callback(MessageRequestAnimation, {}) };
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj2.accessibilityLabel = intl3.string(require(1212) /* getSystemLocale */.t.e7GWjQ);
      const merged2 = Object.assign(merged);
      tmp26 = callback(require(7533) /* IconButton */.IconButton, obj2);
    }
    const items = [tmp26, ];
    let tmp27 = str > 0;
    if (tmp27) {
      const obj3 = { badgePosition: "right" };
      tmp27 = callback(require(10132) /* ButtonBadge */.ButtonBadge, obj3);
    }
    items[1] = tmp27;
    obj.children = items;
    return closure_8(View, obj);
  } else {
    obj = { source: importDefault(11800), IconComponent: MessageRequestAnimation };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.e7GWjQ);
    let str1;
    if (str > 0) {
      str1 = str.toString();
    }
    obj.buttonText = str1;
    obj.badge = str > 0;
    obj.badgePosition = "right";
    const merged3 = Object.assign(merged);
    return callback(importDefault(10132), obj);
  }
  tmp3 = callback2();
};
