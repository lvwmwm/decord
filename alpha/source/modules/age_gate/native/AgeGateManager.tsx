// Module ID: 19326
// Function ID: 19327
// Name: AgeGateManager
// Dependencies: [5, 4858, 4912, 5040, 1098, 1072, 7281, 6728, 6738, 19327, 1995, 19331, 1093, 2]

// Module 19326 (AgeGateManager)
import AgeGateUtils from "AgeGateUtils" /* 6728 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import Constants from "Constants" /* 1072 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;
import size from "module_2" /* 2 */;

let c2, c3, closure_1, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
({ EXISTING_USER_AGE_GATE_MODAL_KEY: metroImportDefault, AgeGateSource: metroImportAll, AgeGateType: c9 } = AgeGateConstants);
({ ChannelTypes: c10, GuildNSFWContentLevel: unpackModuleId } = Constants);
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
    source = source.source;
    const channelId = source.channelId;
    let obj = source(6728);
    importDefault = obj.getAgeGateType(source);
    let obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(_asyncToGenerator(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp4;
              value = undefined;
              if (closure_1 === constants2.AGE_ASSURANCE) {
                c2 = 2;
                c3 = 1;
                const obj4 = { value: value(c2[10])(c2[9], c2.paths), done: false };
                return obj4;
              } else {
                c2 = 1;
                c3 = 1;
                const obj5 = { value: value(c2[10])(c2[11], c2.paths), done: false };
                return obj5;
              }
            }
          } else {
            if (1 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            }
            value = value.default;
            if (closure_129_0 === constants.AUTH) {
              const obj7 = { animation: value(c2[12]).ModalAnimation.SLIDE_IN_OUT };
              value.modalConfig = obj7;
            }
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
        } catch (tmp23) {
          c3 = 3;
          throw tmp23;
        }
      }
    }), { source, channelId }, closure_7);
  }
  handleAgeGateModalClose() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(metroImportDefault);
  }
  handleGuildUpdate(guild) {
    guild = guild.guild;
    const guildId = SelectedGuildStore.getGuildId();
    const tmp2 = null != guildId && guild.id === guildId && guild.owner_configured_content_level === unpackModuleId.AGE_RESTRICTED;
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
