// Module ID: 16015
// Function ID: 123929
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 16016, 5078, 507, 2]
// Exports: acknowledgeDmSettingsUpsell

// Module 16015 (_isNativeReflectConstruct)
import module_16016 from "module_16016";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { Endpoints } from "ME";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellManager.tsx");

export default tmp2;
export const acknowledgeDmSettingsUpsell = function acknowledgeDmSettingsUpsell(guildId) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  return HTTP.post({ url: Endpoints.DM_SETTINGS_UPSELL_ACK(guildId), rejectWithError: false });
};
