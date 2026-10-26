// Module ID: 12461
// Function ID: 12462
// Name: ConjurePlanBotPreview
// Dependencies: [19, 17, 21, 8133, 4971, 587, 12344, 558, 576, 9772, 12453, 12462, 2]

// Module 12461 (ConjurePlanBotPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import RowGeneratorDefault from "RowGenerator" /* 8133 */;
import ChatItemDefault from "ChatItem" /* 9772 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12344 */;
import ConjurePlanCommandMenuPreviewDefault from "ConjurePlanCommandMenuPreview" /* 12462 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, menu, obj1, obj4, tmp6;

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
  const fn = function o(message) {
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
  let items;
  let projectId;
  let obj = require("react");
  const cResult = obj.c(12);
  ({ projectId, exchanges } = arg0);
  const tmp2 = closure_8();
  _require = tmp2;
  let obj2 = require("useConjurePlanBotPreviewItems");
  const conjurePlanBotPreviewItems = obj2.useConjurePlanBotPreviewItems(projectId, exchanges);
  ({ items, botIcon } = conjurePlanBotPreviewItems);
  appIconSrc = conjurePlanBotPreviewItems.appIconSrc;
  if (0 === items.length) {
    return null;
  } else {
    let tmp4;
    if (cResult[0] === appIconSrc) {
      if (cResult[1] === botIcon) {
        if (cResult[2] === items) {
          if (cResult[3] === tmp2.menu) {
            tmp4 = cResult[4];
          }
          if (cResult[9] === tmp2.chat) {
            let tmp7;
            if (cResult[10] === tmp4) {
              tmp7 = cResult[11];
            }
            return tmp7;
          }
          class P {
            constructor(arg0) {
              menu = arg0.menu;
              tmp2 = View;
              tmp3 = jsx;
              obj = { record: arg0.record, botIcon };
              key = arg0.key;
              tmp = jsxs;
              items = [, ];
              items[0] = jsx(SampleMessage, obj);
              tmp3Result = null;
              if (null != menu) {
                obj1 = { style: null, children: null };
                tmp5 = closure_0;
                obj1.style = closure_0.menu;
                tmp6 = closure_1;
                tmp7 = closure_2;
                obj4 = { target: null, commandName: null, appIconSrc: null };
                ({ target: obj3.target, commandName: obj3.commandName } = menu);
                tmp8 = appIconSrc;
                obj4.appIconSrc = appIconSrc;
                obj1.children = tmp3(closure_1(closure_2[11]), obj4);
                tmp3Result = tmp3(tmp2, obj1);
              }
              items[1] = tmp3Result;
              return tmp(tmp2, { children: items }, key);
            }
          }
          const obj3 = { style: tmp11, children: tmp4 };
          const tmp9 = closure_5(View, obj3);
          cResult[9] = tmp2.chat;
          cResult[10] = tmp4;
          cResult[11] = tmp9;
          tmp7 = tmp9;
        }
      }
    }
    if (cResult[5] === appIconSrc) {
      if (cResult[6] === botIcon) {
        let tmp5;
        if (cResult[7] === tmp2.menu) {
          tmp5 = cResult[8];
        }
        const mapped = items.map(tmp5);
        class P {
          constructor(arg0) {
            menu = arg0.menu;
            tmp2 = View;
            tmp3 = jsx;
            obj = { record: arg0.record, botIcon };
            key = arg0.key;
            tmp = jsxs;
            items = [, ];
            items[0] = jsx(SampleMessage, obj);
            tmp3Result = null;
            if (null != menu) {
              obj1 = { style: null, children: null };
              tmp5 = closure_0;
              obj1.style = closure_0.menu;
              tmp6 = closure_1;
              tmp7 = closure_2;
              obj4 = { target: null, commandName: null, appIconSrc: null };
              ({ target: obj3.target, commandName: obj3.commandName } = menu);
              tmp8 = appIconSrc;
              obj4.appIconSrc = appIconSrc;
              obj1.children = tmp3(closure_1(closure_2[11]), obj4);
              tmp3Result = tmp3(tmp2, obj1);
            }
            items[1] = tmp3Result;
            return tmp(tmp2, { children: items }, key);
          }
        }
        cResult[1] = botIcon;
        cResult[2] = items;
        cResult[3] = tmp2.menu;
        cResult[4] = mapped;
        tmp4 = mapped;
      }
    }
    class P {
      constructor(arg0) {
        menu = arg0.menu;
        tmp2 = View;
        tmp3 = jsx;
        obj = { record: arg0.record, botIcon };
        key = arg0.key;
        tmp = jsxs;
        items = [, ];
        items[0] = jsx(SampleMessage, obj);
        tmp3Result = null;
        if (null != menu) {
          obj1 = { style: null, children: null };
          tmp5 = closure_0;
          obj1.style = closure_0.menu;
          tmp6 = closure_1;
          tmp7 = closure_2;
          obj4 = { target: null, commandName: null, appIconSrc: null };
          ({ target: obj3.target, commandName: obj3.commandName } = menu);
          tmp8 = appIconSrc;
          obj4.appIconSrc = appIconSrc;
          obj1.children = tmp3(closure_1(closure_2[11]), obj4);
          tmp3Result = tmp3(tmp2, obj1);
        }
        items[1] = tmp3Result;
        return tmp(tmp2, { children: items }, key);
      }
    }
    cResult[5] = appIconSrc;
    cResult[6] = botIcon;
    cResult[7] = tmp2.menu;
    cResult[8] = P;
    tmp5 = P;
  }
}) : (function ConjurePlanBotPreview(arg0) {
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
    tmp3 = closure_5(View, obj2);
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanBotPreview.tsx");

export default tmp5;
