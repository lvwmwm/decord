// Module ID: 13177
// Function ID: 13178
// Name: handleForwardBreadcrumb
// Dependencies: [5, 4857, 4879, 1084, 7507, 6889, 6893, 1264, 7407, 2]
// Exports: default

// Module 13177 (handleForwardBreadcrumb)
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7507 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildStore from "GuildStore" /* 4879 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let c6, closure_3, did_lurk;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _handleForwardBreadcrumb() {
  let channel;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let obj7;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c4;
      try {
        let guild_id;
        let channel_id;
        let message_id;
        let closure_6;
        let welcomeModalChannelId;
        let channel2;
        c6 = 2;
        if (0 === did_lurk) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            guild_id = undefined;
            channel_id = undefined;
            message_id = undefined;
            channel2 = undefined;
            did_lurk = undefined;
            closure_6 = undefined;
            welcomeModalChannelId = undefined;
            if (null != closure_0.messageReference) {
              guild_id = tmp63.messageReference.guild_id;
              channel_id = tmp63.messageReference.channel_id;
              message_id = tmp63.messageReference.message_id;
              channel2 = channel.getChannel(channel_id);
              did_lurk = false;
              closure_6 = false;
              if (null == channel2) {
                if (null != guild_id) {
                  if (null == guild.getGuild(guild_id)) {
                    c4 = 1;
                    const obj5 = { object: constants.FORWARD_BREADCRUMB };
                    did_lurk = 2;
                    c6 = 1;
                    const obj6 = { value: obj7.startLurking(guild_id, obj5, { shouldNavigate: false }), done: false };
                    obj7 = GuildDiscoveryUtils;
                    return obj6;
                  }
                }
              }
            }
            c6 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else if (1 === did_lurk) {
          c4 = 0;
          closure_6 = closure_3 instanceof closure_130_0(closure_130_2[6]).JoinGuildRefusedError;
        } else if (2 === did_lurk) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            did_lurk = 3;
            c6 = 1;
            const obj9 = { value: obj2.waitForGuild(guild_id), done: false };
            obj2 = closure_130_0(closure_130_2[5]);
            return obj9;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          channel2 = closure_130_4.getChannel(channel_id);
          c4 = 0;
        }
        const track = closure_130_1(closure_130_2[7]).track;
        const FORWARD_BREADCRUMB_CLICKED = closure_130_6.FORWARD_BREADCRUMB_CLICKED;
        const tmp25 = closure_130_1(closure_130_2[7]);
        const basicChannel = closure_130_4.getBasicChannel(closure_0.channel_id);
        let guild_id1;
        if (basicChannel != null) {
          guild_id1 = basicChannel.guild_id;
        }
        const obj10 = { guild_id: guild_id1, channel_id: closure_0.channel_id, message_id: closure_0.id, breadcrumb_guild_id: guild_id, breadcrumb_channel_id: channel_id, breadcrumb_message_id: message_id, did_lurk };
        track(FORWARD_BREADCRUMB_CLICKED, obj10);
        const tmp39 = closure_6;
        if (!tmp39) {
          let tmp42;
          if (did_lurk) {
            tmp42 = channel_id;
          }
          welcomeModalChannelId = tmp42;
          const obj11 = { navigationReplace: false, welcomeModalChannelId };
          const tmp46 = closure_130_1(closure_130_2[8]);
          tmp46(closure_130_8.CHANNEL(guild_id, channel_id, message_id), obj11);
        }
      } catch (tmp56) {
        closure_3 = tmp56;
        if (0 === c4) {
          c6 = 3;
          throw tmp56;
        } else {
          did_lurk = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroRequire, AnalyticsObjects: metroImportDefault, Routes: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/forwarding/handleForwardBreadcrumb.tsx");

export default function handleForwardBreadcrumb() {
  return obj(...arguments);
};
