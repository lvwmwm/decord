// Module ID: 15306
// Function ID: 116396
// Name: ChannelDetailsLinkedLobby
// Dependencies: []
// Exports: default

// Module 15306 (ChannelDetailsLinkedLobby)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const HelpdeskArticles = arg1(dependencyMap[2]).HelpdeskArticles;
({ Fragment: closure_5, jsxs: closure_6, jsx: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { alignItems: "center" } };
obj = { alignSelf: false, fontSize: false, marginBottom: false, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
obj.divider = obj;
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx");

export default function ChannelDetailsLinkedLobby(channel) {
  channel = channel.channel;
  let divider = callback2();
  let obj = arg1(dependencyMap[6]);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (null != linkedLobby) {
    application_id = linkedLobby.application_id;
  }
  let getOrFetchApplication = obj.useGetOrFetchApplication(application_id);
  if (null == channel.linkedLobby) {
    return null;
  } else {
    obj = {};
    const items = [divider.container, channel.containerStyle];
    obj.style = items;
    let tmp5 = callback;
    let TextWithIOSLinkWorkaround = arg1(dependencyMap[7]).TextWithIOSLinkWorkaround;
    obj = {};
    let obj1 = {};
    if (null != getOrFetchApplication) {
      const intl2 = arg1(dependencyMap[8]).intl;
      const obj2 = { applicationName: getOrFetchApplication.name };
      let formatResult = intl2.format(arg1(dependencyMap[8]).t.SgxMJs, obj2);
    } else {
      const intl = arg1(dependencyMap[8]).intl;
      formatResult = intl.string(arg1(dependencyMap[8]).t.yQqVss);
    }
    const items1 = [formatResult, "  \u2022  ", ];
    const intl3 = arg1(dependencyMap[8]).intl;
    const obj3 = {};
    getOrFetchApplication = importDefault(dependencyMap[9]).getArticleURL(HelpdeskArticles.LINKED_LOBBIES);
    obj3.helpdeskArticle = getOrFetchApplication;
    items1[2] = intl3.format(arg1(dependencyMap[8]).t.BPDKoA, obj3);
    obj1.children = items1;
    obj1 = tmp3(closure_5, obj1);
    obj.children = obj1;
    const obj6 = importDefault(dependencyMap[9]);
    const tmp4 = View;
    const tmp8 = closure_5;
    obj = [, ];
    obj[0] = tmp5(TextWithIOSLinkWorkaround, obj);
    tmp5 = callback;
    TextWithIOSLinkWorkaround = View;
    const obj4 = {};
    divider = divider.divider;
    obj4.style = divider;
    obj[1] = callback(View, obj4);
    obj.children = obj;
    closure_6(tmp4, obj);
    const tmp5Result = tmp5(TextWithIOSLinkWorkaround, obj);
  }
};
