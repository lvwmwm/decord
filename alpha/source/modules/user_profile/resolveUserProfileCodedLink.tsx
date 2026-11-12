// Module ID: 20145
// Function ID: 20146
// Name: resolveUserProfileCodedLink
// Dependencies: [5, 5092, 15469, 20146, 20138, 8417, 2]
// Exports: default

// Module 20145 (resolveUserProfileCodedLink)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0;

const MessageCodedLinkManager = "MessageCodedLinkManager";
let result = size.fileFinishedImporting("modules/user_profile/resolveUserProfileCodedLink.tsx");

export default function resolveUserProfileCodedLink(arg0, arg1) {
  let closure_0;
  let isUserProfileEmbedRenderingMobileEnabled;
  let tmp6;
  _require = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let guild_id;
  const tmp2 = dependencyMap;
  if (flag) {
    const tmpResult = require("UserProfileEmbedRenderingMobileExperiment");
    isUserProfileEmbedRenderingMobileEnabled = tmpResult.getIsUserProfileEmbedRenderingMobileEnabled(MessageCodedLinkManager);
    tmp6 = tmp;
  } else {
    const tmp3 = MessageCodedLinkManager;
    const tmpResult2 = require("UserProfileEmbedRenderingExperiment");
    isUserProfileEmbedRenderingMobileEnabled = tmpResult2.getIsUserProfileEmbedRenderingEnabled(MessageCodedLinkManager);
    tmp6 = tmp;
  }
  if (isUserProfileEmbedRenderingMobileEnabled) {
    const tmp8 = arg1;
    let tmp10;
    if (null != arg1) {
      const channel = ChannelStore.getChannel(arg1);
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      tmp10 = guild_id;
    }
    guild_id = tmp10;
    const tmp6Result = tmp6(20138);
    const result = tmp6Result.queueMessageLinkFetch(_asyncToGenerator(async (arg0, value) => {
      let v1;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c2;
        try {
          c0 = 2;
          if (0 === guild_id) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c2 = 1;
              const obj4 = { guildId: guild_id, withMutualGuilds: true, withMutualFriends: true };
              guild_id = 2;
              c0 = 1;
              const obj5 = { value: guild_id(c2[5])(closure_0, undefined, obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp3) {
              c2 = 0;
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c2 = 0;
            }
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          if (0 === c2) {
            c0 = 3;
            throw tmp8;
          } else {
            guild_id = 1;
          }
        }
      }
    }));
  }
};
