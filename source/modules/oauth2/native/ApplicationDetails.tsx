// Module ID: 9022
// Function ID: 70977
// Name: ApplicationDetailsEntry
// Dependencies: [31, 27, 33, 4130, 689, 8957, 9023, 9025, 21, 8955, 4074, 1212, 4652, 8959, 9027, 4094, 8310, 9029, 8173, 5459, 2]
// Exports: default

// Module 9022 (ApplicationDetailsEntry)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function ApplicationDetailsEntry(iconComponent) {
  iconComponent = iconComponent.iconComponent;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.entry };
  let iconComponentResult = null;
  if (null != iconComponent) {
    obj = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj);
  }
  const items = [iconComponentResult, ];
  obj = { variant: "text-sm/normal", color: "text-default", style: tmp.entryText, children: iconComponent.text };
  items[1] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj);
  obj.children = items;
  return closure_5(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { applicationDetails: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 8 }, entryText: { flex: 1 } };
_createForOfIteratorHelperLoose = { width: 16, height: 16, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.entryIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/oauth2/native/ApplicationDetails.tsx");

export default function ApplicationDetails(arg0) {
  let application;
  let approximateGuildCount;
  let connectedAccount;
  let disclosures;
  let isEmbeddedFlow;
  let redirectUri;
  let scopes;
  ({ application, scopes, redirectUri, approximateGuildCount, disclosures } = arg0);
  ({ isEmbeddedFlow, connectedAccount } = arg0);
  let obj = importDefault(21);
  const tmp = _createForOfIteratorHelperLoose();
  let obj1 = require(8955) /* items */;
  let joined = null;
  const securityMessage = obj1.getSecurityMessage(scopes);
  if (null != redirectUri) {
    if (!isEmbeddedFlow) {
      const _URL = URL;
      const uRL = new URL(redirectUri);
      const parts = uRL.href.split("/");
      const substr = parts.slice(0, 3);
      joined = substr.join("/");
      const str = uRL.href;
    }
  }
  while (true) {
    obj = { style: tmp.applicationDetails };
    let tmp12 = joined;
    let tmp13 = null;
    let tmp10 = closure_5;
    let tmp11 = View;
    if (null == joined) {
      break;
    } else {
      let tmp14 = callback;
      let tmp15 = ApplicationDetailsEntry;
      obj = {};
      let tmp16 = require;
      let tmp17 = dependencyMap;
      let num3 = 10;
      obj.iconComponent = require(4074) /* LinkIcon */.LinkIcon;
      let num4 = 11;
      let intl = require(1212) /* getSystemLocale */.intl;
      obj1 = { origin: joined };
      obj.text = intl.format(require(1212) /* getSystemLocale */.t["5k5OKD"], obj1);
      tmp13 = callback(ApplicationDetailsEntry, obj);
      break;
    }
    let items = [tmp13, , , , , , ];
    let tmp18 = callback;
    let tmp19 = ApplicationDetailsEntry;
    let obj2 = {};
    let tmp20 = require;
    let tmp21 = dependencyMap;
    let num5 = 12;
    obj2.iconComponent = require(4652) /* LockIcon */.LockIcon;
    let num6 = 13;
    let obj7 = require(8959) /* getApplicationDetailsText */;
    obj2.text = obj7.getApplicationDetailsText(application);
    items[1] = callback(ApplicationDetailsEntry, obj2);
    let tmp22 = null;
    if (null != connectedAccount) {
      let tmp23 = callback;
      let tmp24 = ApplicationDetailsEntry;
      let obj3 = {};
      let tmp25 = require;
      let tmp26 = dependencyMap;
      let num7 = 14;
      obj3.iconComponent = require(9027) /* HammerIcon */.HammerIcon;
      let num8 = 11;
      let intl2 = require(1212) /* getSystemLocale */.intl;
      obj3.text = intl2.string(require(1212) /* getSystemLocale */.t["8qui3M"]);
      tmp22 = callback(ApplicationDetailsEntry, obj3);
    }
    items[2] = tmp22;
    let tmp27 = callback;
    let tmp28 = ApplicationDetailsEntry;
    let obj4 = {};
    let tmp29 = require;
    let tmp30 = dependencyMap;
    let num9 = 15;
    obj4.iconComponent = require(4094) /* ClockIcon */.ClockIcon;
    let num10 = 11;
    let intl3 = require(1212) /* getSystemLocale */.intl;
    let obj5 = { date };
    obj4.text = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["+1bjc8"], obj5);
    items[3] = callback(ApplicationDetailsEntry, obj4);
    let num11 = 16;
    let tmp31 = null;
    if (scopes.includes(require(8310) /* set */.OAuth2Scopes.BOT)) {
      tmp31 = null;
      if (null != approximateGuildCount) {
        let tmp32 = callback;
        let tmp33 = ApplicationDetailsEntry;
        let obj6 = {};
        let tmp34 = require;
        let tmp35 = dependencyMap;
        let num12 = 17;
        obj6.iconComponent = require(9029) /* RobotIcon */.RobotIcon;
        let intl4 = require(1212) /* getSystemLocale */.intl;
        obj7 = { guildCount: approximateGuildCount };
        obj6.text = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.UHGHSP, obj7);
        tmp31 = callback(ApplicationDetailsEntry, obj6);
      }
    }
    items[4] = tmp31;
    let tmp36 = callback;
    let tmp37 = ApplicationDetailsEntry;
    let obj8 = {};
    let tmp38 = require;
    let tmp39 = dependencyMap;
    let num13 = 18;
    obj8.iconComponent = require(8173) /* ShieldIcon */.ShieldIcon;
    obj8.text = securityMessage;
    items[5] = callback(ApplicationDetailsEntry, obj8);
    let mapped = null;
    if (null != disclosures) {
      mapped = disclosures.map((toFixed) => {
        let obj = outer1_0(outer1_2[5]);
        const textForDisclosure = obj.getTextForDisclosure(toFixed);
        if (outer1_0(outer1_2[5]).ApplicationDisclosure.IP_LOCATION === toFixed) {
          obj = { iconComponent: outer1_0(outer1_2[6]).GlobeEarthIcon };
          let tmp4 = obj;
        } else {
          tmp4 = null;
          if (outer1_0(outer1_2[5]).ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
            obj = { iconComponent: outer1_0(outer1_2[7]).EmbedIcon };
            tmp4 = obj;
          }
        }
        let tmp9 = null;
        if (null != tmp4) {
          tmp9 = null;
          if (null != textForDisclosure) {
            const obj1 = { text: textForDisclosure };
            const merged = Object.assign(tmp4);
            tmp9 = outer1_4(outer1_7, obj1, toFixed.toFixed());
          }
        }
        return tmp9;
      });
    }
    items[6] = mapped;
    obj.children = items;
    return tmp10(tmp11, obj);
  }
};
