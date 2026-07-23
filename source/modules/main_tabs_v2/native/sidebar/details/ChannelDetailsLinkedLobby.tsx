// Module ID: 15423
// Function ID: 118570
// Name: ChannelDetailsLinkedLobby
// Dependencies: [31, 27, 653, 33, 4130, 689, 5470, 5459, 1212, 1920, 2]
// Exports: default

// Module 15423 (ChannelDetailsLinkedLobby)
import "result";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Fragment: closure_5, jsxs: closure_6, jsx: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignItems: "center" } };
_createForOfIteratorHelperLoose = { height: 1, width: 48, marginTop: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.divider = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx");

export default function ChannelDetailsLinkedLobby(channel) {
  channel = channel.channel;
  let divider = _createForOfIteratorHelperLoose();
  let obj = require(5470) /* useGetOrFetchApplications */;
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
    let TextWithIOSLinkWorkaround = require(5459) /* findLinks */.TextWithIOSLinkWorkaround;
    obj = { variant: "text-sm/normal", color: "text-default" };
    let obj1 = {};
    if (null != getOrFetchApplication) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj2 = { applicationName: getOrFetchApplication.name };
      let formatResult = intl2.format(require(1212) /* getSystemLocale */.t.SgxMJs, obj2);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      formatResult = intl.string(require(1212) /* getSystemLocale */.t.yQqVss);
    }
    const items1 = [formatResult, "  \u2022  ", ];
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj3 = {};
    getOrFetchApplication = importDefault(1920).getArticleURL(HelpdeskArticles.LINKED_LOBBIES);
    obj3.helpdeskArticle = getOrFetchApplication;
    items1[2] = intl3.format(require(1212) /* getSystemLocale */.t.BPDKoA, obj3);
    obj1.children = items1;
    obj1 = tmp3(closure_5, obj1);
    obj.children = obj1;
    const obj6 = importDefault(1920);
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
