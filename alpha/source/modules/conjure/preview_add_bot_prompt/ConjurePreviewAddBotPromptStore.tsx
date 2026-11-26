// Module ID: 7705
// Function ID: 7706
// Name: ConjurePreviewAddBotPromptStore
// Dependencies: [504, 572, 2]

// Module 7705 (ConjurePreviewAddBotPromptStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class PreviewAddBotPromptStore extends Store {
  getPrompt(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = PreviewAddBotPromptStore.prototype;
const obj = {
  CONJURE_PREVIEW_ADD_BOT_PROMPT_SET(arg0) {
    let _prompt;
    let projectId;
    ({ projectId, prompt: _prompt } = arg0);
    const value = map.get(projectId);
    let id;
    if (value != null) {
      id = value.id;
    }
    if (id == null) {
      id = null;
    }
    let id1;
    if (_prompt != null) {
      id1 = _prompt.id;
    }
    if (id1 == null) {
      id1 = null;
    }
    let flag = id !== id1;
    if (flag) {
      if (null == _prompt) {
        map.delete(projectId);
        flag = true;
      } else {
        const result = obj.set(projectId, _prompt);
        flag = true;
      }
    }
    return flag;
  }
};
const previewAddBotPromptStore = new PreviewAddBotPromptStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/preview_add_bot_prompt/ConjurePreviewAddBotPromptStore.tsx");

export default previewAddBotPromptStore;
