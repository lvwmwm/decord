// Module ID: 10010
// Function ID: 77359
// Name: GuildNSFW
// Dependencies: [29, 31, 1838, 1197, 33, 566, 4345, 4347, 5048, 7536, 7538, 1212, 10011, 2]
// Exports: default

// Module 10010 (GuildNSFW)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { AgeGateSource } from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["modalType"];
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default function GuildNSFW(channelId) {
  const _require = channelId;
  function handleDisagree() {
    outer1_1(outer1_2[8]).nsfwReturnToSafety(channelId.guildId);
    if (null != channelId.onReturnToSafety) {
      channelId.onReturnToSafety();
    }
  }
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(channelId.guildId));
  let obj1 = _require(4345);
  const ageGateVerifyContentForGuild = obj1.useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  let obj2 = _require(4347);
  const maybePerformReactiveCheckForSource = obj2.useMaybePerformReactiveCheckForSource(AgeGateSource.NSFW_SERVER);
  obj = {};
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[9]);
    obj = { entryPoint: channelId(outer1_2[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const merged = Object.assign(callback(ageGateVerifyContentForGuild, closure_3));
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  obj["guildId"] = id;
  obj["channelId"] = channelId.channelId;
  const intl = _require(1212).intl;
  obj["disagreement"] = intl.string(_require(1212).t["/g10LC"]);
  if (_require(7538).NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (_require(7538).NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (_require(7538).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        obj = { modalType, disagreementButtonVariant: "primary", onDisagree: handleDisagree };
        const merged1 = Object.assign(obj);
        return jsx(importDefault(10011), { modalType, disagreementButtonVariant: "primary", onDisagree: handleDisagree });
      } else {
        obj1 = {
          modalType,
          onAgree: function handleAgree() {
                  outer1_1(outer1_2[8]).nsfwAgree(channelId.guildId);
                },
          onDisagree: handleDisagree
        };
        const merged2 = Object.assign(obj);
        return jsx(importDefault(10011), {
          modalType,
          onAgree: function handleAgree() {
                  outer1_1(outer1_2[8]).nsfwAgree(channelId.guildId);
                },
          onDisagree: handleDisagree
        });
      }
    }
  }
  obj2 = { modalType, onAgree: callback, onDisagree: handleDisagree };
  const tmp3 = callback(ageGateVerifyContentForGuild, closure_3);
  const merged3 = Object.assign(obj);
  return jsx(importDefault(10011), { modalType, onAgree: callback, onDisagree: handleDisagree });
};
