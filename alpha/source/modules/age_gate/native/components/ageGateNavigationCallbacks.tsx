// Module ID: 19329
// Function ID: 19330
// Name: ageGateNavigationCallbacks
// Dependencies: [5040, 1098, 1072, 6733, 6896, 6738, 1253, 2]
// Exports: generateOnBack, onGateClose, renderHeaderTitle

// Module 19329 (ageGateNavigationCallbacks)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6733 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6896 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AgeGateAnalyticAction: closure_4, AgeGateSource: hasOwnProperty } = AgeGateConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/age_gate/native/components/ageGateNavigationCallbacks.tsx");

export function generateOnBack(source) {
  if (constants2.NSFW_SERVER_INVITE !== source) {
    if (constants2.NSFW_SERVER_INVITE_EMBED !== source) {
      if (constants2.JOIN_LARGE_GUILD_UNDERAGE !== source) {
        if (constants2.ACCESS_LARGE_GUILD_UNDERAGE !== source) {
          if (constants2.LARGE_GUILD !== source) {
            if (constants2.NSFW_SERVER !== source) {
              if (constants2.NSFW_CHANNEL === source) {
                return () => {
                  const guildId = SelectedGuildStore.getGuildId();
                  if (null != guildId) {
                    const obj = GuildActionCreatorsDefault;
                    obj.nsfwReturnToSafety(guildId);
                  }
                  const obj2 = AgeGateModalActionCreators;
                  obj2.closeAgeGateModal(source);
                };
              } else if (constants2.NSFW_VOICE_CHANNEL === source) {
                return () => {
                  const obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  const obj2 = AnalyticsUtilsDefault;
                  const obj3 = { source, action: constants.AGE_GATE_CLOSE };
                  obj2.track(AnalyticEvents.AGE_GATE_ACTION, obj3);
                };
              } else {
                return constants2.FAMILY_CENTER === source ? (() => {
                  const obj = AgeGateModalActionCreators;
                  obj.closeAgeGateModal(source);
                }) : undefined;
              }
            }
          }
        }
      }
      return () => {
        const guildId = SelectedGuildStore.getGuildId();
        if (null != guildId) {
          const obj = GuildActionCreatorsDefault;
          obj.nsfwReturnToSafety(guildId);
        }
        const obj2 = AgeGateModalActionCreators;
        obj2.closeAgeGateModal(source);
        const obj3 = ModalActionCreatorsDefault;
        obj3.popAll();
      };
    }
  }
  return () => {
    const obj = AgeGateModalActionCreators;
    obj.closeAgeGateModal(source);
  };
}
export function onGateClose() {
  const obj = AgeGateModalActionCreators;
  obj.closeAgeGateModal();
}
export function renderHeaderTitle() {
  return null;
}
