// Module ID: 14480
// Function ID: 14481
// Name: UserSettingsAuthedAppPermissions
// Dependencies: [19, 17, 21, 4836, 8517, 7787, 1115, 4832, 4792, 576, 8519, 14474, 2]
// Exports: default

// Module 14480 (UserSettingsAuthedAppPermissions)
import Text_Text from "Text/Text" /* 4832 */;
import disclosures from "disclosures" /* 8519 */;
import UserSettingsAuthedApps from "UserSettingsAuthedApps" /* 14474 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ ScrollView: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { paddingHorizontal: 16, paddingVertical: 24 }, permissionContainer: { flexDirection: "row", marginTop: 8 }, permissionIcon: { marginTop: 1 }, permissionText: { flexShrink: 1, marginLeft: 12 } });
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppPermissions.tsx");

export default function UserSettingsAuthedAppPermissions(oauth2Token) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c1;
  let c2;
  let c3;
  oauth2Token = oauth2Token.oauth2Token;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  const tmp = closure_7();
  let closure_0 = tmp;
  ({ application: c1, scopes: c2, disclosures: c3 } = oauth2Token);
  let obj = {
    contentContainerStyle: tmp.container,
    children: (() => {
      let intl2;
      let items = [];
      const iter = _undefined2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let push = items.push;
        let tmp4 = items;
        let obj = items(_undefined2[4]);
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, obj.getScopeNames(nextResult, _undefined2), 0);
        let applyResult = HermesBuiltin.apply(push, items1, items);
        if (nextResult === items(_undefined2[5]).OAuth2Scopes.APPLICATIONS_COMMANDS) {
          let push2 = items.push;
          let intl = items(_undefined2[6]).intl;
          let push2Result = push2(intl.string(items(_undefined2[6]).t.Ls2XRq));
        }
        continue;
      }
      let obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: _undefined.name };
      const children = [closure_1_5(items(_undefined2[7]).Text, obj2), , , ];
      let obj3 = { variant: "heading-sm/semibold", color: "text-default", children: intl2.string(items(_undefined2[6]).t.xrmhRX) };
      const Text = items(_undefined2[7]).Text;
      intl2 = items(_undefined2[6]).intl;
      children[1] = closure_1_5(Text, obj3);
      children[2] = items.map((children, index) => {
        const obj = { style: items.permissionContainer, children: items };
        const obj2 = { style: items.permissionIcon, size: "xs", color: c1(c2[9]).colors.STATUS_POSITIVE };
        const CircleCheckIcon = items(c2[8]).CircleCheckIcon;
        items = [closure_2_5(CircleCheckIcon, obj2), ];
        const obj3 = { style: items.permissionText, variant: "text-sm/normal", color: "text-default", children };
        items[1] = closure_2_5(items(c2[7]).Text, obj3);
        return closure_2_6(closure_2_4, obj, index);
      });
      let mapped;
      const arr4 = _undefined3;
      const tmp21 = closure_1_6;
      const tmp22 = closure_1_4;
      if (_undefined3 != null) {
        mapped = arr4.map((disclosure, index) => {
          const obj = disclosures;
          const textForDisclosure = obj.getTextForDisclosure(disclosure);
          let tmp4 = null;
          if (null != textForDisclosure) {
            const obj2 = { style: items.permissionContainer, children: items };
            const obj3 = { style: items.permissionIcon, disclosure };
            items = [hasOwnProperty(UserSettingsAuthedApps.DisclosureIcon, obj3), ];
            const obj4 = { style: items.permissionText, variant: "text-sm/normal", children: textForDisclosure };
            items[1] = hasOwnProperty(Text_Text.Text, obj4);
            tmp4 = metroRequire(React3, obj2, index + items.length);
          }
          return tmp4;
        });
      }
      children[3] = mapped;
      return tmp21(tmp22, { children });
    })()
  };
  return closure_5(c3, obj);
};
