// Module ID: 4848
// Function ID: 4849
// Name: createFavoritesGuildChannelRecord
// Dependencies: [1071, 2]
// Exports: createFavoritesGuildChannelRecord

// Module 4848 (createFavoritesGuildChannelRecord)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/favorites/utils/createFavoritesGuildChannelRecord.tsx");

export function createFavoritesGuildChannelRecord(arg0, order, toJS) {
  const constructor = new toJS.constructor(toJS.toJS());
  constructor.position_ = order.order;
  const tmp2 = null != order.nickname && toJS.type !== ChannelTypes.DM;
  if (tmp2) {
    constructor.name = order.nickname;
  }
  if (null != order.parentId) {
    if (order.parentId in arg0) {
      constructor.parent_id = order.parentId;
    }
    return constructor;
  }
  if (undefined === constructor.parent_id) {
    constructor.parent_id = null;
  }
}
