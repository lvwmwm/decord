// Module ID: 17163
// Function ID: 17164
// Name: ConjurePlanBotPreview
// Dependencies: [19, 17, 21, 7746, 5092, 587, 17131, 558, 576, 9373, 17147, 5088, 1126, 3849, 17164, 5377, 2]

// Module 17163 (ConjurePlanBotPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3849 from "module_3849" /* 3849 */;
import RowGeneratorDefault from "RowGenerator" /* 7746 */;
import ChatItemDefault from "ChatItem" /* 9373 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 17131 */;
import ConjurePlanCommandMenuPreviewDefault from "ConjurePlanCommandMenuPreview" /* 17164 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function SampleMessage(record) {
  const obj = react2;
  const cResult = obj.c(6);
  record = record.record;
  const botIcon = record.botIcon;
  if (cResult[0] === botIcon) {
    let tmp3;
    if (cResult[1] === record.author.bot) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === tmp3) {
      let tmp4;
      if (cResult[4] === record) {
        tmp4 = cResult[5];
      }
      return tmp4;
    }
    const obj2 = { rowGenerator, message: record, modifyRow: tmp3, pointerEvents: "none" };
    const tmp8 = hasOwnProperty(ChatItemDefault, obj2);
    cResult[3] = tmp3;
    cResult[4] = record;
    cResult[5] = tmp8;
    tmp4 = tmp8;
  }
  const fn = function n(message) {
    const bot = record.author.bot && null != botIcon && null != message.message;
    if (bot) {
      message.message.avatarURL = botIcon;
    }
  };
  cResult[0] = botIcon;
  cResult[1] = record.author.bot;
  cResult[2] = fn;
  tmp3 = fn;
}) : (function SampleMessage(record) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanBotPreview(arg0) {
  let appIconSrc;
  let botIcon;
  let exchanges;
  let intl;
  let intl2;
  let items;
  let items1;
  let projectId;
  let tmp = _require;
  const tmp2 = appIconSrc;
  let obj = require("react");
  const cResult = obj.c(16);
  ({ projectId, exchanges } = arg0);
  const tmp4 = closure_8();
  _require = tmp4;
  let obj2 = require("useConjurePlanBotPreviewItems");
  const conjurePlanBotPreviewItems = obj2.useConjurePlanBotPreviewItems(projectId, exchanges);
  ({ items, botIcon } = conjurePlanBotPreviewItems);
  appIconSrc = conjurePlanBotPreviewItems.appIconSrc;
  if (0 === items.length) {
    return null;
  } else {
    let first;
    let tmp11;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(botIcon(tmp2[13]).sA1lTv) };
      const Text = tmp(tmp2[11]).Text;
      intl = tmp(tmp2[12]).intl;
      const tmp9 = closure_5(Text, obj3);
      cResult[0] = tmp9;
      first = tmp9;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === appIconSrc) {
      if (cResult[2] === botIcon) {
        if (cResult[3] === items) {
          if (cResult[4] === tmp4.menu) {
            tmp11 = cResult[5];
          }
          if (cResult[10] === tmp4.chat) {
            let tmp14;
            let tmp18;
            let tmp22;
            if (cResult[11] === tmp11) {
              tmp14 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(botIcon(tmp2[13]).NnmbJu) };
              const Text2 = tmp(tmp2[11]).Text;
              intl2 = tmp(tmp2[12]).intl;
              const tmp21 = closure_5(Text2, obj4);
              cResult[13] = tmp21;
              tmp18 = tmp21;
            } else {
              tmp18 = cResult[13];
            }
            if (cResult[14] !== tmp14) {
              let obj5 = { direction: "vertical", spacing: 4, children: items1 };
              items1 = [first, tmp14, tmp18];
              const tmp24 = closure_6(tmp(tmp2[15]).Stack, obj5);
              cResult[14] = tmp14;
              cResult[15] = tmp24;
              tmp22 = tmp24;
            } else {
              tmp22 = cResult[15];
            }
            return tmp22;
          }
          const obj6 = { style: tmp10, children: tmp11 };
          const tmp17 = closure_5(View, obj6);
          cResult[10] = tmp4.chat;
          cResult[11] = tmp11;
          cResult[12] = tmp17;
          tmp14 = tmp17;
        }
      }
    }
    if (cResult[6] === appIconSrc) {
      if (cResult[7] === botIcon) {
        let tmp12;
        if (cResult[8] === tmp4.menu) {
          tmp12 = cResult[9];
        }
        const mapped = items.map(tmp12);
        cResult[1] = appIconSrc;
        cResult[2] = botIcon;
        cResult[3] = items;
        cResult[4] = tmp4.menu;
        cResult[5] = mapped;
        tmp11 = mapped;
      }
    }
    const fn = function f(menu) {
      let obj5;
      menu = menu.menu;
      const children = [, ];
      const key = menu.key;
      const obj = { record: menu.record, botIcon };
      children[0] = hasOwnProperty(closure_9, obj);
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
    };
    cResult[6] = appIconSrc;
    cResult[7] = botIcon;
    cResult[8] = tmp4.menu;
    cResult[9] = fn;
    tmp12 = fn;
  }
}) : (function ConjurePlanBotPreview(arg0) {
  let appIconSrc;
  let botIcon;
  let c1;
  let c2;
  let exchanges;
  let intl;
  let intl2;
  let items;
  let items1;
  let projectId;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ projectId, exchanges } = arg0);
  let tmp = closure_8();
  _require = tmp;
  const tmp2 = _require;
  const tmp3 = dependencyMap;
  let obj = require("useConjurePlanBotPreviewItems");
  const conjurePlanBotPreviewItems = obj.useConjurePlanBotPreviewItems(projectId, exchanges);
  ({ items, botIcon: c1, appIconSrc: c2 } = conjurePlanBotPreviewItems);
  let tmp5 = null;
  if (0 !== items.length) {
    let obj2 = { direction: "vertical", spacing: 4, children: items1 };
    const Stack = tmp2(5377).Stack;
    const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: intl.string(_modDef3849.sA1lTv) };
    const Text = tmp2(5088).Text;
    intl = tmp2(1126).intl;
    items1 = [closure_5(Text, obj3), , ];
    const obj4 = {
      style: tmp.chat,
      children: items.map((menu) => {
          let obj5;
          menu = menu.menu;
          const children = [, ];
          const key = menu.key;
          const obj = { record: menu.record, botIcon };
          children[0] = hasOwnProperty(closure_9, obj);
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
    items1[1] = closure_5(View, obj4);
    let obj5 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(_modDef3849.NnmbJu) };
    const Text2 = tmp2(5088).Text;
    intl2 = tmp2(1126).intl;
    items1[2] = closure_5(Text2, obj5);
    tmp5 = closure_6(Stack, obj2);
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanBotPreview.tsx");

export default tmp5;
