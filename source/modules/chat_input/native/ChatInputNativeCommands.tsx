// Module ID: 11114
// Function ID: 86485
// Dependencies: [27, 11115, 11117, 6996, 1184, 2]

// Module 11114
import get_ActivityIndicator from "get ActivityIndicator";

let closure_3;
let closure_4;
({ findNodeHandle: closure_3, NativeModules: closure_4 } = get_ActivityIndicator);
let result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/chat_input/native/ChatInputNativeCommands.tsx");

export default {
  backspace(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.backspace(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.backspace(callback(arg0));
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  },
  blur(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.blur(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.blur(callback(arg0));
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  },
  closeCustomKeyboard(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.closeCustomKeyboard(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.closeCustomKeyboard(callback(arg0));
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  },
  flushText(arg0, arg1) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.flushText(arg0, arg1);
      } else {
        const _Error = Error;
        const error = new Error("flushText is not supported/needed on iOS");
        throw error;
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  },
  getText(arg0, set) {
    const _require = set;
    const importDefault = arg2;
    if (null == arg0) {
      return null;
    } else if (obj3.shouldUseFabricChatInput()) {
      nonce = _require(nonce[3]).createNonce();
      const result = set.set(nonce, (arg0) => {
        set.delete(nonce);
        callback(arg0);
      });
      const Commands = _require(nonce[2]).Commands;
      Commands.flushText(arg0, nonce);
      const obj2 = _require(nonce[3]);
    } else {
      const tmp2 = callback(arg0);
      if (null == tmp2) {
        const _Error = Error;
        const error = new Error("inputRef is null");
        importDefault(nonce[4]).captureException(error);
        const obj = importDefault(nonce[4]);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.markTextInputChanged(callback(arg0));
        const DCDChatInputLegacyManager2 = closure_4.DCDChatInputLegacyManager;
        const text = DCDChatInputLegacyManager2.getText(tmp2);
        text.then(arg2).catch(importDefault(nonce[4]).captureException);
        const nextPromise = text.then(arg2);
      }
    }
  },
  focus(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.focus(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.focus(callback(arg0));
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  },
  openCustomKeyboard(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.openCustomKeyboard(arg0);
      } else {
        const _Error = Error;
        const error = new Error("openCustomKeyboard is not supported/needed on iOS");
        throw error;
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  },
  openSystemKeyboard(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.openSystemKeyboard(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.openSystemKeyboard(callback(arg0));
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  },
  setText(arg0, arg1) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.setText(arg0, arg1);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.setText(callback(arg0), arg1);
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  },
  setSelectedRange(arg0, arg1, arg2) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        Commands.setSelectedRange(arg0, arg1, arg2);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.setSelectedRange(callback(arg0), arg1, arg2);
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  },
  updateTextBlocks(arg0, arg1, arg2) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        const _JSON = JSON;
        let tmp8;
        const json = JSON.stringify(arg1);
        if (null != arg2) {
          tmp8 = arg2;
        }
        Commands.updateTextBlocks(arg0, json, tmp8);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.updateTextBlocks(callback(arg0), arg1, arg2);
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  },
  replaceRange(arg0, keepCursorPosition) {
    let _location;
    let length;
    let nodes;
    let text;
    ({ location: _location, length, text, nodes } = keepCursorPosition);
    if (nodes === undefined) {
      nodes = [];
    }
    let flag = keepCursorPosition.keepCursorPosition;
    if (flag === undefined) {
      flag = false;
    }
    const editId = keepCursorPosition.editId;
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(11117) /* __INTERNAL_VIEW_CONFIG */.Commands;
        const _JSON = JSON;
        Commands.replaceRange(arg0, _location, length, text, JSON.stringify(nodes), flag, editId);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.replaceRange(callback(arg0), _location, length, text, nodes, flag, editId);
      }
      obj = require(11115) /* resolveShouldUseFabric */;
    }
  }
};
