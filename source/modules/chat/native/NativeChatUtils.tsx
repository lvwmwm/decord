// Module ID: 9432
// Function ID: 73412
// Name: ChatScrollPosition
// Dependencies: []

// Module 9432 (ChatScrollPosition)
const _module = require(dependencyMap[0]);
({ NativeModules: closure_3, findNodeHandle: closure_4 } = _module);
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
        const Commands = require(dependencyMap[2]).Commands;
        Commands.scrollTo(arg0, arg1, tmp, tmp2, TOP);
      }
      const obj2 = require(dependencyMap[1]);
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
        const Commands = require(dependencyMap[2]).Commands;
        Commands.scrollToBottom(arg0, arg1);
      }
      const obj = require(dependencyMap[1]);
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
      const obj = require(dependencyMap[1]);
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
      const obj = require(dependencyMap[1]);
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
        const Commands = require(dependencyMap[2]).Commands;
        Commands.scrollIntoView(arg0, arg1, tmp, tmp2);
      }
      const obj2 = require(dependencyMap[1]);
    }
  },
  updateRows(arg0, rows) {
    let forceReload2;
    if (null != arg0) {
      if (obj7.isIOS()) {
        let obj = require(dependencyMap[4]);
        if (obj.isFabric()) {
          const andIncrementChangesetIdForChat = require(dependencyMap[5]).getAndIncrementChangesetIdForChat(arg0);
          ({ rows, forceReload: forceReload2 } = rows);
          const obj3 = require(dependencyMap[5]);
          const tmp30 = null != forceReload2 && forceReload2;
          obj = { category: "chat.dispatch" };
          const _HermesInternal = HermesInternal;
          obj.message = "updateRows dispatch id=" + andIncrementChangesetIdForChat + " ops=" + rows.length;
          obj = { changesetUpdateId: andIncrementChangesetIdForChat, opCount: rows.length, rows, forceReload: tmp30 };
          obj.data = obj;
          importDefault(dependencyMap[3]).addBreadcrumb(obj);
          const Commands = require(dependencyMap[2]).Commands;
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
          const obj4 = importDefault(dependencyMap[3]);
        }
      }
      const tmp4 = callback(arg0);
      if (null != tmp4) {
        if (obj8.isIOS()) {
          let DCDChatManager = closure_3.DCDChatManager;
        } else {
          DCDChatManager = importDefault(dependencyMap[6]);
        }
        const _JSON = JSON;
        const json1 = JSON.stringify(rows.rows);
        const isLoadingAtTop = rows.isLoadingAtTop;
        let json2 = null;
        if (null != rows.scrollData) {
          const _JSON2 = JSON;
          json2 = JSON.stringify(rows.scrollData);
        }
        const obj8 = require(dependencyMap[1]);
        const andIncrementChangesetIdForChat1 = require(dependencyMap[5]).getAndIncrementChangesetIdForChat(arg0);
        const HACK_iOSForceAnimations = rows.HACK_iOSForceAnimations;
        const forceReload = rows.forceReload;
        const isAnimated = rows.isAnimated;
        DCDChatManager.updateRows(tmp4, json1, isLoadingAtTop, json2, andIncrementChangesetIdForChat1, null != HACK_iOSForceAnimations && HACK_iOSForceAnimations, null != forceReload && forceReload, null == isAnimated || isAnimated);
        const obj2 = require(dependencyMap[5]);
      }
      const obj7 = require(dependencyMap[1]);
    }
  },
  clearRows(arg0) {
    if (null != arg0) {
      if (obj5.isIOS()) {
        if (obj.isFabric()) {
          const Commands = require(dependencyMap[2]).Commands;
          Commands.clearRows(arg0, require(dependencyMap[5]).getAndIncrementChangesetIdForChat(arg0));
          const obj4 = require(dependencyMap[5]);
        }
        const obj = require(dependencyMap[4]);
      }
      const tmp4 = callback(arg0);
      if (null != tmp4) {
        if (obj2.isIOS()) {
          let DCDChatManager = closure_3.DCDChatManager;
        } else {
          DCDChatManager = importDefault(dependencyMap[6]);
        }
        const obj2 = require(dependencyMap[1]);
        DCDChatManager.clearRows(tmp4, require(dependencyMap[5]).getAndIncrementChangesetIdForChat(arg0));
        const obj3 = require(dependencyMap[5]);
      }
      const obj5 = require(dependencyMap[1]);
    }
  },
  fadeIn(arg0) {
    if (null != arg0) {
      if (obj2.isIOS()) {
        if (obj.isFabric()) {
          const Commands = require(dependencyMap[2]).Commands;
          Commands.fadeIn(arg0);
        } else {
          const tmp4 = callback(arg0);
          if (null != tmp4) {
            const DCDChatManager = closure_3.DCDChatManager;
            DCDChatManager.fadeIn(tmp4);
          }
        }
        const obj = require(dependencyMap[4]);
      }
      const obj2 = require(dependencyMap[1]);
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
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/chat/native/NativeChatUtils.tsx");

export default obj;
export const ChatScrollPosition = obj;
export const ChatScrollType = { SCROLL: 0, [0]: "SCROLL", FOCUS_ONLY: 1, [1]: "FOCUS_ONLY" };
