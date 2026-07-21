// Module ID: 9526
// Function ID: 74207
// Name: canForwardMessage
// Dependencies: []
// Exports: useCanForwardMessage

// Module 9526 (canForwardMessage)
let MessageFlags;
function canForwardMessage(state) {
  let obj = arg1;
  let obj2 = arg2;
  let obj3 = arg3;
  let obj4 = arg4;
  if (arg1 === undefined) {
    obj = closure_5;
  }
  if (obj2 === undefined) {
    obj2 = closure_2;
  }
  if (obj3 === undefined) {
    obj3 = closure_3;
  }
  if (obj4 === undefined) {
    obj4 = closure_4;
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
      hasItem = 0 === arg1(dependencyMap[5]).removeFlag(state.flags, closure_10);
      const obj5 = arg1(dependencyMap[5]);
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ GuildFeatures: closure_6, MessageFlags, MessageStates: closure_7, MessageTypesSets: closure_8, Permissions: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = MessageFlags.CROSSPOSTED | MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | MessageFlags.GUILD_FEED_HIDDEN | MessageFlags.HAS_SNAPSHOT | MessageFlags.HAS_THREAD | MessageFlags.IS_CROSSPOST | MessageFlags.IS_VOICE_MESSAGE | MessageFlags.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | MessageFlags.SUPPRESS_EMBEDS | MessageFlags.SUPPRESS_NOTIFICATIONS | MessageFlags.URGENT | MessageFlags.IS_COMPONENTS_V2 | MessageFlags.IS_GUILD_OFFICIAL;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/forwarding/canForwardMessage.tsx");

export { canForwardMessage };
export const useCanForwardMessage = function useCanForwardMessage(message) {
  const arg1 = message;
  const items = [closure_5, closure_2, closure_3, closure_4];
  return arg1(dependencyMap[6]).useStateFromStores(items, () => callback(arg0, closure_5, closure_2, closure_3, closure_4));
};
