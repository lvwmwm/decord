// Module ID: 9014
// Function ID: 70912
// Name: ApplicationDetailsEntry
// Dependencies: []
// Exports: default

// Module 9014 (ApplicationDetailsEntry)
function ApplicationDetailsEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = callback2();
  let obj = { style: tmp.entry };
  let iconComponentResult = null;
  if (null != iconComponent) {
    obj = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj);
  }
  const items = [iconComponentResult, ];
  obj = { style: tmp.entryText, children: children.text };
  items[1] = callback(arg1(dependencyMap[19]).TextWithIOSLinkWorkaround, obj);
  obj.children = items;
  return closure_5(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { applicationDetails: {}, entry: {}, entryText: { flex: 1 } };
obj = { tintColor: importDefault(dependencyMap[4]).colors.TEXT_MUTED };
obj.entryIcon = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/oauth2/native/ApplicationDetails.tsx");

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
  let obj = importDefault(dependencyMap[8]);
  const tmp = callback2();
  let obj1 = arg1(dependencyMap[9]);
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
      let tmp16 = arg1;
      let tmp17 = dependencyMap;
      let num3 = 10;
      obj.iconComponent = arg1(dependencyMap[10]).LinkIcon;
      let num4 = 11;
      let intl = arg1(dependencyMap[11]).intl;
      obj1 = { origin: joined };
      obj.text = intl.format(arg1(dependencyMap[11]).t.5k5OKD, obj1);
      tmp13 = callback(ApplicationDetailsEntry, obj);
      // break
    }
    let items = [tmp13, , , , , , ];
    let tmp18 = callback;
    let tmp19 = ApplicationDetailsEntry;
    let obj2 = {};
    let tmp20 = arg1;
    let tmp21 = dependencyMap;
    let num5 = 12;
    obj2.iconComponent = arg1(dependencyMap[12]).LockIcon;
    let num6 = 13;
    let obj7 = arg1(dependencyMap[13]);
    obj2.text = obj7.getApplicationDetailsText(application);
    items[1] = callback(ApplicationDetailsEntry, obj2);
    let tmp22 = null;
    if (null != connectedAccount) {
      let tmp23 = callback;
      let tmp24 = ApplicationDetailsEntry;
      let obj3 = {};
      let tmp25 = arg1;
      let tmp26 = dependencyMap;
      let num7 = 14;
      obj3.iconComponent = arg1(dependencyMap[14]).HammerIcon;
      let num8 = 11;
      let intl2 = arg1(dependencyMap[11]).intl;
      obj3.text = intl2.string(arg1(dependencyMap[11]).t.8qui3M);
      tmp22 = callback(ApplicationDetailsEntry, obj3);
    }
    items[2] = tmp22;
    let tmp27 = callback;
    let tmp28 = ApplicationDetailsEntry;
    let obj4 = {};
    let tmp29 = arg1;
    let tmp30 = dependencyMap;
    let num9 = 15;
    obj4.iconComponent = arg1(dependencyMap[15]).ClockIcon;
    let num10 = 11;
    let intl3 = arg1(dependencyMap[11]).intl;
    let obj5 = { date };
    obj4.text = intl3.formatToPlainString(arg1(dependencyMap[11]).t.+1bjc8, obj5);
    items[3] = callback(ApplicationDetailsEntry, obj4);
    let num11 = 16;
    let tmp31 = null;
    if (scopes.includes(arg1(dependencyMap[16]).OAuth2Scopes.BOT)) {
      tmp31 = null;
      if (null != approximateGuildCount) {
        let tmp32 = callback;
        let tmp33 = ApplicationDetailsEntry;
        let obj6 = {};
        let tmp34 = arg1;
        let tmp35 = dependencyMap;
        let num12 = 17;
        obj6.iconComponent = arg1(dependencyMap[17]).RobotIcon;
        let intl4 = arg1(dependencyMap[11]).intl;
        obj7 = { guildCount: approximateGuildCount };
        obj6.text = intl4.formatToPlainString(arg1(dependencyMap[11]).t.UHGHSP, obj7);
        tmp31 = callback(ApplicationDetailsEntry, obj6);
      }
    }
    items[4] = tmp31;
    let tmp36 = callback;
    let tmp37 = ApplicationDetailsEntry;
    let obj8 = {};
    let tmp38 = arg1;
    let tmp39 = dependencyMap;
    let num13 = 18;
    obj8.iconComponent = arg1(dependencyMap[18]).ShieldIcon;
    obj8.text = securityMessage;
    items[5] = callback(ApplicationDetailsEntry, obj8);
    let mapped = null;
    if (null != disclosures) {
      mapped = disclosures.map((toFixed) => {
        let obj = callback(closure_2[5]);
        const textForDisclosure = obj.getTextForDisclosure(toFixed);
        if (callback(closure_2[5]).ApplicationDisclosure.IP_LOCATION === toFixed) {
          obj = { iconComponent: callback(closure_2[6]).GlobeEarthIcon };
          let tmp4 = obj;
        } else {
          tmp4 = null;
          if (callback(closure_2[5]).ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
            obj = { iconComponent: callback(closure_2[7]).EmbedIcon };
            tmp4 = obj;
          }
        }
        let tmp9 = null;
        if (null != tmp4) {
          tmp9 = null;
          if (null != textForDisclosure) {
            const obj1 = { text: textForDisclosure };
            const merged = Object.assign(tmp4);
            tmp9 = callback2(closure_7, obj1, toFixed.toFixed());
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
