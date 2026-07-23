// Module ID: 9440
// Function ID: 73477
// Name: ChatScrollPosition
// Dependencies: [27, 477, 9441, 1184, 3994, 9442, 9443, 2]

// Module 9440 (ChatScrollPosition)
import get_ActivityIndicator from "get ActivityIndicator";

let closure_3;
let closure_4;
({ NativeModules: closure_3, findNodeHandle: closure_4 } = get_ActivityIndicator);
let obj = { TOP: 0, [0]: "TOP", MIDDLE: 1, [1]: "MIDDLE", BOTTOM: 2, [2]: "BOTTOM", NONE: 3, [3]: "NONE" };
obj = {
  scrollTo(arg0, arg1, arg2) {
    let obj = arg2;
    if (null != arg0) {
      if (null == obj) {
        obj = {};
      }
      const animated = obj.animated;
      const highlight = obj.highlight;
      let TOP = obj.position;
      if (undefined === TOP) {
        TOP = obj.TOP;
      }
      if (obj2.isIOS()) {
        const tmp16 = callback(arg0);
        if (null != tmp16) {
          const DCDChatManager = closure_3.DCDChatManager;
          DCDChatManager.scrollTo(tmp16, arg1, tmp, tmp2, TOP);
        }
      } else {
        const Commands = require(9441) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.scrollTo(arg0, arg1, tmp, tmp2, TOP);
      }
      obj2 = require(477) /* set */;
    }
  },
  scrollToBottom(arg0, arg1) {
    if (null != arg0) {
      if (obj.isIOS()) {
        const tmp7 = callback(arg0);
        if (null != tmp7) {
          const DCDChatManager = closure_3.DCDChatManager;
          DCDChatManager.scrollToBottom(tmp7, arg1);
        }
      } else {
        const Commands = require(9441) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.scrollToBottom(arg0, arg1);
      }
      obj = require(477) /* set */;
    }
  },
  scrollToTop(arg0, arg1) {
    if (null != arg0) {
      if (obj.isIOS()) {
        const tmp4 = callback(arg0);
        if (null != tmp4) {
          const DCDChatManager = closure_3.DCDChatManager;
          DCDChatManager.scrollToTop(tmp4, arg1);
        }
      }
      obj = require(477) /* set */;
    }
  },
  scrollToRelativeOffset(arg0, arg1, arg2) {
    if (null != arg0) {
      if (obj.isIOS()) {
        const tmp4 = callback(arg0);
        if (null != tmp4) {
          const DCDChatManager = closure_3.DCDChatManager;
          const result = DCDChatManager.scrollToRelativeOffset(tmp4, arg1, arg2);
        }
      }
      obj = require(477) /* set */;
    }
  },
  scrollIntoView(arg0, arg1, arg2) {
    let obj = arg2;
    if (null != arg0) {
      if (null == obj) {
        obj = {};
      }
      const animated = obj.animated;
      const highlight = obj.highlight;
      if (obj2.isIOS()) {
        const tmp14 = callback(arg0);
        if (null != tmp14) {
          const DCDChatManager = closure_3.DCDChatManager;
          DCDChatManager.scrollIntoView(tmp14, arg1, tmp, tmp2);
        }
      } else {
        const Commands = require(9441) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.scrollIntoView(arg0, arg1, tmp, tmp2);
      }
      obj2 = require(477) /* set */;
    }
  },
  updateRows(arg0, rows) {
    let forceReload2;
    if (null != arg0) {
      if (obj7.isIOS()) {
        let obj = require(3994) /* isFabric */;
        if (obj.isFabric()) {
          const andIncrementChangesetIdForChat = require(9442) /* weakMap */.getAndIncrementChangesetIdForChat(arg0);
          ({ rows, forceReload: forceReload2 } = rows);
          const obj3 = require(9442) /* weakMap */;
          const tmp30 = null != forceReload2 && forceReload2;
          obj = { category: "chat.dispatch" };
          const _HermesInternal = HermesInternal;
          obj.message = "updateRows dispatch id=" + andIncrementChangesetIdForChat + " ops=" + rows.length;
          obj = { changesetUpdateId: andIncrementChangesetIdForChat, opCount: rows.length, rows, forceReload: tmp30 };
          obj.data = obj;
          importDefault(1184).addBreadcrumb(obj);
          const Commands = require(9441) /* __INTERNAL_VIEW_CONFIG */.Commands;
          const _JSON3 = JSON;
          const json = JSON.stringify(rows.rows);
          const isLoadingAtTop2 = rows.isLoadingAtTop;
          let str4 = "";
          if (null != rows.scrollData) {
            const _JSON4 = JSON;
            str4 = JSON.stringify(rows.scrollData);
          }
          const HACK_iOSForceAnimations2 = rows.HACK_iOSForceAnimations;
          const forceReload3 = rows.forceReload;
          const isAnimated2 = rows.isAnimated;
          Commands.updateRows(arg0, json, isLoadingAtTop2, str4, andIncrementChangesetIdForChat, null != HACK_iOSForceAnimations2 && HACK_iOSForceAnimations2, null != forceReload3 && forceReload3, null == isAnimated2 || isAnimated2);
          const obj4 = importDefault(1184);
        }
      }
      const tmp4 = callback(arg0);
      if (null != tmp4) {
        if (obj8.isIOS()) {
          let DCDChatManager = closure_3.DCDChatManager;
        } else {
          DCDChatManager = importDefault(9443);
        }
        const _JSON = JSON;
        const json1 = JSON.stringify(rows.rows);
        const isLoadingAtTop = rows.isLoadingAtTop;
        let json2 = null;
        if (null != rows.scrollData) {
          const _JSON2 = JSON;
          json2 = JSON.stringify(rows.scrollData);
        }
        obj8 = require(477) /* set */;
        const andIncrementChangesetIdForChat1 = require(9442) /* weakMap */.getAndIncrementChangesetIdForChat(arg0);
        const HACK_iOSForceAnimations = rows.HACK_iOSForceAnimations;
        const forceReload = rows.forceReload;
        const isAnimated = rows.isAnimated;
        DCDChatManager.updateRows(tmp4, json1, isLoadingAtTop, json2, andIncrementChangesetIdForChat1, null != HACK_iOSForceAnimations && HACK_iOSForceAnimations, null != forceReload && forceReload, null == isAnimated || isAnimated);
        const obj2 = require(9442) /* weakMap */;
      }
      obj7 = require(477) /* set */;
    }
  },
  clearRows(arg0) {
    if (null != arg0) {
      if (obj5.isIOS()) {
        if (obj.isFabric()) {
          const Commands = require(9441) /* __INTERNAL_VIEW_CONFIG */.Commands;
          Commands.clearRows(arg0, require(9442) /* weakMap */.getAndIncrementChangesetIdForChat(arg0));
          const obj4 = require(9442) /* weakMap */;
        }
        obj = require(3994) /* isFabric */;
      }
      const tmp4 = callback(arg0);
      if (null != tmp4) {
        if (obj2.isIOS()) {
          let DCDChatManager = closure_3.DCDChatManager;
        } else {
          DCDChatManager = importDefault(9443);
        }
        obj2 = require(477) /* set */;
        DCDChatManager.clearRows(tmp4, require(9442) /* weakMap */.getAndIncrementChangesetIdForChat(arg0));
        const obj3 = require(9442) /* weakMap */;
      }
      obj5 = require(477) /* set */;
    }
  },
  fadeIn(arg0) {
    if (null != arg0) {
      if (obj2.isIOS()) {
        if (obj.isFabric()) {
          const Commands = require(9441) /* __INTERNAL_VIEW_CONFIG */.Commands;
          Commands.fadeIn(arg0);
        } else {
          const tmp4 = callback(arg0);
          if (null != tmp4) {
            const DCDChatManager = closure_3.DCDChatManager;
            DCDChatManager.fadeIn(tmp4);
          }
        }
        obj = require(3994) /* isFabric */;
      }
      obj2 = require(477) /* set */;
    }
  },
  focus(arg0, arg1) {
    if (obj.isIOS()) {
      if (null != arg0) {
        const tmp3 = callback(arg0);
        if (null != tmp3) {
          const DCDChatManager = closure_3.DCDChatManager;
          DCDChatManager.focus(tmp3, arg1);
        }
      }
    }
  }
};
let result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/chat/native/NativeChatUtils.tsx");

export default obj;
export const ChatScrollPosition = obj;
export const ChatScrollType = { SCROLL: 0, [0]: "SCROLL", FOCUS_ONLY: 1, [1]: "FOCUS_ONLY" };
