// Module ID: 12162
// Function ID: 12163
// Name: GuildNSFW
// Dependencies: [109, 19, 2067, 21, 504, 5046, 5832, 7859, 7861, 1115, 12163, 2]
// Exports: default

// Module 12162 (GuildNSFW)
import Fragment from "Fragment" /* 21 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import GatedContentDefault from "GatedContent" /* 12163 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = ["modalType", "emphasiseDisagree"];
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default function GuildNSFW(channelId) {
  let id;
  let intl;
  let str;
  let str2;
  _require = channelId;
  let obj = require("get initialized");
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channelId.guildId));
  let obj2 = require("AgeGateUtils");
  const ageGateVerifyContentForGuild = obj2.useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  const emphasiseDisagree = ageGateVerifyContentForGuild.emphasiseDisagree;
  const obj3 = { guildId: id, channelId: channelId.channelId, disagreement: intl.string(require("intl").t["/g10LC"]) };
  const tmp5 = _objectWithoutProperties(ageGateVerifyContentForGuild, closure_3);
  const callback = react.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: channelId(dependencyMap[8]).AgeVerificationModalEntryPoint.NSFW_GUILD };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  }, []);
  const merged = Object.assign(tmp5);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  function handleDisagree() {
    const obj = GuildActionCreatorsDefault;
    obj.nsfwReturnToSafety(channelId.guildId);
    if (channelId.onReturnToSafety != null) {
      channelId.onReturnToSafety();
    }
  }
  intl = tmp(1115).intl;
  if (require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        GatedContentDefault;
        const merged1 = Object.assign(obj3);
        return <tmp17 modalType={modalType} disagreementButtonVariant="primary" onDisagree={handleDisagree} />;
      } else {
        GatedContentDefault;
        const merged2 = Object.assign(obj3);
        return <tmp11 modalType={modalType} onAgree={function handleAgree() {
          const obj = GuildActionCreatorsDefault;
          obj.nsfwAgree(channelId.guildId);
        }} onDisagree={handleDisagree} />;
      }
    }
  }
  const obj6 = { modalType, onAgree: callback, onDisagree: handleDisagree, agreementButtonVariant: str, disagreementButtonVariant: str2 };
  str = "primary";
  const tmp21 = jsx;
  const tmp22 = GatedContentDefault;
  if (true === emphasiseDisagree) {
    str = "secondary";
  }
  str2 = "secondary";
  if (true === emphasiseDisagree) {
    str2 = "primary";
  }
  const merged3 = Object.assign(obj3);
  return tmp21(tmp22, obj6);
};
