// Module ID: 12565
// Function ID: 96686
// Name: mapGuildRoomBaseObjectFields
// Dependencies: []
// Exports: serverGuildRoomToClient

// Module 12565 (mapGuildRoomBaseObjectFields)
function mapGuildRoomBaseObjectFields(objectId) {
  const obj = { objectId: objectId.object_id, createdBy: objectId.created_by };
  let date;
  if (null != objectId.updated_at) {
    const _Date = Date;
    date = new Date(objectId.updated_at);
  }
  obj.updatedAt = date;
  obj.updatedBy = objectId.updated_by;
  return obj;
}
function serverGuildRoomObjectToClient(object_type) {
  if (object_type.object_type === require(dependencyMap[0]).GuildRoomObjectTypes.PLANT) {
    let obj = { objectType: require(dependencyMap[0]).GuildRoomObjectTypes.PLANT };
    const merged = Object.assign(mapGuildRoomBaseObjectFields(object_type));
  } else {
    obj = { objectType: require(dependencyMap[0]).GuildRoomObjectTypes.NOTE };
    const merged1 = Object.assign(mapGuildRoomBaseObjectFields(object_type));
    obj["content"] = object_type.content;
    obj["position"] = object_type.position;
  }
  return obj;
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_rooms/GuildRoomUtils.tsx");

export const serverGuildRoomToClient = function serverGuildRoomToClient(body) {
  const obj = { roomId: body.room_id };
  const users = body.users;
  obj.users = users.reduce((set, userId) => {
    const result = set.set(userId.user_id, { userId: userId.user_id, position: userId.position, statusId: userId.status_id, statusText: userId.status_text });
    return set;
  }, new Map());
  obj.background = body.background;
  const entries = Object.entries(body.objects);
  const map = new Map();
  obj.objects = entries.reduce((set) => {
    let arr;
    let tmp;
    [tmp, arr] = arg1;
    const result = set.set(+tmp, arr.map(closure_3));
    return set;
  }, new Map());
  return obj;
};
