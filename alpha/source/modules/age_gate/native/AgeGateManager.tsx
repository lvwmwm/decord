// Module ID: 19265
// Function ID: 19266
// Name: AgeGateManager
// Dependencies: [5, 4857, 4908, 5036, 1109, 1084, 7274, 6721, 6731, 19266, 2000, 1104, 2]

// Module 19265 (AgeGateManager)
import AgeGateUtils from "AgeGateUtils" /* 6721 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4908 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5036 */;
import AgeGateConstants from "AgeGateConstants" /* 1109 */;
import Constants from "Constants" /* 1084 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7274 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
({ EXISTING_USER_AGE_GATE_MODAL_KEY: metroImportDefault, AgeGateSource: metroImportAll } = AgeGateConstants);
({ ChannelTypes: c9, GuildNSFWContentLevel: c10 } = Constants);
class AgeGateManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, CHANNEL_SELECT: applyArgumentsResult.handleChannelSelect, AGE_GATE_MODAL_OPEN: applyArgumentsResult.handleAgeGateModalOpen, AGE_GATE_MODAL_CLOSE: applyArgumentsResult.handleAgeGateModalClose, GUILD_UPDATE: applyArgumentsResult.handleGuildUpdate };
    return applyArgumentsResult;
  }
  handlePostConnectionOpen() {
    const guildId = SelectedGuildStore.getGuildId();
    const channelId = SelectedChannelStore.getChannelId();
    const obj = AgeGateUtils;
    obj.maybeShowAgeGate(guildId, channelId);
  }
  handleChannelSelect(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    const channel = ChannelStore.getChannel(channelId);
    let tmp2 = null != guildId;
    if (tmp2) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      tmp2 = type !== constants.GUILD_VOICE;
    }
    if (tmp2) {
      const obj = AgeGateUtils;
      obj.maybeShowAgeGate(guildId, channelId);
    }
  }
  handleAgeGateModalOpen(source) {
    let paths;
    source = source.source;
    const channelId = source.channelId;
    let obj = ModalActionCreatorsDefault;
    obj.pushLazy(_asyncToGenerator(async () => {
      let c3;
      let closure_1;
      let value = tmp;
      await value(c2[10])(c2[9], c2.paths);
      value = arg1.default;
      if (closure_129_0 === constants.AUTH) {
        const obj = { animation: value(paths[11]).ModalAnimation.SLIDE_IN_OUT };
        value.modalConfig = obj;
      }
      return value;
    }), { source, channelId }, closure_7);
  }
  handleAgeGateModalClose() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(metroImportDefault);
  }
  handleGuildUpdate(guild) {
    guild = guild.guild;
    const guildId = SelectedGuildStore.getGuildId();
    const tmp2 = null != guildId && guild.id === guildId && guild.owner_configured_content_level === constants2.AGE_RESTRICTED;
    if (tmp2) {
      const obj = AgeGateUtils;
      obj.maybeShowAgeGate(guild.id, null);
    }
  }
}
const prototype = AgeGateManager.prototype;
const ageGateManager = new AgeGateManager();
const result = size.fileFinishedImporting("modules/age_gate/native/AgeGateManager.tsx");

export default ageGateManager;
