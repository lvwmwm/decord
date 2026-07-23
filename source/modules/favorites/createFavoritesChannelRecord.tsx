// Module ID: 3757
// Function ID: 28684
// Name: createFavoritesChannelRecord
// Dependencies: [653, 2]
// Exports: createFavoritesChannelRecord

// Module 3757 (createFavoritesChannelRecord)
import { ChannelTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/favorites/createFavoritesChannelRecord.tsx");

export const createFavoritesChannelRecord = function createFavoritesChannelRecord(arg0, order, toJS) {
  const constructor = new toJS.constructor(toJS.toJS());
  constructor.position_ = order.order;
  let tmp2 = null != order.nickname;
  if (tmp2) {
    tmp2 = toJS.type !== ChannelTypes.DM;
  }
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
};
