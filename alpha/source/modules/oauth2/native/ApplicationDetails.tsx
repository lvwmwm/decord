// Module ID: 8725
// Function ID: 8726
// Name: ApplicationDetails
// Dependencies: [19, 17, 21, 4829, 576, 8511, 8346, 8726, 11, 8509, 4771, 1115, 5402, 8513, 8728, 4791, 7779, 8730, 8697, 4825, 2]
// Exports: default

// Module 8725 (ApplicationDetails)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ClockIcon from "ClockIcon" /* 4791 */;
import Text_Text from "Text/Text" /* 4825 */;
import LockIcon from "LockIcon" /* 5402 */;
import OAuth2Scopes from "OAuth2Scopes" /* 7779 */;
import scopes from "scopes" /* 8509 */;
import disclosures from "disclosures" /* 8511 */;
import Utils from "Utils" /* 8513 */;
import ShieldIcon from "ShieldIcon" /* 8697 */;
import noop from "module_19" /* 19 */;

require = fn;
function ApplicationDetailsEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = closure_6();
  const obj = { style: tmp.entry, children: null };
  let iconComponentResult = null;
  if (null != iconComponent) {
    const obj2 = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj2);
  }
  const items = [iconComponentResult, React4(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", style: tmp.entryText, children: children.text })];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let obj2 = { applicationDetails: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 8 }, entryText: { flex: 1 }, entryIcon: null };
let size = { width: 16, height: 16, tintColor: nativeDefault.colors.TEXT_MUTED };
obj2.entryIcon = size;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationDetails.tsx");

export default function ApplicationDetails(arg0) {
  ({ application, scopes, redirectUri, approximateGuildCount, disclosures } = arg0);
  ({ isEmbeddedFlow, connectedAccount } = arg0);
  const tmp2 = closure_6();
  const date = new Date(SnowflakeUtilsDefault.extractTimestamp(application.id));
  let joined = null;
  const securityMessage = scopes.getSecurityMessage(scopes);
  if (null != redirectUri) {
    if (!isEmbeddedFlow) {
      try {
        const _URL = URL;
        const uRL = new URL(redirectUri);
        const parts = uRL.href.split("/");
        const substr = parts.slice(0, 3);
        joined = substr.join("/");
      } catch (err) {
        joined = tmp;
      }
    }
  }
  let obj3 = { style: tmp2.applicationDetails, children: null };
  let tmp15 = null;
  if (null != joined) {
    let obj4 = { iconComponent: tmp5(4771).LinkIcon, text: null };
    const intl = tmp5(1115).intl;
    const obj5 = { origin: joined };
    obj4.text = intl.format(tmp5(1115).t["5k5OKD"], obj5);
    tmp15 = React4(ApplicationDetailsEntry, obj4);
  }
  const items = [tmp15, , , , , , ];
  const obj6 = { iconComponent: LockIcon.LockIcon, text: null };
  const tmp13 = hasOwnProperty;
  const tmp14 = View;
  obj6.text = Utils.getApplicationDetailsText(application);
  items[1] = React4(ApplicationDetailsEntry, obj6);
  let tmp18Result = null;
  if (null != connectedAccount) {
    const obj7 = { iconComponent: tmp5(8728).HammerIcon, text: null };
    const intl2 = tmp5(1115).intl;
    obj7.text = intl2.string(tmp5(1115).t["8qui3M"]);
    tmp18Result = tmp18(tmp19, obj7);
  }
  items[2] = tmp18Result;
  const obj8 = { iconComponent: ClockIcon.ClockIcon, text: null };
  const intl3 = tmp5(1115).intl;
  obj8.text = intl3.formatToPlainString(util.t["+1bjc8"], { date });
  items[3] = React4(ApplicationDetailsEntry, obj8);
  let tmp18Result2 = null;
  if (scopes.includes(OAuth2Scopes.OAuth2Scopes.BOT)) {
    tmp18Result2 = null;
    if (null != approximateGuildCount) {
      const obj9 = { iconComponent: tmp5(8730).RobotIcon, text: null };
      const intl4 = tmp5(1115).intl;
      const obj10 = { guildCount: approximateGuildCount };
      obj9.text = intl4.formatToPlainString(tmp5(1115).t.UHGHSP, obj10);
      tmp18Result2 = tmp18(tmp19, obj9);
    }
  }
  items[4] = tmp18Result2;
  const tmp5Result = Utils;
  items[5] = React4(ApplicationDetailsEntry, { iconComponent: ShieldIcon.ShieldIcon, text: securityMessage });
  let mapped = null;
  if (null != disclosures) {
    mapped = disclosures.map((toFixed) => {
      const textForDisclosure = disclosures.getTextForDisclosure(toFixed);
      if (disclosures.ApplicationDisclosure.IP_LOCATION === toFixed) {
        const obj2 = { iconComponent: tmp(8346).GlobeEarthIcon };
        let tmp4 = obj2;
      } else {
        tmp4 = null;
        if (tmp(8511).ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
          const obj3 = { iconComponent: tmp(8726).EmbedIcon };
          tmp4 = obj3;
        }
      }
      let tmp5 = null;
      if (null != tmp4) {
        tmp5 = null;
        if (null != textForDisclosure) {
          const obj4 = { text: textForDisclosure };
          const merged = Object.assign(tmp4);
          tmp5 = closure_1_4(ApplicationDetailsEntry, obj4, toFixed.toFixed());
        }
      }
      return tmp5;
    });
  }
  items[6] = mapped;
  obj3.children = items;
  return tmp13(tmp14, obj3);
};
