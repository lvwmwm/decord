// Module ID: 808
// Function ID: 809
// Name: conversationIdIntegration
// Dependencies: [724, 715, 763]

// Module 808 (conversationIdIntegration)
import module_763 from "module_763" /* 763 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const conversationIdIntegration = module_763.defineIntegration(() => {
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
