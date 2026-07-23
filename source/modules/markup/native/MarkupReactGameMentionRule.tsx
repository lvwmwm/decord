// Module ID: 12854
// Function ID: 99865
// Name: MarkupGameMention
// Dependencies: [31, 33, 4130, 689, 1212, 4121, 11924, 5085, 8594, 8600, 4126, 2]
// Exports: default

// Module 12854 (MarkupGameMention)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsxs: closure_3, jsx: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: 16, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginRight: 2 };
_createForOfIteratorHelperLoose.icon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.chip = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, paddingHorizontal: 2 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, paddingHorizontal: 2 };
_createForOfIteratorHelperLoose.chipText = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500 };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/markup/native/MarkupReactGameMentionRule.tsx");

export default function MarkupGameMention(arg0) {
  let gameName;
  let icon;
  let importDefault;
  let node;
  let state;
  ({ node, state } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  ({ gameId: importDefault, gameName, icon } = node);
  const intl = state(1212).intl;
  const stringResult = intl.string(state(1212).t["11pdXZ"]);
  let tmp3 = null != gameName;
  if (tmp3) {
    tmp3 = "" !== gameName;
  }
  let tmp4 = stringResult;
  if (tmp3) {
    tmp4 = gameName;
  }
  if (tmp3) {
    let obj = { size: "sm", style: tmp.icon };
    let tmp13 = null != icon;
    if (tmp13) {
      tmp13 = "" !== icon;
    }
    let tmp14 = callback(state(11924).UnknownGameIcon, obj);
    if (tmp13) {
      obj = { style: tmp.icon };
      const obj1 = { uri: icon };
      obj.source = obj1;
      tmp14 = callback(importDefault(5085), obj);
    }
    const obj2 = {};
    let str4 = "button";
    if (state.noStyleAndInteraction) {
      str4 = "text";
    }
    obj2.accessibilityRole = str4;
    obj2.style = tmp.chip;
    let textColor;
    if (null != state) {
      textColor = state.textColor;
    }
    obj2.color = textColor;
    let fn;
    if (!state.noStyleAndInteraction) {
      fn = () => {
        let obj = outer1_1(outer1_2[8]);
        obj = { gameId: closure_1, gameProfileModalChecks: obj, source: state(outer1_2[9]).GameProfileSources.GameMention, sourceUserId: state.authorId };
        obj = { shouldOpenGameProfile: true, gameId: closure_1 };
        obj.openGameProfileModal(obj);
      };
    }
    obj2.onPress = fn;
    const items = [tmp14, ];
    const obj3 = { variant: "text-sm/medium", style: tmp.chipText, children: tmp4 };
    items[1] = callback(state(4126).Text, obj3);
    obj2.children = items;
    return closure_3(state(4121).MarkupText, obj2, state.key);
  } else {
    obj = {};
    let textColor1;
    if (null != state) {
      textColor1 = state.textColor;
    }
    obj.color = textColor1;
    const items1 = ["@", stringResult];
    obj.children = items1;
    return closure_3(state(4121).MarkupText, obj, state.key);
  }
};
