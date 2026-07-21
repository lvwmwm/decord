// Module ID: 11103
// Function ID: 86410
// Dependencies: []

// Module 11103
const _module = require(dependencyMap[0]);
({ findNodeHandle: closure_3, NativeModules: closure_4 } = _module);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/chat_input/native/ChatInputNativeCommands.tsx");

export default {
  backspace(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(dependencyMap[2]).Commands;
        Commands.backspace(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.backspace(callback(arg0));
      }
      const obj = require(dependencyMap[1]);
    }
  },
  blur(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(dependencyMap[2]).Commands;
        Commands.blur(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.blur(callback(arg0));
      }
      const obj = require(dependencyMap[1]);
    }
  },
  closeCustomKeyboard(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(dependencyMap[2]).Commands;
        Commands.closeCustomKeyboard(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.closeCustomKeyboard(callback(arg0));
      }
      const obj = require(dependencyMap[1]);
    }
  },
  flushText(arg0, arg1) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(dependencyMap[2]).Commands;
        Commands.flushText(arg0, arg1);
      } else {
        const _Error = Error;
        const error = new Error("flushText is not supported/needed on iOS");
        throw error;
      }
      const obj = require(dependencyMap[1]);
    }
  },
  getText(arg0, set) {
    const require = set;
    const importDefault = arg2;
    if (null == arg0) {
      return null;
    } else if (obj3.shouldUseFabricChatInput()) {
      const nonce = require(dependencyMap[3]).createNonce();
      const dependencyMap = nonce;
      const result = set.set(nonce, (arg0) => {
        arg1.delete(nonce);
        arg2(arg0);
      });
      const Commands = require(dependencyMap[2]).Commands;
      Commands.flushText(arg0, nonce);
      const obj2 = require(dependencyMap[3]);
    } else {
      const tmp2 = callback(arg0);
      if (null == tmp2) {
        const _Error = Error;
        const error = new Error("inputRef is null");
        importDefault(dependencyMap[4]).captureException(error);
        const obj = importDefault(dependencyMap[4]);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.markTextInputChanged(callback(arg0));
        const DCDChatInputLegacyManager2 = closure_4.DCDChatInputLegacyManager;
        const text = DCDChatInputLegacyManager2.getText(tmp2);
        text.then(arg2).catch(importDefault(dependencyMap[4]).captureException);
        const nextPromise = text.then(arg2);
      }
    }
  },
  focus(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(dependencyMap[2]).Commands;
        Commands.focus(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.focus(callback(arg0));
      }
      const obj = require(dependencyMap[1]);
    }
  },
  openCustomKeyboard(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(dependencyMap[2]).Commands;
        Commands.openCustomKeyboard(arg0);
      } else {
        const _Error = Error;
        const error = new Error("openCustomKeyboard is not supported/needed on iOS");
        throw error;
      }
      const obj = require(dependencyMap[1]);
    }
  },
  openSystemKeyboard(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(dependencyMap[2]).Commands;
        Commands.openSystemKeyboard(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.openSystemKeyboard(callback(arg0));
      }
      const obj = require(dependencyMap[1]);
    }
  },
  setText(arg0, arg1) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(dependencyMap[2]).Commands;
        Commands.setText(arg0, arg1);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.setText(callback(arg0), arg1);
      }
      const obj = require(dependencyMap[1]);
    }
  },
  setSelectedRange(arg0, arg1, arg2) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(dependencyMap[2]).Commands;
        Commands.setSelectedRange(arg0, arg1, arg2);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.setSelectedRange(callback(arg0), arg1, arg2);
      }
      const obj = require(dependencyMap[1]);
    }
  },
  updateTextBlocks(arg0, arg1, arg2) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = require(dependencyMap[2]).Commands;
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
      const obj = require(dependencyMap[1]);
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
        const Commands = require(dependencyMap[2]).Commands;
        const _JSON = JSON;
        Commands.replaceRange(arg0, _location, length, text, JSON.stringify(nodes), flag, editId);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.replaceRange(callback(arg0), _location, length, text, nodes, flag, editId);
      }
      const obj = require(dependencyMap[1]);
    }
  }
};
