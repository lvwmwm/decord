// Module ID: 11494
// Function ID: 11495
// Name: resolveAppChannel
// Dependencies: [5, 4857, 4937, 1084, 10832, 2]
// Exports: default

// Module 11494 (resolveAppChannel)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let c5, c6;

let hasOwnProperty;
let metroRequire;
let obj = function _resolveAppChannel() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c1;
    let fallback;
    let obj4;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        let closure_4;
        let channel;
        let closure_5;
        let found;
        let closure_7;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp4;
            let closure_3 = tmp;
            c1 = undefined;
            fallback = undefined;
            let obj5 = closure_1;
            if (closure_1 === undefined) {
              obj5 = {};
            }
            ({ preferredChannelId: c1, fallback } = obj5);
            if (fallback === undefined) {
              fallback = true;
            }
            channel = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            found = undefined;
            closure_7 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: null };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            channel = null;
            if (null != c1) {
              channel = closure_132_3.getChannel(c1);
            }
            if (null != channel) {
              if (channel.type === closure_132_5.GUILD_APP) {
                if (channel.application_id === closure_0) {
                  if (closure_132_4.can(closure_132_6.VIEW_CHANNEL, channel)) {
                    const obj7 = { guildId: channel.guild_id, channelId: channel.id };
                    c6 = 3;
                    const obj8 = { value: obj7, done: true };
                    return obj8;
                  }
                }
              }
            }
            const tmp42 = null != c1 && null == channel;
            closure_4 = tmp42;
            const tmp46 = closure_4;
            if (!tmp46) {
              const tmp47 = fallback;
              if (!tmp47) {
                c6 = 3;
                return { value: null, done: true };
              }
            }
            c5 = 2;
            c6 = 1;
            const obj9 = { value: obj4.fetchApplicationChannels(closure_0), done: false };
            obj4 = closure_132_0(closure_132_1[4]);
            return obj9;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_5 = value;
          found = undefined;
          if (closure_4) {
            found = closure_5.find((channel_id) => channel_id.channel_id === closure_1_1);
          }
          let first = found;
          if (found == null) {
            first = undefined;
            if (fallback) {
              first = closure_5[0];
            }
          }
          closure_7 = first;
          let tmp17 = null;
          if (null != closure_7) {
            obj = { guildId: closure_7.guild_id, channelId: closure_7.channel_id };
            tmp17 = obj;
          }
          c6 = 3;
          const obj11 = { value: tmp17, done: true };
          return obj11;
        }
      } catch (tmp56) {
        c6 = 3;
        throw tmp56;
      }
    }
  });
  return obj(...arguments);
};
({ ChannelTypes: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/frames/resolveAppChannel.tsx");

export default function resolveAppChannel() {
  return obj(...arguments);
};
