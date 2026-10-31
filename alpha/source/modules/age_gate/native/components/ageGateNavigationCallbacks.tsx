// Module ID: 19386
// Function ID: 19387
// Name: ageGateNavigationCallbacks
// Dependencies: [5045, 1097, 1072, 6739, 6902, 6744, 1252, 2]
// Exports: generateOnBack, onGateClose, renderHeaderTitle

// Module 19386 (ageGateNavigationCallbacks)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6739 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6902 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import AgeGateConstants from "AgeGateConstants" /* 1097 */;
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
