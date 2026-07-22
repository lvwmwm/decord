// Module ID: 12044
// Function ID: 93041
// Name: rows
// Dependencies: []
// Exports: default

// Module 12044 (rows)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const InviteTargetTypes = arg1(dependencyMap[5]).InviteTargetTypes;
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
const NOOP_NULL = arg1(dependencyMap[7]).NOOP_NULL;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/instant_invite/native/useInviteSuggestionRows.tsx");

export default function _default(arg0, arg1, arg2, arg3) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const callback = arg3;
  const items = [closure_7];
  const rows = arg1(dependencyMap[8]).useStateFromStores(items, () => store.getInviteSuggestionRows());
  const React = rows;
  const tmp2 = callback(React.useState(true), 2);
  const isFetchingRows = tmp2[0];
  let closure_5 = isFetchingRows;
  let closure_6 = tmp2[1];
  const items1 = [rows, arg0, isFetchingRows, arg3, arg1];
  const effect = React.useEffect(() => {
    if (!isFetchingRows) {
      const initialCounts = store.getInitialCounts();
      let obj = arg1(arg2[9]);
      obj = { location: arg1, num_suggestions: rows.length, guild_id: arg0.guild_id };
      ({ numFriends: obj2.num_friends, numDms: obj2.num_dms, numGroupDms: obj2.num_group_dms } = initialCounts);
      obj.application_id = arg3;
      obj.track(constants2.INVITE_SUGGESTION_OPENED, obj);
    }
  }, items1);
  const items2 = [arg0, arg2];
  const effect1 = React.useEffect(() => {
    guild(true);
    if (arg2 === constants.EMBEDDED_APPLICATION) {
      let items = [];
    } else {
      items = isFetchingRows.getMemberIds(arg0.guild_id);
    }
    let obj = arg0(arg2[10]);
    obj = { omitUserIds: new Set(items), guild: guild.getGuild(arg0.guild_id), channel: arg0, inviteTargetType: arg2 };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
    const set = new Set(items);
    inviteSuggestions.catch(closure_10).finally(() => {
      callback(false);
    });
  }, items2);
  return { rows, isFetchingRows };
};
