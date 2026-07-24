// Module ID: 15005
// Function ID: 114323
// Name: MESSAGES_ITEM_EMPTY_STATE_HEIGHT
// Dependencies: [31, 27, 33, 4130, 689, 3982, 15006, 4126, 1212, 4543, 2]

// Module 15005 (MESSAGES_ITEM_EMPTY_STATE_HEIGHT)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, flex: 1, height: 325 };
obj.container = obj;
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, flexShrink: 1, flexGrow: 1 };
obj.containerImage = _createForOfIteratorHelperLoose;
obj.image = { height: "100%", width: "100%" };
obj.body = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
obj.title = { textAlign: "center" };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
const memoResult = importAllResult.memo(function MessagesItemEmptyState() {
  const tmp = callback3();
  let obj = { style: tmp.container, collapsable: false };
  obj = { style: tmp.containerImage };
  obj = { resizeMode: "contain" };
  const callback = importAllResult.useCallback(() => {
    let obj = outer1_0(outer1_2[5]);
    const rootNavigationRef = obj.getRootNavigationRef();
    let tmp2 = null == rootNavigationRef;
    let obj2 = rootNavigationRef;
    if (!tmp2) {
      const current = rootNavigationRef.current;
      tmp2 = null == current;
      obj2 = current;
    }
    if (!tmp2) {
      obj = { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } };
      obj2.navigate("friends", obj);
    }
  }, []);
  obj.source = importDefault(15006);
  obj.style = tmp.image;
  obj.children = callback(closure_4, obj);
  const items = [callback(closure_5, obj), , , ];
  const obj1 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.title, maxFontSizeMultiplier: 2 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t["8JZof8"]);
  items[1] = callback(require(4126) /* Text */.Heading, obj1);
  let obj2 = { color: "text-default", variant: "text-md/medium", style: tmp.body, maxFontSizeMultiplier: 2 };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t["qm+H7x"]);
  items[2] = callback(require(4126) /* Text */.Text, obj2);
  const obj3 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl3.string(require(1212) /* getSystemLocale */.t.zIJnA6);
  obj3.onPress = callback;
  obj3.size = "lg";
  items[3] = callback(require(4543) /* Button */.Button, obj3);
  obj.children = items;
  return callback2(closure_5, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default memoResult;
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;
