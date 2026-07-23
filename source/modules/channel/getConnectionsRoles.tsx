// Module ID: 4941
// Function ID: 42349
// Name: ChannelTypes
// Dependencies: [1910, 1838, 653, 483, 2]
// Exports: default

// Module 4941 (ChannelTypes)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_3 from "_createForOfIteratorHelperLoose";
import ME from "ME";
import importAllResult from "fromHexReverseArray";

let ChannelTypes;
let Permissions;
({ ChannelTypes, Permissions } = ME);
let items = [, , , , , ];
({ GUILD_TEXT: arr[0], GUILD_VOICE: arr[1], GUILD_ANNOUNCEMENT: arr[2], GUILD_FORUM: arr[3], PUBLIC_THREAD: arr[4], PRIVATE_THREAD: arr[5] } = ChannelTypes);
let closure_5 = require("fromHexReverseArray").combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES);
const result = require("ME").fileFinishedImporting("modules/channel/getConnectionsRoles.tsx");

export default function getConnectionsRoles(type) {
  if (null != type) {
    if (items.includes(type.type)) {
      guild = guild.getGuild(type.guild_id);
      if (null == guild) {
        items = [];
      } else {
        const _Object = Object;
        const values = Object.values(type.permissionOverwrites);
        const found = values.filter((type) => {
          let tmp = 0 === type.type;
          if (tmp) {
            const role = outer1_2.getRole(guild.id, type.id);
            let guild_connections;
            if (null != role) {
              const tags = role.tags;
              if (null != tags) {
                guild_connections = tags.guild_connections;
              }
            }
            tmp = null === guild_connections;
          }
          if (tmp) {
            tmp = !guild(outer1_1[3]).hasAny(type.deny, outer1_5);
            const obj = guild(outer1_1[3]);
          }
          return tmp;
        });
        const mapped = found.map((id) => outer1_2.getRole(guild.id, id.id));
        items = mapped.filter((arg0) => null != arg0);
      }
      return items;
    }
  }
  return [];
};
