// Module ID: 14573
// Function ID: 14574
// Name: conjurePreviewAddBotPromptConnection
// Dependencies: [6808, 572, 7547, 2]
// Exports: answerConjurePreviewAddBotPrompt, conjurePreviewBotAdded

// Module 14573 (conjurePreviewAddBotPromptConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 7547 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import size from "module_2" /* 2 */;

let obj = {
  preview_add_bot_prompt(prompt, projectId) {
    projectId = projectId.projectId;
    if (null != prompt.prompt) {
      const integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
      let prop;
      if (integrationStatus != null) {
        prop = integrationStatus.integration_installed;
      }
      const tmp4 = true === prop && true !== integrationStatus.bot_permissions_changed;
      if (tmp4) {
        const id = prompt.prompt.id;
        const added = "added";
        const obj3 = conjureProjectSockets;
        if (obj3.sendOnConjureSocket(projectId, "preview bot answer", (sendPreviewBotAnswer) => sendPreviewBotAnswer.sendPreviewBotAnswer(id, added))) {
          const obj2 = { type: "CONJURE_PREVIEW_ADD_BOT_PROMPT_SET", projectId, prompt: null };
          const obj4 = DispatcherDefault;
          obj4.dispatch(obj2);
        }
      }
    }
    const obj = DispatcherDefault;
    const obj5 = { type: "CONJURE_PREVIEW_ADD_BOT_PROMPT_SET", projectId, prompt: prompt.prompt };
    obj.dispatch(obj5);
  }
};
const result = size.fileFinishedImporting("modules/conjure/preview_add_bot_prompt/conjurePreviewAddBotPromptConnection.tsx");

export function conjurePreviewBotAdded(arg0) {
  const integrationStatus = ConjureProjectStore.getIntegrationStatus(arg0);
  let prop;
  if (integrationStatus != null) {
    prop = integrationStatus.integration_installed;
  }
  return true === prop && true !== integrationStatus.bot_permissions_changed;
}
export const previewAddBotPromptFrameHandlers = obj;
export function answerConjurePreviewAddBotPrompt(projectId, id, added) {
  let closure_0 = id;
  let closure_1 = added;
  const obj = conjureProjectSockets;
  if (obj.sendOnConjureSocket(projectId, "preview bot answer", (sendPreviewBotAnswer) => sendPreviewBotAnswer.sendPreviewBotAnswer(id, added))) {
    const obj3 = { type: "CONJURE_PREVIEW_ADD_BOT_PROMPT_SET", projectId, prompt: null };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
  }
}
