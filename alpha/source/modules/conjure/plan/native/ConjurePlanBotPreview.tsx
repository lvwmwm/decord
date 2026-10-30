// Module ID: 12708
// Function ID: 12709
// Name: ConjurePlanBotPreview
// Dependencies: [19, 17, 21, 8369, 5009, 575, 12587, 9864, 12698, 12709, 2]
// Exports: default

// Module 12708 (ConjurePlanBotPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import RowGeneratorDefault from "RowGenerator" /* 8369 */;
import ChatItemDefault from "ChatItem" /* 9864 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12587 */;
import ConjurePlanCommandMenuPreviewDefault from "ConjurePlanCommandMenuPreview" /* 12709 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, menu;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function SampleMessage(record) {
  record = record.record;
  const botIcon = record.botIcon;
  const items = [record, botIcon];
  const callback = react.useCallback((message) => {
    const bot = record.author.bot && null != botIcon && null != message.message;
    if (bot) {
      message.message.avatarURL = botIcon;
    }
  }, items);
  const obj = { rowGenerator, message: record, modifyRow: callback, pointerEvents: "none" };
  return hasOwnProperty(ChatItemDefault, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let tmp3 = new RowGeneratorDefault();
const rowGenerator = tmp3;
let createStyles = createStyles_mod;
let obj = { chat: obj2, menu: obj3 };
obj2 = { paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_4, paddingLeft: ConjureNativeStatusLine.MESSAGE_CONTENT_INSET, paddingRight: ConjureNativeStatusLine.MESSAGE_EDGE_INSET };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanBotPreview.tsx");

export default function ConjurePlanBotPreview(arg0) {
  let appIconSrc;
  let botIcon;
  let c1;
  let c2;
  let exchanges;
  let items;
  let projectId;
  c1 = undefined;
  dependencyMap = undefined;
  ({ projectId, exchanges } = arg0);
  let tmp = closure_8();
  _require = tmp;
  let obj = require("useConjurePlanBotPreviewItems");
  const conjurePlanBotPreviewItems = obj.useConjurePlanBotPreviewItems(projectId, exchanges);
  ({ items, botIcon: c1, appIconSrc: c2 } = conjurePlanBotPreviewItems);
  let tmp3 = null;
  if (0 !== items.length) {
    let obj2 = {
      style: tmp.chat,
      children: items.map((menu) => {
          let obj5;
          menu = menu.menu;
          const children = [, ];
          const key = menu.key;
          const obj = { record: menu.record, botIcon };
          children[0] = hasOwnProperty(SampleMessage, obj);
          let tmp3Result = null;
          const tmp = metroRequire;
          if (null != menu) {
            const obj2 = { style: menu.menu, children: hasOwnProperty(ConjurePlanCommandMenuPreviewDefault, obj5) };
            obj5 = { target: null, commandName: null, appIconSrc };
            ({ target: obj3.target, commandName: obj3.commandName } = menu);
            tmp3Result = tmp3(tmp2, obj2);
          }
          children[1] = tmp3Result;
          return tmp(View, { children }, key);
        })
    };
    tmp3 = closure_5(View, obj2);
  }
  return tmp3;
};
