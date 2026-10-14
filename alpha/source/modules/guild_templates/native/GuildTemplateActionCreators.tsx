// Module ID: 12180
// Function ID: 12181
// Name: guild_templates/GuildTemplateActionCreators
// Dependencies: [7035, 5939, 12181, 2000, 584, 2]

// Module 12180 (guild_templates/GuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import GuildTemplateActionCreatorsDefault from "GuildTemplateActionCreators" /* 7035 */;
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
    obj.pushLazy(asyncRequire(12181, dependencyMap.paths), obj2, GUILD_TEMPLATE_MODAL_KEY);
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
