// Module ID: 8584
// Function ID: 8585
// Name: useCreateChannelSubmit
// Dependencies: [5, 32, 19, 1085, 1998, 1097, 8585, 4930, 1126, 2]
// Exports: default

// Module 8584 (useCreateChannelSubmit)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let applicationId, bitrate, body, body2, closure_3, closure_4, closure_5, name, permissionOverwrites, type, userLimit;

let metroImportAll;
let metroImportDefault;
({ ChannelTypes: metroImportDefault, Permissions: metroImportAll } = Constants);
const CreateChannelMode = { PREMIUM_CHANNEL: 0, [0]: "PREMIUM_CHANNEL" };
const result = size.fileFinishedImporting("modules/channel/useCreateChannelSubmit.tsx");

export default function useCreateChannelSubmit(arg0) {
  let closure_2;
  let first;
  let tmp2;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, importDefault] = tmp;
  [first, closure_2] = react.useState({});
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (permissionOverwrites) => {
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c8;
      let obj9;
      let tmp57;
      if (applicationId === 2) {
        applicationId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_10;
          let id;
          let guild_id;
          applicationId = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              applicationId = 3;
              throw value;
            } else if (arg0 === 2) {
              applicationId = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              permissionOverwrites = undefined;
              bitrate = undefined;
              userLimit = undefined;
              c3 = undefined;
              name = undefined;
              type = undefined;
              ({ overwrites: c0, bitrate: c1, userLimit: c2, createMode: c3, guildId: c4, name: c5, channelType: c6, categoryId: c7, applicationId: c8 } = permissionOverwrites);
              body = undefined;
              closure_10 = undefined;
              id = undefined;
              guild_id = undefined;
              c7 = 1;
              applicationId = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              applicationId = 3;
              throw value;
            } else if (arg0 === 2) {
              applicationId = 3;
              return { value, done: true };
            } else {
              if (c3 === constants3.PREMIUM_CHANNEL) {
                const push = permissionOverwrites.push;
                const obj5 = { id: tmp, type: permissionOverwrites(closure_2_3[4]).PermissionOverwriteType.ROLE, deny: constants2.VIEW_CHANNEL, allow: obj9.getFlag(0) };
                obj9 = closure_2_2(closure_2_3[5]);
                push(obj5);
              }
              bitrate(true);
              type = 2;
              const obj6 = { guildId: tmp, type, name, permissionOverwrites, bitrate, userLimit, parentId: tmp57, applicationId };
              tmp57 = null;
              const createChannel = closure_2_1(closure_2_3[6]).createChannel;
              closure_2_1(closure_2_3[6]);
              if (type !== constants.GUILD_CATEGORY) {
                tmp57 = c7;
              }
              c7 = 4;
              applicationId = 1;
              const obj7 = { value: createChannel(obj6), done: false };
              return obj7;
            }
          } else if (2 === c7) {
            type = 0;
            bitrate(false);
            throw closure_5;
          } else {
            if (3 === c7) {
              type = 1;
              body2 = closure_5;
              const AccessibilityAnnouncer = permissionOverwrites(closure_2_3[7]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = permissionOverwrites(closure_2_3[8]).intl;
              announce(intl.string(permissionOverwrites(closure_2_3[8]).t["0SbUzm"]));
              body = body2.body;
              let errors;
              const tmp28 = closure_2;
              if (body != null) {
                errors = body.errors;
              }
              bitrate = errors;
              if (errors == null) {
                bitrate = {};
              }
              tmp28(bitrate);
            } else if (arg0 === 1) {
              applicationId = 3;
              throw value;
            } else if (arg0 === 2) {
              type = 0;
              bitrate(false);
              applicationId = 3;
              return { value, done: true };
            } else {
              body = value;
              if (null != body) {
                body2 = body.body;
                closure_2 = body2;
                if (body2 == null) {
                  closure_2 = {};
                }
                closure_10 = closure_2;
                id = closure_10.id;
                guild_id = closure_10.guild_id;
                if (null != id) {
                  const AccessibilityAnnouncer2 = permissionOverwrites(closure_2_3[7]).AccessibilityAnnouncer;
                  const announce2 = AccessibilityAnnouncer2.announce;
                  const intl2 = permissionOverwrites(closure_2_3[8]).intl;
                  const obj8 = { name };
                  announce2(intl2.formatToPlainString(permissionOverwrites(closure_2_3[8]).t.Wke70b, obj8));
                  if (permissionOverwrites != null) {
                    tmp82(id, guild_id);
                  }
                }
              }
              type = 1;
            }
            type = 0;
            bitrate(false);
            applicationId = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp61) {
          closure_5 = tmp61;
          if (0 === type) {
            applicationId = 3;
            throw tmp61;
          } else if (1 === tmp63) {
            c7 = 2;
          } else {
            c7 = 3;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const items = [arg0];
  const items1 = [
    tmp2,
    first,
    useCallback(function() {
      return closure_0(...arguments);
    }, items)
  ];
  return items1;
};
export { CreateChannelMode };
