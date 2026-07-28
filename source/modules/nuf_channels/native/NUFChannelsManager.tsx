// Module ID: 12802
// Function ID: 99560
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1918, 1838, 3982, 1850, 653, 3781, 587, 4004, 4016, 1360, 4133, 12803, 1935, 4017, 5112, 2]

// Module 12802 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import showActionSheet from "showActionSheet";
import maybeLoadBundle from "maybeLoadBundle";
import getRootNavigationRef from "getRootNavigationRef";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
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
function requiresChannelOnboard() {
  const Storage = require(587) /* Storage */.Storage;
  let isNewUserResult = !Storage.get(c14);
  if (isNewUserResult) {
    isNewUserResult = require(4004) /* conceal */.isNewUser(currentUser.getCurrentUser());
    const obj = require(4004) /* conceal */;
  }
  return isNewUserResult;
}
let c14 = "2020_02_nuf_channels";
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/nuf_channels/native/NUFChannelsManager.tsx");

export default tmp2;
