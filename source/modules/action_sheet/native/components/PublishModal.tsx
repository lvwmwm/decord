// Module ID: 9891
// Function ID: 76511
// Name: PublishModal
// Dependencies: [57, 31, 27, 33, 4130, 4973, 9892, 1273, 1212, 2]
// Exports: default

// Module 9891 (PublishModal)
import _slicedToArray from "_slicedToArray";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ View: closure_4, ActivityIndicator: closure_5 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = { alertContainer: { paddingTop: 16 }, alertLoading: { paddingTop: 62, paddingBottom: 46 } };
_createForOfIteratorHelperLoose = { marginBottom: 16, fontSize: 16, lineHeight: 24, color: require("result").DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
_createForOfIteratorHelperLoose.alertBodyText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/action_sheet/native/components/PublishModal.tsx");

export default function PublishModal(channelId) {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(importDefault(9892)(channelId.channelId), 2);
  const first = tmp2[0];
  if (tmp2[1]) {
    let obj = { style: tmp.alertLoading };
    obj = { animating: true };
    obj.children = <closure_5 animating />;
    return <closure_4 animating />;
  } else {
    let guildsFollowing;
    if (null != first) {
      guildsFollowing = first.guildsFollowing;
    }
    let tmp6 = null != guildsFollowing;
    if (tmp6) {
      let guildsFollowing1;
      if (null != first) {
        guildsFollowing1 = first.guildsFollowing;
      }
      tmp6 = guildsFollowing1 > 0;
    }
    obj = { style: tmp.alertContainer };
    const obj1 = { style: tmp.alertBodyText };
    const intl = require(1212) /* getSystemLocale */.intl;
    if (tmp6) {
      const obj2 = {};
      let guildsFollowing2;
      if (null != first) {
        guildsFollowing2 = first.guildsFollowing;
      }
      let num3 = 0;
      if (null != guildsFollowing2) {
        num3 = guildsFollowing2;
      }
      obj2.numGuildsFollowing = num3;
      obj1.children = intl.format(tmp12(1212).t.GCGrNP, obj2);
      let tmp14 = obj1;
    } else {
      obj1.children = intl.string(tmp12(1212).t["8FpqOs"]);
      tmp14 = obj1;
    }
    obj.children = jsx(require(1273) /* Button */.LegacyText, tmp14);
    return <closure_4 style={tmp.alertContainer} />;
  }
};
