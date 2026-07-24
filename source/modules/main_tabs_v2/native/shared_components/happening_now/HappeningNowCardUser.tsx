// Module ID: 15000
// Function ID: 114302
// Dependencies: [31, 27, 4217, 1849, 14233, 653, 33, 1273, 4130, 5462, 566, 675, 8537, 1934, 3969, 8494, 14234, 7969, 2]

// Module 15000
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { HappeningNowCardTrackingType as closure_7 } from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const LARGE = require("Button").AvatarSizes.LARGE;
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ content: { flex: 1, display: "flex", alignItems: "center" } });
const memoResult = importAllResult.memo((index) => {
  let activities;
  let isMobileOnline;
  let isVROnline;
  index = index.index;
  const userId = index.userId;
  const guildId = index.guildId;
  let flag = index.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let analyticsLocations;
  let stateFromStores;
  let status;
  analyticsLocations = userId(guildId[9])().analyticsLocations;
  let obj = index(guildId[10]);
  let items = [closure_6];
  const items1 = [userId];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getUser(userId), items1);
  const items2 = [index, guildId, userId, stateFromStores, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    let obj = userId(guildId[11]);
    obj = { order: index, guild_id: guildId, type: outer1_7.INDIVIDUAL_USER_CARD, highlighted_user_ids: items };
    items = [userId];
    obj.track(outer1_8.ACTIVITY_CARD_CLICKED, obj);
    if (null != stateFromStores) {
      index(guildId[13])(guildId[12], guildId.paths).then((arg0) => arg0.default({ userId: outer1_4.id, localUser: outer1_4, sourceAnalyticsLocations: outer1_3 }));
      const promise = index(guildId[13])(guildId[12], guildId.paths);
    }
  }, items2);
  let obj1 = index(guildId[10]);
  const items3 = [status];
  const items4 = [guildId, stateFromStores];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items3, () => {
    if (null == stateFromStores) {
      let obj = {};
    } else {
      obj = { status: status.getStatus(stateFromStores.id, guildId), activities: status.getActivities(stateFromStores.id, guildId), isMobileOnline: status.isMobileOnline(stateFromStores.id), isVROnline: status.isVROnline(stateFromStores.id) };
    }
    return obj;
  }, items4);
  status = stateFromStoresObject.status;
  const items5 = [status, stateFromStores];
  ({ activities, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (null == stateFromStores) {
    return null;
  } else {
    const items6 = [userId(guildId[14]).getName(stateFromStores), ];
    const obj5 = userId(guildId[14]);
    items6[1] = index(guildId[15]).getStatusLabel(status);
    const joined = items6.join(", ");
    obj = { onPress: callback };
    let str = "small";
    const obj6 = index(guildId[15]);
    const tmp16 = jsx;
    if (index.fullwidth) {
      str = "full";
    }
    obj.width = str;
    obj.panelVariant = flag;
    obj.accessibilityLabel = joined;
    obj = { style: tmp.content };
    obj1 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId, size: LARGE, isMobileOnline, isVROnline, streaming: userId(guildId[17])(activities), status: tmp5, autoStatusCutout: true };
    obj.children = jsx(index(guildId[7]).Avatar, { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId, size: LARGE, isMobileOnline, isVROnline, streaming: userId(guildId[17])(activities), status: tmp5, autoStatusCutout: true });
    obj.children = <stateFromStores style={tmp.content} />;
    return tmp16(userId(guildId[16]), obj);
  }
  tmp = callback();
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx");

export default memoResult;
