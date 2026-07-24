// Module ID: 12185
// Function ID: 95432
// Name: rows
// Dependencies: [57, 31, 1917, 1838, 10097, 6978, 653, 482, 566, 675, 10096, 2]
// Exports: default

// Module 12185 (rows)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { InviteTargetTypes } from "InviteSendStates";
import { AnalyticEvents } from "ME";
import { NOOP_NULL } from "sum";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/instant_invite/native/useInviteSuggestionRows.tsx");

export default function _default(arg0, arg1, arg2, arg3) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const callback = arg3;
  let items = [closure_7];
  const rows = _require(566).useStateFromStores(items, () => outer1_7.getInviteSuggestionRows());
  const tmp2 = callback(rows.useState(true), 2);
  const isFetchingRows = tmp2[0];
  let _createForOfIteratorHelperLoose = tmp2[1];
  const items1 = [rows, arg0, isFetchingRows, arg3, arg1];
  const effect = rows.useEffect(() => {
    if (!isFetchingRows) {
      const initialCounts = outer1_7.getInitialCounts();
      let obj = callback(675);
      obj = { location: callback, num_suggestions: rows.length, guild_id: lib.guild_id };
      ({ numFriends: obj2.num_friends, numDms: obj2.num_dms, numGroupDms: obj2.num_group_dms } = initialCounts);
      obj.application_id = _slicedToArray;
      obj.track(outer1_9.INVITE_SUGGESTION_OPENED, obj);
    }
  }, items1);
  const items2 = [arg0, arg2];
  const effect1 = rows.useEffect(() => {
    guild(true);
    if (dependencyMap === outer1_8.EMBEDDED_APPLICATION) {
      let items = [];
    } else {
      items = isFetchingRows.getMemberIds(lib.guild_id);
    }
    let obj = lib(10096);
    obj = { omitUserIds: new Set(items), guild: guild.getGuild(lib.guild_id), channel: lib, inviteTargetType: dependencyMap };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
    const set = new Set(items);
    inviteSuggestions.catch(outer1_10).finally(() => {
      outer1_6(false);
    });
  }, items2);
  return { rows, isFetchingRows };
};
