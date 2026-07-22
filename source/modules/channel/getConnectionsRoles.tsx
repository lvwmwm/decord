// Module ID: 4938
// Function ID: 42331
// Name: ChannelTypes
// Dependencies: []
// Exports: default

// Module 4938 (ChannelTypes)
let ChannelTypes;
let Permissions;
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ ChannelTypes, Permissions } = arg1(dependencyMap[2]));
const items = [, , , , , ];
({ GUILD_TEXT: arr[0], GUILD_VOICE: arr[1], GUILD_ANNOUNCEMENT: arr[2], GUILD_FORUM: arr[3], PUBLIC_THREAD: arr[4], PRIVATE_THREAD: arr[5] } = ChannelTypes);
const tmp2 = arg1(dependencyMap[2]);
let closure_5 = importAll(dependencyMap[3]).combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES);
const importAllResult = importAll(dependencyMap[3]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/channel/getConnectionsRoles.tsx");

export default function getConnectionsRoles(type) {
  if (null != type) {
    if (items.includes(type.type)) {
      const guild = guild.getGuild(type.guild_id);
      const importAll = guild;
      if (null == guild) {
        let items = [];
      } else {
        const _Object = Object;
        const values = Object.values(type.permissionOverwrites);
        const found = values.filter((type) => {
          let tmp = 0 === type.type;
          if (tmp) {
            const role = store.getRole(guild.id, type.id);
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
            tmp = !guild(closure_1[3]).hasAny(type.deny, closure_5);
            const obj = guild(closure_1[3]);
          }
          return tmp;
        });
        const mapped = found.map((id) => store.getRole(guild.id, id.id));
        items = mapped.filter((arg0) => null != arg0);
      }
      return items;
    }
  }
  return [];
};
