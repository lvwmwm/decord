// Module ID: 13944
// Function ID: 13945
// Name: guild_templates/GuildTemplateActionCreators
// Dependencies: [8063, 6785, 13945, 2118, 572, 2]

// Module 13944 (guild_templates/GuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import GuildTemplateActionCreatorsDefault from "GuildTemplateActionCreators" /* 8063 */;
import size from "module_2" /* 2 */;

const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {
  showModal(code) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    const obj = ModalActionCreatorsDefault;
    const obj2 = { code };
    obj.pushLazy(asyncRequire(13945, dependencyMap.paths), obj2, GUILD_TEMPLATE_MODAL_KEY);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
    obj3.dispatch(obj4);
    if (flag) {
      const tmpResult = GuildTemplateActionCreatorsDefault;
      const guildTemplate = tmpResult.resolveGuildTemplate(code);
    }
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
  }
};
const GuildTemplateActionCreators = Object.assign(GuildTemplateActionCreatorsDefault);
const result = size.fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
