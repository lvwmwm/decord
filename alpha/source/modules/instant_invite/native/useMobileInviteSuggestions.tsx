// Module ID: 8696
// Function ID: 8697
// Name: useMobileInviteSuggestions
// Dependencies: [32, 19, 2125, 2087, 8697, 5116, 7423, 1085, 1096, 504, 1265, 8714, 8715, 2]
// Exports: default

// Module 8696 (useMobileInviteSuggestions)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import Constants3 from "Constants" /* 7423 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 8697 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5116 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let _slicedToArray = _slicedToArray_mod;
const InviteTargetTypes = Constants3.InviteTargetTypes;
const AnalyticEvents = Constants.AnalyticEvents;
const NOOP_NULL = Constants2.NOOP_NULL;
const result = size.fileFinishedImporting("modules/instant_invite/native/useMobileInviteSuggestions.tsx");

export default function useMobileInviteSuggestions(arg0, _location, arg2, application_id) {
  let closure_0;
  let closure_2;
  let closure_5;
  let closure_7;
  let isFetchingRows;
  let rows;
  _require = arg0;
  dependencyMap = arg2;
  _slicedToArray = application_id;
  let obj = require("get initialized");
  let items = [closure_7, SortedVoiceStateStore];
  [rows, closure_5] = obj.useStateFromStoresArray(items, () => {
    const items = [InviteSuggestionsStore.getInviteSuggestionRows(), ];
    let voiceStatesForChannel = null;
    if (null != closure_0) {
      voiceStatesForChannel = SortedVoiceStateStore.getVoiceStatesForChannel(tmp);
    }
    items[1] = voiceStatesForChannel;
    return items;
  });
  [isFetchingRows, closure_7] = rows.useState(true);
  const items1 = [rows, arg0, isFetchingRows, application_id, _location];
  const effect = rows.useEffect(() => {
    const tmp = isFetchingRows;
    if (!tmp) {
      const initialCounts = InviteSuggestionsStore.getInitialCounts();
      const obj3 = { location: _location, num_suggestions: rows.length, guild_id: closure_0.guild_id, num_friends: null, num_dms: null, num_group_dms: null, application_id };
      ({ numFriends: obj2.num_friends, numDms: obj2.num_dms, numGroupDms: obj2.num_group_dms } = initialCounts);
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.INVITE_SUGGESTION_OPENED, obj3);
    }
  }, items1);
  const items2 = [arg0, arg2];
  const effect1 = rows.useEffect(function() {
    closure_7(true);
    let isGuildVoiceResult = !tmp3;
    const tmp2 = closure_2;
    if (closure_2 !== constants.EMBEDDED_APPLICATION) {
      isGuildVoiceResult = set.isGuildVoice();
    }
    if (isGuildVoiceResult) {
      const obj2 = { location: "useMobileInviteSuggestions", guildId: set.guild_id };
      const obj = closure_0(closure_2[11]);
      isGuildVoiceResult = obj.getGuildMembersInMobileVCInvitesExperiment(obj2);
    }
    if (closure_2 !== constants.EMBEDDED_APPLICATION) {
      let memberIds;
      if (!isGuildVoiceResult) {
        memberIds = closure_5.getMemberIds(set.guild_id);
      }
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(memberIds);
      if (isGuildVoiceResult) {
        isGuildVoiceResult = null != closure_5;
      }
      if (isGuildVoiceResult) {
        const item = closure_5.forEach((user) => {
          set.add(user.user.id);
        });
      }
      const obj3 = { omitUserIds: set, guild: isFetchingRows.getGuild(set.guild_id), channel: set, inviteTargetType: tmp2 };
      const loadInviteSuggestions = closure_0(closure_2[12]).loadInviteSuggestions;
      closure_0(closure_2[12]);
      const inviteSuggestions = loadInviteSuggestions(obj3);
      const catchPromise = inviteSuggestions.catch(NOOP_NULL);
      catchPromise.finally(() => {
        closure_1_7(false);
      });
    }
    memberIds = [];
  }, items2);
  return { rows, isFetchingRows };
};
