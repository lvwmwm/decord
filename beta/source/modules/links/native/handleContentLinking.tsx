// Module ID: 10182
// Function ID: 10183
// Name: handleContentLinking
// Dependencies: [5, 6932, 1072, 6744, 7421, 1099, 10183, 10184, 2]
// Exports: default

// Module 10182 (handleContentLinking)
import Constants from "Constants" /* 1072 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 6932 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, channelId, conversationId, guildId, messageId, navigationReplace;

let obj = function _handleContentLinking() {
  obj = _asyncToGenerator(async (guildId) => {
    let c3 = 0;
    let c4 = 0;
    const iter = (async function(arg0, value) {
      let c0;
      let c1;
      let c3;
      let c5;
      let tmp57;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let safe;
          let waitForConnection;
          let closure_10;
          let skipMessageFetch;
          let isAppStartupNavigation;
          c4 = 2;
          if (0 === messageId) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              let closure_1 = tmp;
              guildId = undefined;
              channelId = undefined;
              c2 = undefined;
              conversationId = undefined;
              ({ guildId: c0, channelId: c1, navigationSettings: c2, messageId: c3, summaryId: c4, conversationId: c5 } = closure_0);
              safe = undefined;
              navigationReplace = undefined;
              waitForConnection = undefined;
              closure_10 = undefined;
              skipMessageFetch = undefined;
              isAppStartupNavigation = undefined;
              messageId = 1;
              c4 = 1;
              return { value: "flexDirection", done: true };
            }
          } else {
            if (1 === messageId) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                const obj13 = closure_130_1(closure_130_2[3]);
                obj13.popAll();
                safe = c2.safe;
                navigationReplace = c2.navigationReplace;
                const tmp6 = undefined === navigationReplace || navigationReplace;
                navigationReplace = tmp6;
                waitForConnection = c2.waitForConnection;
                closure_10 = undefined === waitForConnection || waitForConnection;
                skipMessageFetch = c2.skipMessageFetch;
                isAppStartupNavigation = c2.isAppStartupNavigation;
                const tmp10 = undefined === waitForConnection || waitForConnection;
                const tmp15 = closure_10;
                if (tmp15) {
                  if (closure_130_6 != null) {
                    closure_130_6();
                  }
                  const self = this;
                  const self2 = this;
                  messageId = 2;
                  c4 = 1;
                  const obj7 = {
                    value: new Promise((arg0, arg1) => {
                                  let closure_0 = arg0;
                                  let closure_1 = arg1;
                                  function o() {
                                    const error = new Error("superseded");
                                    return closure_1(error);
                                  }
                                  closure_4(() => {
                                    c6 = null;
                                    closure_0();
                                  });
                                }),
                    done: false
                  };
                  return obj7;
                }
              }
            } else {
              if (2 === messageId) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              }
              if (null != channelId) {
                if (null != c4) {
                  const obj5 = closure_130_1(closure_130_2[6]);
                  obj5.setSelectedSummary(channelId, c4);
                }
                const tmp41 = null != conversationId && null != guildId && null != messageId;
                if (tmp41) {
                  const obj9 = { guildId, channelId, conversationId, messageId };
                  closure_130_1(closure_130_2[7])(obj9);
                }
              }
              c4 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
            if (safe) {
              messageId = 3;
              c4 = 1;
              const obj10 = { navigationReplace, openChannel: true, skipMessageFetch, isAppStartupNavigation };
              const obj11 = { value: tmp57(closure_130_5.CHANNEL(guildId, channelId, messageId), obj10), done: false };
              tmp57 = closure_130_1(closure_130_2[4]);
              return obj11;
            } else {
              const obj12 = { navigationReplace, openChannel: true, skipMessageFetch, isAppStartupNavigation };
              const obj3 = closure_130_0(closure_130_2[5]);
              obj3.transitionTo(closure_130_5.CHANNEL(guildId, channelId, messageId), obj12);
            }
          }
        } catch (tmp72) {
          c4 = 3;
          throw tmp72;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
PostConnectionCallbackStore.addPostConnectionCallback;
const Routes = Constants.Routes;
let c6 = null;
const result = size.fileFinishedImporting("modules/links/native/handleContentLinking.tsx");

export default function handleContentLinking() {
  return obj(...arguments);
};
