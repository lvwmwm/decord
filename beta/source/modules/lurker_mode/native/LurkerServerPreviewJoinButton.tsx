// Module ID: 15787
// Function ID: 15788
// Name: LurkerServerPreviewJoinButton
// Dependencies: [5, 32, 19, 2045, 4470, 1074, 21, 9285, 1186, 5832, 5281, 1115, 2]

// Module 15787 (LurkerServerPreviewJoinButton)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import size from "module_2" /* 2 */;

let c4;

let _asyncToGenerator = _asyncToGenerator_mod;
const JoinGuildSources = Constants.JoinGuildSources;
const jsx = Fragment.jsx;
const memoResult = react.memo(function LurkerServerPreviewJoinButton(guildId) {
  let closure_3;
  let loading;
  guildId = guildId.guildId;
  let joinSource = guildId.joinSource;
  loading = undefined;
  _asyncToGenerator = undefined;
  [loading, _asyncToGenerator] = react.useState(false);
  const items = [guildId, joinSource, loading];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let channel;
    let closure_0;
    let closure_2;
    let lurkingSourceForGuild;
    let v1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === joinSource) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp48 = first;
            if (!tmp48) {
              lurkingSourceForGuild = lurkingSourceForGuild.getLurkingSourceForGuild(guildId);
              let type;
              if (lurkingSourceForGuild != null) {
                type = lurkingSourceForGuild.type;
              }
              if (type === constants.DIRECTORY_ENTRY) {
                channel = channel.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const setHubProgressActionComplete = tmp(loading[7]).setHubProgressActionComplete;
                  const tmp31 = tmp(loading[7]);
                  guildId = channel.getGuildId();
                  const result = setHubProgressActionComplete(guildId, tmp(loading[8]).HubProgressStep.JOIN_GUILD);
                }
              }
              v0(true);
              c3 = 1;
              const obj5 = { source: joinSource };
              const obj6 = joinSource(loading[9]);
              joinSource = 2;
              c4 = 1;
              const obj7 = { value: obj6.joinGuild(guildId, obj5), done: false };
              return obj7;
            }
          }
        } else if (1 === joinSource) {
          c3 = 0;
          closure_128_3(false);
          throw loading;
        } else if (2 === joinSource) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj2 = joinSource(loading[9]);
            joinSource = 3;
            c4 = 1;
            const obj9 = { value: obj2.waitForGuild(closure_128_0), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_3(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_3(false);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp41) {
        loading = tmp41;
        if (0 === c3) {
          c4 = 3;
          throw tmp41;
        } else {
          joinSource = 1;
        }
      }
    }
  }), items);
  const Button = guildId(loading[10]).Button;
  const intl = guildId(loading[11]).intl;
  return <Button grow variant="primary" size="md" loading={loading} text={intl.string(guildId(loading[11]).t.RLch70)} onPress={callback} />;
});
let result = size.fileFinishedImporting("modules/lurker_mode/native/LurkerServerPreviewJoinButton.tsx");

export default memoResult;
