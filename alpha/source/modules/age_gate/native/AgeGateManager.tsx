// Module ID: 17981
// Function ID: 17982
// Name: AgeGateManager
// Dependencies: [5, 2065, 2116, 4939, 1110, 1085, 6807, 5924, 5934, 17982, 2000, 1105, 2]

// Module 17981 (AgeGateManager)
import AgeGateUtils from "AgeGateUtils" /* 5924 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
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
