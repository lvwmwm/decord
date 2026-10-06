// Module ID: 9760
// Function ID: 9761
// Name: NativeChatUtils
// Dependencies: [17, 1370, 9761, 1243, 9762, 9763, 2]

// Module 9760 (NativeChatUtils)
import SentryUtilsDefault from "SentryUtils" /* 1243 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import ChatNativeComponent from "ChatNativeComponent" /* 9761 */;
import ChatChangesetUpdateTracker from "ChatChangesetUpdateTracker" /* 9762 */;
import react_nativeDefault from "react-native" /* 9763 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ NativeModules: c3, findNodeHandle: closure_4 } = react_native);
const ChatScrollPosition = { TOP: 0, [0]: "TOP", MIDDLE: 1, [1]: "MIDDLE", BOTTOM: 2, [2]: "BOTTOM", NONE: 3, [3]: "NONE" };
let obj2 = {
  scrollTo(arg0, arg1, arg2) {
    if (null != arg0) {
      let obj = arg2;
      if (arg2 == null) {
        obj = {};
      }
      const animated = obj.animated;
      const highlight = obj.highlight;
      let TOP = obj.position;
      if (undefined === TOP) {
        TOP = obj.TOP;
      }
      const obj2 = PlatformUtils;
      const tmp5 = require;
      if (obj2.isIOS()) {
        const tmp15 = React3(arg0);
        if (null != tmp15) {
          const DCDChatManager = _false.DCDChatManager;
          DCDChatManager.scrollTo(tmp15, arg1, undefined !== animated && animated, undefined !== highlight && highlight, TOP);
        }
      } else {
        const Commands = tmp5(9761).Commands;
        Commands.scrollTo(arg0, arg1, undefined !== animated && animated, undefined !== highlight && highlight, TOP);
      }
    }
  },
  scrollToBottom(arg0, arg1) {
    if (null != arg0) {
      const obj = PlatformUtils;
      const tmp2 = require;
      if (obj.isIOS()) {
        const tmp6 = React3(arg0);
        if (null != tmp6) {
          const DCDChatManager = _false.DCDChatManager;
          DCDChatManager.scrollToBottom(tmp6, arg1);
        }
      } else {
        const Commands = tmp2(9761).Commands;
        Commands.scrollToBottom(arg0, arg1);
      }
    }
  },
  scrollToTop(arg0, arg1) {
    if (null != arg0) {
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        const tmp4 = React3(arg0);
        if (null != tmp4) {
          const DCDChatManager = _false.DCDChatManager;
          DCDChatManager.scrollToTop(tmp4, arg1);
        }
      }
    }
  },
  scrollToRelativeOffset(arg0, arg1, arg2) {
    if (null != arg0) {
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        const tmp4 = React3(arg0);
        if (null != tmp4) {
          const DCDChatManager = _false.DCDChatManager;
          const result = DCDChatManager.scrollToRelativeOffset(tmp4, arg1, arg2);
        }
      }
    }
  },
  scrollIntoView(arg0, arg1, arg2) {
    if (null != arg0) {
      let obj = arg2;
      if (arg2 == null) {
        obj = {};
      }
      const animated = obj.animated;
      const highlight = obj.highlight;
      const obj2 = PlatformUtils;
      const tmp4 = require;
      if (obj2.isIOS()) {
        const tmp13 = React3(arg0);
        if (null != tmp13) {
          const DCDChatManager = _false.DCDChatManager;
          DCDChatManager.scrollIntoView(tmp13, arg1, undefined !== animated && animated, undefined !== highlight && highlight);
        }
      } else {
        const Commands = tmp4(9761).Commands;
        Commands.scrollIntoView(arg0, arg1, undefined !== animated && animated, undefined !== highlight && highlight);
      }
    }
  },
  updateRows(arg0, rows) {
    let forceReload;
    let obj2;
    if (null != arg0) {
      const obj5 = PlatformUtils;
      if (obj5.isIOS()) {
        const tmp32Result = ChatChangesetUpdateTracker;
        const andIncrementChangesetIdForChat = tmp32Result.getAndIncrementChangesetIdForChat(arg0);
        ({ rows, forceReload } = rows);
        if (forceReload == null) {
          forceReload = false;
        }
        const _HermesInternal = HermesInternal;
        const obj = { category: "chat.dispatch", message: "updateRows dispatch id=" + andIncrementChangesetIdForChat + " ops=" + rows.length, data: obj2 };
        const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
        SentryUtilsDefault;
        obj2 = { changesetUpdateId: andIncrementChangesetIdForChat, opCount: rows.length, rows, forceReload };
        addBreadcrumb(obj);
        const Commands = tmp32(9761).Commands;
        const _JSON2 = JSON;
        const updateRows = Commands.updateRows;
        const json = JSON.stringify(rows.rows);
        const isLoadingAtTop = rows.isLoadingAtTop;
        let str3 = "";
        if (null != rows.scrollData) {
          const _JSON3 = JSON;
          str3 = JSON.stringify(rows.scrollData);
        }
        let flag4 = rows.HACK_iOSForceAnimations;
        if (flag4 == null) {
          flag4 = false;
        }
        let flag5 = rows.forceReload;
        if (flag5 == null) {
          flag5 = false;
        }
        let flag6 = rows.isAnimated;
        if (flag6 == null) {
          flag6 = true;
        }
        updateRows(arg0, json, isLoadingAtTop, str3, andIncrementChangesetIdForChat, flag4, flag5, flag6);
      } else {
        const tmp2 = React3(arg0);
        if (null != tmp2) {
          const _JSON4 = JSON;
          const updateRows2 = react_nativeDefault.updateRows;
          const json1 = JSON.stringify(rows.rows);
          const isLoadingAtTop2 = rows.isLoadingAtTop;
          let json2 = null;
          if (null != rows.scrollData) {
            const _JSON = JSON;
            json2 = JSON.stringify(rows.scrollData);
          }
          const tmp32Result2 = ChatChangesetUpdateTracker;
          const andIncrementChangesetIdForChat1 = tmp32Result2.getAndIncrementChangesetIdForChat(arg0);
          let flag = rows.HACK_iOSForceAnimations;
          if (flag == null) {
            flag = false;
          }
          let flag2 = rows.forceReload;
          if (flag2 == null) {
            flag2 = false;
          }
          let flag3 = rows.isAnimated;
          if (flag3 == null) {
            flag3 = true;
          }
          updateRows2(tmp2, json1, isLoadingAtTop2, json2, andIncrementChangesetIdForChat1, flag, flag2, flag3);
        }
      }
    }
  },
  clearRows(arg0) {
    if (null != arg0) {
      const obj3 = PlatformUtils;
      if (obj3.isIOS()) {
        const Commands = tmp7(9761).Commands;
        const clearRows2 = Commands.clearRows;
        const tmp7Result = ChatChangesetUpdateTracker;
        clearRows2(arg0, tmp7Result.getAndIncrementChangesetIdForChat(arg0));
      } else {
        const tmp2 = React3(arg0);
        if (null != tmp2) {
          const clearRows = react_nativeDefault.clearRows;
          react_nativeDefault;
          const tmp7Result2 = ChatChangesetUpdateTracker;
          clearRows(tmp2, tmp7Result2.getAndIncrementChangesetIdForChat(arg0));
        }
      }
    }
  },
  fadeIn(arg0) {
    let isIOSResult = null != arg0;
    if (isIOSResult) {
      const obj = PlatformUtils;
      isIOSResult = obj.isIOS();
    }
    if (isIOSResult) {
      const Commands = ChatNativeComponent.Commands;
      Commands.fadeIn(arg0);
    }
  },
  focus(arg0, arg1) {
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      if (null != arg0) {
        const tmp4 = React3(arg0);
        if (null != tmp4) {
          const DCDChatManager = _false.DCDChatManager;
          DCDChatManager.focus(tmp4, arg1);
        }
      }
    }
  }
};
let result = size.fileFinishedImporting("modules/chat/native/NativeChatUtils.tsx");

export default obj2;
export { ChatScrollPosition };
export const ChatScrollType = { SCROLL: 0, [0]: "SCROLL", FOCUS_ONLY: 1, [1]: "FOCUS_ONLY" };
