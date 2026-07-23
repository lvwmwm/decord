// Module ID: 16518
// Function ID: 128865
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 653, 16519, 16104, 5078, 2]

// Module 16518 (_isNativeReflectConstruct)
import setupLoadFromMessageManagerHandlers from "setupLoadFromMessageManagerHandlers";
import _fetchBasicGuild from "_fetchBasicGuild";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { MessageReferenceTypes } from "ME";
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
function fetchForwardReferencedGuilds(message_reference) {
  message_reference = message_reference.message_reference;
  let type;
  if (null != message_reference) {
    type = message_reference.type;
  }
  if (type === MessageReferenceTypes.FORWARD) {
    const guild_id = message_reference.message_reference.guild_id;
    if (null != guild_id) {
      const basicGuild = require(16519) /* _fetchBasicGuild */.fetchBasicGuild(guild_id);
      const obj = require(16519) /* _fetchBasicGuild */;
    }
  }
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/forwarding/ForwardGuildBreadcrumbManager.tsx");

export default tmp2;
