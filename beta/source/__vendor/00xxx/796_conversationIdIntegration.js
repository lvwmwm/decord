// Module ID: 796
// Function ID: 797
// Name: conversationIdIntegration
// Dependencies: [712, 703, 751]

// Module 796 (conversationIdIntegration)
import module_751 from "module_751" /* 751 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const conversationIdIntegration = module_751.defineIntegration(() => {
  let obj = {
    name: "ConversationId",
    setup(on) {
      on.on("spanStart", (setAttribute) => {
        const obj = closure_1_0(closure_1_1[0]);
        const currentScope = obj.getCurrentScope();
        const scopeData = currentScope.getScopeData();
        const obj3 = closure_1_0(closure_1_1[0]);
        const isolationScope = obj3.getIsolationScope();
        const tmp4 = scopeData.conversationId || isolationScope.getScopeData().conversationId;
        const tmp = closure_1_0;
        const tmp2 = closure_1_1;
        if (tmp4) {
          const attr = setAttribute.setAttribute(tmp(tmp2[1]).GEN_AI_CONVERSATION_ID_ATTRIBUTE, tmp4);
        }
      });
    }
  };
  return obj;
});
