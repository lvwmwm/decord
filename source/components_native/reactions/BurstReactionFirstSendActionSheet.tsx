// Module ID: 7065
// Function ID: 56502
// Name: onDismiss
// Dependencies: [31, 27, 33, 4130, 689, 4098, 7066, 1212, 5187, 7026, 7067, 7006, 1273, 4126, 4543, 3946, 1334, 7065, 1934, 686, 2]
// Exports: default, openBurstReactionFirstSendActionSheet

// Module 7065 (onDismiss)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function onDismiss() {
  importDefault(4098).hideActionSheet();
}
const View = get_ActivityIndicator.View;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingTop: 24, paddingBottom: 24, paddingLeft: 12, paddingRight: 12 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["flex"] = 1;
_createForOfIteratorHelperLoose["alignItems"] = "center";
_createForOfIteratorHelperLoose["justifyContent"] = "center";
_createForOfIteratorHelperLoose["top"] = -120;
_createForOfIteratorHelperLoose.fill = _createForOfIteratorHelperLoose;
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, width: 37.5, height: 37.5 };
_createForOfIteratorHelperLoose.nitroWheel = obj1;
_createForOfIteratorHelperLoose.textContainer = { flexDirection: "row", flexShrink: 1, alignItems: "center", alignSelf: "center", textAlign: "center" };
_createForOfIteratorHelperLoose.body = { paddingTop: 8, paddingBottom: 18 };
_createForOfIteratorHelperLoose.content = { paddingHorizontal: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("components_native/reactions/BurstReactionFirstSendActionSheet.tsx");

export default function BurstReactionFirstSendActionSheet(arg0) {
  let channelId;
  let emoji;
  let messageId;
  ({ emoji, channelId, messageId } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(7066) /* getDeviceSpecificString */;
  obj = { quest: require(1212) /* getSystemLocale */.t["5TpPli"] };
  const deviceSpecificString = obj.getDeviceSpecificString(obj, require(1212) /* getSystemLocale */.t["2Yp7dF"]);
  obj = { backdropOpacity: require(7026) /* _generateAnimationSource */.BACKDROP_OPACITY, contentStyles: tmp.content };
  const obj1 = { style: tmp.fill };
  const obj2 = { channelId, emoji, messageId, reactionType: require(7006) /* ReactionTypes */.ReactionTypes.BURST };
  obj1.children = callback(importDefault(7067), obj2);
  obj.backdropChildren = callback(View, obj1);
  obj.onDismiss = onDismiss;
  const obj3 = { style: tmp.container };
  const obj4 = { style: tmp.textContainer };
  const items = [callback(require(1273) /* Button */.NitroWheel, { style: tmp.nitroWheel }), ];
  const obj6 = { variant: "heading-xl/bold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl.string(require(1212) /* getSystemLocale */.t.NX7HI7);
  items[1] = callback(require(4126) /* Text */.Text, obj6);
  obj4.children = items;
  const items1 = [callback2(View, obj4), , ];
  const obj5 = { style: tmp.nitroWheel };
  const tmp3 = importDefault(7067);
  items1[1] = callback(View, { style: tmp.body, children: callback(require(4126) /* Text */.Text, obj8) });
  const obj9 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj9.text = intl2.string(require(1212) /* getSystemLocale */.t["+IrDzN"]);
  obj9.onPress = onDismiss;
  items1[2] = callback(require(4543) /* Button */.Button, obj9);
  obj3.children = items1;
  obj.children = callback2(View, obj3);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
export const openBurstReactionFirstSendActionSheet = function openBurstReactionFirstSendActionSheet(arg0) {
  let channelId;
  let emoji;
  let messageId;
  ({ channelId, messageId, emoji } = arg0);
  let obj = importDefault(4098);
  obj.hideActionSheet();
  if (obj2.UNSAFE_isDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.SUPER_REACTIONS_FIRST_SENT)) {
    obj = { type: "BURST_REACTION_EFFECT_SEND", channelId, messageId, emoji };
    importDefault(686).dispatch(obj);
    const obj6 = importDefault(686);
  } else {
    const result = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.SUPER_REACTIONS_FIRST_SENT);
    const obj3 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
    obj = { channelId, messageId, emoji };
    importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(7065, dependencyMap.paths), "BurstReactionFirstSendActionSheet", obj);
    const obj4 = importDefault(4098);
  }
};
