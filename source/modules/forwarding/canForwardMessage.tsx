// Module ID: 9570
// Function ID: 74481
// Name: canForwardMessage
// Dependencies: [1908, 1348, 1838, 3758, 653, 1360, 566, 2]
// Exports: useCanForwardMessage

// Module 9570 (canForwardMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let MessageFlags;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function canForwardMessage(state) {
  let obj = arg1;
  let obj2 = arg2;
  let obj3 = arg3;
  let obj4 = arg4;
  if (arg1 === undefined) {
    obj = closure_5;
  }
  if (obj2 === undefined) {
    obj2 = _isNativeReflectConstruct;
  }
  if (obj3 === undefined) {
    obj3 = closure_3;
  }
  if (obj4 === undefined) {
    obj4 = _createForOfIteratorHelperLoose;
  }
  if (null == state) {
    return false;
  } else {
    let hasItem = state.state !== constants2.SEND_FAILED;
    if (hasItem) {
      const FORWARDABLE = constants3.FORWARDABLE;
      hasItem = FORWARDABLE.has(state.type);
    }
    if (hasItem) {
      hasItem = null == state.poll;
    }
    if (hasItem) {
      hasItem = null == state.sharedClientTheme;
    }
    if (hasItem) {
      hasItem = null == state.activity;
    }
    if (hasItem) {
      hasItem = null == state.call;
    }
    if (hasItem) {
      hasItem = null == state.activityInstance;
    }
    if (hasItem) {
      hasItem = 0 === require(1360) /* hasFlag */.removeFlag(state.flags, closure_10);
      const obj5 = require(1360) /* hasFlag */;
    }
    if (hasItem) {
      const channel = obj3.getChannel(state.channel_id);
      if (null != channel) {
        if (!obj.can(constants4.READ_MESSAGE_HISTORY, channel)) {
          if (!channel.isPrivate()) {
            return false;
          }
        }
      }
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      let tmp8 = null == guild_id;
      if (!tmp8) {
        const guild = obj4.getGuild(guild_id);
        hasItem = undefined;
        if (null != guild) {
          const features = guild.features;
          hasItem = features.has(constants.FORWARDING_DISABLED);
        }
        tmp8 = !hasItem;
      }
      if (tmp8) {
        let tmp12 = null == guild_id || !obj2.isChannelOrThreadParentGated(guild_id, state.channel_id);
        if (tmp12) {
          let result;
          if (null != channel) {
            result = channel.isModeratorReportChannel();
          }
          tmp12 = !(null != result && result);
          const tmp14 = null != result && result;
        }
        tmp8 = tmp12;
      }
      return tmp8;
    } else {
      return false;
    }
  }
}
({ GuildFeatures: closure_6, MessageFlags, MessageStates: closure_7, MessageTypesSets: closure_8, Permissions: closure_9 } = ME);
let closure_10 = MessageFlags.CROSSPOSTED | MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | MessageFlags.GUILD_FEED_HIDDEN | MessageFlags.HAS_SNAPSHOT | MessageFlags.HAS_THREAD | MessageFlags.IS_CROSSPOST | MessageFlags.IS_VOICE_MESSAGE | MessageFlags.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | MessageFlags.SUPPRESS_EMBEDS | MessageFlags.SUPPRESS_NOTIFICATIONS | MessageFlags.URGENT | MessageFlags.IS_COMPONENTS_V2 | MessageFlags.IS_GUILD_OFFICIAL;
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/forwarding/canForwardMessage.tsx");

export { canForwardMessage };
export const useCanForwardMessage = function useCanForwardMessage(message) {
  const _require = message;
  const items = [closure_5, _isNativeReflectConstruct, closure_3, _createForOfIteratorHelperLoose];
  return _require(566).useStateFromStores(items, () => outer1_11(closure_0, outer1_5, outer1_2, outer1_3, outer1_4));
};
